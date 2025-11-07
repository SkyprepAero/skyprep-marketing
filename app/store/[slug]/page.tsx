import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildPageMetadata, jsonLdProduct } from "@/lib/seo";
import { storeItems } from "@/content/store";

type Props = { params: Promise<{ slug: string }> };

const products = storeItems.reduce<Record<string, (typeof storeItems)[number]>>((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {});

async function getProduct(slug: string) {
  return products[slug];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return buildPageMetadata({ title: "Product" });
  return buildPageMetadata({
    title: product.name,
    description: product.description,
    canonicalPath: `/store/${slug}`,
    keywords: product.keywords,
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
    url: `/store/${slug}`,
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


