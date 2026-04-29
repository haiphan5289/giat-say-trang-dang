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
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Tìm chúng tôi
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Vị Trí & Liên Hệ
          </h2>
          <p className="mt-3 text-slate-500 max-w-md mx-auto">
            Ghé trực tiếp hoặc đặt lịch giao nhận tận nhà — chúng tôi luôn sẵn sàng phục vụ.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg min-h-[380px]">
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
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow">
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
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
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
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <Phone size={16} />
                Gọi Ngay
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-xl font-semibold text-sm transition-all"
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
