import { Shirt, Building2, Sparkles, Package, Star, Wind, Heart, Cloud, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import TiltCard from "@/components/ui/TiltCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
const services = [
  {
    Icon: Shirt,
    title: "Giặt Sấy Gia Đình",
    description: "Giặt sấy quần áo theo kg, nhanh chóng sạch sẽ, thơm mát cả ngày.",
    price: "Từ 25.000đ/kg",
    gradient: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/20",
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-100",
  },
  {
    Icon: Building2,
    title: "Giặt Sấy Công Nghiệp",
    description: "Phục vụ khách sạn, nhà hàng, spa với hệ thống máy móc công suất lớn.",
    price: "Liên hệ báo giá",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
    bg: "bg-violet-50",
    text: "text-violet-600",
    ring: "ring-violet-100",
  },
  {
    Icon: Sparkles,
    title: "Giặt Hấp Cao Cấp",
    description: "Vest, áo dài, trang phục dạ hội được hấp chuyên nghiệp, giữ form dáng.",
    price: "Từ 80.000đ/món",
    gradient: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
    bg: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-100",
  },
  {
    Icon: Package,
    title: "Giặt Nệm & Sofa",
    description: "Vệ sinh nệm, sofa, thảm tại nhà bằng máy giặt chuyên dụng.",
    price: "Từ 150.000đ/cái",
    gradient: "from-teal-500 to-cyan-600",
    glow: "shadow-teal-500/20",
    bg: "bg-teal-50",
    text: "text-teal-600",
    ring: "ring-teal-100",
  },
  {
    Icon: Star,
    title: "Giặt Giày",
    description: "Làm sạch, phục hồi màu sắc và khử mùi giày dép mọi chất liệu.",
    price: "Từ 50.000đ/đôi",
    gradient: "from-orange-500 to-rose-500",
    glow: "shadow-orange-500/20",
    bg: "bg-orange-50",
    text: "text-orange-600",
    ring: "ring-orange-100",
  },
  {
    Icon: Wind,
    title: "Giặt Rèm Cửa",
    description: "Giặt rèm tận nơi hoặc tại cửa hàng, trả về thẳng phẳng như mới.",
    price: "Từ 30.000đ/m²",
    gradient: "from-cyan-500 to-sky-600",
    glow: "shadow-cyan-500/20",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    ring: "ring-cyan-100",
  },
  {
    Icon: Heart,
    title: "Giặt Gấu Bông",
    description: "Vệ sinh đồ chơi mềm an toàn cho trẻ em, diệt khuẩn hiệu quả.",
    price: "Từ 30.000đ/món",
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    bg: "bg-pink-50",
    text: "text-pink-600",
    ring: "ring-pink-100",
  },
  {
    Icon: Cloud,
    title: "Giặt Chăn Mền",
    description: "Giặt sạch mền gối, đánh bung sợi vải, thơm mát như ngày đầu.",
    price: "Từ 60.000đ/cái",
    gradient: "from-indigo-500 to-blue-600",
    glow: "shadow-indigo-500/20",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-100",
  },
];

export default function ServicesGrid() {
  return (
    <section id="dich-vu" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50 translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
<div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionHeader
          label="Dịch vụ của chúng tôi"
          title={
            <>
              Đa Dạng Dịch Vụ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Giặt Sấy
              </span>
            </>
          }
          description="Từ giặt sấy gia đình đến công nghiệp — chúng tôi xử lý mọi loại vải với chất lượng cao nhất."
        />

        {/* Grid */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
            <TiltCard
              className="group bg-white border border-slate-100 hover:border-transparent rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer hover:-translate-y-1.5 relative overflow-hidden h-full"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-md ${service.glow} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.Icon size={20} className="text-white" strokeWidth={1.75} />
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className={`inline-block text-xs font-bold ${service.text} ${service.bg} border ${service.ring} px-3 py-1.5 rounded-full ring-2`}>
                {service.price}
              </span>
            </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <CTAButton href="tel:0938432178" size="lg">
            Tư Vấn Miễn Phí
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
