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
    name: "Chi Nhánh 1 - Trung Tâm",
    address: "123 Đường Lê Lợi, Phường 1, TP. Thủ Đức",
    phone: "0938 432 178",
    hours: "7:00 - 21:00",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 2,
    name: "Chi Nhánh 2 - Quận 9",
    address: "456 Đường Nguyễn Văn Linh, Phường Tân Phú",
    phone: "0901 234 568",
    hours: "7:00 - 21:00",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 3,
    name: "Chi Nhánh 3 - Quận 12",
    address: "789 Đường Trường Chinh, Phường Tân Thới Nhất",
    phone: "0901 234 569",
    hours: "7:00 - 21:00",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 4,
    name: "Chi Nhánh 4 - Bình Thạnh",
    address: "321 Đường Đinh Tiên Hoàng, Phường 3",
    phone: "0901 234 570",
    hours: "7:00 - 21:00",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 5,
    name: "Chi Nhánh 5 - Gò Vấp",
    address: "654 Đường Quang Trung, Phường 11",
    phone: "0901 234 571",
    hours: "7:00 - 21:00",
    mapUrl: "https://maps.google.com",
  },
];
