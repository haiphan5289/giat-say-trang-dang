"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  to,
  suffix = "",
  duration = 1800,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.round(eased * to) + suffix;
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      0{suffix}
    </span>
  );
}
