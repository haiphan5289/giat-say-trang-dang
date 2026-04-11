import { Shirt, Building2, Sparkles, Package, Star, Wind, Heart, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: Shirt,
    title: "Giặt Sấy Gia Đình",
    description: "Giặt sấy quần áo theo kg, nhanh chóng sạch sẽ, thơm mát cả ngày.",
    price: "Từ 25.000đ/kg",
    iconBg: "bg-blue-50 text-blue-600",
    ring: "ring-blue-100",
  },
  {
    Icon: Building2,
    title: "Giặt Sấy Công Nghiệp",
    description: "Phục vụ khách sạn, nhà hàng, spa với hệ thống máy móc công suất lớn.",
    price: "Liên hệ báo giá",
    iconBg: "bg-violet-50 text-violet-600",
    ring: "ring-violet-100",
  },
  {
    Icon: Sparkles,
    title: "Giặt Hấp Cao Cấp",
    description: "Vest, áo dài, trang phục dạ hội được hấp chuyên nghiệp, giữ form dáng.",
    price: "Từ 80.000đ/món",
    iconBg: "bg-amber-50 text-amber-600",
    ring: "ring-amber-100",
  },
  {
    Icon: Package,
    title: "Giặt Nệm & Sofa",
    description: "Vệ sinh nệm, sofa, thảm tại nhà bằng máy giặt chuyên dụng.",
    price: "Từ 150.000đ/cái",
    iconBg: "bg-teal-50 text-teal-600",
    ring: "ring-teal-100",
  },
  {
    Icon: Star,
    title: "Giặt Giày",
    description: "Làm sạch, phục hồi màu sắc và khử mùi giày dép mọi chất liệu.",
    price: "Từ 50.000đ/đôi",
    iconBg: "bg-orange-50 text-orange-600",
    ring: "ring-orange-100",
  },
  {
    Icon: Wind,
    title: "Giặt Rèm Cửa",
    description: "Giặt rèm tận nơi hoặc tại cửa hàng, trả về thẳng phẳng như mới.",
    price: "Từ 30.000đ/m²",
    iconBg: "bg-cyan-50 text-cyan-600",
    ring: "ring-cyan-100",
  },
  {
    Icon: Heart,
    title: "Giặt Gấu Bông",
    description: "Vệ sinh đồ chơi mềm an toàn cho trẻ em, diệt khuẩn hiệu quả.",
    price: "Từ 30.000đ/món",
    iconBg: "bg-pink-50 text-pink-600",
    ring: "ring-pink-100",
  },
  {
    Icon: Cloud,
    title: "Giặt Chăn Mền",
    description: "Giặt sạch mền gối, đánh bung sợi vải, thơm mát như ngày đầu.",
    price: "Từ 60.000đ/cái",
    iconBg: "bg-indigo-50 text-indigo-600",
    ring: "ring-indigo-100",
  },
];

export default function ServicesGrid() {
  return (
    <section id="dich-vu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Dịch vụ của chúng tôi
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Đa Dạng Dịch Vụ Giặt Sấy
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Từ giặt sấy gia đình đến công nghiệp — chúng tôi xử lý mọi loại vải với
            chất lượng cao nhất.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${service.iconBg} ring-4 ${service.ring} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-block text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <a
            href="tel:0938432178"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Tư Vấn Miễn Phí
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
