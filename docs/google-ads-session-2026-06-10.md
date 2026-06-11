# Google Ads — Tiến Độ Ngày 2026-06-10

> Ghi lại tất cả việc đã làm trong buổi setup, để tiếp tục lần sau.

---

## Tài Khoản

| | |
|---|---|
| Google Ads Account mới | **993-709-7949** |
| Account cũ (đã đóng) | 645-721-5152 — bỏ qua |
| GA4 Property | G-MTNLMFDDP5 (giatsay24hgovap.com) |
| GTM Container | GTM-54R3MFLD |

---

## Cập Nhật 2026-06-11

| | |
|---|---|
| **Trạng thái campaign** | Đủ điều kiện · Đang học ✅ (đã được Google approve) |
| **Số dư tài khoản** | 462.963đ |
| **Đã nạp** | 500.000đ ngày 11/6 qua MoMo •••• 30003 |
| **Đã tiêu tháng 6** | 37.037đ |
| **Google Business** | Hiện trên map "giặt sấy gò vấp" — 5.0 ⭐ (16 reviews) ✅ |

**Ước tính ngân sách:**
- Tốc độ hiện tại ~37k/ngày → 500k còn lại hết trong ~13 ngày
- Max budget 200k/ngày → cần ~6 triệu để chạy 1 tháng đầy đủ
- Khi hết tiền Google tự tạm dừng → cần nạp thêm để không bị gián đoạn

**Ghi chú:** Ad Preview Tool báo "không có từ khóa phù hợp" là bình thường với Smart Campaign — Google AI tự quyết định khi nào show ads, không dùng keyword truyền thống.

### Fix Độ Mạnh Quảng Cáo — Vòng 2 (11/6/2026)

Độ mạnh sau vòng 1: **Trung bình** (lên từ Kém ✅). Còn thiếu 1 headline + sitelink descriptions.

**Đã bổ sung:**

Headline thứ 11:
- Nhận Về Trong Ngày

Sitelink descriptions (4 sitelinks):

| Sitelink | Dòng 1 | Dòng 2 |
|---|---|---|
| Giặt Sấy Quần Áo | Từ 13.000đ/kg - Giặt Nhanh Sấy Thơm | Nhận & Giao Tận Nhà Khu Vực Gò Vấp |
| Giặt Chăn Mền | Từ 20k/kg - Sạch Khuẩn Thơm Lâu | Chăn Mền Giặt Đúng Cách, Không Xù Lông |
| Giặt Giày | Từ 50.000đ/đôi - Sạch Bóng, Không Ố Vàng | Giặt Đúng Chất Liệu Từng Hãng Giày |
| Giặt Ủi Tận Nơi | Ủi Phẳng, Đóng Gói Sạch, Giao Đúng Hẹn | Không Mất Công Ra Ngoài - Đặt Lịch Ngay |

**Trạng thái campaign sau fix:** Đủ điều kiện · Đang học — chiến lược giá thầu đang trong giai đoạn học, bình thường với campaign mới.

**Lưu ý:** "24h" = thời gian xử lý đồ, không phải giờ mở cửa. Giờ mở cửa thật: 08:00–20:00, trừ chủ nhật.

**Lịch quảng cáo (đã cập nhật 11/6):**
- T2–T6: 08:00–20:00 ✅
- T7: 08:00–20:00 ✅
- CN: không chạy ✅

**Kế hoạch:** Kiểm tra lại ngày 16–17/6 khi đủ data click/impression/conversion.

---

### Fix Độ Mạnh Quảng Cáo — Vòng 1 (11/6/2026)

Phát hiện trạng thái thật là **"Đủ điều kiện (Có giới hạn)"** do "Độ mạnh của quảng cáo là kém".

**Đã bổ sung vào Nhóm thành phần 1:**

Headlines (thêm 8 cái, tổng 11):
- Giặt Chăn Mền Gò Vấp
- Giặt Giày Chuyên Nghiệp
- Giao Nhận Tận Nhà Gò Vấp
- Nhận Đồ Tại Gò Vấp
- Chuyên Giặt Ủi
- Giá Rẻ - Giao Nhanh - Sạch
- Gọi Ngay Được Tư Vấn Miễn Phí
- Đặt Lịch Ngay - Có Người Nhận

Descriptions (thêm 2 cái, tổng 4):
- "Giặt sấy chuyên nghiệp tại Gò Vấp. Nhận giao tận nơi, giá từ 13k/kg, mở cửa 24 giờ."
- "Giặt chăn mền, giày, quần áo nhanh sạch. Phục vụ Gò Vấp và khu vực lân cận. Gọi ngay!"

Long headline (thêm 1 cái):
- "Giặt sấy 24h tại Gò Vấp - Nhận giao tận nhà - Giá từ 13k/kg - Chăn mền, giày, quần áo"

**Lưu ý:** Google không cho phép số điện thoại trong headlines (vi phạm editorial policy).

**Trạng thái:** Đã lưu, chờ Google cập nhật điểm độ mạnh (15-30 phút).

---

## ✅ Đã Làm Xong

