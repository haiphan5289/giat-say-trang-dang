# Execution Workflow

## Input

```
TARGET: [SectionName or file path]
SCOPE: [full | layout-only | animations-only | section: <sub-section> | audit-only]  (optional, default: full)
```

### Argument Parsing

When the skill is invoked as `/pa-premium-ui <args>`, parse `<args>` as follows:

| Pattern | TARGET | SCOPE |
|---|---|---|
| `HeroBanner` | `HeroBanner` | `full` |
| `ProcessSteps CTA banner` | `ProcessSteps` | `section: CTA banner` → find the sub-tree responsible |
| `NewsSection animations-only` | `NewsSection` | `animations-only` |
| `web/src/components/sections/Gallery.tsx` | that file path | `full` |
| `Gallery audit-only` | `Gallery` | `audit-only` — report only, no edits |

**Rule:** The first PascalCase word or file path is the TARGET. Trailing words matching a known SCOPE keyword set the SCOPE directly. Otherwise treat trailing words as a section hint → `section: <hint>`.

## Step 1 — Read Target File

Read the specified section file. If no exact path given, search under `web/src/components/sections/` by component name, then `web/src/components/ui/`.

Also read `web/src/app/globals.css` if not already in context — it contains all CSS utilities referenced in patterns.

## Step 2 — Audit (see AUDIT.md)

Score 5 audit questions. Decide upgrade level:
- Score 0–2: **micro-upgrade** — animations + interaction polish only
- Score 3–4: **standard upgrade** — layout + animations + CTA hierarchy
- Score 5: **full premium upgrade** — all steps

Also run the 4 **UX Quality Checks** (U1–U4). Flag any violations — fix them in Step 4 regardless of the main score.

If SCOPE is `audit-only`: output the audit report and stop. Make no file edits.

## Step 3 — Plan Changes

List all changes before writing any code:

```
Layout:        [gradient containers, glass cards, wave dividers]
Motion:        [.reveal classes, stagger delays, CSS utilities to add]
Interactions:  [group-hover:, TiltCard wrap, CTAButton upgrades]
Components:    [SectionHeader, CTAButton, Image replacements]
Sub-extract:   [any JSX block >80 lines that needs extraction]
```

## Step 4 — Apply Changes (see PATTERNS.md + ANIMATIONS.md)

Use the Edit tool to apply surgical changes. Do NOT rewrite entire files unless the JSX is shorter than 60 lines total.

Priority order:
1. Replace raw CTA links/buttons → `CTAButton` with correct variant hierarchy
2. Replace or wrap raw section heading → `SectionHeader`
3. Add `.reveal` + stagger delay classes to content blocks
4. Upgrade card containers → `TiltCard` or gradient container with `group-hover:`
5. Replace `<img>` → Next.js `<Image>` with `fill` + `sizes`
6. Extract sub-components if any `build` block exceeds 80 lines

## Step 5 — Validate

```bash
cd web && npx tsc --noEmit
```

Zero errors required. Fix any TypeScript issue before reporting complete.

## Step 6 — Output Report (see SKILL.md format)

Print the Premium UI Report using the template in SKILL.md.
