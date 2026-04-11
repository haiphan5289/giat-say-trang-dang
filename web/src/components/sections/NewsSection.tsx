import { newsPosts } from "@/data/news";

export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-3">
              Tin Tức & Mẹo Hay
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Bài Viết Mới Nhất
            </h2>
          </div>
          <a
            href="/tin-tuc"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 whitespace-nowrap transition-colors"
          >
            Xem tất cả →
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? "md:row-span-1" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center text-6xl">
                {index === 0 ? "👕" : index === 1 ? "🛏️" : "🚀"}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Đọc thêm →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