### GTM + GA4
- GTM-54R3MFLD cài trong `layout.tsx`, đã publish v2
- GA4 G-MTNLMFDDP5 live, track đúng property giatsay24hgovap.com
- Tags verified qua GTM Preview:
  - `GA4 - Configuration` ✅
  - `GA4 - Click Hotline` ✅
  - `GA4 - Click Zalo` ✅
- **click_hotline** → đã star làm Key Event trong GA4 ✅
- **click_zalo** → GTM confirmed firing, chờ 24h để xuất hiện trong GA4 Events → star làm Key Event

### Google Ads Campaign (Smart Campaign)

**Mục tiêu:** Cuộc gọi điện thoại

**Thông tin doanh nghiệp:**
- Tên: Giặt Sấy 24h Gò Vấp
- SĐT: 0938 432 178
- Website: https://giatsay24hgovap.com

**Từ khoá đã thêm:**
- giặt sấy gò vấp
- giặt sấy gần đây
- tiệm giặt sấy gần đây
- giặt chăn mền gò vấp
- giặt giày gò vấp

**Địa điểm:** TP. Hồ Chí Minh (Gò Vấp + keywords tự filter)

**Ngôn ngữ:** Tiếng Việt

**Ad Headlines đã nhập:**
- Giặt Sấy Gò Vấp 24h - Gọi Ngay
- Giá Từ 13k/kg - Nhận Giao Tận Nơi
- *(headline 3 — kiểm tra lại trong dashboard)*

**Ad Description:**
- Giặt sấy, chăn mền, giày. Nhận và giao tận nhà tại Gò Vấp và khu vực lân cận. Hotline hỗ trợ nhanh. Đặt lịch ngay để được báo giá miễn phí.

**Sitelinks (4 cái):**

| Tiêu đề | URL |
|---|---|
| Giặt Chăn Mền | https://giatsay24hgovap.com/giat-chan-men-go-vap |
| Giặt Giày | https://giatsay24hgovap.com/giat-giay-go-vap |
| Giặt Sấy Quần Áo | https://giatsay24hgovap.com/giat-say-go-vap |
| Giặt Ủi Tận Nơi | https://giatsay24hgovap.com/giat-ui-tan-noi-go-vap |

**Chiến lược giá thầu:** Lượt chuyển đổi (Maximize Conversions) — không đặt Target CPA vì account mới

**Ngân sách:** 200.000đ/ngày (~6 triệu/tháng)

**Thanh toán:** MoMo e-wallet •••• 30003

**Trạng thái:** Đã submit → Google đang review (1-3 ngày)

---

## ⏳ Việc Cần Làm Tiếp

### Ngay khi Google approve campaign (1-3 ngày tới)

- [ ] Vào Google Ads → Chiến dịch → Xác nhận campaign đang **bật** (toggle xanh)
- [ ] Kiểm tra ads có đang hiển thị không: Google `giặt sấy gò vấp` trên mobile
- [ ] Theo dõi số cuộc gọi trong 3 ngày đầu

### GA4 — click_zalo ✅ Hoàn tất
- [x] `click_zalo` đã xuất hiện trong GA4 Events ✅
- [x] Đã star làm Key Event ✅
- [x] Đã import vào Google Ads ✅

### Google Ads Conversion Tracking ✅ Hoàn tất
- [x] Import `click_hotline` từ GA4 → "Lượt liên hệ" ✅
- [x] Import `click_zalo` từ GA4 → "Lượt liên hệ" ✅
- [x] Cả 2 đang hiển thị "Đang hoạt động" trong Google Ads → Mục tiêu ✅

### Tuần 1 — Song song
- [ ] Tăng Google Reviews: 11 → 20 (xin review sau mỗi đơn)
- [ ] Google Business Posts: 2 bài/tuần
- [ ] Google Business Ảnh: 5 ảnh/tuần (máy giặt, chăn mền, giày, cửa hàng)

---

## Cách Bật/Tắt Campaign

Vào **Google Ads → Chiến dịch** → Toggle xanh/xám cạnh tên campaign:
- Xanh = đang chạy, tốn tiền
- Xám = tạm dừng, không tốn tiền

---

## Cách Theo Dõi Hiệu Quả

| Chỉ số | Xem ở đâu |
|---|---|
| Số click, impression | Google Ads → Chiến dịch |
| Số cuộc gọi | Google Ads → Chiến dịch → cột "Lượt chuyển đổi" |
| Click Hotline / Zalo | GA4 → Báo cáo → Sự kiện |
| Cost/Lead | Google Ads → Chiến dịch → cột "Chi phí/lượt chuyển đổi" |

---

## Điều Chỉnh Sau Tuần 1

- Nếu có 20-50 conversions → chuyển bidding sang **Maximize Conversions với Target CPA**
- Keyword không có click sau 7 ngày → tắt keyword đó
- Keyword có click nhưng không có call → xem lại landing page
- Thêm **Negative Keywords**: tuyển dụng, việc làm, máy giặt, cách giặt, miễn phí, hướng dẫn

---

## File Liên Quan

| File | Nội dung |
|---|---|
| `docs/google_search_ads.md` | Roadmap đầy đủ, keyword list, ad copy mẫu |
| `docs/seo-setup.md` | Trạng thái SEO tổng thể, GTM/GA4 status |
| `web/src/app/layout.tsx` | GTM script, GA4 config, JSON-LD |
