# Google Ads — Sponsored Map Ad Website Button 404

> Ghi lại: 2026-06-15

---

## Vấn đề

Khi khách search "giặt sấy gò vấp" → thấy **Sponsored Map local ad** → click **"Website"** → bị redirect về `business.google.com` → **404 error**.

| Loại kết quả | Nút Website | Kết quả |
|---|---|---|
| Organic Maps listing (tự nhiên) | Click → `giatsay24hgovap.com` | ✅ Đúng |
| Sponsored Map ad (quảng cáo) | Click → `business.google.com` | ❌ 404 |

---

## Nguyên nhân gốc

### 1. Campaign type
Campaign đang chạy là **Performance Max (PMax)**, không phải Search Campaign thuần túy.

PMax chạy ads trên nhiều kênh: Search, Display, YouTube, Gmail, **Maps (Local format)**.

### 2. Business Profile được link vào campaign
Trong Asset Group → mục **"Trang doanh nghiệp được liên kết"** đang link tới Google Business Profile.

Khi PMax chạy **local ad format trong Maps**, nó dùng dữ liệu từ Business Profile làm landing page — bao gồm URL.

### 3. URL bị dùng là business.google.com (deprecated)
Google từng có tính năng **tạo website miễn phí** cho doanh nghiệp nhỏ, hosted tại `business.google.com/website/...`

**Tháng 3/2024: Google xóa toàn bộ tính năng này** → tất cả URL `business.google.com/website/...` đều trả về 404.

Nhưng PMax campaign vẫn cache và dùng URL cũ này cho Map local ad format → 404.

### 4. Ad preview trong asset group
Khi xem trước ad trong Asset Group edit, URL hiển thị là `business.google.com/` — xác nhận đây là URL đang được dùng cho Map local format.

---

## Những gì đã thử (không fix được)

| # | Việc đã thử | Kết quả |
|---|---|---|
| 1 | Tắt **Final URL Expansion** trong Campaign Settings → Tối ưu hoá thành phần → Văn bản | ✅ Fix được text search ads, ❌ Map local ad vẫn 404 |
| 2 | Kiểm tra Business Profile website URL | ✅ Đã set đúng `https://www.giatsay24hgovap.com/` — không phải lỗi ở đây |
| 3 | Thử xóa Business Profile link trong Asset Group | ❌ Google không có nút xóa — không thể remove |
| 4 | Thử xóa/link lại Business Profile | ❌ Không thể xóa nên không thực hiện được |

---

## Tại sao không fix được từ Google Ads interface

- Business Profile link trong PMax Asset Group là **bắt buộc**, không có option remove
- URL của Map local ad format được **Google tự generate** từ Business Profile data
- Google deprecated business.google.com nhưng **chưa cleanup cached URLs** trong PMax campaigns
- Đây là lỗi phía Google backend, không phải lỗi cấu hình của advertiser

---

## Impact thực tế

**Ít nghiêm trọng hơn ban đầu nghĩ:**

- Map local ad: nút **"Gọi"** → hoạt động bình thường ✅ (mục tiêu chính của campaign)
- Map local ad: nút **"Website"** → 404 ❌ (thứ yếu)
- Text search ads: → `giatsay24hgovap.com` ✅
- Organic Maps listing Website button: → `giatsay24hgovap.com` ✅

Campaign goal là **cuộc gọi điện thoại** → nút Gọi vẫn work → campaign vẫn có giá trị.

---

## Cách fix duy nhất còn lại

### Liên hệ Google Ads Support

Google Ads → dấu **?** góc trên phải → **Liên hệ hỗ trợ** → Chat

**Script tiếng Anh để paste:**

> My Performance Max campaign (Account: 993-709-7949) has a sponsored local Map ad where the "Website" button redirects to business.google.com instead of my website giatsay24hgovap.com, resulting in a 404 error. The issue appears to be that the campaign is using a deprecated Google Business Profile website URL. My Business Profile website is correctly set to https://www.giatsay24hgovap.com/. Please help fix the destination URL for the local Map ad format in my Performance Max campaign.

Google Support có thể fix từ phía backend.

---

## Trạng thái hiện tại

- [ ] Liên hệ Google Ads Support để fix
- [x] Tắt Final URL Expansion (giảm thiểu ảnh hưởng)
- [x] Xác nhận organic Maps + text search ads hoạt động đúng
- [x] Xác nhận nút "Gọi" trong Map ad vẫn hoạt động

---

## File liên quan

| File | Nội dung |
|---|---|
| `docs/google-ads-session-2026-06-10.md` | Campaign setup và tiến độ |
| `docs/google_search_ads.md` | Roadmap Google Ads |
