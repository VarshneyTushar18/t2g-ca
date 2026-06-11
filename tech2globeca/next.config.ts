import type { NextConfig } from "next";

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
};

export default nextConfig;
