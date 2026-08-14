import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import CTABanner from "@/components/ui/CTABanner";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const shopPhotos = [
  {
    label: "Cửa Hàng Gò Vấp",
    sub: "Mặt tiền cửa hàng",
    image: "/images/shop-front-1.jpg",
    gradient: "from-blue-900/60 to-blue-700/30",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    label: "Không Gian Tiếp Nhận",
    sub: "Đơn hàng đang chờ xử lý",
    image: "/images/shop-interior.jpg",
    gradient: "from-slate-900/60 to-slate-700/30",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    label: "Chi Nhánh Gò Vấp",
    sub: "Siêu sạch · Thơm lâu · Khử khuẩn",
    image: "/images/shop-front-2.jpg",
    gradient: "from-cyan-900/60 to-blue-700/30",
    span: "md:col-span-2 md:row-span-1",
  },
];

const items = [
  {
    label: "Giặt Sấy Quần Áo",
    sub: "Trước & sau khi giặt",
    image: "/images/ao-function-truoc-sau.jpg",
    gradient: "from-blue-900/70 to-blue-600/40",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    label: "Đồng Phục Học Sinh",
    sub: "Sạch trắng · Thơm lâu",
    image: "/images/dong-phuc-hoc-sinh.jpg",
    gradient: "from-amber-900/70 to-orange-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Giày",
    sub: "Trước & sau khi vệ sinh",
    image: "/images/giay-adidas-truoc-sau.jpg",
    gradient: "from-orange-900/70 to-rose-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Sofa & Nệm",
    sub: "Tại nhà hoặc cửa hàng",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    gradient: "from-teal-900/70 to-cyan-600/40",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    label: "Giặt Rèm Cửa",
    sub: "Giao tận nơi",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    gradient: "from-sky-900/70 to-blue-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Giặt Gấu Bông",
    sub: "An toàn cho trẻ em",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    gradient: "from-pink-900/70 to-rose-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Quần Áo Sau Giặt",
    sub: "Phẳng phiu · Thơm mát",
    image: "/images/ao-function-sau.jpg",
    gradient: "from-slate-900/70 to-slate-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    label: "Áo Trắng Trước & Sau",
    sub: "Sạch ố · Trắng sáng như mới",
    image: "/images/ao-trang-truoc-sau.jpg",
    gradient: "from-teal-900/70 to-cyan-600/40",
    span: "md:col-span-1 md:row-span-1",
  },
];

function ShopPhotoGrid() {
  return (
    <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] mb-4">
      {shopPhotos.map((item) => (
        <StaggerItem key={item.label} className={item.span}>
          <TiltCard className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl h-full">
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-90 transition-opacity duration-300`} />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Ảnh thực tế
              </span>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
              <p className="text-white font-bold text-sm lg:text-base leading-tight drop-shadow-md">{item.label}</p>
              <p className="text-white/70 text-xs mt-1 drop-shadow">{item.sub}</p>
            </div>
          </TiltCard>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}

function ServicePhotoGrid() {
  return (
    <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
      {items.map((item) => (
        <StaggerItem key={item.label} className={item.span}>
          <TiltCard className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl h-full">
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-90 transition-opacity duration-300`} />
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <ArrowUpRight size={14} className="text-white" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
              <p className="text-white font-bold text-sm lg:text-base leading-tight drop-shadow-md">{item.label}</p>
              <p className="text-white/70 text-xs mt-1 drop-shadow">{item.sub}</p>
            </div>
          </TiltCard>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}

export default function Gallery() {
  return (
    <section id="thu-vien" className="py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-slate-100 translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Dịch vụ & Hình ảnh"
          title={
            <>
              Chúng Tôi Làm Sạch{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Tất Cả
              </span>
            </>
          }
          description="Từ quần áo đến nội thất — mọi dịch vụ được thực hiện với tiêu chuẩn chuyên nghiệp."
          descriptionClass="max-w-lg"
        />
        <ShopPhotoGrid />
        <ServicePhotoGrid />

        <CTABanner
          title="Đặt Lịch Giặt Sấy Ngay"
          description="Giao nhận tận nơi · Nhanh chóng · Chuyên nghiệp"
          preTitle="Chúng tôi xử lý tất cả — từ quần áo đến nội thất"
          variant="dark"
        />
      </div>
    </section>
  );
}
