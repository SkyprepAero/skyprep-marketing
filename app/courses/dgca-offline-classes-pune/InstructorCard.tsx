"use client";

import Image from "next/image";
import { useState } from "react";

export type InstructorCardProps = {
  name: string;
  role: string;
  bio: string;
  /** Exactly three short highlights shown as bullets below the intro */
  highlights: readonly [string, string, string];
  /** Add portrait under public/ — e.g. /media/images/instructors/vimal.jpg */
  image: string;
};

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function InstructorCard({ name, role, bio, highlights, image }: InstructorCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = image && !imgFailed;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_20px_50px_-35px_rgba(15,23,42,1)] transition-all duration-500 hover:-translate-y-0.5 hover:border-sky-400/25 hover:shadow-[0_28px_60px_-40px_rgba(56,189,248,0.3)]">
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-900 sm:h-72 md:h-64 lg:h-[20rem] xl:h-[22rem]">
        {showPhoto ? (
          <Image
            src={image}
            alt={`${name} — ${role}, SkyPrep Aero`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
            onError={() => setImgFailed(true)}
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sky-600/25 via-slate-900 to-blue-950">
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.35) 0, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(14, 165, 233, 0.2) 0, transparent 45%)`,
            }} />
            <span className="relative text-4xl font-bold tracking-tight text-sky-100/35 sm:text-5xl">
              {initialsFromName(name)}
            </span>
            <span className="relative mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Photo coming soon
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <span className="mb-1 inline-flex rounded-full border border-sky-400/40 bg-slate-950/55 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-sky-100 backdrop-blur-md">
            {role}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-xl">
            {name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t border-white/10 bg-slate-950/40 p-4 sm:p-5">
        <p className="text-sm leading-snug text-slate-300/95 sm:text-[15px] sm:leading-relaxed">{bio}</p>
        <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
          {highlights.map((line) => (
            <li key={line} className="flex gap-2 text-xs leading-snug text-slate-200/95 sm:text-[13px] sm:leading-snug">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-sky-400/90" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
