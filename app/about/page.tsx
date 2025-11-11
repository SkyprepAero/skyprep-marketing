import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description: "Learn about SkyPrep's mission, team, and commitment to aviation excellence.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-amber-400/15 blur-[160px]" />
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 12% 20%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(circle at 82% 80%, rgba(248,189,56,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  About SkyPrep Aero
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Soaring to New Heights in
                <span className="block gradient-text-primary">
                  Aviation Excellence
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-200/85 max-w-4xl mx-auto leading-relaxed">
                At SkyPrep, we believe every pilot deserves access to world-class training,
                expert mentorship, and the tools needed to achieve their aviation dreams.
                Our mission is to elevate the aviation industry through innovative coaching and comprehensive education.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 full-bleed relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-blue-950/70" />
          <div className="absolute top-16 left-0 h-72 w-72 rounded-full bg-sky-500/25 blur-[130px]" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-70" />
        </div>

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Empowering pilots at every stage of their journey with personalized coaching,
                cutting-edge training, and unwavering support.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={400}>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovating Aviation Education</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  At SkyPrep Aero, our mission is to redefine pilot training through technology, precision, and expertise. We integrate authentic DGCA-based learning systems and advanced analytics to deliver an efficient, result-oriented training experience.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Developing World-Class Aviators</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  SkyPrep Aero is committed to nurturing skilled and knowledgeable pilots who meet global aviation standards. Our structured programs and expert mentorship ensure every student is prepared for excellence in both exams and real-world aviation careers.
                </p>
              </div>

              <div className="group text-center p-8 bg-white/[0.08] backdrop-blur-xl rounded-3xl shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-400 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-white/20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upholding Integrity and Professionalism</h3>
                <p className="text-slate-200/80 text-lg leading-relaxed">
                  Integrity is the cornerstone of aviation—and of SkyPrep Aero. We foster a culture of accountability, discipline, and ethical conduct, shaping pilots who lead with responsibility and uphold the highest professional values.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/75" />
          <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-sky-500/20 blur-[150px]" />
          <div className="absolute bottom-16 left-16 h-72 w-72 rounded-full bg-amber-400/15 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:110px_110px]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollAnimation animationType="fadeInLeft" delay={200}>
              <div className="relative">
                {/* Enhanced card design */}
                <div className="bg-white/[0.08] backdrop-blur-xl rounded-4xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-700 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-full px-8 py-3 mb-8 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Our Journey</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Transforming Aviation Education in India
                  </h2>
                  <div className="space-y-6 text-slate-200/85 text-lg leading-relaxed">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-sky-500 rounded-full"></div>
                      <p className="pl-6">
                        SkyPrep Aero was founded with a vision to transform the way aviation education is delivered in India. 
                        We recognized that traditional ground classes often lacked personalization and adaptability, 
                        leaving many aspiring pilots without the guidance they truly needed.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full"></div>
                      <p className="pl-6">
                        With this in mind, SkyPrep Aero was designed to bridge that gap—combining advanced learning methods 
                        with the personal touch of India&apos;s traditional education values. Our goal is simple: to make quality 
                        pilot training both effective and individualized.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                      <p className="pl-6">
                        Through one-on-one mentorship, flexible learning schedules, and a results-driven approach, 
                        SkyPrep Aero ensures every student receives the attention, clarity, and confidence they need to excel. 
                        We&apos;re not just shaping pilots—we&apos;re shaping the future of aviation education in India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInRight" delay={400}>
              <div className="relative group">
                {/* Main Aviation Education Icon */}
                <div className="aspect-square rounded-4xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 p-12 flex items-center justify-center shadow-[0_50px_120px_-60px_rgba(56,189,248,0.45)] group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                  </svg>
                </div>
                
                {/* India Education Values Icon */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                </div>
                
                {/* Mentorship Icon */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                
                {/* Future Vision Icon */}
                <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                {/* Learning Path Icon */}
                <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                
                {/* Success Achievement Icon */}
                <div className="absolute bottom-1/4 -right-2 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/92 to-blue-950/75" />
          <div className="absolute top-12 left-14 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-20 right-16 h-80 w-80 rounded-full bg-emerald-400/18 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Our Team
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Minds Behind SkyPrep Aero</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Experienced aviation professionals dedicated to your success
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={400}>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-white/20 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Capt Vimal Singh</h3>
                    <p className="text-sky-300 font-semibold mb-4 text-lg">Ground School Instructor</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      A certified Commercial Pilot trained in the USA, holding CPL licenses from both the FAA(USA) and DGCA(India). With global flying experience and a strong command of aviation standards,
                      he is on course to join the airline industry while inspiring future pilots at SkyPrep Aero.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-white/20 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Harsh Jamewar</h3>
                    <p className="text-sky-300 font-semibold mb-4 text-lg">Admin</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      Serving as Admin & Flying School Coordinator at SkyPrep Aero, Harsh manages day-to-day operations and ensures smooth coordination with flight schools. He also oversees aviation-related services, providing support and guidance to students for a seamless training experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-white/20 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Varun Singh</h3>
                    <p className="text-emerald-300 font-semibold mb-4 text-lg">Technology Management</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      Varun Singh has spearheaded the innovation of SkyPrep’s Test Series and AI Analytics, leveraging cutting-edge technology to make learning smarter, pinpoint weaknesses, and optimize performance for aspiring pilots.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)]">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-white/20 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Prathmesh Shinde</h3>
                    <p className="text-amber-300 font-semibold mb-4 text-lg">Assistant Ground Instructor</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      Mind behind SkyPrep Aero, Prathmesh Shinde is an aviation enthusiast committed to transforming pilot training in India with innovation, personalised learning, and a focus on student success.
                    </p>
                  </div>
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
        <AviationBackground className="opacity-5" />
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
                Ready to Take Flight?
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto">
                Join hundreds of successful pilots who have achieved their aviation goals with SkyPrep.
                Your journey to the skies starts here.
              </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/courses"
                    className="group px-12 py-5 rounded-xl font-semibold text-slate-950 shadow-[0_25px_70px_-40px_rgba(245,158,11,0.75)] transition-all duration-300 text-lg hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Explore Our Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-12 py-5 rounded-xl font-semibold border-2 border-white/25 text-slate-100 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105"
                  >
                    <span className="flex items-center gap-3">
                      Get in Touch
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