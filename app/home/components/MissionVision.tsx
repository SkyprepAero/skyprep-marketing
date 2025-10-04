"use client";
import { ScrollAnimation } from "./ScrollAnimation";

export function MissionVision() {
  
  return (
      <section className="full-bleed relative overflow-hidden py-12 md:py-20">
      {/* Enhanced Aviation Background with graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
        {/* Aviation-themed background graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Aircraft silhouettes */}
          <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
              <path d="M50 10 L70 30 L90 35 L75 50 L90 65 L70 70 L50 90 L30 70 L10 65 L25 50 L10 35 L30 30 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute top-32 right-16 w-20 h-20 opacity-8">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sky-600">
              <path d="M50 15 L65 35 L85 40 L70 55 L85 70 L65 75 L50 85 L35 75 L15 70 L30 55 L15 40 L35 35 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-40 left-20 w-14 h-14 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
              <path d="M50 12 L68 32 L88 37 L73 52 L88 67 L68 72 L50 88 L32 72 L12 67 L27 52 L12 37 L32 32 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 right-24 w-18 h-18 opacity-6">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sky-500">
              <path d="M50 8 L72 28 L92 33 L77 48 L92 63 L72 68 L50 92 L28 68 L8 63 L23 48 L8 33 L28 28 Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Flight paths */}
          <div className="absolute top-1/4 left-0 w-full h-1 opacity-20">
            <svg viewBox="0 0 1200 10" className="w-full h-full">
              <path d="M0,5 Q300,2 600,5 T1200,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400">
                <animate attributeName="stroke-dasharray" values="0,1200;600,600;1200,0" dur="8s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" values="0;-1200" dur="8s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          
          <div className="absolute top-3/4 left-0 w-full h-1 opacity-15">
            <svg viewBox="0 0 1200 10" className="w-full h-full">
              <path d="M0,5 Q400,8 800,5 T1200,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-sky-400">
                <animate attributeName="stroke-dasharray" values="1200,0;600,600;0,1200" dur="10s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" values="0;1200" dur="10s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          
          {/* Clouds */}
          <div className="absolute top-16 right-1/4 w-24 h-12 opacity-30">
            <svg viewBox="0 0 100 50" className="w-full h-full text-white">
              <path d="M20,35 Q10,35 10,25 Q10,15 20,15 Q25,5 35,5 Q45,5 50,15 Q60,15 60,25 Q60,35 50,35 Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="absolute bottom-32 left-1/3 w-20 h-10 opacity-25">
            <svg viewBox="0 0 100 50" className="w-full h-full text-white">
              <path d="M15,30 Q5,30 5,20 Q5,10 15,10 Q20,0 30,0 Q40,0 45,10 Q55,10 55,20 Q55,30 45,30 Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Floating circles with enhanced animations */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-sky-200/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-sky-300/15 rounded-full animate-pulse delay-1500"></div>
          
          {/* Compass/Radar elements */}
          <div className="absolute top-1/2 left-8 w-12 h-12 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="5" fill="currentColor"/>
              <path d="M50,50 L50,10" stroke="currentColor" strokeWidth="3"/>
              <path d="M50,50 L90,50" stroke="currentColor" strokeWidth="2"/>
              <path d="M50,50 L30,30" stroke="currentColor" strokeWidth="2"/>
              <path d="M50,50 L70,30" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="absolute bottom-1/2 right-8 w-10 h-10 opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sky-500">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="4" fill="currentColor"/>
              <path d="M50,50 L50,15" stroke="currentColor" strokeWidth="2"/>
              <path d="M50,50 L85,50" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Subtle wave patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg viewBox="0 0 1200 600" className="w-full h-full">
              <path d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-blue-400">
                <animate attributeName="d" values="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z;M0,320 Q300,270 600,320 T1200,320 L1200,600 L0,600 Z;M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z" dur="8s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Additional animated elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent animate-pulse"></div>
        
        {/* Aviation-themed floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-sky-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-500/25 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-sky-500/30 rounded-full animate-bounce delay-500"></div>
        
        {/* Small aircraft icons floating */}
        <div className="absolute top-1/3 left-1/5 w-4 h-4 opacity-40 animate-bounce">
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
            <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-2/3 right-1/5 w-3 h-3 opacity-35 animate-bounce delay-1000">
          <svg viewBox="0 0 24 24" className="w-full h-full text-sky-500">
            <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/5 left-1/4 w-5 h-5 opacity-30 animate-bounce delay-2000">
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
            <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Navigation symbols */}
        <div className="absolute top-1/6 right-1/6 w-6 h-6 opacity-20">
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/6 left-1/6 w-5 h-5 opacity-25">
          <svg viewBox="0 0 24 24" className="w-full h-full text-sky-600">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <ScrollAnimation animationType="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 mb-6 shadow-lg border border-blue-200/50">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-800 text-sm font-semibold">Mission & Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Shaping the Future of
              <span className="block gradient-text-excellence">
                Aviation Excellence
              </span>
            </h2>
            {/* <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p> */}
          </div>
        </ScrollAnimation>

        {/* Combined Mission & Vision Card */}
        <ScrollAnimation animationType="fadeInUp" delay={400}>
          <div className="group relative max-w-6xl mx-auto mb-12">
            {/* Enhanced Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-sky-100/60 to-blue-100/60 rounded-4xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-blue-100/30 rounded-4xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            
            {/* Main Card */}
            <div className="relative bg-white/95 backdrop-blur-xl border border-blue-200/60 rounded-4xl p-8 md:p-12 hover:bg-white transition-all duration-700 hover:scale-[1.01] hover:border-blue-300 shadow-2xl hover:shadow-3xl overflow-hidden">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-sky-400/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/10 to-orange-400/10 rounded-full blur-lg" />
              
              {/* Header with Enhanced Icon */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                    {/* Enhanced Aviation Icon */}
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2zm0 2.5L6.5 7.5v5.5l5.5-3 5.5 3V7.5L12 4.5z"/>
                    </svg>
                  </div>
                  {/* Rotating ring around icon */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-blue-400/30 rounded-3xl animate-spin" style={{animationDuration: '20s'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Mission & Vision</h3>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-full" />
                </div>
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                <p className="text-slate-700 text-xl md:text-2xl leading-relaxed mb-8 max-w-5xl">
                  At <span className="font-bold text-blue-700">SkyPrep Aero</span>, our mission and vision is to be the leading ground school that empowers aspiring aviators with knowledge, confidence, and skills. Through expert instruction, modern learning methods, and student-focused guidance, we build a strong foundation that helps future pilots clear exams with ease, grow into quality professionals, and soar toward successful aviation careers.
                </p>
                
                {/* Key Pillars */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="group/pillar flex flex-col items-center text-center bg-gradient-to-br from-blue-50/80 to-sky-50/80 rounded-2xl p-6 hover:from-blue-100/80 hover:to-sky-100/80 transition-all duration-500 hover:scale-105 border border-blue-200/50 hover:border-blue-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-4 group-hover/pillar:scale-110 transition-transform duration-300 shadow-lg">
                      {/* Knowledge Icon */}
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Knowledge</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Comprehensive aviation education</p>
                  </div>
                  
                  <div className="group/pillar flex flex-col items-center text-center bg-gradient-to-br from-sky-50/80 to-blue-50/80 rounded-2xl p-6 hover:from-sky-100/80 hover:to-blue-100/80 transition-all duration-500 hover:scale-105 border border-sky-200/50 hover:border-sky-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover/pillar:scale-110 transition-transform duration-300 shadow-lg">
                      {/* Confidence Icon */}
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Confidence</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Building self-assurance</p>
                  </div>
                  
                  <div className="group/pillar flex flex-col items-center text-center bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl p-6 hover:from-amber-100/80 hover:to-orange-100/80 transition-all duration-500 hover:scale-105 border border-amber-200/50 hover:border-amber-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover/pillar:scale-110 transition-transform duration-300 shadow-lg">
                      {/* Skills Icon */}
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 1z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Skills</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Practical aviation expertise</p>
                  </div>
                  
                  <div className="group/pillar flex flex-col items-center text-center bg-gradient-to-br from-emerald-50/80 to-green-50/80 rounded-2xl p-6 hover:from-emerald-100/80 hover:to-green-100/80 transition-all duration-500 hover:scale-105 border border-emerald-200/50 hover:border-emerald-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover/pillar:scale-110 transition-transform duration-300 shadow-lg">
                      {/* Success Icon */}
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Success</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Career advancement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Core Values - Horizontal Layout */}
        <ScrollAnimation animationType="scaleIn" delay={800}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Our Core Values
            </h3>
            <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="group bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-2xl p-4 hover:bg-white hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Aviation Excellence Icon - Pilot Wings */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Excellence</h4>
                <p className="text-slate-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-2xl p-4 hover:bg-white hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Aviation Safety/Trust Icon - Shield */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Integrity</h4>
                <p className="text-slate-600 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-2xl p-4 hover:bg-white hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Aviation Technology Icon - Aircraft with Tech */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8M8 12l4-4 4 4"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Innovation</h4>
                <p className="text-slate-600 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
