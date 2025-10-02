import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { AviationBackground } from "@/components/AviationBackground";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch for aviation coaching and training inquiries.",
  canonicalPath: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero with subtle aviation gradient and contrail line */}
      <section
        className="full-bleed relative overflow-hidden py-14 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #EAF7FA 0%, #ECF8FC 45%, #F1F7FF 85%, #FFFFFF 100%)",
        }}
      >
        {/* Decorative soft blobs */}
        <div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full opacity-35"
          style={{
            background: "radial-gradient(closest-side, #C6EAEE, transparent)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full opacity-35"
          style={{
            background: "radial-gradient(closest-side, #BAE1FF, transparent)",
            filter: "blur(40px)",
          }}
        />

        {/* Contrail line */}
        <svg
          className="pointer-events-none absolute right-0 top-1/4 opacity-40"
          width="420"
          height="160"
          viewBox="0 0 420 160"
          fill="none"
          aria-hidden
        >
          <path
            d="M5 120 C 120 10, 260 210, 415 40"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C6EAEE" />
              <stop offset="1" stopColor="#BAE1FF" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent leading-[1.15] pb-1 animate-fade-in-up"
                style={{ backgroundImage: "linear-gradient(90deg, var(--brand-200), var(--brand-300))" }}>
              Let&apos;s file your flight plan
            </h1>
            <p className="mt-4 text-slate-700 text-lg md:text-xl max-w-2xl animate-fade-in-up animate-delay-200">
              Tell us where you&apos;re at and where you want to go. We&apos;ll get you a clear
              route from first lesson to checkride—with timelines, study plan, and next actions.
            </p>
          </div>
        </div>
      </section>

      {/* Content: form + contact details */}
      <section className="full-bleed relative py-10 md:py-16 overflow-hidden">
        {/* Aviation background: subtle waypoint network, approach arcs, and dotted flight path */}
        <AviationBackground />
        <div className="relative">
          <div className="mx-auto w-full max-w-[1280px] px-3 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {/* Form card */}
            <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur-md shadow-lg shadow-black/5 ring-1 ring-white/40 flex flex-col">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight">Contact us</h2>
                <p className="mt-2 text-slate-600">We usually reply within one business day.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact details / info */}
            <aside className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg shadow-black/5 ring-1 ring-white/40 p-6 md:p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Reach us directly</h3>
              <ul className="mt-4 grid gap-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-900" style={{ backgroundColor: "#ADE1EF" }}>
                    {/* Headset icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 3a7 7 0 00-7 7v6a3 3 0 003 3h2v-8H6v-1a6 6 0 1112 0v1h-4v8h2a3 3 0 003-3v-6a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+919588611248" className="text-slate-700 underline-offset-4 hover:underline">+91 9588611248</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-900" style={{ backgroundColor: "#C6EAEE" }}>
                    {/* Mail icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2l8 5 8-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:theskyprep@gmail.com" className="text-slate-700 underline-offset-4 hover:underline">theskyprep@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-900" style={{ backgroundColor: "#BAE1FF" }}>
                    {/* Pin icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium">Location</div>
                    <div>Pune, India • By appointment</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-900" style={{ backgroundColor: "#ADE1EF" }}>
                    {/* Calendar icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M7 2h2v2h6V2h2v2h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2V2zm12 6H5v10h14V8z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium">Schedule a call</div>
                    <a href="https://calendly.com/theskyprep/new-meeting" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline-offset-4 hover:underline">Book via Calendly</a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-[--color-border] bg-[--color-background] p-4">
                <div className="flex items-center gap-2">
                  {/* Airplane icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" />
                  </svg>
                  <div className="font-medium">Pro tip</div>
                </div>
                <p className="mt-1 text-sm text-slate-600">Include your desired timeline and any prior flight hours. It helps us tailor your plan.</p>
              </div>

              {/* Helpful details list to reduce visual emptiness */}
              <div className="mt-4 rounded-lg border border-[--color-border] bg-[--color-background] p-4">
                <div className="font-medium">Helpful details</div>
                <ul className="mt-2 grid gap-1.5 text-sm text-slate-600">
                  {[
                    "Target license or rating (e.g. PPL, IR)",
                    "Preferred training schedule (weekday/weekend)",
                    "Any constraints (budget, medical, location)",
                    "+91 contact availability hours",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#ADE1EF" }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/enquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-[--color-border] bg-[--color-background] px-4 py-2 hover:bg-[--color-muted]"
              >
                Explore enquiry options
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </a>
            </aside>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}


