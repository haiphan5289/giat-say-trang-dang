import { newsPosts } from "@/data/news";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const thumbnailGradients = [
  "from-blue-600 to-blue-700",
  "from-teal-500 to-cyan-600",
  "from-violet-500 to-purple-600",
];
const thumbnailEmojis = ["👗", "🛏️", "⚡"];

export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Tin tức & mẹo hay
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Bài Viết Mới Nhất
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
            <article
              key={post.id}
              className={`reveal reveal-delay-${i + 1} group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              {/* Thumbnail */}
              <div
                className={`h-44 bg-gradient-to-br ${thumbnailGradients[i]} flex items-end p-5`}
              >
                <span className="text-5xl">{thumbnailEmojis[i]}</span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
