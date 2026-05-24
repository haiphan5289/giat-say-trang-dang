import { BUSINESS } from "@/config/business";

const steps = [
  { emoji: "📅", label: "Đặt lịch", time: "2 phút", sub: "Gọi hoặc nhắn Zalo" },
  { emoji: "🚗", label: "Lấy đồ tận nơi", time: BUSINESS.responseTime, sub: "Nhân viên đến nhà bạn" },
  { emoji: "🧺", label: "Giặt & khử mùi", time: "2–4 tiếng", sub: "Xử lý chuyên nghiệp" },
  { emoji: "📦", label: "Giao về tận tay", time: "Trong ngày", sub: "Đúng hẹn, thơm sạch" },
];

export default function PickupFlow() {
  return (
    <div className="bg-white border-b border-slate-100 py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 relative">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                {s.emoji}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-800 text-sm leading-tight">{s.label}</p>
                <p className="text-blue-600 text-xs font-semibold">{s.time}</p>
                <p className="text-slate-400 text-xs leading-tight hidden sm:block">{s.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
