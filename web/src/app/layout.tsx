import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giatsay24hgovap.com"),
  title: {
    default: "Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi · Giao Nhận Tận Nơi",
    template: "%s | Giặt Sấy 24h Gò Vấp",
  },
  description:
    "Giặt sấy 24h Gò Vấp — giặt sạch, nhanh, khử mùi hiệu quả. Giặt sấy gần đây, giao nhận tận nơi. Từ 13.000đ/kg. Mở cửa 7:00-21:00 mỗi ngày. Hotline: 0938 432 178.",
  keywords: ["giặt sấy 24h gò vấp", "giặt sấy gần đây", "giặt sạch gò vấp", "giặt nhanh khử mùi hcm", "giặt ủi tận nơi gò vấp", "giặt hấp vest áo dài", "giặt nệm sofa tại nhà", "giặt giày gò vấp"],
  alternates: { canonical: "https://www.giatsay24hgovap.com" },
  twitter: {
    card: "summary_large_image",
    title: "Giặt Sấy 24h Gò Vấp - Sạch · Nhanh · Khử Mùi",
    description: "Giặt sấy gần đây — sạch, nhanh, khử mùi. Giao nhận tận nơi. Từ 13.000đ/kg. Hotline 0938 432 178.",
    images: ["/images/shop-front-1.jpg"],
  },
  verification: { google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE" },
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "500",
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

        {/* Facebook Pixel — thay YOUR_PIXEL_ID khi có Meta Business */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','YOUR_PIXEL_ID');fbq('track','PageView');`}
        </Script>

        {/* Google Tag Manager — thay GTM-XXXXXXX khi có Google Ads campaign */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
      </body>
    </html>
  );
}
