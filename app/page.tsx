import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { VideoHero } from "@/components/VideoHero";
import {
  DGCARequirements,
  WhyChooseSkyPrep,
  MissionVision,
  MentorsShowcase,
  JobOpportunities,
  TrainingTracks,
} from "@/app/home/components";
import { courses } from "@/config/services";
import { siteConfig } from "@/config/site";
import { generateMetadata, buildUrl } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "DGCA Ground Classes, Pilot Training & Airline Preparation",
  description:
    "DGCA-aligned pilot coaching with personalised mentoring, cohorts, analytics, and test series. Clear DGCA exams, train with airline captains, and fast-track your aviation career.",
  keywords: [
    "DGCA ground classes",
    "DGCA exam coaching",
    "pilot training India",
    "CPL ground classes",
    "aviation coaching institute",
    "airline preparation classes",
    "DGCA test series",
    "pilot mentorship India",
    "DGCA online classes",
    "pilot coaching institute",
    "personalised DGCA coaching",
    "aviation cohorts India",
    "DGCA mock tests",
    "pilot exam preparation",
    "best DGCA coaching institute",
    "DGCA navigation meteorology regulation preparation",
    "commercial pilot license India",
    "cadet pilot program India",
  ],
  canonicalPath: "/",
});

export default function Home() {
  const socialLinks = Object.values(siteConfig.social) as string[];
  const offerCatalogItems = courses.map((course) => ({
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: buildUrl(course.href),
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description:
      "DGCA-aligned pilot coaching institute offering personalised mentoring, cohort-based ground classes, test series with analytics, and airline preparation. India's trusted aviation coaching for CPL and DGCA exam success.",
    url: siteConfig.url,
    logo: buildUrl(siteConfig.logo),
    sameAs: socialLinks,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DGCA Ground Classes & Pilot Training Programs",
      "itemListElement": offerCatalogItems,
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    "areaServed": "India",
    "knowsAbout": ["DGCA exam preparation", "CPL ground classes", "pilot training", "aviation coaching", "airline preparation"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": buildUrl(),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: buildUrl(siteConfig.logo),
    image: buildUrl(siteConfig.logo),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: siteConfig.contactEmail,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 10,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <section
        className="relative full-bleed overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/media/images/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/94 via-slate-950/70 to-slate-900/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/6 to-transparent mix-blend-soft-light" />
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="relative z-10">
          <VideoHero
            sharedBackground
            title="Shaping Aviators With Precision — DGCA-Aligned Pilot Coaching"
            description="Accelerate your aviation career with DGCA ground classes, personalised pilot mentorship from airline captains, and analytics-driven training support for CPL exam success."
            buttonText="Start Your Aviation Journey"
            buttonHref="/enquiry"
          />
          <TrainingTracks sharedBackground />
        </div>
      </section>

              <MentorsShowcase />
              <WhyChooseSkyPrep />
              <DGCARequirements />
              {/* <FlightPlan /> */}
              <JobOpportunities />
              <MissionVision />

      {/* Testimonials (full-bleed, auto-scrolling) */}
      <section className="full-bleed py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-950/92 to-blue-950/70 relative overflow-hidden">
        {/* Enhanced Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Aircraft silhouettes */}
          <div className="absolute top-12 left-8 w-52 h-36 opacity-4">
            <svg viewBox="0 0 200 100" className="w-full h-full text-amber-300">
              <path d="M20 50 L40 45 L60 50 L80 45 L100 50 L120 45 L140 50 L160 45 L180 50 L200 45 L200 55 L180 50 L160 55 L140 50 L120 55 L100 50 L80 55 L60 50 L40 55 L20 50 Z" fill="currentColor" />
              <path d="M30 50 L50 45 L70 50 L90 45 L110 50 L130 45 L150 50 L170 45 L190 50 L190 55 L170 50 L150 55 L130 50 L110 55 L90 50 L70 55 L50 50 L30 55 Z" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          
          <div className="absolute top-32 right-16 w-44 h-28 opacity-3">
            <svg viewBox="0 0 200 100" className="w-full h-full text-blue-300">
              <path d="M10 50 L30 45 L50 50 L70 45 L90 50 L110 45 L130 50 L150 45 L170 50 L190 45 L190 55 L170 50 L150 55 L130 50 L110 55 L90 50 L70 55 L50 50 L30 55 L10 50 Z" fill="currentColor" />
            </svg>
          </div>
          
          {/* Navigation instruments */}
          <div className="absolute top-20 left-1/3 w-36 h-36 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 50 L65 35 M50 50 L35 65 M50 50 L35 35 M50 50 L65 65" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 right-1/3 w-32 h-32 opacity-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 20 L60 40 L80 40 L70 60 L80 80 L60 80 L50 60 L40 80 L20 80 L30 60 L20 40 L40 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Flight path lines */}
          <div className="absolute top-1/3 left-0 w-full h-px opacity-2">
            <svg viewBox="0 0 1000 10" className="w-full h-full text-amber-200">
              <path d="M0 5 Q250 3 500 5 T1000 5" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="200" cy="5" r="2" fill="currentColor"/>
              <circle cx="400" cy="5" r="2" fill="currentColor"/>
              <circle cx="600" cy="5" r="2" fill="currentColor"/>
              <circle cx="800" cy="5" r="2" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-1/4 left-0 w-full h-px opacity-2">
            <svg viewBox="0 0 1000 10" className="w-full h-full text-blue-200">
              <path d="M0 5 Q250 7 500 5 T1000 5" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="150" cy="5" r="2" fill="currentColor"/>
              <circle cx="350" cy="5" r="2" fill="currentColor"/>
              <circle cx="550" cy="5" r="2" fill="currentColor"/>
              <circle cx="750" cy="5" r="2" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Cloud formations */}
          <div className="absolute top-6 right-1/4 w-28 h-18 opacity-3">
            <svg viewBox="0 0 100 60" className="w-full h-full text-slate-300">
              <path d="M20 40 Q10 30 20 20 Q30 10 50 20 Q70 10 80 20 Q90 30 80 40 Q70 50 50 40 Q30 50 20 40 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-12 left-1/4 w-24 h-14 opacity-4">
            <svg viewBox="0 0 100 60" className="w-full h-full text-slate-300">
              <path d="M15 35 Q5 25 15 15 Q25 5 45 15 Q65 5 75 15 Q85 25 75 35 Q65 45 45 35 Q25 45 15 35 Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Additional aviation elements */}
          <div className="absolute top-1/2 left-8 w-20 h-20 opacity-3">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
              <path d="M50 10 L60 30 L80 30 L70 50 L80 70 L60 70 L50 90 L40 70 L20 70 L30 50 L20 30 L40 30 Z" fill="currentColor" />
            </svg>
          </div>
          
          <div className="absolute bottom-1/3 right-8 w-16 h-16 opacity-4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="5" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-2">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 50%), 
                              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                              radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.05) 0%, transparent 70%)`,
            }}></div>
          </div>
        </div>
        
        <div className="container-wide relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text-primary mb-6 leading-tight">
              Success Stories From Real Aviators
            </h2>
            <p className="text-xl md:text-2xl text-slate-200/80 max-w-4xl mx-auto leading-relaxed">
              DGCA exam success stories and pilot placement achievements from our students.
            </p>
          </div>
          <TestimonialsMarquee />
        </div>
      </section>
    </>
  );
}
