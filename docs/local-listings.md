# Local Listings — Thông tin chuẩn & việc còn lại

> Tạo 2026-09-29. Mọi nơi (Google, Bing, Apple, Facebook, Zalo, website) phải ghi **giống hệt** bảng dưới.

## Thông tin chuẩn (NAP)

| Mục | Giá trị |
|---|---|
| Tên | **Giặt sấy Gò Vấp** (tên trên Google Business — website dùng "Giặt Sấy 24h Gò Vấp" + `alternateName`) |
| Địa chỉ | Số 1 Đường Số 8, Phường Thông Tây Hội, TP. Hồ Chí Minh |
| Địa chỉ (Apple/Bing dạng EN) | 1 Street No. 8, Thông Tây Hội, Thong Tay Hoi, Ho Chi Minh City, Vietnam |
| SĐT | 0938 432 178 (+84938432178) |
| Website | https://www.giatsay24hgovap.com |
| Giờ mở cửa | **09:00 – 20:00, Thứ 2 → Chủ nhật** |
| Danh mục | Laundry service / Dry Cleaning and Laundry Service |
| Tọa độ | 10.8370625, 106.6645925 |

## Trạng thái từng nơi

| Nơi | Link quản lý | Trạng thái (29/9) |
|---|---|---|
| Google Business Profile | https://business.google.com | ✅ Verified — nguồn gốc, Bing tự sync theo |
| Bing Places | https://www.bingplaces.com | ✅ Import từ Google, đã xác minh, chờ publish 7–12 ngày, sync hàng tuần |
| Apple Business | https://business.apple.com | 🟡 Đang claim địa điểm "Giặt sấy Gò Vấp" (account freelancerios0502@gmail.com) |
| Facebook page / Zalo OA | — | ⬜ Chưa thêm link website |

## ⏳ Việc cần làm lại SAU KHI SỬA DNS (website vào được)

Apple báo *"The website has a domain that cannot be resolved"* vì DNS Mắt Bão đang sập → tạm để trống. Khi web chạy lại:

1. **Apple Business → Brands → Brand Profiles → Giặt sấy Gò Vấp → Brand Website:** `https://www.giatsay24hgovap.com`
2. **Apple Business → Brands → Locations → Giặt sấy Gò Vấp → Website:** kiểm tra còn `https://www.giatsay24hgovap.com/` không (nếu đã xoá thì điền lại)
3. **Apple Business → Locations → Hours:** sửa từ "T2–T6 09:00–17:00, T7–CN đóng" → **09:00–20:00 cả tuần** (nếu chưa sửa được trong lúc claim)
3b. **Apple Business → xác minh tổ chức (Verify Now / bước 4 khi claim):** cần 2 phương thức, không có gọi điện/SMS. Chọn:
   - Method 1: **Domain Validation** — Apple cho 1 TXT record → thêm vào Vercel → Domains → giatsay24hgovap.com → DNS Records
   - Method 2: **Utility Bill** (hoá đơn điện/nước/internet ghi địa chỉ Số 1 Đường Số 8) hoặc **Lease or Property Agreement**
   - (Business ID / Business Licence / Tax Document: chưa có — cần đăng ký hộ kinh doanh)
4. **Search Console:** Request Indexing ~10 URL/ngày (5 trang dịch vụ → 6 trang phường → blog), gửi lại `sitemap.xml`
5. **Facebook / Zalo OA:** thêm link website vào phần giới thiệu

## DNS (đang xử lý)

- Registrar: Mắt Bão (xem `docs/domain-setup.md`)
- Vấn đề: `ns1/ns2.matbao.com` không phản hồi → domain không truy cập được
- Hướng xử lý: đổi nameserver sang `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
- ⚠️ Trước khi đổi: chụp tab **Bản ghi DNS** ở Mắt Bão để chép TXT `google-site-verification` (+ MX nếu có) sang Vercel
