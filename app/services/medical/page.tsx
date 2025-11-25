import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { whatsappNumber } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "DGCA Medical Support | Class 1 & Class 2 Pilot Medical Appointments | SkyPrep Aero",
  description: "Get DGCA Class 1 and Class 2 medical appointments hassle-free. SkyPrep Aero helps you book certified examiners, complete tests, and secure your pilot medical clearance on time.",
  canonicalPath: "/services/medical",
  keywords: [
    // Primary Keywords
    "DGCA medical",
    "DGCA Class 1 medical",
    "DGCA Class 2 medical",
    "DGCA medical appointment",
    "Pilot medical examination India",
    "DGCA medical assistance",
    "Class 1 pilot medical check",
    "Class 2 pilot medical check",
    "DGCA medical booking",
    "DGCA approved doctors",
    // Secondary Keywords
    "DGCA medical exam process",
    "DGCA medical eligibility",
    "pilot health clearance India",
    "medical requirements for CPL",
    "aviation medical India",
    "SPL medical test DGCA",
    "PPL medical India",
    "DGCA-approved medical centers",
    "pilot ECG test DGCA",
    "aviation medical help",
    // Long-Tail Keywords
    "how to book DGCA Class 1 medical in India",
    "DGCA medical requirements for aspiring pilots",
    "Class 2 DGCA medical documents and process",
    "DGCA pilot medical exam step-by-step guide",
    "quickest way to schedule DGCA Class 1 medical",
    "DGCA medical support for pilot students",
    "where to get DGCA-approved medical examinations",
    "SPL and CPL medical requirements explained",
    // LSI Keywords
    "aviation medical fitness",
    "DGCA pilot health tests",
    "medical examiner DGCA",
    "vision requirements for pilots",
    "ECG for pilots",
    "X-ray pilot medical",
    "hearing test aviation",
    "medical certification India aviation",
    "DGCA licensing process",
  ],
});

