"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            observer.unobserve(el);
            // double rAF ensures browser paints initial opacity:0 before animation starts
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.classList.add("visible");
              });
            });
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-fall").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
