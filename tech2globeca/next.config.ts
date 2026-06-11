import type { NextConfig } from "next";

const blogMediaProxy =
  process.env.BLOG_MEDIA_PROXY_TARGET ||
  "http://blog.tech2globe.ca/wp-content/uploads";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.tech2globe.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog-media/:path*",
        destination: `${blogMediaProxy}/:path*`,
      },
    ];
  },
};

export default nextConfig;
