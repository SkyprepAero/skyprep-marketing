import { PilotStepper } from "@/components/PilotStepper";
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
          {/* Header Section */}
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight gradient-text-primary">
                How to become a pilot
              </h2>
              <p className="mt-6 text-slate-700 max-w-3xl mx-auto text-lg md:text-xl">
                A clear, end‑to‑end path from discovery call to your checkride. Know exactly what to
                do, when, and why — without the chaos.
              </p>
              <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
                Each week we translate the plan into simple actions: what to study, which drills to
                run, and how to prep for the next sortie—so progress stays obvious and momentum
                stays high.
              </p>

              {/* Quick action buttons */}
              <div className="mt-10 flex justify-center">
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

          {/* Stepper Component */}
          <ScrollAnimation animationType="fadeInUp" delay={400}>
            <PilotStepper />
          </ScrollAnimation>
        </div>
    </section>
  );
}
