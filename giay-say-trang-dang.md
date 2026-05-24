# Giặt Sấy 24h Gò Vấp — Tài Liệu Tính Năng

Landing page giới thiệu dịch vụ giặt sấy chuyên nghiệp tại Gò Vấp, TP.HCM. Xây dựng bằng **Next.js 15 App Router** + **Tailwind CSS** + **Framer Motion**.

---

## Thông Tin Doanh Nghiệp

| Thông tin | Giá trị |
|---|---|
| Tên | Giặt Sấy 24h Gò Vấp |
| Địa chỉ | Số 1 đường số 8, Thông Tay Hội, Gò Vấp, Hồ Chí Minh |
| Hotline | 0938 432 178 |
| Zalo | https://zalo.me/0938432178 |
| Facebook | https://www.facebook.com/profile.php?id=61551799042694 |
| Giờ mở cửa | 7:00 — 21:00, tất cả các ngày |
| Website | https://www.giatsay24hgovap.com |
| Tọa độ | 10.8370625, 106.6645925 |

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 15 App Router |
| Styling | Tailwind CSS |
| Animation | Framer Motion + CSS keyframes |
| Font | Inter (Google Fonts) |
| Icons | Lucide React |
| Images | next/image (tối ưu tự động) |
| Language | TypeScript |
| Linting/Type check | `npx tsc --noEmit` |

---

## Cấu Trúc Dự Án

```
web/src/
├── app/
│   ├── layout.tsx          — RootLayout: metadata, JSON-LD, Pixel/GTM scripts, Header, Footer
│   ├── page.tsx            — Trang chủ: ghép tất cả section
│   ├── sitemap.ts          — Tự generate /sitemap.xml (Next.js MetadataRoute)
│   ├── robots.ts           — Tự generate /robots.txt
│   └── globals.css         — CSS utilities, animation keyframes, design tokens
├── components/
│   ├── layout/
│   │   ├── Header.tsx      — Sticky header với mobile menu
│   │   └── Footer.tsx      — 4-column footer với contact info
│   ├── sections/
│   │   ├── HeroBanner.tsx  — Hero slider 3 slides
│   │   ├── ServicesGrid.tsx — 9 dịch vụ dạng card grid
│   │   ├── ProcessSteps.tsx — 4 bước quy trình
│   │   ├── Testimonials.tsx — Stats + 6 review cards
│   │   ├── Gallery.tsx      — Photo grid cửa hàng + dịch vụ
│   │   ├── NewsSection.tsx  — 3 bài viết mới nhất
│   │   ├── Location.tsx     — Google Maps + contact card
│   │   └── FloatingCTA.tsx  — Nút nổi Facebook/Zalo/Phone
│   └── ui/
│       ├── CTAButton.tsx    — Shared CTA button (3 variant, 3 size)
│       ├── SectionHeader.tsx — Tiêu đề section chuẩn hóa
│       ├── TiltCard.tsx     — Card 3D tilt effect
│       ├── CTABanner.tsx    — Banner kêu gọi hành động cuối section
│       ├── StaggerGrid.tsx  — Grid stagger animation (Framer Motion)
│       ├── AnimatedStepCard.tsx — Step card 3D flip entrance
│       ├── FadeIn.tsx       — Wrapper fade-in theo hướng
│       └── ShirtScene3D.tsx / ShirtPhysicsCanvas.tsx — (dự phòng, chưa dùng)
└── data/
    ├── testimonials.ts     — 6 đánh giá + 4 stats
    └── news.ts             — 3 bài viết blog
```

---

## Sections (Thứ Tự Trang Chủ)

### 1. HeroBanner (`#gioi-thieu`)

**Slider tự động** xoay 3 slide mỗi 6 giây với hiệu ứng chuyển cảnh mượt.

