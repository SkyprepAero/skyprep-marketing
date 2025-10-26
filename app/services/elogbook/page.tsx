import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "eLogbook Filing Assistance (eGCA) - SkyPrep Aero",
  description: "Simplify your flight logging with complete eLogbook filing assistance on DGCA's eGCA portal. Accurate, efficient, and error-free flight record management.",
  canonicalPath: "/services/elogbook",
});

export default function ElogbookPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <AviationBackground className="opacity-60" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">eLogbook Filing Assistance</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                eLogbook Filing
                <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent leading-tight">
                  Assistance (eGCA)
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Simplify Your Flight Logging — The Smart Way
              </p>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mt-4">
                Managing your flight records is just as important as flying itself. At SkyPrep Aero, we provide complete assistance for eLogbook filing and management on the DGCA eGCA portal.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is eLogbook Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-32 right-16 w-20 h-20 opacity-8">
              <svg viewBox="0 0 100 100" className="w-full h-full text-sky-600">
                <path d="M50 15 L65 35 L85 40 L70 55 L85 70 L65 75 L50 85 L35 75 L15 70 L30 55 L15 40 L35 35 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">What is the eLogbook?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Digital Flight Record System</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                The eLogbook is a digital flight record system maintained through DGCA's eGCA portal, 
                designed to store, verify, and track every pilot's flight hours and experience online.
              </p>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mt-6">
                All pilots — from Student Pilots to CPL and ATPL holders — are required to maintain this log 
                digitally to comply with DGCA regulations.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Our eLogbook Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Complete eLogbook Support</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We help you with every aspect of eLogbook management and filing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Account Setup</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Creating & setting up your eLogbook account on eGCA portal with proper configuration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Flight Hours Filing</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Filing and uploading flight hours (Solo, Dual, Cross-country, Simulator, etc.) accurately.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-emerald-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Flight Categorization</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Categorizing flights correctly as per DGCA format and regulatory requirements.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-amber-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">Error Checking</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Checking and correcting data errors to avoid rejections and ensure compliance.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1200}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-purple-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">Verification & Submission</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Verification & submission guidance to ensure your log is DGCA-compliant and approved.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1400}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-green-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 via-teal-500 to-green-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-green-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors duration-300">Personalized Support</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  One-on-One Support with personalized help for students and pilots of all levels.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-white/20">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">Why Choose SkyPrep Aero</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your eLogbook Success Partners</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We ensure your flight records are accurate, verified, and DGCA-ready
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Accurate & Verified Filing</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Every entry is checked per DGCA standards to ensure accuracy and compliance.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors duration-300">Time-Saving Process</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We handle all the technical details so you can focus on your flying hours.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">Expert Guidance</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Learn the right way to maintain your logbook from aviation experts.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">One-on-One Support</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Personalized help for students and pilots at every stage of their journey.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Who Can Avail Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Who Can Avail This Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">For All Pilots and Aspiring Aviators</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our eLogbook services are designed for pilots at every stage of their aviation journey
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Student Pilot License (SPL)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Student Pilot License (SPL) holders starting their aviation journey
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Commercial Pilot License (CPL)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Commercial Pilot License (CPL) trainees advancing their careers
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">License Renewal</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  License renewal candidates maintaining their certifications
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">Experienced Pilots</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Experienced pilots transitioning to the eGCA system
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden full-bleed">
        <AviationBackground className="opacity-40" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Get Started</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Get Your eLogbook Filed Today
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Keep your flight record clean, verified, and DGCA-ready with SkyPrep Aero's eLogbook support service. 
                Let us take care of the technical side — while you focus on your flying hours!
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href={getContactUrl("elogbook")}
                      className="group px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
                      style={{
                        background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                        color: "#0f172a",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        Start eLogbook Filing
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/services/computer-number"
                      className="group px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 text-lg hover:scale-105"
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
                      href={getWhatsAppUrl("elogbook")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200 border border-green-200 rounded-lg hover:bg-green-50"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {getWhatsAppButtonText("elogbook")}
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
