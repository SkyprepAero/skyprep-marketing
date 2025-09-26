import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description: "Learn about SkyPrep's mission and team.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <p className="text-slate-600 max-w-2xl">
        SkyPrep helps aviators train smarter and fly safer through expert coaching, practical
        courses, and thoughtfully designed tools.
      </p>
    </section>
  );
}




