import { ReactNode } from "react";

type Variant = "primary" | "white" | "ghost" | "phone";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-xl shadow-blue-500/25",
  white:
    "bg-white text-blue-700 hover:bg-blue-50 shadow-xl shadow-black/10",
  ghost:
    "bg-white/15 border-2 border-white/30 text-white hover:bg-white/25 backdrop-blur-sm",
  phone:
    "bg-green-500 active:bg-green-600 text-white phone-pulse",
};

const shimmerClasses: Partial<Record<Variant, string>> = {
  primary: "bg-white/10",
  white: "bg-blue-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 rounded-xl text-sm",
  md: "px-7 py-3.5 rounded-xl text-lg",
  lg: "px-8 py-4 rounded-2xl text-lg",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const shimmer = shimmerClasses[variant];
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center gap-2 font-bold transition-all hover:scale-105 relative overflow-hidden ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
    >
      {shimmer && (
        <span
          className={`absolute inset-0 ${shimmer} translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12`}
        />
      )}
      {children}
    </a>
  );
}
