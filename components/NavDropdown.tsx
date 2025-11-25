"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface DropdownItem {
  id: string;
  name: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
  isHomePage?: boolean;
  isScrolled?: boolean;
}

export function NavDropdown({ 
  title, 
  items, 
  isHomePage = false, 
  isScrolled = false 
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleClick = () => {
    setOpen((v) => !v);
  };

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("click", onDocClick);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative" 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 font-medium text-slate-300 hover:text-white whitespace-nowrap ${
          isScrolled ? 'text-sm' : 'text-[14px] lg:text-[15px]'
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={handleClick}
      >
        {title}
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          aria-hidden
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.127l3.71-3.896a.75.75 0 1 1 1.08 1.04l-4.24 4.46a.75.75 0 0 1-1.08 0l-4.24-4.46a.75.75 0 0 1 .02-1.06z" />
        </svg>
      </button>
      <div
        className={`absolute right-0 mt-3 w-72 rounded-2xl border border-white/20 ${
          isHomePage && !isScrolled 
            ? 'bg-black/30 backdrop-blur-xl' 
            : 'bg-[#0b2636]/90 backdrop-blur-2xl'
        } text-slate-100 shadow-2xl p-3 z-50 transition-all duration-500 ease-out ${
          open 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
        role="menu"
      >
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className={`block px-5 py-4 rounded-xl hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-300 text-sm font-medium hover:text-white group ${
              open ? 'animate-in slide-in-from-top-2 fade-in-0' : ''
            }`}
            style={{
              animationDelay: open ? `${index * 50}ms` : '0ms',
            }}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center justify-between">
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {item.name}
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
