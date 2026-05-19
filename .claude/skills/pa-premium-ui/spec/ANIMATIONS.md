# Animation Patterns

All animations are CSS-only or Tailwind-utility-based — no JS animation library needed.

## 1. Scroll-Reveal Setup

The observer is already wired globally in `web/src/app/layout.tsx`. To activate it on any element, just add `.reveal`. The observer adds `.visible` when the element enters the viewport.

```css
/* Already in globals.css */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger delays** (already in globals.css, `reveal-delay-1` … `reveal-delay-8`):

```tsx
{items.map((item, i) => (
  <div key={item.id} className={`reveal reveal-delay-${Math.min(i + 1, 8)}`}>
    {item.label}
  </div>
))}
```

## 2. CSS Utilities Reference

All of these are already defined in `web/src/app/globals.css`. Just apply the class.

| Class | Effect | Typical use |
|---|---|---|
| `shimmer-text` | Animated blue→cyan gradient text | Hero headline, price highlight |
| `animate-ken-burns` | Slow zoom-in (scale 1→1.12) on image | Background images, hero image panel |
| `animate-float` | Gentle float up/down (-8px → 0 → -8px) | Promo badges, CTAs, floating icons |
| `phone-pulse` | Green glow pulse ring | Primary call-to-action phone button |
| `gradient-border` | Animated shimmer gradient border on card | Feature cards, pricing cards |
| `animate-count-up` | Fade + slide-up entrance for numbers | Stat counters |
| `dot-pattern` | Blue dot overlay (on dark backgrounds) | Hero, dark CTA banners |
| `dot-pattern-white` | White dot overlay (on dark backgrounds) | Dark section backgrounds |

## 3. Tailwind Hover Transition Recipes

**Card lift on hover:**
```tsx
<div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
```

**Card border highlight on hover:**
```tsx
<article className="border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
```

**Arrow nudge on hover (inside an `<a>` tag parent with `group`):**
```tsx
<a href="/..." className="group flex items-center gap-1.5">
  Xem thêm
  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
</a>
```

**Image scale on card hover:**
```tsx
<div className="overflow-hidden rounded-2xl">
  <img className="group-hover:scale-105 transition-transform duration-500" />
</div>
```

**Reveal overlay icon on hover:**
```tsx
<div className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
  <ArrowUpRight size={14} className="text-white" />
</div>
```

## 4. CSS @keyframes — Adding a New Animation

If a new animation is needed, add it at the bottom of `web/src/app/globals.css` following this pattern:

```css
/* ── Your new animation ── */
@keyframes your-name {
  0%   { /* from state */ }
  100% { /* to state */ }
}
.animate-your-name {
  animation: your-name 0.6s ease-out both;
}
```

> Use `both` fill-mode so the element stays in the end state after the animation completes.

## 5. Shimmer Text Highlight

Wrap any text in `<span className="shimmer-text">` to apply the blue→cyan animated gradient.

```tsx
<h2>
  Dịch Vụ{" "}
  <span className="shimmer-text">Chuyên Nghiệp</span>
</h2>
```

> `shimmer-text` uses `-webkit-background-clip: text` — it only works on inline elements (`span`, not `div`).

## 6. Floating Badge

```tsx
<div className="inline-flex items-center gap-1.5 bg-amber-400/90 backdrop-blur-sm text-amber-900 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-lg shadow-amber-500/30 animate-float">
  🎉 Giảm 10% đơn đầu tiên
</div>
```

## 7. Progressive Section Reveal (staggered groups)

Use CSS delays to reveal hero → cards → CTA in sequence without any JS:

```tsx
{/* Group 1 — enters immediately */}
<div className="reveal">
  <SectionHeader ... />
</div>

{/* Group 2 — enters 80ms later */}
<div className="grid grid-cols-3 gap-6 mt-12">
  {cards.map((card, i) => (
    <div key={card.id} className={`reveal reveal-delay-${Math.min(i + 1, 8)}`}>
      <CardComponent card={card} />
    </div>
  ))}
</div>

{/* Group 3 — CTA enters after all cards */}
<div className="reveal reveal-delay-4 mt-8 text-center">
  <CTAButton ... />
</div>
```

## 8. Animated Active Indicator (nav/tab)

```tsx
<span className={`block h-0.5 rounded-full transition-all duration-300 ${
  isActive ? "w-full bg-blue-600" : "w-0 bg-transparent"
}`} />
```

## Curve Reference

| Use case | CSS equivalent |
|---|---|
| Screen enter / slide up | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Tap scale (fast in, fast out) | `ease-in-out` |
| Card hover lift | `ease-out` |
| Float/pulse loop | `ease-in-out` with `animation-direction: alternate` |
| Count-up entrance | `cubic-bezier(0.16, 1, 0.3, 1)` |
