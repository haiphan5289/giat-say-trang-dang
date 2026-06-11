"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight, CheckCircle, Pause, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";

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
      "Hỗ trợ nhận và giao đồ tận nơi nhanh chóng, tiện lợi, giúp tiết kiệm thời gian cho khách hàng.",
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
  "Có mặt lấy đồ sau 30–60 phút",
];

const heroImages = [
  { src: "/images/shop-front-1.jpg", alt: "Mặt tiền cửa hàng Giặt Sấy 24h Gò Vấp" },
  { src: "/images/shop-front-2.jpg", alt: "Chi nhánh giặt sấy tại Gò Vấp" },
  { src: "/images/shop-interior.jpg", alt: "Không gian tiếp nhận đơn tại cửa hàng" },
];

function HeroTextContent({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="text-white space-y-8">
      <FadeIn direction="up" className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-200 font-medium backdrop-blur-sm shadow-lg shadow-blue-900/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {slide.tag}
        </div>
        <div className="inline-flex items-center gap-1.5 bg-amber-400/90 backdrop-blur-sm text-amber-900 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-lg shadow-amber-500/30 animate-float">
          🎉 Giảm 10% đơn đầu tiên
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1} className="space-y-1">
        <h1 className="space-y-1">
          <span className="sr-only">Giặt Sấy 24h Gò Vấp — </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight drop-shadow-sm">
            {slide.title}
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight shimmer-text">
            {slide.highlight}
          </span>
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.2} className="text-slate-300 text-lg leading-relaxed max-w-md">
        {slide.description}
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <ul className="space-y-2.5">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-slate-300">
              <CheckCircle size={16} className="text-green-400 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn direction="up" delay={0.4} className="flex flex-wrap gap-3 pt-2">
        <CTAButton href="tel:0938432178">
          <Phone size={20} />
          Đặt Lịch Lấy Đồ
        </CTAButton>
      </FadeIn>
    </div>
  );
}

function HeroImagePanel({ current }: { current: number }) {
  return (
    <div className="hidden lg:block relative h-[540px] w-full rounded-3xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(59,130,246,0.35)]">
      {heroImages.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${
            i === current ? "opacity-100 animate-ken-burns" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="(max-width: 1024px) 0px, 50vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/10 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm font-medium opacity-70">Giặt Sấy 24h Gò Vấp</p>
        <p className="text-xl font-bold">Chi nhánh Gò Vấp</p>
      </div>
      <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 rounded-2xl px-4 py-2 text-sm font-bold shadow-xl shadow-amber-500/30 flex items-center gap-1">
        <span>Từ</span>
        <span className="text-base font-extrabold">13k</span>
        <span>/kg</span>
      </div>
      <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-2xl px-3 py-2 text-xs font-semibold shadow-lg flex items-center gap-1.5">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Đang nhận đơn
      </div>
    </div>
  );
}

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const pausedRef = useRef(paused);
  const sectionRef = useRef<HTMLElement>(null);
  pausedRef.current = paused;

  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setHeroInView(e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      id="gioi-thieu"
      className={`relative min-h-screen bg-gradient-to-br ${slide.accent} transition-all duration-700 flex items-center overflow-hidden pt-16`}
    >
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/15 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none animate-blob" style={{ animationPlayState: heroInView ? "running" : "paused" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/15 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none animate-blob-delay" style={{ animationPlayState: heroInView ? "running" : "paused" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-indigo-600/5 blur-3xl pointer-events-none animate-blob-slow" style={{ animationPlayState: heroInView ? "running" : "paused" }} />
      <div className="absolute inset-0 pointer-events-none opacity-20 dot-pattern" />

      <motion.div style={{ y: contentY }} className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroTextContent slide={slide} />
          <HeroImagePanel current={current} />
        </div>
      </motion.div>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="p-2.5 flex items-center justify-center"
            aria-label={`Trang chiếu ${i + 1}`}
          >
            <span className={`block rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-7 h-2.5" : "bg-white/30 w-2.5 h-2.5 hover:bg-white/50"
            }`} />
          </button>
        ))}
        <button
          onClick={() => setPaused((p) => !p)}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all ml-1"
          aria-label={paused ? "Tiếp tục" : "Tạm dừng"}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
    </section>
  );
}
