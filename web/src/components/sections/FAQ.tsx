"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  {
    q: "Giặt sấy mất bao lâu?",
    a: "Giặt thường mất 2–4 tiếng. Dịch vụ giặt nhanh cam kết trả đồ trong cùng buổi (sáng lấy–chiều trả, chiều lấy–sáng hôm sau trả). Chúng tôi nhắn tin thông báo khi đồ hoàn thành.",
  },
  {
    q: "Giá giặt sấy bao nhiêu?",
    a: "Giặt thường từ 13.000đ/kg · Giặt nhanh từ 20.000đ/kg · Giặt giày từ 50.000đ/đôi · Giặt gấu bông từ 30.000đ/kg · Giặt chăn mền từ 20.000–30.000đ/kg. Giặt hấp vest, áo dài vui lòng liên hệ để báo giá chính xác.",
  },
  {
    q: "Có giao nhận tận nơi không?",
    a: "Có. Chúng tôi lấy và trả đồ tận địa chỉ trong khu vực Gò Vấp và các quận lân cận. Gọi hotline 0938 432 178 hoặc nhắn Zalo để đặt lịch.",
  },
  {
    q: "Có nhận giặt vest, áo dài, đồ cao cấp không?",
    a: "Có. Chúng tôi có dịch vụ giặt hấp chuyên biệt — giữ nguyên form dáng, màu sắc và chất liệu. Phù hợp với vest công sở, áo dài truyền thống và trang phục dạ hội.",
  },
  {
    q: "Đặt lịch bằng cách nào?",
    a: "Gọi hotline 0938 432 178 hoặc nhắn tin qua Zalo cùng số trên. Chúng tôi xác nhận lịch và đến đúng giờ, không cần chờ đợi.",
  },
  {
    q: "Mở cửa mấy giờ, có phục vụ ngày lễ không?",
    a: "Chúng tôi mở cửa 09:00 – 20:00, thứ 2 đến thứ 7 (nghỉ chủ nhật). Riêng các ngày lễ vui lòng gọi trước để xác nhận.",
  },
  {
    q: "Đồ có bị mất hay hỏng không?",
    a: "Chúng tôi kiểm kê kỹ từng đơn hàng trước khi tiếp nhận và cam kết bồi thường nếu xảy ra mất mát hoặc hư hỏng do lỗi của chúng tôi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.04}>
      <div className="overflow-hidden rounded-2xl border border-slate-100">
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
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-24 bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Câu hỏi thường gặp"
          title={
            <>
              Bạn Muốn{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Biết Gì?
              </span>
            </>
          }
          description="Những thắc mắc phổ biến nhất về dịch vụ giặt sấy — trả lời nhanh gọn."
          descriptionClass="max-w-lg"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <CTABanner
          title="Còn Thắc Mắc? Nhắn Ngay"
          description="Chat Zalo — phản hồi trong vài phút, không cần chờ đợi."
          phoneLabel="Chat hoặc Gọi ngay"
          className="mt-10"
        />
      </div>
    </section>
  );
}
