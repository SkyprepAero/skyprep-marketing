"use client";
import { useEffect, useRef, useState } from "react";
import { ScrollAnimation } from "../app/home/components/ScrollAnimation";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  achievement: string;
  avatar: string;
};

const DATA: Testimonial[] = [
  { 
    name: "Rohit Sharma", 
    role: "Private Pilot License", 
    quote: "SkyPrep turned theory into confidence. The personalized briefs and drills made everything click—I walked into my written exam completely relaxed and passed on the first try.", 
    rating: 5, 
    achievement: "Passed PPL Written in 1st Attempt",
    avatar: "RS"
  },
  { 
    name: "Maya Patel", 
    role: "Commercial Pilot License", 
    quote: "The one-on-one coaching was game-changing. Short, actionable debriefs after each flight showed me exactly what to focus on next. My flying improved dramatically.", 
    rating: 5, 
    achievement: "Completed CPL 40% Faster",
    avatar: "MP"
  },
  { 
    name: "Arjun Singh", 
    role: "Instrument Rating", 
    quote: "IFR training was no longer scary. The procedures and communications became second nature—my workload dropped massively and I felt confident in any weather.", 
    rating: 3, 
    achievement: "Mastered IFR Procedures",
    avatar: "AS"
  },
  { 
    name: "Sana Ahmed", 
    role: "Private Pilot License", 
    quote: "The custom learning path was perfect for my schedule. No more guessing what to study next—everything was clearly planned and I could study at my own pace.", 
    rating: 5, 
    achievement: "Balanced Work & Training",
    avatar: "SA"
  },
  { 
    name: "Dev Kumar", 
    role: "Commercial Pilot License", 
    quote: "The online platform made learning so convenient. I could study during my breaks at work and the one-on-one sessions fit perfectly into my busy schedule.", 
    rating: 2, 
    achievement: "Flexible Learning Schedule",
    avatar: "DK"
  },
  { 
    name: "Ishaan Verma", 
    role: "Instrument Rating", 
    quote: "The communication scripts and practice drills removed all the 'IFR fear factor'. I felt prepared for any scenario and my confidence soared.", 
    rating: 5, 
    achievement: "Overcame IFR Anxiety",
    avatar: "IV"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 w-[380px] max-w-[380px] flex-shrink-0 flex flex-col min-w-0 max-h-none overflow-visible">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 w-6 h-6 text-amber-500 opacity-20">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-700 text-sm leading-relaxed mb-4 font-medium flex-1 break-words overflow-wrap-anywhere hyphens-auto" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
        "{testimonial.quote}"
      </blockquote>

      {/* Achievement Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-3 py-1.5 mb-4 flex-shrink-0 min-w-0">
        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
        <span className="text-amber-800 text-xs font-semibold break-words overflow-wrap-anywhere" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{testimonial.achievement}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-slate-900 text-sm break-words overflow-wrap-anywhere" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{testimonial.name}</h4>
          <p className="text-slate-600 text-xs break-words overflow-wrap-anywhere" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Calculate actual average rating from testimonials
  const averageRating = DATA.reduce((sum, testimonial) => sum + testimonial.rating, 0) / DATA.length;
  const formattedRating = averageRating.toFixed(1);

  // Split data into two rows evenly
  const half = Math.ceil(DATA.length / 2);
  const rowA = DATA.slice(0, half);
  const rowB = DATA.slice(half);

  useEffect(() => {
    const speed1 = 0.8; // px per frame
    const speed2 = 1.0;

    function loop() {
      if (!row1Ref.current || !row2Ref.current) return;
      const r1 = row1Ref.current;
      const r2 = row2Ref.current;
      r1.scrollLeft += speed1;
      r2.scrollLeft -= speed2;
      // When auto-scrolling, content is duplicated, so loop at half
      const max1 = r1.scrollWidth / 2;
      const max2 = r2.scrollWidth / 2;
      if (r1.scrollLeft >= max1) r1.scrollLeft = 0;
      if (r2.scrollLeft <= 0) r2.scrollLeft = max2;
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const Track = ({ items }: { items: Testimonial[] }) => (
    <div className="inline-flex gap-6 px-1 align-top" style={{ lineHeight: 0 }}>
      {items.map((t, i) => (
        <TestimonialCard key={`${t.name}-${t.role}-${i}`} testimonial={t} />
      ))}
    </div>
  );

  const Row = ({ reverse = false, data }: { reverse?: boolean; data: Testimonial[] }) => (
    <div className="relative overflow-hidden" style={{ lineHeight: 0 }}>
      <div
        ref={reverse ? row2Ref : row1Ref}
        className="marquee"
      >
        {/* Duplicate for seamless loop when auto-scrolling */}
        <div className="inline-flex align-top">
          <Track items={data} />
          <Track items={data} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
            <path d="M50 10 L60 30 L80 30 L70 50 L80 70 L60 70 L50 90 L40 70 L20 70 L30 50 L20 30 L40 30 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-20 h-20 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Auto-scrolling Testimonials */}
      <div className="space-y-6">
        <Row data={rowA} />
        <Row reverse data={rowB.length ? rowB : rowA} />
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <ScrollAnimation animationType="fadeInUp" delay={1000}>
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl px-8 py-6 border border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-600">Satisfaction Rate</div>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{formattedRating}</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

    </div>
  );
}


