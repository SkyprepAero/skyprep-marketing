import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

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
  const lastUpdated = "January 2025";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>

        <section className="mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            At SkyPrep Aero, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online aviation training platform and services.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            By enrolling in our courses or accessing our platform, you consent to the collection and use of information in accordance with this policy. This policy complies with India&apos;s Digital Personal Data Protection Act (DPDP Act) 2023 and applicable international data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Student Information</h3>
          <p className="text-slate-700 mb-4">
            We collect the following information when you enroll in our courses or use our services:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Personal Identification:</strong> Full name, email address, phone number, date of birth</li>
            <li><strong>DGCA Details:</strong> DGCA registration number, computer number, medical certificate details, license information</li>
            <li><strong>Course Information:</strong> Enrolled courses, course progress, completion status, test scores, and performance analytics</li>
            <li><strong>Academic Records:</strong> Educational background, flight training history, certifications, and qualifications</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Account and Technical Data</h3>
          <p className="text-slate-700 mb-4">
            When you create an account or access our platform, we automatically collect:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Login Credentials:</strong> Username, encrypted password, account creation date</li>
            <li><strong>Technical Information:</strong> IP address, device type, operating system, browser type and version</li>
            <li><strong>Usage Data:</strong> Login timestamps, session duration, pages visited, features used, time spent on platform</li>
            <li><strong>Location Data:</strong> General geographic location (city/country level) based on IP address</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Payment Information</h3>
          <p className="text-slate-700 mb-4">
            Payment processing is handled by secure third-party payment gateways. We do not store your complete payment card details. We may collect:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Payment transaction IDs and receipts</li>
            <li>Billing address and contact information</li>
            <li>Payment method type (credit card, debit card, UPI, net banking, etc.)</li>
            <li>Transaction amounts and dates</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.4 Video Session and Platform Usage Data</h3>
          <p className="text-slate-700 mb-4">
            To provide effective learning analytics and improve our services, we collect:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Video session attendance and participation records</li>
            <li>Recording access logs (when recordings are available)</li>
            <li>Platform interaction data (clicks, scrolls, time spent on content)</li>
            <li>Performance metrics and learning analytics</li>
            <li>Doubt-clearing session logs and communication history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Purpose of Data Use</h2>
          <p className="text-slate-700 mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Course Delivery:</strong> To provide access to online classes, course materials, recordings, and educational content</li>
            <li><strong>Doubt Support:</strong> To facilitate doubt-clearing sessions, one-on-one mentorship, and academic assistance</li>
            <li><strong>Progress Tracking:</strong> To monitor your learning progress, track completion rates, and generate performance reports</li>
            <li><strong>Communication:</strong> To send course updates, announcements, reminders, and respond to your inquiries</li>
            <li><strong>Certification:</strong> To issue course completion certificates and maintain academic records</li>
            <li><strong>Platform Improvement:</strong> To analyze usage patterns, improve our platform, and enhance user experience</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
            <li><strong>Security:</strong> To protect against fraud, unauthorized access, and ensure platform security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies and Analytics Tools</h2>
          <p className="text-slate-700 mb-4">
            We use cookies and similar tracking technologies to improve your experience on our website:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for platform functionality, login sessions, and security</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics)</li>
            <li><strong>Performance Cookies:</strong> Collect information about website performance and loading times</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience</li>
          </ul>
          <p className="text-slate-700 mb-4">
            You can control cookie preferences through your browser settings. However, disabling certain cookies may affect platform functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing with Service Providers</h2>
          <p className="text-slate-700 mb-4">
            We may share your information with trusted third-party service providers who assist us in operating our platform:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Payment Gateways:</strong> Secure payment processors for handling course fees and transactions</li>
            <li><strong>Video Conferencing Tools:</strong> Platforms like Zoom, Google Meet, or similar for live classes and sessions</li>
            <li><strong>CRM Systems:</strong> Customer relationship management tools for managing student communications and support</li>
            <li><strong>Email and SMS Providers:</strong> Services for sending notifications, updates, and communications</li>
            <li><strong>Cloud Storage Providers:</strong> Secure cloud infrastructure for storing course content and student data</li>
            <li><strong>Analytics Services:</strong> Tools for analyzing website usage and improving our services</li>
          </ul>
          <p className="text-slate-700 mb-4">
            All service providers are contractually obligated to protect your information and use it only for the purposes we specify. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cloud Data Storage and Security Measures</h2>
          <p className="text-slate-700 mb-4">
            Your data is stored securely in cloud infrastructure with the following security measures:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Encrypted Storage:</strong> All sensitive data is encrypted at rest using industry-standard encryption protocols</li>
            <li><strong>Secure Servers:</strong> Data is stored on secure servers with regular security updates and monitoring</li>
            <li><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access student data</li>
            <li><strong>Network Security:</strong> Secure network protocols (HTTPS/TLS) protect data in transit</li>
            <li><strong>Regular Backups:</strong> Automated backups ensure data availability and recovery</li>
            <li><strong>Security Audits:</strong> Regular security assessments and vulnerability testing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention Policy</h2>
          <p className="text-slate-700 mb-4">
            We retain your information for the following periods:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Student Records:</strong> Retained for the duration of your enrollment and for 7 years after course completion or account closure for academic and legal purposes</li>
            <li><strong>Learning History:</strong> Performance data, test scores, and progress records are retained for 5 years after account closure</li>
            <li><strong>Payment Records:</strong> Financial transaction records are retained for 7 years as required by law</li>
            <li><strong>Communication Logs:</strong> Email and support communication records are retained for 3 years</li>
            <li><strong>Technical Logs:</strong> Login and access logs are retained for 1 year for security purposes</li>
          </ul>
          <p className="text-slate-700 mb-4">
            After the retention period, we will securely delete or anonymize your data, unless we are required to retain it for legal or regulatory purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights as a Student</h2>
          <p className="text-slate-700 mb-4">
            Under India&apos;s DPDP Act 2023 and applicable data protection laws, you have the following rights:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>Right to Access:</strong> Request a copy of all personal information we hold about you</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Right to Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations</li>
            <li><strong>Right to Consent Withdrawal:</strong> Withdraw consent for data processing where processing is based on consent</li>
            <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format</li>
            <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
            <li><strong>Right to Grievance Redressal:</strong> File a complaint with us or the relevant data protection authority</li>
          </ul>
          <p className="text-slate-700 mb-4">
            To exercise these rights, please contact us at <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a>. We will respond to your request within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Handling of Minor Students</h2>
          <p className="text-slate-700 mb-4">
            If you are under 18 years of age, we require explicit consent from a parent or legal guardian before collecting your personal information. Parents or guardians have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>Review the information collected about their child</li>
            <li>Request deletion of their child&apos;s information</li>
            <li>Refuse further collection or use of their child&apos;s information</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-slate-700 mb-4">
            If you are a parent or guardian and believe we have collected information from your child without proper consent, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Legal Compliance</h2>
          <p className="text-slate-700 mb-4">
            This Privacy Policy is designed to comply with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li><strong>India&apos;s Digital Personal Data Protection Act (DPDP Act) 2023</strong></li>
            <li><strong>Information Technology Act, 2000 and Rules (India)</strong></li>
            <li><strong>General Data Protection Regulation (GDPR)</strong> - if applicable to international students</li>
            <li><strong>Other applicable data protection and privacy laws</strong></li>
          </ul>
          <p className="text-slate-700 mb-4">
            We regularly review and update our privacy practices to ensure ongoing compliance with evolving data protection regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Data Breaches and Security Incidents</h2>
          <p className="text-slate-700 mb-4">
            In the unlikely event of a data breach or security incident that may affect your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>We will immediately investigate the incident and take appropriate remedial measures</li>
            <li>We will notify affected users and relevant authorities as required by law (within 72 hours under DPDP Act 2023)</li>
            <li>We will provide clear information about the nature of the breach and steps taken to address it</li>
            <li>We will implement additional security measures to prevent future incidents</li>
          </ul>
          <p className="text-slate-700 mb-4">
            If you suspect any unauthorized access to your account, please contact us immediately at <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">{siteConfig.contactEmail}</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Policy Updates and Notifications</h2>
          <p className="text-slate-700 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. When we make changes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
            <li>We will update the &quot;Last Updated&quot; date at the top of this policy</li>
            <li>We will notify you via email or through our platform about significant changes</li>
            <li>We will provide a summary of key changes when possible</li>
            <li>Continued use of our services after changes constitutes acceptance of the updated policy</li>
          </ul>
          <p className="text-slate-700 mb-4">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us for Privacy Concerns</h2>
          <p className="text-slate-700 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              <strong>Data Protection Officer:</strong> Available upon request via email
            </p>
          </div>
          <p className="text-slate-700 mb-4">
            We are committed to addressing your privacy concerns promptly and transparently.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            By using SkyPrep Aero&apos;s services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
          </p>
        </div>
      </div>
    </div>
  );
}

