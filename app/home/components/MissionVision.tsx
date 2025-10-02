import { ScrollAnimation } from "./ScrollAnimation";

export function MissionVision() {
  
  return (
    <section className="full-bleed relative overflow-hidden py-12 md:py-20">
      {/* Light Aviation Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
        {/* Animated floating elements as fallback */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-sky-200/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-sky-300/15 rounded-full animate-pulse delay-1500"></div>
          
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
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-sky-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-500/25 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-sky-500/30 rounded-full animate-bounce delay-500"></div>
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
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </ScrollAnimation>

        {/* Mission & Vision Cards */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 max-w-7xl mx-auto mb-12">
          {/* Mission */}
          <ScrollAnimation animationType="fadeInLeft" delay={400}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-sky-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 md:p-8 hover:bg-white transition-all duration-500 hover:scale-[1.02] hover:border-blue-300 shadow-lg hover:shadow-xl">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Aviation Training Icon */}
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l9 4.9V17c0 .55-.45 1-1 1h-1v-6l-7 3.8L5 12v6H4c-.55 0-1-.45-1-1V6.9L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Mission</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full" />
                  </div>
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                {/* Mission Pillars */}
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 bg-blue-50/80 rounded-xl p-3 hover:bg-blue-100/80 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      {/* Pilot Wings Icon */}
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">Excellence in Training</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50/80 rounded-xl p-3 hover:bg-blue-100/80 transition-colors duration-300">
                    <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      {/* Success/Target Icon */}
                      <svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">Student Success</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Vision */}
          <ScrollAnimation animationType="fadeInRight" delay={600}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-blue-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 md:p-8 hover:bg-white transition-all duration-500 hover:scale-[1.02] hover:border-blue-300 shadow-lg hover:shadow-xl">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Aviation Vision/Future Icon */}
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23L11 13V7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Vision</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
                  </div>
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
                
                {/* Vision Goals */}
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 bg-sky-50/80 rounded-xl p-3 hover:bg-sky-100/80 transition-colors duration-300">
                    <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      {/* Global/World Icon */}
                      <svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">Global Leadership</span>
                  </div>
                  <div className="flex items-center gap-3 bg-sky-50/80 rounded-xl p-3 hover:bg-sky-100/80 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      {/* Innovation/Technology Icon */}
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">Innovation Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

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
