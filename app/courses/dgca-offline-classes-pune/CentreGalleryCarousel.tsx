"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export type CentreGalleryItem = {
  image: string;
  title: string;
  description: string;
};

const AUTO_ADVANCE_MS = 6000;

export function CentreGalleryCarousel({ items }: { items: readonly CentreGalleryItem[] }) {
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: total > 1, align: "start" });

  const goToIndex = useCallback(
    (index: number) => {
      if (!emblaApi || !total) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, total]
  );

  useEffect(() => {
    if (!emblaApi || total <= 1) return;
    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, total]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || total <= 1) return;

    const isTypingTarget = (el: EventTarget | null) => {
      if (!el || !(el instanceof HTMLElement)) return false;
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
      if (el.isContentEditable) return true;
      return Boolean(el.closest("[contenteditable='true']"));
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (isTypingTarget(document.activeElement)) return;
      e.preventDefault();
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      else emblaApi.scrollNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [emblaApi, total]);

  if (!total) return null;

  return (
    <div
      className="relative mx-auto w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Centre photo gallery"
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_40px_80px_-40px_rgba(14,165,233,0.35)]">
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-sky-300 backdrop-blur hover:bg-slate-900/90 hover:text-sky-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-sky-300 backdrop-blur hover:bg-slate-900/90 hover:text-sky-100 transition-colors"
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div ref={emblaRef} className="overflow-hidden" aria-live="polite">
          <div className="flex">
            {items.map((centre, index) => (
              <article
                key={index}
                className="group min-w-full shrink-0 flex flex-col"
              >
                <div className="relative h-[380px] overflow-hidden bg-slate-800/50 sm:h-[480px] md:h-[600px] lg:h-[min(72vh,820px)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={centre.image}
                    alt={centre.title.replace(/^\[|\]$/g, "") || "DGCA classes Pune centre / classroom"}
                    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                </div>
                <div className="flex flex-grow flex-col p-7 md:p-10">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">{centre.title}</h3>
                  <p className="mt-3 flex-grow text-base leading-relaxed text-slate-200/90 md:text-lg">{centre.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {total > 1 && (
        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Centre gallery slides">
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
