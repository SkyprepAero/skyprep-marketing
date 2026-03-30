import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ScrollAnimation } from "@/app/home/components/ScrollAnimation";
import Link from "next/link";
import { getContactUrl, getWhatsAppUrl } from "@/config/services";
import { CentreGalleryCarousel } from "./CentreGalleryCarousel";
import { InstructorCard } from "./InstructorCard";

// ——— Placeholders: replace with actual information ———
const PLACEHOLDERS = {
  heroImage: "/media/images/offline-pune.jpg",
  // Add portraits under public/media/images/instructors/ (see image paths below)
  instructors: [
    {
      name: "Vimal Singh ",
      role: "Chief Ground Instructor",
      image: "/media/images/instructors/vimal.jpg",
      bio: "Chief Ground Instructor with US flight training and an Indian pilot licence. He breaks down complex DGCA theory with clarity and mentors students one-on-one so they stay focused and exam-ready.",
      highlights: [
        "US-trained with strong academic & practical depth",
        "Disciplined teaching—solid conceptual base for every student",
        "Hands-on mentor for confidence through your CPL journey",
      ] as const,
    },
    {
      name: "Prathmesh Shinde",
      role: "Ground Instructor",
      image: "/media/images/instructors/prathmesh-shinde.png",
      bio: "I’m Prathmesh Shinde, a Ground Instructor at SkyPrep Aero. I specialize in DGCA subjects like Air Navigation and Air Regulation, focusing on clear concepts and exam-oriented preparation. My aim is to help students build strong fundamentals and confidently progress toward their careers as professional pilots.",
      highlights: [
        "Specialized in Air Navigation and Air Regulation",
        "Concept clarity with exam-oriented preparation",
        "Focus on strong fundamentals for pilot careers",
      ] as const,
    },
    {
      name: "Khushi Bhagwat",
      role: "Aviation professional",
      image: "/media/images/instructors/khushi.jpg",
      bio: "Trained in Jalgaon and airline-selected—she embodies discipline and focus. She champions women in aviation and inspires young aviators to pursue their dreams with confidence.",
      highlights: [
        "Airline-selected milestone after flight training in Jalgaon",
        "Role model for women pilots in India’s growing community",
        "Inspires young women to break barriers in aviation",
      ] as const,
    },
  ] as const,
  centres: [
    {
      image: "/media/classroom/tilekarnagar/CLASSROOM1.jpeg",
      title: "Classroom — teaching wall",
      description:
        "Our offline DGCA CPL batch runs in this single, dedicated classroom. This angle highlights the teaching wall and board so you can see how concepts and problems are presented during sessions.",
    },
    {
      image: "/media/classroom/tilekarnagar/classroom2.jpeg",
      title: "Same classroom — side view",
      description:
        "Another perspective of the same room—not a separate hall. Same seating and teaching setup, shown from the side so you get a feel for the layout before you walk in.",
    },
    {
      image: "/media/classroom/tilekarnagar/classroom5.jpeg",
      title: "Same classroom — wide angle",
      description:
        "A wider look at the same training space: where your batch sits for structured theory, doubt clearing, and peer discussion across all five DGCA subjects.",
    },
    {
      image: "/media/classroom/tilekarnagar/classroom7.jpeg",
      title: "Same classroom — across the room",
      description:
        "One more view of the same classroom from a different corner—useful for picturing sightlines, comfort, and how the room is organised for full-day study.",
    },
    {
      image: "/media/classroom/tilekarnagar/LOBBY.jpeg",
      title: "Reception & lobby",
      description:
        "The centre’s entrance and waiting area—arrive here before class, meet the team, and head into the classroom when your batch begins.",
    },
  ] as const,
} as const;

export const metadata: Metadata = buildPageMetadata({
  title: "DGCA Classes Pune | Offline CPL Classes Pune | Aviation Ground Classes Pune",
  description: "Pune: Offline DGCA classes—in-person aviation ground classes in Pune. DGCA theory coaching for CPL in Pune. We also run online batches. SkyPrep Aero.",
  canonicalPath: "/courses/dgca-offline-classes-pune",
  keywords: [
    "DGCA classes Pune",
    "CPL classes Pune",
    "aviation ground classes Pune",
    "offline DGCA classes Pune",
    "offline CPL classes Pune",
    "DGCA classes in Pune",
    "CPL classes in Pune",
    "DGCA ground classes Pune",
    "CPL ground classes Pune",
    "pilot training Pune",
    "DGCA exam coaching Pune",
    "CPL theory classes Pune",
    "DGCA theory coaching Pune",
    "CPL batch classes Pune",
  ],
});

