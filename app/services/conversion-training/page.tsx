import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Conversion Flying India | Foreign Pilot License to DGCA Conversion Support",
  description: "Convert your foreign flight hours and pilot license to DGCA standards seamlessly. Complete guidance for FAA, CASA, SACAA, CAANZ, CAAP conversions with FTO scheduling and documentation support.",
  canonicalPath: "/services/conversion-training",
  keywords: [
    // Primary Keywords
    "DGCA conversion flying",
    "foreign pilot license conversion India",
    "FAA to DGCA conversion",
    "CASA to DGCA license conversion",
    "SACAA to DGCA license conversion",
    "CAANZ to DGCA conversion",
    "pilot conversion training India",
    "DGCA license conversion process",
    "international pilot conversion India",
    "convert foreign flying hours DGCA",
    // Secondary Keywords
    "DGCA FTO conversion flying",
    "eGCA conversion support",
    "DGCA documentation help",
    "foreign flight hours validation",
    "India license conversion for pilots",
    "DGCA exam preparation for conversion",
    "CPL conversion India",
    "ATPL conversion India",
    "flying hour completion India",
    "conversion flying requirements DGCA",
    // Long-Tail Keywords
    "how to convert FAA or foreign pilot license to DGCA in India",
    "DGCA requirements for foreign-trained pilots",
    "complete assistance for DGCA conversion flying",
    "conversion flying for overseas trained pilots returning to India",
    "steps to convert Canadian, Australian, or South African licenses to DGCA",
    "DGCA conversion process with documentation and eGCA support",
    "flying hour completion at DGCA-approved FTOs for conversion",
    "DGCA theoretical exam preparation for foreign pilots",
    // LSI Keywords
    "DGCA validation",
    "eGCA portal documentation",
    "pilot license verification",
    "international aviation licensing",
    "flight record verification",
    "DGCA-approved flying school",
    "conversion check ride",
    "India aviation licensing process",
  ],
});

