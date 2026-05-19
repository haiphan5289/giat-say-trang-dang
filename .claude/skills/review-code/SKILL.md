---
name: review-code
description: "Next.js/React/TypeScript code review for Giặt Sấy Trang Đáng website — component design system compliance, Tailwind token usage, scroll animations, performance, accessibility, and conversion optimisation."
argument-hint: "[file path or component name] [focus: Component Compliance | Color Tokens | Animations | Performance | Accessibility | Full Review]"
---

# Next.js / React Code Review Skill

> **Best Practices:** Follow Next.js 15 App Router conventions, React functional component patterns, Tailwind CSS semantic tokens, and shared component design system.

Full code review for `.tsx` / `.ts` files in the **Giặt Sấy Trang Đáng** website.

**Last synced:** 2026-05-19

---

## When to Use

Invoke this skill when asked to:
- Review a section component or UI file
- Check shared component (`CTAButton`, `SectionHeader`, `TiltCard`) compliance
- Audit Tailwind token usage vs hardcoded values
- Verify scroll-reveal animation setup
- Check Next.js Image usage and performance
- Audit conversion / CTA hierarchy

> **UI Polish:** After code review passes, run `/pa-premium-ui <SectionName>` to audit and upgrade scroll animations, hover interactions, and visual depth.

---

## Read Guide

| Task | File |
|------|------|
| Full review template, Few-Shot examples, quick checklist | [references/review-code-nextjs.md](./references/review-code-nextjs.md) |

> Always read `references/review-code-nextjs.md` before performing any review.

---

## Focus Areas

| Area | What Is Checked |
|------|----------------|
| `Component Compliance` | CTAButton vs raw `<a>`/`<button>`, SectionHeader vs raw `<h2>`, TiltCard vs plain div |
| `Color Tokens` | Tailwind semantic classes vs `style={{ color: '#...' }}`, CSS vars vs hardcoded `rgba()` |
| `Animations` | `.reveal` scroll classes, `.reveal-delay-*` stagger, CSS utilities from globals.css |
| `Performance` | `"use client"` only when needed, `<Image>` with `sizes`, sub-component extraction, no `console.log` |
| `Accessibility` | Single `<h1>`, section `id` attrs, descriptive `alt`, heading hierarchy |
| `Conversion` | CTA hierarchy (primary + ghost), no two filled buttons side-by-side, CTAs reachable below fold |
| `Full Review` | All of the above combined |

---

## Key Rules (ALWAYS APPLY)

| ❌ Forbidden | ✅ Required |
|-------------|-------------|
| Raw `<a href="tel:...">` with custom styles | `CTAButton href="tel:0938432178"` |
| Raw `<a href="https://zalo.me/...">` | `CTAButton variant="ghost" target="_blank" rel="noopener noreferrer"` |
| Raw `<button>` for a CTA | `CTAButton` with appropriate `variant` |
| `style={{ color: '#2563eb' }}` | `text-blue-700` (Tailwind) or `var(--color-brand-dark)` |
| Hardcoded `rgba(59,130,246,0.1)` in className | `bg-blue-500/10` (Tailwind opacity modifier) |
| Hardcoded `rgba()` in globals.css new rules | `color-mix(in srgb, var(--color-brand) 10%, transparent)` |
| `<img src="...">` | `<Image src="..." fill alt="..." sizes="..." />` from `next/image` |
| `<Image>` without `sizes` | Always include `sizes` (performance) |
| Raw `<h2>` for a section heading | `SectionHeader` component |
| Multiple `<h1>` on page | Single `<h1>` only in `HeroBanner` |
| Two `CTAButton variant="primary"` side by side | One `primary` + one `ghost` |
| Section content without `.reveal` | Add `.reveal` to all content blocks |
| JSX block > 80 lines | Extract named sub-components |
| `"use client"` on every file | Only when file uses hooks, event handlers, or browser APIs |
| `console.log(...)` | Remove — never in production components |

## Anti-Hallucination Rule

> **NEVER suggest a component, class, or CSS utility that doesn't exist in this project.**
> Verified shared components: `CTAButton`, `SectionHeader`, `TiltCard`
> Verified CSS utilities: `shimmer-text`, `animate-float`, `animate-ken-burns`, `phone-pulse`, `gradient-border`, `animate-count-up`, `dot-pattern`, `dot-pattern-white`, `section-label`, `wave-bottom`, `.reveal`, `.reveal-delay-1` … `.reveal-delay-8`, `line-clamp-2`, `line-clamp-3`, `tilt-card`
> CSS custom properties: `--color-brand`, `--color-brand-dark`, `--color-accent`, `--color-accent-light`

---

## Validate

Run before any review is considered complete:

```bash
cd web && npx tsc --noEmit
```

- Zero errors required (warnings acceptable with justification)
- Check for unused imports
- Check for missing `alt` on `<Image>` components
