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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <AviationBackground className="opacity-60" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
          <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">About SkyPrep Aero</span>
              </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8">
              Soaring to New Heights in
              <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">
                Aviation Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At SkyPrep, we believe every pilot deserves access to world-class training, 
              expert mentorship, and the tools needed to achieve their aviation dreams. 
              Our mission is to elevate the aviation industry through innovative coaching and comprehensive education.
            </p>
          </div>
          </ScrollAnimation>
        </div>
    </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50 full-bleed relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
          <div className="absolute inset-0 overflow-hidden">
            {/* Aviation-themed background graphics */}
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
                <span className="text-blue-800 text-sm font-semibold">Our Mission</span>
              </div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering pilots at every stage of their journey with personalized coaching, 
              cutting-edge training, and unwavering support.
            </p>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={400}>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400/30 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Innovating Aviation Education</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                At SkyPrep Aero, our mission is to redefine pilot training through technology, precision, and expertise. We integrate authentic DGCA-based learning systems and advanced analytics to deliver an efficient, result-oriented training experience.
              </p>
            </div>

            <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                </svg>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-sky-400/30 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">Developing World-Class Aviators</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                SkyPrep Aero is committed to nurturing skilled and knowledgeable pilots who meet global aviation standards. Our structured programs and expert mentorship ensure every student is prepared for excellence in both exams and real-world aviation careers.
              </p>
            </div>

            <div className="group text-center p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-emerald-300">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Upholding Integrity and Professionalism</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Integrity is the cornerstone of aviation—and of SkyPrep Aero. We foster a culture of accountability, discipline, and ethical conduct, shaping pilots who lead with responsibility and uphold the highest professional values.
              </p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 full-bleed relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50"></div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollAnimation animationType="fadeInLeft" delay={200}>
              <div className="relative">
                {/* Enhanced card design */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-700">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full px-8 py-3 mb-8 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Our Journey</span>
                  </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                  Transforming Aviation Education in India
                </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
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
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 p-12 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
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
      <section className="py-20 bg-slate-50 full-bleed relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle aviation graphics */}
            <div className="absolute top-20 left-20 w-20 h-20 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute bottom-20 right-20 w-24 h-24 opacity-5">
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
                <span className="text-blue-800 text-sm font-semibold">Our Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">The Minds Behind SkyPrep Aero</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced aviation professionals dedicated to your success
            </p>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="fadeInUp" delay={400}>
          <div className="grid lg:grid-cols-2 gap-10">
              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300">
              <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">Capt Vimal Singh</h3>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">Ground School Instructor</p>
                    <p className="text-slate-600 leading-relaxed">
                    A certified Commercial Pilot trained in the USA, holding CPL licenses from both the FAA(USA) and DGCA(India). With global flying experience and a strong command of aviation standards,
                    he is on course to join the airline industry while inspiring future pilots at SkyPrep Aero
                  </p>
                </div>
              </div>
            </div>

              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-lg border border-sky-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-sky-300">
              <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-sky-400/30 animate-pulse" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">Harsh Jamewar</h3>
                    <p className="text-sky-600 font-semibold mb-4 text-lg">Admin</p>
                    <p className="text-slate-600 leading-relaxed">
                    Serving as Admin & Flying School Coordinator at SkyPrep Aero, Harsh manages day-to-day operations and ensures smooth coordination with flight schools. He also oversees aviation-related services, providing support and guidance to students for a seamless training experience.
                  </p>
                </div>
              </div>
            </div>

              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-emerald-300">
              <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">Varun Singh </h3>
                    <p className="text-emerald-600 font-semibold mb-4 text-lg">Technology Management</p>
                    <p className="text-slate-600 leading-relaxed">
                    Varun Singh has spearheaded the innovation of SkyPrep’s Test Series and AI Analytics, leveraging cutting-edge technology to make learning smarter, pinpoint weaknesses, and optimize performance for aspiring pilots.
                  </p>
                </div>
              </div>
            </div>

              <div className="group bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-amber-300">
              <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">Captain James Thompson</h3>
                    <p className="text-amber-600 font-semibold mb-4 text-lg">Career Development Specialist</p>
                    <p className="text-slate-600 leading-relaxed">
                    Join successful pilots who have achieved their aviation goals with SkyPrep Aero. Your journey to the skies starts now.
                  </p>
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
               Ready to Take Flight?
             </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
              Join hundreds of successful pilots who have achieved their aviation goals with SkyPrep. 
              Your journey to the skies starts here.
            </p>
              <ScrollAnimation animationType="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/courses"
                    className="group px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#0f172a",
                }}
              >
                    <span className="flex items-center gap-3">
                Explore Our Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                      </svg>
                    </span>
              </Link>
              <Link
                href="/contact"
                    className="group px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 text-lg hover:scale-105"
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