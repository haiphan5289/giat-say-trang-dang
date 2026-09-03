import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowLeft, MapPin } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import CTABanner from "@/components/ui/CTABanner";
import LandingFAQ, { type FAQItem } from "@/components/ui/LandingFAQ";
import { BUSINESS } from "@/config/business";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const WARD = "An Nhơn";
const OLD_WARDS = "Phường 5 và Phường 6 cũ";
const SLUG = "giat-say-an-nhon-go-vap";

export const metadata: Metadata = {
  title: `Giặt Sấy Phường ${WARD} Gò Vấp - Nhận Giao Tận Nơi`,
  description: `Dịch vụ giặt sấy tại phường ${WARD} (sáp nhập từ ${OLD_WARDS}), Gò Vấp. Nhận giao tận nơi trong ${BUSINESS.responseTime}. Từ ${BUSINESS.priceFrom}. Hotline: ${BUSINESS.hotline}.`,
  keywords: [
    `giặt sấy phường an nhơn gò vấp`,
    "giặt sấy phường 5 gò vấp",
    "giặt sấy phường 6 gò vấp",
    "giặt đồ gần đây gò vấp",
  ],
  alternates: { canonical: `https://www.giatsay24hgovap.com/${SLUG}` },
  openGraph: {
    title: `Giặt Sấy Phường ${WARD} Gò Vấp - Nhận Giao Tận Nơi`,
    description: `Giặt sấy chuyên nghiệp phục vụ phường ${WARD}, Gò Vấp. Từ ${BUSINESS.priceFrom}. Nhận giao tận nơi.`,
    url: `https://www.giatsay24hgovap.com/${SLUG}`,
    siteName: "Giặt Sấy 24h Gò Vấp",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: `Giặt Sấy Phường ${WARD} Gò Vấp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Giặt Sấy Phường ${WARD} Gò Vấp - Nhận Giao Tận Nơi`,
    description: `Giặt sấy chuyên nghiệp phục vụ phường ${WARD}, Gò Vấp. Từ ${BUSINESS.priceFrom}.`,
  },
};

const faqs: FAQItem[] = [
  {
    q: `Phường ${WARD} có phải là phường mới sáp nhập không?`,
    a: `Đúng. Phường ${WARD} được sáp nhập từ ${OLD_WARDS}. Chúng tôi vẫn phục vụ bình thường toàn bộ khu vực này, không thay đổi về giao nhận hay hotline.`,
  },
  {
    q: "Lấy và giao đồ mất bao lâu?",
    a: `Sau khi đặt lịch, nhân viên đến lấy đồ trong khoảng ${BUSINESS.responseTime}. Đồ giặt xong sẽ được giao tận nơi, có nhắn tin báo trước.`,
  },
  {
    q: "Có tính phí lấy giao tận nơi không?",
    a: "Miễn phí lấy và giao tận nhà trong khu vực Gò Vấp và các quận lân cận.",
  },
  {
    q: "Nhận giặt những loại đồ gì?",
    a: "Quần áo, chăn mền, giày, gấu bông, đồ giặt ủi theo yêu cầu. Xem chi tiết từng dịch vụ và bảng giá bên dưới.",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://www.giatsay24hgovap.com" },
    { "@type": "ListItem", position: 2, name: `Giặt Sấy Phường ${WARD}`, item: `https://www.giatsay24hgovap.com/${SLUG}` },
  ],
};

const nearbyWards = [
  { href: "/giat-say-hanh-thong-go-vap", name: "Hạnh Thông" },
  { href: "/giat-say-phuong-go-vap", name: "Gò Vấp" },
  { href: "/giat-say-an-hoi-dong-go-vap", name: "An Hội Đông" },
  { href: "/giat-say-thong-tay-hoi-go-vap", name: "Thông Tây Hội" },
  { href: "/giat-say-an-hoi-tay-go-vap", name: "An Hội Tây" },
];

export default function Page() {
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
              <MapPin size={14} /> Phục vụ Phường {WARD}, Gò Vấp
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Giặt Sấy Phường {WARD} —{" "}
              <span className="shimmer-text">Nhận Giao Tận Nơi</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dịch vụ giặt sấy chuyên nghiệp phục vụ Phường {WARD} ({OLD_WARDS}), Gò Vấp. Nhận và giao tận nhà, từ <strong className="text-white">{BUSINESS.priceFrom}</strong>.
            </p>
            <ul className="space-y-2 mb-10">
              {[`Phục vụ toàn bộ khu vực Phường ${WARD} (${OLD_WARDS})`, `Lấy đồ trong ${BUSINESS.responseTime}, giao đúng hẹn`, "Miễn phí nhận & giao tận nơi"].map((p) => (
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

      {/* Khu vực phục vụ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Khu vực phục vụ" title={`Phường ${WARD}, Gò Vấp`} wrapperClass="mb-10" />
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-sm text-blue-800 leading-relaxed">
            Phường {WARD} được sáp nhập từ {OLD_WARDS}. Tiệm giặt sấy có trụ sở tại Thông Tây Hội ({BUSINESS.address}), phục vụ giao nhận tận nơi cho toàn bộ Phường {WARD} trong {BUSINESS.responseTime}. Dù bạn quen gọi theo tên phường cũ hay tên mới, chúng tôi vẫn nhận và giao đồ như bình thường.
          </div>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Dịch vụ" title="Các Dịch Vụ Giặt Sấy" wrapperClass="mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { href: "/giat-say-go-vap", title: "Giặt Sấy Gia Đình", sub: "Từ 13k/kg" },
              { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền", sub: "Từ 20k/kg" },
              { href: "/giat-giay-go-vap", title: "Giặt Giày", sub: "Từ 50k/đôi" },
              { href: "/giat-gau-bong-go-vap", title: "Giặt Gấu Bông", sub: "Từ 30k/kg" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 group">
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
          <FadeIn direction="up">
            <div className="text-center">
              <CTAButton href={BUSINESS.hotlineHref} size="lg"><Phone size={20} /> Đặt Lịch Giặt Ngay</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="FAQ" title="Câu Hỏi Thường Gặp" wrapperClass="mb-10" />
          <LandingFAQ items={faqs} />
          <CTABanner title={`Đặt Lịch Giặt Sấy Tại Phường ${WARD}`} description={<>Nhận giao tận nơi, không cần ra ngoài. Hotline <strong>{BUSINESS.hotline}</strong>.</>} className="mt-10" />
        </div>
      </section>

      {/* Khu vực lân cận */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4 text-center">Cũng phục vụ các phường lân cận</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {nearbyWards.map((w) => (
              <Link key={w.href} href={w.href} className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group">
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors">{w.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
