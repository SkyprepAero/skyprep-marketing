import Link from "next/link";
import { PiUsersThreeBold, PiUserFocusBold, PiClipboardTextBold } from "react-icons/pi";

const trainingOptions = [
  {
    name: "FocusONE",
    description:
      "Elite 1:1 mentoring engineered around your schedule with senior airline captains guiding every sortie.",
    href: "/services/1-to-1-coaching",
    badge: "Personalised coaching",
    gradient: "from-sky-500/90 via-blue-500 to-indigo-500",
    Icon: PiUserFocusBold,
  },
  {
    name: "Cohorts",
    description:
      "Structured group tracks with live classes, peer accountability and milestone tracking built in.",
    href: "/services/cohorts",
    badge: "Collaborative learning",
    gradient: "from-emerald-400 via-emerald-500 to-teal-500",
    Icon: PiUsersThreeBold,
  },
  {
    name: "Test Series",
    description:
      "High-frequency mock tests, analytics, and debriefs to keep DGCA theory checks on glide slope.",
    href: "/services/subject-wise",
    badge: "Exam precision",
    gradient: "from-amber-400 via-amber-500 to-orange-500",
    Icon: PiClipboardTextBold,
  },
] as const;

export function TrainingTracks() {
  return (
    <section className="relative full-bleed overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900 py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-16 h-60 w-60 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(251,191,36,0.18) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center gap-6 text-center text-slate-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/90">
            Pick your training lane
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Three ways to fast-track your pilot journey
          </h2>
            <p className="max-w-2xl text-base text-slate-200/85 md:text-lg">
              Choose the format that fits your cockpit ambitions—deep 1:1 mentoring, collaborative cohorts, or focussed test prep.
            </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {trainingOptions.map((option) => (
            <Link
              key={option.name}
              href={option.href}
              className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.08] text-slate-100 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.9)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_130px_-60px_rgba(56,189,248,0.6)]"
            >
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% -10%, rgba(255,255,255,0.55) 0%, transparent 55%), radial-gradient(circle at 80% 120%, rgba(255,255,255,0.25) 0%, transparent 65%)",
                }}
              />
              <div className="relative flex flex-1 flex-col gap-6 p-8">
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${option.gradient} px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-[1.05]`}
                >
                  {option.badge}
                </span>
                <div className="space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-lg shadow-black/30 ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_-35px_rgba(56,189,248,0.45)]">
                    <option.Icon className="h-8 w-8 text-white" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-semibold md:text-3xl">{option.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
                    {option.description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition-all duration-300 group-hover:text-amber-100">
                  Explore program
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

