import Link from "next/link";
import type { Metadata } from "next";
import type React from "react";

import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import {
  services,
  getWhatsAppUrl,
  getWhatsAppButtonText,
  getContactUrl,
} from "@/config/services";
import { generateMetadata } from "@/lib/seo";

const curatedServiceIds = [
  "medical",
  "computer-number",
  "elogbook",
  "conversion-training",
] as const;

type CuratedServiceId = (typeof curatedServiceIds)[number];

const serviceDetails: Record<
  CuratedServiceId,
  {
    badge: string;
    summary: string;
    highlights: string[];
    icon: React.ReactNode;
  }
> = {
  medical: {
    badge: "Medical Clearance Support",
    summary:
      "Secure your DGCA Class 1 & 2 approvals with vetted AMEs, paperwork guidance, and priority scheduling.",
    highlights: [
      "AME coordination & paperwork prep",
      "Class 1 / Class 2 timeline planning",
      "Follow-up support until clearance",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3v4" />
        <path d="M18 3v4" />
        <path d="M3 9h18" />
        <path d="M10 13h4" />
        <path d="M12 11v4" />
        <path d="M5 7h14a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  "computer-number": {
    badge: "DGCA Documentation",
    summary:
      "Get your DGCA Computer Number without delays—application guidance, document checks, and follow-up.",
    highlights: [
      "End-to-end eGCA filing",
      "Document vetting & uploads",
      "Issue resolution with DGCA",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="8" rx="2" />
        <path d="M10 12v6" />
        <path d="M14 12v6" />
        <path d="M5 18h14" />
        <path d="M8 8h.01" />
        <path d="M12 8h.01" />
        <path d="M16 8h.01" />
      </svg>
    ),
  },
  elogbook: {
    badge: "Regulatory Compliance",
    summary:
      "Stay audit-ready with accurate eLogbook entries, reconciled totals, and DGCA submission support.",
    highlights: [
      "Entry formatting & validation",
      "Hour reconciliation & audits",
      "Submission walkthrough on eGCA",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3Z" />
        <path d="M8 2v4" />
        <path d="M12 2v4" />
        <path d="M16 2v4" />
        <path d="M8 10h6" />
        <path d="M8 14h6" />
        <path d="M8 18h3" />
      </svg>
    ),
  },
  "conversion-training": {
    badge: "International Experience",
    summary:
      "Convert foreign flight time into DGCA credentials with mentoring, paperwork, and FTO coordination.",
    highlights: [
      "Eligibility & document checks",
      "Conversion hour planning",
      "Exam & skill test preparation",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M20 16h-8l-2 4-2-4H4" />
        <path d="M9.5 12l-1.5-9h7l-1.5 9" />
      </svg>
    ),
  },
};

export const metadata: Metadata = generateMetadata({
  title: "Aviation Services",
  description:
    "Comprehensive aviation services from DGCA medicals to conversion training, crafted to support pilots at every career stage.",
  canonicalPath: "/services",
  keywords: [
    "dgca medical assistance",
    "pilot documentation",
    "elogbook support",
    "conversion training",
    "aviation services",
  ],
});

export default function ServicesOverviewPage() {
  const curatedServices = curatedServiceIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden full-bleed">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-32 left-0 h-[400px] w-[400px] rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute -bottom-36 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/18 blur-[170px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={150}>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Mission Support Desk
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Regulatory & Compliance Services for Indian Skies
              </h1>
              <p className="text-lg md:text-xl text-slate-200/80 leading-relaxed">
                SkyPrep Aero keeps your pilot credentials mission-ready—from medical clearances and eLogbook compliance
                to DGCA documentation and conversion training. Choose the service you need and we’ll handle the paperwork,
                follow-ups, and timelines.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative full-bleed py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-16 left-12 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/14 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={180}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                Specialist Support
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                Choose the service that aligns with your flight plan
              </h2>
              <p className="mt-4 text-lg text-slate-200/75 max-w-3xl mx-auto">
                Each engagement is handled by domain specialists who understand DGCA processes inside-out.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 lg:grid-cols-2">
            {curatedServices.map((service, index) => {
              const detail = serviceDetails[service.id as CuratedServiceId];
              return (
                <ScrollAnimation key={service.id} animationType="fadeInUp" delay={220 + index * 120}>
                  <article className="group rounded-4xl bg-white/[0.08] border border-white/12 p-8 shadow-[0_45px_120px_-70px_rgba(15,23,42,1)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_60px_160px_-80px_rgba(56,189,248,0.6)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 text-white shadow-lg shadow-slate-900/40">
                        {detail.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-100/75">
                          {detail.badge}
                        </div>
                        <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                      </div>
                    </div>
                    <p className="text-slate-200/80 leading-relaxed mb-6">{detail.summary || service.description}</p>
                    <ul className="grid gap-3 mb-6 text-sm text-slate-200/80">
                      {detail.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-900 shadow-[0_25px_60px_-35px_rgba(245,158,11,0.7)] transition-all duration-300 hover:scale-[1.03]"
                      >
                        Explore Service
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <a
                        href={getWhatsAppUrl(service.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-colors duration-200 hover:border-white/25 hover:text-emerald-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                        </svg>
                        {getWhatsAppButtonText(service.id)}
                      </a>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative full-bleed overflow-hidden pb-24 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute bottom-0 right-24 h-96 w-96 rounded-full bg-emerald-400/18 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="mx-auto max-w-4xl text-center text-slate-100 space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Need an operations co-pilot?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let’s plot your regulatory flight plan together.
              </h2>
              <p className="text-lg text-slate-200/80 leading-relaxed">
                Share where you are in the process—our team will map the next steps, coordinate with DGCA touchpoints,
                and keep you on schedule.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={getContactUrl("medical")}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_25px_60px_-35px_rgba(245,158,11,0.7)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Book a Consultation
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={getWhatsAppUrl("medical")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300 transition-all duration-300 hover:border-white/30 hover:text-emerald-200"
                >
                  Chat on WhatsApp
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

