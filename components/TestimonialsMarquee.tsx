"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
  image?: string;
};

const avatar = (seed: string) => `https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixid=${encodeURIComponent(seed)}`;
const DATA: Testimonial[] = [
  { name: "Rohit", role: "PPL", quote: "Turned theory into confidence. The briefs and drills made everything click—walked into my written relaxed.", rating: 5, image: avatar("rohit") },
  { name: "Maya", role: "CPL", quote: "Feedback that sticks. Short debriefs after each sortie showed me exactly what to fix next.", rating: 5, image: avatar("maya") },
  { name: "Arjun", role: "IR", quote: "IFR no longer scary. Procedures and comms became habit—my workload dropped massively.", rating: 5, image: avatar("arjun") },
  { name: "Sana", role: "PPL", quote: "Crystal‑clear study plan. No more guessing what to do next.", rating: 5, image: avatar("sana") },
  { name: "Dev", role: "CPL", quote: "Briefings and flows made my cockpit workload manageable.", rating: 5, image: avatar("dev") },
  { name: "Ishaan", role: "IR", quote: "Comms scripts and drills removed the ‘IFR fear factor’.", rating: 5, image: avatar("ishaan") },
  { name: "Leah", role: "PPL", quote: "Ground to flight felt connected—everything had a reason.", rating: 5, image: avatar("leah") },
  { name: "Nikhil", role: "PPL", quote: "Loved the exam drill packs and test series—huge confidence boost.", rating: 5, image: avatar("nikhil") },
  { name: "Aisha", role: "CPL", quote: "Weekly micro‑goals kept me consistent even while working.", rating: 5, image: avatar("aisha") },
  { name: "Zara", role: "IR", quote: "Scenario practice made real flights feel familiar.", rating: 5, image: avatar("zara") },
];

function Card(t: Testimonial) {
  return (
    <div
      className="rounded-2xl border border-[--color-border] bg-[--color-background] p-6 inline-flex flex-col w-[360px] flex-none overflow-hidden leading-normal"
      style={{ whiteSpace: "normal" }}
    >
      <div className="flex items-center gap-2 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className={i < (t.rating || 0) ? "" : "opacity-30"}>
            <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
          </svg>
        ))}
      </div>
      <p
        className="mt-3 font-medium leading-relaxed"
        style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
      >
        “{t.quote}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        {t.image ? (
          <div className="h-9 w-9 rounded-full overflow-hidden flex-none">
            <Image src={t.image} alt={t.name} width={36} height={36} className="h-9 w-9 object-cover" />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold flex-none" style={{ backgroundColor: "#ADE1EF", color: "#0f172a" }}>
            {t.name.slice(0, 1)}
          </div>
        )}
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [paused, setPaused] = useState<boolean>(false);

  // Split data into two rows evenly
  const half = Math.ceil(DATA.length / 2);
  const rowA = DATA.slice(0, half);
  const rowB = DATA.slice(half);

  useEffect(() => {
    const speed1 = 0.6; // px per frame
    const speed2 = 0.8;

    function loop() {
      if (!row1Ref.current || !row2Ref.current) return;
      if (!paused) {
        const r1 = row1Ref.current;
        const r2 = row2Ref.current;
        r1.scrollLeft += speed1;
        r2.scrollLeft -= speed2;
        // When auto-scrolling, content is duplicated, so loop at half
        const max1 = r1.scrollWidth / 2;
        const max2 = r2.scrollWidth / 2;
        if (r1.scrollLeft >= max1) r1.scrollLeft = 0;
        if (r2.scrollLeft <= 0) r2.scrollLeft = max2;
      }
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  function nudge(ref: React.RefObject<HTMLDivElement | null>, dir: number) {
    const el = ref.current;
    if (!el) return;
    const delta = dir * 240;
    const max = el.scrollWidth - el.clientWidth;
    const next = Math.max(0, Math.min(max, el.scrollLeft + delta));
    el.scrollLeft = next;
  }

  const Track = ({ items }: { items: Testimonial[] }) => (
    <div className="inline-flex gap-6 px-1 align-top" style={{ whiteSpace: "nowrap", lineHeight: 0 }}>
      {items.map((t, i) => (
        <Card key={`${t.name}-${t.role}-${i}`} {...t} />
      ))}
    </div>
  );

  const Row = ({ reverse = false, data }: { reverse?: boolean; data: Testimonial[] }) => (
    <div className="relative overflow-hidden" style={{ lineHeight: 0 }}>
      <div
        ref={reverse ? row2Ref : row1Ref}
        className="marquee"
        onClick={() => setPaused((p) => !p)}
        style={{ cursor: paused ? "default" : "pointer" }}
      >
        {paused ? (
          // Show items once, no duplication when paused
          <Track items={data} />
        ) : (
          // Duplicate for seamless loop when auto-scrolling
          <div className="inline-flex align-top">
            <Track items={data} />
            <Track items={data} />
          </div>
        )}
      </div>
      {paused && (
        <>
          <button
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-slate-900 shadow hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              nudge(reverse ? row2Ref : row1Ref, -1);
            }}
          >
            ◀
          </button>
          <button
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-slate-900 shadow hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              nudge(reverse ? row2Ref : row1Ref, 1);
            }}
          >
            ▶
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="mt-8 space-y-6">
      <Row data={rowA} />
      <Row reverse data={rowB.length ? rowB : rowA} />
      <p className="mt-2 text-xs text-slate-500">Click anywhere on a row to {paused ? "resume" : "pause"}. Use arrows to navigate when paused.</p>
    </div>
  );
}


