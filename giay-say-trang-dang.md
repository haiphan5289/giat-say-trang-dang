# Giặt Sấy 24h Gò Vấp — Tài Liệu Website

Landing page dịch vụ giặt sấy chuyên nghiệp tại Gò Vấp, TP.HCM.

---

## Thông Tin Doanh Nghiệp

| Thông tin | Giá trị |
|---|---|
| Tên | Giặt Sấy 24h Gò Vấp |
| Địa chỉ | Số 1 đường số 8, Thông Tay Hội, Gò Vấp, Hồ Chí Minh |
| Hotline | 0938 432 178 |
| Zalo | https://zalo.me/0938432178 |
| Facebook | https://www.facebook.com/profile.php?id=61551799042694 |
| Giờ mở cửa | 09:00 - 20:00, tất cả các ngày trừ chủ nhật |
| Website | https://www.giatsay24hgovap.com |
| Tọa độ | 10.8370625, 106.6645925 |

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16.2.3 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Animation | Framer Motion v11 + CSS keyframes |
| Font | Inter (Google Fonts) |
| Icons | Lucide React |
| Images | `next/image` (tối ưu tự động) |
| Language | TypeScript |
| Deploy | Vercel |
| Type check | `npx tsc --noEmit` |

---

## Cấu Trúc Dự Án

```
web/src/
├── app/
│   ├── layout.tsx          — RootLayout: metadata, JSON-LD, Pixel/GTM scripts, Header, Footer
│   ├── page.tsx            — Trang chủ: 9 section dynamic import
│   ├── tin-tuc/
│   │   └── page.tsx        — Trang tin tức (static listing)
│   ├── sitemap.ts          — Tự generate /sitemap.xml
│   ├── robots.ts           — Tự generate /robots.txt
│   └── globals.css         — CSS utilities, animation keyframes, design tokens
├── components/
│   ├── layout/
│   │   ├── Header.tsx      — Sticky header (transparent → white khi scroll), mobile menu
│   │   └── Footer.tsx      — 4-column footer với contact info
│   ├── sections/
│   │   ├── HeroBanner.tsx  — Hero slider 3 slides, Ken-Burns, parallax
│   │   ├── ServicesGrid.tsx — 6 dịch vụ, grid 1→2→3 cột
│   │   ├── ProcessSteps.tsx — 4 bước quy trình với connector gradient
│   │   ├── Gallery.tsx      — Photo grid cửa hàng + dịch vụ (8 ảnh)
│   │   ├── Testimonials.tsx — Stats row + 6 review cards
│   │   ├── BranchCarousel.tsx — Carousel 5 chi nhánh
│   │   ├── FAQ.tsx          — 8 câu hỏi accordion + FAQPage JSON-LD
│   │   ├── NewsSection.tsx  — 3 bài viết mới nhất
│   │   ├── Location.tsx     — Google Maps embed + contact card
│   │   └── FloatingCTA.tsx  — Widget nổi: Facebook / Zalo / Phone / Scroll Top
│   └── ui/
│       ├── CTAButton.tsx       — Shared button (variant: primary|white|ghost, size: sm|md|lg)
│       ├── CTABanner.tsx       — Banner kêu gọi hành động cuối section
│       ├── SectionHeader.tsx   — Tiêu đề section chuẩn hóa
│       ├── FadeIn.tsx          — Wrapper fade-in theo hướng (Framer Motion whileInView)
│       ├── StaggerGrid.tsx     — Grid stagger spring animation
│       ├── TiltCard.tsx        — 3D tilt effect khi hover
│       ├── AnimatedStepCard.tsx — Step card 3D flip entrance
│       ├── AnimatedConnector.tsx — Đường kết nối gradient giữa các bước
│       └── CountUp.tsx         — Số đếm lên khi scroll vào
└── data/
    ├── testimonials.ts     — 6 reviews + 4 stats
    ├── news.ts             — 3 bài viết blog
    └── branches.ts         — 5 chi nhánh
```

