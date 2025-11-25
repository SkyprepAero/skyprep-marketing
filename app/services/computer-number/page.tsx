import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "DGCA Computer Number Assistance | Documentation & Application Support",
  description: "Get end-to-end DGCA Computer Number assistance with documentation, verification, guidance, and process coordination. Start your aviation journey with expert support.",
  canonicalPath: "/services/computer-number",
  keywords: [
    // Primary Keywords
    "DGCA Computer Number assistance",
    "DGCA Computer Number support",
    "DGCA CN application help",
    "Computer Number DGCA",
    "DGCA pilot registration India",
    "aviation CN application support",
    "DGCA document verification",
    "DGCA login & application guidance",
    // Secondary Keywords
    "how to apply DGCA Computer Number",
    "DGCA document requirements",
    "CN application documentation",
    "DGCA verification issues",
    "DGCA pilot eligibility",
    "student pilot DGCA process",
    "DGCA compliance guidance",
    "DGCA portal assistance",
    // Long-Tail Keywords
    "how to get DGCA Computer Number step by step",
    "DGCA CN application support for student pilots",
    "complete documentation help for DGCA Computer Number",
    "DGCA Computer Number requirements explained",
    "DGCA submission support for aviation students",
    "end-to-end assistance for DGCA Computer Number",
    "DGCA CN verification guidance for pilots in India",
    // LSI Keywords
    "DGCA paperwork",
    "aviation regulatory compliance",
    "pilot documentation India",
    "DGCA application errors",
    "DGCA student pilot profile",
    "DGCA entry process",
    "aviation regulatory support",
  ],
});

export default function ComputerNumberPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero + Intro Shared Background */}
      <section
        className="relative full-bleed overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/images/comp number.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/72 to-blue-950/78" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-emerald-400/18 blur-[160px]" />
        <AviationBackground className="opacity-12" />

        <div className="container-wide relative z-10 py-24">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-38px_rgba(15,23,42,0.8)] border border-white/25">
                <div className="w-3 h-3 bg-sky-300 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  DGCA Computer Number Assistance
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                DGCA Computer Number Assistance —
                <span className="block gradient-text-primary leading-tight">
                  Complete Documentation & Application Support
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                At SkyPrep Aero, we provide end-to-end DGCA Computer Number assistance for DGCA pilot registration India. 
                Get complete CN application help with documentation, verification, and DGCA portal assistance 
                for a seamless student pilot DGCA process.
              </p>
            </div>
          </ScrollAnimation>
        </div>

      {/* Introduction Section */}
        <section className="relative z-10 py-20">
          <div className="container-wide">
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 px-6 py-16 backdrop-blur-xl shadow-[0_45px_120px_-60px_rgba(15,23,42,0.85)] md:px-14">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
                <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Start Strong
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your First Step to Aviation Success</h2>
                  <p className="text-xl text-slate-200/85 max-w-3xl mx-auto">
                The DGCA entry process involves meticulous CN application documentation and strict aviation regulatory compliance. 
                We simplify how to get DGCA Computer Number step by step for you.
              </p>
            </div>
          </ScrollAnimation>
        </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-14 left-14 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive DGCA Computer Number Support</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Complete DGCA CN application support for student pilots throughout your Computer Number DGCA application process
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Documentation Support</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Complete documentation help for DGCA Computer Number—we assist in preparing and verifying all DGCA document requirements to meet standards.
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
                <h3 className="text-2xl font-bold text-white mb-4">Step-by-Step Guidance</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Expert DGCA login & application guidance throughout the CN application process—how to apply DGCA Computer Number with accuracy and timely submission.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Application & Process Coordination</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Aviation CN application support with DGCA liaison on your behalf—minimizing DGCA application errors and avoiding delays in CN approval.
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
                <h3 className="text-2xl font-bold text-white mb-4">Personalized CN Assistance</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Each DGCA student pilot profile receives tailored CN personalized support with progress updates and prompt resolution of DGCA verification issues.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-20 left-12 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-14 right-16 h-80 w-80 rounded-full bg-emerald-400/18 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Why SkyPrep Aero
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose SkyPrep Aero for DGCA CN</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                DGCA compliance experts with extensive experience in DGCA CN assistance and trusted DGCA Computer Number support for aviation aspirants.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DGCA CN Experience</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  Extensive experience in DGCA submission support for aviation students with aviation regulatory compliance expertise.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DGCA Requirements Expertise</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  DGCA Computer Number requirements explained with in-depth understanding of DGCA pilot eligibility and procedures.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trusted DGCA Support</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  Trusted DGCA Computer Number support with reliable, transparent DGCA compliance guidance throughout your pilot documentation India journey.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-14 right-14 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Help You Get Your Computer Number</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                CN application process India made simple—focus on your aviation aspirations while we manage all DGCA paperwork and procedural formalities.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="scaleIn" delay={400}>
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-3xl p-12 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 mb-16 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                  <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                    Complete Support
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">End-to-End DGCA Compliance Support</h3>
                <p className="text-lg text-slate-200/80 max-w-2xl mx-auto leading-relaxed">
                  End-to-end assistance for DGCA Computer Number handled with precision—DGCA CN verification guidance for pilots in India 
                  so you can focus on your aviation career goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">DGCA Document Preparation</h4>
                  <p className="text-slate-200/80 text-sm">Complete CN documentation and DGCA document verification</p>
                </div>

                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">CN Application Guidance</h4>
                  <p className="text-slate-200/80 text-sm">DGCA Computer Number step by step guidance</p>
                </div>

                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">DGCA Application Coordination</h4>
                  <p className="text-slate-200/80 text-sm">Aviation regulatory support and CN approval liaison</p>
                </div>

                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">CN Personalized Support</h4>
                  <p className="text-slate-200/80 text-sm">DGCA student guidance with progress updates</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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
                Start Your DGCA Computer Number Application
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto leading-relaxed">
                Apply for Computer Number with confidence—let SkyPrep Aero guide you through the DGCA CN application process 
                with our trusted DGCA service and aviation regulatory support.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href={getContactUrl("computer-number")}
                      className="group px-12 py-5 rounded-xl font-semibold text-slate-950 shadow-[0_25px_70px_-40px_rgba(245,158,11,0.75)] transition-all duration-300 text-lg hover:scale-105"
                      style={{
                        background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        Start Your CN Application
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/services/medical"
                      className="group px-12 py-5 rounded-xl font-semibold border-2 border-white/25 text-slate-100 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105"
                    >
                      <span className="flex items-center gap-3">
                        Explore Medical Services
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <a
                      href={getWhatsAppUrl("computer-number")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors duration-200 border border-white/20 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {getWhatsAppButtonText("computer-number")}
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
