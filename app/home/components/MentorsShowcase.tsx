"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { ScrollAnimation } from "./ScrollAnimation";
import { FaPlane } from "react-icons/fa";

type Mentor = {
  name: string;
  title: string;
  headline: string;
  summary: string[];
  mobileSummary?: string[];
  highlights: string[];
  imagePlaceholderLabel?: string;
  imageAlt?: string;
};

const mentors: Mentor[] = [
  {
    name: "Soniya Singh",
    title: "Senior First Officer, Boeing 737 Fleet, another tag",
    headline:
      "Professional excellence forged across 3,000+ flight hours and eight years of airline operations.",
    summary: [
      "Senior First Officer Soniya Singh embodies professional excellence, boasting over eight years of distinguished aviation experience and an impressive record of more than 3,000 flight hours on the Boeing 737 fleet. Having navigated an array of global routes and meteorological complexities, she exemplifies composure, analytical precision, and unwavering command in every operational environment.",
      "A consummate aviator and visionary mentor, SFO Singh transcends conventional instruction by cultivating a culture of intellectual curiosity and operational discipline among aspiring pilots. Through SkyPrep AERO, she has pioneered a meticulously structured and industry-synchronized training ecosystem—one that dispels prevalent myths, clarifies misconceptions, and illuminates the authentic realities of the aviation journey.",
      "Her mentorship transforms theoretical proficiency into experiential mastery, empowering future aviators with the cognitive agility, situational awareness, and professional ethos required to thrive in dynamic cockpit environments. Under her stewardship, students not only acquire technical competence but also internalize the mindset of a true airline professional—learning to think strategically, perform decisively, and soar confidently toward enduring success in the skies.",
    ],
    mobileSummary: [
      "Airline first officer offering periodic check-ins for scenario reviews, regulatory updates, and airmanship mindset.",
    ],
    highlights: [
      "3,000+ Boeing 737 flight hours",
      "Line operations insight sessions",
      "Scenario-driven mentorship calls",
      "Professional mindset coaching",
    ],
    imageAlt: "Portrait placeholder for Senior First Officer Soniya Singh",
  },
];

const byPrefixAndName = {
  fas: {
    plane: FaPlane,
  },
} as const;

type IconComponent = ComponentType<{ className?: string }>;

function FontAwesomeIcon({ icon: Icon, className }: { icon: IconComponent; className?: string }) {
  return <Icon className={className} />;
}

const AUTO_SCROLL_INTERVAL = 9000;

