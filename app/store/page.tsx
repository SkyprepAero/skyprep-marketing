import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { storeItems } from "@/content/store";

export const metadata: Metadata = generateMetadata({
  title: "Store",
  description: "Tools and products to support your aviation training.",
  canonicalPath: "/store",
  keywords: ["aviation products", "pilot tools", "flight store"],
});

export default function StorePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Store</h1>
      <ul className="grid gap-4">
        {storeItems.map((item) => (
          <li key={item.slug} className="border border-[--color-border] rounded-md p-4">
            <Link href={`/store/${item.slug}`} className="font-medium hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}




