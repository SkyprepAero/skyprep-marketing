import type { Metadata, ResolvingMetadata } from "next";
import { siteConfig } from "@/config/site";

type BaseSEOInput = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Partial<NonNullable<Metadata["twitter"]>>;
};

export function buildUrl(pathname?: string) {
  const base = siteConfig.url?.replace(/\/$/, "") || "";
  const path = (pathname || "/").startsWith("/") ? pathname : `/${pathname || ""}`;
  return `${base}${path}`;
}

export function generateMetadata(input: BaseSEOInput = {}): Metadata {
  const title = input.title ? `${input.title} | ${siteConfig.name}` : siteConfig.name;
  const description = input.description || siteConfig.description;
  const canonical = buildUrl(input.canonicalPath || "/");
  const keywords = input.keywords || [
    "aviation coaching",
    "pilot training",
    "flight courses",
    "aviation blog",
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    icons: {
      icon: siteConfig.logo,
      shortcut: siteConfig.logo,
      apple: siteConfig.logo,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage }],
      type: "website",
      ...input.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      ...input.twitter,
    },
    metadataBase: new URL(siteConfig.url),
  } satisfies Metadata;
}

// JSON-LD helpers
export function jsonLdCourse(course: {
  name: string;
  description: string;
  url: string;
  provider?: { name: string; url?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: course.url,
    provider: course.provider || { name: siteConfig.name, url: siteConfig.url },
  };
}

export function jsonLdArticle(article: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: article.authorName
      ? { "@type": "Person", name: article.authorName }
      : { "@type": "Organization", name: siteConfig.name },
  };
}

export function jsonLdProduct(product: {
  name: string;
  description: string;
  url: string;
  sku?: string;
  price?: number;
  currency?: string;
  image?: string;
}) {
  const offers =
    product.price && product.currency
      ? {
          "@type": "Offer",
          price: product.price.toFixed(2),
          priceCurrency: product.currency,
          availability: "https://schema.org/InStock",
          url: product.url,
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    url: product.url,
    image: product.image ? [product.image] : undefined,
    offers,
    brand: { "@type": "Brand", name: siteConfig.name },
  };
}


