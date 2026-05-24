"use client";

import { useCallback, useRef, ReactNode } from "react";

export default function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;
    requestAnimationFrame(() => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 14;
      const y = ((clientY - top) / height - 0.5) * -14;
      el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
      if (spotRef.current) {
        const pctX = ((clientX - left) / width) * 100;
        const pctY = ((clientY - top) / height) * 100;
        spotRef.current.style.backgroundImage = `radial-gradient(180px circle at ${pctX}% ${pctY}%, rgba(59,130,246,0.12), transparent 70%)`;
        spotRef.current.style.opacity = "1";
      }
    });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
    if (spotRef.current) spotRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      className={`tilt-card ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={spotRef}
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ zIndex: 2 }}
      />
      {children}
    </div>
  );
}
