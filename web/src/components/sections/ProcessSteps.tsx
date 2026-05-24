import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedStepCard from "@/components/ui/AnimatedStepCard";
import AnimatedConnector from "@/components/ui/AnimatedConnector";

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
    <section id="quy-trinh" className="py-14 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Top wave from white */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionHeader
          label="Quy trình làm việc"
          title={
            <>
              Chỉ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                4 Bước
              </span>{" "}
              Đơn Giản
            </>
          }
          description="Minh bạch, chuyên nghiệp — bạn không cần lo lắng bất cứ điều gì."
          descriptionClass="max-w-lg"
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <AnimatedConnector />

          {steps.map((step, i) => (
            <AnimatedStepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        <CTABanner
          title="Đặt Lịch Ngay Hôm Nay"
          description={
            <>
              Lần đầu sử dụng — giảm{" "}
              <strong className="text-amber-300 text-xl">10%</strong> cho mọi dịch vụ.
            </>
          }
          phoneLabel="0938 432 178"
          className="mt-16"
        />
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
