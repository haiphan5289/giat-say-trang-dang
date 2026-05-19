# Audit Checklist

Answer 5 questions. Each YES = +1 point.

## Questions

| # | Question | YES indicator |
|---|---|---|
| 1 | Section content has no `.reveal` scroll-entrance animation? | No `.reveal` or `.reveal-delay-*` classes on any element |
| 2 | CTA links/buttons are raw `<a>` or `<button>` tags? | Not using `CTAButton` with `primary`/`ghost` hierarchy |
| 3 | Cards or list items have no hover micro-interactions? | No `group-hover:` scale, translate, or shadow upgrade on interactive elements |
| 4 | Section heading is a raw `<h2>` — not using `SectionHeader`? | No `SectionHeader` component, missing `.section-label` pill |
| 5 | Images use raw `<img>` or lack `sizes` attribute? | `<img>` instead of Next.js `<Image>`, or `<Image>` with no `sizes` prop |

## Decision

| Score | Action |
|---|---|
| 0–2 | **Micro-upgrade**: add `.reveal` classes + `group-hover:` polish only |
| 3–4 | **Standard upgrade**: layout + animations + CTA hierarchy + component swap |
| 5 | **Full premium upgrade**: all steps |

---

## UX Quality Checks (bonus — fix regardless of score)

These don't affect the upgrade level but must be fixed before marking a section complete.

| # | Check | Flag if… |
|---|---|---|
| U1 | **Single primary CTA per context** | Two `CTAButton` with `variant="primary"` appear side by side in the same section or card |
| U2 | **Conversion CTA in thumb zone** | The page's main conversion CTA (Gọi Ngay / Chat Zalo) is only at the top of the page with no repeat lower on the page |
| U3 | **Descriptive image alt text** | `<Image alt="">` blank, or alt says only `"image"` / `"photo"` — should describe the content |
| U4 | **Stagger delay ceiling** | More than 8 items use `.reveal-delay-*` but the classes only go to `-delay-8` — items 9+ won't have a delay class and all enter at once |

> Fix all flagged UX checks in Step 4, after the main pattern upgrades.
