---
name: ui-score
description: "Score Next.js/Tailwind UI code for Giặt Sấy Trang Đáng website across 5 dimensions: Shared Component adoption, Color tokens, Scroll animations & motion, Accessibility & semantics, and Performance & code quality. Produces a scored report (0–50 pts) with grade A–F and actionable fix list."
argument-hint: "[file path or section name — e.g. web/src/components/sections or HeroBanner]"
model: sonnet
---

# Giặt Sấy Trang Đáng — UI Score Skill

> **Anti-Hallucination:** Only flag violations you can see in the code. Never reference a shared component or CSS utility that doesn't exist in this project. Verified list is in the scoring rubric below.

## Purpose

This skill audits Next.js/Tailwind UI files and produces a **scored report** with:
- A numeric score per dimension (0–10)
- An overall score out of 50
- A letter grade (A–F)
- A prioritised fix list with file path and line number

> **UI Pipeline:** Run `/ui-score` before PR for component/token compliance. For visual polish and animation depth, also run `/pa-premium-ui <SectionName>` — it covers layout depth, motion, hover states, and loading that ui-score does not catch.

---

## Input Format

```
TARGET: [file path or section name — e.g. "web/src/components/sections" or "HeroBanner"]
```

If no target is provided, ask the user for the path before proceeding.

---

## Execution Protocol

Follow these steps **in order**.

### Step 1 — Discover Files

Read the TARGET path. Collect all `.tsx` files that contain UI code:
- `web/src/components/sections/*.tsx`
- `web/src/components/ui/*.tsx`
- `web/src/app/page.tsx`, `web/src/app/layout.tsx`

List each discovered file before scoring.

### Step 2 — Read Files

Read every file discovered in Step 1. Do not skip any.

### Step 3 — Score Each Dimension

Apply the rubric below to ALL files combined. Tally violations across all files.

### Step 4 — Output Report

Produce the Final Score Report using the format at the bottom of this skill.

---

## Scoring Rubric

Each dimension starts at **10 points**. Deduct points for each violation found.

---

### D1 — Shared Component Adoption (0–10)

Checks whether project shared components are used wherever a verified equivalent exists.

**Verified shared components (MUST be used when applicable):**

| Raw Element | Required Replacement |
|---|---|
| `<a href="tel:...">` with custom styling | `CTAButton href="..."` |
| `<a href="https://zalo.me/...">` with custom styling | `CTAButton variant="ghost" target="_blank"` |
| `<button>` styled as a CTA | `CTAButton` with variant |
| Raw `<h2>` + `<p>` as a centered section heading block | `SectionHeader` |
| Plain `<div>` as an interactive hover card | `TiltCard` wrapper |
| `<img src="...">` | `<Image>` from `next/image` |

**Deductions:**
- `-3` per raw `<a>` used as a phone/Zalo CTA instead of `CTAButton`
- `-2` per raw `<button>` used as a page CTA instead of `CTAButton`
- `-2` per raw centered section heading block without `SectionHeader`
- `-2` per `<img>` instead of Next.js `<Image>`
- `-1` per interactive card that should use `TiltCard` but uses a plain `<div>`

**Minimum score:** 0 (cannot go negative)

---

### D2 — Colour Tokens (0–10)

Checks whether all colour values use Tailwind semantic utilities or CSS custom properties.

**Deductions:**
- `-3` per `style={{ color: '#...' }}` or `style={{ background: '#...' }}` in component JSX
- `-2` per `text-[#...]` or `bg-[#...]` arbitrary Tailwind colour with hex value
- `-2` per hardcoded `rgba(...)` used in a `className` string
- `-1` per new `rgba(...)` in `globals.css` that should use `color-mix(in srgb, var(--color-brand)...)`
- `-1` per `bg-gradient-to-*` that mixes a Tailwind colour with a hardcoded hex in the same gradient

**Acceptable (no deduction):**
- `bg-white`, `bg-black`, `text-white`, `text-black` — no semantic token maps to these
- `bg-transparent`
- Tailwind named colours: `blue-600`, `slate-900`, `amber-400`, `green-400`, etc.

---

### D3 — Scroll Animations & Motion (0–10)

Checks whether section content uses the project's scroll-reveal system and CSS animation utilities.

