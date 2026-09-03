import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

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
  { label: "Vị Trí", href: "#vi-tri" },
  { label: "Tin Tức", href: "/tin-tuc" },
  { label: "Liên Hệ", href: "#lien-he" },
];

const serviceList = [
  { label: "Giặt Sấy Gia Đình", href: "/giat-say-go-vap" },
  { label: "Giặt Chăn Mền", href: "/giat-chan-men-go-vap" },
  { label: "Giặt Giày", href: "/giat-giay-go-vap" },
  { label: "Giặt Ủi Tận Nơi", href: "/giat-ui-tan-noi-go-vap" },
];

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-slate-900 text-slate-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-900/20 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-900/15 translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#1B3FA0] flex items-center justify-center shadow-lg shadow-blue-800/40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28">
                  <rect x="2" y="2" width="28" height="28" rx="5" fill="#1B3FA0"/>
                  <rect x="2" y="2" width="28" height="9" rx="5" fill="#17367A"/>
                  <rect x="2" y="8" width="28" height="3" fill="#17367A"/>
                  <rect x="4" y="4.5" width="6" height="2" rx="1" fill="white" opacity="0.6"/>
                  <circle cx="16" cy="5.5" r="2" fill="white" opacity="0.8"/>
                  <circle cx="22" cy="5.5" r="1.5" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
                  <rect x="25" y="4.5" width="3" height="2" rx="0.5" fill="white" opacity="0.5"/>
                  <circle cx="16" cy="19" r="8" fill="white"/>
                  <circle cx="16" cy="19" r="7" fill="#7EC8E3"/>
                  <circle cx="16" cy="19" r="5.5" fill="white"/>
                  <rect x="10.5" y="20.5" width="11" height="5" fill="#5BAECC"/>
                  <ellipse cx="16" cy="20.5" rx="5.5" ry="1.5" fill="#7EC8E3"/>
                  <circle cx="13.5" cy="18" r="1.2" fill="white" opacity="0.9"/>
                  <circle cx="17" cy="16.5" r="1" fill="white" opacity="0.85"/>
                  <circle cx="20" cy="18.5" r="0.9" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-base">
                Giặt Sấy{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">24h Gò Vấp</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Dịch vụ giặt sấy chuyên nghiệp — sạch đúng nghĩa, đẹp như mới.
              Phục vụ tận tình 09:00 – 20:00, thứ 2 đến thứ 7.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61551799042694"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={17} />
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
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
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
                    Hotline 09:00 – 20:00, T2–T7
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-500">
                  Số 1 đường số 8, Thông Tây Hội, Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-blue-500 shrink-0" />
                <span className="text-slate-500">
                  09:00 - 20:00, tất cả các ngày trừ chủ nhật
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <p>© 2025 Giặt Sấy 24h Gò Vấp. Bảo lưu mọi quyền.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Thiết kế bởi đội ngũ Giặt Sấy 24h Gò Vấp
          </p>
        </div>
      </div>
    </footer>
  );
}
