import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildUrl, generateMetadata as buildPageMetadata, jsonLdProduct } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

async function getProduct(slug: string) {
  const items: Record<string, { name: string; description: string; price?: number; currency?: string }> = {
    "ifr-briefing-cards": {
      name: "IFR Briefing Cards",
      description: "Durable, cockpit-ready IFR briefing cards for quick reference.",
      price: 19.99,
      currency: "USD",
    },
    "weight-balance-sheet": {
      name: "Weight & Balance Sheet",
      description: "Reusable W&B sheet for quick calculations and cross-checks.",
      price: 9.99,
      currency: "USD",
    },
  };
  return items[slug];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return buildPageMetadata({ title: "Product" });
  return buildPageMetadata({
    title: product.name,
    description: product.description,
    canonicalPath: `/store/${slug}`,
    openGraph: { type: "website" },
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  const jsonLd = jsonLdProduct({
    name: product.name,
    description: product.description,
    url: buildUrl(`/store/${slug}`),
    price: product.price,
    currency: product.currency,
  });

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p className="text-slate-600">{product.description}</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}


