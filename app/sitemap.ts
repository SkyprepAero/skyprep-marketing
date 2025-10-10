import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skyprepaero.com";
  const now = new Date();
  return [
    {
      url: `${base}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}


