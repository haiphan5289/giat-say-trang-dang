# Kế Hoạch SEO Landing Pages — Giặt Sấy 24h Gò Vấp

## Mục Tiêu

Tạo landing page riêng cho từng dịch vụ để tăng khả năng rank trên Google cho từ khóa cụ thể, thay vì chỉ dựa vào homepage.

---

## Danh Sách Landing Page

| URL | Từ khóa chính | Ưu tiên |
|---|---|---|
| `/giat-say-go-vap` | giặt sấy gò vấp, giặt sấy gần đây | ⭐⭐⭐⭐⭐ |
| `/giat-giay-go-vap` | giặt giày gò vấp, vệ sinh giày gò vấp | ⭐⭐⭐⭐⭐ |
| `/giat-chan-men-go-vap` | giặt chăn mền gò vấp, giặt mền gò vấp | ⭐⭐⭐⭐ |
| `/giat-ui-tan-noi-go-vap` | giặt ủi tận nơi gò vấp, giặt đồ tận nhà | ⭐⭐⭐ |

---

## Cấu Trúc Mỗi Landing Page

```
1. Breadcrumb nav (Home > Tên dịch vụ)
2. Hero Section
   - H1 chứa từ khóa chính
   - Mô tả ngắn
   - Trust points (3 điểm)
   - CTA: Gọi Ngay + Chat Zalo
3. Lợi ích nổi bật (3 cards)
4. Bảng giá dịch vụ
5. Quy trình 4 bước
6. FAQ (5–6 câu) + FAQPage JSON-LD
7. CTABanner
```

---

## Yêu Cầu SEO Mỗi Trang

- H1 duy nhất chứa từ khóa chính
- Meta Title: `[Dịch vụ] Gò Vấp - [USP] | Giặt Sấy 24h Gò Vấp`
- Meta Description: 150–160 ký tự, có từ khóa + hotline
- Canonical URL riêng
- LocalBusiness JSON-LD (tái sử dụng từ layout)
- FAQPage JSON-LD (unique per page)
- Internal link về homepage
- Tối thiểu 600–800 từ nội dung

---

## Stack Kỹ Thuật

- Server Components (Next.js App Router)
- `LandingFAQ` client component (`use client`) dùng chung cho FAQ accordion
- Tái sử dụng: `CTABanner`, `CTAButton`, `FadeIn`, `SectionHeader`
- Sitemap.ts đã cập nhật với 6 URL mới

---

## Trạng Thái Triển Khai

| Landing Page | Đã tạo | SEO Schema |
|---|---|---|
| `/giat-say-go-vap` | ✅ | LocalBusiness + FAQPage |
| `/giat-giay-go-vap` | ✅ | LocalBusiness + FAQPage |
| `/giat-chan-men-go-vap` | ✅ | LocalBusiness + FAQPage |
| `/giat-ui-tan-noi-go-vap` | ✅ | LocalBusiness + FAQPage |

---

## Roadmap Tiếp Theo

1. **Nội dung blog** — 10–20 bài targeting long-tail keywords
   - Cách giặt áo trắng không bị ố vàng
   - Bao lâu nên giặt chăn mền một lần?
   - Cách khử mùi quần áo mùa mưa
   - Có nên giặt giày bằng máy giặt?
2. **Google Reviews** — Thêm review thật từ khách hàng + Review Schema
3. **Hình ảnh thực tế** — Chụp before/after cho từng dịch vụ
4. **Google Search Console** — Verify và submit sitemap
5. **Facebook Pixel + GTM** — Kích hoạt khi có ID thật
