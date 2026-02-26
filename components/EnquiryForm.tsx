"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { submitEnquiryForm, type LeadFormData } from "@/lib/api";
import toast from "react-hot-toast";
import { PhoneInput } from "@/components/PhoneInput";

type SubmissionState = "idle" | "submitting";

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const topicOptions = [
  "General",
  "DGCA On Demand Sessions",
  "Cohorts",
  "DGCA Medical Assistance",
  "DGCA Computer Number Assistance",
  "eLogbook Filing Assistance",
  "Conversion Training",
  "Test Series",
  "Other",
];

export function EnquiryForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmissionState>("idle");

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    setStatus("submitting");

    const payload: LeadFormData = {
      name: (formData.get("name") as string)?.trim(),
      email,
      phone: phone || undefined,
      topic: (formData.get("topic") as string)?.trim() || undefined,
      message: (formData.get("message") as string)?.trim(),
    };

    try {
      await submitEnquiryForm(payload, {
        referrer: document.referrer || window.location.href,
        userAgent: navigator.userAgent,
      });
      setStatus("idle");
      formRef.current?.reset();
      nameInputRef.current?.focus();
      toast.success("Enquiry submitted successfully! Expect a response within 24 hours.");
    } catch (error: unknown) {
      setStatus("idle");
      const apiMessage =
        typeof error === "object" && error !== null && "response" in error
          ? // @ts-expect-error - narrow known axios error shape without importing types
            error?.response?.data?.message || "Failed to submit enquiry. Please try again."
          : "Failed to submit enquiry. Please try again.";
      toast.error(apiMessage as string);
    }
  };

  return (
    <form ref={formRef} id="enquiry-form" className="grid gap-6" aria-label="Enquiry form" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="enquiry-name" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
            Full name *
          </label>
          <input
            ref={nameInputRef}
            id="enquiry-name"
            name="name"
            autoComplete="name"
            required
            placeholder="e.g. Captain Jane Doe"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="enquiry-email" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
            Email *
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@airmail.com"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
          />
        </div>
      </div>

      <PhoneInput
        id="enquiry-phone"
        name="phone"
        label="Phone / WhatsApp"
        placeholder="98765 43210"
        labelClassName="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80"
        variant="enquiry"
      />

      <div className="grid gap-2">
        <label htmlFor="enquiry-topic" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
          Topic
        </label>
        <div className="relative">
          <select
            id="enquiry-topic"
            name="topic"
            defaultValue="General"
            className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 pr-12 text-slate-100 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20 [&>option]:bg-white [&>option]:text-slate-900"
          >
            {topicOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="enquiry-message" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
          Mission brief *
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={6}
          required
          placeholder="Include current flight hours, exams cleared, budget thoughts, and where you need the most support."
          className="resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-slate-100 transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
        />
      </div>

      <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_45px_-25px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="animate-spin h-4 w-4 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit enquiry
              <svg
                className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
        <div className="flex items-center gap-3 text-sm text-slate-200/75">
          <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          <span>Private & secure — we only use this to reply.</span>
        </div>
      </div>
    </form>
  );
}