---

## Workflow: Thứ Tự Section Trang Chủ

```
HeroBanner       → ServicesGrid  → ProcessSteps → Gallery
→ Testimonials   → BranchCarousel → FAQ          → NewsSection → Location
```

Tất cả section trừ HeroBanner được lazy load bằng `dynamic()` + `content-visibility: auto` để tối ưu performance.

---

## Sections Chi Tiết

### 1. HeroBanner (`#gioi-thieu`)

Slider tự động 3 slides, xoay mỗi **6 giây**.

| Slide | Tiêu đề | Highlight |
|---|---|---|
| 1 | Sạch Đúng Nghĩa | Đẹp Như Mới |
| 2 | Đặt Lịch Online | Nhận Về Trong Ngày |
| 3 | Giặt Hấp | Vest & Áo Dài |

Tính năng:
- Nút Pause/Play + dot indicator (touch-target ≥ 44px)
- Badge nổi "Giảm 10% đơn đầu tiên" (`animate-float`)
- CTA: **Gọi Ngay** + **Chat Zalo**
- Ảnh phải (desktop only): Ken-Burns slideshow 3 ảnh thực cửa hàng
- Parallax: `useScroll + useTransform` — nội dung trượt nhẹ khi scroll
- `<span class="sr-only">Giặt Sấy 24h Gò Vấp</span>` trong `<h1>` cho SEO
- Background: gradient thay đổi theo slide + 3 blob animation + dot pattern overlay

---

### 2. ServicesGrid (`#dich-vu`)

6 dịch vụ, layout grid **1 → 2 → 3 cột** (mobile → tablet → desktop).

| Dịch vụ | Giá |
|---|---|
| Giặt Thường | Từ 13.000đ/kg |
| Giặt Nhanh | Từ 20.000đ/kg |
| Giặt Sấy Công Nghiệp | Liên hệ báo giá |
| Giặt Giày | Từ 50.000đ/đôi |
| Giặt Gấu Bông | Từ 30.000đ/món |
| Giặt Chăn Mền | 20.000–30.000đ/cái |

- Mỗi card: `TiltCard` (3D tilt hover) + `StaggerItem` (spring animation khi scroll vào)
- Icon gradient màu riêng, hover: icon scale 1.1
- Badge giá màu theo từng dịch vụ
- CTA cuối: "Tư Vấn Miễn Phí" → `tel:0938432178`

---

### 3. ProcessSteps (`#quy-trinh`)

4 bước quy trình hàng ngang (desktop) với đường kết nối gradient.

| Bước | Tiêu đề | Mô tả tóm tắt |
|---|---|---|
| 01 | Tư Vấn Dịch Vụ | Gọi hotline / Zalo, đặt lịch lấy đồ |
| 02 | Thu Gom & Xử Lý | Đến tận nơi, phân loại theo chất liệu |
| 03 | Đóng Gói Bảo Quản | Gấp phẳng, đóng gói kỹ, thơm mát |
| 04 | Bàn Giao Tận Nơi | Giao đúng hẹn, tiền mặt hoặc chuyển khoản |

- `AnimatedStepCard`: 3D flip entrance (rotateX 50→0), `useReducedMotion()` support
- `AnimatedConnector`: đường gradient blue→violet→amber, chỉ hiện trên desktop
- Wave SVG divider trên/dưới section
- `CTABanner`: "Đặt Lịch Ngay Hôm Nay — Giảm 10% lần đầu" (**chỉ banner duy nhất có 10%**)

---

### 4. Gallery (`#thu-vien`)

2 photo grid: ảnh thực cửa hàng + ảnh dịch vụ.

**Grid cửa hàng** (ảnh local `/images/`):
- `shop-front-1.jpg` — Mặt tiền (span 2 hàng)
- `shop-interior.jpg` — Không gian tiếp nhận
- `shop-front-2.jpg` — Chi nhánh Gò Vấp

