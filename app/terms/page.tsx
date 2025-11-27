import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

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
  const lastUpdated = "January 2025";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-slate-600 mb-8">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>

        <section className="mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Welcome to SkyPrep Aero. These Terms & Conditions ("Terms") govern your access to and use of our online aviation training platform, courses, and services. By enrolling in our courses, creating an account, or accessing our platform, you agree to be bound by these Terms.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our platform or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-700 mb-4">
            By enrolling in any course, creating an account, accessing online classes, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy.
          </p>
          <p className="text-slate-700 mb-4">
            These Terms constitute a legally binding agreement between you ("Student," "User," or "You") and SkyPrep Aero ("Company," "We," "Us," or "Our"). If you are enrolling on behalf of a minor, you represent that you are the parent or legal guardian and agree to these Terms on their behalf.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility Rules</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Minimum Age Requirement</h3>
          <p className="text-slate-700 mb-4">
            To enroll in our courses and use our platform, you must:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Be at least 18 years of age, OR</li>
            <li>Be at least 16 years of age with explicit written consent from a parent or legal guardian</li>
            <li>Have the legal capacity to enter into a binding agreement</li>
            <li>Meet any course-specific prerequisites or eligibility requirements</li>
          </ul>
          <p className="text-slate-700 mb-4">
            If you are under 18, a parent or guardian must review and accept these Terms on your behalf and provide consent for data collection as outlined in our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Student Account Responsibility</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Account Creation and Security</h3>
          <p className="text-slate-700 mb-4">
            When creating an account, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your login credentials (username and password) confidential and secure</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Non-Sharing Policy</h3>
          <p className="text-slate-700 mb-4">
            Your account is personal and non-transferable. You agree NOT to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Share your account credentials with any other person</li>
            <li>Allow others to access your account or use your login information</li>
            <li>Create multiple accounts to circumvent course access limitations</li>
            <li>Transfer or sell your account to another person</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Violation of this policy may result in immediate account suspension or termination without refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Course Access Rules</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Login and Access</h3>
          <p className="text-slate-700 mb-4">
            Course access is granted based on your enrollment and payment status:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Access is provided through your registered account only</li>
            <li>You must log in using your own credentials to access course content</li>
            <li>Access may be restricted if payment is pending or account is suspended</li>
            <li>We reserve the right to verify your identity for security purposes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Recordings and Content Access</h3>
          <p className="text-slate-700 mb-4">
            Access to course recordings and materials is subject to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Course-specific terms (lifetime access, limited duration, or subscription-based)</li>
            <li>Availability of recordings (not all sessions may be recorded)</li>
            <li>Technical limitations and platform availability</li>
            <li>Compliance with course completion requirements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Lifetime vs. Limited Access</h3>
          <p className="text-slate-700 mb-4">
            Course access duration varies by course type:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Lifetime Access:</strong> Available for the duration of the course offering, subject to platform availability</li>
            <li><strong>Limited Access:</strong> Access for a specified period (e.g., 6 months, 1 year) as stated at enrollment</li>
            <li><strong>Subscription Access:</strong> Continuous access while subscription is active and payments are current</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Access terms are clearly stated at the time of enrollment. We reserve the right to modify access terms with 30 days' notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Prohibited Activities</h2>
          <p className="text-slate-700 mb-4">
            You are strictly prohibited from engaging in the following activities:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Screen Recording:</strong> Recording, capturing, or saving any course content, live sessions, or materials without explicit written permission</li>
            <li><strong>Piracy:</strong> Downloading, copying, reproducing, or distributing course content, videos, or materials in any form</li>
            <li><strong>Content Redistribution:</strong> Sharing, uploading, or making course content available on any platform, website, or service (including but not limited to YouTube, file-sharing sites, or social media)</li>
            <li><strong>Account Sharing:</strong> Allowing others to access your account or course materials</li>
            <li><strong>Reverse Engineering:</strong> Attempting to extract, decompile, or reverse engineer any platform technology or content</li>
            <li><strong>Commercial Use:</strong> Using course content for commercial purposes, resale, or creating derivative works</li>
            <li><strong>Disruption:</strong> Interfering with or disrupting live classes, platform functionality, or other students' learning experience</li>
            <li><strong>Unauthorized Access:</strong> Attempting to access restricted areas, other students' accounts, or platform systems</li>
            <li><strong>Misrepresentation:</strong> Providing false information, impersonating others, or misrepresenting your identity</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Violation of these prohibitions may result in immediate account termination, legal action, and liability for damages. We actively monitor for violations and may use technological measures to prevent unauthorized use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Ownership of Course Content</h2>
          <p className="text-slate-700 mb-4">
            All course content, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Video lectures, recordings, and live sessions</li>
            <li>Course materials, notes, presentations, and study guides</li>
            <li>Test questions, practice exams, and assessment materials</li>
            <li>Platform software, design, and functionality</li>
            <li>Logos, trademarks, and brand elements</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Are the exclusive property of SkyPrep Aero or our licensors and are protected by copyright, trademark, and other intellectual property laws. All rights are reserved.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">7. License Granted to Students</h2>
          <p className="text-slate-700 mb-4">
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Access and view course content for your personal, non-commercial educational purposes</li>
            <li>Use course materials for your own study and exam preparation</li>
            <li>Download materials explicitly made available for download (if any)</li>
          </ul>
          <p className="text-slate-700 mb-4">
            This license does NOT permit you to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Share, distribute, or redistribute any content</li>
            <li>Record, copy, or reproduce course materials</li>
            <li>Use content for commercial purposes</li>
            <li>Create derivative works based on our content</li>
            <li>Remove copyright notices or proprietary markings</li>
          </ul>
          <p className="text-slate-700 mb-4">
            This license terminates automatically upon account closure, course completion (if applicable), or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Fees, Payment, and Subscription Terms</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Course Fees</h3>
          <p className="text-slate-700 mb-4">
            Course fees are clearly stated at the time of enrollment. You agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Pay all fees in full before course access is granted (unless installment plans are available)</li>
            <li>Pay any applicable taxes, transaction fees, or charges</li>
            <li>Complete payment through our authorized payment gateways only</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Payment Process</h3>
          <p className="text-slate-700 mb-4">
            Payments are processed securely through third-party payment gateways. We do not store your complete payment card information. Payment methods accepted may include credit cards, debit cards, UPI, net banking, and other methods as available.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">8.3 Subscription Terms</h3>
          <p className="text-slate-700 mb-4">
            For subscription-based courses:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
            <li>You authorize us to charge your payment method for renewal fees</li>
            <li>Cancellation must be done at least 7 days before the renewal date</li>
            <li>No refunds for partial subscription periods</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Refund and Cancellation Policy</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Refund Eligibility</h3>
          <p className="text-slate-700 mb-4">
            Refund requests are subject to the following conditions:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Within 7 Days:</strong> Full refund if requested within 7 days of enrollment and before accessing more than 20% of course content</li>
            <li><strong>After 7 Days:</strong> No refunds are available after 7 days or if more than 20% of course content has been accessed</li>
            <li><strong>Technical Issues:</strong> Refunds may be considered for significant technical issues that prevent course access, subject to verification</li>
            <li><strong>Course Cancellation:</strong> Full refund if we cancel a course before it begins</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Refund Process</h3>
          <p className="text-slate-700 mb-4">
            To request a refund:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Contact us at <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a> with your enrollment details</li>
            <li>Refund requests are processed within 7-14 business days</li>
            <li>Refunds are issued to the original payment method</li>
            <li>Processing fees (if any) may be deducted from refunds</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Cancellation by Student</h3>
          <p className="text-slate-700 mb-4">
            You may cancel your enrollment at any time, but refunds are only available as per Section 9.1. Cancellation does not automatically entitle you to a refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Class Rescheduling and Instructor Changes</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Class Rescheduling</h3>
          <p className="text-slate-700 mb-4">
            We reserve the right to reschedule classes due to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Instructor unavailability or emergencies</li>
            <li>Technical issues or platform maintenance</li>
            <li>Holidays or unforeseen circumstances</li>
            <li>Low enrollment (classes may be combined or rescheduled)</li>
          </ul>
          <p className="text-slate-700 mb-4">
            We will provide reasonable notice (at least 24 hours when possible) and make recordings available when applicable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Instructor Changes</h3>
          <p className="text-slate-700 mb-4">
            We may substitute instructors or change instructors during a course. All instructors are qualified and meet our teaching standards. Instructor changes do not entitle you to a refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Certificate Issuance Conditions</h2>
          <p className="text-slate-700 mb-4">
            Course completion certificates are issued subject to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Successful completion of all required course modules and assessments</li>
            <li>Achieving minimum passing scores as specified for the course</li>
            <li>Full payment of course fees</li>
            <li>Active account status (not suspended or terminated)</li>
            <li>Compliance with academic integrity policies</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Certificates are issued in digital format and may be verified through our platform. Physical certificates (if available) may incur additional fees. We reserve the right to revoke certificates if violations of these Terms are discovered after issuance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Academic Integrity & Conduct</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">12.1 Academic Integrity</h3>
          <p className="text-slate-700 mb-4">
            You agree to maintain the highest standards of academic integrity:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Complete all assessments independently and honestly</li>
            <li>Not engage in cheating, plagiarism, or academic dishonesty</li>
            <li>Not share test questions, answers, or assessment content</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">12.2 Conduct During Live Sessions</h3>
          <p className="text-slate-700 mb-4">
            During live classes and sessions, you must:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Maintain respectful and professional behavior</li>
            <li>Not disrupt the learning experience of others</li>
            <li>Follow instructor guidelines and platform rules</li>
            <li>Not record sessions without permission</li>
            <li>Use appropriate language and avoid harassment or discrimination</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Violations may result in removal from sessions, account suspension, or termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">13. Platform Downtime and Technical Issues</h2>
          <p className="text-slate-700 mb-4">
            We strive to maintain platform availability but cannot guarantee uninterrupted access. We are not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Temporary platform downtime for maintenance, updates, or technical issues</li>
            <li>Internet connectivity issues on your end</li>
            <li>Device or software compatibility problems</li>
            <li>Third-party service outages (video platforms, payment gateways, etc.)</li>
            <li>Force majeure events (natural disasters, cyberattacks, etc.)</li>
          </ul>
          <p className="text-slate-700 mb-4">
            We will make reasonable efforts to minimize downtime and provide alternative access when possible. Scheduled maintenance will be announced in advance when feasible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">14. Limitation of Liability</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">14.1 Exam Results and DGCA Outcomes</h3>
          <p className="text-slate-700 mb-4">
            While we provide comprehensive training and support, we cannot guarantee:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Passing of DGCA exams or specific exam scores</li>
            <li>Employment or placement with airlines or aviation companies</li>
            <li>Licensure or certification by DGCA or other authorities</li>
            <li>Specific career outcomes or advancement</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Exam results and career outcomes depend on various factors including your effort, preparation, exam performance, and external factors beyond our control. We are not liable for any failure to pass exams or achieve desired outcomes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">14.2 General Limitation</h3>
          <p className="text-slate-700 mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Our liability is limited to the amount you paid for the specific course in question</li>
            <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
            <li>We are not liable for loss of data, profits, or business opportunities</li>
            <li>We are not liable for third-party actions or content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">15. Termination or Suspension of Accounts</h2>
          <p className="text-slate-700 mb-4">
            We reserve the right to suspend or terminate your account immediately, without notice or refund, if you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Violate these Terms & Conditions or our Privacy Policy</li>
            <li>Engage in prohibited activities (Section 5)</li>
            <li>Fail to pay required fees</li>
            <li>Provide false or misleading information</li>
            <li>Engage in fraudulent, abusive, or illegal activities</li>
            <li>Disrupt the learning experience of others</li>
            <li>Violate intellectual property rights</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Upon termination, your access to the platform and course content will be immediately revoked. You remain liable for any outstanding fees or obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">16. Third-Party Integrations</h2>
          <p className="text-slate-700 mb-4">
            Our platform may integrate with third-party services including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Video Conferencing:</strong> Zoom, Google Meet, or similar platforms for live classes</li>
            <li><strong>Video Hosting:</strong> Vimeo, YouTube, or similar for course recordings</li>
            <li><strong>Payment Processing:</strong> Razorpay, Stripe, PayPal, or other payment gateways</li>
            <li><strong>Analytics:</strong> Google Analytics and similar tools</li>
            <li><strong>Communication:</strong> Email and SMS service providers</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Your use of third-party services is subject to their respective terms and conditions. We are not responsible for third-party service availability, functionality, or data practices. We encourage you to review third-party privacy policies and terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">17. Modification of Terms</h2>
          <p className="text-slate-700 mb-4">
            We reserve the right to modify these Terms & Conditions at any time. When we make changes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>We will update the "Last Updated" date at the top of this document</li>
            <li>We will notify you via email or through our platform about significant changes</li>
            <li>We will provide at least 30 days' notice for material changes that affect your rights</li>
            <li>Continued use of our services after changes constitutes acceptance of the updated Terms</li>
          </ul>
          <p className="text-slate-700 mb-4">
            If you do not agree with the modified Terms, you must stop using our services and may request account closure. Refunds will be subject to our refund policy (Section 9).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">18. Governing Law and Jurisdiction</h2>
          <p className="text-slate-700 mb-4">
            These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <p className="text-slate-700 font-semibold">
              Pune, Maharashtra, India
            </p>
          </div>
          <p className="text-slate-700 mb-4">
            You agree to submit to the jurisdiction of these courts and waive any objections to venue or forum.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">19. Contact Us for Legal Matters</h2>
          <p className="text-slate-700 mb-4">
            For any questions, concerns, or legal matters regarding these Terms & Conditions, please contact us:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <p className="text-slate-700 mb-2">
              <strong>SkyPrep Aero</strong>
            </p>
            <p className="text-slate-700 mb-2">
              <strong>Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a>
            </p>
            <p className="text-slate-700 mb-2">
              <strong>Address:</strong> Pune, Maharashtra, India
            </p>
            <p className="text-slate-700">
              <strong>Legal Department:</strong> Available upon request via email
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">20. Severability and Entire Agreement</h2>
          <p className="text-slate-700 mb-4">
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. These Terms, together with our Privacy Policy, constitute the entire agreement between you and SkyPrep Aero regarding your use of our services.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            By using SkyPrep Aero's services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </div>
      </div>
    </div>
  );
}

