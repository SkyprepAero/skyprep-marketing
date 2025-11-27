import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getPageKeywords } from "@/content/pageKeywords";

type BaseSEOInput = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Partial<NonNullable<Metadata["twitter"]>>;
};

export function buildUrl(pathname?: string) {
  if (!pathname) {
    const base = siteConfig.url?.replace(/\/$/, "") || "";
    return base || "/";
  }

  if (/^https?:\/\//i.test(pathname)) {
    return pathname;
  }

  const base = siteConfig.url?.replace(/\/$/, "") || "";
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function generateMetadata(input: BaseSEOInput = {}): Metadata {
  const title = input.title ? `${input.title} | ${siteConfig.name}` : siteConfig.name;
  const description = input.description || siteConfig.description;
  const canonicalPath = input.canonicalPath || "/";
  const canonical = buildUrl(canonicalPath);
  const defaultKeywords = [
    "aviation coaching",
    "pilot training",
    "flight courses",
    "aviation blog",
    "skyprep",
    "skyprep aero",
    "aviation ground classes",
    "aviation coaching classes",
    "dgca ground school",
  ];
  const keywords = input.keywords || getPageKeywords(canonicalPath) || defaultKeywords;

  const iconUrl = buildUrl(siteConfig.logo);
  const ogImageUrl = buildUrl(siteConfig.ogImage);
  let metadataBase: URL | undefined;
  if (siteConfig.url) {
    try {
      metadataBase = new URL(siteConfig.url);
    } catch (error) {
      console.warn("Invalid siteConfig.url supplied to generateMetadata", error);
    }
  }

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    icons: {
      icon: iconUrl,
      shortcut: iconUrl,
      apple: iconUrl,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: ogImageUrl }],
      type: "website",
      ...input.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      ...input.twitter,
    },
    metadataBase,
  } satisfies Metadata;
}

// JSON-LD helpers
export function jsonLdCourse(course: {
  name: string;
  description: string;
  url: string;
  provider?: { name: string; url?: string };
}) {
  const providerUrl = course.provider?.url ? buildUrl(course.provider.url) : siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: buildUrl(course.url),
    provider: {
      name: course.provider?.name || siteConfig.name,
      url: providerUrl,
    },
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
    url: buildUrl(article.url),
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
          url: buildUrl(product.url),
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    url: buildUrl(product.url),
    image: product.image ? [buildUrl(product.image)] : undefined,
    offers,
    brand: { "@type": "Brand", name: siteConfig.name },
  };
}

export function jsonLdBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildUrl(item.url),
    })),
  };
}

export function jsonLdFAQ(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}

export function jsonLdReview(review: {
  author: string;
  datePublished?: string;
  reviewBody: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  itemReviewed?: {
    name: string;
    type?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.reviewRating.ratingValue,
      bestRating: review.reviewRating.bestRating || 5,
      worstRating: review.reviewRating.worstRating || 1,
    },
    ...(review.itemReviewed && {
      itemReviewed: {
        "@type": review.itemReviewed.type || "Service",
        name: review.itemReviewed.name,
      },
    }),
  };
}

// LocalBusiness schema generator
export function jsonLdLocalBusiness(business: {
  name?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  email?: string;
  priceRange?: string;
  openingHours?: string[];
  image?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": buildUrl(),
    name: business.name || siteConfig.name,
    description: business.description || siteConfig.description,
    url: siteConfig.url,
    logo: buildUrl(siteConfig.logo),
    image: business.image ? buildUrl(business.image) : buildUrl(siteConfig.logo),
    ...(business.address && {
      address: {
        "@type": "PostalAddress",
        ...business.address,
      },
    }),
    ...(business.telephone && { telephone: business.telephone }),
    ...(business.email && { email: business.email }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.openingHours && { openingHoursSpecification: business.openingHours.map((hours) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: hours })) }),
    ...(business.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.aggregateRating.ratingValue,
        reviewCount: business.aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    sameAs: Object.values(siteConfig.social),
  };
}
