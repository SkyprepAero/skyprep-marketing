"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: number;
  passedSubjects: string[];
  avatar: string;
  photo?: string;
};

const DATA: Testimonial[] = [
  { 
    name: "Viraj Ghanwat",
    title: "CPL Completed NZ",
    quote: "SkyPrep Aero receives very positive feedback as an aviation training ground school, particularly for its ground school courses. The ability to study at your own pace is seen as a significant advantage, especially for busy learners or those wanting to review material before exams.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "VG"
  },
  { 
    name: "Vivek M",
    title: "Airline Crew",
    quote: "This class provided a clear and practical overview of how weather and regulatory frameworks impact aviation operations. It balanced theory with real-world applications, making it especially valuable for professionals working while studying.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations"],
    avatar: "VM"
  },
  { 
    name: "Mrudini Katare",
    title: "CPL Completed USA",
    quote: "Very good instructors, they're really helpful and knowledgeable.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "MK"
  },
  { 
    name: "Vipin Memane",
    title: "CPL Trainee South Africa",
    quote: "I had an excellent experience with SkyPrep Aero. The ground classes were structured, clear, and taught by professionals who truly understand how to guide aspiring pilots. Among all the offerings, Focus One stood out as the best product for me.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations"],
    avatar: "VM"
  },
  { 
    name: "Sheetal Rawat",
    title: "CPL Trainee South Africa",
    quote: "SkyPrep Aero has been a game-changer in my aviation journey. I used the Focus One program, and it gave me exactly the structure, clarity, and revision technique I needed. Thanks to Focus One, I cleared all my papers in the very first attempt.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "SR"
  },
  { 
    name: "Shubham",
    title: "CPL Completed USA",
    quote: "SkyPrep Aero's Cohorts Program was exactly what I needed before starting my flying in the USA. The structured group learning, regular discussions, and mentor-led sessions helped me strengthen every concept.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations"],
    avatar: "SH"
  },
  { 
    name: "Vishal Bharti",
    title: "CPL Trainee India",
    quote: "When I was struggling with my DGCA papers, SkyPrep Aero became the turning point in my preparation. The mentors explained every concept with such clarity that topics I once found difficult started making complete sense.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "VB"
  },
  { 
    name: "Prachi",
    title: "DGCA Student",
    quote: "One thing I absolutely love about SkyPrep Aero is the environment—it's positive, energetic, and instantly motivating. Every class feels like a place where you grow, get inspired, and stay focused on your goals.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations"],
    avatar: "PR"
  },
  { 
    name: "Hrishikesh Algur",
    title: "DGCA Student",
    quote: "There was a phase when I genuinely felt like backing out of aviation. The stress, setbacks, and self-doubt were getting overwhelming. That's when SkyPrep Aero stepped in. Their guidance, support, and the way they kept motivating me made all the difference. They helped me rebuild my confidence and reminded me why I started this journey in the first place. I'm still in aviation today because SkyPrep didn't let me give up.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "HA"
  },
  { 
    name: "Aishwarya Patil",
    title: "CPL Completed USA",
    quote: "I was completely confused about where to start—flying schools, medicals, computer number, and the entire process felt overwhelming. SkyPrep Aero helped me find the perfect solutions to every doubt I had. They guided me step-by-step, cleared all my confusion, and made the whole journey feel simple and achievable. I'm truly grateful for their support and clarity during a time when I felt lost.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "AP"
  },
  { 
    name: "Atharva Panigai",
    title: "DGCA Student / IT Industry",
    quote: "Managing aviation studies alongside a full-time IT job felt impossible until I connected with SkyPrep Aero. Their guidance, clarity, and structured approach made it so much easier to balance work and preparation. Even with my busy schedule, they helped me stay consistent, understand concepts clearly, and move forward without confusion. SkyPrep truly understands the challenges of working professionals and supports you at every step.", 
    rating: 5, 
    passedSubjects: ["Meteorology", "Regulations", "Navigation"],
    avatar: "AP"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative flex w-[400px] flex-col overflow-visible rounded-3xl border border-white/12 bg-white/[0.08] p-6 text-slate-100 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.85)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_130px_-60px_rgba(56,189,248,0.6)]">
      <div className="absolute top-4 right-4 w-6 h-6 text-amber-300/50">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={`transition ${i < testimonial.rating ? "text-amber-300" : "text-slate-500/40"}`}>
            <path d="M12 2l3 6 6 .9-4.5 4.1 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
          </svg>
        ))}
      </div>

      <blockquote className="flex-1 text-sm font-medium leading-relaxed text-slate-200/85">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {testimonial.passedSubjects.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {testimonial.passedSubjects.map((subject) => (
            <span 
              key={subject} 
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {subject}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        {testimonial.photo ? (
          <Image 
            src={testimonial.photo} 
            alt={testimonial.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover shadow-lg shadow-black/30 ring-2 ring-white/20"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-black/30">
            {testimonial.avatar}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white" title={testimonial.name}>
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-300/80">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Auto-scroll animation
  useEffect(() => {
    const speed = 0.8; // px per frame

    function loop() {
      if (!rowRef.current || isPaused) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      const row = rowRef.current;
      row.scrollLeft += speed;
      // When auto-scrolling, content is duplicated, so loop at half
      const max = row.scrollWidth / 2;
      if (row.scrollLeft >= max) row.scrollLeft = 0;
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  // Handle mouse down - pause and start drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!rowRef.current) return;
    setIsPaused(true);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = rowRef.current.scrollLeft;
    e.preventDefault();
  }, []);

  // Handle mouse move - drag if active
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !rowRef.current) return;
    const diff = dragStartX.current - e.clientX;
    rowRef.current.scrollLeft = scrollStartX.current + diff;
    
    // Handle infinite loop during drag
    const max = rowRef.current.scrollWidth / 2;
    if (rowRef.current.scrollLeft >= max) {
      rowRef.current.scrollLeft -= max;
      scrollStartX.current -= max;
    } else if (rowRef.current.scrollLeft <= 0) {
      rowRef.current.scrollLeft += max;
      scrollStartX.current += max;
    }
  }, [isDragging]);

  // Handle mouse up - resume auto-scroll
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  // Handle mouse leave - resume if was dragging
  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
  }, [isDragging]);

  // Handle touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!rowRef.current) return;
    setIsPaused(true);
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = rowRef.current.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !rowRef.current) return;
    const diff = dragStartX.current - e.touches[0].clientX;
    rowRef.current.scrollLeft = scrollStartX.current + diff;
    
    // Handle infinite loop during drag
    const max = rowRef.current.scrollWidth / 2;
    if (rowRef.current.scrollLeft >= max) {
      rowRef.current.scrollLeft -= max;
      scrollStartX.current -= max;
    } else if (rowRef.current.scrollLeft <= 0) {
      rowRef.current.scrollLeft += max;
      scrollStartX.current += max;
    }
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  const Track = ({ items }: { items: Testimonial[] }) => (
    <div className="inline-flex gap-6 px-1 py-4 align-top">
      {items.map((t, i) => (
        <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
      ))}
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

      {/* Auto-scrolling Testimonials - Single Row */}
      <div 
        className="relative overflow-x-hidden overflow-y-visible py-4 -my-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div ref={rowRef} className="marquee select-none">
          <div className="inline-flex align-top">
            <Track items={DATA} />
            <Track items={DATA} />
          </div>
        </div>
      </div>
    </div>
  );
}


