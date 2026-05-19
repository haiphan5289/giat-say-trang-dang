---
name: pa-premium-ui
description: Upgrade any Next.js section to premium web quality — scroll-reveal, hover micro-interactions, gradient surfaces, skeleton loading, conversion-optimised CTA hierarchy.
model: sonnet
effort: high
---

# Premium UI Enforcer — Giặt Sấy Trang Đáng

**World-class web design upgrader** — Transforms any section from functional to 2026 premium landing page quality. Every visitor scrolling down should feel "này chuyên nghiệp quá".

## Problems Solved

After implementing a section, UI often suffers from:
- ❌ Static content — appears instantly with no scroll entrance animation
- ❌ Flat white cards, no depth, shadow, or gradient overlay
- ❌ Raw `<a>` / `<button>` tags instead of `CTAButton`
- ❌ Missing `SectionHeader` — inconsistent heading style across sections
- ❌ No `group-hover:` micro-interactions on cards or list items
- ❌ Hardcoded `#hex` colours instead of CSS vars or Tailwind tokens
- ❌ Large JSX trees (>80 lines) not extracted into sub-components
- ❌ Next.js `<img>` instead of optimised `<Image>` from `next/image`

## Solution

This skill **audits + upgrades** sections in 5 steps:
1. **Audit** — scan file, score 5 questions, determine upgrade level
2. **Layout** — layered surfaces, gradient hero, wave dividers
3. **Motion** — `.reveal` scroll animations, CSS keyframe utilities, Tailwind transitions
4. **Interactions** — `group-hover:` scale/shadow/translate, CTA hierarchy
5. **Validation** — TypeScript zero-error check

## Stack Context

| Concept | Implementation |
|---|---|
| Shared CTA | `CTAButton` — variants: `primary`, `white`, `ghost` |
| Section headers | `SectionHeader` — props: `label`, `title`, `description` |
| Tilt hover card | `TiltCard` — rAF-throttled 3-D tilt on mouse move |
| Scroll reveal | `.reveal` + `.visible` (Intersection Observer in `app/layout.tsx`) |
| Reveal delays | `.reveal-delay-1` … `.reveal-delay-8` (80ms steps) |
| CSS tokens | `--color-brand`, `--color-brand-dark`, `--color-accent`, `--color-accent-light` |
| Animation utilities | `shimmer-text`, `animate-float`, `animate-ken-burns`, `phone-pulse`, `gradient-border`, `animate-count-up` |
| Dot overlay | `dot-pattern`, `dot-pattern-white` |
| Section badge | `.section-label` |
| Wave divider | `.wave-bottom` + inline `<svg>` |

## Files

| File | Purpose |
|---|---|
| [spec/PROMPT.md](spec/PROMPT.md) | Step-by-step execution workflow |
| [spec/AUDIT.md](spec/AUDIT.md) | Audit checklist + scoring |
| [spec/PATTERNS.md](spec/PATTERNS.md) | Copy-paste premium Next.js/Tailwind patterns |
| [spec/ANIMATIONS.md](spec/ANIMATIONS.md) | CSS animation utilities + Tailwind transition recipes |
| [spec/GUARDRAILS.md](spec/GUARDRAILS.md) | Anti-patterns hard stop list |

## Quick Start

```
# Upgrade entire section
/pa-premium-ui HeroBanner

# Upgrade a specific sub-section
/pa-premium-ui ProcessSteps CTA banner

# Animations only, no layout changes
/pa-premium-ui NewsSection animations-only

# Audit without making changes
/pa-premium-ui Gallery audit-only
```

## Output

```
✅ Premium UI Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Audit score: 2/5 (upgrade required)
🎨 Layout: gradient hero + glass card overlay
🎬 Motion: .reveal on all content blocks, staggered delays
💫 Interactions: group-hover scale + shadow on cards

Changes applied:
  ✅ Section: added .reveal to all content blocks
  ✅ Cards: replaced raw div with TiltCard + group-hover:shadow-xl
  ✅ CTA: raw <a> → CTAButton (primary + ghost hierarchy)
  ✅ Header: raw h2 → SectionHeader with .section-label pill
  ✅ Images: <img> → Next.js <Image> with fill + sizes

TypeScript: npx tsc --noEmit → 0 errors
```
