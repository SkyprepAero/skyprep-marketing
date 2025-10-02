import { ScrollAnimation } from "./ScrollAnimation";

export function WhyChooseSkyPrep() {
  const features = [
    {
      title: "Personalized Coaching",
      description: "One-on-one coaching sessions with experienced instructors who provide personalized guidance, feedback, and support throughout your pilot training journey.",
      points: ["Individual coaching sessions", "Personalized feedback", "Custom study plans", "Progress monitoring", "Exam preparation support", "Career guidance"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Complete Study Materials",
      description: "Access to comprehensive study materials, practice tests, and exam preparation resources designed for pilot training success.",
      points: [
        "Complete Air Law to HPL study guides",
        "Practice test banks with 1000+ questions",
        "Memory aids and flashcards",
        "Exam drill packs and test series",
        "Video lessons and tutorials",
        "Mobile-friendly study platform"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 4h14v16H5V4zm3 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Proven Success Methods",
      description: "Evidence-based learning techniques and proven study methods that maximize retention and build lasting knowledge for pilot certification.",
      points: ["Spaced repetition learning", "Active recall techniques", "Progress tracking analytics", "Memory palace methods", "Exam strategy coaching", "Confidence building exercises"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Flexible Learning Perks",
      description: "Study at your own pace with unlimited access to materials, progress tracking, and flexible scheduling that fits your lifestyle.",
      points: [
        "24/7 access to all study materials",
        "Progress tracking and analytics",
        "Flexible scheduling options",
        "Mobile-friendly web platform",
        "Unlimited practice test attempts",
        "Lifetime access to materials"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  ];

  const stats = [
    { number: "100%", label: "Online Learning" },
    { number: "Custom", label: "Learning Path" },
    { number: "1-on-1", label: "Personalized Coaching" },
    { number: "Flexible", label: "Your Schedule" },
  ];

  return (
    <section className="full-bleed relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aircraft silhouettes */}
        <div className="absolute top-16 left-8 w-48 h-32 opacity-4">
          <svg viewBox="0 0 200 100" className="w-full h-full text-blue-300">
            <path d="M20 50 L40 45 L60 50 L80 45 L100 50 L120 45 L140 50 L160 45 L180 50 L200 45 L200 55 L180 50 L160 55 L140 50 L120 55 L100 50 L80 55 L60 50 L40 55 L20 50 Z" fill="currentColor" />
            <path d="M30 50 L50 45 L70 50 L90 45 L110 50 L130 45 L150 50 L170 45 L190 50 L190 55 L170 50 L150 55 L130 50 L110 55 L90 50 L70 55 L50 50 L30 55 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        
        <div className="absolute top-40 right-12 w-40 h-24 opacity-3">
          <svg viewBox="0 0 200 100" className="w-full h-full text-amber-300">
            <path d="M10 50 L30 45 L50 50 L70 45 L90 50 L110 45 L130 50 L150 45 L170 50 L190 45 L190 55 L170 50 L150 55 L130 50 L110 55 L90 50 L70 55 L50 50 L30 55 L10 50 Z" fill="currentColor" />
          </svg>
        </div>
        
        {/* Navigation instruments */}
        <div className="absolute top-24 left-1/4 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="2"/>
            <path d="M50 50 L65 35 M50 50 L35 65 M50 50 L35 35 M50 50 L65 65" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="absolute bottom-24 right-1/4 w-28 h-28 opacity-4">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M50 20 L60 40 L80 40 L70 60 L80 80 L60 80 L50 60 L40 80 L20 80 L30 60 L20 40 L40 40 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Flight path lines */}
        <div className="absolute top-1/2 left-0 w-full h-px opacity-2">
          <svg viewBox="0 0 1000 10" className="w-full h-full text-blue-200">
            <path d="M0 5 Q250 2 500 5 T1000 5" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="200" cy="5" r="2" fill="currentColor"/>
            <circle cx="400" cy="5" r="2" fill="currentColor"/>
            <circle cx="600" cy="5" r="2" fill="currentColor"/>
            <circle cx="800" cy="5" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Cloud formations */}
        <div className="absolute top-8 right-1/3 w-24 h-16 opacity-3">
          <svg viewBox="0 0 100 60" className="w-full h-full text-slate-300">
            <path d="M20 40 Q10 30 20 20 Q30 10 50 20 Q70 10 80 20 Q90 30 80 40 Q70 50 50 40 Q30 50 20 40 Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-16 left-1/3 w-20 h-12 opacity-4">
          <svg viewBox="0 0 100 60" className="w-full h-full text-slate-300">
            <path d="M15 35 Q5 25 15 15 Q25 5 45 15 Q65 5 75 15 Q85 25 75 35 Q65 45 45 35 Q25 45 15 35 Z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-2">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.05) 0%, transparent 70%)`,
          }}></div>
        </div>
      </div>

      <div className="container-wide relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <ScrollAnimation animationType="fadeInUp" delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text-primary mb-6 leading-tight">
              Why Choose SkyPrep
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fadeInUp" delay={400}>
            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Learn at your own pace with personalized online coaching—study when it fits your schedule, 
              get one-on-one guidance, and build confidence with a flexible path designed just for you.
            </p>
          </ScrollAnimation>
        </div>

        {/* Stats Section */}
        <ScrollAnimation animationType="fadeInUp" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={feature.title} 
              animationType="fadeInUp" 
              delay={800 + (index * 200)}
            >
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                {/* Icon */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mt-0.5`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="text-white">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animationType="fadeInUp" delay={1600}>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry"
                className="inline-flex px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  color: "#0f172a",
                }}
              >
                Start Your Journey
              </a>
              <a
                href="/about"
                className="inline-flex px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
