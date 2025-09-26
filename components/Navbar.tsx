"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ServicesDropdown } from "@/components/ServicesDropdown";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
      <header
      className="sticky top-0 z-50 text-white"
      style={{ backgroundColor: "#0b2636" }}
    >
      <div className="container h-20 flex items-center gap-6">
        <div className="flex items-center">
          <Logo size={90} withText={false} />
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <nav
            className="flex items-center gap-2 text-[15px] px-3 py-2 rounded-lg border border-slate-700 bg-white/5 shadow-sm"
            aria-label="Primary"
          >
            <ServicesDropdown />
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-3 py-2 rounded-md text-slate-100 transition-colors`}
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-3 py-2 rounded-md text-slate-100 transition-colors`}
            >
              About Us
            </Link>
          </nav>
          <Link
            href="/enquiry"
            className={`px-5 py-2 rounded-md font-medium shadow-sm hover:opacity-95 ${
              isActive("/enquiry") ? "ring-2 ring-amber-300" : ""
            }`}
            style={{
              background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
              color: "#0f172a",
            }}
          >
            Enquiry
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 focus-ring"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-50 bg-[#0b2636] text-slate-100 border-t border-slate-700 shadow-xl">
          <nav className="container py-4 grid gap-2" aria-label="Mobile">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-70">Menu</span>
            </div>
            <Link
              href="/courses"
              className="px-3 py-3 rounded-md hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-3 py-3 rounded-md`}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-3 py-3 rounded-md`}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/enquiry"
              className="mt-1 px-4 py-3 rounded-md font-medium"
              style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)", color: "#0f172a" }}
              onClick={() => setMobileOpen(false)}
            >
              Enquiry
            </Link>
          </nav>
        </div>
      )}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 10px, transparent 10px 20px), repeating-linear-gradient(-135deg, rgba(255,255,255,0.08) 0 10px, transparent 10px 20px)",
          backgroundColor: "#0b2636",
          opacity: 0.9,
        }}
      />
    </header>
  );
}


