import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section id="dich-vu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-3">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Đa Dạng Dịch Vụ Giặt Sấy
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ giặt sấy gia đình đến công nghiệp, chúng tôi đáp ứng mọi nhu cầu
            giặt sạch của bạn với chất lượng cao nhất.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              {service.price && (
                <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold">
                  💰 {service.price}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="tel:0938432178"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            📞 Tư Vấn Miễn Phí
          </a>
        </div>
      </div>
    </section>
  );
}
