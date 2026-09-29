import { MetadataRoute } from "next";
import { newsPosts } from "@/data/news";

const BASE = "https://www.giatsay24hgovap.com";

// lastModified phải là ngày sửa nội dung thật — cập nhật khi sửa trang tương ứng.
// Dùng new Date() khiến mọi trang luôn "vừa sửa" và Google bỏ qua lastmod.
const PAGES: {
  path: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "", lastModified: "2026-09-29", changeFrequency: "monthly", priority: 1 },
  { path: "/tin-tuc", lastModified: "2026-08-18", changeFrequency: "weekly", priority: 0.8 },
  { path: "/giat-say-go-vap", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.9 },
  { path: "/giat-giay-go-vap", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.9 },
  { path: "/giat-chan-men-go-vap", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.8 },
  { path: "/giat-ui-tan-noi-go-vap", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.8 },
  { path: "/giat-gau-bong-go-vap", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.8 },
  { path: "/giat-say-hanh-thong-go-vap", lastModified: "2026-09-19", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giat-say-an-nhon-go-vap", lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giat-say-phuong-go-vap", lastModified: "2026-09-19", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giat-say-an-hoi-dong-go-vap", lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giat-say-an-hoi-tay-go-vap", lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.7 },
  { path: "/giat-say-thong-tay-hoi-go-vap", lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.7 },
];

// post.date dạng "dd/mm/yyyy" → "yyyy-mm-dd"
function toISODate(date: string): string {
  const [dd, mm, yyyy] = date.split("/");
  return `${yyyy}-${mm}-${dd}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageUrls: MetadataRoute.Sitemap = PAGES.map(({ path, ...rest }) => ({
    url: `${BASE}${path}`,
    ...rest,
  }));

  const blogUrls: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${BASE}/tin-tuc/${post.slug}`,
    lastModified: toISODate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pageUrls, ...blogUrls];
}
