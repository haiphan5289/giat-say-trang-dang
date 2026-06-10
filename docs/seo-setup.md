# SEO & Growth — giatsay24hgovap.com

> Cập nhật lần cuối: 2026-06-10

---

## Điểm SEO Hiện Tại

| Nhóm | Điểm |
|---|---|
| Technical SEO | 9/10 ✅ |
| Landing Pages | 8/10 (4/6 trang) |
| Conversion | 8.5/10 ✅ |
| Internal Linking | 5/10 🟡 |
| Google Business | 7/10 🟡 |
| Reviews | 6/10 🟡 |
| Blog/Content | 2/10 🔴 |
| GTM / Ads Tracking | 0/10 ⏳ Chưa cài |

---

## ✅ Đã Xong

- Sitemap, robots.txt, canonical, JSON-LD (LocalBusiness + FAQ + AggregateRating)
- OpenGraph, Twitter Card, Google Search Console (verified 2026-06-05)
- 4 landing pages: `/giat-say-go-vap`, `/giat-giay-go-vap`, `/giat-chan-men-go-vap`, `/giat-ui-tan-noi-go-vap`
- Google Business verified — địa chỉ, SĐT, giờ khớp website
- 11 Google Reviews 5.0★ — đồng bộ AggregateRating trong `layout.tsx`
- Blog index `/tin-tuc` + 3 bài mẫu trong `data/news.ts`

---

## Việc Cần Làm — Theo Ưu Tiên

> **Nếu chỉ làm được 3 việc tuần này:** Chạy Google Search Ads → Tăng Reviews → Cài GTM

### P1 — Tuần này (tạo khách nhanh nhất)

- [ ] **Chạy Google Search Ads** — 200k–300k/ngày, landing pages: `/giat-say-go-vap`, `/giat-chan-men-go-vap`, `/giat-giay-go-vap`
- [ ] **Cài GTM + Conversion Tracking** — theo dõi Click Hotline, Click Zalo, Form Submit → biết keyword nào ra khách. Thay placeholder tại `layout.tsx:95`
- [ ] **Tăng Google Reviews: 11 → 30** — xin review sau mỗi đơn hoàn thành. Cập nhật `aggregateRating.reviewCount` trong `layout.tsx`
- [ ] **Google Business Posts + Ảnh** — 1–2 bài/tuần, mục tiêu 50+ ảnh thực tế (máy giặt, máy sấy, chăn mền, giày, cửa hàng)

### P2 — Trong 30 ngày

- [ ] **Route `/tin-tuc/[slug]/page.tsx`** — data có sẵn trong `data/news.ts`, thêm `generateMetadata` + internal links
- [ ] **Viết 10 bài blog** (1000–1500 từ/bài, mỗi bài có 2–3 internal links + CTA)

| Nhóm | Bài viết | Link về trang |
|---|---|---|
| Chăn mền | Bao lâu nên giặt chăn mền? | `/giat-chan-men-go-vap` |
| Chăn mền | Cách khử mùi chăn mùa mưa | `/giat-chan-men-go-vap` |
| Giày | Giày trắng bị ố vàng phải làm sao? | `/giat-giay-go-vap` |
| Giày | Có nên giặt giày bằng máy giặt không? | `/giat-giay-go-vap` |
| Quần áo | Tại sao quần áo vẫn có mùi sau khi giặt? | `/giat-say-go-vap` |
| Quần áo | Cách phơi đồ mùa mưa nhanh khô | `/giat-say-go-vap` |
| Gấu bông | Bao lâu nên giặt gấu bông? | `/giat-gau-bong-go-vap` |
| Gấu bông | Cách vệ sinh thú bông tại nhà | `/giat-gau-bong-go-vap` |
| Vest | Cách bảo quản vest sau khi giặt hấp | `/giat-hap-go-vap` |
| Chung | Quần áo bị phai màu khi giặt | `/giat-say-go-vap` |

