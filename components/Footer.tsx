import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { services, courses, whatsappNumber } from "@/config/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 text-slate-200 overflow-hidden" style={{ backgroundColor: "#0a1929" }}>
      {/* Top Border */}
      <div className="relative h-1 w-full" style={{ backgroundColor: "#0f172a" }} />

      {/* Main Footer Content */}
      <div className="relative" style={{ backgroundColor: "#0a1929" }}>
        <div className="container-wide relative z-10">
          {/* Main Footer Grid */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <Image 
                      src={siteConfig.logo} 
                      alt="SkyPrep Aero - Premier DGCA Aviation Coaching Institute Logo" 
                      width={48} 
                      height={48}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-xl font-bold text-white">
                    SkyPrep Aero
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300/80 max-w-sm">
                  {siteConfig.description}
                </p>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 pt-2">
                  {siteConfig.social.twitter && (
                    <Link 
                      href={siteConfig.social.twitter} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on X (Twitter)"
                      className="group relative p-2.5 rounded-xl border transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#0f172a", borderColor: "#1e293b" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-blue-300 transition-colors">
                        <path d="M3 3h4.6l4.2 6 4.7-6H21l-6.7 8.6L21 21h-4.6l-4.6-6.5L6.7 21H3l7.2-9.2L3 3zm5.7 2L19 19h-1.7L7 5h1.7z" />
                      </svg>
                    </Link>
                  )}
                  {siteConfig.social.linkedin && (
                    <Link 
                      href={siteConfig.social.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with us on LinkedIn"
                      className="group relative p-2.5 rounded-xl border transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#0f172a", borderColor: "#1e293b" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-blue-300 transition-colors">
                        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5C1.02 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2zM1 8h4v14H1V8zm7 0h3.8v2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V22h-4v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.7-2.7 3.6V22H8V8z" />
                      </svg>
                    </Link>
                  )}
                  {siteConfig.social.instagram && (
                    <Link 
                      href={siteConfig.social.instagram} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="group relative p-2.5 rounded-xl border transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#0f172a", borderColor: "#1e293b" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-blue-300 transition-colors">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                      </svg>
                    </Link>
                  )}
                  {siteConfig.social.youtube && (
                    <Link 
                      href={siteConfig.social.youtube} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Subscribe to our YouTube channel"
                      className="group relative p-2.5 rounded-xl border transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#0f172a", borderColor: "#1e293b" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 group-hover:text-blue-300 transition-colors">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12c0 1.9.2 3.8.6 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.3.6 9.3.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-2 .5-3.9.5-5.8 0-1.9-.2-3.8-.6-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Courses Section */}
              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  Courses
                </h3>
                <nav aria-label="Footer courses navigation" className="flex flex-col gap-3">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                      {course.name}
                    </Link>
                  ))}
                  <Link
                    href="/courses/test-series"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    Test Series
                  </Link>
                </nav>
              </div>

              {/* Services Section */}
              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  Services
                </h3>
                <nav aria-label="Footer services navigation" className="flex flex-col gap-3">
                  {services
                    .filter(service => service.id !== "1-to-1-coaching" && service.id !== "cohorts")
                    .slice(0, 4)
                    .map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                      {service.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* DGCA Resources Section */}
              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  DGCA Resources
                </h3>
                <nav aria-label="Footer DGCA resources navigation" className="flex flex-col gap-3">
                  <a
                    href="https://pariksha.dgca.gov.in/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    DGCA Pariksha
                  </a>
                  <a
                    href="https://www.dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    eGCA Portal
                  </a>
                  <a
                    href="https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/InventoryList/personal/medical/class1/Class1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    DGCA Class 1
                  </a>
                  <a
                    href="https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/InventoryList/personal/medical/class2/Class2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    DGCA Class 2
                  </a>
                  <a
                    href="https://www.digilocker.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    Digilocker
                  </a>
                </nav>
              </div>

              {/* Resources & Contact Section */}
              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  Resources
                </h3>
                <nav aria-label="Footer resources navigation" className="flex flex-col gap-3">
                  <Link
                    href="/about"
                    className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-blue-400 transition-all duration-200 rounded-full" />
                    About Us
                  </Link>
                </nav>

                {/* Contact Info */}
                <div className="pt-4 space-y-3 border-t" style={{ borderColor: "#1e293b" }}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    Contact
                  </h3>
                  <div className="space-y-2.5">
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {siteConfig.contactEmail}
                    </a>
                    <a
                      href={`tel:${whatsappNumber.replace(/[^0-9+]/g, '')}`}
                      className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {whatsappNumber}
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300/80 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: "#1e293b" }}>
              <div className="rounded-2xl p-6 md:p-8 border backdrop-blur-sm" style={{ backgroundColor: "#0f172a", borderColor: "#1e293b" }}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Ready to Start Your Aviation Journey?
                    </h3>
                    <p className="text-sm text-slate-300/80">
                      Get personalized guidance and a custom flight plan within 24 hours.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/enquiry"
                      className="group px-6 py-3 rounded-xl font-semibold text-white shadow-[0_20px_50px_-30px_rgba(59,130,246,0.5)] hover:shadow-[0_25px_60px_-35px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 text-center text-sm"
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                      }}
                    >
                      <span className="flex items-center gap-2 justify-center">
                        Submit Enquiry
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl font-semibold border text-white hover:opacity-80 transition-all duration-300 text-center text-sm"
                      style={{ borderColor: "#1e293b" }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t" style={{ backgroundColor: "#0a1929", borderColor: "#1e293b" }}>
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p>© {currentYear} SkyPrep Aero. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
                <span style={{ color: "#475569" }}>•</span>
                <Link href="/terms" className="hover:text-blue-300 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Made with passion for aviation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
