const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Tư Vấn Dịch Vụ",
    description:
      "Gọi hotline hoặc nhắn Zalo để được tư vấn dịch vụ phù hợp, báo giá chi tiết và đặt lịch lấy đồ.",
    color: "from-blue-500 to-blue-400",
  },
  {
    number: "02",
    icon: "🚚",
    title: "Thu Gom & Xử Lý",
    description:
      "Nhân viên đến tận nơi thu gom, phân loại và xử lý đồ theo đúng quy trình phù hợp với từng loại vải.",
    color: "from-cyan-500 to-cyan-400",
  },
  {
    number: "03",
    icon: "📦",
    title: "Đóng Gói Bảo Quản",
    description:
      "Sau khi giặt sấy sạch, đồ được gấp phẳng và đóng gói kỹ lưỡng, thơm mát, bảo quản sạch sẽ.",
    color: "from-indigo-500 to-indigo-400",
  },
  {
    number: "04",
    icon: "🎁",
    title: "Bàn Giao Tận Nơi",
    description:
      "Giao đồ trực tiếp đến địa chỉ của bạn đúng giờ hẹn. Thanh toán linh hoạt, tiện lợi.",
    color: "from-violet-500 to-violet-400",
  },
];

export default function ProcessSteps() {
  return (
    <section id="quy-trinh" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-3">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            4 Bước Đơn Giản
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Chúng tôi đã đơn giản hóa toàn bộ quy trình để bạn không phải lo lắng điều gì.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-violet-200 z-0" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10 text-center group">
              {/* Circle */}
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>

              {/* Step number badge */}
              <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br ${step.color} text-white text-xs font-bold mb-3 shadow`}>
                {index + 1}
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            Bắt Đầu Ngay Hôm Nay!
          </h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Đặt lịch ngay để được phục vụ ưu tiên. Lần đầu sử dụng giảm{" "}
            <strong className="text-yellow-300">10%</strong> cho đơn hàng.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0938432178"
              className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
            >
              📞 0938 432 178
            </a>
            <a
              href="https://zalo.me/0938432178"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 border-2 border-white/50 text-white hover:bg-white/30 px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
            >
              💬 Zalo: 0938 432 178
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
