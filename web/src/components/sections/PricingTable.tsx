import { Check, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { BUSINESS } from "@/config/business";

const pricing = [
  { service: "Giặt Thường", price: "Từ 13.000đ", unit: "/kg", highlight: false, note: "Sạch · Thơm · Nhanh" },
  { service: "Giặt Nhanh", price: "Từ 20.000đ", unit: "/kg", highlight: true, note: "Phụ thu 20k/ đơn" },
  { service: "Giặt Giày", price: "Từ 50.000đ", unit: "/đôi", highlight: false, note: "Phục hồi màu sắc" },
  { service: "Giặt Gấu Bông", price: "Từ 30.000đ", unit: "/kg", highlight: false, note: "An toàn cho trẻ em" },
  { service: "Giặt Chăn Mền", price: "20k – 30k", unit: "/kg", highlight: false, note: "Đánh bung sợi vải" },
];

const includes = [
  "Giao nhận tận nơi",
  "Đóng gói kỹ lưỡng",
  "Khử mùi chuyên sâu",
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50 -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Bảng giá dịch vụ"
          title="Bảng Giá Dịch Vụ"
        />

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {pricing.map((item) => (
            <StaggerItem key={item.service}>
              <div
                className={`relative rounded-2xl border p-5 flex flex-col gap-1 transition-shadow hover:shadow-md h-full ${
                  item.highlight
                    ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200"
                    : "border-slate-100 bg-white"
                }`}
              >
                {item.highlight && (
                  <span className="absolute -top-2.5 left-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                    PHỔ BIẾN
                  </span>
                )}
                <p className="font-bold text-slate-800 text-sm">{item.service}</p>
                <p className="text-xs text-slate-400">{item.note}</p>
                <div className="mt-auto pt-3 flex items-baseline gap-0.5">
                  <span
                    className={`text-2xl font-extrabold ${
                      item.highlight ? "text-blue-700" : "text-slate-900"
                    }`}
                  >
                    {item.price}
                  </span>
                  {item.unit && (
                    <span className="text-sm text-slate-400 font-medium">{item.unit}</span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn delay={0.1} className="bg-slate-50 rounded-2xl p-5 mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Đã bao gồm trong mọi đơn
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {includes.map((inc) => (
              <div key={inc} className="flex items-center gap-2 text-sm text-slate-700">
                <Check size={14} className="text-emerald-500 shrink-0" />
                {inc}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="text-center">
          <CTAButton href={BUSINESS.hotlineHref} size="lg">
            <Phone size={20} />
            Hỏi Giá Ngay — {BUSINESS.hotline}
          </CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}
