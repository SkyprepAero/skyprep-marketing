import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Store",
  description: "Tools and products to support your aviation training.",
  canonicalPath: "/store",
  keywords: ["aviation products", "pilot tools", "flight store"],
});

export default function StorePage() {
  const items = [
    { slug: "ifr-briefing-cards", title: "IFR Briefing Cards" },
    { slug: "weight-balance-sheet", title: "Weight & Balance Sheet" },
  ];
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Store</h1>
      <ul className="grid gap-4">
        {items.map((p) => (
          <li key={p.slug} className="border border-[--color-border] rounded-md p-4">
            <Link href={`/store/${p.slug}`} className="font-medium hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}




