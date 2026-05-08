"use client";

import { ArrowUpRight } from "lucide-react";

const items = [
  {
    label: "Giặt Sấy Quần Áo",
    sub: "Gia đình & cá nhân",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    gradient: "from-blue-900/70 to-blue-600/40",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    label: "Giặt Hấp Cao Cấp",
    sub: "Vest, áo dài, dạ hội",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    gradient: "from-amber-900/70 to-orange-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Giày",
    sub: "Mọi chất liệu",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    gradient: "from-orange-900/70 to-rose-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Sofa & Nệm",
    sub: "Tại nhà hoặc cửa hàng",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    gradient: "from-teal-900/70 to-cyan-600/40",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    label: "Giặt Rèm Cửa",
    sub: "Giao tận nơi",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    gradient: "from-sky-900/70 to-blue-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Gấu Bông",
    sub: "An toàn cho trẻ em",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    gradient: "from-pink-900/70 to-rose-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-slate-100 translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Dịch vụ & Hình ảnh
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-4 mt-4">
            Chúng Tôi Làm Sạch{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Tất Cả
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Từ quần áo đến nội thất — mọi dịch vụ được thực hiện với tiêu chuẩn
            chuyên nghiệp cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {items.map((item, i) => (
            <div
              key={item.label}
              style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const { left, top, width, height } = el.getBoundingClientRect();
                const x = ((e.clientX - left) / width - 0.5) * 14;
                const y = ((e.clientY - top) / height - 0.5) * -14;
                el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
              className={`reveal reveal-delay-${i + 1} ${item.span} relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl`}
            >
              {/* Photo background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <ArrowUpRight size={14} className="text-white" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                <p className="text-white font-bold text-sm lg:text-base leading-tight drop-shadow-md">
                  {item.label}
                </p>
                <p className="text-white/70 text-xs mt-1 drop-shadow">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
