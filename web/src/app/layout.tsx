import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giatsay24hgovap.com"),
  title: {
    default: "Giặt Sấy 24h Gò Vấp - Nhận & Trả Trong Ngày · Từ 13K/kg",
    template: "%s | Giặt Sấy 24h Gò Vấp",
  },
  description:
    "⚡ Giặt sạch, sấy khô — hoàn trả trong ngày. 🛵 Giao nhận tận nơi Gò Vấp. Từ 13.000đ/kg. Mở cửa 08:00–20:00 tất cả các ngày trừ chủ nhật. ☎️ Hotline: 0938 432 178.",
  keywords: ["giặt sấy 24h gò vấp", "giặt sấy gần đây", "giặt sạch gò vấp", "giặt nhanh khử mùi hcm", "giặt ủi tận nơi gò vấp", "giặt hấp vest áo dài", "giặt nệm sofa tại nhà", "giặt giày gò vấp"],
  alternates: { canonical: "https://www.giatsay24hgovap.com" },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi",
    description: "Giặt sấy gần đây — sạch, nhanh, khử mùi. Giao nhận tận nơi. Từ 13.000đ/kg. Hotline 0938 432 178.",
    images: ["/images/shop-front-1.jpg"],
  },
  verification: { google: "icIyIBiGHqRzlTao9gdrk4Y7T1N1tGxuOTHLPlS4UJU" },
  openGraph: {
    title: "Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi",
    description: "Giặt sấy 24h Gò Vấp — giặt sạch, nhanh, khử mùi. Giặt sấy gần đây, giao nhận tận nơi. Hotline: 0938 432 178",
    images: [{ url: "/images/shop-front-1.jpg", width: 815, height: 1200, alt: "Giặt Sấy 24h Gò Vấp" }],
    locale: "vi_VN",
    type: "website",
    url: "https://www.giatsay24hgovap.com",
    siteName: "Giặt Sấy 24h Gò Vấp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Giặt Sấy 24h Gò Vấp",
  description: "Dịch vụ giặt sấy chuyên nghiệp tại Gò Vấp, Hồ Chí Minh. Giao nhận tận nơi.",
  url: "https://www.giatsay24hgovap.com",
  telephone: "+84938432178",
  image: "/images/shop-front-1.jpg",
  priceRange: "₫₫",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 1 đường số 8, Thông Tay Hội",
    addressLocality: "Gò Vấp",
    addressRegion: "Hồ Chí Minh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.8370625,
    longitude: 106.6645925,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "11",
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
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54R3MFLD" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <StickyMobileCTA />
        {/* spacer prevents content hiding under sticky mobile bar */}
        <div className="h-14 md:hidden" />

        {/* TODO: Thêm Facebook Pixel ID khi có Meta Business Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-54R3MFLD');`,
          }}
        />
      </body>
    </html>
  );
}
