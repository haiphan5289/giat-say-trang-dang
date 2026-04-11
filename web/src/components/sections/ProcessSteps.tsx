import { Phone, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    emoji: "📞",
    title: "Tư Vấn Dịch Vụ",
    description:
      "Gọi hotline hoặc Zalo để được tư vấn, báo giá chi tiết và đặt lịch lấy đồ thuận tiện.",
  },
  {
    number: "02",
    emoji: "🚚",
    title: "Thu Gom & Xử Lý",
    description:
      "Nhân viên đến tận nơi thu gom, phân loại và xử lý đúng quy trình theo từng loại chất liệu.",
  },
  {
    number: "03",
    emoji: "📦",
    title: "Đóng Gói Bảo Quản",
    description:
      "Đồ được gấp phẳng, đóng gói kỹ lưỡng và thơm mát sau khi giặt sấy hoàn chỉnh.",
  },
  {
    number: "04",
    emoji: "🎁",
    title: "Bàn Giao Tận Nơi",
    description:
      "Giao đồ tận địa chỉ đúng hẹn. Thanh toán linh hoạt — tiền mặt hoặc chuyển khoản.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="quy-trinh" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Quy trình làm việc
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Chỉ 4 Bước Đơn Giản
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Minh bạch, chuyên nghiệp — bạn không cần lo lắng bất cứ điều gì.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-9 left-[14%] right-[14%] h-px bg-slate-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative z-10 group text-center`}
            >
              {/* Step circle */}
              <div className="w-[72px] h-[72px] mx-auto rounded-2xl bg-white border-2 border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-600 flex flex-col items-center justify-center gap-0.5 shadow-sm transition-all duration-300 mb-5">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-200 leading-none transition-colors">
                  {step.number}
                </span>
                <span className="text-2xl leading-none">{step.emoji}</span>
              </div>

              <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 reveal bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-center shadow-xl shadow-blue-500/15">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Đặt Lịch Ngay Hôm Nay
          </h3>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Lần đầu sử dụng — giảm{" "}
            <strong className="text-amber-300">10%</strong> cho mọi dịch vụ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0938432178"
              className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              0938 432 178
            </a>
            <a
              href="https://zalo.me/0938432178"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/15 border border-white/25 text-white hover:bg-white/25 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