export default function DGCAOfflineClassesPunePage() {
  return (
    <div className="full-bleed relative bg-slate-950 text-slate-100">
      {/* Hero */}
      <section
        className="relative full-bleed overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${PLACEHOLDERS.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/72 to-blue-950/78" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-emerald-400/18 blur-[160px]" />
        <AviationBackground className="opacity-12" />

        <div className="container-wide relative z-10 py-24">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur rounded-full px-8 py-3 mb-6 shadow-[0_25px_60px_-38px_rgba(15,23,42,0.8)] border border-white/25">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                  Offline · In-Person
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_18px_34px_rgba(15,23,42,0.7)] mb-8 leading-tight">
                Offline DGCA CPL Classes —
                <span className="block gradient-text-primary leading-tight">
                  Pune
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_12px_30px_rgba(15,23,42,0.65)]">
                In-person, offline DGCA CPL classes in Pune. Structured DGCA theory coaching for CPL—all five subjects: Air Regulation, Meteorology, Navigation, Technical General, and Technical Specific—in a dedicated classroom so you learn alongside peers and clear doubts face-to-face.
              </p>
              <p className="mt-4 text-slate-200/90 max-w-2xl mx-auto text-lg">
                This page is for our <strong className="text-white">offline batches in Pune</strong>. We also run online DGCA and CPL batches—<Link href="/courses" className="text-sky-300 hover:text-sky-200 underline underline-offset-2">view all courses</Link>.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why offline? */}
      <section className="relative z-10 py-20 full-bleed">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-14 left-14 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Why offline?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Offline DGCA CPL Classes?</h2>
              <p className="text-xl text-slate-200/80 max-w-2xl mx-auto">
                Our <strong className="text-white">offline</strong> classroom batches in Pune offer focus, direct interaction, and a study environment that many find easier to stick with. Prefer online? We run DGCA and CPL batches online too—see our <Link href="/courses" className="text-sky-300 hover:text-sky-200 underline underline-offset-2">Courses</Link> page.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Better focus", desc: "No distractions—dedicated time and space for DGCA theory and CPL exam prep.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
              { title: "Instant doubt clearing", desc: "Ask questions on the spot and get answers from the instructor in the room.", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Peer learning", desc: "Study alongside other DGCA and CPL aspirants—share notes, discuss concepts, stay motivated.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Structured routine", desc: "Fixed batch timings help you build a study habit and complete the syllabus on track.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((item, i) => (
              <ScrollAnimation key={item.title} animationType="fadeInUp" delay={300 + i * 80}>
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our centre & gallery */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-20 right-12 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-14 left-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
        </div>
        <div className="relative z-10">
          <div className="container-wide">
            <ScrollAnimation animationType="fadeInUp" delay={200}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                  <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                    The centre
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Pune centre & classroom</h2>
                <p className="text-xl text-slate-200/80 max-w-2xl mx-auto">
                  A look around our Pune offline DGCA centre: the photos below show the same classroom from different angles (plus the lobby)—so you know exactly where you&apos;ll learn. Spacious, air-conditioned, with whiteboard and projector. Easy to reach; parking available.
                </p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="mx-auto w-full max-w-[min(1600px,calc(100vw-1.5rem))] px-3 sm:px-4">
            <ScrollAnimation animationType="fadeInUp" delay={300}>
              <CentreGalleryCarousel items={PLACEHOLDERS.centres} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="relative overflow-hidden py-20 full-bleed">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/85" />
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `radial-gradient(circle at 15% 30%, rgba(56, 189, 248, 0.45) 0, transparent 42%),
              radial-gradient(circle at 85% 70%, rgba(14, 165, 233, 0.25) 0, transparent 48%)`,
          }} />
          <div className="absolute top-14 left-14 h-72 w-72 rounded-full bg-sky-500/18 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-400/35 bg-sky-500/10 px-8 py-3 shadow-[0_20px_50px_-28px_rgba(14,165,233,0.55)] backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100/90">
                  Instructors
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Meet your instructors
              </h2>
              <p className="text-lg leading-relaxed text-slate-300/90 md:text-xl">
                DGCA and CPL ground training in Pune, led by experienced aviation professionals who combine real-world insight with clear, structured teaching.
              </p>
            </div>
          </ScrollAnimation>
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-4 sm:px-6 lg:px-10">
            <div className="mx-auto grid w-full max-w-[min(108rem,calc(100vw-2rem))] items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
              {PLACEHOLDERS.instructors.map((person, i) => (
                <ScrollAnimation key={person.name} animationType="fadeInUp" delay={280 + i * 100} className="h-full">
                  <InstructorCard
                    name={person.name}
                    role={person.role}
                    bio={person.bio}
                    highlights={person.highlights}
                    image={person.image}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-20 left-12 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-14 right-16 h-80 w-80 rounded-full bg-emerald-400/18 blur-[150px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  What you get
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">DGCA Classes & CPL Classes — All Five Subjects</h2>
              <p className="text-xl text-slate-200/80 max-w-2xl mx-auto mb-2">
                All five DGCA theory subjects for CPL—the same syllabus as DGCA CPL exams—taught in person with notes, diagrams, and doubt-clearing.
              </p>
              <p className="text-slate-300/80 text-sm max-w-xl mx-auto">
                DGCA-aligned curriculum; instructors bring real-world aviation context to CPL theory.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Air Regulation", desc: "Rules of the air, ATC, licensing, and Indian aviation regulations.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { title: "Air Meteorology", desc: "Weather, pressure systems, clouds, icing, and flight planning for weather.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { title: "Air Navigation", desc: "Charts, dead reckoning, radio nav, and instrument procedures.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { title: "Technical General", desc: "Aircraft systems, engines, structures, and basic principles.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Technical Specific", desc: "Aircraft type-specific knowledge for your training aircraft.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828a2 2 0 01-1.414-.586l-5-5A2 2 0 013 10.172V5L2 4z" },
            ].map((item, i) => (
              <ScrollAnimation key={item.title} animationType="fadeInUp" delay={300 + i * 100}>
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/78" />
          <div className="absolute top-20 right-12 h-72 w-72 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-14 left-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-[150px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  What to expect
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How DGCA CPL Batches Run</h2>
              <p className="text-xl text-slate-200/80 max-w-2xl mx-auto">
                Structured DGCA classes and CPL classes—sessions, study material, and support so you’re exam-ready.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationType="fadeInUp" delay={300}>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Live classroom teaching for all five DGCA theory subjects (CPL syllabus), following a clear schedule so you cover the syllabus in time.",
                "Printed or digital study material and notes provided as part of the DGCA/CPL batch—no need to hunt for separate books for the core syllabus.",
                "Doubt-clearing during and after class; instructor available in the room for questions on DGCA subjects.",
                "Revision and practice sessions as the batch progresses, so you consolidate before DGCA CPL exams.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 md:p-5 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">{i + 1}</span>
                  <p className="text-slate-200/90 pt-0.5">{text}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 full-bleed relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/94 to-blue-950/75" />
          <div className="absolute top-14 left-14 h-72 w-72 rounded-full bg-sky-500/22 blur-[140px]" />
          <div className="absolute bottom-16 right-16 h-80 w-80 rounded-full bg-amber-400/12 blur-[150px]" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Who it’s for
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ideal If You’re…</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {[
              { title: "DGCA / CPL aspirant", text: "Preparing for DGCA theory exams or CPL classes and want structured, in-person coaching in Pune." },
              { title: "Based in or near Pune", text: "Living in Pune or can travel to Pune regularly for DGCA class batch timings." },
              { title: "Prefer classroom learning", text: "You learn better in a physical DGCA/CPL class with an instructor and peers than only online." },
            ].map((item, i) => (
              <ScrollAnimation key={item.title} animationType="fadeInUp" delay={350 + i * 100} className="h-full">
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center h-full flex flex-col min-h-[180px]">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{item.text}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden full-bleed bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute -top-24 left-20 h-72 w-72 rounded-full bg-sky-500/22 blur-[130px]" />
          <div className="absolute -bottom-24 right-24 h-80 w-80 rounded-full bg-amber-400/18 blur-[150px]" />
        </div>
        <AviationBackground className="opacity-10" />
        <div className="container-wide relative z-10">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-8 py-3 mb-6 border border-white/15">
                <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100/80">
                  Offline · Pune
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Enquire About Offline DGCA CPL Classes in Pune
              </h2>
              <p className="text-xl text-slate-200/85 mb-8 max-w-2xl mx-auto">
                Get batch schedule and venue details for our <strong className="text-white">offline</strong> DGCA classes and CPL classes in Pune. Same contact as the rest of the site—WhatsApp or the enquiry form.
              </p>
              <p className="text-slate-300 text-sm mb-12 max-w-xl mx-auto">
                Prefer online? We have DGCA and CPL batches online as well—<Link href="/courses" className="text-sky-300 hover:text-sky-200 underline underline-offset-2">explore all courses</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={getWhatsAppUrl("dgca-offline-classes-pune")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp
                </a>
                <Link
                  href={getContactUrl("dgca-offline-classes-pune")}
                  className="px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Send enquiry
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
