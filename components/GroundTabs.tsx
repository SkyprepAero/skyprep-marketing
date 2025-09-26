"use client";
import { useState } from "react";

type Subject = {
  key: string;
  title: string;
  summary: string;
  points: string[];
};

const SUBJECTS: Subject[] = [
  {
    key: "plan",
    title: "Plan your path",
    summary: "License choices, prerequisites, and a training plan that fits your time and budget.",
    points: ["PPL vs CPL/IR—what to pick and why", "Medical class & docs checklist", "Budgeting and scheduling"],
  },
  {
    key: "ground",
    title: "Ground school",
    summary: "Subject‑led syllabus and memory aids to master the written efficiently.",
    points: ["Air Law & Ops essentials", "Met, Nav, Perf & Planning", "HPL and Communications"],
  },
  {
    key: "flight",
    title: "Flight training",
    summary: "Structured sorties, habit patterns, and actionable debriefs to build real skill.",
    points: ["Lesson objectives and briefings", "Checklists and flows that work", "Data‑driven debriefs"],
  },
  {
    key: "xc",
    title: "Cross‑country",
    summary: "Plan, navigate, and manage workload on longer legs with confidence.",
    points: ["Leg planning & alternates", "Nav & diversion drills", "Workload management"],
  },
  {
    key: "checkride",
    title: "Checkride",
    summary: "Mock orals, scenario practice, and targeted remediation to close any gaps.",
    points: ["Oral mock & Q-bank", "Scenario‑based drills", "Targeted remediation"],
  },
];

export function GroundTabs() {
  const [active, setActive] = useState<string>(SUBJECTS[0].key);
  const subject = SUBJECTS.find((s) => s.key === active) ?? SUBJECTS[0];

  return (
    <div className="rounded-2xl border border-[--color-border] bg-[--color-background] p-6 md:p-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {SUBJECTS.map((s) => {
          const is = s.key === active;
          return (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-5 py-2.5 rounded-md text-base md:text-lg transition border ${
                is
                  ? "bg-[--color-muted] border-[--color-border]"
                  : "border-transparent hover:bg-[--color-muted]"
              }`}
              aria-selected={is}
              role="tab"
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="mt-6 rounded-2xl border border-[--color-border] p-6 md:p-8 bg-[--color-background] min-h-[360px] md:min-h-[440px]">
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed">{subject.summary}</p>
        <ul className="mt-4 grid gap-3 text-base md:text-lg">
          {subject.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span
                className="mt-2 inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand-200), var(--brand-300))" }}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


