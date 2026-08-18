import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Phone, Tag } from "lucide-react";
import { newsPosts } from "@/data/news";
import CTAButton from "@/components/ui/CTAButton";

const relatedServices = [
  { href: "/giat-say-go-vap", title: "Giặt Sấy Gò Vấp", sub: "Từ 13.000đ/kg" },
  { href: "/giat-giay-go-vap", title: "Giặt Giày Gò Vấp", sub: "Từ 50.000đ/đôi" },
  { href: "/giat-chan-men-go-vap", title: "Giặt Chăn Mền Gò Vấp", sub: "Từ 20.000đ/kg" },
  { href: "/giat-ui-tan-noi-go-vap", title: "Giặt Ủi Tận Nơi", sub: "Miễn phí lấy & giao" },
];

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.giatsay24hgovap.com/tin-tuc/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.giatsay24hgovap.com/tin-tuc/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const orderedServices = [
    ...relatedServices.filter((s) => s.href === post.relatedHref),
    ...relatedServices.filter((s) => s.href !== post.relatedHref),
  ].slice(0, 4);

  const relatedPosts = [
    ...newsPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...newsPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <main className="min-h-screen bg-white pb-32 md:pb-24">
      {/* ── Article header ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/tin-tuc"
            className="reveal inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Tất cả bài viết
          </Link>

          <div className="reveal reveal-delay-1 flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Calendar size={10} />
              {post.date}
            </span>
          </div>

          <h1 className="reveal reveal-delay-2 text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <div className="reveal">
          {post.content ? (
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-slate-500">Nội dung đang được cập nhật.</p>
          )}
        </div>

        {/* ── CTA Block ── */}
        {post.relatedHref && (
          <div className="reveal mt-14 relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 shadow-2xl shadow-blue-900/30">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-blue-500/20 -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            <div className="absolute inset-0 opacity-10 dot-pattern-white pointer-events-none" />
            <div className="relative z-10">
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-2">Dịch vụ liên quan</p>
              <h3 className="text-white font-extrabold text-lg mb-5 leading-snug">
                Để chuyên gia lo — nhận & giao tận nhà Gò Vấp
              </h3>
              <div className="flex flex-wrap gap-3">
                <CTAButton href={post.relatedHref} variant="white" size="sm">
                  Xem dịch vụ →
                </CTAButton>
                <CTAButton href="tel:0938432178" variant="ghost" size="sm">
                  <Phone size={15} />
                  Gọi Ngay
                </CTAButton>
              </div>
            </div>
          </div>
        )}

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <div className="reveal mt-16 pt-10 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Bài viết liên quan
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tin-tuc/${p.slug}`}
                  className="group block bg-white border border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Related Services ── */}
        <div className="reveal mt-16 pt-10 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Dịch vụ của chúng tôi
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {orderedServices.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`reveal reveal-delay-${i + 1} group block bg-white border border-slate-100 rounded-2xl p-4 text-center hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-200`}
              >
                <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-tight">
                  {s.title}
                </p>
                <p className="text-xs text-slate-400 mt-1.5 group-hover:text-blue-500 transition-colors">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky mobile CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden shadow-[0_-4px_24px_rgb(0_0_0/15%)]">
        <CTAButton
          href="tel:0938432178"
          variant="phone"
          size="sm"
          className="w-full py-4 text-[15px] rounded-none hover:scale-100"
          aria-label="Gọi ngay"
        >
          <Phone size={20} />
          Gọi Ngay — 0938 432 178
        </CTAButton>
      </div>
    </main>
  );
}
