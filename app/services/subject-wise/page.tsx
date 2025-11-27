import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl } from "@/config/services";
import { redirect } from "next/navigation";

export const metadata: Metadata = buildPageMetadata({
  title: "Individual Subject Training - Specialized Aviation Courses",
  description: "Master individual aviation subjects with focused, specialized training courses designed for targeted learning.",
  canonicalPath: "/services/subject-wise",
});

export default function SubjectWisePage() {
  // Temporarily disabled - will be needed later
  redirect("/");
  
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
                <span className="text-blue-800 text-sm font-semibold">Specialized Courses</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Individual Subject
                <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent leading-tight">
                  Training
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Master individual aviation subjects with focused, specialized training courses designed for targeted learning and skill development.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        {/* Enhanced Background */}
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
                <span className="text-blue-800 text-sm font-semibold">Key Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Choose Subject Wise Training?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Focus on specific areas where you need the most improvement
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={400}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Focused Learning</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Concentrate on specific subjects where you need the most improvement or reinforcement.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={600}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Flexible Duration</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Choose the duration that fits your schedule - from intensive short courses to extended programs.
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Specialized Content</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Deep dive into specific topics with expert instructors who specialize in each subject area.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInUp" delay={1000}>
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-amber-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">Quick Progress</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Accelerate your learning in specific areas with concentrated, focused instruction and practice.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Available Subjects */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Course Catalog</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Available Subjects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of specialized aviation subjects
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Air Regulation */}
            <ScrollAnimation animationType="scaleIn" delay={400}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">Air Regulation</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  Master aviation laws, rules, and regulations governing flight operations and safety standards.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Civil Aviation Regulations
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Air Traffic Control Procedures
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Flight Safety Regulations
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    DGCA Guidelines
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href={getContactUrl("subject-wise")}
                    className="group/btn inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Enroll Now
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Aviation Meteorology */}
            <ScrollAnimation animationType="scaleIn" delay={600}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-sky-600 transition-colors duration-300">Aviation Meteorology</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  Understand weather patterns, atmospheric conditions, and their impact on aviation safety and operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Weather Systems Analysis
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Atmospheric Pressure
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Wind Patterns & Jet Streams
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Weather Forecasting
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href={getContactUrl("subject-wise")}
                    className="group/btn inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Enroll Now
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Air Navigation */}
            <ScrollAnimation animationType="scaleIn" delay={800}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Air Navigation</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  Master navigation techniques, instruments, and procedures for safe and efficient flight planning.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Dead Reckoning
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Radio Navigation Aids
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    GPS & Modern Navigation
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Flight Planning
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href={getContactUrl("subject-wise")}
                    className="group/btn inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Enroll Now
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 full-bleed relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-40 left-20 w-14 h-14 opacity-12">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                <path d="M50 12 L68 32 L88 37 L73 52 L88 67 L68 72 L50 88 L32 72 L12 67 L27 52 L12 37 L32 32 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Learning Options</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Training Formats</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the learning format that works best for your schedule and learning style
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation animationType="fadeInLeft" delay={400}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">Live Online Classes</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  Interactive live sessions with expert instructors, real-time Q&A, and immediate feedback.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Interactive sessions with instructors
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Real-time doubt clearing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Flexible scheduling options
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeInRight" delay={600}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-xl border-2 border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Self-Paced Learning</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">
                  Learn at your own pace with comprehensive study materials, recorded sessions, and progress tracking.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Comprehensive study materials
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Recorded lecture sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Progress tracking & assessments
                  </li>
                </ul>
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
                Start Your Individual Subject Training
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Choose your preferred subject and training format. Focus on specific areas where you need the most improvement and accelerate your aviation knowledge.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={getWhatsAppUrl("subject-wise")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Get Started on WhatsApp
                  </a>
                  
                  <Link
                    href={getContactUrl("subject-wise")}
                    className="px-8 py-4 bg-transparent text-slate-700 rounded-full font-bold text-lg border-2 border-slate-300 hover:bg-slate-50 hover:border-blue-500 transition-all duration-300 hover:scale-105"
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
