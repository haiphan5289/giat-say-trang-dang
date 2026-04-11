import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                GS
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">Giặt Sấy</p>
                <p className="font-semibold text-blue-400 text-sm leading-tight">Trắng Đáng</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Dịch vụ giặt sấy chuyên nghiệp — sạch đúng nghĩa, đẹp như mới.
              Phục vụ tận tình, giao nhận tận nơi.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-400 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors"
                aria-label="Zalo"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Trang Chủ", href: "/" },
                { label: "Giới Thiệu", href: "#gioi-thieu" },
                { label: "Dịch Vụ", href: "#dich-vu" },
                { label: "Hệ Thống", href: "#he-thong" },
                { label: "Tin Tức", href: "#tin-tuc" },
                { label: "Liên Hệ", href: "#lien-he" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Giặt Sấy Gia Đình",
                "Giặt Sấy Công Nghiệp",
                "Giặt Hấp Cao Cấp",
                "Giặt Nệm & Sofa",
                "Giặt Giày",
                "Giặt Rèm Cửa",
                "Giặt Gấu Bông",
              ].map((s) => (
                <li key={s} className="text-gray-400">
                  → {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">0938 432 178</p>
                  <p className="text-gray-400 text-xs">Hotline hỗ trợ 7:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span>123 Đường Lê Lợi, Phường 1, TP. Thủ Đức, TP.HCM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span>Mở cửa: 7:00 — 21:00 (Tất cả các ngày)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2025 Giặt Sấy Trắng Đáng. Bảo lưu mọi quyền.</p>
          <p>Thiết kế & Phát triển bởi đội ngũ Giặt Sấy Trắng Đáng</p>
        </div>
      </div>
    </footer>
  );
}
