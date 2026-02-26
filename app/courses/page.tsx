import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata, jsonLdBreadcrumb } from "@/lib/seo";
import { CourseJsonLd } from "./schema";
import { AviationBackground } from "@/components/AviationBackground";
import Link from "next/link";
import { services, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviation Training Courses - SkyPrep Aero",
  description: "Explore our comprehensive aviation training programs including DGCA On Demand Sessions, cohort programs, and individual subject training.",
  canonicalPath: "/courses",
  keywords: ["aviation courses", "pilot coaching", "flight training", "DGCA On Demand Sessions", "aviation cohorts", "individual subject training"],
});

export default function CoursesPage() {
  const breadcrumbData = jsonLdBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Aviation Training Courses", url: "/courses" },
  ]);

  const courseDetails = {
    "1-to-1-coaching": {
      title: "DGCA On Demand Sessions",
      description: "Flexible 1:1 DGCA coaching—book sessions anytime. Personal mentorship for Air Regulation, Meteorology, Navigation, and Technical General with expert aviation instructors.",
      features: ["Individual Live Sessions", "Choose Your Time", "Additional Learning Material", "Doubt-Clearing Sessions"],
      subjects: ["Air Regulation", "Air Meteorology", "Air Navigation", "Technical General"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    "cohorts": {
      title: "Aviation Cohorts",
      description: "Join our comprehensive 5-month cohort program covering essential aviation subjects for DGCA exam preparation.",
      features: ["Interactive Online Classes", "Revision Sessions", "Doubt-Clearing Sessions", "Study Materials & Notes"],
      subjects: ["Air Regulation", "Air Meteorology", "Air Navigation", "Technical General"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    "subject-wise": {
      title: "Individual Subject Training",
      description: "Master individual aviation subjects with focused, specialized training courses designed for targeted learning.",
      features: ["Focused Learning", "Flexible Duration", "Specialized Content", "Quick Progress"],
      subjects: ["Air Regulation", "Air Meteorology", "Air Navigation", "Technical General"],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="full-bleed relative bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-36 left-0 h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-[150px]" />
          <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/18 blur-[170px]" />
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 22%, rgba(56,189,248,0.32) 0%, transparent 55%), radial-gradient(circle at 82% 78%, rgba(16,185,129,0.24) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] mb-6 justify-center">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Course Catalog
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Aviation Training
              <span className="block gradient-text-primary leading-tight">
                Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/85 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Explore our comprehensive range of aviation training programs designed to help you achieve your piloting goals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-16 left-12 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] mb-6">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Available Programs
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">Courses Tailored to Your Mission</h2>
            <p className="text-xl text-slate-200/80 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Choose the training program that best fits your learning style and career goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.filter(service => 
              service.id === "1-to-1-coaching" || 
              service.id === "cohorts" || 
              service.id === "subject-wise"
            ).map((service) => {
              const details = courseDetails[service.id as keyof typeof courseDetails];
              return (
                <div
                  key={service.id}
                  className="group bg-white/[0.08] rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] animate-scale-in"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {details.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{details.title}</h3>
                  <p className="text-slate-200/80 mb-6 text-center">{details.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-slate-200/80">
                          <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {details.subjects.map((subject, index) => (
                        <span key={index} className="bg-white/10 border border-white/15 text-slate-100 px-3 py-1 rounded-full text-sm font-medium tracking-wide">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                     <Link
                       href={service.href}
                       className="block w-full px-6 py-3 rounded-xl font-semibold border border-white/15 text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:shadow-[0_25px_60px_-35px_rgba(245,158,11,0.7)] transition-all duration-300 hover:scale-[1.02]"
                     >
                       {service.id === "1-to-1-coaching" ? "DGCA On Demand Sessions" : "Learn More & Enroll"}
                     </Link>
                    <a
                      href={getWhatsAppUrl(service.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {getWhatsAppButtonText(service.id)}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden full-bleed">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute bottom-0 right-24 h-96 w-96 rounded-full bg-emerald-400/18 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
            <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ready to launch
            </div>
            <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in-up">
              Ready to Start Your Aviation Journey?
            </h2>
            <p className="text-xl md:text-2xl text-slate-200/80 mb-12 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
              Choose the program that best fits your learning style and career goals. Our expert instructors are ready to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 rounded-full font-semibold text-slate-900 shadow-[0_20px_45px_-25px_rgba(245,158,11,0.75)] hover:shadow-[0_28px_60px_-30px_rgba(245,158,11,0.85)] transition-all duration-300 text-lg hover:scale-[1.02] animate-fade-in-up animate-delay-300"
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#0f172a",
                }}
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="px-12 py-5 rounded-full font-semibold border border-white/20 text-slate-100 hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-[1.02] animate-fade-in-up animate-delay-400"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CourseJsonLd />
    </div>
    </>
  );
}


