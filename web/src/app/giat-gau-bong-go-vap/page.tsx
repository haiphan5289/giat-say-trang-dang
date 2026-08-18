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
  title: "Giặt Gấu Bông Gò Vấp - An Toàn Cho Bé · Khử Khuẩn Sâu",
  description:
    "Dịch vụ giặt gấu bông, thú bông tại Gò Vấp. Khử khuẩn, an toàn cho bé, không xẹp lông, không hỏng dáng. Giao nhận tận nơi. Từ 30.000đ/kg. Hotline: 0938 432 178.",
  keywords: ["giặt gấu bông gò vấp", "giặt thú bông gò vấp", "vệ sinh gấu bông cho bé", "giặt đồ chơi mềm gò vấp"],
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-gau-bong-go-vap" },
  openGraph: {
    title: "Giặt Gấu Bông Gò Vấp - An Toàn Cho Bé · Khử Khuẩn Sâu",
    description: "Giặt gấu bông, thú bông chuyên nghiệp tại Gò Vấp. Từ 30.000đ/kg. An toàn cho bé, không xẹp lông.",
    url: "https://www.giatsay24hgovap.com/giat-gau-bong-go-vap",
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Gấu Bông Gò Vấp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Gấu Bông Gò Vấp - An Toàn Cho Bé · Khử Khuẩn Sâu",
    description: "Giặt gấu bông, thú bông chuyên nghiệp tại Gò Vấp. Từ 30.000đ/kg. An toàn cho bé, không xẹp lông.",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt gấu bông có làm xẹp lông, hỏng dáng không?",
    a: "Không. Chúng tôi dùng chế độ giặt và sấy riêng cho đồ chơi vải — nhẹ nhàng, sấy phồng đều để gấu bông giữ nguyên form dáng như ban đầu.",
  },
  {
    q: "Bao lâu nên giặt gấu bông một lần?",
    a: "Với gấu bông bé ôm ngủ hàng ngày, khuyến nghị giặt mỗi 2–4 tuần. Đồ chơi ít dùng hơn có thể giãn ra 1–2 tháng/lần để loại bỏ bụi và vi khuẩn tích tụ.",
  },
  {
    q: "Nước giặt có an toàn cho da bé không, có còn sót hóa chất không?",
    a: "Có. Chúng tôi dùng nước giặt dịu nhẹ, không mùi hóa chất nồng, xả kỹ nhiều lần để đảm bảo an toàn cho da nhạy cảm của trẻ nhỏ.",
  },
  {
    q: "Giặt được gấu bông cỡ lớn, thú nhồi bông cỡ đại không?",
    a: "Có. Máy giặt công nghiệp công suất lớn xử lý được cả thú bông cỡ đại mà vẫn đảm bảo giặt sạch, sấy khô đều.",
  },
  {
    q: "Có nhận giặt các loại đồ chơi vải khác không?",
    a: "Có. Ngoài gấu bông, chúng tôi nhận giặt búp bê vải, chăn/gối hình thú và các loại đồ chơi mềm khác.",
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
  { icon: "🧸", name: "Gấu Bông Nhỏ", desc: "Gấu bông ôm ngủ, thú bông mini, giặt nhanh trong ngày" },
  { icon: "🐻", name: "Gấu Bông & Thú Bông Cỡ Lớn", desc: "Máy công nghiệp công suất lớn xử lý sạch, không xẹp lông" },
  { icon: "🪆", name: "Búp Bê Vải & Đồ Chơi Mềm", desc: "Vệ sinh an toàn, giữ nguyên form dáng" },
  { icon: "✨", name: "Khử Khuẩn Chuyên Sâu", desc: "Nước giặt dịu nhẹ, an toàn cho da nhạy cảm của bé" },
];

