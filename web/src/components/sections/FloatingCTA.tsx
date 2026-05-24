"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 hidden md:flex flex-col items-center gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Icon-only floating widget buttons — CTAButton does not support this square icon-only layout */}
      <a
        href="https://www.facebook.com/profile.php?id=61551799042694"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all hover:scale-110 relative"
        aria-label="Facebook"
      >
        <FacebookIcon size={22} />
        <span className="absolute right-14 bg-slate-800 text-white text-xs rounded-xl px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Fanpage Facebook
        </span>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0938432178"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-400/30 transition-all hover:scale-110 relative"
        aria-label="Zalo"
      >
        <MessageCircle size={22} className="text-white" />
        <span className="absolute right-14 bg-slate-800 text-white text-xs rounded-xl px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat Zalo
        </span>
      </a>

      {/* Phone — pulsing */}
      <a
        href="tel:0938432178"
        className="group w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/35 transition-all hover:scale-110 relative phone-pulse"
        aria-label="Gọi ngay"
      >
        <Phone size={26} className="text-white" />
        <span className="absolute right-16 bg-slate-800 text-white text-xs rounded-xl px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          0938 432 178
        </span>
        <span className="absolute inset-0 rounded-2xl bg-green-400 animate-ping opacity-25" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg transition-all hover:scale-110 border border-slate-600/30"
        aria-label="Về đầu trang"
      >
        <ChevronUp size={18} className="text-white" />
      </button>
    </div>
  );
}
