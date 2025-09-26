import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skyprep.co";
  const now = new Date();
  return [
    {
      url: `${base}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/store`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/guides/become-a-pilot`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}


