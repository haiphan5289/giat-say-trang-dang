# Premium Next.js / Tailwind Patterns

Copy-paste ready. All patterns use design tokens and shared components from this project.

## 1. Hero Gradient Section

Dark gradient background with decorative blobs and dot overlay — matches the HeroBanner visual language.

```tsx
<section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
  {/* Decorative blobs */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/15 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/15 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
  {/* Dot overlay */}
  <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* content */}
  </div>
</section>
```

## 2. Glass / Frosted Card

Semi-transparent surface with backdrop blur — use on top of dark gradient backgrounds.

```tsx
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
  {/* content */}
</div>
```

> For a stronger glow effect, add `shadow-[0_8px_32px_rgba(59,130,246,0.25)]`.

## 3. Section Header (using SectionHeader component)

Always use `SectionHeader` for consistent centered headings with the `.section-label` pill.

```tsx
import SectionHeader from "@/components/ui/SectionHeader";

<SectionHeader
  label="Tên mục"
  title={
    <>
      Tiêu Đề{" "}
      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Nổi Bật
      </span>
    </>
  }
  description="Mô tả ngắn cho section này."
  descriptionClass="max-w-lg"
/>
```

> `SectionHeader` automatically adds `.reveal` class. Don't wrap it in another `.reveal`.

## 4. Status Badge with Glow

```tsx
<span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm shadow-blue-200">
  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
  Đang nhận đơn
</span>
```

> For dark backgrounds replace with `bg-white/15 border-white/25 text-white`.

## 5. TiltCard Wrapper

Wrap any interactive card with `TiltCard` for the 3-D tilt micro-interaction on hover.

```tsx
import TiltCard from "@/components/ui/TiltCard";

<TiltCard className="reveal reveal-delay-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300">
  {/* card content */}
</TiltCard>
```

> `TiltCard` is already `"use client"` — no need to mark the parent.

## 6. Scroll-Reveal (`.reveal` pattern)

The Intersection Observer is set up globally in `app/layout.tsx`. Just add the classes.

```tsx
{/* Single block */}
<div className="reveal">...</div>

{/* Staggered list — each child gets its own delay */}
{items.map((item, i) => (
  <div key={item.id} className={`reveal reveal-delay-${Math.min(i + 1, 8)}`}>
    {/* item */}
  </div>
))}
```

> Cap delay index at 8 — classes only go up to `.reveal-delay-8`. Items beyond index 7 reuse `-delay-8` (480ms).

## 7. Skeleton Loading State

Use `animate-pulse` with Tailwind to create skeleton placeholders.

```tsx
{isLoading ? (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-slate-200 rounded-xl w-3/4" />
    <div className="h-4 bg-slate-200 rounded-lg w-full" />
    <div className="h-4 bg-slate-200 rounded-lg w-5/6" />
    <div className="grid grid-cols-3 gap-4 mt-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-32 bg-slate-200 rounded-2xl" />
      ))}
    </div>
  </div>
) : (
  <ActualContent />
)}
```

## 8. Animated Stat Counter

Pair with `.animate-count-up` from `globals.css` for number entrance on scroll.

```tsx
<div className="reveal grid grid-cols-3 gap-8 text-center">
  {[
    { value: "500+", label: "Đơn/tháng" },
    { value: "98%", label: "Hài lòng" },
    { value: "24h", label: "Giao hàng" },
  ].map((stat) => (
    <div key={stat.label} className="animate-count-up">
      <p className="text-4xl font-extrabold text-blue-600">{stat.value}</p>
      <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
    </div>
  ))}
</div>
```

## 9. CTA Cluster (primary + ghost hierarchy)

Never place two `CTAButton` with `variant="primary"` side by side. Always one primary + one ghost.

```tsx
import CTAButton from "@/components/ui/CTAButton";
import { Phone, MessageCircle } from "lucide-react";

<div className="flex flex-wrap gap-3">
  <CTAButton href="tel:0938432178">
    <Phone size={20} />
    Gọi Ngay
  </CTAButton>
  <CTAButton
    href="https://zalo.me/0938432178"
    variant="ghost"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle size={20} />
    Chat Zalo
  </CTAButton>
</div>
```

> For CTA inside a dark gradient CTA banner, use `variant="white"` for the primary action.

## 10. Wave Divider Between Sections

Add a wave at the top or bottom of a section to connect it smoothly to adjacent sections.

```tsx
{/* Wave from white (above this section is white) */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
    <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
  </svg>
</div>

{/* Wave to white (section below is white) */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
    <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
  </svg>
</div>
```

> For sections adjacent to `bg-slate-50`, fill with `#f8fafc`.

## 11. Image with Hover Scale (Next.js Image)

Standard card image pattern with hover zoom and gradient overlay.

```tsx
import Image from "next/image";

<div className="relative h-48 overflow-hidden rounded-2xl group">
  <Image
    src="/images/your-image.jpg"
    alt="Descriptive alt text"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
</div>
```

> Always include `sizes` — without it Next.js serves a 100vw image on every device.

## 12. Gradient Border Card

Use the `.gradient-border` CSS utility for an animated gradient border on cards.

```tsx
<div className="gradient-border bg-white p-6 rounded-2xl shadow-sm">
  {/* card content */}
</div>
```

> The `::before` pseudo-element animates the gradient border automatically. No JS needed.
