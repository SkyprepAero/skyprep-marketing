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
        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full name *</label>
        <input
          ref={nameInputRef}
          id="name"
          name="name"
          autoComplete="name"
          required
          className="border-2 border-slate-200 rounded-xl px-4 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
          placeholder="e.g. Captain Jane Doe"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border-2 border-slate-200 rounded-xl px-4 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
            placeholder="you@airmail.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="border-2 border-slate-200 rounded-xl px-4 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
            placeholder="e.g. +91 98765 43210"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="topic" className="text-sm font-semibold text-slate-700">Topic</label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              className="appearance-none border-2 border-slate-200 rounded-xl px-4 pr-12 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none w-full"
              defaultValue={selectedService?.name || "General"}
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
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
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
          <label htmlFor="preferred" className="text-sm font-semibold text-slate-700">Preferred contact</label>
          <div className="relative">
            <select
              id="preferred"
              name="preferred"
              className="appearance-none border-2 border-slate-200 rounded-xl px-4 pr-12 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none w-full"
              defaultValue="Email"
            >
              <option>Email</option>
              <option>Phone</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
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
        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="border-2 border-slate-200 rounded-xl px-4 py-3.5 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none resize-none"
          placeholder="Tell us a bit about your goals and timeline."
          defaultValue={selectedService ? `Hi! I'm interested in the ${selectedService.name} program. ` : ""}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button
          type="submit"
          className="group px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
            color: "#0f172a",
          }}
        >
          <span className="flex items-center gap-2">
            Send Message
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
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
