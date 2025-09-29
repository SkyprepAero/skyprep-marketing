import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl, getWhatsAppButtonText } from "@/config/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Individual Subject Training - Specialized Aviation Courses",
  description: "Master individual aviation subjects with focused, specialized training courses designed for targeted learning.",
  canonicalPath: "/services/subject-wise",
});

export default function SubjectWisePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <AviationBackground className="opacity-60" />
        <div className="container-wide relative z-10">
          <div className="text-center">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Why Choose Subject Wise Training?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Focus on specific areas where you need the most improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Focused Learning</h3>
              <p className="text-slate-600 text-lg">
                Concentrate on specific subjects where you need the most improvement or reinforcement.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Flexible Duration</h3>
              <p className="text-slate-600 text-lg">
                Choose the duration that fits your schedule - from intensive short courses to extended programs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Specialized Content</h3>
              <p className="text-slate-600 text-lg">
                Deep dive into specific topics with expert instructors who specialize in each subject area.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quick Progress</h3>
              <p className="text-slate-600 text-lg">
                Accelerate your learning in specific areas with concentrated, focused instruction and practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Subjects */}
      <section className="py-20 full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Available Subjects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of specialized aviation subjects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Air Regulation */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Air Regulation</h3>
              <p className="text-slate-600 mb-6 text-center">
                Master aviation laws, rules, and regulations governing flight operations and safety standards.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Civil Aviation Regulations
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Air Traffic Control Procedures
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flight Safety Regulations
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  DGCA Guidelines
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href={getContactUrl("subject-wise")}
                  className="inline-block px-8 py-3 rounded-lg font-semibold border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors duration-200"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Air Meteorology */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Air Meteorology</h3>
              <p className="text-slate-600 mb-6 text-center">
                Understand weather patterns, atmospheric conditions, and their impact on aviation safety and operations.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather Systems Analysis
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Atmospheric Pressure
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wind Patterns & Jet Streams
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather Forecasting
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href={getContactUrl("subject-wise")}
                  className="inline-block px-8 py-3 rounded-lg font-semibold border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors duration-200"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Air Navigation */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Air Navigation</h3>
              <p className="text-slate-600 mb-6 text-center">
                Master navigation techniques, instruments, and procedures for safe and efficient flight planning.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dead Reckoning
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Radio Navigation Aids
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GPS & Modern Navigation
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flight Planning
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href={getContactUrl("subject-wise")}
                  className="inline-block px-8 py-3 rounded-lg font-semibold border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors duration-200"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 bg-slate-50 full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Training Formats</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the learning format that works best for your schedule and learning style
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Live Online Classes</h3>
              <p className="text-slate-600 mb-6 text-center">
                Interactive live sessions with expert instructors, real-time Q&A, and immediate feedback.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Interactive sessions with instructors
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time doubt clearing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling options
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Self-Paced Learning</h3>
              <p className="text-slate-600 mb-6 text-center">
                Learn at your own pace with comprehensive study materials, recorded sessions, and progress tracking.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive study materials
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recorded lecture sessions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Progress tracking & assessments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden full-bleed">
        <AviationBackground className="opacity-40" />
        <div className="container-wide relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Start Your Individual Subject Training
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
              Choose your preferred subject and training format. Focus on specific areas where you need the most improvement and accelerate your aviation knowledge.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href={getContactUrl("subject-wise")}
                  className="px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    color: "#0f172a",
                  }}
                >
                  Enroll in Subject Course
                </Link>
                <Link
                  href="/services/1-to-1-coaching"
                  className="px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors duration-200 text-lg"
                >
                  Explore 1-to-1 Coaching
                </Link>
              </div>
              <div>
                <a
                  href={getWhatsAppUrl("subject-wise")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200 border border-green-200 rounded-lg hover:bg-green-50"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {getWhatsAppButtonText("subject-wise")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
