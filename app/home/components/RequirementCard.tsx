import React from 'react';

interface RequirementCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function RequirementCard({ title, icon: Icon }: RequirementCardProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 sm:p-4 group hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-white/30 shadow-lg hover:shadow-xl">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white font-bold text-xs sm:text-sm lg:text-sm leading-tight group-hover:text-blue-200 transition-colors duration-300">{title}</div>
      </div>
    </div>
  );
}
