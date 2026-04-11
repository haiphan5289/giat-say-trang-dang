"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "Dịch vụ giặt sấy chuyên nghiệp",
    title: "Sạch Đúng Nghĩa",
    highlight: "Đẹp Như Mới",
    description:
      "Công nghệ giặt sấy hiện đại, an toàn với mọi chất liệu vải. Giao nhận tận nơi — tiện lợi, nhanh chóng.",
    accent: "from-slate-900 via-blue-950 to-slate-900",
  },
  {
    id: 2,
    tag: "Tiết kiệm thời gian sống",
    title: "Đặt Lịch Online",
    highlight: "Nhận Về Trong Ngày",
    description:
      "Chỉ 2 phút đặt lịch qua điện thoại hoặc Zalo — chúng tôi đến tận nhà lấy và giao lại khi hoàn thành.",
    accent: "from-slate-900 via-cyan-950 to-slate-900",
  },
  {
    id: 3,
    tag: "Trang phục cao cấp",
    title: "Giặt Hấp",
    highlight: "Vest & Áo Dài",
    description:
      "Xử lý trang phục cao cấp bằng phương pháp hấp chuyên biệt, giữ nguyên form dáng và màu sắc nguyên bản.",
    accent: "from-slate-900 via-indigo-950 to-slate-900",
  },
];

const trustPoints = [
  "Công nghệ máy giặt Nhật Bản hiện đại",
  "Nước giặt chuyên dụng nhập khẩu an toàn",
  "Hoàn tiền 100% nếu không hài lòng",
];

const stats = [
  { v: "500+", l: "Khách hàng" },
  { v: "5+", l: "Chi nhánh" },
  { v: "10+", l: "Năm KN" },
  { v: "99%", l: "Hài lòng" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br ${slide.accent} transition-all duration-700 flex items-center overflow-hidden pt-16`}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="text-white space-y-8">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm text-blue-200 font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {slide.tag}
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                {slide.title}
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {slide.highlight}
              </h1>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
              {slide.description}
            </p>

            {/* Trust checklist */}
            <ul className="space-y-2.5">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:0938432178"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-xl shadow-blue-500/25"
              >
                <Phone size={20} />
                Gọi Ngay
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-7 py-3.5 rounded-xl font-semibold text-lg transition-all hover:scale-105"
              >
                <MessageCircle size={20} />
                Chat Zalo
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-80">
              <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 space-y-6 shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl mb-3 shadow-lg shadow-blue-500/30">
                    ✨
                  </div>
                  <p className="text-white font-bold text-lg">
                    Giặt Sấy Trắng Đáng
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">
                    Dịch vụ chuyên nghiệp
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.l}
                      className="bg-white/10 rounded-2xl p-4 text-center"
                    >
                      <p className="text-white font-bold text-2xl">{s.v}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-xl p-3 text-center">
                  <p className="text-emerald-400 text-sm font-semibold">
                    🎉 Giảm 10% đơn đầu tiên
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 rounded-xl px-3 py-1.5 text-xs font-bold shadow-lg">
                Từ 25k/kg
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
        aria-label="Slide trước"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
        aria-label="Slide tiếp"
      >
        <ChevronRight size={22} />
      </button>

      {/* Pill indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-7 h-2.5" : "bg-white/30 w-2.5 h-2.5 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
