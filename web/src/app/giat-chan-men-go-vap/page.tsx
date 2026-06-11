import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowLeft } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import CTABanner from "@/components/ui/CTABanner";
import LandingFAQ, { type FAQItem } from "@/components/ui/LandingFAQ";
import { BUSINESS } from "@/config/business";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Giặt Chăn Mền Gò Vấp - Khử Khuẩn Sâu · Giao Nhận Tận Nơi",
  description:
    "Dịch vụ giặt chăn mền tại Gò Vấp. Khử khuẩn, diệt mạt, thơm sạch. Giao nhận tận nơi. Từ 20.000đ/kg. Hotline: 0938 432 178.",
  keywords: ["giặt chăn mền gò vấp", "giặt mền gò vấp", "giặt chăn gối gò vấp", "khử khuẩn chăn mền"],
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-chan-men-go-vap" },
  openGraph: {
    title: "Giặt Chăn Mền Gò Vấp - Khử Khuẩn Sâu · Giao Nhận Tận Nơi",
    description: "Giặt chăn mền chuyên nghiệp tại Gò Vấp. Từ 20.000đ/kg. Khử khuẩn, diệt mạt.",
    url: "https://www.giatsay24hgovap.com/giat-chan-men-go-vap",
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Chăn Mền Gò Vấp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Chăn Mền Gò Vấp - Khử Khuẩn Sâu · Giao Nhận Tận Nơi",
    description: "Giặt chăn mền chuyên nghiệp tại Gò Vấp. Từ 20.000đ/kg. Khử khuẩn, diệt mạt.",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt chăn mền mất bao lâu?",
    a: "Chăn mền thường hoàn thành trong 3–5 tiếng. Chăn dày hoặc số lượng nhiều có thể cần 1 ngày. Chúng tôi nhắn tin thông báo khi xong.",
  },
  {
    q: "Bao lâu nên giặt chăn mền một lần?",
    a: "Khuyến nghị giặt chăn mền mỗi 1–3 tháng. Chăn gối dùng hàng ngày nên giặt thường xuyên hơn, đặc biệt trong mùa mưa hoặc khi có người bệnh trong nhà.",
  },
  {
    q: "Có khử được mạt giường và vi khuẩn không?",
    a: "Có. Chúng tôi dùng máy giặt công nghiệp ở nhiệt độ cao kết hợp nước giặt kháng khuẩn, hiệu quả diệt mạt giường, nấm mốc và vi khuẩn gây mùi.",
  },
  {
    q: "Giặt được chăn dày, chăn bông không?",
    a: "Có. Máy giặt công nghiệp công suất lớn xử lý được chăn dày, chăn bông, chăn lông vũ. Chúng tôi điều chỉnh chế độ giặt phù hợp với từng loại chất liệu.",
  },
  {
    q: "Có nhận giặt gối và vỏ chăn không?",
    a: "Có. Ngoài chăn mền, chúng tôi nhận giặt gối, vỏ gối, vỏ chăn, nệm nhỏ. Giá tính theo kg hoặc theo món.",
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

const items = [
  { icon: "🛏️", name: "Chăn Mỏng", desc: "Chăn hè, chăn vải mỏng, giặt nhanh, sấy khô trong ngày" },
  { icon: "🪶", name: "Chăn Dày & Chăn Bông", desc: "Chăn đông, chăn lông vũ — máy công nghiệp xử lý sạch" },
  { icon: "😴", name: "Gối & Vỏ Gối", desc: "Khử khuẩn sâu, loại bỏ mùi mồ hôi và mạt giường" },
  { icon: "🧺", name: "Vỏ Chăn & Ga Trải", desc: "Làm phẳng, thơm sạch, đóng gói gọn gàng" },
];

const steps = [
  { n: "01", title: "Đặt Lịch", desc: "Gọi hotline, cho biết số lượng và loại chăn mền cần giặt." },
  { n: "02", title: "Lấy Tận Nhà", desc: "Nhân viên đến cân và báo giá tại chỗ." },
  { n: "03", title: "Giặt Khử Khuẩn", desc: "Giặt nhiệt độ cao, nước giặt kháng khuẩn, sấy phồng đều." },
  { n: "04", title: "Giao Về Thơm Sạch", desc: "Chăn mền đóng gói kỹ, giao đúng hẹn." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: "Giặt Chăn Mền Gò Vấp", item: "https://www.giatsay24hgovap.com/giat-chan-men-go-vap" },
  ],
};

export default function GiatChanMenGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-cyan-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-cyan-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Giặt chăn mền chuyên nghiệp
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Chăn Mền Gò Vấp —{" "}
              <span className="shimmer-text">Khử Khuẩn · Thơm Sạch</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt chăn mền tại Gò Vấp, TP.HCM. Máy giặt công nghiệp công suất lớn, nước giặt kháng khuẩn, khử mùi và diệt mạt giường hiệu quả. Từ <strong className="text-white">20.000đ/kg</strong>.
            </p>
            <ul className="space-y-2 mb-10">
              {["Khử khuẩn, diệt mạt giường và nấm mốc", "Máy giặt công nghiệp xử lý chăn dày", "Giao nhận tận nơi, không cần ra ngoài"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={BUSINESS.hotlineHref} size="lg"><Phone size={20} /> Đặt Lịch — {BUSINESS.hotline}</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loại đồ nhận */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Nhận giặt" title="Tất Cả Loại Chăn Mền" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {items.map((s) => (
              <div key={s.name} className="flex gap-4 items-start bg-slate-50 rounded-2xl p-5 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.name}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-sm text-blue-800">
            <strong>Tại sao nên giặt chăn mền định kỳ?</strong> Chăn mền tích tụ mồ hôi, mạt giường và vi khuẩn sau 1–2 tháng sử dụng. Giặt thường xuyên giúp bảo vệ sức khỏe, đặc biệt cho trẻ nhỏ và người có cơ địa nhạy cảm.
          </div>
        </div>
      </section>

      {/* Bảng giá */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Bảng giá" title="Bảng Giá Giặt Chăn Mền" wrapperClass="mb-10" />
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { type: "Chăn Mỏng", price: "20.000đ", unit: "/kg" },
              { type: "Chăn Dày / Chăn Bông", price: "30.000đ", unit: "/kg" },
            ].map((item) => (
              <div key={item.type} className="rounded-2xl border border-slate-100 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                <h3 className="font-bold text-slate-900 mb-3">{item.type}</h3>
                <p className="text-2xl font-extrabold text-blue-700">{item.price}<span className="text-sm text-slate-400 font-medium">{item.unit}</span></p>
              </div>
            ))}
          </div>
          <FadeIn direction="up">
            <div className="text-center">
              <CTAButton href={BUSINESS.hotlineHref} size="lg"><Phone size={20} /> Đặt Lịch Giặt Ngay</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Quy trình" title="Quy Trình 4 Bước" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} direction="up" delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="FAQ" title="Câu Hỏi Thường Gặp" wrapperClass="mb-10" />
          <LandingFAQ items={faqs} />
          <CTABanner title="Đặt Lịch Giặt Chăn Mền Ngay" description={<>Giao nhận tận nơi, không cần ra ngoài. Hotline <strong>0938 432 178</strong>.</>} className="mt-10" />
        </div>
      </section>

      {/* Dịch vụ liên quan */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Xem thêm dịch vụ giặt sấy</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/giat-say-go-vap", title: "Giặt Sấy", sub: "Từ 13k/kg" },
              { href: "/giat-giay-go-vap", title: "Giặt Giày", sub: "Từ 50k/đôi" },
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
