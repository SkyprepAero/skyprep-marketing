import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviation Cohorts - Group Training Programs",
  description: "Join our structured cohort programs for collaborative learning, peer support, and comprehensive aviation training.",
  canonicalPath: "/services/cohorts",
});

export default function CohortsPage() {
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
                <span className="text-blue-800 text-sm font-semibold">Group Learning Programs</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8">
                Aviation
                <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">
                  Cohorts
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Join our comprehensive 4-month cohort program designed for collaborative learning, peer support, 
                and effective DGCA exam preparation. Master key aviation subjects alongside fellow aviators.
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
                <span className="text-blue-800 text-sm font-semibold">Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Choose Cohort Learning?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Collaborative learning that accelerates your aviation journey
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={400}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Peer Learning</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Learn from fellow students and share experiences, challenges, and successes in a supportive environment.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Structured Timeline</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Follow a carefully designed curriculum with clear milestones and regular progress assessments.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-emerald-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Cost Effective</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Access high-quality training at a fraction of individual coaching costs while maintaining personalized attention.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-amber-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">Accelerated Progress</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Stay motivated and on track with regular group sessions and peer accountability.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-purple-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">Network Building</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Build lasting relationships with fellow aviation enthusiasts and industry professionals.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-green-300 h-full flex flex-col">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 via-teal-500 to-green-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-green-400/30 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors duration-300">Proven Results</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  Join cohorts with high success rates and proven track records of student achievement.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
        
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Program Details</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Cohort Program Overview</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our comprehensive 4-month program covers essential aviation subjects for DGCA exam preparation
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="scaleIn" delay={400}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-blue-200/50 mb-16 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full px-8 py-3 mb-6 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">DGCA Preparation</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">DGCA Exam Preparation Cohort</h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  We offer a comprehensive online batch course to help you master key aviation subjects and prepare effectively for your DGCA exams.
                </p>
              </div>

              <div className="text-center mb-12">
                <h4 className="text-2xl font-semibold text-slate-900 mb-6">Subjects Covered:</h4>
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                  <span className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">Air Regulation</span>
                  <span className="text-slate-400 text-2xl">|</span>
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">Aviation Meteorology</span>
                  <span className="text-slate-400 text-2xl">|</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">Air Navigation</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Interactive Online Classes</h4>
                  <p className="text-slate-600 text-sm">Live sessions with expert instructors</p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">Revision Sessions</h4>
                  <p className="text-slate-600 text-sm">Comprehensive review of all topics</p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Doubt-Clearing Sessions</h4>
                  <p className="text-slate-600 text-sm">Dedicated Q&A time with instructors</p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Study Materials & Notes</h4>
                  <p className="text-slate-600 text-sm">Comprehensive resources and guides</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={600}>
            <div className="text-center space-y-4">
              <Link
                href={getContactUrl("cohorts")}
                className="group inline-block px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#0f172a",
                }}
              >
                <span className="flex items-center gap-3">
                  Join the Next Cohort
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                  </svg>
                </span>
              </Link>
              <div>
                <a
                  href={getWhatsAppUrl("cohorts")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {getWhatsAppButtonText("cohorts")}
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Coming Soon Section */}
          <ScrollAnimation animationType="fadeInUp" delay={800}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-amber-200/50">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-amber-800 text-sm font-semibold">Launching Soon</span>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Coming Soon</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Exciting new cohort programs launching soon to expand your aviation knowledge
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Aviation Subject */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-xl border-2 border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 shadow-lg">
                      <span className="text-white font-bold text-sm">COMING SOON</span>
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-6">
                      Aviation Subject
                    </h4>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-md border border-amber-200/50 hover:shadow-lg transition-all duration-300">
                      <h5 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Technical General
                      </h5>
                      <p className="text-slate-600 leading-relaxed">
                        Covers aircraft systems, principles, and operations, providing aspiring pilots with essential 
                        technical knowledge for both theory and practical applications.
                      </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-md border border-amber-200/50 hover:shadow-lg transition-all duration-300">
                      <h5 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Radio Telephony Restricted (RTR)
                      </h5>
                      <p className="text-slate-600 leading-relaxed">
                        Focuses on the rules, procedures, and communication protocols for aviation radio operations. 
                        This course equips aspiring pilots with the skills to communicate effectively and safely in the skies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Coming Soon Programs */}
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-10 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mb-6 shadow-lg">
                      <span className="text-white font-bold text-sm">STAY TUNED</span>
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-6">
                      More Programs
                    </h4>
                  </div>

                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-xl">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                      </div>
                      <p className="text-lg text-slate-600 max-w-sm mx-auto leading-relaxed">
                        We&apos;re continuously expanding our cohort offerings. Check back soon for more specialized aviation programs!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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
                Join Your Aviation Cohort Today
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Don&apos;t miss out on the next cohort intake. Limited spots available for our 4-month program. 
                Apply now and start your DGCA exam preparation journey with like-minded aviation enthusiasts.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="group px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      color: "#0f172a",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Apply Now
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/services/1-to-1-coaching"
                    className="group px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 text-lg hover:scale-105"
                  >
                    <span className="flex items-center gap-3">
                      Explore One to One Coaching
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
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