**Grid dịch vụ** (8 ảnh: Unsplash + local):
- Giặt Sấy Quần Áo, Giặt Hấp Cao Cấp, Giặt Giày
- Giặt Sofa & Nệm, Giặt Rèm Cửa, Giặt Gấu Bông
- Quần Áo Sau Giặt (`folded-clothes.jpg`), Kho Nhận Đồ (`laundry-items-shelf.jpg`)

- `TiltCard` + hover scale + gradient overlay theo từng ảnh
- Badge "Ảnh thực tế" góc trái trên
- `FadeIn` wrap từng grid
- `CTABanner` cuối variant `dark`: "Đặt Lịch Giặt Sấy Ngay"

---

### 5. Testimonials (`#danh-gia`)

Stats row + 6 review cards khách hàng.

**Stats:**

| Số liệu | Label |
|---|---|
| 500+ | Khách hàng tin dùng |
| 1 | Chi nhánh Gò Vấp |
| 10+ | Năm kinh nghiệm |
| 99% | Khách hàng hài lòng |

**Reviews (đều 5 sao):**
- Chị Phạm Thị Hoa — Giặt Nệm & Sofa
- Anh Trần Minh Khoa — Giặt Hấp Cao Cấp
- Chị Lê Thị Mai — Giặt Sấy Gia Đình
- Anh Nguyễn Văn Tài — Giặt Giày
- Chị Võ Thị Thu — Giặt Sấy Gia Đình
- Anh Đinh Quốc Hùng — Giặt Chăn Mền

- `CountUp` số đếm lên khi scroll vào stats
- Avatar: chữ cái đầu tên + gradient màu
- Rating badge = tên dịch vụ
- Indicator: "4.9/5 · 500+ đánh giá thực tế"
- `CTABanner` cuối: "Tham Gia Hơn 500 Gia Đình Hài Lòng" (không có 10%)

---

### 6. BranchCarousel (`#he-thong`)

Carousel 5 chi nhánh, tự điều chỉnh số card hiển thị theo màn hình.

| Viewport | Card hiển thị |
|---|---|
| Mobile | 1 |
| Tablet (sm) | 2 |
| Desktop (lg) | 3 |

Dữ liệu từ `data/branches.ts` — 5 chi nhánh (Trung Tâm, Quận 9, Quận 12, Bình Thạnh, Gò Vấp).

- Dot indicator + nút prev/next
- Card active highlight: border blue-300 + bg blue-50
- Link "Xem trên bản đồ" → Google Maps URL
- `CTABanner` cuối: "Giao Nhận Tận Nơi Toàn Gò Vấp"

---

### 7. FAQ (`#faq`)

8 câu hỏi thường gặp dạng accordion.

| # | Câu hỏi |
|---|---|
| 1 | Giặt sấy mất bao lâu? |
| 2 | Giá giặt sấy bao nhiêu? |
| 3 | Có giao nhận tận nơi không? |
| 4 | Có nhận giặt vest, áo dài, đồ cao cấp không? |
| 5 | Có giặt nệm, sofa tại nhà không? |
| 6 | Đặt lịch bằng cách nào? |
| 7 | Mở cửa mấy giờ, có phục vụ ngày lễ không? |
| 8 | Đồ có bị mất hay hỏng không? |

- Accordion `useState` — click để mở/đóng
- `FadeIn` stagger 40ms mỗi item
- **`FAQPage` JSON-LD schema** nhúng trực tiếp → Google rich results (câu trả lời hiện ngay trên SERP)

---

### 8. NewsSection (`#tin-tuc`)

3 bài viết mới nhất, link "Xem tất cả" → `/tin-tuc`.

