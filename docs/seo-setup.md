# SEO Setup — giatsay24hgovap.com

## Trạng thái hiện tại

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Google Business Profile | ✅ Đã có | Cần submit sitemap vào Search Console |
| sitemap.xml | ✅ Đã có | `/sitemap.xml` — Next.js tự generate |
| robots.txt | ✅ Đã có | `/robots.txt` — cho phép tất cả crawlers |
| JSON-LD LocalBusiness | ✅ Đã có | `web/src/app/layout.tsx` |
| Metadata (title, description, OG) | ✅ Đã có | `web/src/app/layout.tsx` |
| Google Search Console | ⏳ Chưa verify | Cần thêm verification code |
| Facebook Pixel | ⏳ Chờ Pixel ID | Placeholder trong layout.tsx |
| Google Tag Manager | ⏳ Chờ GTM ID | Placeholder trong layout.tsx |

---

## Từ khóa SEO mục tiêu

| Từ khóa | Loại | Ưu tiên |
|---|---|---|
| giặt sấy 24h gò vấp | Brand | ⭐⭐⭐⭐⭐ |
| giặt sấy gần đây | Location intent | ⭐⭐⭐⭐⭐ |
| giặt sạch gò vấp | Service | ⭐⭐⭐⭐ |
| giặt nhanh khử mùi hcm | Service | ⭐⭐⭐⭐ |
| giặt ủi tận nơi gò vấp | Service | ⭐⭐⭐ |
| giặt hấp vest áo dài | Service | ⭐⭐⭐ |
| giặt nệm sofa tại nhà | Service | ⭐⭐⭐ |
| giặt giày gò vấp | Service | ⭐⭐ |

> **"Giặt sấy gần đây"** là từ khóa location-based — rank cao nhờ Google Business Profile + reviews, không phải từ metadata.

---

## Cách rank "giặt sấy gần đây"

Google dùng 3 yếu tố chính cho local search, theo thứ tự quan trọng:

1. **Google Business Profile** ✅ Đã có
   - Đảm bảo địa chỉ, giờ mở cửa, SĐT khớp với website
   - Thêm ảnh cửa hàng thường xuyên
   - Trả lời reviews

2. **Google Reviews** — càng nhiều, rating càng cao → rank càng tốt
   - Nhắn khách hàng qua Zalo/Facebook để lại review

3. **Google Search Console** ⏳ Cần làm
   - Submit sitemap: `https://www.giatsay24hgovap.com/sitemap.xml`
   - Verify domain bằng cách thêm `verification.google` vào `layout.tsx`

---

## Các bước còn lại (ưu tiên cao)

### 1. Verify Google Search Console
1. Vào [search.google.com/search-console](https://search.google.com/search-console)
2. Thêm property `www.giatsay24hgovap.com`
3. Chọn phương thức HTML tag → copy verification code
4. Mở `web/src/app/layout.tsx` → thay `REPLACE_WITH_GOOGLE_VERIFICATION_CODE`
5. Submit sitemap: `https://www.giatsay24hgovap.com/sitemap.xml`

### 2. Kết nối Facebook Pixel (khi chạy ads)
1. Vào Meta Business → Events Manager → tạo Pixel
2. Copy Pixel ID
3. Mở `web/src/app/layout.tsx` → thay `YOUR_PIXEL_ID`

### 3. Kết nối Google Tag Manager (khi setup Google Ads)
1. Vào tagmanager.google.com → tạo container
2. Copy GTM-XXXXXXX ID
3. Mở `web/src/app/layout.tsx` → thay `GTM-XXXXXXX`

---

## File liên quan

| File | Mục đích |
|---|---|
| `web/src/app/layout.tsx` | Metadata, JSON-LD, Pixel/GTM scripts |
| `web/src/app/sitemap.ts` | Tự generate `/sitemap.xml` |
| `web/src/app/robots.ts` | Tự generate `/robots.txt` |
