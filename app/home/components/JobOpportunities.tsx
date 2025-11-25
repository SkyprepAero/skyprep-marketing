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
      { name: "Air India", logo: "/media/images/airindia.webp" },
      { name: "IndiGo", logo: "/media/images/indigo.webp" },
      { name: "Akasa Air", logo: "/media/images/akasaair.webp" },
    ],
  },
  {
    title: "Captain",
    companies: [
      { name: "FedEx Express", logo: "/media/images/feddex.webp" },
      { name: "Qatar Airways", logo: "/media/images/qatar.webp" },
      { name: "Emirates", logo: "/media/images/emirates.webp" },
    ],
  },
  {
    title: "Cargo Pilot",
    companies: [
      { name: "Blue Dart", logo: "/media/images/bluedart.webp" },
      { name: "DHL", logo: "/media/images/dhl.webp" },
      { name: "Singapore Airlines", logo: "/media/images/singapore.webp" },
    ],
  },
  {
    title: "Jet Charters",
    companies: [
      { name: "JetSetGo", logo: "/media/images/jet.webp" },
      { name: "TAAL", logo: "/media/images/taal.webp" },
      { name: "Air Taxi", logo: "/media/images/airtexi.webp" },
    ],
  },
  {
    title: "Flight Instructor",
    companies: [
      { name: "Redbird Flight Training", logo: "/media/images/redbird.webp" },
      { name: "BlueRay Aviation", logo: "/media/images/bluerayavation.webp" },
    ],
  },
];

export function JobOpportunities() {
  return (
    <section className="full-bleed relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-950/92 to-blue-950/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-60 w-60 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-6 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 18% 18%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(251,191,36,0.2) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.85) 0%, transparent 72%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-wide relative z-10 text-slate-100">
        <ScrollAnimation animationType="fadeInUp" delay={150}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80">
              Pilot Job Opportunities
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Job Opportunities for SkyPrep Cadets
            </h2>
            <p className="mt-3 text-base text-slate-200/80 md:text-lg">
              Pilot job roles India: airline first officer, charter pilot jobs, flight instructor pathways, and cadet pilot program placements.
              We support your aviation career development from training to cockpit.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={250}>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {opportunities.map((opportunity, idx) => {
              const stripeCount = ["Cargo Pilot", "Jet Charters", "Captain"].includes(opportunity.title) ? 4 : 3;
              return (
                <article
                  key={opportunity.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/12 bg-white/[0.07] px-5 py-5 text-slate-100 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.85)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500 text-white shadow-lg shadow-black/30">
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
                        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-300/70">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.05em] text-white">
                          {opportunity.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-300/70">
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
                          className="flex min-w-[120px] flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-3 py-4 text-center text-[11px] sm:text-xs text-slate-200/75 shadow-[0_25px_70px_-55px_rgba(56,189,248,0.5)]"
                        >
                          {company.logo ? (
                            <span className="relative inline-flex h-[68px] w-32 items-center justify-center overflow-hidden">
                              <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                sizes="150px"
                                className="object-contain transition duration-300 opacity-90 group-hover:opacity-100"
                              />
                            </span>
                          ) : (
                            <span className="inline-flex h-14 w-28 items-center justify-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                              {company.name}
                            </span>
                          )}
                          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300/70">
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

