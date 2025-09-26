import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Blog",
  description: "Articles and insights for pilots and aviation enthusiasts.",
  canonicalPath: "/blog",
  keywords: ["aviation blog", "pilot tips", "flight safety"],
});

export default function BlogIndexPage() {
  // Placeholder list
  const posts = [
    { slug: "preflight-checklists", title: "Preflight Checklists that Work" },
    { slug: "ifr-essentials", title: "IFR Essentials for Busy Pilots" },
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="grid gap-4">
        {posts.map((p) => (
          <li key={p.slug} className="border border-[--color-border] rounded-md p-4">
            <Link href={`/blog/${p.slug}`} className="font-medium hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}




