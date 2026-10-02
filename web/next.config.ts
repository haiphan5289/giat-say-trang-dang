import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind CSS is small (~15KB); inlining removes the render-blocking request before first paint.
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
