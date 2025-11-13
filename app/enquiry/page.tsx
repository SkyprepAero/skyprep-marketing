import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import { AviationBackground } from "@/components/AviationBackground";
import { whatsappNumber } from "@/config/services";

const heroPillars = [
  {
    title: "Orientation call",
    subtitle: "We meet you where you are",
    description: "A 20-minute briefing to understand your licenses, exams cleared, and the mission you’re on.",
  },
  {
    title: "Actionable flight plan",
    subtitle: "Roadmap in 24 hours",
    description: "Expect a tailored path with recommended modules, prep windows, and simulator hours mapped to DGCA checks.",
  },
  {
    title: "Continuous support",
    subtitle: "Cadet success desk",
    description: "Weekly mentor check-ins and WhatsApp updates keep you aligned, accountable, and cockpit-ready.",
  },
];

const responseHighlights = [
  {
    title: "Response within 4 hours",
    description: "Cadet enquiries land directly with our training leads for a fast, detailed follow-up.",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    title: "DGCA-aligned guidance",
    description: "We translate your goals into a step-by-step plan mapped to DGCA milestones and airline expectations.",
    gradient: "from-emerald-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Confidential & no obligation",
    description: "We treat every conversation as advisory. Share where you’re at—no hard sell, only clarity.",
    gradient: "from-amber-400 via-amber-500 to-orange-500",
  },
];

const focusAreas = [
  {
    title: "Cadet & Aspiring Pilot Intake",
    points: ["CPL / IR roadmapping", "DGCA exam prep strategies", "Bridge programs for fresher cadets"],
    iconClass: "text-sky-400",
  },
  {
    title: "Type Rating & Airline Readiness",
    points: ["Mock airline interviews", "Simulator acclimatization", "Logbook & documentation checks"],
    iconClass: "text-amber-400",
  },
  {
    title: "Career Switch & Upskilling",
    points: ["Hour-building routes", "Medical renewal support", "International conversion guidance"],
    iconClass: "text-emerald-400",
  },
];

const processSteps = [
  {
    label: "Share your current altitude",
    detail: "Tell us about your licenses, exams cleared, and the timeline you’re chasing.",
    timing: "Day 0",
  },
  {
    label: "Receive a tailored flight plan",
    detail: "Within 24 hours we send a structured roadmap covering modules, hours, and mentoring touch-points.",
    timing: "Day 1",
  },
  {
    label: "Lock your next action",
    detail: "Book a discovery call, enrol in a cohort, or start with a diagnostic session—your choice.",
    timing: "Day 2",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Enquiry",
  description: "Tell us about your aviation goals and we’ll chart a personalised training flight plan.",
  canonicalPath: "/enquiry",
});

