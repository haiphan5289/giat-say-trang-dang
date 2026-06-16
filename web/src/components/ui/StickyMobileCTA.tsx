"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";

const FB_PAGE_ID = "61551799042694";

function openFacebook() {
  let timer: ReturnType<typeof setTimeout>;

  const onHidden = () => {
    if (document.hidden) {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onHidden);
    }
  };

  document.addEventListener("visibilitychange", onHidden);

  timer = setTimeout(() => {
    document.removeEventListener("visibilitychange", onHidden);
    window.location.href = BUSINESS.facebookHref;
  }, 1500);

  window.location.href = `fb://profile/${FB_PAGE_ID}`;
}

function FacebookIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

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
      <div className="flex shadow-[0_-4px_24px_rgba(0,0,0,0.18)]">
        <button
          onClick={openFacebook}
          className="flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 text-white font-bold py-4 text-[15px] w-1/2"
          aria-label="Facebook"
        >
          <FacebookIcon />
          Facebook
        </button>
        <a
          href={BUSINESS.hotlineHref}
          className="flex items-center justify-center gap-2 bg-green-500 active:bg-green-600 text-white font-bold py-4 text-[15px] phone-pulse w-1/2"
          aria-label="Gọi ngay"
        >
          <Phone size={20} />
          Gọi Ngay
        </a>
      </div>
    </div>
  );
}
