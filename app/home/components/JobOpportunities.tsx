"use client";

import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

type Opportunity = {
  title: string;
  companies: Array<{
    name: string;
    logo?: string;
  }>;
};

const opportunities: Opportunity[] = [
  {
    title: "First Officer",
    companies: [
      { name: "Air India", logo: "/media/airindia.webp" },
      { name: "IndiGo", logo: "/media/indigo.webp" },
      { name: "Akasa Air", logo: "/media/akasaair.webp" },
    ],
  },
  {
    title: "Captain",
    companies: [
      { name: "FedEx Express", logo: "/media/feddex.webp" },
      { name: "Qatar Airways", logo: "/media/qatar.webp" },
      { name: "Emirates", logo: "/media/emirates.webp" },
    ],
  },
  {
    title: "Cargo Pilot",
    companies: [
      { name: "Blue Dart", logo: "/media/bluedart.webp" },
      { name: "DHL", logo: "/media/dhl.webp" },
      { name: "Singapore Airlines", logo: "/media/singapore.webp" },
    ],
  },
  {
    title: "Jet Charters",
    companies: [
      { name: "JetSetGo", logo: "/media/jet.webp" },
      { name: "TAAL", logo: "/media/taal.webp" },
      { name: "Air Taxi", logo: "/media/airtexi.webp" },
    ],
  },
  {
    title: "Flight Instructor",
    companies: [
      { name: "Redbird Flight Training", logo: "/media/redbird.webp" },
      { name: "BlueRay Aviation", logo: "/media/bluerayavation.webp" },
    ],
  },
];

export function JobOpportunities() {
  return (
    <section className="full-bleed relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-white" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-1 opacity-[0.08]">
          <svg viewBox="0 0 1200 10" className="w-full h-full text-sky-300">
            <path d="M0 5 Q300 2 600 5 T1200 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="6 8" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-0 w-full h-1 opacity-[0.06]">
          <svg viewBox="0 0 1200 10" className="w-full h-full text-blue-200">
            <path d="M0 5 Q400 7 800 5 T1200 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="5 7" />
          </svg>
        </div>
        <div className="absolute -top-20 -left-16 w-40 h-40 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute top-16 right-10 w-16 h-16 opacity-12">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
            <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container-wide relative z-10 text-slate-900">
        <ScrollAnimation animationType="fadeInUp" delay={150}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-200/60 bg-white/90 px-8 py-3 mb-6 shadow-[0_18px_38px_-22px_rgba(15,23,42,0.25)] backdrop-blur">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 animate-pulse" />
              <span className="text-amber-700 text-sm font-semibold uppercase tracking-[0.3em]">
                Job Opportunities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Pathways our graduates transition into
            </h2>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
              Airline flight decks, charter ops, training centres, and simulator programmes where SkyPrep cadets
              continue their professional journey.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={250}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">  
            {opportunities.map((opportunity, idx) => {
              const stripeCount = ["Cargo Pilot", "Jet Charters", "Captain"].includes(opportunity.title) ? 4 : 3;
              return (
              <article
                key={opportunity.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white px-5 py-5 shadow-[0_18px_38px_-26px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500 text-white shadow-lg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-90"
                      >
                        <path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-500/70">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.05em] text-slate-900">
                        {opportunity.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-500/70">
                    {Array.from({ length: stripeCount }).map((_, bar) => (
                      <span
                        key={`${opportunity.title}-bar-${bar}`}
                        className="inline-block h-4 w-1.5 rounded-full bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  {opportunity.companies.map((company) => {
                    const key = `${opportunity.title}-${company.name}`;
                    return (
                      <div
                        key={key}
                        className="flex min-w-[120px] flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-3 py-4 text-center text-[11px] sm:text-xs text-slate-600"
                      >
                        {company.logo ? (
                          <span className="relative inline-flex h-[68px] w-32 items-center justify-center overflow-hidden">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              sizes="150px"
                              className="object-contain transition duration-300 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                          </span>
                        ) : (
                          <span className="inline-flex h-14 w-28 items-center justify-center text-[11px] font-semibold text-slate-500 uppercase tracking-[0.25em]">
                            {company.name}
                          </span>
                        )}
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                          {company.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

