"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Sạch Đúng Nghĩa",
    subtitle: "Đẹp Như Mới",
    description:
      "Dịch vụ giặt sấy chuyên nghiệp — công nghệ hiện đại, an toàn với mọi chất liệu vải.",
    bg: "from-blue-700 to-blue-500",
    emoji: "👕",
  },
  {
    id: 2,
    title: "Giao Nhận Tận Nơi",
    subtitle: "Tiết Kiệm Thời Gian",
    description:
      "Đặt lịch online, chúng tôi đến tận nhà lấy và trả đồ. Không cần ra cửa hàng.",
    bg: "from-cyan-700 to-blue-500",
    emoji: "🚚",
  },
  {
    id: 3,
    title: "Giặt Hấp Cao Cấp",
    subtitle: "Vest, Áo Dài, Dạ Hội",
    description:
      "Xử lý trang phục cao cấp bằng phương pháp hấp chuyên biệt, giữ nguyên form dáng.",
    bg: "from-indigo-700 to-blue-500",
    emoji: "👔",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className={`relative min-h-screen bg-gradient-to-br ${slide.bg} transition-all duration-700 flex items-center pt-20`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl">💧</div>
        <div className="absolute top-40 right-20 text-8xl">✨</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🫧</div>
        <div className="absolute bottom-40 right-1/3 text-6xl">💎</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Đang phục vụ · 7:00 - 21:00
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-2">
              {slide.title}
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-blue-200 mb-6">
              {slide.subtitle}
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              {slide.description}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0938432178"
                className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={20} />
                Gọi Ngay
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-400/30 hover:bg-blue-400/50 border-2 border-white/50 text-white px-6 py-3 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                <MessageCircle size={20} />
                Zalo Chat
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/20">
              {[
                { value: "500+", label: "Khách hàng" },
                { value: "5+", label: "Chi nhánh" },
                { value: "10+", label: "Năm KN" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual / emoji card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center text-9xl lg:text-[10rem] shadow-2xl border border-white/20">
                {slide.emoji}
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-2xl px-4 py-2 font-bold shadow-lg text-sm">
                Giá từ 25k/kg 🎉
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-gray-900 rounded-2xl px-4 py-2 font-bold shadow-lg text-sm">
                ✅ Miễn phí giao nhận
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Slide trước"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Slide tiếp"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
