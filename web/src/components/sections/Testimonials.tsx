"use client";

import { useState } from "react";
import { testimonials, stats } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const t = testimonials[current];

  return (
    <section id="danh-gia" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm`}
            >
              <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Khách hàng nói gì
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Tin Tưởng Từ Hàng Trăm Khách Hàng
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm">
            {/* Large quote */}
            <svg
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              className="text-blue-100 fill-current mb-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 28V18C0 7.667 5.333 1.667 16 0L17 3C11.667 4.333 8.833 7.333 8.5 12H14V28H0ZM20 28V18C20 7.667 25.333 1.667 36 0L37 3C31.667 4.333 28.833 7.333 28.5 12H34.5V28H20Z" />
            </svg>

            <p className="text-slate-700 text-lg leading-relaxed italic mb-8">
              {t.comment}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-200">
                  {t.name.split(" ").pop()?.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex gap-0.5 justify-end mb-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-blue-600 font-medium">{t.service}</p>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + total) % total)}
              className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-blue-600 w-5 h-2.5"
                    : "bg-slate-200 hover:bg-slate-300 w-2.5 h-2.5"
                }`}
              />
            ))}
            <button
              onClick={() => setCurrent((c) => (c + 1) % total)}
              className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
