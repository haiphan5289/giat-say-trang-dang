import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "@/data/news";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const relatedServices = [
  { href: "/giat-say-go-vap", title: "Giặt Sấy Gò Vấp", sub: "Từ 13.000đ/kg" },
  { href: "/giat-giay-go-vap", title: "Giặt Giày Gò Vấp", sub: "Từ 50.000đ/đôi" },
  { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền Gò Vấp", sub: "Từ 20.000đ/kg" },
  { href: "/giat-ui-tan-noi-go-vap", title: "Giặt Ủi Tận Nơi", sub: "Miễn phí lấy & giao" },
];

export const metadata: Metadata = {
  title: "Tin Tức & Mẹo Hay",
  description:
    "Mẹo giặt sấy, hướng dẫn bảo quản quần áo và tin tức mới nhất từ Giặt Sấy 24h Gò Vấp.",
  alternates: { canonical: "https://www.giatsay24hgovap.com/tin-tuc" },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Gradient Hero Header ── */}
      <section id="blog-hero" className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/15 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/15 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern-white" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="reveal inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Về trang chủ
          </Link>

          <div className="reveal reveal-delay-1">
            <span className="section-label mb-4 inline-flex bg-white/10 border-white/20 text-blue-200">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              Tin tức & mẹo hay
            </span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 mt-4 leading-tight">
              Mẹo Hay{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Giặt Sấy
              </span>
            </h1>
            <p className="text-blue-200 max-w-xl text-lg">
              Hướng dẫn bảo quản quần áo, giày, chăn mền — từ đội ngũ giặt sấy chuyên nghiệp Gò Vấp.
            </p>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[48px]">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section id="blog-posts" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/tin-tuc/${post.slug}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 8)} block h-full`}
            >
              <TiltCard className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="h-52 relative overflow-hidden bg-slate-100">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={`Ảnh bài viết: ${post.title}`}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-xs text-white font-medium bg-blue-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 mb-3">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <h2 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Đọc thêm <ArrowRight size={14} />
                  </div>
                </div>
              </TiltCard>
            </Link>
          ))}
        </div>

        {/* ── Related Services ── */}
        <div className="reveal mt-20 pt-10 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">
            Dịch vụ của chúng tôi
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedServices.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`reveal reveal-delay-${i + 1} group bg-white border border-slate-100 rounded-2xl p-5 text-center hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-200`}
              >
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1.5 group-hover:text-blue-500 transition-colors">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
