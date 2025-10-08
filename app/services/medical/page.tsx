import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "DGCA Medical Appointment Assistance - Medical Certification Made Easy",
  description: "Get your DGCA Class 1 and Class 2 medical examinations scheduled hassle-free. We assist with SPL, PPL, CPL medical appointments and documentation.",
  canonicalPath: "/services/medical",
});

export default function MedicalPage() {
  const whatsappUrl = "https://wa.me/919588611284?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <AviationBackground className="opacity-60" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                DGCA Medical
                <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent leading-tight">
                  Appointment Assistance
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-4">
                Get Your DGCA Medicals Done — Hassle-Free & On Time
              </p>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                Before you take flight, ensure your health is cleared for the skies. At SkyPrep Aero, we help aspiring and licensed pilots schedule their DGCA Class 2 and Class 1 medical examinations with ease and convenience.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

       {/* Introduction Section */}
       <section className="py-20 full-bleed relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
               <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                 <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
               </svg>
             </div>
           </div>
         </div>
         
         <div className="container-wide relative z-10">
           <ScrollAnimation animationType="fadeInUp" delay={200}>
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Medical Certification Made Simple</h2>
               <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                 Whether you&apos;re just starting with your Student Pilot License (SPL) or progressing toward your Commercial Pilot License (CPL), our team ensures your medical certification process is smooth, transparent, and stress-free.
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
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Your Path to Medical Clearance</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Choose your certification level and let us guide you through the entire process
              </p>
            </div>
          </ScrollAnimation>

          {/* Interactive Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Step 1: Choose Your Path */}
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">1</span>
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
                        <h3 className="text-2xl font-bold text-white">Class 2 Medical</h3>
                        <p className="text-blue-200 font-semibold">For SPL & PPL Aspirants</p>
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
                        href="https://wa.me/919588611284?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Class%202%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?"
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
                        <h3 className="text-2xl font-bold text-white">Class 1 Medical</h3>
                        <p className="text-amber-200 font-semibold">For CPL & ATPL</p>
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
                        href="https://wa.me/919588611284?text=Hi%20SkyPrep%20Aero!%20I'm%20interested%20in%20DGCA%20Class%201%20Medical%20Appointment%20Assistance.%20Can%20you%20please%20provide%20more%20details?"
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
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">2</span>
                    Our Process
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">How We Help You</h3>
                  <p className="text-blue-200">From consultation to certification completion</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">1. Consultation</h4>
                    <p className="text-blue-200 text-sm">We assess your requirements and guide you to the right medical class</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">2. Appointment Booking</h4>
                    <p className="text-blue-200 text-sm">We book your appointment with DGCA-approved medical centers</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">3. Certification</h4>
                    <p className="text-blue-200 text-sm">Complete your medical examination and receive your certification</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-16 h-16 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Our Advantage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Choose SkyPrep Aero for Your Medical Appointments</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive support throughout your medical certification journey
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">End-to-End Guidance</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  From registration to final DGCA approval, we guide you every step of the way
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={500}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Verified DGCA Doctors</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Only certified and approved examiners authorized by DGCA
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-amber-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">Quick Scheduling</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Priority booking and flexible slot options for your convenience
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={700}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-green-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-green-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors duration-300">Personalized Support</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  We help you choose the best center as per your location and convenience
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
                 Book Your Appointment Today
               </h2>
               <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                 Take the first step toward your aviation career with confidence. Our team will connect you with DGCA-authorized examiners and guide you through every step — so you can focus on what truly matters: flying high.
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

