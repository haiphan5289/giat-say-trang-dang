const galleryItems = [
  { id: 1, emoji: "👕", label: "Giặt Sấy Quần Áo", span: "col-span-1 row-span-2" },
  { id: 2, emoji: "🛋️", label: "Giặt Sofa Tại Nhà", span: "col-span-1 row-span-1" },
  { id: 3, emoji: "👟", label: "Giặt Giày Thể Thao", span: "col-span-1 row-span-1" },
  { id: 4, emoji: "👔", label: "Giặt Hấp Vest", span: "col-span-2 row-span-1" },
  { id: 5, emoji: "🪟", label: "Giặt Rèm Cửa", span: "col-span-1 row-span-1" },
  { id: 6, emoji: "🐻", label: "Giặt Gấu Bông", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-3">
            Thư Viện Ảnh
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Chúng Tôi Làm Sạch Tất Cả
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Từ quần áo đến nội thất — mọi vật dụng đều được xử lý chuyên nghiệp.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center gap-3 group cursor-pointer hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md border border-blue-100`}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform">{item.emoji}</span>
              <span className="text-blue-700 font-semibold text-sm text-center px-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
