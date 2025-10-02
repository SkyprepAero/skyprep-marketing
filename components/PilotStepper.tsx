"use client";
import { useState } from "react";
import { ScrollAnimation } from "../app/home/components/ScrollAnimation";

type Step = {
  key: string;
  title: string;
  summary: string;
  points: string[];
  stepNumber: number;
};

const STEPS: Step[] = [
  {
    key: "discovery",
    title: "Discovery Call",
    summary: "Clarify goals, timelines, budget, and aircraft availability. Map your training plan with expert guidance.",
    points: ["Initial consultation and goal setting with our experts", "Timeline and budget planning guidance", "Aircraft availability assessment", "Personalized training roadmap creation"],
    stepNumber: 1,
  },
  {
    key: "medical",
    title: "Medical Class 1 & Class 2",
    summary: "Complete required medical examinations and obtain necessary medical certificates with our step-by-step guidance.",
    points: ["Class 1 medical examination guidance (Commercial pilots)", "Class 2 medical examination support (Private pilots)", "Medical certificate validation assistance", "Health requirements compliance guidance"],
    stepNumber: 2,
  },
  {
    key: "ground",
    title: "Ground Classes",
    summary: "Start theory early with expert guidance. Use lesson objectives and spaced repetition to improve retention.",
    points: ["Air Law & Operations essentials with expert instruction", "Meteorology, Navigation & Performance guidance", "Human Performance & Limitations coaching", "Communications and procedures training"],
    stepNumber: 3,
  },
  {
    key: "flight",
    title: "Flight Training",
    summary: "Structured sorties, habit patterns, and actionable debriefs to build real skill with professional guidance.",
    points: ["Short briefs with clear objectives for each sortie", "Focus on habit patterns and workable checklists", "Debrief with data: what improved, what to drill next", "Progressive skill building with expert coaching"],
    stepNumber: 4,
  },
  {
    key: "conversion",
    title: "Conversion Process",
    summary: "Convert your training into official certification through proper documentation and examination processes with our guidance.",
    points: ["License application process assistance", "Documentation and paperwork completion support", "Final examinations and assessments preparation", "Certificate issuance and validation guidance"],
    stepNumber: 5,
  },
];

export function PilotStepper() {
  const [activeStep, setActiveStep] = useState<string>(STEPS[0].key);
  const [visitedSteps, setVisitedSteps] = useState<Set<string>>(new Set([STEPS[0].key]));
  const currentStep = STEPS.find((s) => s.key === activeStep) ?? STEPS[0];

  const handleStepClick = (stepKey: string) => {
    setActiveStep(stepKey);
    setVisitedSteps(prev => new Set([...prev, stepKey]));
  };

  return (
    <div className="relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aviation-themed background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
            <path d="M50 10 L60 30 L80 30 L70 50 L80 70 L60 70 L50 90 L40 70 L20 70 L30 50 L20 30 L40 30 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute top-32 right-20 w-16 h-16 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-32 w-24 h-24 opacity-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
            <path d="M20 20 L80 20 L70 40 L80 60 L60 80 L40 70 L20 50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
            <path d="M50 10 L70 30 L90 30 L80 50 L90 70 L70 70 L50 90 L30 70 L10 70 L20 50 L10 30 L30 30 Z" fill="currentColor" />
          </svg>
        </div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50/20 to-transparent"></div>
      </div>
      
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 relative z-10">
      {/* Left: Stepper */}
      <ScrollAnimation animationType="fadeInLeft" delay={200}>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Your Journey</h3>
          <div className="space-y-2">
        {STEPS.map((step, index) => {
          const isActive = step.key === activeStep;
          const isCompleted = visitedSteps.has(step.key) && STEPS.findIndex(s => s.key === activeStep) > index;
            
            return (
              <button
                key={step.key}
                onClick={() => handleStepClick(step.key)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  isActive
                    ? 'border-amber-500 bg-amber-50 shadow-md'
                    : isCompleted
                    ? 'border-green-200 bg-green-50 hover:border-green-300'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Step Number Circle */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-500 text-white'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {step.stepNumber}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-medium text-base ${
                      isActive ? 'text-amber-900' : isCompleted ? 'text-green-900' : 'text-slate-900'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm mt-1 ${
                      isActive ? 'text-amber-700' : isCompleted ? 'text-green-700' : 'text-slate-600'
                    }`}>
                      Step {step.stepNumber} of {STEPS.length}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    isActive ? 'rotate-90' : ''
                  }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${
                      isActive ? 'text-amber-600' : isCompleted ? 'text-green-600' : 'text-slate-400'
                    }`}>
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
          </div>
        </div>
      </ScrollAnimation>

      {/* Right: Content */}
      <ScrollAnimation animationType="fadeInRight" delay={400}>
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {currentStep.stepNumber}
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">{currentStep.title}</h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">{currentStep.summary}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium text-slate-900">What you'll learn:</h4>
          <ul className="space-y-3">
            {currentStep.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span>Progress</span>
            <span>{visitedSteps.size} of {STEPS.length} visited</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(visitedSteps.size / STEPS.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Congratulations message - only show when all steps visited in sequence */}
          {visitedSteps.size === STEPS.length && currentStep.stepNumber === 5 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  ✓
                </div>
                <div>
                  <h4 className="text-green-900 font-semibold text-lg">Congratulations! 🎉</h4>
                  <p className="text-green-700 text-sm mt-1">
                    You've visited all 5 steps of your pilot training journey! You now have a complete understanding of the process and are ready to become a certified pilot with SkyPrep's expert guidance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </ScrollAnimation>
      </div>
    </div>
  );
}
