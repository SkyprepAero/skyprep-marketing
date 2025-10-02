/**
 * GradientExamples Component
 * 
 * A demonstration component showing all available gradient text styles
 * for the SkyPrep Aviation Excellence system.
 */

import React from 'react';
import { GradientText, AviationExcellence, AviationPrimary, AviationSecondary, ProfessionalText, SkyText } from './GradientText';

export function GradientExamples() {
  return (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Aviation Excellence Gradient System
          </h1>
          <p className="text-lg text-slate-600">
            Consistent gradient text styling throughout the SkyPrep application
          </p>
        </div>

        {/* Primary Gradients */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Primary Aviation Gradients</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Aviation Excellence</h3>
              <AviationExcellence as="h3" className="text-3xl font-bold mb-2">
                Aviation Excellence
              </AviationExcellence>
              <p className="text-sm text-slate-500">The signature gradient for main headings</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Aviation Primary</h3>
              <AviationPrimary as="h3" className="text-3xl font-bold mb-2">
                Professional Training
              </AviationPrimary>
              <p className="text-sm text-slate-500">Three-color gradient with depth</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Aviation Secondary</h3>
              <AviationSecondary as="h3" className="text-3xl font-bold mb-2">
                SkyPrep Academy
              </AviationSecondary>
              <p className="text-sm text-slate-500">Sky blue to aviation blue</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Professional</h3>
              <ProfessionalText as="h3" className="text-3xl font-bold mb-2">
                Expert Guidance
              </ProfessionalText>
              <p className="text-sm text-slate-500">Deep blue professional gradient</p>
            </div>
          </div>
        </section>

        {/* Secondary Gradients */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Secondary Gradients</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Sky Light</h3>
              <SkyText as="span" className="text-2xl font-semibold">
                Master Your Journey
              </SkyText>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Accent</h3>
              <GradientText gradient="aviationAccent" as="span" className="text-2xl font-semibold">
                Flight Training
              </GradientText>
            </div>
          </div>
        </section>

        {/* Animated Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Animated Gradients</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <h3 className="text-lg font-medium text-slate-600 mb-4">Animated Excellence</h3>
              <GradientText 
                gradient="aviationExcellence" 
                animate={true} 
                as="h3" 
                className="text-3xl font-bold"
              >
                Animated Text
              </GradientText>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <h3 className="text-lg font-medium text-slate-600 mb-4">Hover Effect</h3>
              <GradientText 
                gradient="aviationPrimary" 
                hover={true} 
                as="h3" 
                className="text-3xl font-bold cursor-pointer"
              >
                Hover Me
              </GradientText>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Usage Examples</h2>
          
          <div className="bg-slate-900 p-6 rounded-lg text-white">
            <h3 className="text-lg font-medium mb-4">Hero Section</h3>
            <AviationExcellence as="h1" className="text-5xl font-bold mb-4">
              Aviation Excellence
            </AviationExcellence>
            <AviationSecondary as="p" className="text-xl">
              Professional pilot training programs
            </AviationSecondary>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-slate-700 mb-4">Section Header</h3>
            <AviationPrimary as="h2" className="text-4xl font-semibold mb-2">
              Training Programs
            </AviationPrimary>
            <SkyText as="p" className="text-lg">
              Comprehensive aviation education
            </SkyText>
          </div>
        </section>

        {/* Code Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6">Code Examples</h2>
          
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">CSS Classes</h3>
            <pre className="text-sm text-slate-700 bg-white p-4 rounded border">
{`<h1 className="gradient-text-excellence">Aviation Excellence</h1>
<h2 className="gradient-text-primary">Professional Training</h2>
<span className="gradient-text-secondary">SkyPrep Academy</span>`}
            </pre>
          </div>
          
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">React Components</h3>
            <pre className="text-sm text-slate-700 bg-white p-4 rounded border">
{`<AviationExcellence as="h1" className="text-4xl font-bold">
  Aviation Excellence
</AviationExcellence>

<GradientText gradient="aviationPrimary" animate={true}>
  Animated Text
</GradientText>`}
            </pre>
          </div>
        </section>

      </div>
    </div>
  );
}
