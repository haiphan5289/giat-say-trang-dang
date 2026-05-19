# Examples — Build Doctor

---

## Example 1: Auto-Fix After Adding New Section

### Scenario

Bạn thêm một section mới `PricingSection.tsx` nhưng quên import một số components.

### Input
```yaml
MODE: auto
```

### Execution Log

```
🔍 Stage 1: Scanning build errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 4 errors:
  ✗ PricingSection.tsx:5  - Cannot find name 'TiltCard' (TS2304)
  ✗ PricingSection.tsx:6  - Cannot find name 'SectionHeader' (TS2304)
  ✗ PricingSection.tsx:42 - Cannot find name 'Phone' (TS2304)
  ✗ PricingSection.tsx:43 - Cannot find name 'MessageCircle' (TS2304)

🔧 Stage 2: Classifying errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • missing_import: 4 errors (confidence: 98%)

🛠️  Stage 3: Applying fixes (Iteration 1)...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Priority: Missing Imports]
  ✅ PricingSection.tsx → Added 'import TiltCard from "@/components/ui/TiltCard"'
  ✅ PricingSection.tsx → Added 'import SectionHeader from "@/components/ui/SectionHeader"'
  ✅ PricingSection.tsx → Added '{ Phone, MessageCircle }' to existing lucide-react import

✓ Stage 4: Re-validating...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Build errors: 0

✅ SUCCESS: All errors fixed in 1 iteration
```

---

## Example 2: Multiple Error Types After Component Refactor

### Scenario

Sau khi refactor `CTAButton` để thêm variant `"white"`, các file cũ dùng variant không tồn tại.

### Input
```yaml
MODE: auto
```

### Execution Log

```
🔍 Stage 1: Scanning build errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 6 errors:
  ✗ HeroBanner.tsx:87    - Type '"secondary"' not assignable to '"primary"|"white"|"ghost"'
  ✗ ProcessSteps.tsx:120 - Type '"outline"' not assignable to '"primary"|"white"|"ghost"'
  ✗ ContactSection.tsx:3 - Cannot find name 'CTAButton' (TS2304)
  ✗ ContactSection.tsx:3 - Cannot find name 'useState' (TS2304)
  ✗ ContactSection.tsx   - React Hook "useState" cannot be called in a server component
  ✗ Gallery.tsx:9        - 'ArrowUpRight' is declared but its value is never read (TS6133)

🔧 Stage 2: Classifying errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • nextjs_rule: 1 error (ContactSection — needs "use client")
  • missing_import: 2 errors (CTAButton, useState)
  • unused_variable: 1 error (ArrowUpRight)
  • type_mismatch: 2 errors (variant wrong values)

🛠️  Stage 3: Applying fixes (Iteration 1)...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Priority 1: Next.js rules]
  ✅ ContactSection.tsx → Added "use client" directive at line 1

[Priority 2: Missing imports]
  ✅ ContactSection.tsx → Added 'import CTAButton from "@/components/ui/CTAButton"'
  ✅ ContactSection.tsx → Added '{ useState }' to react import

[Priority 3: Unused imports]
  ✅ Gallery.tsx:9 → Removed 'ArrowUpRight' from lucide-react import

[Priority 4: Type mismatches]
  ✅ HeroBanner.tsx:87    → Changed variant "secondary" → "ghost"
  ✅ ProcessSteps.tsx:120 → Changed variant "outline" → "ghost"

✓ Stage 4: Re-validating...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Build errors: 0

✅ SUCCESS: All 6 errors fixed in 1 iteration
```

---

## Example 3: Dry-Run (Audit Mode)

### Scenario

Bạn muốn xem những gì sẽ được fix TRƯỚC KHI apply.

### Input
```yaml
MODE: dry-run
```

### Execution Log

```
🔍 Stage 1: Scanning build errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 3 errors.

📋 Dry-Run Report (no files modified)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WOULD FIX (confidence ≥ 70%):

[missing_import] NewsSection.tsx:5
  Fix: Add 'import { ArrowRight } from "lucide-react"'
  Confidence: 98%

[type_mismatch] ProcessSteps.tsx:116
  Fix: Change CTAButton variant "secondary" → "ghost"
  Confidence: 85%

[unused_variable] HeroBanner.tsx:3
  Fix: Remove 'ChevronDown' from lucide-react import
  Confidence: 98%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Summary: 3 errors would be auto-fixed (0 require manual intervention)

Run with MODE=auto to apply these fixes.
```

---

## Example 4: Partial Success (Manual Fix Required)

### Scenario

Một số errors cần sửa tay (generic type constraint phức tạp).

### Execution Log

```
🔍 Stage 1: Scanning build errors...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 4 errors:
  ✗ HeroBanner.tsx:50  - Missing import 'Phone' (TS2304)
  ✗ Gallery.tsx:12     - Type 'Ref<HTMLDivElement>' not assignable to 'Ref<HTMLElement>'
  ✗ Gallery.tsx:88     - Type 'string' not assignable to 'CSSProperties["display"]'
  ✗ HeroBanner.tsx:102 - Object is possibly 'undefined' (TS18048)

🛠️  Stage 3: Applying fixes (Iteration 1)...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ HeroBanner.tsx → Added 'Phone' to lucide-react import
  ✅ HeroBanner.tsx:102 → Added optional chaining 'slides[current]?.title'
  ⏭️  Gallery.tsx:12 → Skipped (Ref type constraint — manual fix needed, confidence: 30%)
  ⏭️  Gallery.tsx:88 → Skipped (CSSProperties union type — manual fix needed, confidence: 40%)

⚠️  PARTIAL SUCCESS: Fixed 2 of 4 errors. 2 require manual intervention.

Manual fixes needed:
  ❌ Gallery.tsx:12
     Error: 'Ref<HTMLDivElement>' not assignable to 'Ref<HTMLElement>'
     Suggestion: Change ref type to 'RefObject<HTMLDivElement>' or cast with 'as'

  ❌ Gallery.tsx:88
     Error: 'string' not assignable to 'CSSProperties["display"]'
     Suggestion: Cast value with 'as CSSProperties["display"]' or use inline style object
```
