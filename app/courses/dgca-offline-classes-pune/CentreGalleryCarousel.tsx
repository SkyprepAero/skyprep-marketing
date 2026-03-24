"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type CentreGalleryItem = {
  image: string;
  title: string;
  description: string;
};

const AUTO_ADVANCE_MS = 6000;

export function CentreGalleryCarousel({ items }: { items: readonly CentreGalleryItem[] }) {
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);

  const goToIndex = useCallback(
    (index: number) => {
      if (!total) return;
      const container = sliderRef.current;
      if (!container) return;
      const clamped = ((index % total) + total) % total;
      const slideWidth = container.clientWidth;
      container.scrollTo({ left: clamped * slideWidth, behavior: "smooth" });
      activeIndexRef.current = clamped;
      setActiveIndex(clamped);
    },
    [total]
  );

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      goToIndex(activeIndexRef.current + 1);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [goToIndex, total]);

  useEffect(() => {
    const onResize = () => goToIndex(activeIndexRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goToIndex]);

  useEffect(() => {
    goToIndex(0);
  }, [goToIndex]);

  if (!total) return null;

  return (
    <div className="relative mx-auto w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 shadow-[0_40px_80px_-40px_rgba(14,165,233,0.35)]">
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goToIndex(activeIndexRef.current - 1)}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-sky-300 backdrop-blur hover:bg-slate-900/90 hover:text-sky-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goToIndex(activeIndexRef.current + 1)}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-sky-300 backdrop-blur hover:bg-slate-900/90 hover:text-sky-100 transition-colors"
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-live="polite"
        >
          {items.map((centre, index) => (
            <article
              key={index}
              className="group min-w-full shrink-0 snap-center flex flex-col"
            >
              <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden bg-slate-800/50 md:aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={centre.image}
                  alt={centre.title.replace(/^\[|\]$/g, "") || "DGCA classes Pune centre / classroom"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
              </div>
              <div className="flex flex-grow flex-col p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{centre.title}</h3>
                <p className="mt-2 flex-grow leading-relaxed text-slate-200/90">{centre.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Centre gallery slides">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Slide ${i + 1} of ${total}`}
              onClick={() => goToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.45)]" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
