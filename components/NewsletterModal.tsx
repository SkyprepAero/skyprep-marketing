"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { subscribeToNewsletter, type NewsletterSubscriptionData } from "@/lib/api";
import toast from "react-hot-toast";

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = (formData.get("email") as string)?.trim();
    const name = (formData.get("name") as string)?.trim();

    // Validate email
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate name
    if (!name || name.length < 2) {
      toast.error("Please enter your full name.");
      return;
    }

    setStatus("submitting");

    const payload: NewsletterSubscriptionData = {
      email,
      name,
      topic: "Test Series",
      interests: ["updates"],
      source: "test-series-page",
    };

    try {
      const response = await subscribeToNewsletter(payload);
      setStatus("idle");
      formRef.current?.reset();
      toast.success(response.message || "Successfully subscribed! We'll notify you when Test Series launches.");
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error: unknown) {
      setStatus("idle");
      const apiMessage =
        typeof error === "object" && error !== null && "response" in error
          ? // @ts-expect-error - axios style error
            error?.response?.data?.message || "Failed to subscribe. Please try again."
          : "Failed to subscribe. Please try again.";
      toast.error(apiMessage as string);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative z-10 p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Get Notified When We Launch
            </h2>
            <p className="text-slate-300/80 text-sm">
              Be the first to access our DGCA Test Series. We&apos;ll notify you as soon as it&apos;s ready!
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="newsletter-name"
                className="block text-sm font-semibold text-slate-200 mb-2"
              >
                Full Name *
              </label>
              <input
                ref={nameInputRef}
                id="newsletter-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Captain Jane Doe"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="newsletter-email"
                className="block text-sm font-semibold text-slate-200 mb-2"
              >
                Email Address *
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@airmail.com"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl px-6 py-3.5 font-semibold text-slate-950 shadow-[0_20px_50px_-30px_rgba(245,158,11,0.7)] hover:shadow-[0_25px_60px_-35px_rgba(245,158,11,0.8)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
              }}
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
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
                  Subscribing...
                </span>
              ) : (
                "Subscribe to Newsletter"
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-4 text-xs text-slate-400/80 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

