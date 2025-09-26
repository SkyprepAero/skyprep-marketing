import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-0 text-slate-200" style={{ backgroundColor: "#071a25" }}>
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 10px, transparent 10px 20px), repeating-linear-gradient(-135deg, rgba(255,255,255,0.08) 0 10px, transparent 10px 20px)",
          backgroundColor: "#0b2636",
          opacity: 0.9,
        }}
      />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src={siteConfig.logo} alt="SkyPrep logo" width={36} height={36} />
              <span className="text-base font-semibold">SkyPrep</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/courses" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/store" className="hover:text-white">Store</Link>
            <Link href="/enquiry" className="hover:text-white">Enquiry</Link>
          </nav>

          <div className="space-y-3 text-sm">
            <p className="font-medium text-slate-300">Contact</p>
            <p className="text-slate-400">{siteConfig.contactEmail}</p>
            <div className="flex items-center gap-4">
              {siteConfig.social.twitter && (
                <Link href={siteConfig.social.twitter} aria-label="X" className="hover:text-white">
                  {/* X icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 3h4.6l4.2 6 4.7-6H21l-6.7 8.6L21 21h-4.6l-4.6-6.5L6.7 21H3l7.2-9.2L3 3zm5.7 2L19 19h-1.7L7 5h1.7z" />
                  </svg>
                </Link>
              )}
              {siteConfig.social.linkedin && (
                <Link href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5C1.02 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2zM1 8h4v14H1V8zm7 0h3.8v2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V22h-4v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.7-2.7 3.6V22H8V8z" />
                  </svg>
                </Link>
              )}
              {siteConfig.social.instagram && (
                <Link href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </Link>
              )}
              {siteConfig.social.youtube && (
                <Link href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12c0 1.9.2 3.8.6 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.3.6 9.3.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-2 .5-3.9.5-5.8 0-1.9-.2-3.8-.6-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



