import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { VideoHero } from "@/components/VideoHero";
import { DGCARequirements, WhyChooseSkyPrep, FlightPlan, MissionVision } from "@/app/home/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkyPrep - Professional Pilot Training | Expert Flight School",
  description: "Master your aviation journey with SkyPrep's expert pilot training programs. Professional flight school offering comprehensive pilot courses, ground training, and career guidance for aspiring pilots.",
  keywords: ["aviation training", "pilot training", "flight school", "aviation education", "pilot certification"],
  openGraph: {
    title: "SkyPrep - Professional Pilot Training | Expert Flight School",
    description: "Master your aviation journey with SkyPrep's expert pilot training programs. Professional flight school offering comprehensive pilot courses.",
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
    title: "SkyPrep - Professional Pilot Training | Expert Flight School",
    description: "Master your aviation journey with expert pilot training programs and professional certification.",
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
    "description": "Professional pilot training excellence with comprehensive aviation programs. Expert flight school offering professional guidance from ground school to checkride.",
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
          title="Professional Pilot Training Excellence"
          description="Master your aviation journey with SkyPrep's comprehensive pilot training programs. From ground school to checkride, we provide expert guidance, professional certification support, and proven pathways to your aviation career."
          buttonText="Start Your Aviation Journey"
          buttonHref="/enquiry"
        />

              <FlightPlan />
              <MissionVision />
              <DGCARequirements />
              <WhyChooseSkyPrep />

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
