import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "FocusONE Mentorship Program | 1:1 DGCA Coaching & Personalized Pilot Training",
  description: "FocusONE offers personalised 1:1 DGCA coaching with live sessions, flexible scheduling, study materials, and expert mentorship to master all core aviation subjects.",
  canonicalPath: "/courses/1-to-1-coaching",
  keywords: [
    // Primary Keywords
    "FocusONE mentorship program",
    "DGCA 1:1 coaching",
    "one-on-one pilot training",
    "personalised pilot mentorship",
    "DGCA online ground classes",
    "CPL 1:1 coaching India",
    "aviation mentorship program",
    "DGCA pilot tutoring online",
    "airline captain mentoring",
    "aviation instructor online",
    // Secondary Keywords
    "flexible pilot training schedule",
    "personalised DGCA learning",
    "aviation subject mentoring",
    "DGCA subject coaching",
    "Air Regulation coaching",
    "Aviation Navigation coaching",
    "Meteorology coaching DGCA",
    "pilot doubt-clearing sessions",
    "online pilot classes India",
    "aviation study material",
    // Long-Tail Keywords
    "best one-on-one DGCA coaching program in India",
    "personalised pilot training with flexible timing",
    "online DGCA mentoring by airline professionals",
    "1:1 aviation mentorship for Air Navigation & Met",
    "how to study DGCA subjects with personal coaching",
    "DGCA exam preparation with live individual sessions",
    "aviation mentorship program with customized schedule",
    "complete DGCA subject coaching with doubt-clearing",
    // LSI Keywords
    "aviation syllabus coaching",
    "DGCA theory subjects",
    "aviation meteorology lessons",
    "aircraft systems basics",
    "RT & Radio Telephony coaching",
    "cadet pilot theory guidance",
    "online aviation tutor",
    "DGCA individual guidance",
  ],
});

