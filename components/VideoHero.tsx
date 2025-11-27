"use client";

import Image from "next/image";

interface VideoHeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  sharedBackground?: boolean;
}

export function VideoHero({
  title,
  description,
  buttonText,
  buttonHref,
  sharedBackground = false,
}: VideoHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        sharedBackground ? "w-full bg-transparent" : "w-screen bg-slate-950"
      }`}
      style={
        sharedBackground
          ? undefined
          : { marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }
      }
    >
      {!sharedBackground && (
        <>
          <div className="absolute inset-0">
            <Image
              src="/media/images/background.jpg"
              alt="SkyPrep Aero aviation training students and cadets preparing for DGCA exams and pilot certification"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/94 via-slate-950/70 to-slate-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/6 to-transparent mix-blend-soft-light" />
        </>
      )}

      <div className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-8 text-left text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] md:max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
          <div className="space-y-5 text-base text-slate-100 md:text-lg">
            <p className="text-slate-100/95">{description}</p>
            <p className="text-slate-100/90">
              From DGCA ground classes to advanced CPL preparation, we guide aspiring pilots through
              every stage of their aviation career—pairing airline captain mentors with personalised coaching
              and outcome-focused pilot training in India.
            </p>
            <p className="text-slate-100/90">
              Join India&apos;s premier aviation coaching institute—designed to help you clear DGCA exams in first attempt,
              ace airline selections, and step confidently into the cockpit with comprehensive pilot mentorship.
            </p>
          </div>
          <div>
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_18px_38px_-26px_rgba(245,158,11,0.45)] transition-all duration-300 hover:scale-[1.03] hover:from-amber-500 hover:via-amber-600 hover:to-amber-700"
              aria-label={`${buttonText} - ${title}`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
