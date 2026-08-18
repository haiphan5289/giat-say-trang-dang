# SEO & Growth — giatsay24hgovap.com

> Cập nhật lần cuối: 2026-08-18 (đối chiếu lại với code thực tế — doc cũ bị lỗi thời 2 tháng)

---

## Điểm SEO Hiện Tại

| Nhóm | Điểm |
|---|---|
| Technical SEO | 9/10 ✅ |
| Landing Pages | 8/10 (4/6 trang) |
| Conversion | 8.5/10 ✅ |
| Internal Linking | 8/10 ✅ (Footer, Homepage, Landing↔Landing, Landing↔Blog, Blog↔Blog đều đã link — 2026-08-18) |
| Google Business | 7/10 🟡 |
| Reviews | 6/10 🟡 |
| Blog/Content | 7/10 ✅ (30 bài đã viết, route `/tin-tuc/[slug]` live — không phải 0/20 như ghi trước đó) |
| GTM / Ads Tracking | 8/10 ✅ GTM + GA4 live |

---

## ✅ Đã Xong

- Sitemap, robots.txt, canonical, JSON-LD (LocalBusiness + FAQ + AggregateRating)
- OpenGraph, Twitter Card, Google Search Console (verified 2026-06-05)
- 4 landing pages: `/giat-say-go-vap`, `/giat-giay-go-vap`, `/giat-chan-men-go-vap`, `/giat-ui-tan-noi-go-vap`
- Google Business verified — địa chỉ, SĐT, giờ khớp website
- 11 Google Reviews 5.0★ — đồng bộ AggregateRating trong `layout.tsx`
- **Blog: 30 bài đã viết** trong `data/news.ts`, route `/tin-tuc/[slug]/page.tsx` với `generateMetadata` + `generateStaticParams` đã live, sitemap tự động include tất cả (2026-08-18, khác hẳn note cũ "3 bài mẫu")
- **Internal linking đầy đủ** (2026-08-18): `Footer.tsx` link tới 4 landing pages · Homepage `ServicesGrid.tsx` link tới 4 landing pages · mỗi landing page có "Dịch vụ liên quan" (chéo landing↔landing) + "Bài viết liên quan" (landing→3 bài blog cùng chủ đề) · mỗi bài blog có "Bài viết liên quan" (cùng category, blog↔blog) + "Dịch vụ liên quan" (blog→landing)
- **GTM** `GTM-54R3MFLD` — script cài trong `layout.tsx`, đã publish v1
- **GA4** `G-MTNLMFDDP5` — property `giatsay24hgovap.com`, track click Hotline + Zalo
- GTM Tags: `GA4 - Configuration`, `GA4 - Click Hotline`, `GA4 - Click Zalo`
- GTM Triggers: `Click - Hotline` (`tel:`), `Click - Zalo` (`zalo.me`)
- GTM Preview verified: `GA4 - Configuration` ✅, `GA4 - Click Hotline` ✅, `GA4 - Click Zalo` ✅ — data đang gửi lên GA4 thật

---

## Việc Cần Làm — Theo Ưu Tiên

> **Nếu chỉ làm được 3 việc tuần này:** Chạy Google Search Ads → Tăng Reviews → Cài GTM

### P1 — Tuần này (tạo khách nhanh nhất)

- [x] **Chạy Google Search Ads** — PMax, 200k/ngày, 5km radius Gò Vấp ✅ đang chạy
- [x] **Cài GTM + GA4** — `GTM-54R3MFLD` + `G-MTNLMFDDP5`, track Hotline + Zalo ✅ Live & verified
- [x] **reviewCount: 20** — đã cập nhật `layout.tsx`, đã push main 2026-06-17 ✅
- [x] **Google Reviews: 20** — đạt mốc 20 reviews 5.0 ⭐ (2026-06-16) ✅
- [x] **Google Business Posts** — 2 bài tuần 1 (quần áo + giày) ✅
- [ ] **Negative Keywords** — thêm vào Google Ads: tuyển dụng, việc làm, máy giặt, cách giặt, miễn phí 🔴
- [ ] **Liên hệ Google Support** — fix Map ad "Website" button → 404 (script: `docs/google-ads-map-404-issue.md`)
- [ ] **Xác minh Google Ads (D&B)** — đăng ký hộ kinh doanh cá thể tại UBND Quận Gò Vấp, deadline **17/7/2026**
- [ ] **Google Business Posts + Ảnh** — tiếp tục 1–2 bài/tuần, mục tiêu 50+ ảnh thực tế

### P2 — Trong 30 ngày

- [x] **Route `/tin-tuc/[slug]/page.tsx`** — `generateMetadata` + `generateStaticParams` live ✅ 2026-08-18
- [x] **Viết bài blog** — 30 bài đã có trong `data/news.ts` (vượt mục tiêu 10 bài ban đầu) ✅ 2026-08-18

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

- [x] **Internal linking** — Footer + Homepage → 4 landing pages, landing↔landing, landing↔blog, blog↔blog đều đã link ✅ 2026-08-18
- [ ] **Landing page `/giat-rem-cua-go-vap`** — keyword: giặt rèm cửa gò vấp, giặt màn cửa
- [ ] **Landing page `/giat-hap-go-vap`** — keyword: giặt hấp vest gò vấp
- [x] **Landing page `/giat-gau-bong-go-vap`** — ✅ 2026-08-18, giá Từ 30.000đ/kg (khớp `PricingTable.tsx`, `FAQ.tsx`, master spec)

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
| `/giat-rem-cua-go-vap` | giặt rèm cửa gò vấp | ⏸ Chưa có dịch vụ thật |
| `/giat-hap-go-vap` | giặt hấp vest gò vấp | ⏸ Chưa có dịch vụ thật |
| `/giat-gau-bong-go-vap` | giặt gấu bông gò vấp | ✅ Done (2026-08-18) |

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
| `web/src/app/layout.tsx` | JSON-LD LocalBusiness, AggregateRating, GTM script (`GTM-54R3MFLD`) |
| `web/src/app/sitemap.ts` | Thêm URL khi tạo landing page mới |
| `web/src/data/news.ts` | Data bài blog |
| `web/src/app/tin-tuc/page.tsx` | Blog index |
| `web/src/components/sections/ServicesGrid.tsx` | Links homepage → landing pages |
