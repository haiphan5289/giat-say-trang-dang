import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowLeft, MapPin } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import CTABanner from "@/components/ui/CTABanner";
import LandingFAQ, { type FAQItem } from "@/components/ui/LandingFAQ";
import { BUSINESS } from "@/config/business";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Giặt Ủi Tận Nơi Gò Vấp - Lấy & Giao Tận Nhà · Nhanh Chóng",
  description:
    "Dịch vụ giặt ủi tận nơi tại Gò Vấp. Nhân viên lấy đồ tại nhà, giặt sạch và giao trả trong ngày. Từ 13.000đ/kg. Hotline: 0938 432 178.",
  keywords: ["giặt ủi tận nơi gò vấp", "giặt đồ tận nhà gò vấp", "giặt tại nhà gò vấp", "lấy giao đồ giặt gò vấp"],
  alternates: { canonical: "https://www.giatsay24hgovap.com/giat-ui-tan-noi-go-vap" },
  openGraph: {
    title: "Giặt Ủi Tận Nơi Gò Vấp - Lấy & Giao Tận Nhà · Nhanh Chóng",
    description: "Giặt ủi tận nơi Gò Vấp. Lấy tại nhà, trả trong ngày. Từ 13.000đ/kg.",
    url: "https://www.giatsay24hgovap.com/giat-ui-tan-noi-go-vap",
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Ủi Tận Nơi Gò Vấp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Ủi Tận Nơi Gò Vấp - Lấy & Giao Tận Nhà · Nhanh Chóng",
    description: "Giặt ủi tận nơi Gò Vấp. Lấy tại nhà trong 30–60 phút, giặt sạch và giao trả trong ngày.",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Phục vụ khu vực nào tại Gò Vấp?",
    a: `Chúng tôi phục vụ toàn bộ Gò Vấp và các quận lân cận: ${BUSINESS.coverageAreas.join(", ")}. Gọi 0938 432 178 để xác nhận khu vực của bạn.`,
  },
  {
    q: "Nhân viên đến lấy đồ sau bao lâu?",
    a: "Sau khi đặt lịch, nhân viên đến trong vòng 30–60 phút trong giờ làm việc. Bạn cũng có thể đặt lịch cụ thể cho ngày hôm sau.",
  },
  {
    q: "Có phí lấy/giao đồ không?",
    a: "Hiện tại không thu phí lấy và giao đồ cho khu vực Gò Vấp. Các quận lân cận có thể có phụ phí nhỏ — vui lòng hỏi khi đặt lịch.",
  },
  {
    q: "Nhận đồ nhưng không có nhà thì sao?",
    a: "Bạn có thể nhờ người thân ở nhà, hoặc để đồ ở bảo vệ/hộp thư nếu thuận tiện. Chúng tôi sẽ liên hệ xác nhận trước khi đến.",
  },
  {
    q: "Giao đồ sau khi giặt có đúng giờ không?",
    a: "Có. Chúng tôi cam kết giao đúng khung giờ đã hẹn. Nếu có thay đổi, nhân viên sẽ báo trước ít nhất 1 tiếng.",
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

const areas = ["Toàn bộ Gò Vấp", "Bình Thạnh", "Phú Nhuận", "Tân Bình", "Quận 12"];

const steps = [
  { n: "01", title: "Đặt Lịch", desc: "Gọi hotline, cho biết địa chỉ và khung giờ thuận tiện." },
  { n: "02", title: "Nhân Viên Đến Lấy", desc: "Đến đúng giờ, cân đồ và báo giá tại chỗ. Nhận biên nhận." },
  { n: "03", title: "Giặt & Sấy", desc: "Phân loại, giặt sạch, sấy khô và gấp phẳng cẩn thận." },
  { n: "04", title: "Giao Tận Tay", desc: "Đồ thơm sạch, đóng gói kỹ, giao đúng hẹn trong ngày." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: "Giặt Ủi Tận Nơi Gò Vấp", item: "https://www.giatsay24hgovap.com/giat-ui-tan-noi-go-vap" },
  ],
};

export default function GiatUiTanNoiGoVapPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-1.5 text-emerald-300 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Trang chủ
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-emerald-200 font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Giao nhận tận nhà
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Ủi Tận Nơi Gò Vấp —{" "}
              <span className="shimmer-text">Lấy & Giao Tận Nhà</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt ủi tận nơi tại Gò Vấp, TP.HCM. Nhân viên đến lấy đồ tại địa chỉ của bạn trong vòng <strong className="text-white">30–60 phút</strong>, giặt sạch và giao trả trong ngày. Không cần ra khỏi nhà.
            </p>
            <ul className="space-y-2 mb-10">
              {["Miễn phí lấy & giao trong khu vực Gò Vấp", "Có mặt sau 30–60 phút đặt lịch", "Cam kết giao đúng giờ đã hẹn"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={BUSINESS.hotlineHref} size="lg"><Phone size={20} /> Đặt Lịch Lấy Đồ — {BUSINESS.hotline}</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Khu vực phục vụ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Khu vực" title="Khu Vực Phục Vụ Giao Nhận" wrapperClass="mb-12" />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-100 hover:shadow-sm">
                <MapPin size={14} /> {area}
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "⚡", title: "Nhanh Chóng", desc: "Nhân viên đến trong 30–60 phút sau khi đặt lịch" },
              { icon: "🔒", title: "An Toàn", desc: "Kiểm kê đồ và giao biên nhận trước khi lấy" },
              { icon: "📦", title: "Đóng Gói Kỹ", desc: "Đồ được gấp phẳng và bọc sạch khi giao trả" },
            ].map((b) => (
              <div key={b.title} className="text-center bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Quy trình" title="Quy Trình Giặt Tận Nơi" wrapperClass="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.n}</div>
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
            title="Đặt Lịch Lấy Đồ Ngay Hôm Nay"
            description={<>Nhân viên đến trong <strong>30–60 phút</strong>. Miễn phí giao nhận trong khu vực Gò Vấp.</>}
            phoneLabel="Gọi Đặt Lịch Ngay"
            className="mt-10"
          />
        </div>
      </section>

      {/* Dịch vụ liên quan */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Xem thêm dịch vụ giặt sấy</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/giat-say-go-vap", title: "Giặt Sấy", sub: "Từ 13k/kg" },
              { href: "/giat-giay-go-vap", title: "Giặt Giày", sub: "Từ 50k/đôi" },
              { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền", sub: "Từ 20k/kg" },
              { href: "/giat-gau-bong-go-vap", title: "Giặt Gấu Bông", sub: "Từ 30k/kg" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bài viết liên quan */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Bài viết liên quan</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { href: "/tin-tuc/giat-ui-tan-noi-co-dat-hon-tu-giat-khong", title: "Giặt Ủi Tận Nơi Có Đắt Hơn Tự Giặt Ở Nhà Không?" },
              { href: "/tin-tuc/quy-trinh-dong-goi-do-sau-khi-giat-ui-tan-noi", title: "Quy Trình Đóng Gói Đồ Sau Khi Giặt Ủi Tận Nơi" },
              { href: "/tin-tuc/rut-ngan-thoi-gian-giat-do-cuoi-tuan", title: "Rút Ngắn Thời Gian Giặt Đồ Cuối Tuần" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
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
