"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-100"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200 ${
          open ? "bg-blue-50" : "bg-white hover:bg-slate-50"
        }`}
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
            open ? "text-blue-700" : "text-slate-800"
          }`}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-blue-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed bg-blue-50/60 border-t border-blue-100">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function LandingFAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <FAQAccordion key={i} faq={faq} index={i} />
      ))}
    </div>
  );
}
