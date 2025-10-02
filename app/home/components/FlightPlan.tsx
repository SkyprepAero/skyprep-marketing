import { GroundTabs } from "@/components/GroundTabs";
import { ScrollAnimation } from "./ScrollAnimation";

export function FlightPlan() {
  return (
    <section
      className="full-bleed relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #EAF7FA 0%, #ECF8FC 45%, #F1F7FF 85%, #FFFFFF 100%)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Soft brand blobs */}
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

        <div className="container-wide relative">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1.4fr] items-start">
            {/* Left: Headline & bullets */}
            <ScrollAnimation animationType="fadeInLeft" delay={200}>
              <div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight gradient-text-primary">
                  How to become a pilot
                </h2>
                <p className="mt-6 text-slate-700 max-w-2xl text-lg md:text-xl">
                  A clear, end‑to‑end path from discovery call to your checkride. Know exactly what to
                  do, when, and why — without the chaos.
                </p>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  Each week we translate the plan into simple actions: what to study, which drills to
                  run, and how to prep for the next sortie—so progress stays obvious and momentum
                  stays high.
                </p>

                {/* Stat pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Discovery call", "Medical & documents", "Ground + Flight path"].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-4 py-2 text-sm md:text-base"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, var(--brand-200), var(--brand-300))",
                        }}
                      />
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Quick subject links */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: "Requirements", href: "/guides/become-a-pilot" },
                    { label: "Medical", href: "/guides/become-a-pilot" },
                    { label: "Training path", href: "/guides/become-a-pilot" },
                    { label: "Costs", href: "/guides/become-a-pilot" },
                    { label: "Timeline", href: "/guides/become-a-pilot" },
                    { label: "Checkride", href: "/guides/become-a-pilot" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center rounded-md border border-[--color-border] bg-[--color-background] px-4 py-1.5 text-sm md:text-base hover:bg-[--color-muted]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-10 flex gap-4">
                  <a
                    href="/guides/become-a-pilot"
                    className="inline-flex px-6 py-3 rounded-md font-medium hover:bg-[--color-muted] border border-[--color-border] text-base"
                  >
                    Read more
                  </a>
                  <a
                    href="/enquiry"
                    className="inline-flex px-6 py-3 rounded-md font-medium shadow-sm hover:opacity-95 text-base"
                    style={{
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      color: "#0f172a",
                    }}
                  >
                    Talk to a coach
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right: Interactive subject tabs */}
            <ScrollAnimation animationType="fadeInRight" delay={400}>
              <div>
                <GroundTabs />
              </div>
            </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
