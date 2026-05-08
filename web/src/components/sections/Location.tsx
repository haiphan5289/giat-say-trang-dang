import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

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
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Tìm chúng tôi
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mt-4">
            Vị Trí &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Liên Hệ
            </span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-md mx-auto text-lg">
            Ghé trực tiếp hoặc đặt lịch giao nhận tận nhà — chúng tôi luôn sẵn sàng phục vụ.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 min-h-[380px] ring-1 ring-slate-100">
            <iframe
              title="Giặt Sấy 24h Gò Vấp - Vị trí"
              src="https://maps.google.com/maps?q=10.8370625,106.6645925&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
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
                {info.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3.5">
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
            <div className="flex flex-col gap-3 mt-8">
              <a
                href="tel:0938432178"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <Phone size={16} />
                Gọi Ngay
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <MessageCircle size={16} />
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