| Bài viết | Danh mục | Ngày |
|---|---|---|
| Bí Quyết Giặt Quần Áo Đúng Cách Để Bền Màu Lâu | Mẹo Giặt | 15/06/2025 |
| Tại Sao Nên Giặt Chăn Mền Định Kỳ Mỗi Tháng? | Sức Khỏe | 02/06/2025 |
| Dịch Vụ Giặt Sấy Theo Yêu Cầu — Giải Pháp Cho Người Bận Rộn | Tin Tức | 25/05/2025 |

- `TiltCard` + `StaggerItem` cho mỗi card
- Wave SVG divider trên cùng
- `CTABanner` cuối: "Tư Vấn Miễn Phí Ngay" (không có 10%)

---

### 9. Location (`#vi-tri`)

Google Maps embed + Contact info card (tỉ lệ 3:2 desktop).

| Thông tin | Giá trị |
|---|---|
| Địa chỉ | Số 1 đường số 8, Thông Tay Hội, HCM |
| Hotline | `tel:0938432178` |
| Zalo | `zalo.me/0938432178` |
| Giờ mở cửa | 09:00 - 20:00, tất cả các ngày trừ chủ nhật |

- Bản đồ tọa độ `10.8370625, 106.6645925` zoom 17, `loading="lazy"`
- `FadeIn` direction left (map) / right (card)
- CTA: Gọi Ngay + Chat Zalo

---

## Trang Phụ

### `/tin-tuc`

Static page listing tất cả bài viết từ `data/news.ts`.

- Metadata đầy đủ: `title`, `description`, canonical URL
- Link "Về trang chủ" (`ArrowLeft`)
- Grid 1→2→3 cột, `TiltCard` cho mỗi bài

---

## Layout Components

### Header

- **Fixed sticky** — transparent trên hero → `bg-white/95 backdrop-blur` khi `scrollY > 10`
- Desktop nav (lg+): 7 link

| Label | Href |
|---|---|
| Trang Chủ | `/` |
| Giới Thiệu | `#gioi-thieu` |
| Dịch Vụ | `#dich-vu` |
| Quy Trình | `#quy-trinh` |
| Tin Tức | `#tin-tuc` |
| Vị Trí | `#vi-tri` |
| Liên Hệ | `#lien-he` (Footer) |

- Mobile: hamburger → menu dọc + nút gọi ngay
- CTA header: số hotline, ẩn trên mobile nhỏ

### Footer (`#lien-he`)

4 cột: Brand · Liên Kết · Dịch Vụ · Liên Hệ

- Brand: logo, tagline, icon Facebook + Zalo
- Bottom bar: © 2025 + "đang hoạt động" dot pulse xanh

### FloatingCTA

Hiện sau khi `scrollY > 300`, fixed bottom-right.

| Nút | Hành động | Style |
|---|---|---|
| Facebook | Mở fanpage | Gradient blue |
| Zalo | Chat Zalo | Gradient sky |
| Phone | `tel:0938432178` | Gradient green + `phone-pulse` |
| Scroll Top | `window.scrollTo(0,0)` | Slate 700 |

Hover: tooltip trượt từ phải + scale 1.1.

---

## Shared UI Components

### CTAButton

```tsx
<CTAButton href="..." variant="primary|white|ghost" size="sm|md|lg">
  <Icon /> Label
</CTAButton>
```

| Variant | Dùng khi |
|---|---|
| `primary` | CTA chính trên nền trắng/sáng |
| `white` | CTA chính trong CTABanner (nền đậm) |
| `ghost` | CTA phụ (Zalo, thứ cấp) |

Shimmer hover effect trên primary + white. Scale 1.05 khi hover.

### CTABanner

```tsx
<CTABanner
  title="..."
  description={<>Text <strong>bold</strong></>}
  phoneLabel="Gọi Ngay"    // default
  preTitle="Dòng nhỏ trên"
  variant="blue|dark"       // default: blue
  className="mt-12"
/>
```

