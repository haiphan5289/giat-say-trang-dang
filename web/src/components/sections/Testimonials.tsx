"use client";

import { useState } from "react";
import { testimonials, stats } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <section id="danh-gia" className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur rounded-2xl p-6"
            >
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm font-semibold mb-3">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hàng Nghìn Khách Hàng Tin Tưởng
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            Chúng tôi tự hào vì sự hài lòng của khách hàng là thước đo thành công.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white text-gray-900 rounded-3xl p-8 lg:p-10 shadow-2xl relative transition-all duration-500">
            {/* Quote */}
            <div className="text-5xl text-blue-100 font-serif leading-none mb-4">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.comment}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
              <div className="text-right">
                <StarRating rating={t.rating} />
                <p className="text-blue-600 text-xs font-medium mt-1">{t.service}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/30"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
