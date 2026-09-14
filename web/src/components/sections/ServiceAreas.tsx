import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const areas = [
  {
    name: "An Hội Đông",
    description: "Sáp nhập từ Phường 15, Phường 16 cũ",
    href: "/giat-say-an-hoi-dong-go-vap",
  },
  {
    name: "An Hội Tây",
    description: "Sáp nhập từ Phường 12, Phường 14 cũ",
    href: "/giat-say-an-hoi-tay-go-vap",
  },
  {
    name: "An Nhơn",
    description: "Sáp nhập từ Phường 5, Phường 6 cũ",
    href: "/giat-say-an-nhon-go-vap",
  },
  {
    name: "Hạnh Thông",
    description: "Sáp nhập từ Phường 1, Phường 3 cũ",
    href: "/giat-say-hanh-thong-go-vap",
  },
  {
    name: "Thông Tây Hội",
    description: "Sáp nhập từ Phường 8, 9, 11 cũ",
    href: "/giat-say-thong-tay-hoi-go-vap",
  },
  {
    name: "Gò Vấp (Phường mới)",
    description: "Sáp nhập từ Phường 10, Phường 17 cũ",
    href: "/giat-say-phuong-go-vap",
  },
];

export default function ServiceAreas() {
  return (
    <section id="khu-vuc" className="py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50 -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Phạm vi phục vụ"
          title={
            <>
              Phục Vụ Khắp Các{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Phường Tại Gò Vấp
              </span>
            </>
          }
          description="Nhận và giao đồ tận nơi tại tất cả các phường thuộc khu vực Gò Vấp (theo địa giới hành chính mới)."
        />

        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <StaggerItem key={area.name}>
              <Link href={area.href} className="block h-full">
                <TiltCard className="group bg-white border border-slate-100 hover:border-transparent rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={18} className="text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                    Giặt Sấy {area.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    {area.description}
                  </p>
                  <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem chi tiết <ArrowRight size={11} />
                  </span>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
