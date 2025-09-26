"use client";
import { jsonLdCourse } from "@/lib/seo";

export function CourseJsonLd() {
  const jsonLd = jsonLdCourse({
    name: "Instrument Proficiency",
    description: "Sharpen your IFR proficiency with scenario-driven training.",
    url: "/courses",
  });
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}