| Tính năng | Chi tiết |
|---|---|
| Số slide | 3 |
| Tự động chạy | Mỗi 6 giây |
| Tạm dừng/Tiếp tục | Nút Pause/Play ở cuối trang |
| Điều hướng | Mũi tên trái/phải + dot indicator (touch-target ≥ 44px) |
| Nội dung slide 1 | "Sạch Đúng Nghĩa / Đẹp Như Mới" — intro dịch vụ |
| Nội dung slide 2 | "Đặt Lịch Online / Nhận Về Trong Ngày" — giao nhận |
| Nội dung slide 3 | "Giặt Hấp / Vest & Áo Dài" — cao cấp |
| Badge khuyến mãi | "Giảm 10% đơn đầu tiên" (animate-float) |
| CTA chính | Gọi Ngay `tel:0938432178` |
| CTA phụ | Chat Zalo |
| Ảnh phải | Ken-Burns slideshow 3 ảnh thực cửa hàng (desktop only) |
| Trust points | Máy giặt Nhật Bản · Nước giặt nhập khẩu |
| SEO | `<span class="sr-only">Giặt Sấy 24h Gò Vấp</span>` trong `<h1>` |
| Background | Gradient động thay đổi theo slide + dot pattern overlay |

### 2. ServicesGrid (`#dich-vu`)

**9 dịch vụ** hiển thị dạng grid 1→2→4 cột (mobile → tablet → desktop).

| Dịch vụ | Giá từ |
|---|---|
| Giặt Thường | 13.000đ/kg |
| Giặt Nhanh (lấy trong ngày) | 20.000đ/kg |
| Giặt Sấy Công Nghiệp (khách sạn, spa) | Liên hệ |
| Giặt Hấp Cao Cấp (vest, áo dài) | 80.000đ/món |
| Giặt Nệm & Sofa | 150.000đ/cái |
| Giặt Giày | 50.000đ/đôi |
| Giặt Rèm Cửa | 30.000đ/m² |
| Giặt Gấu Bông | 30.000đ/món |
| Giặt Chăn Mền | 60.000đ/cái |

- Mỗi card dùng `TiltCard` — 3D tilt effect khi hover
- Icon màu gradient riêng theo dịch vụ (Lucide icons)
- `StaggerGrid` + `StaggerItem` — stagger spring animation khi scroll vào
- CTA cuối section: "Tư Vấn Miễn Phí" → gọi hotline

### 3. ProcessSteps (`#quy-trinh`)

**4 bước quy trình** hiển thị hàng ngang (desktop) với đường kết nối gradient.

| Bước | Tiêu đề | Nội dung |
|---|---|---|
| 01 | Tư Vấn Dịch Vụ | Gọi hotline / Zalo đặt lịch |
| 02 | Thu Gom & Xử Lý | Nhân viên đến tận nơi, phân loại theo chất liệu |
| 03 | Đóng Gói Bảo Quản | Gấp phẳng, đóng gói kỹ, thơm mát |
| 04 | Bàn Giao Tận Nơi | Giao đúng hẹn, thanh toán tiền mặt / chuyển khoản |

- `AnimatedStepCard` — 3D flip entrance animation (Framer Motion, respect `prefers-reduced-motion`)
- Đường kết nối gradient blue→violet→amber giữa các bước (desktop)
- Wave SVG divider trên và dưới section
- `CTABanner` cuối: "Đặt Lịch Ngay — Giảm 10% lần đầu"

### 4. Testimonials (`#danh-gia`)

**Stats row** + **6 review cards** từ khách hàng thực tế tại Gò Vấp.

Stats:
- 500+ Khách hàng tin dùng
- 1 Chi nhánh tại Gò Vấp
- 10+ Năm kinh nghiệm
- 99% Khách hàng hài lòng

Review cards (5 sao tất cả):
- Chị Phạm Thị Hoa — Giặt Nệm & Sofa
- Anh Trần Minh Khoa — Giặt Hấp Cao Cấp (vest cưới)
- Chị Lê Thị Mai — Giặt Sấy Gia Đình
- Anh Nguyễn Văn Tài — Giặt Giày (Nike trắng)
- Chị Võ Thị Thu — Giặt Sấy Gia Đình
- Anh Đinh Quốc Hùng — Giặt Chăn Mền

- Rating badge hiển thị tên dịch vụ
- Avatar gradient màu theo index
- `StaggerGrid` animation
- Indicator: "4.9/5 · 500+ đánh giá thực tế"
- `CTABanner` cuối: "Trải Nghiệm Dịch Vụ Ngay Hôm Nay"

### 5. Gallery (`#thu-vien`)

**2 photo grid** — ảnh thực cửa hàng + ảnh dịch vụ.

Ảnh cửa hàng (từ `/images/`):
- Mặt tiền cửa hàng Gò Vấp (cột 1, span 2 hàng)
- Không gian tiếp nhận
- Chi nhánh Gò Vấp

