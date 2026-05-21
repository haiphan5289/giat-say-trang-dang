import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.giatsay24hgovap.com"),
  title: "Giặt Sấy 24h Gò Vấp - Dịch Vụ Giặt Sấy Chuyên Nghiệp",
  description:
    "Giặt Sấy 24h Gò Vấp cung cấp dịch vụ giặt sấy gia đình, công nghiệp, giặt hấp cao cấp, giặt nệm sofa, giặt giày. Giao nhận tận nơi, giá cả hợp lý.",
  keywords: "giặt sấy, giặt ủi, giặt hấp, dịch vụ giặt sấy, giặt nệm, giặt giày, gò vấp",
  openGraph: {
    title: "Giặt Sấy 24h Gò Vấp - Siêu Sạch · Thơm Lâu · Khử Khuẩn",
    description: "Dịch vụ giặt sấy chuyên nghiệp tại Gò Vấp. Giao nhận tận nơi. Hotline: 0938 432 178",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Sấy 24h Gò Vấp" }],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ScrollRevealInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
