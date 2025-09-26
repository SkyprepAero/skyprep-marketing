import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { CourseJsonLd } from "./schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Courses",
  description: "Aviation coaching courses to advance your pilot training.",
  canonicalPath: "/courses",
  keywords: ["aviation courses", "pilot coaching", "flight training"],
});

export default function CoursesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Courses</h1>
      <p className="text-slate-600">
        Explore our curated selection of aviation training programs.
      </p>
      <CourseJsonLd />
    </section>
  );
}


