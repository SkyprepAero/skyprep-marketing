import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "NIOS Assistance for CPL Eligibility | Commerce, Arts to Pilot India",
  description: "NIOS assistance in India for Commerce, Arts & other streams. Meet DGCA 10+2 Physics & Maths requirement for CPL through NIOS—registration, subjects, and documentation support.",
  canonicalPath: "/services/nios-assistance",
  keywords: [
    "NIOS assistance India",
    "NIOS for CPL eligibility",
    "Commerce to pilot India",
    "Arts stream CPL eligibility",
    "DGCA 10+2 Physics Maths",
    "NIOS Physics Maths for pilot",
    "CPL eligibility without Science",
    "NIOS registration for aviation",
    "open school for pilot India",
    "NIOS certificate DGCA",
    "aviation eligibility Commerce Arts",
    "NIOS assistance services India",
    "pilot license eligibility India",
    "DGCA minimum education CPL",
    "NIOS additional subject exam",
  ],
});

export default function NiosAssistancePage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero + Intro Shared Background */}
      <section
        className="relative full-bleed overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/images/nios.jpg')" }}
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
                  NIOS Assistance — India
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                NIOS Assistance for CPL Eligibility —
                <span className="block gradient-text-primary leading-tight">
                  Commerce, Arts & Other Streams to Pilot
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                Passed 12th from Commerce, Arts or other streams? DGCA requires Physics and Maths at 10+2 for CPL.
                We help you meet that requirement through NIOS—registration, subject selection, and documentation support so you can pursue your pilot license in India.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Introduction Section — Why NIOS (boxed cards) */}
        <section className="relative z-10 py-20">
          <div className="container-wide">
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 px-6 py-16 backdrop-blur-xl shadow-[0_45px_120px_-60px_rgba(15,23,42,0.85)] md:px-14">
              <ScrollAnimation animationType="fadeInUp" delay={200}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                    <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                      CPL Eligibility via NIOS
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How NIOS Helps You Qualify for CPL</h2>
                  <p className="text-xl text-slate-200/85 max-w-2xl mx-auto">
                    To apply for a Commercial Pilot Licence in India, DGCA mandates Physics and Mathematics at 10+2. NIOS is the recognised way to meet this if you didn’t have these subjects in class 12.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  <ScrollAnimation animationType="fadeInUp" delay={300}>
                    <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 md:p-8 text-left hover:border-sky-500/30 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Not from Science in 12th?</h3>
                      <p className="text-slate-200/85 leading-relaxed">
                        If you passed Commerce, Arts, or any stream without Physics & Maths, you can take these as additional subjects through NIOS and become eligible for CPL.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animationType="fadeInUp" delay={400}>
                    <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 md:p-8 text-left hover:border-sky-500/30 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">We handle the process</h3>
                      <p className="text-slate-200/85 leading-relaxed">
                        From NIOS admission and subject selection to exam dates and paperwork—we walk you through each step so you can focus on preparation.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animationType="fadeInUp" delay={500}>
                    <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 md:p-8 text-left hover:border-sky-500/30 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Eligibility ready for DGCA</h3>
                      <p className="text-slate-200/85 leading-relaxed">
                        Once you have your NIOS marksheet and certificate in order, you’re set to meet DGCA’s 10+2 requirement and apply to flying schools for CPL training.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </section>

      {/* Flashy CTA Card Section */}
      <section className="py-24 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
                <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-sky-400">
                <path d="M50 15 L65 35 L85 40 L70 55 L85 70 L65 75 L50 85 L35 75 L15 70 L30 55 L15 40 L35 35 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-white/20">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">NIOS for CPL Eligibility</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">End-to-End NIOS Assistance</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                From NIOS registration to DGCA-ready documentation—we support Commerce, Arts and other stream students for CPL eligibility in India.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">NIOS Assistance for CPL</h3>
                      <p className="text-cyan-200 font-semibold">Registration, Subjects & Documentation Support</p>
                      <div className="flex items-center gap-2 text-cyan-300 text-sm mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>For Commerce, Arts & other streams</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Includes:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-cyan-200 text-sm">
                          <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>NIOS registration guidance</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-200 text-sm">
                          <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Physics & Maths subject selection</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-200 text-sm">
                          <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Exam cycle & timeline planning</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-200 text-sm">
                          <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>DGCA-ready documentation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={getWhatsAppUrl("nios-assistance")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Get Started
                    </a>
                    <Link
                      href={getContactUrl("nios-assistance")}
                      className="px-6 py-3 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-xl font-semibold text-center transition-all duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
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
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">NIOS Assistance Services in India</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                End-to-end support for Commerce, Arts and other stream students who need Physics & Maths at 10+2 for CPL eligibility.
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
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">NIOS Registration Guidance</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Step-by-step help with NIOS admission, form filling, and document submission so you can register for additional subjects (Physics, Maths) without hassle.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Subject & Exam Planning</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Clear guidance on which NIOS subjects to take (Physics, Mathematics), exam cycles, and how to plan your timeline for CPL eligibility.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DGCA-Ready Documentation</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Help with marksheets, migration, and NIOS certificate presentation so your 10+2 eligibility is clear for DGCA and flying schools.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Answer your queries on NIOS process, DGCA requirements, and next steps—so you stay on track for CPL eligibility from Commerce or Arts background.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
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
                  Who Is This For
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ideal for Commerce, Arts & Other Streams</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                If you have passed or are pursuing 12th from a board that did not include Physics and Mathematics, and you want to become a pilot in India, NIOS is the recognised route. We assist you through it.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">12th Commerce / Arts</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  You have completed or are completing 12th in Commerce, Arts, or similar stream and need Physics & Maths for DGCA CPL eligibility.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">CPL Aspirants</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  You aim for Commercial Pilot Licence (CPL) in India and want to clear the 10+2 Physics & Maths requirement via NIOS.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Need Clarity on Process</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  You want expert guidance on NIOS registration, subject choice, exam dates, and how it fits with DGCA and flying training.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">NIOS to CPL Eligibility — Simplified</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                From understanding DGCA requirements to having your NIOS marksheet ready for flying school—we support you at each step.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="scaleIn" delay={400}>
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-3xl p-12 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 mb-16 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Understand Requirement</h4>
                  <p className="text-slate-200/80 text-sm">DGCA 10+2 Physics & Maths—we clarify what you need for CPL.</p>
                </div>
                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">NIOS Registration</h4>
                  <p className="text-slate-200/80 text-sm">Guidance on NIOS admission and choosing Physics & Maths.</p>
                </div>
                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Exams & Results</h4>
                  <p className="text-slate-200/80 text-sm">Support through exam cycles and result documentation.</p>
                </div>
                <div className="group text-center p-6 bg-white/[0.07] rounded-2xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-300 hover:shadow-[0_45px_120px_-70px_rgba(56,189,248,0.6)]">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">CPL Eligibility Ready</h4>
                  <p className="text-slate-200/80 text-sm">Marksheet/certificate in order for DGCA and flying schools.</p>
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
                Start Your NIOS Journey for CPL Eligibility
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto leading-relaxed">
                Commerce, Arts or other stream—we help you meet DGCA 10+2 Physics & Maths through NIOS. Get in touch for registration, subject selection, and documentation support.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={getWhatsAppUrl("nios-assistance")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Get Started on WhatsApp
                  </a>
                  <Link
                    href={getContactUrl("nios-assistance")}
                    className="px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    Send us an enquiry
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
