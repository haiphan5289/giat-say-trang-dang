import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowLeft, Clock, MapPin, Star } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import CTABanner from "@/components/ui/CTABanner";
import LandingFAQ, { type FAQItem } from "@/components/ui/LandingFAQ";
import { BUSINESS } from "@/config/business";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Giặt Sấy Gò Vấp - Nhanh · Sạch · Giao Nhận Tận Nơi",
  description:
    "Dịch vụ giặt sấy tại Gò Vấp, TP.HCM. Giặt sạch, khử mùi, sấy khô. Giao nhận tận nơi trong vòng 30–60 phút. Từ 13.000đ/kg. Hotline: 0938 432 178.",
  keywords: ["giặt sấy gò vấp", "giặt sấy gần đây", "giặt sạch gò vấp", "giặt sấy tận nơi", "dịch vụ giặt sấy hcm"],
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-say-go-vap" },
  openGraph: {
    title: "Giặt Sấy Gò Vấp - Nhanh · Sạch · Giao Nhận Tận Nơi",
    description: "Dịch vụ giặt sấy tại Gò Vấp. Từ 13.000đ/kg. Giao nhận tận nơi. Hotline: 0938 432 178.",
    url: "https://www.giatsay24hgovap.com/giat-say-go-vap",
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Sấy 24h Gò Vấp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Sấy Gò Vấp - Nhanh · Sạch · Giao Nhận Tận Nơi",
    description: "Dịch vụ giặt sấy tại Gò Vấp. Từ 13.000đ/kg. Giao nhận tận nơi. Hotline: 0938 432 178.",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt sấy tại Gò Vấp mất bao lâu?",
    a: "Giặt thường mất 2–4 tiếng. Dịch vụ giặt nhanh cam kết trả đồ trong cùng buổi (sáng giao – chiều nhận, chiều giao – sáng hôm sau nhận). Chúng tôi nhắn tin thông báo khi đồ hoàn thành.",
  },
  {
    q: "Có giao nhận tận nơi ở Gò Vấp không?",
    a: "Có. Nhân viên đến lấy đồ tại địa chỉ của bạn trong vòng 30–60 phút sau khi đặt lịch. Phục vụ toàn bộ Gò Vấp và các quận lân cận như Bình Thạnh, Phú Nhuận, Tân Bình, Quận 12.",
  },
  {
    q: "Giặt sấy giá bao nhiêu?",
    a: "Giặt thường từ 13.000đ/kg · Giặt nhanh từ 20.000đ/kg · Giặt giày từ 50.000đ/đôi · Giặt gấu bông từ 30.000đ/kg · Giặt chăn mền từ 20.000–30.000đ/kg. Báo giá minh bạch trước khi thực hiện.",
  },
  {
    q: "Máy móc và hóa chất có an toàn không?",
    a: "Chúng tôi sử dụng máy giặt công nghiệp nhập khẩu từ Nhật Bản và nước giặt chuyên dụng, an toàn với da nhạy cảm và trẻ nhỏ. Không gây phai màu hay hư hại vải.",
  },
  {
    q: "Mở cửa mấy giờ?",
    a: `Mở cửa ${BUSINESS.hours}. Gọi hotline ${BUSINESS.hotline} để đặt lịch, nhân viên phản hồi trong vài phút.`,
  },
  {
    q: "Đặt lịch bằng cách nào?",
    a: "Gọi hotline 0938 432 178. Cho biết địa chỉ, số kg ước tính và khung giờ thuận tiện — nhân viên xác nhận ngay.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const pricing = [
  { service: "Giặt Thường", price: "Từ 13.000đ", unit: "/kg", note: "Sạch · Thơm · An toàn" },
  { service: "Giặt Nhanh", price: "Từ 20.000đ", unit: "/kg", note: "Trả trong ngày", popular: true },
  { service: "Giặt Giày", price: "Từ 50.000đ", unit: "/đôi", note: "Phục hồi màu sắc" },
  { service: "Giặt Gấu Bông", price: "Từ 30.000đ", unit: "/kg", note: "An toàn cho trẻ em" },
  { service: "Giặt Chăn Mền", price: "20k – 30k", unit: "/kg", note: "Khử khuẩn sâu" },
];

