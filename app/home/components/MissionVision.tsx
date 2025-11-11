import { ScrollAnimation } from "./ScrollAnimation";

const missionHighlights = [
  {
    title: "Knowledge",
    description: "Comprehensive aviation education",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    title: "Confidence",
    description: "Building self assurance",
    gradient: "from-cyan-400 via-sky-400 to-blue-500",
  },
  {
    title: "Skills",
    description: "Practical aviation expertise",
    gradient: "from-amber-400 via-orange-400 to-amber-500",
  },
  {
    title: "Success",
    description: "Career advancement",
    gradient: "from-emerald-500 via-teal-500 to-emerald-400",
  },
];

const coreValues = [
  {
    title: "Excellence",
    description:
      "Your pathway to success. At SkyPrep Aero, excellence is our standard. Our expert-designed program equips you with the knowledge, confidence, and skills to ace your exams and launch your aviation career.",
  },
  {
    title: "Integrity",
    description:
      "Built on values that define every great pilot—honesty, responsibility, and professionalism. At SkyPrep Aero, your trust fuels our commitment to shaping aviators with integrity.",
  },
  {
    title: "Innovation",
    description:
      "The future of flight is here. SkyPrep’s Aero CPL Ground Class combines authentic DGCA pattern tests with AI-powered analysis to pinpoint your weak areas and boost performance—making complex concepts simple and learning truly engaging.",
  },
];

export function MissionVision() {
  return (
    <section className="full-bleed relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-950/92 to-blue-950/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
        <div className="absolute -bottom-44 right-0 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 22% 18%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(circle at 78% 82%, rgba(251,191,36,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9) 0%, transparent 72%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-wide relative z-10 text-slate-100">
        <ScrollAnimation animationType="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] backdrop-blur">
              <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">Mission & Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Aviation Excellence
              </span>
            </h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={350}>
          <div className="mx-auto max-w-5xl rounded-4xl border border-white/12 bg-white/[0.08] p-8 md:p-10 text-center shadow-[0_45px_110px_-60px_rgba(15,23,42,0.9)] backdrop-blur">
            <p className="text-base leading-relaxed text-slate-200/85 md:text-lg">
              At <span className="text-sky-300">SkyPrep Aero</span>, our mission and vision is to be the leading ground school that empowers aspiring aviators with knowledge, confidence, and skills. Through expert instruction, modern learning methods, and student-focused guidance, we build a strong foundation that helps future pilots clear exams with ease, grow into quality professionals, and soar toward successful aviation careers.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={450}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {missionHighlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] p-6 text-center text-slate-100 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.85)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_120px_-60px_rgba(56,189,248,0.6)]"
              >
                <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.gradient} blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-60`} />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200/80">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Our Core Values</h3>
            <p className="mt-3 text-base text-slate-200/75">
              Every cadet journey is anchored in our core values—excellence, integrity, and innovation.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fadeInUp" delay={700}>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] p-6 text-slate-200/85 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.85)] backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_120px_-60px_rgba(56,189,248,0.6)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-35" />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-300 shadow shadow-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-amber-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                <p className="text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
