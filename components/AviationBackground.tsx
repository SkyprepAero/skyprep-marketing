type AviationBackgroundProps = {
  className?: string;
  showAirplane?: boolean;
};

export function AviationBackground({ className = "", showAirplane = true }: AviationBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
        {/* Subtle gradient wash */}
        <defs>
          <linearGradient id="skyWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C6EAEE" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#BAE1FF" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="800" fill="url(#skyWash)" />

        {/* Faint lat/long grid */}
        <g stroke="#0f172a" opacity="0.035" strokeWidth="1">
          {/* Horizontal lines */}
          <line x1="0" y1="100" x2="1200" y2="100" />
          <line x1="0" y1="200" x2="1200" y2="200" />
          <line x1="0" y1="300" x2="1200" y2="300" />
          <line x1="0" y1="400" x2="1200" y2="400" />
          <line x1="0" y1="500" x2="1200" y2="500" />
          <line x1="0" y1="600" x2="1200" y2="600" />
          <line x1="0" y1="700" x2="1200" y2="700" />
          {/* Vertical lines */}
          <line x1="100" y1="0" x2="100" y2="800" />
          <line x1="250" y1="0" x2="250" y2="800" />
          <line x1="400" y1="0" x2="400" y2="800" />
          <line x1="550" y1="0" x2="550" y2="800" />
          <line x1="700" y1="0" x2="700" y2="800" />
          <line x1="850" y1="0" x2="850" y2="800" />
          <line x1="1000" y1="0" x2="1000" y2="800" />
        </g>

        {/* Waypoint network (subtle) */}
        <g stroke="#0f172a" opacity="0.08">
          {/* Connecting segments */}
          <path d="M120 640 L300 560 L520 600 L740 520 L960 460 L1100 360" fill="none" strokeWidth="2" />
          <path d="M220 700 L380 540 L600 560 L820 500 L1000 420" fill="none" strokeWidth="1.5" />
          {/* Waypoint crosses */}
          <g strokeWidth="1.5">
            <g transform="translate(120,640)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
            <g transform="translate(300,560)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
            <g transform="translate(520,600)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
            <g transform="translate(740,520)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
            <g transform="translate(960,460)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
            <g transform="translate(1100,360)">
              <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
            </g>
          </g>
          {/* Beacon rings around key waypoint */}
          <g fill="none" stroke="#0f172a" opacity="0.08">
            <circle cx="960" cy="460" r="16" />
            <circle cx="960" cy="460" r="28" />
          </g>
        </g>

        {/* Approach arcs (DME-style) */}
        <g fill="none" stroke="#0f172a" opacity="0.06">
          <path d="M900 650 C 820 560, 820 480, 900 420" strokeWidth="8" />
          <path d="M920 660 C 840 570, 840 480, 920 410" strokeWidth="6" />
          <path d="M940 670 C 860 580, 860 480, 940 400" strokeWidth="4" />
        </g>

        {/* Dotted flight path */}
        <path d="M200 650 C 380 540, 520 600, 740 520 S 1020 420, 1100 300" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="2 10" opacity="0.1" />

        {/* Airplane near the path with subtle contrail */}
        {showAirplane && (
          <g transform="translate(740,520) rotate(-12)" opacity="0.16">
            {/* contrail */}
            <path d="M-140 0 L -10 0" stroke="#0f172a" strokeWidth="3" strokeDasharray="4 10" fill="none" />
            {/* airplane silhouette */}
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9L2 14v2l8-2.5V20l-2 1.5V23l3-1 3 1v-1.5L13 20v-6.5l8 2.5z" fill="#0f172a" />
          </g>
        )}

        {/* Extra dashed arc on left side for balance */}
        <path d="M120 520 C 220 460, 220 380, 120 320" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="2 12" opacity="0.08" />
      </svg>
    </div>
  );
}


