import { GroundTabs } from "@/components/GroundTabs";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { VideoHero } from "@/components/VideoHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkyPrep - Lorem Ipsum Dolor | Aviation Training Excellence",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Expert aviation training with proven results.",
  keywords: ["aviation training", "pilot training", "flight school", "aviation education", "pilot certification"],
  openGraph: {
    title: "SkyPrep - Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert aviation training with proven results.",
    type: "website",
    url: "https://skyprep.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SkyPrep Aviation Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyPrep - Lorem Ipsum Dolor",
    description: "Expert aviation training with proven results.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SkyPrep",
    "description": "Expert aviation training with proven results. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "url": "https://skyprep.com",
    "logo": "https://skyprep.com/logo.png",
    "sameAs": [
      "https://twitter.com/skyprep",
      "https://facebook.com/skyprep",
      "https://linkedin.com/company/skyprep"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aviation Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Pilot Training",
          "description": "Complete pilot training program"
        },
        {
          "@type": "Course", 
          "name": "Ground School",
          "description": "Aviation ground school training"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VideoHero 
        title="Lorem Ipsum Dolor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Get Started"
        buttonHref="/enquiry"
      />

      {/* Flight plan - full-bleed WOW band */}
      <section
        className="full-bleed relative overflow-hidden py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #EAF7FA 0%, #ECF8FC 45%, #F1F7FF 85%, #FFFFFF 100%)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Soft brand blobs */}
        <div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full opacity-35"
          style={{
            background: "radial-gradient(closest-side, #C6EAEE, transparent)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full opacity-35"
          style={{
            background: "radial-gradient(closest-side, #BAE1FF, transparent)",
            filter: "blur(40px)",
          }}
        />

        <div className="container-wide relative">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1.4fr] items-start">
            {/* Left: Headline & bullets */}
            <div>
              <h2
                className="text-4xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent animate-fade-in-up"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--brand-200), var(--brand-300))",
                }}
              >
                How to become a pilot
              </h2>
              <p className="mt-6 text-slate-700 max-w-2xl text-lg md:text-xl animate-fade-in-up animate-delay-200">
                A clear, end‑to‑end path from discovery call to your checkride. Know exactly what to
                do, when, and why — without the chaos.
              </p>
              <p className="mt-3 text-slate-600 max-w-2xl animate-fade-in-up animate-delay-300">
                Each week we translate the plan into simple actions: what to study, which drills to
                run, and how to prep for the next sortie—so progress stays obvious and momentum
                stays high.
              </p>

              {/* Stat pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Discovery call", "Medical & documents", "Ground + Flight path"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-4 py-2 text-sm md:text-base"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, var(--brand-200), var(--brand-300))",
                      }}
                    />
                    {pill}
                  </span>
                ))}
              </div>

              {/* Quick subject links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Requirements", href: "/guides/become-a-pilot" },
                  { label: "Medical", href: "/guides/become-a-pilot" },
                  { label: "Training path", href: "/guides/become-a-pilot" },
                  { label: "Costs", href: "/guides/become-a-pilot" },
                  { label: "Timeline", href: "/guides/become-a-pilot" },
                  { label: "Checkride", href: "/guides/become-a-pilot" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center rounded-md border border-[--color-border] bg-[--color-background] px-4 py-1.5 text-sm md:text-base hover:bg-[--color-muted]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="/guides/become-a-pilot"
                  className="inline-flex px-6 py-3 rounded-md font-medium hover:bg-[--color-muted] border border-[--color-border] text-base"
                >
                  Read more
          </a>
          <a
                  href="/enquiry"
                  className="inline-flex px-6 py-3 rounded-md font-medium shadow-sm hover:opacity-95 text-base"
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    color: "#0f172a",
                  }}
                >
                  Talk to a coach
                </a>
              </div>
            </div>

            {/* Right: Interactive subject tabs */}
            <div>
              <GroundTabs />
            </div>
          </div>
          {/* Simplified: keeping core content only */}
        </div>
      </section>
      {/* Why Us (full-bleed, solid background) */}
      <section
        className="full-bleed relative overflow-hidden py-16 md:py-20"
        style={{ backgroundColor: "#F7FBFD" }}
      >
        <div className="container-wide relative">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why choose SkyPrep</h2>
          <p className="mt-3 text-slate-600 max-w-4xl">
            Proven coaching that turns complexity into clarity—finish faster, fly safer, and stay
            confident from your first lesson to your checkride.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                t: "Expert instructors",
                d: "Airline and test‑pilot backgrounds with a knack for simplifying.",
                pts: ["One‑on‑one coaching", "Actionable debriefs", "Habits that stick"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
                  </svg>
                ),
              },
              {
                t: "Exam‑ready syllabus",
                d: "Subject‑led study with memory aids and targeted drill packs.",
                pts: [
                  "Air Law to HPL",
                  "Spaced repetition",
                  "Exam‑style drills",
                  "Test series & extra notes",
                ],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M5 4h14v16H5V4zm3 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
                  </svg>
                ),
              },
              {
                t: "Scenario training",
                d: "Briefs, flows, and debriefs that build real‑world decision making.",
                pts: ["Flows & checklists", "Abnormals practice", "R/T scripts"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 7l-9 5 9 5 9-5-9-5zm0 12l-9-5v4l9 5 9-5v-4l-9 5z" />
                  </svg>
                ),
              },
              {
                t: "Clear plan & costs",
                d: "Transparent timelines with weekly actions and milestones.",
                pts: ["Budget templates", "Weekly cadence", "Milestone tracking"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z" />
                  </svg>
                ),
              },
            ].map((i) => (
              <div
                key={i.t}
                className="group rounded-2xl border border-[--color-border] bg-[--color-background] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:shadow-md hover:-translate-y-0.5 min-h-[260px] flex"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-900"
                      style={{ backgroundColor: "#ADE1EF" }}
                    >
                      {i.icon}
                    </span>
                    <h3 className="font-medium">{i.t}</h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-slate-600">{i.d}</p>
                  <ul className="mt-3 grid gap-1.5 text-sm text-slate-600">
                    {i.pts.map((p: string) => (
                      <li key={p} className="flex items-start gap-2">
                        <span
                          className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "#ADE1EF" }}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Testimonials (full-bleed, auto-scrolling) */}
      <section className="full-bleed py-14 md:py-20">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What pilots say</h2>
          <p className="mt-3 text-slate-600 max-w-4xl">
            Real outcomes from real aviators—built on clear briefs, focused drills, and feedback that
            sticks.
          </p>
          <TestimonialsMarquee />
    </div>
      </section>
    </>
  );
}
