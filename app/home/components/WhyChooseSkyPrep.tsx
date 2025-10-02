import { ScrollAnimation } from "./ScrollAnimation";

export function WhyChooseSkyPrep() {
  const features = [
    {
      t: "Expert instructors",
      d: "Airline and test‑pilot backgrounds with a knack for simplifying.",
      pts: ["One‑on‑one coaching", "Actionable debriefs", "Habits that stick"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
        </svg>
      ),
    },
    {
      t: "Exam‑ready syllabus",
      d: "Subject‑led study with memory aids and targeted drill packs.",
      pts: [
        "Air Law to HPL",
        "Spaced repetition",
        "Exam‑style drills",
        "Test series & extra notes",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M5 4h14v16H5V4zm3 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
        </svg>
      ),
    },
    {
      t: "Scenario training",
      d: "Briefs, flows, and debriefs that build real‑world decision making.",
      pts: ["Flows & checklists", "Abnormals practice", "R/T scripts"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 7l-9 5 9 5 9-5-9-5zm0 12l-9-5v4l9 5 9-5v-4l-9 5z" />
        </svg>
      ),
    },
    {
      t: "Clear plan & costs",
      d: "Transparent timelines with weekly actions and milestones.",
      pts: ["Budget templates", "Weekly cadence", "Milestone tracking"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="full-bleed relative overflow-hidden py-16 md:py-20"
      style={{ backgroundColor: "#F7FBFD" }}
    >
      <div className="container-wide relative">
        <ScrollAnimation animationType="fadeInUp" delay={200}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text-primary">Why choose SkyPrep</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animationType="fadeInUp" delay={400}>
          <p className="mt-3 text-slate-600 max-w-4xl">
            Proven coaching that turns complexity into clarity—finish faster, fly safer, and stay
            confident from your first lesson to your checkride.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animationType="scaleIn" delay={600}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((i) => (
            <div
              key={i.t}
              className="group rounded-2xl border border-[--color-border] bg-[--color-background] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:shadow-md hover:-translate-y-0.5 min-h-[260px] flex"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-900"
                    style={{ backgroundColor: "#ADE1EF" }}
                  >
                    {i.icon}
                  </span>
                  <h3 className="font-medium">{i.t}</h3>
                </div>
                <p className="mt-3 text-sm md:text-base text-slate-600">{i.d}</p>
                <ul className="mt-3 grid gap-1.5 text-sm text-slate-600">
                  {i.pts.map((p: string) => (
                    <li key={p} className="flex items-start gap-2">
                      <span
                        className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: "#ADE1EF" }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
