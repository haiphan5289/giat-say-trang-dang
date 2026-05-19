# Anti-Patterns — Hard Stop List

These patterns are **strictly banned**. Replace whenever found.

## CTA & Interactive Elements

| ❌ Banned | ✅ Replace with |
|---|---|
| Raw `<a href="tel:...">` styled manually | `CTAButton href="tel:0938432178"` |
| Raw `<a href="https://zalo.me/...">` styled manually | `CTAButton href="..." variant="ghost" target="_blank" rel="noopener noreferrer"` |
| Raw `<button>` with inline Tailwind classes for CTA | `CTAButton` with appropriate `variant` |
| Two `CTAButton` with `variant="primary"` side by side | One `primary` + one `ghost` — never two filled primaries |
| `<a className="... text-blue-600 ...">Xem thêm</a>` as section-level CTA | `CTAButton variant="ghost"` |

## Section Structure

| ❌ Banned | ✅ Replace with |
|---|---|
| Raw `<h2>` + `<p>` as section heading without `.section-label` | `SectionHeader` component with `label`, `title`, `description` |
| `.section-label` hardcoded with `rgba(59,130,246,0.1)` | Defined in `globals.css` — just add the class |
| Manually centred heading outside `SectionHeader` | Use `SectionHeader`; custom layout only when left-aligned intentionally (e.g. NewsSection) |

## Colours & Tokens

| ❌ Banned | ✅ Replace with |
|---|---|
| `style={{ color: '#2563eb' }}` or `style={{ backgroundColor: '#...' }}` | Tailwind semantic class (`text-blue-700`, `bg-blue-600`) or `style={{ color: 'var(--color-brand-dark)' }}` |
| `text-[#2563eb]` arbitrary Tailwind colour | `text-blue-700` (Tailwind semantic) or CSS var |
| Hardcoded `rgba(59,130,246,...)` in `className` string | `bg-blue-500/15` (Tailwind opacity modifier) |
| Hardcoded `rgba(...)` in `globals.css` new rules | `color-mix(in srgb, var(--color-brand) 15%, transparent)` |

## Images

| ❌ Banned | ✅ Replace with |
|---|---|
| `<img src="..." />` | `<Image src="..." fill alt="..." sizes="..." />` from `next/image` |
| `<Image>` without `sizes` prop | Always include `sizes` — e.g. `"(max-width: 768px) 100vw, 50vw"` |
| `<Image alt="">` blank or generic | Descriptive alt: `"Cửa hàng giặt sấy Gò Vấp"`, not `""` or `"image"` |
| `priority` on every image | `priority` only on the first above-fold image |

## Animations & Motion

| ❌ Banned | ✅ Replace with |
|---|---|
| Section content with no `.reveal` class | Add `.reveal` to all content blocks; add `.reveal-delay-*` for staggered items |
| `.reveal-delay-9` or higher (classes don't exist) | Cap at `.reveal-delay-8`; items beyond index 7 reuse `-delay-8` |
| Inline `style={{ animation: '...' }}` for keyframe animations | Use predefined classes: `animate-float`, `shimmer-text`, `animate-ken-burns`, etc. |
| `transition-all` on elements that don't need it | Use specific `transition-[property]` when only one property changes |

## Code Quality

| ❌ Banned | ✅ Replace with |
|---|---|
| JSX block > 80 lines in a single component | Extract named sub-components (`function HeroTextContent(...)`, etc.) |
| `"use client"` on every section file by default | Only add when the file uses hooks, event handlers, or browser APIs |
| `console.log(...)` in component files | Remove before merging; use `debugPrint` in dev scripts only |
| Unused imports left after refactor | Clean up — TypeScript will error on unused imports with `isolatedModules` |

## Dark Mode (AppBar & Scaffold equivalent)

| ❌ Banned | ✅ Replace with |
|---|---|
| Hardcoded `bg-white` on the outermost section wrapper | Use `bg-white` only intentionally; for sections that adapt to themes, use CSS vars |
| Gradient colours mixed with hardcoded hex | Use `from-slate-900 via-blue-950` Tailwind palette tokens |

## Structural Consistency

| ❌ Banned | ✅ Replace with |
|---|---|
| Multiple `<h1>` tags across sections | Only one `<h1>` per page (in HeroBanner); all other sections use `<h2>` |
| `<section>` without an `id` attribute | Every visible section needs `id="..."` for anchor navigation |
| Wave divider SVG hardcoded fill colour without matching adjacent background | Match fill to the actual adjacent section background (`#ffffff` or `#f8fafc`) |
