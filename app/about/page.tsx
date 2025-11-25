import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "About SkyPrep Aero | India's Premier DGCA Pilot Training & Aviation Coaching Institute",
  description: "Learn about SkyPrep Aero's mission, expert mentors, and innovative DGCA-aligned training that shapes world-class aviators through personalised coaching and modern aviation education.",
  canonicalPath: "/about",
  keywords: [
    // Primary Keywords
    "About SkyPrep Aero",
    "Pilot training institute India",
    "DGCA aviation academy",
    "Aviation coaching institute",
    "DGCA ground school India",
    "Pilot mentorship India",
    "CPL coaching institute",
    "Best aviation coaching India",
    "DGCA training academy",
    // Secondary Keywords
    "innovative aviation education",
    "DGCA learning system",
    "aviation analytics training",
    "personalised pilot coaching",
    "ground school instructors India",
    "aviation team India",
    "CPL theory preparation",
    "aviation professional trainers",
    "airline pilot mentors India",
    // Long-Tail Keywords
    "about the best DGCA pilot training institute in India",
    "aviation academy with personalised coaching and mentorship",
    "how SkyPrep Aero trains world-class DGCA pilots",
    "aviation institute using AI analytics for DGCA test prep",
    "pilot training academy with one-on-one mentorship",
    "India's most innovative DGCA coaching program",
    "aviation professionals and instructors at SkyPrep Aero",
    "how SkyPrep Aero transforms DGCA ground school learning",
    // LSI Keywords
    "flight training background",
    "aviation education excellence",
    "pilot career development",
    "aviation team credentials",
    "DGCA syllabus mastery",
    "aviation leadership",
    "CPL instructor experience",
    "aviation discipline & integrity",
  ],
});

export default function AboutPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero + Mission Shared Background */}
      <section
        className="relative full-bleed overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/images/engine.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/72 to-blue-950/78" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-amber-400/18 blur-[160px]" />
        <AviationBackground className="opacity-14" />

        <div className="container-wide relative z-10 py-24">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/20">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
                  About SkyPrep Aero
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                About SkyPrep Aero — Shaping the Future of
                <span className="block gradient-text-primary">
                  Aviation Education
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_32px_rgba(15,23,42,0.65)]">
                India&apos;s premier DGCA pilot training institute offering personalised coaching,
                expert airline pilot mentorship, and innovative aviation education.
                As India&apos;s leading aviation coaching institute, we shape world-class aviators 
                through modern DGCA learning systems, AI-powered analytics, and comprehensive CPL ground classes.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <section className="relative z-10 py-20">
          <div className="container-wide">
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 px-6 py-16 backdrop-blur-xl shadow-[0_45px_120px_-60px_rgba(15,23,42,0.85)] md:px-14">
              <ScrollAnimation animationType="fadeInUp" delay={200}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                    <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                      Our Mission
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-xl text-slate-200/85 max-w-3xl mx-auto">
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
                      At SkyPrep Aero, our mission is to redefine pilot training through technology, precision, and expertise. We integrate authentic DGCA-based learning systems, AI analytics for DGCA test prep, and advanced aviation analytics training to deliver an efficient, result-oriented experience for aspiring commercial pilots.
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
                      SkyPrep Aero is committed to nurturing skilled and knowledgeable pilots who meet global aviation standards. Our structured CPL coaching programs and personalised pilot coaching with airline pilot mentors ensure every student is prepared for aviation education excellence and successful pilot career development.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Integrity at the Core of Pilot Training</h3>
                    <p className="text-slate-200/80 text-lg leading-relaxed">
                      Integrity is the cornerstone of aviation—and of SkyPrep Aero. We foster a culture of accountability, aviation discipline & integrity, and ethical conduct, shaping pilots who lead with aviation leadership and uphold the highest professional values expected in the airline industry.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
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
                    Our Journey — Transforming Aviation Education in India
                  </h2>
                  <div className="space-y-6 text-slate-200/85 text-lg leading-relaxed">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-sky-500 rounded-full"></div>
                      <p className="pl-6">
                        SkyPrep Aero was founded with a vision to transform DGCA ground school learning in India. 
                        We recognized that traditional ground classes often lacked personalization and adaptability, 
                        leaving many aspiring pilots without the guidance they truly needed from experienced aviation professional trainers.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full"></div>
                      <p className="pl-6">
                        With this in mind, SkyPrep Aero was designed to bridge that gap—combining innovative DGCA learning systems 
                        with the personal touch of India&apos;s traditional education values. As India&apos;s most innovative DGCA coaching program, 
                        our goal is simple: to make quality CPL theory preparation both effective and individualized.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                      <p className="pl-6">
                        Through one-on-one mentorship with airline pilot mentors, flexible learning schedules, and a results-driven approach, 
                        SkyPrep Aero ensures every student receives the attention, clarity, and confidence they need to achieve DGCA syllabus mastery. 
                        We&apos;re not just shaping pilots—we&apos;re shaping the future of aviation education excellence in India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInRight" delay={400}>
              <div className="relative group">
                <div className="aspect-square rounded-4xl shadow-[0_50px_120px_-60px_rgba(56,189,248,0.45)]">
                  <div className="relative h-full w-full overflow-hidden rounded-4xl transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/media/images/aboutusplane.jpg"
                      alt="SkyPrep Aero aircraft in flight"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-slate-950/20 via-slate-900/10 to-blue-900/30" />
                  </div>
                </div>

                {/* India Education Values Icon */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The SkyPrep Aero Team — Meet Our Instructors & Leadership</h2>
              <p className="text-xl text-slate-200/80 max-w-3xl mx-auto">
                Experienced ground school instructors and aviation professionals dedicated to your success
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
                      A certified Commercial Pilot trained in the USA, holding CPL licenses from both the FAA(USA) and DGCA(India). With global flight training background and extensive CPL instructor experience,
                      he brings aviation standards expertise and is on course to join the airline industry while inspiring future pilots at SkyPrep Aero.
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
                    <p className="text-sky-300 font-semibold mb-4 text-lg">Admin & Flying School Coordinator</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      Serving as Admin & Flying School Coordinator at SkyPrep Aero, Harsh manages day-to-day operations and ensures smooth coordination with flight schools across India. He oversees aviation-related services, providing pilot career development support and guidance to students for a seamless training experience.
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
                    <p className="text-emerald-300 font-semibold mb-4 text-lg">Technology & Analytics Lead</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      Varun Singh has spearheaded the innovation of SkyPrep&apos;s Test Series and AI Analytics for DGCA test prep, leveraging cutting-edge aviation analytics training technology to make learning smarter, pinpoint weaknesses, and optimize performance for aspiring pilots.
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
                    <p className="text-amber-300 font-semibold mb-4 text-lg">Founder & Assistant Ground Instructor</p>
                    <p className="text-slate-200/80 leading-relaxed">
                      The mind behind SkyPrep Aero, Prathmesh Shinde is an aviation enthusiast committed to transforming DGCA ground school learning in India with innovation, personalised pilot coaching, and a dedicated focus on student success.
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
                Ready to Begin Your Aviation Journey?
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto">
                Join hundreds of successful pilots who have achieved their aviation goals with India&apos;s best DGCA coaching institute.
                Enroll in our aviation courses and start your pilot career development today.
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