const steps = [
  { n: "01", title: "Đặt Lịch", desc: "Gọi hotline, cho biết số lượng và kích cỡ gấu bông cần giặt." },
  { n: "02", title: "Lấy Tận Nhà", desc: "Nhân viên đến cân và báo giá tại chỗ." },
  { n: "03", title: "Giặt Khử Khuẩn", desc: "Nước giặt dịu nhẹ an toàn cho bé, sấy phồng giữ form dáng." },
  { n: "04", title: "Giao Về Thơm Sạch", desc: "Đóng gói kỹ, giao đúng hẹn." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: "Giặt Gấu Bông Gò Vấp", item: "https://www.giatsay24hgovap.com/giat-gau-bong-go-vap" },
  ],
};

export default function GiatGauBongGoVapPage() {
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
              Giặt gấu bông an toàn cho bé
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Gấu Bông Gò Vấp —{" "}
              <span className="shimmer-text">An Toàn · Không Xẹp Lông</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt gấu bông, thú bông tại Gò Vấp, TP.HCM. Nước giặt dịu nhẹ an toàn cho da bé, khử khuẩn sâu, giữ nguyên form dáng. Từ <strong className="text-white">30.000đ/kg</strong>.
            </p>
            <ul className="space-y-2 mb-10">
              {["An toàn cho da nhạy cảm của trẻ nhỏ", "Không xẹp lông, giữ nguyên form dáng", "Giao nhận tận nơi, không cần ra ngoài"].map((p) => (
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
          <SectionHeader label="Nhận giặt" title="Tất Cả Loại Gấu Bông & Đồ Chơi Mềm" wrapperClass="mb-12" />
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
            <strong>Tại sao nên giặt gấu bông định kỳ?</strong> Gấu bông tiếp xúc trực tiếp với da mặt và tay trẻ mỗi ngày, tích tụ bụi mịn và vi khuẩn nhanh hơn nhiều loại đồ dùng khác. Giặt định kỳ giúp bảo vệ sức khỏe hô hấp và làn da nhạy cảm của bé.
          </div>
        </div>
      </section>

      {/* Bảng giá */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Bảng giá" title="Bảng Giá Giặt Gấu Bông" wrapperClass="mb-10" />
          <div className="max-w-xs mx-auto mb-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
              <h3 className="font-bold text-slate-900 mb-3">Gấu Bông / Thú Bông</h3>
              <p className="text-2xl font-extrabold text-blue-700">Từ 30.000đ<span className="text-sm text-slate-400 font-medium">/kg</span></p>
            </div>
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
          <CTABanner title="Đặt Lịch Giặt Gấu Bông Ngay" description={<>Giao nhận tận nơi, an toàn cho bé. Hotline <strong>0938 432 178</strong>.</>} className="mt-10" />
        </div>
      </section>

      {/* Dịch vụ liên quan */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Xem thêm dịch vụ giặt sấy</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/giat-say-go-vap", title: "Giặt Sấy", sub: "Từ 13k/kg" },
              { href: "/giat-giay-go-vap", title: "Giặt Giày", sub: "Từ 50k/đôi" },
              { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền", sub: "Từ 20k/kg" },
              { href: "/giat-ui-tan-noi-go-vap", title: "Giặt Ủi Tận Nơi", sub: "Miễn phí lấy giao" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bài viết liên quan */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Bài viết liên quan</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { href: "/tin-tuc/bao-lau-nen-giat-gau-bong-mot-lan", title: "Bao Lâu Nên Giặt Gấu Bông Một Lần?" },
              { href: "/tin-tuc/cach-ve-sinh-gau-bong-tai-nha-an-toan-cho-be", title: "Cách Vệ Sinh Gấu Bông Tại Nhà An Toàn Cho Bé" },
              { href: "/tin-tuc/tai-sao-can-giat-chan-men-dinh-ky", title: "Tại Sao Nên Giặt Chăn Mền Định Kỳ Mỗi Tháng?" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-white border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
                <p className="font-semibold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">{a.title}</p>
                <span className="text-xs text-blue-600 font-medium mt-2 inline-block">Đọc thêm →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
