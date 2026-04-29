"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, CheckCircle, Pause, Play } from "lucide-react";

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

const heroImages = [
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85",
  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=85",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=85",
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
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

          {/* Right: Ken Burns photo panel */}
          <div className="hidden lg:block relative h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl">
            {heroImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100 animate-ken-burns" : "opacity-0"
                }`}
              />
            ))}
            {/* Brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/65 via-transparent to-transparent" />
            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-75">Giặt Sấy 24h Gò Vấp</p>
              <p className="text-lg font-bold">Chi nhánh Gò Vấp</p>
            </div>
            {/* Price badge */}
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 rounded-xl px-3 py-1.5 text-xs font-bold shadow-lg">
              Từ 25k/kg
            </div>
            <div className="bg-emerald-500/15 hidden">
              <p className="text-emerald-400 text-sm font-semibold">
                🎉 Giảm 10% đơn đầu tiên
              </p>
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

      {/* Pill indicators + pause/play */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
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
        <button
          onClick={() => setPaused((p) => !p)}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all"
          aria-label={paused ? "Tiếp tục" : "Tạm dừng"}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
    </section>
  );
}
