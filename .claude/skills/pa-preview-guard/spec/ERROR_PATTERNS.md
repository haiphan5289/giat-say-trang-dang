# Error Patterns & Classification — TypeScript / Next.js

## Pattern Matching Rules

Each error from `npx tsc --noEmit` follows a standard format:
```
web/src/components/sections/HeroBanner.tsx(45,12): error TS2322: Type 'number' is not assignable to type 'string'.
```

---

## 1. Type Mismatch (TS2322)

### Pattern
```
error TS2322: Type '<actual>' is not assignable to type '<expected>'
```

### Common Cases in This Project

| Situation | Actual | Expected | Fix |
|---|---|---|---|
| CTAButton variant wrong | `"secondary"` | `"primary" \| "white" \| "ghost"` | Change to `"ghost"` |
| CTAButton size wrong | `"xl"` | `"sm" \| "md" \| "lg"` | Change to `"lg"` |
| SectionHeader title string | `string` | `ReactNode` | Wrap in `<></>` |
| Image priority wrong | `1` | `boolean` | Change to `true` |
| number passed as string | `number` | `string` | Wrap in `String(...)` |

### Extracted Info
```yaml
category: type_mismatch
ts_code: TS2322
file: HeroBanner.tsx
line: 87
actual_type: '"secondary"'
expected_type: '"primary" | "white" | "ghost"'
auto_fixable: true (if union type — pick nearest valid option)
```

---

## 2. Missing Import / Cannot Find Name (TS2304, TS2552)

### Patterns
```
error TS2304: Cannot find name 'TiltCard'
error TS2304: Cannot find name 'Phone'
error TS2552: Cannot find name 'X'. Did you mean 'Y'?
```

### Symbol → Import Mapping for This Project

| Symbol | Import |
|---|---|
| `CTAButton` | `import CTAButton from "@/components/ui/CTAButton"` |
| `SectionHeader` | `import SectionHeader from "@/components/ui/SectionHeader"` |
| `TiltCard` | `import TiltCard from "@/components/ui/TiltCard"` |
| `Image` | `import Image from "next/image"` |
| `Phone`, `MessageCircle`, `ArrowRight`, etc. | `import { ... } from "lucide-react"` |
| `useState`, `useEffect`, `useRef`, `useCallback` | `import { ... } from "react"` |
| `ReactNode`, `FC`, `MouseEvent` | `import { ... } from "react"` |
| `Link` | `import Link from "next/link"` |

### Extracted Info
```yaml
category: missing_import
ts_code: TS2304
file: Gallery.tsx
line: 5
symbol: TiltCard
required_import: 'import TiltCard from "@/components/ui/TiltCard"'
auto_fixable: true
```

---

## 3. Wrong Export Member (TS2305)

### Pattern
```
error TS2305: Module '"lucide-react"' has no exported member 'PhoneIcon'
```

### Common Typos in This Project

| Wrong | Correct |
|---|---|
| `PhoneIcon` | `Phone` |
| `MessageIcon` | `MessageCircle` |
| `ArrowRightIcon` | `ArrowRight` |
| `CheckIcon` | `CheckCircle` |
| `PauseIcon` | `Pause` |

### Extracted Info
```yaml
category: wrong_import
ts_code: TS2305
file: HeroBanner.tsx
line: 5
module: lucide-react
wrong_member: PhoneIcon
correct_member: Phone
auto_fixable: true
```

---

## 4. Missing Required Prop (TS2741, TS2554)

### Patterns
```
error TS2741: Property 'href' is missing in type '...' but required in type 'CTAButtonProps'
error TS2554: Expected 1 arguments, but got 0
```

### Required Props Reference

| Component | Required Props |
|---|---|
| `CTAButton` | `href: string`, `children: ReactNode` |
| `SectionHeader` | `label: string`, `title: ReactNode` |
| `TiltCard` | `children: ReactNode` |
| `Image` (next/image) | `src`, `alt`, `width`+`height` OR `fill` |

### Default Values for Missing Props

| Prop | Type | Smart Default |
|---|---|---|
| `href` | `string` | `"#"` |
| `alt` | `string` | Component label or `""` |
| `sizes` | `string` | `"(max-width: 768px) 100vw, 50vw"` |
| `description` (SectionHeader) | `string` | `""` (optional) |
| `variant` (CTAButton) | union | `"primary"` |

### Extracted Info
```yaml
category: missing_prop
ts_code: TS2741
file: ProcessSteps.tsx
line: 116
component: CTAButton
missing_prop: href
auto_fixable: true
```

---

## 5. Object Possibly Undefined (TS2532, TS18048)

### Pattern
```
error TS2532: Object is possibly 'undefined'
error TS18048: 'X' is possibly 'undefined'
```

### Fix Strategies

```tsx
// Array item access
items[0].label        // ❌
items[0]?.label       // ✅ optional chaining

// Object property
post.image && <Image ... />  // ✅ already correct
post?.image            // ✅ optional chaining
```

### Extracted Info
```yaml
category: null_safety
ts_code: TS2532
file: NewsSection.tsx
line: 42
expression: post.image
auto_fixable: true
fix: add_optional_chaining
```

---

## 6. Unused Variable / Import (TS6133)

### Pattern
```
error TS6133: 'X' is declared but its value is never read.
```

### Fix Strategy
Remove the unused import from the import statement. If it's the only import from a module, remove the entire import line.

### Extracted Info
```yaml
category: unused_variable
ts_code: TS6133
file: Gallery.tsx
line: 3
symbol: ArrowUpRight
auto_fixable: true
fix: remove_from_import
```

---

## 7. Next.js Rule Violations

### Pattern: Hook in Server Component
```
error: React Hook "useState" cannot be called in a server component.
```

### Pattern: Browser API in Server Component
```
error: ReferenceError: window is not defined
```

### Fix: Add "use client" directive
Add `"use client";` as the very first line of the file (before any imports).

```tsx
// Before
import { useState } from "react";

// After
"use client";

import { useState } from "react";
```

### Extracted Info
```yaml
category: nextjs_rule
file: BranchCarousel.tsx
line: 1
issue: hook_in_server_component
hook: useState
auto_fixable: true
fix: add_use_client_directive
```

---

## 8. Wrong Property Name (TS2339)

### Pattern
```
error TS2339: Property 'X' does not exist on type 'Y'
```

### Common Prop Name Mistakes in This Project

| Wrong | Correct | Component |
|---|---|---|
| `text` | `children` | CTAButton |
| `title` → wrong prop | `label` | SectionHeader |
| `className` missing type | add `className?: string` to interface | custom |
| `src` string vs `StaticImageData` | import properly | next/image |

### Extracted Info
```yaml
category: wrong_prop
ts_code: TS2339
file: ProcessSteps.tsx
line: 120
prop_name: text
component_type: CTAButtonProps
auto_fixable: depends
```

---

## Error Priority for Fixing

Fix trong thứ tự này để tránh cascade errors:

1. **"use client" violations** (highest — enables hooks to work)
2. **Missing/wrong imports** (enables symbol resolution)
3. **Unused imports** (clean up before analysis)
4. **Missing required props** (most common after component changes)
5. **Type mismatches** (union type corrections)
6. **Null safety** (optional chaining)
7. **Wrong prop names** (rename — confirm first)

---

## Confidence Scoring

| Confidence | Action |
|---|---|
| 90–100% | Auto-fix immediately |
| 70–89% | Auto-fix + log warning |
| 50–69% | Suggest fix, DON'T apply |
| < 50% | Skip, report for manual |
