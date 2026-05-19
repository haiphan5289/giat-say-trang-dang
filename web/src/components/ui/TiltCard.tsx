"use client";

import { useCallback, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;
    requestAnimationFrame(() => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 14;
      const y = ((clientY - top) / height - 0.5) * -14;
      el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
    });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  }, []);

  return (
    <div
      className={`tilt-card ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
