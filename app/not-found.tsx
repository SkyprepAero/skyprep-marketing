import Link from "next/link";
import { AviationBackground } from "@/components/AviationBackground";

export default function NotFound() {
  return (
    <div className="full-bleed min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-sky-500/22 blur-[150px]" />
          <div className="absolute right-[10%] bottom-[14%] h-80 w-80 rounded-full bg-emerald-400/18 blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:110px_110px]" />
        </div>
        <AviationBackground className="opacity-10" />

        <div className="relative z-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/80 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Off Course
          </div>
          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            404 &mdash; Airspace Not Found
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200/80">
            The waypoint you&apos;re trying to reach isn&apos;t in our current flight plan. Let&apos;s redirect you to a familiar runway so you can resume your journey.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_45px_-25px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
            >
              Back to Home Base
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 transition-all duration-300 hover:border-white/30 hover:bg-white/15"
            >
              File a New Flight Plan
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M12 4h9" />
                <path d="M4 9l4-4 4 4" />
                <path d="M4 15l4 4 4-4" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Need a co-pilot? <span className="font-semibold text-sky-300">Reach out anytime.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

