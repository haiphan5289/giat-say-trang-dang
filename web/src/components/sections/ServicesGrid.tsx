import { Shirt, Star, Heart, Cloud, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import TiltCard from "@/components/ui/TiltCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import FadeIn from "@/components/ui/FadeIn";
const services = [
  {
    Icon: Shirt,
    title: "Giặt Thường",
    description: "Giặt sấy quần áo theo kg, nhanh chóng sạch sẽ, thơm mát cả ngày.",
    price: "Từ 13.000đ/kg",
    gradient: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/20",
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-100",
    href: "/giat-say-go-vap",
  },
  {
    Icon: Zap,
    title: "Giặt Nhanh",
    description: "Phụ thu 20k/ đơn — giặt ưu tiên, sấy khô và trả đồ ngay trong buổi.",
    price: "Từ 20.000đ/kg",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-100",
    href: "/giat-say-go-vap",
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
    href: "/giat-giay-go-vap",
  },
  {
    Icon: Heart,
    title: "Giặt Gấu Bông",
    description: "Vệ sinh đồ chơi mềm an toàn cho trẻ em, diệt khuẩn hiệu quả.",
    price: "Từ 30.000đ/kg",
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    bg: "bg-pink-50",
    text: "text-pink-600",
    ring: "ring-pink-100",
    href: "/giat-say-go-vap",
  },
  {
    Icon: Cloud,
    title: "Giặt Chăn Mền",
    description: "Giặt sạch mền gối, đánh bung sợi vải, thơm mát như ngày đầu.",
    price: "20.000đ – 30.000đ/kg",
    gradient: "from-indigo-500 to-blue-600",
    glow: "shadow-indigo-500/20",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-100",
    href: "/giat-chan-men-go-vap",
  },
];

export default function ServicesGrid() {
  return (
    <section id="dich-vu" className="py-14 md:py-24 bg-white relative overflow-hidden">
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
          description="Giặt sạch – sấy thơm – chăm sóc quần áo toàn diện — chúng tôi xử lý mọi loại vải với chất lượng cao nhất."
        />

        {/* Grid */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
            <Link href={service.href} className="block h-full">
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
              <div className="flex items-center justify-between">
                <span className={`inline-block text-xs font-bold ${service.text} ${service.bg} border ${service.ring} px-3 py-1.5 rounded-full ring-2`}>
                  {service.price}
                </span>
                <span className={`text-xs font-semibold ${service.text} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Xem thêm <ArrowRight size={12} />
                </span>
              </div>
            </TiltCard>
            </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTA */}
        <FadeIn className="mt-14 text-center">
          <CTAButton href="#pricing" size="lg">
            Xem Bảng Giá Đầy Đủ
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}
