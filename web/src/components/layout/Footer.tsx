import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "#gioi-thieu" },
  { label: "Dịch Vụ", href: "#dich-vu" },
  { label: "Hệ Thống", href: "#he-thong" },
  { label: "Tin Tức", href: "#tin-tuc" },
  { label: "Liên Hệ", href: "#lien-he" },
];

const serviceList = [
  "Giặt Sấy Gia Đình",
  "Giặt Sấy Công Nghiệp",
  "Giặt Hấp Cao Cấp",
  "Giặt Nệm & Sofa",
  "Giặt Giày",
  "Giặt Rèm Cửa",
  "Giặt Gấu Bông",
];

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
                GS
              </div>
              <p className="font-bold text-white text-base">
                Giặt Sấy{" "}
                <span className="text-blue-400">Trắng Đáng</span>
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Dịch vụ giặt sấy chuyên nghiệp — sạch đúng nghĩa, đẹp như mới.
              Phục vụ tận tình 7:00 – 21:00 tất cả các ngày.
            </p>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Zalo"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Liên Kết
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Dịch Vụ
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {serviceList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Liên Hệ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:0938432178"
                    className="text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    0938 432 178
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Hotline 7:00 – 21:00
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-500">
                  123 Đường Lê Lợi, Phường 1, TP. Thủ Đức, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-blue-500 shrink-0" />
                <span className="text-slate-500">
                  7:00 — 21:00, tất cả các ngày
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <p>© 2025 Giặt Sấy Trắng Đáng. Bảo lưu mọi quyền.</p>
          <p>Thiết kế bởi đội ngũ Giặt Sấy Trắng Đáng</p>
        </div>
      </div>
    </footer>
  );
}