| Variant | Nền |
|---|---|
| `blue` | Gradient blue-600 → cyan-600 |
| `dark` | Gradient slate-800 → slate-900 |

Luôn có 2 nút: Phone (white) + Zalo (ghost).

**Vị trí CTABanner và nội dung:**

| Section | Nội dung | Có 10%? |
|---|---|---|
| ProcessSteps | "Đặt Lịch Ngay Hôm Nay — Giảm 10% lần đầu" | ✅ Duy nhất |
| Gallery | "Đặt Lịch Giặt Sấy Ngay" (dark variant) | ❌ |
| Testimonials | "Tham Gia Hơn 500 Gia Đình Hài Lòng" | ❌ |
| BranchCarousel | "Giao Nhận Tận Nơi Toàn Gò Vấp" | ❌ |
| NewsSection | "Tư Vấn Miễn Phí Ngay" | ❌ |

### SectionHeader

```tsx
<SectionHeader
  label="Badge text"
  title={<>Title <span className="gradient">Color</span></>}
  description="Mô tả ngắn"
  wrapperClass="mb-16"       // default
  descriptionClass="max-w-xl" // default
/>
```

### TiltCard

3D perspective tilt ±14deg theo chuột. rAF-throttled. Reset khi mouse leave.

### FadeIn

```tsx
<FadeIn direction="up|down|left|right|zoom" delay={0.1}>
  {children}
</FadeIn>
```

`whileInView`, `once: true`, viewport margin -60px. Spring stiffness 60, damping 14.

### StaggerGrid + StaggerItem

```tsx
<StaggerGrid className="grid ...">
  {items.map(i => <StaggerItem key={i.id}><Card /></StaggerItem>)}
</StaggerGrid>
```

Stagger 40ms/item, spring animation: opacity 0→1, y 12→0, scale 0.98→1.

### AnimatedStepCard

3D flip entrance (rotateX 50→0, scale 0.9→1). Delay = `index × 0.08s`. `useReducedMotion()` support.

### CountUp

Số đếm lên khi `whileInView`. Dùng trong stats row của Testimonials.

---

## Performance

| Kỹ thuật | Áp dụng |
|---|---|
| `dynamic()` import | 8 section dưới fold (tất cả trừ HeroBanner) |
| `content-visibility: auto` | `.section-lazy` wrapper quanh mỗi dynamic section |
| `whileInView` (Framer) | Scroll reveal thống nhất — không dùng IntersectionObserver riêng |
| `loading="lazy"` | Google Maps iframe |
| `priority` | Chỉ ảnh hero slide đầu tiên |
| Không duplicate scroll detection | Đã xóa `ScrollRevealInit` / `.reveal` class cũ |

---

## Animation System (globals.css)

| Class | Mô tả |
|---|---|
| `.shimmer-text` | Gradient shimmer chạy trên text highlight |
| `.animate-float` | Float up-down 3s loop (badge khuyến mãi) |
| `.animate-ken-burns` | Zoom slow 6s cho ảnh hero |
| `.phone-pulse` | Pulse xanh lá cho nút Phone floating |
| `.gradient-border` | Border gradient animation |
| `.animate-count-up` | Entry animation cho CountUp |
| `.dot-pattern` | Overlay chấm xanh nhạt |
| `.dot-pattern-white` | Overlay chấm trắng (trên nền đậm) |
| `.animate-blob` | Morph blob 12s loop |
| `.animate-blob-delay` | Morph blob 16s reverse |
| `.animate-blob-slow` | Morph blob 20s |
| `.section-label` | Badge pill với border gradient |
| `.section-lazy` | `content-visibility: auto` + intrinsic size 600px |
| `.tilt-card` | Base transition style cho TiltCard |
| `.line-clamp-2/3` | Cắt text nhiều dòng |
| `.wave-bottom` | SVG wave divider |

**CSS Custom Properties:**

