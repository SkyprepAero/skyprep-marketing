import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skyprepaero.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/terms"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}


