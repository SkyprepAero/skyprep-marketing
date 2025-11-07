import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildPageMetadata, jsonLdArticle } from "@/lib/seo";
import { blogPosts } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

const articles = blogPosts.reduce<Record<string, (typeof blogPosts)[number]>>((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) return buildPageMetadata({ title: "Article" });
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    canonicalPath: `/blog/${slug}`,
    keywords: post.keywords,
    openGraph: { type: "article" },
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) return notFound();

  const jsonLd = jsonLdArticle({
    headline: post.title,
    description: post.description,
    url: `/blog/${slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-slate-600">{post.description}</p>
      <div className="mt-6">This blog content will be loaded from the database.</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}