Ảnh dịch vụ (Unsplash + local):
- Giặt Sấy Quần Áo, Giặt Hấp Cao Cấp, Giặt Giày
- Giặt Sofa & Nệm, Giặt Rèm Cửa, Giặt Gấu Bông
- Quần Áo Sau Giặt, Kho Nhận Đồ

- Mỗi ảnh dùng `TiltCard` với hover scale + gradient overlay
- Badge "Ảnh thực tế" trên góc trái
- Auto-rows masonry-style layout
- `CTABanner` cuối variant `dark`

### 6. NewsSection (`#tin-tuc`)

**3 bài viết** mới nhất dạng card, link đến `/tin-tuc`.

| Bài viết | Danh mục | Ngày |
|---|---|---|
| Bí Quyết Giặt Quần Áo Đúng Cách Để Bền Màu Lâu | Mẹo Giặt | 15/06/2025 |
| Tại Sao Nên Giặt Chăn Mền Định Kỳ Mỗi Tháng? | Sức Khỏe | 02/06/2025 |
| Dịch Vụ Giặt Sấy Theo Yêu Cầu - Giải Pháp Cho Người Bận Rộn | Tin Tức | 25/05/2025 |

- `NewsCard` với ảnh thumbnail, category badge, trích dẫn
- Hover: scale ảnh + màu tiêu đề → blue
- Link "Xem tất cả" góc phải → `/tin-tuc`
- Wave SVG divider trên cùng
- `CTABanner` cuối

### 7. Location (`#vi-tri`)

**Google Maps embed** + **Contact info card** side-by-side (3:2 ratio desktop).

Thông tin liên hệ:
- Địa chỉ: Số 1 đường số 8, Thông Tay Hội, Hồ Chí Minh
- Hotline: 0938 432 178 (`tel:`)
- Zalo: 0938 432 178 (`zalo.me/...`)
- Giờ mở cửa: 7:00 — 21:00, tất cả các ngày

- Bản đồ tọa độ `10.8370625, 106.6645925` zoom 17
- Card có top accent gradient + logo GS
- CTA: Gọi Ngay + Chat Zalo (min touch-target 44px)
- `FadeIn` direction left/right cho map và card

---

## Layout Components

### Header

- **Fixed sticky** — trong suốt trên hero, chuyển trắng + blur khi scroll > 10px
- **Desktop nav** (lg+): 7 link — Trang Chủ, Giới Thiệu, Dịch Vụ, Quy Trình, Tin Tức, Vị Trí, Liên Hệ
- **Mobile menu**: toggle hamburger → slide menu + CTA gọi ngay
- **CTA header**: "0938 432 178" nút primary (ẩn trên mobile nhỏ)
- `aria-label="Điều hướng chính"` cho nav

Anchor links:
| Label | Href |
|---|---|
| Trang Chủ | `/` |
| Giới Thiệu | `#gioi-thieu` |
| Dịch Vụ | `#dich-vu` |
| Quy Trình | `#quy-trinh` |
| Tin Tức | `#tin-tuc` |
| Vị Trí | `#vi-tri` |
| Liên Hệ | `#lien-he` (Footer) |

### Footer (`#lien-he`)

4-column layout (mobile: 1 cột → lg: 4 cột):
1. **Brand** — Logo, tagline, icon Facebook + Zalo
2. **Liên Kết** — Quick links 6 mục
3. **Dịch Vụ** — Danh sách 7 dịch vụ
4. **Liên Hệ** — Phone, địa chỉ, giờ mở cửa

Bottom bar: © 2025 + "Đang hoạt động" dot pulse

### FloatingCTA

Hiển thị sau khi scroll > 300px, cố định bottom-right.

| Nút | Hành động |
|---|---|
| Facebook | Mở fanpage `_blank` |
| Zalo | Chat Zalo `_blank` |
| Phone | `tel:0938432178` (pulsing animation) |
| Scroll Top | Cuộn về đầu trang |

Hover: tooltip label trượt từ phải, scale 1.1

---

## Design System — Shared UI Components

### CTAButton

```tsx
<CTAButton href="..." variant="primary|white|ghost" size="sm|md|lg">
  <Icon /> Label
</CTAButton>
```

| Variant | Dùng khi |
|---|---|
| `primary` (mặc định) | CTA chính trên nền trắng/sáng |
| `white` | CTA chính trong CTABanner (nền xanh/tối) |
| `ghost` | CTA thứ cấp (Zalo, phụ) |

