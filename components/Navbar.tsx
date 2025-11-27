"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { NavDropdown } from "@/components/NavDropdown";
import { courses } from "@/config/services";

// Services dropdown data
const servicesItems = [
  {
    id: "medical",
    name: "Medical",
    href: "/services/medical",
  },
  {
    id: "computer-number",
    name: "Computer Number",
    href: "/services/computer-number",
  },
  {
    id: "elogbook",
    name: "eLogbook",
    href: "/services/elogbook",
  },
  {
    id: "conversion-training",
    name: "Conversion Training",
    href: "/services/conversion-training",
  }
];

export function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isHomePage = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>

      {/* Responsive header - morphing on desktop, fixed on mobile */}
      <header
        className={`${
          isMobile 
            ? 'fixed top-0 left-0 right-0' 
            : isHomePage && !isScrolled && !isMobile
              ? 'absolute top-0 left-0 right-0'
              : isScrolled 
                ? 'fixed top-0' 
                : 'relative'
        } z-50 text-white transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isMobile 
            ? '' 
            : isScrolled 
              ? 'translate-y-4 opacity-100' 
              : 'translate-y-0 opacity-100'
        }`}
        style={{ 
          backgroundColor: isHomePage && !isScrolled && !isMobile
            ? 'transparent'
            : isMobile 
              ? '#0b2636' 
              : isScrolled 
                ? 'rgba(11, 38, 54, 0.85)' 
                : '#0b2636',
          backdropFilter: isHomePage && !isScrolled && !isMobile
            ? 'none'
            : isMobile 
              ? 'none' 
              : isScrolled 
                ? 'blur(20px) saturate(180%)' 
                : 'none',
          borderRadius: isMobile 
            ? '0px' 
            : isScrolled 
              ? '16px' 
              : '0px',
          border: isHomePage && !isScrolled && !isMobile
            ? 'none'
            : isMobile 
              ? 'none' 
              : isScrolled 
                ? '1px solid rgba(255, 255, 255, 0.15)' 
                : 'none',
          boxShadow: isHomePage && !isScrolled && !isMobile
            ? 'none'
            : isMobile 
              ? 'none' 
              : isScrolled 
                ? '0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1)' 
                : 'none',
          width: isMobile 
            ? '100%' 
            : isScrolled 
              ? 'calc(100% - 40px)' 
              : '100%',
          maxWidth: isMobile 
            ? 'none' 
            : isScrolled 
              ? '1400px' 
              : 'none',
          left: isMobile 
            ? 'auto' 
            : '50%',
          transform: isMobile 
            ? 'none' 
            : 'translateX(-50%)',
          margin: isMobile 
            ? '0' 
            : isScrolled 
              ? '20px auto' 
              : '0',
        }}
      >
        <div className={`${
          isMobile 
            ? 'container mx-auto px-4 h-16' 
            : isScrolled 
              ? 'w-full px-6 h-16' 
              : 'container mx-auto px-6 h-24'
        } flex items-center justify-between transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
          <div className="flex items-center flex-shrink-0 mr-4 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            <Logo size={isMobile ? 32 : isScrolled ? 42 : 70} withText={false} />
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-4 lg:gap-6 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            {!isScrolled && (
              <nav
                className="flex items-center gap-1 lg:gap-2 text-[14px] lg:text-[15px] px-2 lg:px-3 py-2 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                aria-label="Primary"
              >
                <Link
                  href="/"
                  className={`${isActive("/") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-2 lg:px-3 py-2 rounded-md text-slate-100 transition-colors text-sm lg:text-base`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${isActive("/about") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-2 lg:px-3 py-2 rounded-md text-slate-100 transition-colors text-sm lg:text-base whitespace-nowrap`}
                >
                  About Us
                </Link>
                <NavDropdown 
                  title="Courses" 
                  items={courses} 
                  isHomePage={isHomePage} 
                  isScrolled={isScrolled} 
                />
                <NavDropdown 
                  title="Services" 
                  items={servicesItems} 
                  isHomePage={isHomePage} 
                  isScrolled={isScrolled} 
                />
                <Link
                  href="/contact"
                  className={`${isActive("/contact") ? "bg-white/15 ring-1 ring-white/20" : "hover:bg-white/10"} px-2 lg:px-3 py-2 rounded-md text-slate-100 transition-colors text-sm lg:text-base whitespace-nowrap`}
                >
                  Contact Us
                </Link>
              </nav>
            )}
            {isScrolled && (
              <nav className="flex items-center gap-5 lg:gap-7 transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-label="Primary">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-all duration-300 hover:text-white whitespace-nowrap ${
                    isActive("/") ? "text-white" : "text-slate-300"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-all duration-300 hover:text-white whitespace-nowrap ${
                    isActive("/about") ? "text-white" : "text-slate-300"
                  }`}
                >
                  About
                </Link>
                <NavDropdown 
                  title="Courses" 
                  items={courses} 
                  isHomePage={isHomePage} 
                  isScrolled={isScrolled} 
                />
                <NavDropdown 
                  title="Services" 
                  items={servicesItems} 
                  isHomePage={isHomePage} 
                  isScrolled={isScrolled} 
                />
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-all duration-300 hover:text-white whitespace-nowrap ${
                    isActive("/contact") ? "text-white" : "text-slate-300"
                  }`}
                >
                  Contact
                </Link>
              </nav>
            )}
            
            <Link
              href="/courses/test-series"
              className={`${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'} rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-white whitespace-nowrap flex-shrink-0`}
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                boxShadow: "0 4px 14px 0 rgba(14, 165, 233, 0.35)",
              }}
            >
              Test Series
            </Link>
            <Link
              href="/enquiry"
              className={`${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'} rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap flex-shrink-0 ${
                isActive("/enquiry") ? "ring-2 ring-amber-300" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                color: "#0f172a",
                boxShadow: "0 4px 14px 0 rgba(245, 158, 11, 0.25)",
              }}
            >
              Enquiry
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`${isMobile ? 'inline-flex' : 'md:hidden'} items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
              isMobile ? 'w-8 h-8' : isScrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width={isMobile ? "20" : isScrolled ? "20" : "24"} height={isMobile ? "20" : isScrolled ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-300">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className={`${isMobile ? 'fixed left-0 right-0' : 'md:hidden fixed left-1/2 transform -translate-x-1/2'} z-40 ${
          isHomePage && !isScrolled && !isMobile 
            ? 'bg-transparent backdrop-blur-none border-none shadow-none' 
            : 'bg-[#0b2636]/85 backdrop-blur-xl border border-white/15 shadow-2xl'
        } transition-all duration-300 ${
          isMobile 
            ? 'top-16' 
            : isScrolled 
              ? 'top-20 rounded-xl' 
              : 'top-24 rounded-none'
        }`}
        style={{
          width: isMobile 
            ? '100vw' 
            : isScrolled 
              ? 'calc(100vw - 2rem)' 
              : '100vw',
          maxWidth: isMobile 
            ? 'none' 
            : isScrolled 
              ? '500px' 
              : 'none',
        }}
        >
          <nav className="px-6 py-6 grid gap-4" aria-label="Mobile">
            <Link
              href="/"
              className={`py-2 transition-colors ${
                isActive("/") ? "text-white" : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 transition-colors ${
                isActive("/about") ? "text-white" : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/services"
              className="text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/courses/test-series"
              className="mt-2 px-6 py-3 rounded-full font-semibold text-center text-white"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                boxShadow: "0 4px 14px 0 rgba(14, 165, 233, 0.35)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Test Series
            </Link>
            <Link
              href="/enquiry"
              className="px-6 py-3 rounded-full font-semibold text-center"
              style={{ 
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)", 
                color: "#0f172a",
                boxShadow: "0 4px 14px 0 rgba(245, 158, 11, 0.25)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Enquiry
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}


