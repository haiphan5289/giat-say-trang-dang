# Guardrails — Build Doctor

Safety rules để tránh làm hỏng code khi auto-fix.

---

## Rule 1: Never Delete User Code

```
❌ PROHIBITED: Xóa bất kỳ logic nào của user.
✅ ALLOWED: Chỉ ADD hoặc MODIFY để fix errors.
```

---

## Rule 2: Preserve Formatting & Style

```
❌ PROHIBITED: Reformat entire file, change quote style (single → double), add/remove blank lines.
✅ ALLOWED: Match existing formatting khi insert code.
```

Check existing style before inserting:
- Single quotes `'` or double quotes `"` → match the file
- 2-space or 4-space indent → match the file
- Semicolons or no semicolons → match the file

---

## Rule 3: Verify Before Insert

```
❌ PROHIBITED: Insert import/prop without checking if already present.
✅ ALLOWED: Check for existing import before adding.
```

```python
# Before adding import
if 'import TiltCard' not in file_content:
    add_import(...)
else:
    skip  # Already imported

# Before adding "use client"
if '"use client"' not in file_lines[0]:
    add_use_client()
```

---

## Rule 4: Confidence Threshold

```
❌ PROHIBITED: Auto-fix errors with confidence < 70%
✅ ALLOWED: Auto-fix only when confidence ≥ 70%
```

| Confidence | Action |
|---|---|
| 90–100% | Auto-fix immediately |
| 70–89% | Auto-fix + log warning |
| 50–69% | Suggest fix, DON'T apply |
| < 50% | Skip, report for manual |

---

## Rule 5: Max Iterations Limit

```
❌ PROHIBITED: Infinite loop fixing → re-validating → fixing same errors
✅ ALLOWED: Max 3 iterations then stop and report
```

---

## Rule 6: Only Modify Files Inside `web/src/`

```
❌ PROHIBITED: Touch next.config.ts, tsconfig.json, package.json, tailwind.config.ts, globals.css
✅ ALLOWED: Only .tsx and .ts files inside web/src/
```

Config files changes are a separate concern — never auto-modify.

---

## Rule 7: Never Change Business Logic or Content

```
❌ PROHIBITED: Change phone numbers, pricing, Vietnamese text content, href URLs
✅ ALLOWED: Only fix TypeScript types and structural issues
```

The phone number `0938432178`, price `25k/kg`, Vietnamese copy — these are domain content. Never modify.

---

## Rule 8: "use client" — Only When Hooks Are Actually Used

```
❌ PROHIBITED: Add "use client" to every file pre-emptively
✅ ALLOWED: Add only when the file actually uses useState, useEffect, useRef, useCallback, 
   event handlers (onClick, onChange, onMouseMove), or browser APIs (window, document)
```

---

## Rule 9: Validate After Each Fix

```
❌ PROHIBITED: Apply all fixes blindly then validate once at the end
✅ ALLOWED: Apply by category → validate → apply next category
```

---

## Rule 10: Report All Actions

```
❌ PROHIBITED: Silently modify files
✅ ALLOWED: Log every file modification with before/after snippet
```

```
✅ ProcessSteps.tsx:116
   Before: <CTAButton variant="secondary">
   After:  <CTAButton variant="ghost">
   Reason: "secondary" is not a valid variant — nearest match is "ghost"
```

---

## Red Flags — Stop Immediately

If any of these occur, **STOP** and report for manual intervention:

```
🚨 Same errors persist after 2 iterations
🚨 Error count increases after a fix
🚨 Fix would affect more than 20 lines at once
🚨 Fix requires changing a shared type/interface definition
🚨 Confidence score < 50% for the majority of errors
🚨 Error involves a config file (next.config.ts, tsconfig.json)
```

---

## Prohibited Patterns Summary

| Never | Why |
|---|---|
| Delete user code | Data loss |
| Reformat entire files | Unwanted diff noise |
| Modify phone/price/copy content | Domain corruption |
| Fix with confidence < 70% | Risk of wrong fix |
| Touch config files | Could break build system |
| Add "use client" pre-emptively | Disables server-side rendering |
| Exceed MAX_ITERATIONS (3) | Infinite loops |
| Skip validation between batches | Compound errors |
