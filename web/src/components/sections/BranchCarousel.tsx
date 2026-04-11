"use client";

import { useRef, useState } from "react";
import { branches } from "@/data/branches";
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock } from "lucide-react";

export default function BranchCarousel() {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const total = branches.length;
  const maxIndex = total - 1;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section id="he-thong" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-3">
            Hệ Thống Chi Nhánh
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {total}+ Chi Nhánh Trên Toàn Thành Phố
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Mạng lưới chi nhánh rộng khắp giúp bạn dễ dàng tìm thấy cơ sở gần nhất.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${current * (100 / 3)}% - ${current * 8}px))` }}
          >
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{branch.name}</h3>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>{branch.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={14} className="text-blue-400 shrink-0" />
                    <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-blue-600 font-medium transition-colors">
                      {branch.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-400 shrink-0" />
                    <span>{branch.hours}</span>
                  </li>
                </ul>

                {branch.mapUrl && (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full border border-blue-200 text-blue-600 hover:bg-blue-50 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    📍 Xem bản đồ
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {branches.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-blue-600 scale-125" : "bg-blue-200"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            disabled={current === maxIndex}
            className="w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
