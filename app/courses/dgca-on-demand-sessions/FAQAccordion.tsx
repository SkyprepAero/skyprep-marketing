"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are DGCA on demand sessions?",
    answer:
      "DGCA on demand sessions are flexible 1:1 online DGCA coaching sessions where you book a time that suits you, learn at your own pace, and get personalized mentoring from expert instructors. There are no fixed batch dates—you schedule sessions when you need them for DGCA exam preparation.",
  },
  {
    question: "Are DGCA on demand classes better than batch classes?",
    answer:
      "It depends on your schedule and learning style. DGCA on demand classes are better if you need flexible time slots, one-on-one attention, or want to focus on specific subjects. Batch classes work well if you prefer a fixed routine and peer interaction. Many students use both—on demand for weak subjects and batches for structure.",
  },
  {
    question: "Can I book single subject sessions?",
    answer:
      "Yes. You can book DGCA on demand sessions for a single subject—Air Regulation, Aviation Meteorology, Air Navigation, or Technical General—or combine multiple subjects. This is ideal for repeat attempt candidates or anyone strengthening one area.",
  },
  {
    question: "Are recordings available?",
    answer:
      "No. Recorded session access is not available for DGCA On Demand Sessions. As we believe in the power of live learning and interaction.",
  },
  {
    question: "How flexible are the schedules?",
    answer:
      "Very flexible. You choose the time slot—mornings, evenings, or weekends—and we match you with an instructor. There are no fixed batch dates, so DGCA on demand sessions work for working professionals, cadet pilots, and anyone with a busy schedule.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "bg-white/[0.08]" : "bg-white/[0.06]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-semibold text-white hover:bg-white/[0.04] transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span>{faq.question}</span>
              <span
                className={`flex-shrink-0 text-sky-400 transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden
              >
                ▼
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-6 pb-5 pt-0 text-slate-200/90 transition-opacity duration-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
