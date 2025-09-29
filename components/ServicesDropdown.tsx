"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/config/services";

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-white/10 focus-ring text-slate-100"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.127l3.71-3.896a.75.75 0 1 1 1.08 1.04l-4.24 4.46a.75.75 0 0 1-1.08 0l-4.24-4.46a.75.75 0 0 1 .02-1.06z" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-700 bg-[#0b2636] text-slate-100 shadow-lg p-1 z-50"
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="block px-3 py-2 rounded-md hover:bg-white/10"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}