**Deductions:**
- `-2` per section whose main content blocks have no `.reveal` class (content appears instantly)
- `-2` per staggered list where items are missing `.reveal-delay-{1..8}` classes
- `-1` per use of `.reveal-delay-9` or higher (classes don't exist — cap at `-delay-8`)
- `-1` per interactive card with no `group-hover:` transition (should have at least `hover:shadow-xl` or `hover:-translate-y-1`)
- `-1` per shimmer text highlight that uses raw `style` instead of `.shimmer-text` utility
- `-1` per badge/promo element that should use `animate-float` but is static

**Acceptable (no deduction):**
- `SectionHeader` — adds `.reveal` automatically, don't double-wrap
- `.reveal` is correct without a delay when it's a single block (not a staggered list)

---

### D4 — Accessibility & Semantic HTML (0–10)

Checks semantic HTML structure and accessibility attributes.

**Deductions:**
- `-3` per second `<h1>` tag on the page (only `HeroBanner` should have `<h1>`)
- `-2` per `<section>` without an `id` attribute (needed for anchor navigation)
- `-2` per `<Image alt="">` blank or generic (`"image"`, `"photo"`, `"banner"`)
- `-1` per heading that skips a level (e.g. `<h2>` → `<h4>` with no `<h3>` in between)
- `-1` per external `<a>` link without `rel="noopener noreferrer"`
- `-1` per `<Image>` without `sizes` prop (missing performance + layout hint)

---

### D5 — Performance & Code Quality (0–10)

Checks Next.js and React performance best practices.

**Deductions:**
- `-2` per `"use client"` on a file that doesn't use hooks, event handlers, or browser APIs (disables SSR unnecessarily)
- `-2` per JSX block > 80 lines in a single component without sub-component extraction
- `-2` per two `CTAButton variant="primary"` side by side (broken CTA hierarchy)
- `-1` per `console.log(...)` call in a component file
- `-1` per unused import left in file
- `-1` per `<Image priority>` used on more than 1 image (only the first above-fold image needs it)

---

## Grade Thresholds

| Score | Grade | Meaning |
|---|---|---|
| 46–50 | **A** | Production-ready. Minor polish only. |
| 38–45 | **B** | Good. A few issues to clean up before deploy. |
| 28–37 | **C** | Needs work. Address warnings before merging. |
| 15–27 | **D** | Significant rework needed. Multiple systematic issues. |
| 0–14  | **F** | Critical violations. Do not deploy. |

---

## Final Score Report Format

```markdown
# 🎨 UI Score Report — [Section/Feature Name]
**Date**: [today]
**Target**: [path]
**Files reviewed**: [N files]

---

## Score Summary

| Dimension | Score | Issues Found |
|---|---|---|
| D1 · Shared Component Adoption | N/10 | N violations |
| D2 · Colour Tokens | N/10 | N violations |
| D3 · Scroll Animations & Motion | N/10 | N violations |
| D4 · Accessibility & Semantics | N/10 | N violations |
| D5 · Performance & Code Quality | N/10 | N violations |
| **Overall** | **N/50** | **Grade: [A/B/C/D/F]** |

---

## Verdict

[One sentence verdict: what the score means and what to prioritise]

---

## Issues by Dimension

### D1 · Shared Component Adoption — N/10

- ❌ `[HeroBanner.tsx:86]` — `<a href="tel:0938432178" className="...">` → use `CTAButton href="tel:0938432178"`
- ❌ `[ProcessSteps.tsx:120]` — raw Zalo `<a>` → use `CTAButton variant="ghost" target="_blank"`
- ✅ SectionHeader used correctly in ProcessSteps, Gallery

### D2 · Colour Tokens — N/10

- ❌ `[HeroBanner.tsx:62]` — `style={{ color: '#2563eb' }}` → use `text-blue-700`
- ❌ `[globals.css:169]` — `rgba(59,130,246,0.1)` → use `color-mix(in srgb, var(--color-brand) 10%, transparent)`
- ✅ All gradient colours use Tailwind named tokens

### D3 · Scroll Animations & Motion — N/10

- ❌ `[ServicesSection.tsx:28]` — section content has no `.reveal` class — content appears instantly
- ❌ `[ServicesSection.tsx:45]` — cards list has no `.reveal-delay-*` stagger
- ✅ HeroBanner uses animate-float on badge, animate-ken-burns on image

### D4 · Accessibility & Semantics — N/10

- ❌ `[ServicesSection.tsx:1]` — `<section>` missing `id` attribute
- ❌ `[Gallery.tsx:119]` — `<Image alt="">` blank → add descriptive alt text
- ✅ HeroBanner is the only `<h1>` on the page
- ✅ External Zalo link has `rel="noopener noreferrer"`

### D5 · Performance & Code Quality — N/10

- ❌ `[ServicesSection.tsx:1]` — `"use client"` not needed — no hooks or event handlers
- ❌ `[ServicesSection.tsx]` — JSX block is 110 lines → extract `ServiceCard` sub-component
- ✅ No console.log in component files
- ✅ CTAButton hierarchy correct in HeroBanner (primary + ghost)

---

## Prioritised Fix List

Fix these in order — highest impact first:

1. `[HeroBanner.tsx:86]` [D1-CRITICAL] Replace raw `<a>` phone link with `CTAButton`
2. `[ProcessSteps.tsx:120]` [D1-CRITICAL] Replace raw Zalo `<a>` with `CTAButton variant="ghost"`
3. `[ServicesSection.tsx:28]` [D3-HIGH] Add `.reveal` to section content blocks
4. `[ServicesSection.tsx:1]` [D5-MEDIUM] Remove unnecessary `"use client"`
5. `[Gallery.tsx:119]` [D4-MEDIUM] Add descriptive `alt` text to `<Image>`
6. `[globals.css:169]` [D2-LOW] Replace `rgba()` with `color-mix()` in `.section-label`
```

---

## Anti-Hallucination Checklist

Before outputting the report:
- [ ] Every shared component flagged as missing **actually exists**: only `CTAButton`, `SectionHeader`, `TiltCard`
- [ ] Every CSS utility flagged as missing **exists in globals.css**: `shimmer-text`, `animate-float`, `animate-ken-burns`, `phone-pulse`, `gradient-border`, `animate-count-up`, `dot-pattern`, `dot-pattern-white`, `section-label`, `.reveal`, `.reveal-delay-1`…`.reveal-delay-8`, `line-clamp-2`, `line-clamp-3`
- [ ] Every file path and line number cited was read in Step 2
- [ ] No violations invented from assumptions — only from code actually seen
- [ ] `CTAButton` does NOT accept `text` prop — content is passed as `children`
- [ ] `SectionHeader` does NOT accept `subtitle` — use `description`
- [ ] `.reveal-delay-9` and above do NOT exist — flag as violation if used
