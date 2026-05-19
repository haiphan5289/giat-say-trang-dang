import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";

const info = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Số 1 đường số 8, Thông Tay Hội, Hồ Chí Minh",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "0938 432 178",
    href: "tel:0938432178",
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0938 432 178",
    href: "https://zalo.me/0938432178",
  },
  {
    icon: Clock,
    label: "Giờ mở cửa",
    value: "7:00 — 21:00, tất cả các ngày",
  },
];

export default function Location() {
  return (
    <section id="vi-tri" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionHeader
          label="Tìm chúng tôi"
          title={
            <>
              Vị Trí &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Liên Hệ
              </span>
            </>
          }
          description="Ghé trực tiếp hoặc đặt lịch giao nhận tận nhà — chúng tôi luôn sẵn sàng phục vụ."
          wrapperClass="mb-12"
          descriptionClass="max-w-md"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch reveal">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 min-h-[380px] ring-1 ring-slate-100">
            <iframe
              title="Giặt Sấy 24h Gò Vấp - Vị trí"
              src="https://maps.google.com/maps?q=10.8370625,106.6645925&z=17&output=embed"
              width="100%"
              height="100%"
              className="border-0 min-h-[380px] w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 flex flex-col justify-between ring-1 ring-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-blue-500/25">
                  GS
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base leading-tight">Giặt Sấy 24h Gò Vấp</p>
                  <p className="text-xs text-slate-400">Chi nhánh Gò Vấp</p>
                </div>
              </div>

              <ul className="space-y-5">
                {info.map(({ icon: Icon, label, value, href }, i) => (
                  <li key={label} className={`reveal reveal-delay-${i + 1} flex items-start gap-3.5`}>
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-semibold">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 flex flex-col gap-3">
              <CTAButton href="tel:0938432178" variant="white" size="sm" className="w-full">
                <Phone size={16} />
                Gọi Ngay
              </CTAButton>
              <CTAButton
                href="https://zalo.me/0938432178"
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <MessageCircle size={16} />
                Chat Zalo
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
