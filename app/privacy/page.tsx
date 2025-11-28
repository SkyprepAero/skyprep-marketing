import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | SkyPrep Aero",
  description:
    "SkyPrep Aero's Privacy Policy outlines how we collect, use, store, and protect student information in compliance with India's DPDP Act 2023 and international data protection laws.",
  canonicalPath: "/privacy",
  keywords: [
    "SkyPrep Aero privacy policy",
    "data protection policy",
    "student privacy",
    "DPDP Act 2023 compliance",
    "aviation training privacy",
    "data security",
    "student information protection",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative full-bleed overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
          <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-500/25 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-amber-400/18 blur-[160px]" />
        </div>
        <AviationBackground className="opacity-12" />
        <div className="container-wide relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.45)] border border-white/20">
              <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
              SkyPrep Aero – Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-200/85 max-w-3xl mx-auto leading-relaxed">
              <strong>Last Updated:</strong> 28 November 2025
              <br />
              <strong>Company Location:</strong> Pune, Maharashtra, India
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="container-wide relative z-10 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/12 bg-slate-950/70 px-6 py-16 backdrop-blur-xl shadow-[0_45px_120px_-60px_rgba(15,23,42,0.85)] md:px-14">
              <p className="text-lg text-slate-200/90 leading-relaxed mb-12">
                SkyPrep Aero (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates Focus-One Program, Cohorts Program, Test Series, and all related digital learning platforms. This Privacy Policy explains how we collect, use, store, secure, and share student information in compliance with the Digital Personal Data Protection Act (DPDP) 2023, and applicable international data laws.
              </p>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-slate-200 mb-4 mt-6">1.1 Student Information</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>DGCA Details (SPL, Computer Number, exam information)</li>
                  <li>Course & Batch Details</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-200 mb-4 mt-6">1.2 Account Login & Technical Data</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>IP Address</li>
                  <li>Device & Browser Type</li>
                  <li>Login timestamps and usage logs</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-200 mb-4 mt-6">1.3 Payment Information</h3>
                <p className="text-slate-300/90 mb-4">
                  Transaction details processed through secure third-party payment gateways
                </p>
                <p className="text-slate-300/70 mb-6 italic">
                  (We do NOT store full card/banking details on our servers.)
                </p>

                <h3 className="text-xl font-semibold text-slate-200 mb-4 mt-6">1.4 Video Session & Platform Usage Data</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Attendance logs</li>
                  <li>Test performance</li>
                  <li>Session recordings</li>
                  <li>Interaction data for analytics</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-200 mb-4 mt-6">1.5 Cookies & Analytics</h3>
                <p className="text-slate-300/90 mb-4">
                  We use cookies and tracking tools to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Improve website performance</li>
                  <li>Personalize learning experience</li>
                  <li>Analyze user behavior for platform enhancements</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Student Data</h2>
                <p className="text-slate-300/90 mb-4">
                  Data is used only for educational and operational purposes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Delivering course content and test series</li>
                  <li>Providing doubt support</li>
                  <li>Progress tracking & performance analytics</li>
                  <li>Communication about classes, exams, updates</li>
                  <li>Certificate issuance</li>
                  <li>Internal quality checks and improvements</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">3. Data Sharing with Service Providers</h2>
                <p className="text-slate-300/90 mb-4">
                  We may share necessary data with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Payment gateways</li>
                  <li>Video conferencing tools (Zoom, Google Meet, Vimeo, etc.)</li>
                  <li>CRM and email/SMS communication partners</li>
                  <li>Cloud hosting and analytics platforms</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  All third-party partners follow strict data protection standards.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">4. Data Storage & Security Measures</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Data stored on encrypted cloud servers</li>
                  <li>Regular security audits</li>
                  <li>Access restricted to authorized personnel only</li>
                  <li>Continuous monitoring for suspicious activity</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">5. Data Retention Policy</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li><strong>Academic & learning records:</strong> retained for operational and regulatory reasons</li>
                  <li><strong>Activity logs:</strong> retained as per legal requirements</li>
                  <li>On request, data may be deleted unless legally required to retain it</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">6. Rights of Students</h2>
                <p className="text-slate-300/90 mb-4">
                  Students may request:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Access to their personal data</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of data (where permissible)</li>
                  <li>Withdrawal of consent</li>
                  <li>Explanation about automated processing</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  Requests can be emailed to us using the contact details below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">7. Handling of Minors (Under 18)</h2>
                <p className="text-slate-300/90 mb-4">
                  If a student is under 18:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Parent/guardian consent is mandatory</li>
                  <li>We reserve the right to verify identity and age</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">8. Data Breach & Incident Response</h2>
                <p className="text-slate-300/90 mb-4">
                  In case of a breach:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Immediate internal investigation</li>
                  <li>Notification to affected users</li>
                  <li>Remedial measures to prevent recurrence</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">9. Updates to Privacy Policy</h2>
                <p className="text-slate-300/90 mb-4">
                  We may update this policy periodically.
                </p>
                <p className="text-slate-300/90 mb-6">
                  Students will be notified through email or platform announcements.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">10. Contact for Privacy Concerns</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl mb-6">
                  <p className="text-slate-200 mb-2 font-semibold">
                    SkyPrep Aero
                  </p>
                  <p className="text-slate-300/90 mb-2">
                    Pune, Maharashtra
                  </p>
                  <p className="text-slate-300/90 mb-2">
                    <strong>Email:</strong> <a href="mailto:teams@skyprepaero.com" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline transition-colors">teams@skyprepaero.com</a>
                  </p>
                  <p className="text-slate-300/90">
                    <strong>Phone:</strong> <a href="tel:+918788162210" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline transition-colors">+91 87881 62210</a>
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400/80">
                  By using SkyPrep Aero&apos;s services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
                </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
