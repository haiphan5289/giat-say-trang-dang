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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 flex flex-col items-center gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 relative"
        aria-label="Facebook"
      >
        <FacebookIcon size={22} />
        <span className="absolute right-14 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Facebook
        </span>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0938432178"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 relative"
        aria-label="Zalo"
      >
        <MessageCircle size={22} className="text-white" />
        <span className="absolute right-14 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat Zalo
        </span>
      </a>

      {/* Phone — pulsing */}
      <a
        href="tel:0938432178"
        className="group w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 relative animate-pulse-slow"
        aria-label="Gọi ngay"
      >
        <Phone size={26} className="text-white" />
        <span className="absolute right-16 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          0938 432 178
        </span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 bg-gray-700 hover:bg-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Về đầu trang"
      >
        <ChevronUp size={18} className="text-white" />
      </button>
    </div>
  );
}
