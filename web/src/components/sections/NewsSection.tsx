import Image from "next/image";
import { newsPosts } from "@/data/news";
import { ArrowRight, Calendar, Tag, Phone, MessageCircle } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Top wave from Gallery (white bg above) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-100/30 -translate-y-1/2 blur-3xl pointer-events-none" />
<div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Tin tức & mẹo hay"
          title={
            <>
              Bài Viết{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Mới Nhất
              </span>
            </>
          }
          description="Mẹo giặt sấy, hướng dẫn bảo quản quần áo và tin tức mới nhất từ chúng tôi."
          wrapperClass="mb-8"
        />
        <div className="flex justify-end mb-6">
          <a
            href="/tin-tuc"
            className="group flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Xem tất cả{" "}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsPosts.map((post) => (
            <StaggerItem key={post.id}>
            <TiltCard
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full"
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
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTA banner */}
        <div className="mt-12 reveal relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-20 dot-pattern-white" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">Đặt Lịch Ngay Hôm Nay</h3>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Lần đầu sử dụng — giảm <strong className="text-amber-300 text-xl">10%</strong> cho mọi dịch vụ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="tel:0938432178" variant="white">
                <Phone size={20} />
                Gọi Ngay
              </CTAButton>
              <CTAButton href="https://zalo.me/0938432178" variant="ghost" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Chat Zalo
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
