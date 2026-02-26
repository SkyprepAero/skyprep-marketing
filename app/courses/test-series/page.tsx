import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import Link from "next/link";
import { NewsletterSubscriptionSection } from "@/components/NewsletterSubscriptionSection";

export const metadata: Metadata = buildPageMetadata({
  title: "DGCA Test Series | Mock Tests & Analytics - Coming Soon",
  description: "DGCA test series with analytics and debriefs launching soon. Practice mock tests for navigation, meteorology, and regulations to clear DGCA exams in first attempt.",
  canonicalPath: "/courses/test-series",
  keywords: [
    "DGCA test series",
    "DGCA mock tests",
    "pilot exam practice tests",
    "aviation test series India",
    "DGCA exam preparation",
    "CPL mock tests",
    "navigation mock test",
    "meteorology practice test",
    "air regulation test series",
    "DGCA online test",
  ],
});

export default function TestSeriesPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative full-bleed overflow-hidden py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[180px]" />
          <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-sky-500/20 blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[200px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        <AviationBackground className="opacity-10" />

        <div className="container-wide relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 backdrop-blur rounded-full px-8 py-4 mb-8 shadow-[0_25px_60px_-40px_rgba(245,158,11,0.5)] border border-amber-400/40 animate-pulse">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-ping" />
              <span className="text-amber-200 text-sm font-bold uppercase tracking-[0.4em]">
                Coming Soon
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              DGCA Test Series
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                With Analytics & Debriefs
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200/85 max-w-3xl mx-auto leading-relaxed mb-12">
              Intensive DGCA mock tests with detailed analytics, performance tracking, and personalised action plans to help you clear exams in your first attempt.
            </p>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mock Tests</h3>
                <p className="text-slate-300/80 text-sm">DGCA-pattern questions for Navigation, Meteorology & Regulations</p>
              </div>

              <div className="group bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-sky-500/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Analytics</h3>
                <p className="text-slate-300/80 text-sm">AI-powered performance insights to identify weak areas</p>
              </div>

              <div className="group bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Debriefs</h3>
                <p className="text-slate-300/80 text-sm">Detailed explanations and personalised action plans</p>
              </div>
            </div>

            {/* Notify Form */}
            <NewsletterSubscriptionSection />

            {/* Subjects Covered */}
            <div className="mt-16">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-6">Subjects Covered</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-sky-500/20 border border-blue-400/30 text-blue-200 font-medium">
                  Air Navigation
                </span>
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-200 font-medium">
                  Aviation Meteorology
                </span>
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-200 font-medium">
                  Air Regulation
                </span>
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 font-medium">
                  Technical General
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Test Series Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Our Test Series?</h2>
            <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
              Designed by pilots who&apos;ve cleared DGCA exams, built with technology that helps you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Performance Analytics", desc: "Track your progress with detailed insights" },
              { icon: "🎯", title: "DGCA Pattern", desc: "Questions aligned with actual exam format" },
              { icon: "⏱️", title: "Timed Practice", desc: "Build speed and accuracy under pressure" },
              { icon: "📈", title: "Weakness Targeting", desc: "Focus on areas that need improvement" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white/[0.04] rounded-2xl border border-white/8 hover:border-white/15 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden full-bleed">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/80" />
        <AviationBackground className="opacity-5" />
        
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can&apos;t Wait? Start Preparing Now
          </h2>
          <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-8">
            While our Test Series is launching soon, you can start your DGCA preparation with our <Link href="/courses/dgca-on-demand-sessions" className="text-amber-300 hover:text-amber-200 underline">DGCA On Demand Sessions</Link> or Cohorts program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses/dgca-on-demand-sessions"
              className="px-10 py-4 rounded-xl font-semibold text-slate-950 shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
              }}
            >
              DGCA On Demand Sessions
            </Link>
            <Link
              href="/courses/cohorts"
              className="px-10 py-4 rounded-xl font-semibold border border-white/20 text-slate-100 hover:bg-white/10 transition-all duration-300"
            >
              Join Cohorts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