export default function MedicalPage() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?`;

  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/media/images/medical.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              filter: "grayscale(10%)",
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
              <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-38px_rgba(15,23,42,0.8)] border border-white/30">
                <div className="w-3 h-3 bg-sky-300 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  DGCA Medical Support
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                DGCA Medical Appointment Assistance —
                <span className="block gradient-text-primary leading-tight">
                  Class 1 & Class 2 Medicals Made Easy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-4 drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                Book Your DGCA Medical Appointment — Hassle-Free & On Time
              </p>
              <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_10px_26px_rgba(15,23,42,0.6)]">
                Before you take flight, ensure your aviation medical fitness is cleared. At SkyPrep Aero, we help aspiring and licensed pilots schedule their DGCA Class 1 medical and Class 2 pilot medical check with DGCA approved doctors.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

       {/* Introduction Section */}
       <section className="py-20 full-bleed relative overflow-hidden">
         <div className="pointer-events-none absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/92 to-blue-950/75" />
           <div className="absolute top-16 left-8 h-64 w-64 rounded-full bg-sky-500/22 blur-[140px]" />
           <div className="absolute bottom-10 right-12 h-72 w-72 rounded-full bg-emerald-400/15 blur-[150px]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
         </div>
         
         <div className="container-wide relative z-10">
           <ScrollAnimation animationType="fadeInUp" delay={200}>
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                 <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                 <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                   Medical Overview
                 </span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Medical Certification Made Simple</h2>
               <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                 Whether you&apos;re starting with SPL medical test DGCA or progressing toward medical requirements for CPL, our team ensures your DGCA medical certification India aviation process is smooth, transparent, and stress-free.
               </p>
             </div>
           </ScrollAnimation>
         </div>
       </section>

      {/* Medical Class Options Section - Interactive Flow */}
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-white/20">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">Medical Certification Journey</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Your Path to DGCA Medical Clearance</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Choose your pilot medical examination India level and let us guide you through the DGCA pilot medical exam step-by-step
              </p>
            </div>
          </ScrollAnimation>

          {/* Interactive Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Step 1: Choose Your Path */}
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-100 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em] mb-8">
                  <span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-sm">1</span>
                  Choose Your Certification Level
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Which medical class do you need?</h3>
                <p className="text-blue-200 text-lg">Select the appropriate level based on your pilot license goals</p>
              </div>
            </ScrollAnimation>

            {/* Medical Class Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Class 2 Medical */}
              <ScrollAnimation animationType="fadeInLeft" delay={600}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Class 2 Medical for SPL & PPL Aspirants</h3>
                        <p className="text-blue-200 font-semibold">Class 2 DGCA Medical | PPL Medical India</p>
                        <div className="flex items-center gap-2 text-blue-300 text-sm mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>1-2 days completion</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Includes:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Physical exam</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Vision & hearing</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>ECG checks</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Blood tests</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/918788162210?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Class%202%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Get Started
                      </a>
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-xl font-semibold text-center transition-all duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Class 1 Medical */}
              <ScrollAnimation animationType="fadeInRight" delay={600}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Class 1 Medical for CPL & ATPL Candidates</h3>
                        <p className="text-amber-200 font-semibold">CPL Medical DGCA | Advanced Aviation Medical Tests</p>
                        <div className="flex items-center gap-2 text-amber-300 text-sm mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>3-5 days completion</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Includes:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-amber-200 text-sm">
                            <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Full assessment</span>
                          </div>
                          <div className="flex items-center gap-2 text-amber-200 text-sm">
                            <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Color vision tests</span>
                          </div>
                          <div className="flex items-center gap-2 text-amber-200 text-sm">
                            <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>X-ray & ECG</span>
                          </div>
                          <div className="flex items-center gap-2 text-amber-200 text-sm">
                            <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Specialized tests</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/918788162210?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Class%201%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Get Started
                      </a>
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-xl font-semibold text-center transition-all duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Process Steps */}
            <ScrollAnimation animationType="fadeInUp" delay={800}>
              <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/12 p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-100 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                    <span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-sm">2</span>
                    Our Process
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">How We Help You Through the Medical Process</h3>
                  <p className="text-blue-200">DGCA appointment booking, pilot medical scheduling, and aviation medical support</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">1. Consultation</h4>
                    <p className="text-blue-200 text-sm">We assess your DGCA medical eligibility and guide you to the right medical class</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">2. DGCA Medical Booking</h4>
                    <p className="text-blue-200 text-sm">We schedule your appointment with DGCA-approved medical centers and verified doctors</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">3. Medical Certification</h4>
                    <p className="text-blue-200 text-sm">Complete DGCA pilot health tests and receive your aviation health certificate</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-16 right-12 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-12 left-14 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Advantage
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose SkyPrep Aero for DGCA Medical Support</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                DGCA medical guidance with verified doctors and comprehensive medical exam support
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End DGCA Medical Guidance</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  From registration to final DGCA licensing process approval, we provide complete DGCA medical assistance every step
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={500}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Verified DGCA Approved Doctors</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Only certified medical examiner DGCA authorized—where to get DGCA-approved medical examinations
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick DGCA Medical Scheduling</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  Quickest way to schedule DGCA Class 1 medical with priority booking and flexible slot options
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={700}>
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Aviation Medical Help</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed flex-grow">
                  DGCA medical support for pilot students—we help you choose the best DGCA-approved medical centers per your location
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 full-bleed relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-600 to-blue-700" />
         <div className="absolute inset-0 overflow-hidden opacity-10">
           <div className="absolute top-10 left-20 w-32 h-32">
             <svg viewBox="0 0 100 100" className="w-full h-full text-white">
               <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
             </svg>
           </div>
           <div className="absolute bottom-20 right-20 w-40 h-40">
             <svg viewBox="0 0 100 100" className="w-full h-full text-white">
               <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
               <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
               <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
             </svg>
           </div>
         </div>

         <div className="container-wide relative z-10">
           <ScrollAnimation animationType="fadeInUp" delay={200}>
             <div className="text-center max-w-4xl mx-auto">
               <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-white/30">
                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                 <span className="text-white text-sm font-semibold">Take Action Now</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                 Book Your DGCA Medical Appointment Today
               </h2>
               <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                 Take the first step toward pilot health clearance India with confidence. Our team will connect you with DGCA-authorized examiners for your pilot medical appointment and aviation health certificate — so you can focus on flying high.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                 <a
                   href={whatsappUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                 >
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                   </svg>
                   Contact us on WhatsApp
                 </a>
                 
                 <Link
                   href="/contact"
                   className="px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"
                 >
                   Send us an enquiry
                 </Link>
               </div>
             </div>
           </ScrollAnimation>
         </div>
       </section>
     </div>
   );
 }

