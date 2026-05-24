"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 shadow-[0_-4px_24px_rgba(0,0,0,0.18)]">
        <a
          href={BUSINESS.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-sky-500 active:bg-sky-600 text-white font-bold py-4 text-[15px]"
          aria-label="Chat Zalo"
        >
          <MessageCircle size={20} />
          Chat Zalo
        </a>
        <a
          href={BUSINESS.hotlineHref}
          className="flex items-center justify-center gap-2 bg-green-500 active:bg-green-600 text-white font-bold py-4 text-[15px] phone-pulse"
          aria-label="Gọi ngay"
        >
          <Phone size={20} />
          Gọi Ngay
        </a>
      </div>
    </div>
  );
}