const steps = [
  { n: "01", title: "Đặt Lịch", desc: "Gọi hotline, cho biết địa chỉ và số lượng đồ cần giặt." },
  { n: "02", title: "Lấy Đồ Tận Nơi", desc: "Nhân viên đến đúng giờ, kiểm kê và giao biên nhận tại chỗ." },
  { n: "03", title: "Giặt & Khử Mùi", desc: "Phân loại chất liệu, giặt đúng chế độ, sấy khô và gấp phẳng." },
  { n: "04", title: "Giao Về Tận Tay", desc: "Đồ thơm sạch, đóng gói kỹ, giao đúng hẹn trong ngày." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: "Giặt Sấy Gò Vấp", item: "https://www.giatsay24hgovap.com/giat-say-go-vap" },
  ],
};

export default function GiatSayGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-blue-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Dịch vụ giặt sấy tại Gò Vấp
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Sấy Gò Vấp —{" "}
              <span className="shimmer-text">Nhanh · Sạch · Tận Nơi</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt sấy chuyên nghiệp tại Gò Vấp, TP.HCM. Công nghệ máy giặt Nhật Bản, nước giặt nhập khẩu an toàn. Giao nhận tận nơi trong vòng 30–60 phút. Từ <strong className="text-white">13.000đ/kg</strong>.
            </p>
            <ul className="space-y-2 mb-10">
              {["Lấy đồ trong 30–60 phút sau khi đặt lịch", "Trả đồ trong ngày, đúng giờ cam kết", "Báo giá trước khi giặt"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={BUSINESS.hotlineHref} size="lg">
                <Phone size={20} /> Đặt Lịch Ngay — {BUSINESS.hotline}
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thông tin nhanh */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-sm">
            <div className="flex items-center gap-2"><Clock size={16} className="opacity-70" /> {BUSINESS.hours}</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="opacity-70" /> {BUSINESS.address}</div>
            <div className="flex items-center gap-2"><Star size={16} className="opacity-70 fill-current" /> {BUSINESS.rating}/5 · {BUSINESS.reviewCount}+ đánh giá</div>
          </div>
        </div>
      </section>

      {/* Bảng giá */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="Bảng giá"
            title="Giá Dịch Vụ Giặt Sấy Gò Vấp"
            description="Báo giá trước khi thực hiện — không phát sinh thêm."
            wrapperClass="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pricing.map((item) => (
              <div key={item.service} className={`relative rounded-2xl border p-5 flex flex-col gap-1 transition-all duration-300 hover:-translate-y-1.5 ${
                item.popular
                  ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200 hover:shadow-xl hover:shadow-blue-100"
                  : "border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/60"
              }`}>
                {item.popular && (
                  <span className="absolute -top-2.5 left-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">PHỔ BIẾN</span>
                )}
                <p className="font-bold text-slate-800 text-sm">{item.service}</p>
                <p className="text-xs text-slate-400">{item.note}</p>
                <div className="mt-auto pt-3 flex items-baseline gap-0.5">
                  <span className={`text-2xl font-extrabold ${item.popular ? "text-blue-700" : "text-slate-900"}`}>{item.price}</span>
                  {item.unit && <span className="text-sm text-slate-400">{item.unit}</span>}
                </div>
              </div>
            ))}
          </div>
          <FadeIn direction="up">
            <div className="text-center">
              <CTAButton href={BUSINESS.hotlineHref} size="lg">
                <Phone size={20} /> Hỏi Giá Ngay — {BUSINESS.hotline}
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Quy trình" title="4 Bước Giặt Sấy Tận Nơi" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="FAQ" title="Câu Hỏi Thường Gặp" description="Về dịch vụ giặt sấy tại Gò Vấp." wrapperClass="mb-10" />
          <LandingFAQ items={faqs} />
          <CTABanner title="Còn Thắc Mắc? Gọi Ngay" description="Tư vấn miễn phí — phản hồi trong vài phút." className="mt-10" />
        </div>
      </section>

      {/* Dịch vụ liên quan */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Xem thêm dịch vụ giặt sấy</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/giat-giay-go-vap", title: "Giặt Giày", sub: "Từ 50k/đôi" },
              { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền", sub: "Từ 20k/kg" },
              { href: "/giat-ui-tan-noi-go-vap", title: "Giặt Ủi Tận Nơi", sub: "Miễn phí lấy giao" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
