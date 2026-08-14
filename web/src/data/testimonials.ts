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
    name: "Chị Phạm Thị Hoa",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Dịch vụ giặt nệm tại nhà rất tiện lợi. Đội ngũ chuyên nghiệp, làm nhanh và sạch. Sẽ sử dụng thường xuyên.",
    service: "Giặt Nệm & Sofa",
  },
  {
    id: 2,
    name: "Anh Trần Minh Khoa",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Đặt giặt ủi tận nơi cho cả tủ đồ công sở, nhân viên đến đúng giờ hẹn, đồ trả về ủi phẳng phiu, gấp gọn gàng. Rất hài lòng!",
    service: "Giặt Ủi Tận Nơi",
  },
  {
    id: 3,
    name: "Chị Lê Thị Mai",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Quần áo được giặt rất sạch và thơm. Nhân viên phục vụ nhiệt tình, giao hàng đúng hẹn. Tôi rất hài lòng!",
    service: "Giặt Sấy Gia Đình",
  },
  {
    id: 4,
    name: "Anh Nguyễn Văn Tài",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Đôi giày Nike trắng của tôi đã bị ố vàng, sau khi giặt ở đây trắng sáng như mới. Rất ấn tượng!",
    service: "Giặt Giày",
  },
  {
    id: 5,
    name: "Chị Võ Thị Thu",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Gia đình tôi có 3 đứa con nhỏ, đồ vải luôn bẩn. Nhờ dịch vụ giặt sấy tại Gò Vấp này mà tiết kiệm được rất nhiều thời gian.",
    service: "Giặt Sấy Gia Đình",
  },
  {
    id: 6,
    name: "Anh Đinh Quốc Hùng",
    location: "Gò Vấp, TP.HCM",
    rating: 5,
    comment:
      "Dịch vụ giặt chăn mền rất tốt, tôi đặt thường xuyên cho cả gia đình. Giá cả hợp lý, chất lượng tốt.",
    service: "Giặt Chăn Mền",
  },
];

export const stats = [
  { value: "500+", count: 500, suffix: "+", label: "Khách hàng Gò Vấp tin dùng" },
  { value: "1",    count: 1,   suffix: "",  label: "Chi nhánh tại Gò Vấp" },
  { value: "10+",  count: 10,  suffix: "+", label: "Năm kinh nghiệm" },
  { value: "99%",  count: 99,  suffix: "%", label: "Khách hàng hài lòng" },
];
