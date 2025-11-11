import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ContactForm } from "@/components/ContactForm";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { whatsappNumber } from "@/config/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch for aviation coaching and training inquiries.",
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
          <div className="absolute -bottom-28 right-0 h-[360px] w-[360px] rounded-full bg-emerald-400/18 blur-[160px]" />
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 18%, rgba(56,189,248,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 82%, rgba(16,185,129,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Let&apos;s File Your
                <span className="block gradient-text-primary">
                  Flight Plan
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-200/85 max-w-4xl mx-auto leading-relaxed">
                Tell us where you&apos;re at and where you want to go. We&apos;ll chart a clear 
                route from first lesson to checkride—with timelines, study plan, and next actions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-12 right-12 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Form card */}
            <ScrollAnimation animationType="fadeInLeft" delay={400}>
              <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">Send Us a Message</h2>
                  <p className="text-slate-200/80 text-lg">We usually reply within one business day.</p>
                </div>
                <ContactForm />
              </div>
            </ScrollAnimation>

            {/* Contact details / info */}
            <ScrollAnimation animationType="fadeInRight" delay={600}>
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="group bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6">Reach Us Directly</h3>
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_20px_50px_-25px_rgba(56,189,248,0.65)] group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-white/20 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-lg mb-1">Phone</div>
                        <a href={`tel:${whatsappNumber}`} className="text-sky-300 hover:text-sky-200 underline-offset-4 hover:underline text-lg">{whatsappNumber}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_20px_50px_-25px_rgba(6,182,212,0.65)] group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #06b6d4, #22d3ee)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-white/20 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-lg mb-1">Email</div>
                        <a href={`mailto:${siteConfig.contactEmail}`} className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline text-lg">{siteConfig.contactEmail}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_20px_50px_-25px_rgba(16,185,129,0.65)] group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-white/20 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-lg mb-1">Location</div>
                        <div className="text-slate-200/80 text-lg">Pune, India • By appointment</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_20px_50px_-25px_rgba(245,158,11,0.65)] group-hover/item:scale-110 transition-transform duration-300" 
                              style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
                            <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
                          </svg>
                        </span>
                        <div className="absolute inset-0 h-14 w-14 rounded-2xl border-2 border-white/20 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-lg mb-1">Schedule a Call</div>
                        <a href="https://calendly.com/theskyprep/new-meeting" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline-offset-4 hover:underline text-lg">Book via Calendly</a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Pro Tips Card */}
                <div className="group bg-white/[0.07] rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-2">Pro Tip</h4>
                      <p className="text-slate-200/80 leading-relaxed">
                        Include your desired timeline and any prior flight hours. It helps us tailor your personalized training plan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Helpful Details Card */}
                <div className="group bg-white/[0.07] rounded-3xl p-8 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] border border-white/12 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_55px_140px_-70px_rgba(56,189,248,0.65)] transition-all duration-500">
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Helpful Details to Include
                  </h4>
                  <ul className="grid gap-3 text-slate-200/80">
                    {[
                      "Target license or rating (e.g. CPL, IR)",
                      "Preferred training schedule (weekday/weekend)",
                      "Any constraints (budget, medical, location)",
                      "Best time to reach you (+91 contact hours)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
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
      <section className="py-20 relative overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -top-24 left-20 h-72 w-72 rounded-full bg-sky-500/22 blur-[130px]" />
          <div className="absolute -bottom-24 right-24 h-80 w-80 rounded-full bg-amber-400/18 blur-[150px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)]">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">Explore More</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl md:text-2xl text-slate-200/85 mb-12 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive training programs designed to help you achieve your aviation goals.
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
                      View Our Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="group px-12 py-5 rounded-xl font-semibold border-2 border-white/25 text-slate-100 hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105"
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


