"use client";

import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services, getServiceById } from "@/config/services";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const nameInputRef = useRef<HTMLInputElement>(null);
  
  const selectedServiceId = searchParams.get('service');
  const selectedService = selectedServiceId ? getServiceById(selectedServiceId) : null;

  useEffect(() => {
    // Auto-focus the name input when component mounts
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <form className="mt-6 grid gap-6" aria-label="Contact form">
      <div className="grid gap-2">
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
        >
          Full Name *
        </label>
        <input
          ref={nameInputRef}
          id="name"
          name="name"
          autoComplete="name"
          required
          className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-base text-slate-100 placeholder:text-slate-400/80 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
          placeholder="Captain Jane Doe"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-base text-slate-100 placeholder:text-slate-400/80 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
            placeholder="you@skyprep.aero"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-base text-slate-100 placeholder:text-slate-400/80 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="topic"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
          >
            Topic
          </label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              className="appearance-none w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 pr-12 py-4 text-base text-slate-100 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
              defaultValue={selectedService?.name || "General"}
            >
              <option className="bg-slate-900 text-slate-100">General</option>
              {services.filter(service => 
                service.id === "1-to-1-coaching" || 
                service.id === "cohorts" || 
                service.id === "subject-wise"
              ).map((service) => (
                <option
                  key={service.id}
                  value={service.name}
                  className="bg-slate-900 text-slate-100"
                >
                  {service.name}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300/70"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="preferred"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
          >
            Preferred Contact
          </label>
          <div className="relative">
            <select
              id="preferred"
              name="preferred"
              className="appearance-none w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 pr-12 py-4 text-base text-slate-100 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
              defaultValue="Email"
            >
              <option className="bg-slate-900 text-slate-100">Email</option>
              <option className="bg-slate-900 text-slate-100">Phone</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300/70"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
        >
          Mission Brief *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="resize-none rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-base text-slate-100 placeholder:text-slate-400/80 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
          placeholder="Share your flying goals, current experience, and target milestones."
          defaultValue={selectedService ? `Hi! I'm interested in the ${selectedService.name} program. ` : ""}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button
          type="submit"
          className="group rounded-2xl px-8 py-4 font-semibold text-slate-950 shadow-[0_25px_70px_-40px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
          }}
        >
          <span className="flex items-center gap-2">
            Send Message
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-300/80">
          <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          <span>No spam. Ever.</span>
        </div>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={
      <form className="mt-6 grid gap-4" aria-label="Contact form">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm text-slate-700">Full name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="focus-ring border border-[--color-border] rounded-md p-3 bg-[--color-background]"
            placeholder="e.g. Captain Jane Doe"
          />
        </div>
        <div className="grid gap-1 md:grid-cols-2 md:gap-4">
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm text-slate-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="focus-ring border border-[--color-border] rounded-md p-3 bg-[--color-background]"
              placeholder="you@airmail.com"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="phone" className="text-sm text-slate-700">Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="focus-ring border border-[--color-border] rounded-md p-3 bg-[--color-background]"
              placeholder="e.g. +91 98765 43210"
            />
          </div>
        </div>
        <div className="grid gap-1 md:grid-cols-2 md:gap-4">
          <div className="grid gap-1">
            <label htmlFor="topic" className="text-sm text-slate-700">Topic</label>
            <div className="relative">
              <select
                id="topic"
                name="topic"
                className="appearance-none focus-ring border border-[--color-border] rounded-md px-3 pr-12 py-3 bg-[--color-background] w-full"
                defaultValue="General"
              >
                <option>General</option>
                {services.filter(service => 
                  service.id === "1-to-1-coaching" || 
                  service.id === "cohorts" || 
                  service.id === "subject-wise"
                ).map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="preferred" className="text-sm text-slate-700">Preferred contact</label>
            <div className="relative">
              <select
                id="preferred"
                name="preferred"
                className="appearance-none focus-ring border border-[--color-border] rounded-md px-3 pr-12 py-3 bg-[--color-background] w-full"
                defaultValue="Email"
              >
                <option>Email</option>
                <option>Phone</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm text-slate-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="focus-ring border border-[--color-border] rounded-md p-3 bg-[--color-background] resize-none"
            placeholder="Tell us a bit about your goals and timeline."
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
              className="inline-flex px-5 py-3 rounded-md font-medium shadow-sm hover:opacity-95 hover-lift"
            style={{
              background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
              color: "#0f172a",
            }}
          >
            Send message
          </button>
          <span className="text-sm text-slate-600">No spam. Ever.</span>
        </div>
      </form>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