- [ ] **Internal linking** — Homepage → 6 landing pages (`ServicesGrid.tsx`), landing pages liên kết chéo nhau
- [ ] **Landing page `/giat-rem-cua-go-vap`** — keyword: giặt rèm cửa gò vấp, giặt màn cửa
- [ ] **Landing page `/giat-hap-go-vap`** — keyword: giặt hấp vest gò vấp
- [ ] **Landing page `/giat-gau-bong-go-vap`** — chỉ làm nếu thực tế có nhận dịch vụ này

### P3 — Tháng 2

- [ ] **3 Location Pages đầu tiên**: `/giat-say-phuong-5-go-vap`, `/giat-say-phuong-10-go-vap`, `/giat-say-phuong-14-go-vap`
- [ ] **Reviews: 30 → 40+**
- [ ] **PageSpeed audit** — mục tiêu > 90

### P4 — Khi có Ads ngân sách lớn hơn

- [ ] **Facebook Pixel** — thay placeholder tại `layout.tsx:94`
- [ ] **Mở rộng Location Pages** — thêm phường 1, 15, 17 và các quận lân cận

---

## Google Search Ads — Keywords

| Từ khóa | Loại |
|---|---|
| giặt sấy gò vấp | Exact |
| giặt sấy gần đây | Near-me |
| tiệm giặt sấy gần đây | Near-me |
| giặt chăn mền gò vấp | Service |
| giặt giày gò vấp | Service |

---

## Landing Pages

| URL | Từ khóa chính | Trạng thái |
|---|---|---|
| `/giat-say-go-vap` | giặt sấy gò vấp, giặt sấy gần đây | ✅ Done |
| `/giat-giay-go-vap` | giặt giày gò vấp, vệ sinh giày | ✅ Done |
| `/giat-chan-men-go-vap` | giặt chăn mền gò vấp | ✅ Done |
| `/giat-ui-tan-noi-go-vap` | giặt ủi tận nơi gò vấp | ✅ Done |
| `/giat-rem-cua-go-vap` | giặt rèm cửa gò vấp | ❌ Chưa tạo |
| `/giat-hap-go-vap` | giặt hấp vest gò vấp | ❌ Chưa tạo |
| `/giat-gau-bong-go-vap` | giặt gấu bông gò vấp | ⏳ Nếu có dịch vụ |

---

## Local SEO Expansion (P3)

Mỗi trang phải khác nhau **30–40%** — không clone, không chỉ thay tên phường. Cần: nội dung khu vực riêng, thời gian giao nhận, chung cư/khu dân cư nổi bật, review địa phương, FAQ riêng.

| Giai đoạn | Trang |
|---|---|
| 1 | `/giat-say-phuong-5-go-vap`, `/giat-say-phuong-10-go-vap`, `/giat-say-phuong-14-go-vap` |
| 2 | `/giat-say-phuong-1-go-vap`, `/giat-say-phuong-15-go-vap`, `/giat-say-phuong-17-go-vap` |
| 3 | `/giat-say-tan-binh`, `/giat-say-phu-nhuan`, `/giat-say-binh-thanh` |

---

## Kế Hoạch 90 Ngày

| Tháng | Mục tiêu |
|---|---|
| Tháng 1 | Ads chạy, GTM cài, reviews 11→30, 30 ảnh GBP, blog route, 10 bài blog |
| Tháng 2 | 3 location pages, reviews →40+, 5–10 bài blog tiếp |
| Tháng 3 | 20+ bài blog, 6–10 location pages, reviews 50+ |

---

## Không Làm Trong 60 Ngày Đầu

❌ Backlink mua / PBN / Guest Post / Traffic giả / Entity SEO spam / Forum SEO spam

---

## File Liên Quan

| File | Mục đích |
|---|---|
| `web/src/app/layout.tsx` | JSON-LD LocalBusiness, AggregateRating, Pixel/GTM placeholder |
| `web/src/app/sitemap.ts` | Thêm URL khi tạo landing page mới |
| `web/src/data/news.ts` | Data bài blog |
| `web/src/app/tin-tuc/page.tsx` | Blog index |
| `web/src/components/sections/ServicesGrid.tsx` | Links homepage → landing pages |
