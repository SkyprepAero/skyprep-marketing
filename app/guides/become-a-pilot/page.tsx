import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as buildPageMetadata, jsonLdArticle, buildUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How to become a pilot",
  description:
    "A practical, step-by-step guide to becoming a pilot—from discovery call to checkride.",
  canonicalPath: "/guides/become-a-pilot",
  keywords: ["become a pilot", "pilot training steps", "checkride prep", "aviation guide"],
});

export default function BecomeAPilotGuide() {
  const jsonLd = jsonLdArticle({
    headline: "How to become a pilot",
    description:
      "A practical, step-by-step guide to becoming a pilot—from discovery call to checkride.",
    url: buildUrl("/guides/become-a-pilot"),
  });

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>How to become a pilot</h1>
      <p>
        This guide distills the journey into simple, actionable phases so you can build skills that
        transfer to real flights.
      </p>

      <h2>1) Discovery call</h2>
      <p>Clarify goals, timelines, budget, and aircraft availability. Map your training plan.</p>

      <h2>2) Ground school</h2>
      <p>
        Start theory early. Use lesson objectives and spaced repetition to improve retention. Aim to
        sit your written with confidence.
      </p>

      <h2>3) Flight training</h2>
      <ul>
        <li>Short briefs with clear objectives for each sortie</li>
        <li>Focus on habit patterns and workable checklists</li>
        <li>Debrief with data: what improved, what to drill next</li>
      </ul>

      <h2>4) IFR foundations</h2>
      <p>Build scan, procedures, and comms early to make instrument flying less stressful.</p>

      <h2>5) Checkride prep</h2>
      <p>Mock orals, scenario practice, and targeted remediation to close gaps.</p>

      <div className="not-prose mt-8">
        <Link
          href="/enquiry"
          className="inline-flex px-5 py-2 rounded-md font-medium shadow-sm hover:opacity-95"
          style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)", color: "#0f172a" }}
        >
          Talk to a coach
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}



