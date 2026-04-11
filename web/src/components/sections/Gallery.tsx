import {
  Shirt,
  Sparkles,
  Package,
  Star,
  Wind,
  Heart,
} from "lucide-react";

const items = [
  {
    Icon: Shirt,
    label: "Giặt Sấy Quần Áo",
    sub: "Gia đình & cá nhân",
    gradient: "from-blue-600 to-blue-700",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: Sparkles,
    label: "Giặt Hấp Cao Cấp",
    sub: "Vest, áo dài, dạ hội",
    gradient: "from-amber-500 to-orange-500",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Star,
    label: "Giặt Giày",
    sub: "Mọi chất liệu",
    gradient: "from-orange-500 to-rose-500",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Package,
    label: "Giặt Sofa & Nệm",
    sub: "Tại nhà hoặc cửa hàng",
    gradient: "from-teal-500 to-cyan-600",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    Icon: Wind,
    label: "Giặt Rèm Cửa",
    sub: "Giao tận nơi",
    gradient: "from-sky-500 to-blue-500",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Heart,
    label: "Giặt Gấu Bông",
    sub: "An toàn cho trẻ em",
    gradient: "from-pink-500 to-rose-400",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Dịch vụ & Hình ảnh
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Chúng Tôi Làm Sạch Tất Cả
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Từ quần áo đến nội thất — mọi dịch vụ được thực hiện với tiêu chuẩn
            chuyên nghiệp cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${i + 1} ${item.span} relative bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <item.Icon
                  size={36}
                  className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  strokeWidth={1.5}
                />
                <p className="text-white font-semibold text-sm lg:text-base text-center leading-tight">
                  {item.label}
                </p>
                <p className="text-white/60 text-xs text-center">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