- Shimmer effect trên hover (primary + white)
- Scale 1.05 khi hover
- Không có prop `text` — content là children

### SectionHeader

```tsx
<SectionHeader
  label="Badge text"
  title={<>Title with <span className="...gradient">Color</span></>}
  description="Mô tả ngắn"
  wrapperClass="mb-16"      // mặc định
  descriptionClass="max-w-xl" // mặc định
/>
```

- Tự động có `.reveal` class
- Không có prop `subtitle` — dùng `description`

### TiltCard

```tsx
<TiltCard className="...">
  {children}
</TiltCard>
```

- 3D perspective tilt `rotateX/Y ±14deg` khi di chuột
- rAF-throttled để smooth
- Reset transform khi mouse leave

### CTABanner

```tsx
<CTABanner
  title="Tiêu đề"
  description={<>Text <strong>bold</strong></>}
  phoneLabel="Gọi Ngay"   // mặc định
  preTitle="Dòng nhỏ trên"
  variant="blue|dark"      // mặc định blue
  className="mt-12"
/>
```

- Luôn có 2 CTA: Phone (white) + Zalo (ghost)
- Variant `blue`: gradient blue→cyan
- Variant `dark`: gradient slate-800→slate-900

### StaggerGrid + StaggerItem

```tsx
<StaggerGrid className="grid ...">
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card />
    </StaggerItem>
  ))}
</StaggerGrid>
```

- Framer Motion `whileInView` — kích hoạt khi vào viewport
- Stagger 80ms giữa các item
- Spring animation: opacity 0→1, y 32→0, scale 0.95→1

### FadeIn

```tsx
<FadeIn direction="up|down|left|right|zoom" delay={0.1}>
  {children}
</FadeIn>
```

- `whileInView` với viewport margin -60px
- Spring stiffness 60, damping 14

### AnimatedStepCard

- 3D flip entrance (rotateX 50→0, scale 0.9→1)
- Delay stagger theo `index * 0.12s`
- `useReducedMotion()` — tắt animation nếu user bật accessibility
- Hover: icon scale 1.12 + rotateY 15deg

---

## Animation System (globals.css)

| Utility | Mô tả |
|---|---|
| `.shimmer-text` | Gradient shimmer chạy trên text highlight |
| `animate-float` | Float up-down nhẹ (3s loop) cho badges |
| `animate-ken-burns` | Zoom slow 10s cho ảnh hero |
| `phone-pulse` | Pulse xanh lá cho nút phone floating |
| `gradient-border` | Border gradient animation |
| `animate-count-up` | Số đếm lên (stats) |
| `dot-pattern` | Overlay chấm tối |
| `dot-pattern-white` | Overlay chấm trắng (trên nền đậm) |
| `.section-label` | Badge pill nhỏ với border gradient |
| `.reveal` | Scroll entrance — opacity 0→1, y 24→0 |
| `.reveal-delay-1`…`.reveal-delay-8` | Stagger 80ms/bước (max delay-8) |
| `tilt-card` | Base style cho TiltCard |

**CSS Custom Properties:**
```css
--color-brand        /* blue-600 #2563eb */
--color-brand-dark   /* blue-700 */
--color-accent       /* cyan-500 */
--color-accent-light /* cyan-100 */
```

---

## SEO & Metadata

> Chi tiết đầy đủ + checklist các bước còn lại: `docs/seo-setup.md`

### Trạng thái

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Google Business Profile | ✅ Đã có | Yếu tố quan trọng nhất để rank "giặt sấy gần đây" |
| sitemap.xml | ✅ Đã có | `/sitemap.xml` — Next.js tự generate từ `sitemap.ts` |
| robots.txt | ✅ Đã có | `/robots.txt` — Next.js tự generate từ `robots.ts` |
| JSON-LD LocalBusiness | ✅ Đã có | `layout.tsx` |
| Metadata (title, OG, Twitter, canonical) | ✅ Đã có | `layout.tsx` |
| Google Search Console | ⏳ Chưa verify | Thay `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` trong `layout.tsx` |
| Facebook Pixel | ⏳ Chờ Pixel ID | Placeholder `YOUR_PIXEL_ID` trong `layout.tsx` |
| Google Tag Manager | ⏳ Chờ GTM ID | Placeholder `GTM-XXXXXXX` trong `layout.tsx` |

