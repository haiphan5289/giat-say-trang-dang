export interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  slug: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "Bí Quyết Giặt Quần Áo Đúng Cách Để Bền Màu Lâu",
    excerpt:
      "Nhiều người không biết rằng cách giặt sai có thể làm hỏng quần áo chỉ sau vài lần. Cùng chúng tôi tìm hiểu những bí quyết giặt đúng cách để quần áo luôn mới như ngày đầu.",
    date: "15/06/2025",
    category: "Mẹo Giặt",
    image: "/images/shop-interior.jpg",
    slug: "bi-quyet-giat-quan-ao-ben-mau",
  },
  {
    id: 2,
    title: "Tại Sao Nên Giặt Chăn Mền Định Kỳ Mỗi Tháng?",
    excerpt:
      "Chăn mền là nơi tích tụ bụi bẩn, vi khuẩn và tế bào da chết. Việc giặt định kỳ không chỉ giúp vệ sinh mà còn bảo vệ sức khỏe gia đình bạn.",
    date: "02/06/2025",
    category: "Sức Khỏe",
    image: "/images/shop-front-2.jpg",
    slug: "tai-sao-can-giat-chan-men-dinh-ky",
  },
  {
    id: 3,
    title: "Dịch Vụ Giặt Sấy Theo Yêu Cầu - Giải Pháp Cho Người Bận Rộn",
    excerpt:
      "Trong nhịp sống hiện đại, thời gian là tài sản quý giá. Dịch vụ giặt sấy theo yêu cầu của chúng tôi sẽ giúp bạn tiết kiệm thời gian và công sức.",
    date: "25/05/2025",
    category: "Tin Tức",
    image: "/images/shop-front-1.jpg",
    slug: "dich-vu-giat-say-theo-yeu-cau",
  },
];
