import Image from "next/image";
import { newsPosts } from "@/data/news";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-100/30 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <span className="section-label mb-4 inline-flex">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Tin tức & mẹo hay
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mt-4">
              Bài Viết{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Mới Nhất
              </span>
            </h2>
          </div>
          <a
            href="/tin-tuc"
            className="group flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Xem tất cả{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsPosts.map((post, i) => (
            <TiltCard
              key={post.id}
              className={`reveal reveal-delay-${i + 1} group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer`}
            >
              {/* Thumbnail */}
              <div className="h-44 relative overflow-hidden bg-slate-100">
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
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>

              {/* Content */}
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
                <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Đọc thêm <ArrowRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
