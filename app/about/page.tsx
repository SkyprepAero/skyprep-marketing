import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
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
          <div className="text-center">
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
        </div>
    </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50 full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering pilots at every stage of their journey with personalized coaching, 
              cutting-edge training, and unwavering support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert Education</h3>
              <p className="text-slate-600 text-lg">
                Comprehensive courses designed by industry professionals with decades of flight experience.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Personal Mentorship</h3>
              <p className="text-slate-600 text-lg">
                One-on-one coaching relationships that provide guidance, support, and personalized learning paths.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Safety First</h3>
              <p className="text-slate-600 text-lg">
                Every program emphasizes safety protocols, risk management, and building confident, competent pilots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 full-bleed">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  SkyPrep was born from a simple observation: too many aspiring pilots were struggling 
                  to find quality, personalized training that truly prepared them for the challenges of modern aviation.
                </p>
                <p>
                  Founded by a team of experienced pilots, instructors, and aviation professionals, 
                  we recognized that traditional flight training often lacked the personal touch and 
                  comprehensive approach needed for success in today&apos;s competitive aviation industry.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of aviation education, combining traditional 
                  expertise with innovative teaching methods to help pilots achieve their goals safely and efficiently.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-200 to-primary-300 p-12 flex items-center justify-center shadow-2xl">
                <svg className="w-40 h-40 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" />
                </svg>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center shadow-xl">
                <svg className="w-16 h-16 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to aviation excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-200 mb-4">500+</div>
              <div className="text-slate-300 text-lg">Pilots Trained</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-200 mb-4">98%</div>
              <div className="text-slate-300 text-lg">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-200 mb-4">15+</div>
              <div className="text-slate-300 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-200 mb-4">24/7</div>
              <div className="text-slate-300 text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50 full-bleed">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced aviation professionals dedicated to your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Captain Sarah Mitchell</h3>
                  <p className="text-primary-300 font-medium mb-4 text-lg">Chief Flight Instructor</p>
                  <p className="text-slate-600">
                    Over 15 years of commercial aviation experience with expertise in multi-engine aircraft, 
                    instrument training, and airline preparation. ATP certified with 8,000+ flight hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Commander David Chen</h3>
                  <p className="text-primary-300 font-medium mb-4 text-lg">Ground School Director</p>
                  <p className="text-slate-600">
                    Former airline captain with expertise in aerodynamics, navigation, and aviation regulations. 
                    Specializes in preparing students for written exams and oral interviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Lieutenant Maria Rodriguez</h3>
                  <p className="text-primary-300 font-medium mb-4 text-lg">Safety Coordinator</p>
                  <p className="text-slate-600">
                    Former military pilot with extensive experience in safety management systems. 
                    Leads our safety training programs and risk assessment protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Captain James Thompson</h3>
                  <p className="text-primary-300 font-medium mb-4 text-lg">Career Development Specialist</p>
                  <p className="text-slate-600">
                    Former regional airline captain with deep industry connections. 
                    Specializes in helping pilots transition to commercial aviation careers.
                  </p>
                </div>
              </div>
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
              Ready to Take Flight?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
              Join hundreds of successful pilots who have achieved their aviation goals with SkyPrep. 
              Your journey to the skies starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/courses"
                className="px-12 py-5 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#0f172a",
                }}
              >
                Explore Our Courses
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors duration-200 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}