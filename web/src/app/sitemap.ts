import { MetadataRoute } from "next";

const BASE = "https://www.giatsay24hgovap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/tin-tuc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}
