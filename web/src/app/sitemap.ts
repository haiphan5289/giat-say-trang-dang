import { MetadataRoute } from "next";
import { newsPosts } from "@/data/news";

const BASE = "https://www.giatsay24hgovap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${BASE}/tin-tuc/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/tin-tuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/giat-say-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/giat-giay-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/giat-chan-men-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/giat-ui-tan-noi-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/giat-gau-bong-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/giat-say-hanh-thong-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/giat-say-an-nhon-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/giat-say-phuong-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/giat-say-an-hoi-dong-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/giat-say-an-hoi-tay-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/giat-say-thong-tay-hoi-go-vap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...blogUrls,
  ];
}
