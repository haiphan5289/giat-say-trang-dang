import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import CTABanner from "@/components/ui/CTABanner";
import LandingFAQ, { type FAQItem } from "@/components/ui/LandingFAQ";
import { BUSINESS } from "@/config/business";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Giặt Giày Gò Vấp - Vệ Sinh Sneaker · Giày Da · Giao Tận Nơi",
  description:
    "Dịch vụ giặt giày chuyên nghiệp tại Gò Vấp. Vệ sinh sneaker, giày da, giày vải. Phục hồi màu sắc, khử mùi. Từ 50.000đ/đôi. Hotline: 0938 432 178.",
  keywords: ["giặt giày gò vấp", "vệ sinh giày gò vấp", "giặt sneaker gò vấp", "vệ sinh giày da gò vấp"],
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-giay-go-vap" },
  openGraph: {
    title: "Giặt Giày Gò Vấp - Vệ Sinh Sneaker · Giày Da · Giao Tận Nơi",
    description: "Giặt giày chuyên nghiệp tại Gò Vấp. Từ 50.000đ/đôi. Giao nhận tận nơi.",
    url: "https://www.giatsay24hgovap.com/giat-giay-go-vap",
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Giày Gò Vấp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Giày Gò Vấp - Vệ Sinh Sneaker · Giày Da · Giao Tận Nơi",
    description: "Giặt giày chuyên nghiệp tại Gò Vấp. Từ 50.000đ/đôi. Giao nhận tận nơi.",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt giày mất bao lâu?",
    a: "Thông thường 1–2 ngày tùy mức độ bẩn. Giày trắng hoặc sneakers nhiều lớp cần thêm thời gian để xử lý kỹ. Chúng tôi thông báo thời gian cụ thể khi tiếp nhận.",
  },
  {
    q: "Giặt được loại giày nào?",
    a: "Chúng tôi nhận giặt sneaker, giày thể thao, giày da, giày vải, giày cao gót, sandals và hầu hết các loại giày thông dụng. Không nhận giày có vật liệu đặc biệt cần xử lý riêng như giày lông thú.",
  },
  {
    q: "Giặt giày giá bao nhiêu?",
    a: "Giặt giày thường từ 50.000đ/đôi. Giày trắng, sneaker cao cấp hoặc giày da có thể có giá khác — chúng tôi báo giá trước khi thực hiện. Gọi 0938 432 178 để nhận báo giá.",
  },
  {
    q: "Có phục hồi màu giày trắng bị ố không?",
    a: "Có. Chúng tôi sử dụng dung dịch chuyên dụng để phục hồi màu trắng cho sneaker, xử lý vết ố vàng và đen. Kết quả phụ thuộc vào mức độ hư hỏng ban đầu.",
  },
  {
    q: "Giày có bị co rút hay hỏng không?",
    a: "Không. Chúng tôi kiểm tra chất liệu trước khi giặt và chọn phương pháp phù hợp. Giày da được vệ sinh bằng tay, sneaker được sấy ở nhiệt độ thích hợp để tránh biến dạng.",
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

const shoeTypes = [
  { icon: "👟", name: "Sneaker & Thể Thao", desc: "Nike, Adidas, Vans, Converse — làm sạch đế, vải, dây" },
  { icon: "👠", name: "Giày Da", desc: "Vệ sinh và dưỡng da, giữ độ bóng và mềm mại" },
  { icon: "👟", name: "Giày Vải & Canvas", desc: "Xử lý vết bẩn sâu, khử mùi, làm trắng đế" },
  { icon: "👡", name: "Giày Cao Gót", desc: "Vệ sinh phần mũi, đế và quai, an toàn cho các chất liệu mỏng" },
];

const steps = [
  { n: "01", title: "Đặt Lịch", desc: "Gọi hoặc Zalo, cho biết loại giày và mức độ bẩn." },
  { n: "02", title: "Lấy Giày Tận Nơi", desc: "Nhân viên đến lấy, kiểm tra và báo giá tại chỗ." },
  { n: "03", title: "Vệ Sinh Chuyên Sâu", desc: "Làm sạch từng bộ phận, khử mùi, sấy đúng nhiệt độ." },
  { n: "04", title: "Giao Về Tận Tay", desc: "Giày sạch, thơm, đóng gói cẩn thận, giao đúng hẹn." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: "Giặt Giày Gò Vấp", item: "https://www.giatsay24hgovap.com/giat-giay-go-vap" },
  ],
};

export default function GiatGiayGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-indigo-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-indigo-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Vệ sinh giày chuyên nghiệp
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Giày Gò Vấp —{" "}
              <span className="shimmer-text">Sạch Từng Sợi Vải</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ vệ sinh giày chuyên nghiệp tại Gò Vấp. Phục hồi màu trắng, khử mùi, làm sạch đế và dây. Sneaker, giày da, giày vải đều nhận. Từ <strong className="text-white">50.000đ/đôi</strong>.
            </p>
            <ul className="space-y-2 mb-10">
              {["Kiểm tra chất liệu trước khi vệ sinh", "Phục hồi màu trắng sneaker bị ố", "Sấy đúng nhiệt độ, không biến dạng"].map((p) => (
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
                <Phone size={20} /> Đặt Lịch — {BUSINESS.hotline}
              </CTAButton>
              <CTAButton href={BUSINESS.zaloHref} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Chat Zalo
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loại giày */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Loại giày nhận giặt" title="Nhận Vệ Sinh Tất Cả Loại Giày" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 gap-5">
            {shoeTypes.map((s) => (
              <div key={s.name} className="flex gap-4 items-start bg-slate-50 rounded-2xl p-5 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.name}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
            <strong>Lưu ý:</strong> Báo giá sau khi xem trực tiếp giày. Giày có vết bẩn nặng hoặc chất liệu đặc biệt có thể tính thêm phí.
          </div>
        </div>
      </section>

      {/* Giá */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Bảng giá" title="Bảng Giá Giặt Giày" wrapperClass="mb-10" />
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { type: "Giặt Cơ Bản", price: "Từ 50.000đ", desc: "Làm sạch bề mặt, khử mùi nhẹ" },
              { type: "Giặt Chuyên Sâu", price: "Từ 80.000đ", desc: "Tẩy vết bẩn sâu, phục hồi màu", popular: true },
              { type: "Giày Da & Cao Cấp", price: "Liên hệ", desc: "Báo giá theo tình trạng thực tế" },
            ].map((item) => (
              <div key={item.type} className={`relative rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1.5 ${
                item.popular
                  ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200 hover:shadow-xl hover:shadow-blue-100"
                  : "border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/60"
              }`}>
                {item.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">PHỔ BIẾN</span>}
                <h3 className="font-bold text-slate-900 mb-2">{item.type}</h3>
                <p className={`text-2xl font-extrabold mb-2 ${item.popular ? "text-blue-700" : "text-slate-900"}`}>{item.price}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <FadeIn direction="up">
            <div className="text-center">
              <CTAButton href={BUSINESS.hotlineHref} size="lg">
                <Phone size={20} /> Hỏi Giá Ngay
              </CTAButton>
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
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
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
          <CTABanner title="Sẵn Sàng Giặt Giày Ngay?" description={<>Gọi <strong>0938 432 178</strong> — nhân viên đến lấy trong 30–60 phút.</>} className="mt-10" />
        </div>
      </section>

      {/* Dịch vụ liên quan */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Xem thêm dịch vụ giặt sấy</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/giat-say-go-vap", title: "Giặt Sấy", sub: "Từ 13k/kg" },
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
