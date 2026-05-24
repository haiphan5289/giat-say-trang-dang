import { Phone, MessageCircle } from "lucide-react";
import { ReactNode } from "react";
import CTAButton from "@/components/ui/CTAButton";
import FadeIn from "@/components/ui/FadeIn";

interface CTABannerProps {
  title: string;
  description: ReactNode;
  phoneLabel?: string;
  preTitle?: string;
  className?: string;
  variant?: "blue" | "dark";
}

export default function CTABanner({
  title,
  description,
  phoneLabel = "Gọi Ngay",
  preTitle,
  className = "mt-12",
  variant = "blue",
}: CTABannerProps) {
  const isDark = variant === "dark";
  return (
    <FadeIn className={`${className} relative overflow-hidden rounded-3xl`}>
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-slate-800 to-slate-900"
            : "bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600"
        }`}
      />
      <div
        className={`absolute inset-0 dot-pattern-white ${isDark ? "opacity-15" : "opacity-20"}`}
      />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative p-8 lg:p-12 text-center">
        {preTitle && (
          <p
            className={`text-sm font-medium mb-2 ${
              isDark ? "text-slate-400" : "text-blue-200"
            }`}
          >
            {preTitle}
          </p>
        )}
        <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">{title}</h3>
        <p
          className={`mb-8 max-w-md mx-auto ${isDark ? "text-slate-300" : "text-blue-100"}`}
        >
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="tel:0938432178" variant="white">
            <Phone size={20} />
            {phoneLabel}
          </CTAButton>
          <CTAButton
            href="https://zalo.me/0938432178"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            Chat Zalo
          </CTAButton>
        </div>
      </div>
    </FadeIn>
  );
}
