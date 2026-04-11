"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "#gioi-thieu" },
  { label: "Hệ Thống", href: "#he-thong" },
  { label: "Dịch Vụ", href: "#dich-vu" },
  { label: "Quy Trình", href: "#quy-trinh" },
  { label: "Tin Tức", href: "#tin-tuc" },
  { label: "Liên Hệ", href: "#lien-he" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-blue-600 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>⏰ Giờ mở cửa: 7:00 - 21:00 (Tất cả các ngày)</span>
          <a href="tel:0938432178" className="flex items-center gap-1 font-semibold hover:text-blue-200 transition-colors">
            <Phone size={14} />
            0938 432 178
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            GS
          </div>
          <div>
            <p className="font-bold text-blue-700 text-lg leading-tight">Giặt Sấy</p>
            <p className="font-semibold text-blue-500 text-sm leading-tight">Trắng Đáng</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0938432178"
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <Phone size={16} />
            Gọi Ngay
          </a>
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:0938432178"
                className="flex items-center gap-2 justify-center bg-blue-600 text-white px-4 py-3 rounded-full font-semibold mt-2"
              >
                <Phone size={16} />
                Gọi Ngay: 0938 432 178
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
