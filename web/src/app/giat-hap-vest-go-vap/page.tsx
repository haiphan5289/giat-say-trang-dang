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
  title: "Giặt Hấp Vest Áo Dài Gò Vấp - Giữ Form · Bảo Quản Chất Liệu",
  description:
    "Dịch vụ giặt hấp vest, áo dài, trang phục cao cấp tại Gò Vấp. Giữ nguyên form dáng, màu sắc. Giao nhận tận nơi. Hotline: 0938 432 178.",
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-hap-vest-go-vap" },
  openGraph: {
    title: "Giặt Hấp Vest Áo Dài Gò Vấp - Giữ Form · Bảo Quản Chất Liệu",
    description: "Giặt hấp vest, áo dài chuyên nghiệp tại Gò Vấp. Giao nhận tận nơi.",
    url: "https://www.giatsay24hgovap.com/giat-hap-vest-go-vap",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Giặt hấp vest mất bao lâu?",
    a: "Thông thường 1–2 ngày. Vest cần hấp và là phẳng cẩn thận, sau đó treo đúng cách trước khi trả. Chúng tôi thông báo thời gian cụ thể khi tiếp nhận.",
  },
  {
    q: "Hấp vest có làm co hay hỏng chất liệu không?",
    a: "Không. Chúng tôi sử dụng phương pháp hấp ở nhiệt độ thích hợp với từng chất liệu (len, polyester, cotton) và luôn kiểm tra nhãn mác trước khi xử lý.",
  },
  {
    q: "Có nhận áo dài truyền thống và áo cưới không?",
    a: "Có. Chúng tôi có kinh nghiệm xử lý áo dài lụa, áo dài nhung, áo cưới và các trang phục đặc biệt. Vui lòng gọi trước để được tư vấn cụ thể.",
  },
  {
    q: "Giá giặt hấp vest bao nhiêu?",
    a: "Giá phụ thuộc vào loại vest và mức độ bẩn. Vui lòng gọi 0938 432 178 hoặc nhắn Zalo để được báo giá chính xác sau khi mô tả hoặc gửi ảnh.",
  },
  {
    q: "Vest sau khi hấp có bị bóng hay mất form không?",
    a: "Không nếu làm đúng kỹ thuật. Chúng tôi dùng vải che khi ủi để tránh bóng và dùng máy hấp chuyên dụng để giữ form dáng nguyên bản.",
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
  { icon: "👔", name: "Vest Nam & Nữ", desc: "Giữ nguyên form dáng, phẳng mịn, không bóng" },
  { icon: "👘", name: "Áo Dài Truyền Thống", desc: "Lụa, nhung, vải mỏng — xử lý nhẹ nhàng, giữ màu" },
  { icon: "💍", name: "Áo Cưới & Dạ Hội", desc: "Trang phục đặc biệt, tư vấn riêng trước khi giặt" },
  { icon: "👗", name: "Blazer & Áo Khoác", desc: "Làm phẳng, khử mùi, giữ độ cứng của cổ và vai" },
];

const steps = [
  { n: "01", title: "Tư Vấn", desc: "Mô tả hoặc gửi ảnh trang phục — nhận tư vấn và báo giá ngay." },
  { n: "02", title: "Lấy Tận Nơi", desc: "Nhân viên đến đúng giờ, đóng gói cẩn thận." },
  { n: "03", title: "Hấp Chuyên Biệt", desc: "Làm sạch theo đúng chất liệu, hấp phẳng và tạo form." },
  { n: "04", title: "Giao Về Đúng Hẹn", desc: "Trang phục được treo và bọc, giao đúng giờ cam kết." },
];

export default function GiatHapVestGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-violet-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-violet-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trang phục cao cấp
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Hấp Vest & Áo Dài —{" "}
              <span className="shimmer-text">Giữ Form · Bền Màu</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt hấp vest, áo dài và trang phục cao cấp tại Gò Vấp. Phương pháp hấp chuyên biệt, giữ nguyên form dáng, chất liệu và màu sắc. Giao nhận tận nơi.
            </p>
            <ul className="space-y-2 mb-10">
              {["Kiểm tra nhãn mác và chất liệu trước khi xử lý", "Hấp đúng nhiệt độ, không bóng, không co rút", "Treo và bọc cẩn thận khi giao"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={BUSINESS.hotlineHref} size="lg"><Phone size={20} /> Tư Vấn Ngay — {BUSINESS.hotline}</CTAButton>
              <CTAButton href={BUSINESS.zaloHref} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> Gửi Ảnh Qua Zalo</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loại trang phục */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Nhận xử lý" title="Trang Phục Cao Cấp Chúng Tôi Nhận" wrapperClass="mb-12" />
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
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
            <strong>Lưu ý:</strong> Trang phục đặc biệt (áo cưới, áo truyền thống có thêu) cần tư vấn trực tiếp. Nhắn Zalo kèm ảnh để được báo giá chính xác nhất.
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Quy trình" title="Quy Trình Xử Lý" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
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
            title="Trang Phục Cao Cấp — Xử Lý Chuyên Nghiệp"
            description={<>Nhắn Zalo kèm ảnh để được tư vấn và báo giá. Hotline <strong>0938 432 178</strong>.</>}
            phoneLabel="Gọi Tư Vấn"
            className="mt-10"
          />
        </div>
      </section>
    </main>
  );
}
