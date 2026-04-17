import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      { source: "/manifesto", destination: "/", permanent: true },
      { source: "/philosophy", destination: "/", permanent: true },
      { source: "/2026", destination: "/", permanent: true },
      { source: "/audit", destination: "/services", permanent: true },
      { source: "/analysis", destination: "/reports", permanent: true },
      { source: "/analysis/selective-promotion", destination: "/reports/selective-promotion", permanent: true },
      { source: "/analysis/bid-cronyism-by-design", destination: "/blog/bid-cronyism-by-design", permanent: true },
      { source: "/analysis/andrew-brown-bid-media", destination: "/reports/andrew-brown-bid-media", permanent: true },
      { source: "/analysis/bid-treasurer-mikhail", destination: "/overview", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/((?!_next|api).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=300, stale-while-revalidate=60",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
