import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.skyprepaero.com" },
    ],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable modern JavaScript output
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Reduce bundle size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
