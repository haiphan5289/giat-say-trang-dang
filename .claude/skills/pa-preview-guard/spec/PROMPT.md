# Execution Workflow — Build Doctor

## Prerequisites

Skill này chạy **SAU KHI** generate code thành công (section, component, data file, etc.)

## Stage 1: Scan All Build Errors

```bash
cd web && npx tsc --noEmit 2>&1
```

Parse output và extract:
- File path + line number + column
- Error message
- TS error code (e.g., TS2322, TS2339, TS2307)

## Stage 2: Classify Errors

Với mỗi error, match với các patterns trong ERROR_PATTERNS.md:

| Error Pattern | Category | Auto-fixable |
|---|---|---|
| `Type 'X' is not assignable to type 'Y'` | `type_mismatch` | ✅ Yes (if union type) |
| `Cannot find name 'X'` | `missing_import` | ✅ Yes |
| `Module '"X"' has no exported member 'Y'` | `wrong_import` | ✅ Yes |
| `Property 'X' does not exist on type 'Y'` | `wrong_prop` | ⚠️ Depends |
| `Expected N arguments, but got M` | `missing_prop` | ✅ Yes |
| `Object is possibly 'undefined'` | `null_safety` | ✅ Yes |
| `'X' is declared but its value is never read` | `unused_variable` | ✅ Yes (remove import) |
| `React Hook "useX" cannot be called...` | `nextjs_rule` | ✅ Yes (add "use client") |
| `Property 'alt' is missing` | `image_prop` | ✅ Yes |

## Stage 3: Auto-Fix by Category (see FIX_STRATEGIES.md)

Priority order (fix in this sequence to avoid cascade errors):

1. **Missing/wrong imports** — resolves many downstream errors
2. **Unused imports** — clean up dead imports
3. **Next.js rule violations** — add "use client" where needed
4. **Missing required props** — inject required props with defaults
5. **Type mismatches** — cast or correct the type
6. **Null safety** — add optional chaining or null check
7. **Wrong prop name** — rename to correct prop

## Stage 4: Re-validate

```bash
cd web && npx tsc --noEmit 2>&1
```

- If 0 errors → SUCCESS
- If error count decreased → REPEAT Stage 2–3 (max 3 iterations)
- If error count unchanged → STOP, report remaining errors for manual fix

## Stage 5: Report Results

Output structured report:

```
✅ Build Doctor Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Initial errors: 8
🔧 Auto-fixed: 7
❌ Remaining: 1

Fixed breakdown:
  ✅ Missing imports (2 files):
     - Gallery.tsx (added 'import TiltCard from "@/components/ui/TiltCard"')
     - NewsSection.tsx (added 'import { ArrowRight } from "lucide-react"')

  ✅ Type mismatches (3 files):
     - ProcessSteps.tsx:116 (variant "secondary" → "ghost")
     - HeroBanner.tsx:87 (href number → string)

  ✅ Next.js rule (2 files):
     - BranchCarousel.tsx (added "use client" — uses useState)

Manual fixes needed:
  ❌ Gallery.tsx:45
     Error: Generic type constraint — complex refactor
     Suggestion: Add explicit type annotation
```

## Safety Guardrails

1. **Never delete user code** — only add/modify
2. **Max 3 iterations** — prevent infinite loop
3. **Preserve formatting** — match existing code style (single/double quotes, spacing)
4. **Flag uncertain fixes** — if confidence < 70%, skip and report
5. **Only modify files inside `web/src/`** — never touch config files
