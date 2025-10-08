"use client";

import { useState } from 'react';

export function CalendlyButton() {
  const [isHovered, setIsHovered] = useState(false);

  const calendlyUrl = "https://calendly.com/theskyprep/new-meeting";
  
  const handleCalendlyClick = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 left-6 z-50">
      <button
        onClick={handleCalendlyClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Schedule a call on Calendly"
      >
        {/* Calendar Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
          <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
        </svg>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 animate-in fade-in duration-200">
            Schedule a call with us
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
      </button>
    </div>
  );
}


