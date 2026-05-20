import { testimonials, stats } from "@/data/testimonials";
import { Star, Phone, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
const statGradients = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-teal-500 to-emerald-500",
];

const avatarGradients = [
  "from-blue-500 to-cyan-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-500",
  "from-teal-500 to-emerald-600",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-blue-600",
];

function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`reveal reveal-delay-${i + 1} group relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${statGradients[i]} rounded-t-2xl`} />
          <p className={`text-3xl lg:text-4xl font-extrabold mb-1 bg-gradient-to-r ${statGradients[i]} bg-clip-text text-transparent`}>
            {stat.value}
          </p>
          <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ReviewGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
      {testimonials.map((t, i) => (
        <div
          key={t.id}
          className={`reveal reveal-delay-${(i % 3) + 1} break-inside-avoid group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
        >
          <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${avatarGradients[i % avatarGradients.length]} opacity-60 group-hover:opacity-100 transition-opacity`} />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              {t.service}
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            &ldquo;{t.comment}&rdquo;
          </p>
          <div className="border-t border-slate-100 pt-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white font-extrabold text-sm shadow-sm flex-shrink-0`}>
                {t.name.split(" ").pop()?.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="danh-gia" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/40 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
<div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Khách hàng Gò Vấp nói gì"
          title={
            <>
              Tin Tưởng Từ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Khách Hàng
              </span>
            </>
          }
          description="Hơn 500 gia đình tại Gò Vấp đã tin dùng — đây là những gì họ chia sẻ."
          wrapperClass="mb-14"
        />
        <StatsRow />
        <ReviewGrid />
        <div className="mt-14 text-center reveal">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm text-sm text-slate-600">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">4.9/5</span>
            <span className="text-slate-400">·</span>
            <span>Dựa trên 500+ đánh giá thực tế</span>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 reveal relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-20 dot-pattern-white" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative p-8 lg:p-12 text-center">
            <p className="text-blue-200 text-sm font-medium mb-2">Tham gia 500+ gia đình hài lòng</p>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Trải Nghiệm Dịch Vụ Ngay Hôm Nay
            </h3>
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
