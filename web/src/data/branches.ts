export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl?: string;
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Giặt Sấy 24h Gò Vấp",
    address: "Số 1 đường số 8, Thông Tay Hội, Gò Vấp, TP.HCM",
    phone: "0938 432 178",
    hours: "08:00 - 20:00, tất cả các ngày trừ chủ nhật",
    mapUrl: "https://maps.google.com/?q=10.8370625,106.6645925",
  },
];
