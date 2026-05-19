# Fix Strategies — Next.js / TypeScript Build Doctor

---

## Strategy 1: Add Missing Import

### Input
```yaml
category: missing_import
file: Gallery.tsx
symbol: TiltCard
required_import: 'import TiltCard from "@/components/ui/TiltCard"'
```

### Execution Steps
```
1. Read file header (first 20 lines)
2. Check if import already exists — if yes, skip
3. Find last existing import line
4. Insert new import after it, following the grouping convention:
   - External packages first (react, next/image, lucide-react)
   - Internal @/ imports second
5. If adding to an existing multi-import line (e.g. from "lucide-react"),
   insert the symbol into the existing destructured import
```

### Import Order Convention
```tsx
// 1. React (if needed)
"use client";
import { useState, useEffect } from "react";

// 2. Next.js
import Image from "next/image";
import Link from "next/link";

// 3. Third-party (lucide-react, etc.)
import { Phone, MessageCircle } from "lucide-react";

// 4. Internal @/ components
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";

// 5. Internal data
import { newsPosts } from "@/data/news";
```

### Example Fix

**Before:**
```tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// ❌ TiltCard is used but not imported
```

**After:**
```tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
```

---

## Strategy 2: Add "use client" Directive

### Input
```yaml
category: nextjs_rule
file: BranchCarousel.tsx
issue: hook_in_server_component
hook: useState
```

### Execution Steps
```
1. Read line 1 of the file
2. If "use client" already present — skip
3. If file starts with an import — insert "use client";\n\n before line 1
4. Validate: "use client" must be the very first line (before imports)
```

### Example Fix

**Before:**
```tsx
import { useState } from "react";
import Image from "next/image";
```

**After:**
```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
```

---

## Strategy 3: Fix Union Type Mismatch

### Input
```yaml
category: type_mismatch
file: ProcessSteps.tsx
line: 116
actual: '"secondary"'
expected: '"primary" | "white" | "ghost"'
prop_name: variant
```

### Execution Steps
```
1. Read the line with the error
2. Identify the union type options from the error message
3. Map the wrong value to the nearest valid option:
   - "secondary" → "ghost" (closest semantic match)
   - "outline" → "ghost"
   - "filled" → "primary"
   - "plain" → "ghost"
4. Replace the wrong value in the file
```

### Mapping Table
| Wrong value | Correct value | Reason |
|---|---|---|
| `"secondary"` | `"ghost"` | Ghost is the outlined/secondary style |
| `"outline"` | `"ghost"` | Ghost = outlined |
| `"filled"` | `"primary"` | Primary = filled |
| `"danger"` | `"ghost"` | No danger variant — use ghost |
| `"default"` | `"primary"` | Primary is default |

### Example Fix

**Before:**
```tsx
<CTAButton variant="secondary">Chat Zalo</CTAButton>
```

**After:**
```tsx
<CTAButton variant="ghost">Chat Zalo</CTAButton>
```

---

## Strategy 4: Add Missing Required Prop

### Input
```yaml
category: missing_prop
file: ProcessSteps.tsx
component: CTAButton
missing_prop: href
```

### Execution Steps
```
1. Read the component invocation line
2. Look up the required prop type from ERROR_PATTERNS.md
3. Generate a safe default value
4. Insert the prop into the JSX tag
```

### Default Value Table
| Prop | Default | Component |
|---|---|---|
| `href` | `"#"` | CTAButton |
| `alt` | `""` | next/image Image |
| `sizes` | `"(max-width: 768px) 100vw, 50vw"` | next/image Image |
| `fill` | `true` | next/image Image (when no width/height) |
| `label` | `""` | SectionHeader |

### Example Fix

**Before:**
```tsx
<CTAButton>Gọi Ngay</CTAButton>
```

**After:**
```tsx
<CTAButton href="tel:0938432178">Gọi Ngay</CTAButton>
```

---

## Strategy 5: Remove Unused Import

### Input
```yaml
category: unused_variable
file: Gallery.tsx
symbol: ArrowUpRight
source: lucide-react
```

### Execution Steps
```
1. Read the import line containing the symbol
2. If the symbol is the ONLY import from that module:
   → Remove the entire import line
3. If there are other symbols in the same destructured import:
   → Remove only that symbol from the destructure list
4. Preserve comma formatting and spacing
```

### Example Fix

**Before:**
```tsx
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
// ArrowUpRight never used
```

**After:**
```tsx
import { ArrowRight, Calendar } from "lucide-react";
```

---

## Strategy 6: Add Optional Chaining for Null Safety

### Input
```yaml
category: null_safety
file: NewsSection.tsx
line: 42
expression: post.image
```

### Execution Steps
```
1. Read the line with the error
2. Identify the nullable access chain
3. Add `?.` to the first potentially undefined access
4. If the result is used in JSX rendering, wrap with && guard:
   `{post?.image && <Image src={post.image} ... />}`
```

### Example Fix

**Before:**
```tsx
<Image src={post.image} alt={post.title} fill />
```

**After:**
```tsx
{post.image && <Image src={post.image} alt={post.title} fill />}
```

---

## Strategy 7: Fix Wrong Export Member Name

### Input
```yaml
category: wrong_import
file: HeroBanner.tsx
module: lucide-react
wrong_member: PhoneIcon
correct_member: Phone
```

### Execution Steps
```
1. Read the import line
2. Replace wrong member name with correct one
3. Also update any JSX usage of the wrong name in the same file
```

### Example Fix

**Before:**
```tsx
import { PhoneIcon, MessageCircle } from "lucide-react";
// ...
<PhoneIcon size={20} />
```

**After:**
```tsx
import { Phone, MessageCircle } from "lucide-react";
// ...
<Phone size={20} />
```

---

## Fix Priority & Dependencies

```
1. "use client" directive   (enables hooks → resolves hook errors)
   ↓
2. Missing imports          (enables symbol resolution)
   ↓
3. Unused imports           (clean up first)
   ↓
4. Missing required props   (most common after component changes)
   ↓
5. Type mismatches          (union corrections)
   ↓
6. Null safety              (optional chaining)
   ↓
7. Wrong prop names         (rename — verify first)
```

After each batch, re-run `npx tsc --noEmit` to check for resolved cascade errors.
