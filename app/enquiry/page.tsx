import type { Metadata } from "next";
import { generateMetadata as buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enquiry",
  description: "Send an enquiry about our aviation services.",
  canonicalPath: "/enquiry",
});

export default function EnquiryPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Enquiry</h1>
      <form className="grid gap-4 max-w-xl">
        <input className="border border-[--color-border] rounded-md p-3 bg-[--color-background]" placeholder="Name" />
        <input className="border border-[--color-border] rounded-md p-3 bg-[--color-background]" placeholder="Email" type="email" />
        <select className="border border-[--color-border] rounded-md p-3 bg-[--color-background]">
          <option>General</option>
          <option>Pilot Coaching</option>
          <option>IFR Training</option>
          <option>Checkride Prep</option>
        </select>
        <textarea className="border border-[--color-border] rounded-md p-3 bg-[--color-background]" placeholder="Message" rows={5} />
        <button className="px-4 py-2 rounded-md bg-[--color-primary] text-slate-900 font-medium w-fit">Submit</button>
      </form>
    </section>
  );
}