export default function EnquiryPage() {
  const whatsappNumberDigits = whatsappNumber.replace(/[^0-9]/g, "");

  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative full-bleed overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/images/enquiry.jpg')" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-950/75 to-blue-950/78" />
          <div className="absolute inset-0 bg-slate-950/25" />
          <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-[160px]" />
          <div className="absolute -bottom-36 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/18 blur-[170px]" />
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 22%, rgba(56,189,248,0.32) 0%, transparent 55%), radial-gradient(circle at 82% 78%, rgba(16,185,129,0.24) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9) 0%, transparent 70%)",
            }}
          />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={150}>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
              <div className="space-y-7 text-left text-slate-100">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Enquiry Desk
                </div>
                <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl md:leading-[1.05]">
                  Let’s map your personalised flight training plan
                </h1>
                <div className="space-y-5 text-lg leading-relaxed text-slate-200/85">
                  <p>
                    Share where you’re starting from, the checks you’re preparing for, and the runway you have
                    ahead. We’ll respond with a precise action plan—covering training modules, budgeting, and
                    mentoring touch-points—so you know exactly what comes next.
                  </p>
                  <p className="text-slate-200/75">
                    Every submission is reviewed by senior mentors—not bots—so the guidance you receive back is
                    contextual, actionable, and tailored to the aircraft you want to command.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/80">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 bg-white/5">
                    Comprehensive roadmap
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 bg-white/5">
                    Airline-ready mentorship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 bg-white/5">
                    Confidential consult
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href="#enquiry-form"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_18px_38px_-26px_rgba(245,158,11,0.65)] transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
                  >
                    Start Enquiry
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-100/85">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    No spam, just clarity
                  </div>
                </div>
              </div>

              <div className="relative rounded-4xl border border-white/15 bg-white/[0.08] p-8 text-slate-50 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.85)] backdrop-blur-xl">
                <div className="absolute -left-6 top-10 h-16 w-16 rounded-full bg-sky-400/30 blur-3xl" aria-hidden />
                <div className="absolute -right-10 bottom-6 h-20 w-20 rounded-full bg-amber-300/30 blur-3xl" aria-hidden />
                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                    Flightpath outline
                  </div>
                  <div className="space-y-5">
                    {heroPillars.map((pillar, index) => (
                      <div
                        key={pillar.title}
                        className="flex gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.9)]"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-400/90 text-base font-semibold text-slate-900 shadow-lg">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100/90">
                            {pillar.subtitle}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-200/85">{pillar.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100/80">
                    We dedicate a mentor the moment your submission lands. Expect a human response, not a bot.
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative full-bleed overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950/92 to-blue-950/70 pb-12 pt-0 md:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-20 h-72 w-72 rounded-full bg-sky-500/18 blur-[140px]" />
          <div className="absolute bottom-12 right-16 h-80 w-80 rounded-full bg-emerald-400/14 blur-[150px]" />
        </div>
        <div className="container-wide relative z-10 mt-10 md:mt-12">
          <ScrollAnimation animationType="fadeInUp" delay={250}>
            <div className="grid gap-6 md:grid-cols-3">
              {responseHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/12 bg-white/[0.08] p-8 text-slate-100 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.95)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.6)]"
                >
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg shadow-slate-900/50`}
                    aria-hidden
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-.5 15l-5-5 1.41-1.41L11.5 13.17l6.59-6.59L19.5 8z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/85">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative full-bleed overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/75" />
          <div className="absolute -top-24 left-20 h-80 w-80 rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute bottom-10 right-24 h-96 w-96 rounded-full bg-amber-400/18 blur-[180px]" />
          <div className="absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-400/14 blur-[170px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:110px_110px]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <ScrollAnimation animationType="fadeInLeft" delay={300}>
              <div className="group rounded-4xl bg-white/[0.08] p-10 shadow-[0_45px_120px_-70px_rgba(15,23,42,1)] backdrop-blur-2xl border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_60px_150px_-80px_rgba(56,189,248,0.6)]">
                <div className="mb-8 space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200 border border-white/15">
                    Enquiry Form
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                  </span>
                  <h2 className="text-4xl font-bold text-white">Tell us about your mission</h2>
                  <p className="text-base leading-relaxed text-slate-200/80">
                    Set the context once—our mentors prepare ahead of your call so you get specific, senior
                    guidance from the first conversation.
                  </p>
                </div>

                <form id="enquiry-form" className="grid gap-6" aria-label="Enquiry form">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-name" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Full name *
                      </label>
                      <input
                        id="enquiry-name"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="e.g. Captain Jane Doe"
                        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-email" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Email *
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@airmail.com"
                        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-phone" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder={whatsappNumber}
                        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-contact-pref" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Preferred contact window
                      </label>
                      <div className="relative">
                        <select
                          id="enquiry-contact-pref"
                          name="contactPreference"
                          defaultValue="Anytime"
                          className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 pr-12 text-slate-100 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20 [&>option]:bg-white [&>option]:text-slate-900"
                        >
                          <option>Anytime</option>
                          <option>Weekdays (9am - 1pm)</option>
                          <option>Weekdays (2pm - 6pm)</option>
                          <option>Weekends</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-goal" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Primary goal
                      </label>
                      <div className="relative">
                        <select
                          id="enquiry-goal"
                          name="goal"
                          defaultValue="CPL Ground Classes"
                          className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 pr-12 text-slate-100 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20 [&>option]:bg-white [&>option]:text-slate-900"
                        >
                          <option>CPL Ground Classes </option>
                          <option>Medical Class I/ Class II</option>
                          <option>ElogBook Filling</option>
                          <option>Conversion Training</option>
                          <option>Computer Number</option>
                          <option>Other (describe below)</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="enquiry-timeline" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                        Target timeline
                      </label>
                      <div className="relative">
                        <select
                          id="enquiry-timeline"
                          name="timeline"
                          defaultValue="0-3 months"
                          className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 pr-12 text-slate-100 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20 [&>option]:bg-white [&>option]:text-slate-900"
                        >
                          <option>0-3 months</option>
                          <option>3-6 months</option>
                          <option>6-12 months</option>
                          <option>12+ months</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="enquiry-message" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                      Mission brief *
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Include current flight hours, exams cleared, budget thoughts, and where you need the most support."
                      className="resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_45px_-25px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
                    >
                      Submit enquiry
                      <svg
                        className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-3 text-sm text-slate-200/75">
                      <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                      </svg>
                      <span>Private & secure — we only use this to reply.</span>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInRight" delay={400}>
              <div className="space-y-8">
                <div className="rounded-4xl bg-white/[0.08] p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,1)] backdrop-blur-2xl border border-white/12">
                  <h3 className="text-xl font-semibold text-white">Where we add lift</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                    Every enquiry is routed to mentors specialising in the stage you are at. Here’s how we
                    typically help cadets and career pilots alike.
                  </p>
                  <div className="mt-6 grid gap-5">
                    {focusAreas.map((item) => (
                      <div key={item.title} className="rounded-3xl border border-white/12 bg-white/[0.08] p-5 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.9)]">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/80 ${item.iconClass}`}
                          >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5L21 16z" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        </div>
                        <ul className="mt-4 grid gap-1.5 text-sm text-slate-200/80">
                          {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-200/70" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-4xl bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/75 p-8 text-slate-100 shadow-[0_40px_120px_-70px_rgba(15,23,42,1)] border border-white/12">
                  <h3 className="text-xl font-semibold">What happens after you submit</h3>
                  <ul className="mt-6 grid gap-5">
                    {processSteps.map((step, index) => (
                      <li key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/90 text-sm font-semibold text-slate-900 shadow-lg">
                            {index + 1}
                          </div>
                          {index !== processSteps.length - 1 && (
                            <span className="mt-2 h-12 w-px bg-white/15" aria-hidden />
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h4 className="text-base font-semibold text-white">{step.label}</h4>
                            <span className="rounded-full border border-white/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-200/90">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300/80">
                    <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.285 6.708l-11.4 11.401-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.986z" />
                    </svg>
                    Guidance is always complimentary until you’re ready to enrol.
                  </div>
                </div>

                <div className="rounded-4xl border border-white/12 bg-white/[0.08] p-6 text-sm text-slate-200/80 shadow-[0_30px_90px_-65px_rgba(15,23,42,1)]">
                  Prefer WhatsApp?{" "}
                  <Link
                    href={`https://wa.me/${whatsappNumberDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-300 underline-offset-4 transition-colors duration-200 hover:text-sky-200 hover:underline"
                  >
                    Send us a quick ping
                  </Link>{" "}
                  with your name and goal—we’ll take it from there.
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative full-bleed overflow-hidden pb-24 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute bottom-0 right-24 h-96 w-96 rounded-full bg-emerald-400/18 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={180}>
            <div className="mx-auto max-w-4xl text-center text-slate-100">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Ready when you are
                </span>
              </div>
              <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
                We exist to get more disciplined, well-prepared pilots into the cockpit.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-200/80">
                The itinerary we send is yours to action—whether you train with SkyPrep or elsewhere. Send an
                enquiry, get your bearings, and take the next step with confidence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_45px_-25px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
                >
                  Explore courses
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}