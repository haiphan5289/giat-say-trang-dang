"use client";

import { useState } from "react";
import { branches } from "@/data/branches";
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock, ArrowRight, MessageCircle } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
export default function BranchCarousel() {
  const [active, setActive] = useState(0);
  const total = branches.length;

  const prev = () => setActive((c) => Math.max(c - 1, 0));
  const next = () => setActive((c) => Math.min(c + 1, total - 1));

  return (
    <section id="he-thong" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50 translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
<div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <span className="section-label mb-3 inline-flex">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Hệ thống chi nhánh
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              {total} Chi Nhánh Toàn Thành Phố
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm sm:text-right">
            Mạng lưới rộng khắp — luôn có chi nhánh gần nhà bạn.
          </p>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${active} * (100% / 3 + 6.67px)))`,
            }}
          >
            {branches.map((branch, i) => (
              <div
                key={branch.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 8)} group flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] rounded-2xl p-6 border transition-all duration-300 ${
                  i === active
                    ? "border-blue-300 bg-blue-50 shadow-md"
                    : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      i === active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <MapPin size={16} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                    {branch.name}
                  </h3>
                </div>

                <ul className="space-y-3 mb-5">
                  <li className="flex items-start gap-2.5 text-sm text-slate-600">
                    <MapPin size={13} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{branch.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <Phone size={13} className="text-slate-400 shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Clock size={13} className="text-slate-400 shrink-0" />
                    <span>{branch.hours}</span>
                  </li>
                </ul>

                {branch.mapUrl && (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Xem trên bản đồ{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {branches.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-blue-600 w-6 h-2.5"
                    : "bg-slate-200 hover:bg-slate-300 w-2.5 h-2.5"
                }`}
                aria-label={`Chi nhánh ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Trước"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={active === total - 1}
              className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Tiếp"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-12 reveal relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-20 dot-pattern-white" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Giao Nhận Tận Nơi Toàn Gò Vấp
            </h3>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Không cần đến cửa hàng — chúng tôi đến tận nhà lấy và trả đồ cho bạn.
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
