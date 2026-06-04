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
  title: "Giặt Sofa Nệm Gò Vấp - Vệ Sinh Tại Nhà · Khử Khuẩn Chuyên Sâu",
  description:
    "Dịch vụ giặt sofa, nệm tại nhà ở Gò Vấp. Vệ sinh tại chỗ, không cần mang đi. Khử khuẩn, khử mùi chuyên sâu. Hotline: 0938 432 178.",
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-sofa-nem-go-vap" },
  openGraph: {
    title: "Giặt Sofa Nệm Gò Vấp - Vệ Sinh Tại Nhà · Khử Khuẩn Chuyên Sâu",
    description: "Giặt sofa, nệm tại nhà Gò Vấp. Không cần mang đi. Hotline: 0938 432 178.",
    url: "https://www.giatsay24hgovap.com/giat-sofa-nem-go-vap",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt sofa có cần mang đi không?",
    a: "Không. Chúng tôi đến tận nhà, vệ sinh sofa và nệm tại chỗ. Không cần tháo dỡ hay di chuyển.",
  },
  {
    q: "Giặt sofa mất bao lâu và khi nào dùng được?",
    a: "Thông thường 2–4 tiếng tùy kích thước. Sofa và nệm cần thêm 2–4 tiếng để khô hoàn toàn trước khi sử dụng. Chúng tôi tư vấn thời gian cụ thể khi đặt lịch.",
  },
  {
    q: "Có xử lý được sofa da không?",
    a: "Có. Chúng tôi có dung dịch và phương pháp riêng cho sofa da, giữ độ bóng và mềm mại. Sofa vải và sofa nỉ cũng được xử lý khác nhau.",
  },
  {
    q: "Có khử được mùi ẩm mốc và mùi thú cưng không?",
    a: "Có. Chúng tôi dùng máy hút công nghiệp và dung dịch khử mùi chuyên dụng, hiệu quả với mùi ẩm mốc, mùi thú cưng và mùi mồ hôi.",
  },
  {
    q: "Giá giặt sofa và nệm là bao nhiêu?",
    a: "Giá phụ thuộc vào kích thước và chất liệu. Gọi 0938 432 178 hoặc nhắn Zalo kèm ảnh để được báo giá chính xác trước khi quyết định.",
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
  { icon: "🛋️", name: "Sofa Vải & Nỉ", desc: "Hút bụi sâu, làm sạch vết bẩn, khử mùi và diệt khuẩn" },
  { icon: "🪑", name: "Sofa Da & Simili", desc: "Dưỡng da, làm bóng, xử lý vết bẩn không để lại vệt" },
  { icon: "🛏️", name: "Nệm & Đệm", desc: "Hút bụi, diệt mạt, khử mùi mồ hôi và mùi ẩm" },
  { icon: "🪑", name: "Ghế Văn Phòng", desc: "Vệ sinh ghế xoay, ghế họp theo số lượng" },
];

const steps = [
  { n: "01", title: "Tư Vấn & Báo Giá", desc: "Gửi ảnh qua Zalo hoặc mô tả loại sofa/nệm để nhận báo giá." },
  { n: "02", title: "Nhân Viên Đến Nhà", desc: "Mang theo máy móc và dụng cụ chuyên dụng, không làm bừa bộn." },
  { n: "03", title: "Vệ Sinh Tại Chỗ", desc: "Hút bụi, làm sạch, khử mùi và xử lý kháng khuẩn." },
  { n: "04", title: "Hoàn Thành Tại Nhà", desc: "Dọn dẹp sạch sẽ sau khi xong, sofa khô trong 2–4 tiếng." },
];

export default function GiatSofaNemGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-teal-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-teal-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Vệ sinh tại nhà
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Sofa & Nệm Gò Vấp —{" "}
              <span className="shimmer-text">Tại Nhà · Không Cần Mang Đi</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ vệ sinh sofa và nệm tận nhà tại Gò Vấp. Nhân viên đến nhà bạn với máy móc chuyên dụng, không cần tháo dỡ hay di chuyển. Khử khuẩn, diệt mạt, khử mùi chuyên sâu.
            </p>
            <ul className="space-y-2 mb-10">
              {["Vệ sinh tại chỗ, không cần mang đi", "Máy hút công nghiệp, khử khuẩn hiệu quả", "Nhân viên không để lại bừa bộn"].map((p) => (
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
              <CTAButton href={BUSINESS.zaloHref} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> Gửi Ảnh Zalo</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loại đồ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Nhận vệ sinh" title="Sofa & Nệm Các Loại" wrapperClass="mb-12" />
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
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 text-sm text-teal-800">
            <strong>Tại sao nên giặt sofa và nệm định kỳ?</strong> Sofa tích tụ hàng triệu vi khuẩn, mạt bụi và bào tử nấm sau vài tháng sử dụng. Đặc biệt quan trọng với gia đình có trẻ nhỏ hoặc người có dị ứng.
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Quy trình" title="Quy Trình Vệ Sinh Tại Nhà" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="FAQ" title="Câu Hỏi Thường Gặp" wrapperClass="mb-10" />
          <LandingFAQ items={faqs} />
          <CTABanner
            title="Đặt Lịch Vệ Sinh Sofa & Nệm"
            description={<>Nhắn Zalo kèm ảnh để được báo giá ngay. Hotline <strong>0938 432 178</strong>.</>}
            phoneLabel="Gọi Đặt Lịch"
            className="mt-10"
          />
        </div>
      </section>
    </main>
  );
}
