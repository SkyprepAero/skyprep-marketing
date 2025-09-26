import { AviationSpinner } from "@/components/AviationSpinner";

export const metadata = {
  title: "Loading Spinner • SkyPrep",
  description: "Aviation-themed loading spinner component demo.",
};

export default function SpinnerDemo() {
  return (
    <main>
      <section className="full-bleed py-12 md:py-16" style={{ backgroundColor: "#F7FBFD" }}>
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Aviation Spinner</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A reusable, aviation‑themed loading indicator you can use across the application.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Standard (contrail)</h2>
              <div className="mt-6 flex items-center justify-center h-40">
                <AviationSpinner variant="contrail" label="Loading" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Sizes</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="contrail" size={44} label="Loading small" />
                <AviationSpinner variant="contrail" size={64} label="Loading medium" />
                <AviationSpinner variant="contrail" size={92} label="Loading large" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Brand accents</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="contrail" color="var(--brand-300)" trackColor="var(--border)" label="Loading" />
                <AviationSpinner variant="contrail" color="#0f172a" trackColor="#E2E8F0" label="Loading" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[#0b2636] p-6 text-slate-100">
              <h2 className="text-lg font-medium">On dark surfaces</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="contrail" color="#BAE1FF" trackColor="rgba(255,255,255,0.15)" label="Loading" />
                <AviationSpinner variant="contrail" size={64} speed={0.9} color="#ADE1EF" trackColor="rgba(255,255,255,0.12)" label="Loading" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Direction & speed</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="contrail" size={56} direction="clockwise" speed={1.1} label="Clockwise" />
                <AviationSpinner variant="contrail" size={56} direction="counterclockwise" speed={1.1} label="Counterclockwise" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Orbit variant</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="orbit" size={56} label="Orbit" />
                <AviationSpinner variant="orbit" size={56} direction="counterclockwise" color="var(--brand-200)" label="Orbit CCW" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Turn coordinator variant</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="turn" size={56} label="Turn coordinator" />
                <AviationSpinner variant="turn" size={56} direction="counterclockwise" color="var(--brand-200)" label="Turn CCW" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Attitude variant</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="attitude" size={56} label="Attitude" />
                <AviationSpinner variant="attitude" size={56} direction="counterclockwise" color="var(--brand-200)" label="Attitude CCW" />
              </div>
            </div>

            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-6">
              <h2 className="text-lg font-medium">Turbine variant</h2>
              <div className="mt-6 flex items-center justify-center gap-6 h-40">
                <AviationSpinner variant="turbine" size={56} label="Turbine" />
                <AviationSpinner variant="turbine" size={56} direction="counterclockwise" color="var(--brand-200)" label="Turbine CCW" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