export default function OneToOneCoachingPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero + Benefits Shared Background */}
      <section
        className="relative full-bleed overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/images/focusone.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/72 to-blue-950/78" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-emerald-400/18 blur-[160px]" />
        <AviationBackground className="opacity-12" />

        <div className="container-wide relative z-10 py-24">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-38px_rgba(15,23,42,0.8)] border border-white/30">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  FocusONE Program
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                FocusONE Mentorship Program —
                <span className="block gradient-text-primary leading-tight">Personalized 1:1 DGCA Coaching</span>
              </h1>
              <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                India&apos;s best one-on-one DGCA coaching program with personalised pilot mentorship, 
                flexible scheduling, and expert aviation instructors.                 Master Air Regulation, Meteorology, Navigation, and Technical General with dedicated online pilot classes.
              </p>
            </div>
          </ScrollAnimation>
        </div>

      {/* Benefits Section */}
        <section className="relative z-10 py-20">
          <div className="container-wide">
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 px-6 py-16 backdrop-blur-xl shadow-[0_45px_120px_-60px_rgba(15,23,42,0.85)] md:px-14">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Program Features
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features of the FocusONE Program
              </h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Comprehensive features designed for personalised DGCA learning and pilot success
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">One-on-One Live Sessions With Experts</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  DGCA 1:1 coaching with experienced aviation instructors online for truly personalised pilot mentorship.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Flexible Scheduling for Busy Cadets</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Flexible pilot training schedule that works with your availability—personalised pilot training with flexible timing.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Study Material & Resources</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Complete aviation study material, notes, and resources to master all DGCA theory subjects.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dedicated Doubt-Clearing Sessions</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Pilot doubt-clearing sessions with DGCA individual guidance to clarify any aviation concepts you find challenging.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
          </div>
        </section>
      </section>

      {/* Subjects Covered */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-12 left-14 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Comprehensive Curriculum
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Subjects Covered in FocusONE</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Master essential DGCA theory subjects with personalised one-on-one aviation subject mentoring
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Aviation Subjects */}
          <ScrollAnimation animationType="fadeInUp" delay={300}>
            <div className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-full px-8 py-3 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Core Aviation Subjects</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Air Regulation */}
            <ScrollAnimation animationType="scaleIn" delay={400}>
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Air Regulation</h3>
                <p className="text-slate-200/80 text-center leading-relaxed mb-6 flex-grow">
                  Complete Air Regulation DGCA coaching covering aviation laws India, DGCA regulation guidelines, and flight safety standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Civil Aviation Regulations</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">ATC Procedures</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">DGCA Guidelines</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Aviation Meteorology */}
            <ScrollAnimation animationType="scaleIn" delay={600}>
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Aviation Meteorology</h3>
                <p className="text-slate-200/80 text-center leading-relaxed mb-6 flex-grow">
                  Comprehensive DGCA meteorology coaching and aviation weather training covering atmospheric conditions and their impact on flight safety.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Weather Systems Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Atmospheric Pressure</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Weather Forecasting</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Air Navigation */}
            <ScrollAnimation animationType="scaleIn" delay={800}>
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Air Navigation</h3>
                <p className="text-slate-200/80 text-center leading-relaxed mb-6 flex-grow">
                  Expert DGCA navigation training covering radio navigation, GPS flight planning, and aviation navigation coaching for safe operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Dead Reckoning</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Radio Navigation Aids</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">GPS & Flight Planning</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Technical General */}
            <ScrollAnimation animationType="scaleIn" delay={1000}>
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Technical General (TG)</h3>
                <p className="text-slate-200/80 text-center leading-relaxed mb-6 flex-grow">
                  Aircraft systems training covering TG DGCA syllabus, principles, and operations—essential aircraft systems basics for cadet pilot theory guidance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Aircraft Systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Engine Operations</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Flight Principles</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Additional Specialized Subjects */}
          <ScrollAnimation animationType="fadeInUp" delay={900}>
            <div className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-8 py-3 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Specialized Subjects</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">

            {/* RTR */}
            <ScrollAnimation animationType="fadeInRight" delay={1100}>
              <div className="group bg-white/[0.07] rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-white/20 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Radio Telephony Restricted (RTR)</h3>
                    <p className="text-slate-200/80 text-lg leading-relaxed mb-4">
                      Complete RTR coaching covering RT communication, ATC procedures, and aviation radio operations—essential RT & Radio Telephony coaching for safe pilot communication.
                    </p>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      COMING SOON
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-10">
                      <span className="inline-block bg-white/10 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
                        Radio Procedures
                      </span>
                      <span className="inline-block bg-white/10 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
                        ATC Communication
                      </span>
                      <span className="inline-block bg-white/10 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
                        Emergency Protocols
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -top-24 left-20 h-72 w-72 rounded-full bg-sky-500/22 blur-[130px]" />
          <div className="absolute -bottom-24 right-24 h-80 w-80 rounded-full bg-amber-400/18 blur-[150px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Start Your FocusONE Mentorship Journey
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join DGCA coaching with India&apos;s best aviation mentorship program. Start your pilot mentorship 
                with online DGCA mentoring by airline professionals—DGCA exam preparation with live individual sessions.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href={getContactUrl("1-to-1-coaching")}
                      className="group px-12 py-5 rounded-xl font-semibold text-slate-950 shadow-[0_25px_70px_-40px_rgba(245,158,11,0.75)] transition-all duration-300 text-lg hover:scale-105"
                      style={{
                        background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        Start Mentorship Program
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/services/cohorts"
                      className="group px-12 py-5 rounded-xl font-semibold border-2 border-white/25 text-slate-100 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105"
                    >
                      <span className="flex items-center gap-3">
                        Explore Cohorts
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <a
                      href={getWhatsAppUrl("1-to-1-coaching")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors duration-200 border border-white/20 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {getWhatsAppButtonText("1-to-1-coaching")}
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