```css
--color-brand        /* blue-500  #3b82f6 */
--color-brand-dark   /* blue-600  #2563eb */
--color-accent       /* cyan-500  #06b6d4 */
--color-accent-light /* cyan-300  #67e8f9 */
```

---

## SEO & Metadata

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Google Business Profile | ✅ Đã có | Quan trọng nhất để rank "giặt sấy gần đây" |
| sitemap.xml | ✅ Auto | `/sitemap.xml` từ `sitemap.ts` |
| robots.txt | ✅ Auto | `/robots.txt` từ `robots.ts` |
| JSON-LD LocalBusiness | ✅ | `layout.tsx` — tên, địa chỉ, geo, giờ mở cửa |
| JSON-LD FAQPage | ✅ | `FAQ.tsx` — 8 câu hỏi → Google rich results |
| Title / OG / Twitter / canonical | ✅ | `layout.tsx` |
| /tin-tuc page | ✅ | Trang tin tức riêng, metadata đầy đủ |
| Google Search Console | ⏳ Chưa verify | Thay `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` trong `layout.tsx` |
| Facebook Pixel | ⏳ Chờ Pixel ID | Thay `YOUR_PIXEL_ID` trong `layout.tsx` |
| Google Tag Manager | ⏳ Chờ GTM ID | Thay `GTM-XXXXXXX` trong `layout.tsx` |

### Từ Khóa SEO Mục Tiêu

| Từ khóa | Ưu tiên |
|---|---|
| giặt sấy 24h gò vấp | ⭐⭐⭐⭐⭐ |
| giặt sấy gần đây | ⭐⭐⭐⭐⭐ (rank nhờ Google Business) |
| giặt sạch gò vấp | ⭐⭐⭐⭐ |
| giặt nhanh khử mùi hcm | ⭐⭐⭐⭐ |
| giặt ủi tận nơi gò vấp | ⭐⭐⭐ |
| giặt hấp vest áo dài | ⭐⭐⭐ |
| giặt nệm sofa tại nhà | ⭐⭐⭐ |
| giặt giày gò vấp | ⭐⭐ |

### Metadata Chính (`layout.tsx`)

```
title:       Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi · Giao Nhận Tận Nơi
template:    %s | Giặt Sấy 24h Gò Vấp
description: Giặt sấy 24h Gò Vấp — giặt sạch, nhanh, khử mùi. Từ 13.000đ/kg.
             Giao nhận tận nơi. Mở cửa 09:00-20:00 T2–T7. Hotline: 0938 432 178.
canonical:   https://www.giatsay24hgovap.com
og:image:    /images/shop-front-1.jpg (815×1200)
locale:      vi_VN
twitter:     summary_large_image
```

---

## Responsive Breakpoints

| Viewport | Behavior |
|---|---|
| Mobile (375px+) | 1 cột, py-14, hamburger menu |
| Tablet sm (640px+) | ServicesGrid 2 cột, BranchCarousel 2 card |
| Tablet md (768px+) | ProcessSteps hàng ngang, Gallery grid đầy đủ, Footer 2 cột |
| Desktop lg (1024px+) | ServicesGrid 3 cột, Hero 2 cột, nav hiện, BranchCarousel 3 card |
| Wide xl (1280px+) | Font hero tăng lên 7xl |

---

## Ghi Chú Kỹ Thuật

- `"use client"` chỉ ở component thực sự cần hook/event: `Header`, `FloatingCTA`, `HeroBanner`, `TiltCard`, `StaggerGrid`, `AnimatedStepCard`, `AnimatedConnector`, `FadeIn`, `BranchCarousel`, `FAQ`, `CountUp`
- Tất cả section còn lại là **Server Components**
- `suppressHydrationWarning` trên `<html>` + `<body>` — tránh hydration mismatch từ browser extensions
- Pixel + GTM dùng `<Script strategy="afterInteractive">` — không block First Paint
- `npx next build` → tất cả route tĩnh, compile 0 error
