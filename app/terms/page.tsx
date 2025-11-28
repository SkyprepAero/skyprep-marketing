import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions | SkyPrep Aero",
  description:
    "SkyPrep Aero's Terms & Conditions outline the rules, policies, and guidelines for using our online aviation training platform, courses, and services.",
  canonicalPath: "/terms",
  keywords: [
    "SkyPrep Aero terms and conditions",
    "aviation training terms",
    "online course terms",
    "student agreement",
    "course enrollment terms",
    "refund policy",
    "DGCA training terms",
  ],
});

export default function TermsConditionsPage() {
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
                Terms & Conditions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
              SkyPrep Aero – Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-slate-200/85 max-w-3xl mx-auto leading-relaxed">
              <strong>Last Updated:</strong> 28 November 2025
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
                By enrolling in SkyPrep Aero&apos;s Focus-One Program, Cohorts Program, Test Series, or accessing any of our online platforms, you agree to the following Terms & Conditions.
              </p>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-slate-300/90 mb-6">
                  Accessing our platform or enrolling in any program constitutes acceptance of these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">2. Eligibility</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Minimum age to enroll: 16 years</li>
                  <li>Students under 18 require parent/guardian permission.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">3. Student Account Responsibility</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Account login details must not be shared</li>
                  <li>Students are responsible for safeguarding their password</li>
                  <li>Any suspicious activity must be reported immediately</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">4. Course Access Rules</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Access may be lifetime or limited based on program type</li>
                  <li>Recordings are for enrolled students only</li>
                  <li>We may update or modify course content without prior notice</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">5. Prohibited Activities</h2>
                <p className="text-slate-300/90 mb-4">
                  Students shall NOT:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Share their account</li>
                  <li>Record screens, redistribute content, or upload material elsewhere</li>
                  <li>Engage in piracy or copyright violations</li>
                  <li>Misbehave during live classes</li>
                  <li>Use the platform for illegal activities</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  Violations may lead to immediate termination without refund.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">6. Ownership of Content</h2>
                <p className="text-slate-300/90 mb-4">
                  All course material, videos, tests, documents, branding, and graphics belong to SkyPrep Aero.
                </p>
                <p className="text-slate-300/90 mb-6">
                  Students receive a personal, non-transferable, non-commercial license to use the content.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">7. Fees, Payments & Subscriptions</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Fees must be paid in full or as per the selected installment plan</li>
                  <li>Payments are processed via trusted third-party payment gateways</li>
                  <li>Taxes may apply as per Indian laws</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">8. Refund & Cancellation Policy</h2>
                <p className="text-slate-300/90 mb-4">
                  Refunds depend on program type:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Once classes, tests, or materials are accessed, no refund is issued</li>
                  <li>Refund requests are handled case-by-case and at company discretion</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">9. Class Rescheduling & Instructor Changes</h2>
                <p className="text-slate-300/90 mb-4">
                  We may:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Reschedule classes due to operational reasons</li>
                  <li>Change instructors if required</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  Students will be informed in advance wherever possible.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">10. Certificate Issuance</h2>
                <p className="text-slate-300/90 mb-4">
                  Certificates are issued only when:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Full course completed</li>
                  <li>Minimum attendance achieved</li>
                  <li>Assignments/tests completed as required</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">11. Academic Integrity</h2>
                <p className="text-slate-300/90 mb-6">
                  Cheating, misconduct, misuse of tools, or abuse during live sessions is strictly prohibited.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">12. Platform Downtime & Technical Issues</h2>
                <p className="text-slate-300/90 mb-4">
                  We are not liable for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Internet issues on the student&apos;s side</li>
                  <li>External platform outages</li>
                  <li>Unforeseen technical failures</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  Reasonable efforts will be made to restore service quickly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">13. Limitation of Liability</h2>
                <p className="text-slate-300/90 mb-4">
                  SkyPrep Aero is not responsible for DGCA exam results, pass/fail outcomes, or airline job placement.
                </p>
                <p className="text-slate-300/90 mb-6">
                  We provide educational support only.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">14. Termination or Suspension</h2>
                <p className="text-slate-300/90 mb-4">
                  We may suspend or terminate accounts for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Policy violations</li>
                  <li>Fraud</li>
                  <li>Chargebacks or unpaid dues</li>
                  <li>Misconduct</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">15. Third-Party Integrations</h2>
                <p className="text-slate-300/90 mb-4">
                  Your access may involve tools like:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-300/90 space-y-2">
                  <li>Zoom</li>
                  <li>Vimeo</li>
                  <li>Google Workspace</li>
                  <li>Payment gateways</li>
                </ul>
                <p className="text-slate-300/90 mb-6">
                  All such tools have their own policies that users must follow.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">16. Modification of Terms</h2>
                <p className="text-slate-300/90 mb-6">
                  SkyPrep Aero may update the Terms with prior notice to students.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">17. Governing Law & Jurisdiction</h2>
                <p className="text-slate-300/90 mb-4">
                  These Terms are governed by:
                </p>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl mb-6">
                  <p className="text-slate-200 font-semibold">
                    Indian Law – Pune, Maharashtra Jurisdiction
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">18. Contact for Legal Matters</h2>
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
                  By using SkyPrep Aero&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
