import { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  wrapperClass?: string;
  descriptionClass?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  wrapperClass = "mb-16",
  descriptionClass = "max-w-xl",
}: SectionHeaderProps) {
  return (
    <FadeIn className={`text-center ${wrapperClass}`}>
      <span className="section-label mb-4 inline-flex">
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
        {label}
      </span>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-4 mt-4">
        {title}
      </h2>
      {description && (
        <p className={`text-slate-500 mx-auto text-lg ${descriptionClass}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
