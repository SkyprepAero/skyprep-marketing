"use client";

import { useState } from "react";
import Link from "next/link";
import { NewsletterModal } from "@/components/NewsletterModal";

export function NewsletterSubscriptionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/12 shadow-[0_45px_110px_-60px_rgba(15,23,42,1)] max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <h3 className="text-xl font-semibold text-white">Get Notified When We Launch</h3>
        </div>
        <p className="text-slate-300/80 mb-6">
          Be the first to access our DGCA Test Series. We&apos;ll notify you as soon as it&apos;s ready!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 px-8 py-4 rounded-xl font-semibold text-slate-950 shadow-[0_20px_50px_-30px_rgba(245,158,11,0.7)] hover:shadow-[0_25px_60px_-35px_rgba(245,158,11,0.8)] transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
            }}
          >
            Notify Me
          </button>
          <Link
            href="/courses"
            className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-slate-100 hover:bg-white/10 transition-all duration-300 text-center"
          >
            Explore Other Courses
          </Link>
        </div>
      </div>
    </>
  );
}