export function MentorsShowcase() {
  const totalMentors = mentors.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isCarousel = totalMentors > 1;

  const goToIndex = useCallback(
    (index: number) => {
      if (!totalMentors) return;
      const container = sliderRef.current;
      if (!container) return;

      const clampedIndex = ((index % totalMentors) + totalMentors) % totalMentors;
      const slideWidth = container.clientWidth;
      container.scrollTo({ left: clampedIndex * slideWidth, behavior: "smooth" });
      activeIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);
    },
    [totalMentors]
  );

  const handlePrev = useCallback(() => {
    goToIndex(activeIndexRef.current - 1);
  }, [goToIndex]);

  const handleNext = useCallback(() => {
    goToIndex(activeIndexRef.current + 1);
  }, [goToIndex]);

  useEffect(() => {
    if (totalMentors <= 1) return;
    const intervalId = window.setInterval(() => {
      goToIndex(activeIndexRef.current + 1);
    }, AUTO_SCROLL_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [goToIndex, totalMentors]);

  useEffect(() => {
    const handleResize = () => {
      goToIndex(activeIndexRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [goToIndex]);

  useEffect(() => {
    goToIndex(0);
  }, [goToIndex]);

  return (
    <section className="full-bleed relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.6) 0, transparent 45%),
                         radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.4) 0, transparent 55%),
                         radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.35) 0, transparent 50%)`
      }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="container-wide relative z-10 text-white">
        <ScrollAnimation animationType="fadeInUp" delay={200}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/40 bg-sky-500/10 px-8 py-3 mb-6 shadow-[0_20px_45px_-20px_rgba(14,165,233,0.6)] backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold uppercase tracking-[0.3em]">Airline Pilot Mentors</span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Learn From Airline Leaders & Senior First Officers
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
              Boeing 737 pilot mentorship and aviation leadership training—scenario reviews, professional mindset coaching, and check-ins shaped by real airline operations in India.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative mt-10 -mx-4 sm:-mx-6 lg:-mx-12">
          <ScrollAnimation animationType="fadeInUp" delay={300}>
            <div className="px-4 sm:px-6 lg:px-12">
              <div className={`relative w-full ${isCarousel ? "group" : ""}`}>
                {isCarousel && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="hidden md:inline-flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-4 h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 text-sky-300 hover:text-sky-100 z-20 shadow-[0_20px_40px_-20px_rgba(59,130,246,0.6)]"
                      aria-label="View previous mentor"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 text-sky-300 hover:text-sky-100 z-20 shadow-[0_20px_40px_-20px_rgba(56,189,248,0.6)]"
                      aria-label="View next mentor"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div
                  className={`overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-[0_40px_80px_-40px_rgba(14,165,233,0.45)] ${
                    isCarousel ? "" : "mx-auto"
                  }`}
                >
                  <div
                    ref={sliderRef}
                    className="flex snap-x snap-mandatory overflow-hidden"
                    style={{ scrollBehavior: "smooth" }}
                    aria-live="polite"
                  >
                  {mentors.map((mentor) => {
                    const primaryHighlight = mentor.highlights[0];
                    const [highlightLead, ...highlightRestParts] = primaryHighlight
                      ? primaryHighlight.split(" ")
                      : [];
                    const highlightRest = highlightRestParts.join(" ");
                    const [roleLabel, fleetLabel] = mentor.title.includes(",")
                      ? mentor.title.split(",").map((part) => part.trim())
                      : [mentor.title, ""];

                    return (
                      <article
                        key={mentor.name}
                        className="group min-w-full snap-center relative overflow-hidden"
                      >
                        <div className="grid lg:grid-cols-[1.65fr_1fr] items-stretch">
                          <div className="flex flex-col justify-center gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 transition-transform duration-500 group-hover:-translate-y-1">
                            <div className="flex flex-col gap-3">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-sky-200 transition-colors duration-300 group-hover:border-sky-400/60 group-hover:text-sky-100">
                                  {roleLabel}
                                </span>
                                {fleetLabel && (
                                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.25em] text-sky-200/90">
                                    <FontAwesomeIcon icon={byPrefixAndName.fas["plane"]} className="opacity-80" />
                                    {fleetLabel}
                                  </span>
                                )}
                              </div>
                              <div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-sky-100">
                                  {mentor.name}
                                </h3>
                                <p className="mt-2 text-base md:text-lg text-sky-200 leading-relaxed transition-colors duration-300 group-hover:text-sky-100/90">
                                  {mentor.headline}
                                </p>
                              </div>
                            </div>

                            {mentor.mobileSummary && mentor.mobileSummary.length > 0 && (
                              <div className="mt-1 space-y-2 text-sm text-slate-200 leading-relaxed sm:hidden">
                                {mentor.mobileSummary.map((snippet, snippetIndex) => (
                                  <p key={`${mentor.name}-mobile-${snippetIndex}`}>{snippet}</p>
                                ))}
                              </div>
                            )}

                            <div className="hidden sm:block space-y-4 text-sm md:text-base text-slate-200 leading-relaxed">
                              {mentor.summary.map((paragraph, paragraphIndex) => (
                                <p key={`${mentor.name}-summary-${paragraphIndex}`}>{paragraph}</p>
                              ))}
                            </div>

                            <div className="hidden sm:flex flex-wrap gap-3">
                              {mentor.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-sky-100 transition-all duration-300 hover:bg-white/20 hover:text-white"
                                >
                                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="relative h-full min-h-[260px] md:min-h-[280px] overflow-hidden">
                            <div className="absolute -inset-8 bg-sky-500/30 blur-3xl opacity-80 animate-pulse" />
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/40 via-blue-500/35 to-slate-900/80 mix-blend-screen transition-opacity duration-500 group-hover:opacity-90" />
                              <Image
                                src="/media/images/soniya.png"
                                alt={mentor.imageAlt ?? `${mentor.name} - ${mentor.title} and SkyPrep Aero aviation mentor`}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                            </div>

                            {primaryHighlight && (
                              <div className="hidden sm:flex absolute top-4 right-4 flex-col items-end text-right gap-1 text-sky-100 drop-shadow-[0_10px_25px_rgba(14,165,233,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
                                <span className="text-[11px] uppercase tracking-[0.45em] text-white/70">Key Stat</span>
                                <span className="text-2xl font-semibold text-white">{highlightLead}</span>
                                <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
                                  {highlightRest || "Logged"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {isCarousel && (
                          <div className="absolute bottom-6 left-8 flex gap-2">
                            {mentors.map((_, dotIndex) => (
                              <span
                                key={`${mentor.name}-dot-${dotIndex}`}
                                className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                                  dotIndex === activeIndex ? "bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.5)]" : "bg-white/20"
                                }`}
                                aria-hidden
                              />
                            ))}
                          </div>
                        )}
                      </article>
                        );
                      })}
                  </div>
                </div>

                {isCarousel && (
                  <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sky-300 backdrop-blur hover:bg-white/20 transition-all duration-300"
                      aria-label="View previous mentor"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sky-300 backdrop-blur hover:bg-white/20 transition-all duration-300"
                      aria-label="View next mentor"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