### Từ khóa SEO mục tiêu

| Từ khóa | Ưu tiên |
|---|---|
| giặt sấy 24h gò vấp | ⭐⭐⭐⭐⭐ |
| giặt sấy gần đây | ⭐⭐⭐⭐⭐ (location intent — rank nhờ Google Business) |
| giặt sạch gò vấp | ⭐⭐⭐⭐ |
| giặt nhanh khử mùi hcm | ⭐⭐⭐⭐ |
| giặt ủi tận nơi gò vấp | ⭐⭐⭐ |
| giặt hấp vest áo dài | ⭐⭐⭐ |
| giặt nệm sofa tại nhà | ⭐⭐⭐ |
| giặt giày gò vấp | ⭐⭐ |

### Metadata (`layout.tsx`)

```
title (default):  Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi · Giao Nhận Tận Nơi
title (template): %s | Giặt Sấy 24h Gò Vấp
description:      Giặt sấy 24h Gò Vấp — giặt sạch, nhanh, khử mùi. Giặt sấy gần đây,
                  giao nhận tận nơi. Từ 13.000đ/kg. Mở cửa 7:00-21:00. Hotline: 0938 432 178.
canonical:        https://www.giatsay24hgovap.com
og:title:         Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi
og:image:         /images/shop-front-1.jpg (815×1200)
og:siteName:      Giặt Sấy 24h Gò Vấp
locale:           vi_VN
twitter:card:     summary_large_image
```

### JSON-LD LocalBusiness

Schema.org `LocalBusiness` inject trong `<body>` của RootLayout:
- `name`, `description`, `url`, `telephone`, `image`, `priceRange`
- `address` (PostalAddress — Gò Vấp, HCM)
- `geo` (GeoCoordinates — lat/lng chính xác: 10.8370625, 106.6645925)
- `openingHoursSpecification` — 7:00-21:00 tất cả các ngày

### H1 SEO

```tsx
<h1>
  <span className="sr-only">Giặt Sấy 24h Gò Vấp — </span>
  {slide.title}     // "Sạch Đúng Nghĩa"
  {slide.highlight} // "Đẹp Như Mới"
</h1>
```

Keyword "giặt sấy + Gò Vấp" trong `<h1>` invisible với user (screen-reader only).

### Ads Scripts

Pixel và GTM dùng `<Script strategy="afterInteractive">` — không ảnh hưởng đến First Paint.
Thay placeholder khi có ID thực, xem hướng dẫn tại `docs/seo-setup.md`.

---

## Responsive Breakpoints

| Viewport | Behavior |
|---|---|
| Mobile (375px+) | 1 cột, py-14, nav ẩn → hamburger |
| Tablet (sm: 640px+) | ServicesGrid 2 cột |
| Tablet (md: 768px+) | ProcessSteps hàng ngang, Gallery grid đầy đủ |
| Desktop (lg: 1024px+) | ServicesGrid 4 cột, Hero 2 cột, nav hiện |
| Wide (xl: 1280px+) | Font hero tăng lên 7xl |

---

## Data Files

### `data/testimonials.ts`

```ts
export interface Testimonial {
  id: number; name: string; location: string;
  rating: number; comment: string; service: string; avatar?: string;
}
export const testimonials: Testimonial[]; // 6 items
export const stats: { value: string; label: string }[]; // 4 items
```

### `data/news.ts`

```ts
export interface NewsPost {
  id: number; title: string; excerpt: string;
  date: string; category: string; image?: string; slug: string;
}
export const newsPosts: NewsPost[]; // 3 items
```

### `data/branches.ts`

Dữ liệu chi nhánh — hiện dùng cho `BranchCarousel` (component đã build nhưng chưa hiển thị trên trang chủ).

---

## Ghi Chú Kỹ Thuật

- `"use client"` chỉ ở: Header, FloatingCTA, HeroBanner, TiltCard, StaggerGrid, AnimatedStepCard, FadeIn — các file thực sự cần hook/event
- Tất cả section còn lại là **Server Components** (không có `"use client"`)
- `ScrollRevealInit` — client component khởi tạo IntersectionObserver cho `.reveal` classes
- `suppressHydrationWarning` trên `<html>` và `<body>` để tránh hydration mismatch từ browser extensions
- TypeScript: `npx tsc --noEmit` → 0 errors
