import { Phone, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    emoji: "📞",
    title: "Tư Vấn Dịch Vụ",
    description:
      "Gọi hotline hoặc Zalo để được tư vấn, báo giá chi tiết và đặt lịch lấy đồ thuận tiện.",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/30",
  },
  {
    number: "02",
    emoji: "🚚",
    title: "Thu Gom & Xử Lý",
    description:
      "Nhân viên đến tận nơi thu gom, phân loại và xử lý đúng quy trình theo từng loại chất liệu.",
    gradient: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/30",
  },
  {
    number: "03",
    emoji: "📦",
    title: "Đóng Gói Bảo Quản",
    description:
      "Đồ được gấp phẳng, đóng gói kỹ lưỡng và thơm mát sau khi giặt sấy hoàn chỉnh.",
    gradient: "from-teal-500 to-emerald-500",
    shadow: "shadow-teal-500/30",
  },
  {
    number: "04",
    emoji: "🎁",
    title: "Bàn Giao Tận Nơi",
    description:
      "Giao đồ tận địa chỉ đúng hẹn. Thanh toán linh hoạt — tiền mặt hoặc chuyển khoản.",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/30",
  },
];

export default function ProcessSteps() {
  return (
    <section id="quy-trinh" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Top wave from white */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Quy trình làm việc
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-4 mt-4">
            Chỉ{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              4 Bước
            </span>{" "}
            Đơn Giản
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Minh bạch, chuyên nghiệp — bạn không cần lo lắng bất cứ điều gì.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[14%] right-[14%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-amber-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative z-10 group text-center`}
            >
              {/* Step circle */}
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg ${step.shadow} group-hover:shadow-xl group-hover:scale-110 flex flex-col items-center justify-center gap-0.5 transition-all duration-300 mb-6`}>
                <span className="text-[10px] font-bold text-white/70 leading-none">
                  {step.number}
                </span>
                <span className="text-2xl leading-none">{step.emoji}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 reveal relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Đặt Lịch Ngay Hôm Nay
            </h3>
            <p className="text-blue-100 mb-8 max-w-md mx-auto text-lg">
              Lần đầu sử dụng — giảm{" "}
              <strong className="text-amber-300 text-xl">10%</strong> cho mọi dịch vụ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0938432178"
                className="group flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/10 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-blue-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <Phone size={20} />
                0938 432 178
              </a>
              <a
                href="https://zalo.me/0938432178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/15 border-2 border-white/30 text-white hover:bg-white/25 px-7 py-3.5 rounded-xl font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm"
              >
                <MessageCircle size={20} />
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave to white */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
