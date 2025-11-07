import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = generateMetadata({
  title: "Blog",
  description: "Articles and insights for pilots and aviation enthusiasts.",
  canonicalPath: "/blog",
  keywords: ["aviation blog", "pilot tips", "flight safety"],
});

export default function BlogIndexPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="grid gap-4">
        {blogPosts.map((post) => (
          <li key={post.slug} className="border border-[--color-border] rounded-md p-4">
            <Link href={`/blog/${post.slug}`} className="font-medium hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}




