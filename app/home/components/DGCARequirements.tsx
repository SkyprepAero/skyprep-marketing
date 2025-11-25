// Video path directly from public folder
const WingTowardsLeft = '/media/videos/wing-towardsleft.mp4';
import { ScrollAnimation } from "./ScrollAnimation";
import { RequirementCard } from "./RequirementCard";
import { dgcaRequirements } from "../data/dgcaRequirements";

export function DGCARequirements() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[50vh] lg:min-h-[45vh] overflow-hidden full-bleed">
      {/* Video Background */}
      <video
        src={WingTowardsLeft}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      />
      
      {/* Smoked Black Translucent Overlay */}
      <div className="absolute inset-0 h-full bg-black/50" />

       {/* Content */}
       <div className="relative z-10 min-h-[60vh] sm:min-h-[50vh] lg:min-h-[45vh] flex items-center justify-center py-8 sm:py-10 lg:py-12">
         <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
           <ScrollAnimation animationType="fadeInUp" delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              DGCA Pilot Licensing Requirements
            </h2>
           </ScrollAnimation>
           
           <ScrollAnimation animationType="fadeInUp" delay={400}>
             <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto px-4">
               Navigate DGCA licensing requirements with confidence. Expert guidance on flight training requirements, PIC hours, 
               instrument flying hours, total flight time, and commercial pilot license India standards.
             </p>
           </ScrollAnimation>
           
           {/* Flight Hour Requirements - Card Layout */}
           <ScrollAnimation animationType="scaleIn" delay={600}>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
               {dgcaRequirements.map((requirement) => (
                 <RequirementCard
                   key={requirement.id}
                   title={requirement.title}
                   icon={requirement.icon}
                 />
               ))}
             </div>
           </ScrollAnimation>

           <ScrollAnimation animationType="fadeInUp" delay={800}>
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
                <a
                 href="/contact"
                 className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
               >
                 Get Expert Help
               </a>
             </div>
           </ScrollAnimation>
         </div>
       </div>
     </section>
  );
}
