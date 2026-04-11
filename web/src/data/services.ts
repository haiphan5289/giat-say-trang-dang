export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "👕",
    title: "Giặt Sấy Gia Đình",
    description:
      "Giặt sấy quần áo gia đình theo kg, nhanh chóng sạch sẽ, thơm mát cả ngày.",
    price: "Từ 25.000đ/kg",
  },
  {
    id: 2,
    icon: "🏭",
    title: "Giặt Sấy Công Nghiệp",
    description:
      "Phục vụ khách sạn, nhà hàng, spa với hệ thống máy móc hiện đại công suất lớn.",
    price: "Liên hệ báo giá",
  },
  {
    id: 3,
    icon: "👔",
    title: "Giặt Hấp Trang Phục Cao Cấp",
    description:
      "Vest, áo dài, trang phục dạ hội được xử lý bằng phương pháp hấp chuyên nghiệp.",
    price: "Từ 80.000đ/món",
  },
  {
    id: 4,
    icon: "🛋️",
    title: "Giặt Nệm & Sofa",
    description:
      "Vệ sinh nệm, sofa, thảm tại nhà hoặc tại cửa hàng với máy giặt chuyên dụng.",
    price: "Từ 150.000đ/cái",
  },
  {
    id: 5,
    icon: "👟",
    title: "Giặt Giày",
    description:
      "Làm sạch, phục hồi màu sắc và khử mùi giày dép mọi chất liệu an toàn.",
    price: "Từ 50.000đ/đôi",
  },
  {
    id: 6,
    icon: "🪟",
    title: "Giặt Rèm Cửa",
    description:
      "Giặt rèm cửa tận nơi hoặc mang đến cửa hàng, trả về thẳng phẳng sạch đẹp.",
    price: "Từ 30.000đ/m²",
  },
  {
    id: 7,
    icon: "🐻",
    title: "Giặt Gấu Bông & Đồ Chơi",
    description:
      "Vệ sinh đồ chơi mềm an toàn cho trẻ em, diệt khuẩn và khử dị ứng.",
    price: "Từ 30.000đ/món",
  },
  {
    id: 8,
    icon: "🧥",
    title: "Giặt Chăn Mền",
    description:
      "Giặt sạch mền gối, chăn bông đánh bung sợi vải, thơm mát như mới.",
    price: "Từ 60.000đ/cái",
  },
];
