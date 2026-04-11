import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giặt Sấy Trắng Đáng - Dịch Vụ Giặt Sấy Chuyên Nghiệp",
  description:
    "Giặt Sấy Trắng Đáng cung cấp dịch vụ giặt sấy gia đình, công nghiệp, giặt hấp cao cấp, giặt nệm sofa, giặt giày. Giao nhận tận nơi, giá cả hợp lý.",
  keywords: "giặt sấy, giặt ủi, giặt hấp, dịch vụ giặt sấy, giặt nệm, giặt giày",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
