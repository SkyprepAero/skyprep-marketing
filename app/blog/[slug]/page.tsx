import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildPageMetadata, jsonLdArticle, buildUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Placeholder content fetch (SSG with fallback or SSR can be added later)
async function getPost(slug: string) {
  const posts: Record<string, { title: string; description: string; body: string }> = {
    "preflight-checklists": {
      title: "Preflight Checklists that Work",
      description: "Practical preflight steps to improve safety and reduce workload.",
      body: "This is a placeholder article body.",
    },
    "ifr-essentials": {
      title: "IFR Essentials for Busy Pilots",
      description: "Core IFR concepts and habits to stay proficient.",
      body: "This is a placeholder article body.",
    },
  };
  return posts[slug];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return buildPageMetadata({ title: "Article" });
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    canonicalPath: `/blog/${slug}`,
    openGraph: { type: "article" },
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const jsonLd = jsonLdArticle({
    headline: post.title,
    description: post.description,
    url: buildUrl(`/blog/${slug}`),
  });

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-slate-600">{post.description}</p>
      <div className="mt-6">{post.body}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}


