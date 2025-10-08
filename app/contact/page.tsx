import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ContactForm } from "@/components/ContactForm";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch for aviation coaching and training inquiries.",
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed">
        <AviationBackground className="opacity-60" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Let&apos;s File Your
                <span className="block bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">
                  Flight Plan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Tell us where you&apos;re at and where you want to go. We&apos;ll chart a clear 
                route from first lesson to checkride—with timelines, study plan, and next actions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
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
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Form card */}
            <ScrollAnimation animationType="fadeInLeft" delay={400}>
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
                  <p className="text-slate-600 text-lg">We usually reply within one business day.</p>
                </div>
                <ContactForm />
              </div>
            </ScrollAnimation>

            {/* Contact details / info */}
            <ScrollAnimation animationType="fadeInRight" delay={600}>
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border-2 border-sky-200/50 hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Reach Us Directly</h3>
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-blue-400/30 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg mb-1">Phone</div>
                        <a href="tel:+919588611248" className="text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline text-lg">+91 9588611248</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #06b6d4, #22d3ee)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-cyan-400/30 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg mb-1">Email</div>
                        <a href="mailto:theskyprep@gmail.com" className="text-cyan-600 hover:text-cyan-700 underline-offset-4 hover:underline text-lg">theskyprep@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-emerald-400/30 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg mb-1">Location</div>
                        <div className="text-slate-700 text-lg">Pune, India • By appointment</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
                            <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-amber-400/30 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg mb-1">Schedule a Call</div>
                        <a href="https://calendly.com/theskyprep/new-meeting" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline-offset-4 hover:underline text-lg">Book via Calendly</a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Pro Tips Card */}
                <div className="group bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 shadow-xl border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2">Pro Tip</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Include your desired timeline and any prior flight hours. It helps us tailor your personalized training plan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Helpful Details Card */}
                <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-200/50 hover:shadow-2xl transition-all duration-500">
                  <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Helpful Details to Include
                  </h4>
                  <ul className="grid gap-3 text-slate-700">
                    {[
                      "Target license or rating (e.g. PPL, CPL, IR)",
                      "Preferred training schedule (weekday/weekend)",
                      "Any constraints (budget, medical, location)",
                      "Best time to reach you (+91 contact hours)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden full-bleed">
        <AviationBackground className="opacity-40" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-800 text-sm font-semibold">Explore More</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive training programs designed to help you achieve your aviation goals.
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
                      View Our Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="group px-12 py-5 rounded-xl font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 text-lg hover:scale-105"
                  >
                    <span className="flex items-center gap-3">
                      Learn About Us
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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


