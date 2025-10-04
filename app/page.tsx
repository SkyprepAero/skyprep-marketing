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
          title="Shaping Aviators With Precision"
          description=""
          buttonText="Start Your Aviation Journey"
          buttonHref="/enquiry"
        />

              <MissionVision />
              <FlightPlan />
              <DGCARequirements />
              <WhyChooseSkyPrep />

      {/* Testimonials (full-bleed, auto-scrolling) */}
      <section className="full-bleed py-16 md:py-24 bg-gradient-to-br from-amber-50 via-slate-50 to-blue-50 relative overflow-hidden">
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
Success Stories
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Real outcomes from real aviators.
            </p>
          </div>
          <TestimonialsMarquee />
        </div>
      </section>
    </>
  );
}
