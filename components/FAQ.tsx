"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  /** List of FAQ questions and answers */
  faqs: FAQItem[];
  /** Optional unique id for this FAQ section (for multiple sections on one page / a11y) */
  sectionId?: string;
};

function FAQItemComponent({
  faq,
  index,
  selectedIndex,
  onSelect,
  sectionId,
}: {
  faq: FAQItem;
  index: number;
  selectedIndex: number;
  onSelect: (i: number) => void;
  sectionId: string;
}) {
  const isOpen = selectedIndex === index;
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-white/[0.04] transition-all duration-300 ease-out ${
        isOpen
          ? "border-2 border-sky-500/40 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/20"
          : "border border-white/10 hover:border-white/20"
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect(isOpen ? -1 : index)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`${sectionId}-mobile-answer-${index}`}
        id={`${sectionId}-mobile-question-${index}`}
      >
        <span className="text-base font-semibold text-white">{faq.question}</span>
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-400 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`${sectionId}-mobile-answer-${index}`}
        role="region"
        aria-labelledby={`${sectionId}-mobile-question-${index}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 bg-white/[0.02] px-5 pb-4 pt-2 text-slate-200/90 text-sm leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ faqs, sectionId = "faq" }: FAQProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selected = faqs[selectedIndex] ?? faqs[0];

  if (!faqs.length) return null;

  return (
    <div className="mx-auto w-full">
      {/* Desktop: side-by-side list + answer panel */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:items-stretch">
        <nav
          className="flex h-full min-h-0 flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-3 ring-1 ring-white/5"
          aria-label="FAQ questions"
        >
          <div className="sticky top-24 space-y-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`block w-full rounded-xl border-l-4 px-5 py-4 text-left text-base font-medium transition-all duration-300 ease-out ${
                  selectedIndex === index
                    ? "border-l-sky-400 bg-sky-500/20 text-white shadow-[inset_0_0_0_1px_rgba(56,189,248,0.25)]"
                    : "border-l-transparent text-slate-300 hover:border-l-white/20 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={selectedIndex === index ? "true" : undefined}
                aria-controls={`${sectionId}-answer-panel`}
                id={`${sectionId}-question-${index}`}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </nav>
        <div
          id={`${sectionId}-answer-panel`}
          role="region"
          aria-labelledby={`${sectionId}-question-${selectedIndex}`}
          className="relative flex min-h-full flex-col overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.06] p-8 shadow-xl ring-1 ring-white/10 transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-sky-400 before:via-sky-500 before:to-sky-600"
        >
          <div key={selectedIndex} className="animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4">{selected.question}</h3>
            <p className="text-slate-200/90 leading-relaxed">{selected.answer}</p>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: compact accordion */}
      <div className="lg:hidden space-y-3">
        {faqs.map((faq, index) => (
          <FAQItemComponent
            key={index}
            faq={faq}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            sectionId={sectionId}
          />
        ))}
      </div>
    </div>
  );
}
