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
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Về trang chủ
        </Link>

        <div className="mb-12">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Tin tức & mẹo hay
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Bài Viết{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Mới Nhất
            </span>
          </h1>
          <p className="text-slate-500 max-w-xl">
            Mẹo giặt sấy, hướng dẫn bảo quản quần áo và tin tức từ chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post) => (
            <TiltCard
              key={post.id}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 h-full"
            >
              <div className="h-48 relative overflow-hidden bg-slate-100">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-50 px-2.5 py-1 rounded-full">
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                </div>
                <h2 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Đọc thêm <ArrowRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Dịch vụ liên quan */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-5">Dịch vụ của chúng tôi</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 group"
              >
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">{s.title}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
