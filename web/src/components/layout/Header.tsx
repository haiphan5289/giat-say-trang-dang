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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/25">
            GS
          </div>
          <p className={`font-bold text-base transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
            Giặt Sấy{" "}
            <span className={scrolled ? "text-blue-600" : "text-blue-300"}>
              24h Gò Vấp
            </span>
          </p>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0938432178"
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-500/20"
          >
            <Phone size={15} />
            0938 432 178
          </a>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:0938432178"
                className="flex items-center gap-2 justify-center bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold text-sm"
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
