export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chị Nguyễn Thị Lan",
    location: "Quận 9, TP.HCM",
    rating: 5,
    comment:
      "Quần áo được giặt rất sạch và thơm. Nhân viên phục vụ nhiệt tình, giao hàng đúng hẹn. Tôi rất hài lòng!",
    service: "Giặt Sấy Gia Đình",
  },
  {
    id: 2,
    name: "Anh Trần Văn Minh",
    location: "Thủ Đức, TP.HCM",
    rating: 5,
    comment:
      "Giặt bộ vest cưới ở đây, kết quả ngoài mong đợi. Chất vải được giữ nguyên, không bị nhăn hay phai màu.",
    service: "Giặt Hấp Cao Cấp",
  },
  {
    id: 3,
    name: "Chị Phạm Thị Hoa",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Dịch vụ giặt nệm tại nhà rất tiện lợi. Đội ngũ chuyên nghiệp, làm nhanh và sạch. Sẽ sử dụng thường xuyên.",
    service: "Giặt Nệm & Sofa",
  },
  {
    id: 4,
    name: "Anh Lê Hoàng Nam",
    location: "Bình Thạnh, TP.HCM",
    rating: 5,
    comment:
      "Đôi giày Nike trắng của tôi đã bị ố vàng, sau khi giặt ở đây trắng sáng như mới. Rất ấn tượng!",
    service: "Giặt Giày",
  },
  {
    id: 5,
    name: "Chị Võ Thị Thu",
    location: "Quận 12, TP.HCM",
    rating: 5,
    comment:
      "Gia đình tôi có 3 đứa con nhỏ, đồ vải luôn bẩn. Nhờ dịch vụ giặt sấy này mà tiết kiệm được rất nhiều thời gian.",
    service: "Giặt Sấy Gia Đình",
  },
  {
    id: 6,
    name: "Anh Nguyễn Đức Huy",
    location: "Bình Dương",
    rating: 5,
    comment:
      "Dịch vụ giặt chăn mền rất tốt, công ty tôi đặt thường xuyên cho toàn bộ nhân viên. Giá cả hợp lý.",
    service: "Giặt Chăn Mền",
  },
];

export const stats = [
  { value: "500+", label: "Khách hàng tin dùng" },
  { value: "5+", label: "Chi nhánh trên toàn thành phố" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "99%", label: "Khách hàng hài lòng" },
];