export default function ConversionTrainingPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/media/images/conversion.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              filter: "grayscale(12%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/75 to-blue-950/80" />
          <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-emerald-400/18 blur-[160px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-38px_rgba(15,23,42,0.8)] border border-white/25">
                <div className="w-3 h-3 bg-sky-300 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  Conversion Training
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                Conversion Flying India —
                <span
                  className="block leading-tight text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #FF9933 0%, #FF9933 45%, #FFFFFF 45%, #FFFFFF 60%, #138808 62%, #138808 100%)",
                  }}
                >
                   Convert Your Foreign Pilot License to DGCA
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                Convert Your Foreign Flight Hours Seamlessly — International Pilot Conversion India
              </p>
              <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mt-4 drop-shadow-[0_10px_26px_rgba(15,23,42,0.6)]">
                Trained abroad? Foreign pilot license conversion India made easy. At SkyPrep Aero, we assist pilots with FAA to DGCA conversion, CASA to DGCA license conversion, SACAA to DGCA, CAANZ to DGCA, and CAAP conversions into DGCA-approved Indian licenses.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is Conversion Flying Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-12 right-12 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  What is Conversion Flying?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is Conversion Flying?</h2>
              <p className="text-xl text-slate-200/80 max-w-4xl mx-auto leading-relaxed">
                DGCA license conversion process is required by the Directorate General of Civil Aviation 
                for overseas trained pilots returning to India to align their flight record verification 
                and documentation with Indian licensing standards.
              </p>
              <p className="text-lg text-slate-200/70 max-w-3xl mx-auto leading-relaxed mt-6">
                It involves DGCA validation of foreign flight hours, DGCA theoretical exam preparation for foreign pilots, 
                and flying hour completion at DGCA-approved FTOs for conversion in India.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-14 left-12 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Conversion Support
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete DGCA Conversion Support</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Complete assistance for DGCA conversion flying with eGCA support and DGCA documentation help
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold text-white mb-4">DGCA License Conversion Process</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Steps to convert Canadian, Australian, or South African licenses to DGCA—documentation, DGCA validation, and conversion eligibility checks.
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
                <h3 className="text-2xl font-bold text-white mb-4">Flying Hour Completion in India</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Flying hour completion India with DGCA FTO conversion flying—scheduling remaining hours, skill tests, and conversion check rides at DGCA-approved flying schools.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">eGCA Documentation & Profile Assistance</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  eGCA portal documentation filing, foreign flight hours validation, and eGCA conversion support for seamless processing.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Exam Preparation & Ground Classes</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  DGCA exam preparation for conversion—Air Navigation conversion class, Air Regulation DGCA conversion, and Meteorology exam prep for foreign pilots.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1200}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Consultation for Your Conversion</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Logbook evaluation India with DGCA requirements for foreign-trained pilots—exact conversion flying requirements DGCA to meet criteria.
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
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/18 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Why Choose SkyPrep Aero
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose SkyPrep Aero</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                DGCA conversion experts with end-to-end pilot conversion support India for international aviation licensing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Network with Leading FTOs</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  Network with DGCA-approved flying schools across India for DGCA FTO conversion flying and quality assessment.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Transparent Process</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  Transparent India aviation licensing process with time-bound tracking and regular updates on your DGCA conversion.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">All Foreign Licenses</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  FAA to DGCA, CASA to DGCA, SACAA to DGCA, CAANZ to DGCA, TC to DGCA, and CAAP to DGCA with specialized expertise.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/12 hover:-translate-y-2 hover:border-white/25 transition-all duration-500 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Conversion Support</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  End-to-end pilot conversion support India—from DGCA documentation help to conversion check ride with complete guidance.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-14 left-12 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Ideal for Pilots Returning From
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">International Training Destinations We Support</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Conversion flying for overseas trained pilots returning to India from top international flying schools
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/usa.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    FAA
                  </span>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">United States (FAA)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    FAA to DGCA conversion—convert your FAA licenses and training hours to Indian standards
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/canada.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    TC
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Canada (TC)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    TC to DGCA conversion—convert your Canadian flight training and licenses to Indian standards
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/southafrica.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    SACAA
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">South Africa (SACAA)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    SACAA to DGCA license conversion—convert your South African training to Indian requirements
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/newzealand.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    CAANZ
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">New Zealand (CAANZ)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    CAANZ to DGCA conversion—convert your New Zealand licenses to Indian aviation standards
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1200}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/philippines.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    CAAP
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Philippines (CAAP)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    CAAP to DGCA conversion—convert your Philippines licenses and training to Indian requirements
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1400}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/media/videos/australia.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-slate-900/75 transition-colors duration-300 group-hover:bg-slate-900/55" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pointer-events-none" />
                <div className="relative z-10 p-8 md:p-10 mt-auto text-left flex flex-col gap-4">
                  <span className="inline-flex w-max items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                    CASA
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Australia (CASA)</h3>
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed">
                    CASA to DGCA license conversion—convert your Australian training to Indian aviation standards
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-50" />
          <div className="absolute -top-24 left-20 h-72 w-72 rounded-full bg-sky-500/18 blur-[140px]" />
          <div className="absolute -bottom-24 right-24 h-80 w-80 rounded-full bg-amber-400/18 blur-[150px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/20">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  Begin Your Conversion
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_16px_32px_rgba(15,23,42,0.7)] mb-8">
                Begin Your Conversion Today
              </h2>
              <p className="text-xl md:text-2xl text-slate-100/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.6)]">
                Start conversion flying with DGCA conversion application India. Complete your pilot conversion training India at reputed DGCA-approved FTOs with end-to-end pilot conversion support from start to finish.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href={getContactUrl("conversion-training")}
                      className="group px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
                      style={{
                        background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                        color: "#0f172a",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        Start Conversion Process
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/services/computer-number"
                      className="group px-12 py-5 rounded-xl font-semibold border-2 border-white/25 text-white hover:bg-white/10 hover:border-sky-300/70 transition-all duration-300 text-lg hover:scale-105"
                    >
                      <span className="flex items-center gap-3">
                        Explore Computer Number
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <a
                      href={getWhatsAppUrl("conversion-training")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200 border border-green-200 rounded-lg hover:bg-green-50"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {getWhatsAppButtonText("conversion-training")}
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
