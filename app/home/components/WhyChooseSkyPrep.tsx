import { ScrollAnimation } from "./ScrollAnimation";

export function WhyChooseSkyPrep() {
  const features = [
    {
      title: "Personalised DGCA Coaching",
      description:
        "1:1 pilot mentoring with airline captains providing personalised guidance, DGCA exam preparation support, and career guidance throughout your aviation journey.",
      points: [
        "Individual coaching sessions",
        "Progress tracking and analytics",
        "Flexible scheduling options",
        "Custom DGCA study plans",
        "Progress monitoring",
        "DGCA exam preparation support",
        "Aviation career guidance",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        </svg>
      ),
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
    },
    {
      title: "Complete DGCA Study Materials",
      description:
        "Comprehensive DGCA study materials, practice tests for navigation, meteorology, and regulations—designed for pilot exam success.",
      points: [
        "24/7 access to DGCA study materials",
        "DGCA practice test banks",
        "Memory aids and flashcards",
        "DGCA mock tests and test series",
        "Video lessons and tutorials (Coming Soon)",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 4h14v16H5V4zm3 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
        </svg>
      ),
      gradient: "from-amber-500 via-amber-400 to-orange-500",
    },
    {
      title: "Proven DGCA Exam Strategy",
      description:
        "Evidence-based learning with spaced repetition and active recall—proven methods to clear DGCA exams in first attempt.",
      points: [
        "Spaced repetition DGCA learning",
        "Active recall techniques",
        "Progress tracking analytics",
        "Memory palace methods",
        "DGCA exam strategy coaching",
        "Confidence building exercises",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-500 via-teal-500 to-emerald-400",
    },
  ];

  const stats = [
    { number: "360°", label: "Training coverage" },
    { number: "Custom", label: "Learning Path" },
    { number: "FocusONE", label: "Personalized Coaching" },
    { number: "Flexible", label: "Your Schedule" },
  ];

  return (
    <section className="full-bleed relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-950/92 to-blue-950/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-12 h-96 w-96 rounded-full bg-amber-400/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(251,191,36,0.22) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.85) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-wide relative z-10 text-slate-100">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80">
            Why SkyPrep Works for Modern Cadets
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </span>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Complete DGCA Study Material & Proven Success Methods
          </h2>
          <p className="max-w-3xl text-base text-slate-200/80 md:text-lg">
            Pilot training analytics, custom DGCA study plans, and aviation discipline coaching—
            from your first navigation log to airline interview preparation.
          </p>
        </div>

        <ScrollAnimation animationType="fadeInUp" delay={200}>
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 text-center shadow-[0_30px_80px_-55px_rgba(14,165,233,0.8)] backdrop-blur transition-all duration-300 hover:border-white/25 hover:-translate-y-1.5"
              >
                <div className="text-3xl font-semibold text-white md:text-4xl">{stat.number}</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <div className="mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} animationType="fadeInUp" delay={350 + index * 150}>
              <div className="group relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.07] p-8 text-slate-100 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.9)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_130px_-60px_rgba(56,189,248,0.6)]">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg shadow-black/40 transition-transform duration-300 group-hover:-translate-y-1`}>
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-200/80">{feature.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200/75">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className={`mt-1 inline-flex h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animationType="fadeInUp" delay={900}>
          <div className="mt-16 grid gap-10 text-sm text-slate-200/80 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="rounded-4xl border border-white/10 bg-white/[0.07] p-10 shadow-[0_35px_90px_-55px_rgba(14,116,253,0.75)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_130px_-60px_rgba(56,189,248,0.6)]">
              <h3 className="text-3xl font-semibold text-white md:text-4xl">Ground School Reinvented for the Modern Aviator</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                Our DGCA ground school India program blends traditional aviation fundamentals with modern learning methods. We offer adaptive CPL ground classes,
                tailored feedback, and actionable insights that transform complex DGCA subjects into achievable
                milestones. Whether you&apos;re a fresh cadet or in advanced pilot training, we meet you where you&apos;re at.
              </p>
              <ul className="mt-6 space-y-4 text-base text-slate-200/80">
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-sky-500" />
                  <span>Adaptive DGCA training plans to suit your pace and timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-amber-500 to-orange-500" />
                  <span>Weekly accountability touchpoints to keep you on-course for exams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500" />
                  <span>Analytics-driven progress reports after every checkpoint</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-6">
              {[
                {
                  title: "FocusONE: Personalised 1:1 Airline Captain Mentorship",
                  copy: "Elite 1:1 DGCA coaching with airline captains mapping every sortie, sim and exam milestone.",
                  gradient: "from-sky-500/25 via-blue-500/10 to-sky-500/5",
                },
                {
                  title: "Cohort-Based DGCA Ground School",
                  copy: "Collaborative aviation cohorts with structured milestones, peer accountability, and live doubt clearing.",
                  gradient: "from-amber-500/25 via-orange-500/10 to-amber-500/5",
                },
                {
                  title: "DGCA Test Series With Analytics & Debriefs",
                  copy: "Intensive DGCA mock tests, analytics, and action plans to clear exams in first attempt.",
                  gradient: "from-emerald-500/25 via-teal-500/10 to-emerald-500/5",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.9)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_130px_-60px_rgba(56,189,248,0.6)]"
                >
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/25 via-blue-500/10 to-sky-500/5 blur-2xl opacity-60" />
                  <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={1100}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center text-xs font-semibold uppercase tracking-[0.35em]">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-slate-100/70">
              Ready for disciplined training?
            </span>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/enquiry"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm tracking-[0.35em] text-slate-950 shadow-[0_25px_60px_-35px_rgba(245,158,11,0.7)] transition-all duration-300 hover:scale-[1.02]"
              >
                Submit an enquiry
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-3.5 text-sm text-slate-100 tracking-[0.3em] transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                About SkyPrep Aero
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
