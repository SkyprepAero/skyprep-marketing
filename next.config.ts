import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.skyprepaero.com" },
    ],
  },
  allowedDevOrigins: ["172.18.192.1"],
};

export default nextConfig;
