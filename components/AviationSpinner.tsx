"use client";
import React, { useId } from "react";

type AviationSpinnerProps = {
  /** Overall size in pixels */
  size?: number;
  /** Color of the plane */
  color?: string;
  /** Color of the circular track */
  trackColor?: string;
  /** Animation duration in seconds */
  speed?: number;
  /** Spin direction */
  direction?: "clockwise" | "counterclockwise";
  /** Visual style */
  variant?: "contrail" | "turn" | "compass" | "attitude" | "turbine" | "orbit";
  /** Accessible label announced by screen readers */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * AviationSpinner
 * A professional, reusable loading spinner with a plane orbiting a circular track.
 * Designed to fit the aviation theme using brand tokens defined in globals.
 *
 * Safe for Server Components (no hooks). Purely visual.
 */
export function AviationSpinner({
  size = 56,
  color = "var(--brand-300)",
  trackColor = "var(--border)",
  speed = 1.2,
  direction = "clockwise",
  variant = "compass",
  label = "Loading",
  className,
  style,
}: AviationSpinnerProps) {
  const planeSize = Math.max(14, Math.round(size * 0.32));
  const animationDirection = direction === "counterclockwise" ? "reverse" : "normal";
  const planeTiltDeg = direction === "counterclockwise" ? -90 : 90; // keep nose along tangent
  const uniqueId = useId();

  const skyColor = "var(--brand-200)";
  const earthColor = "#CDAA82"; // warm earth tone that complements brand pastels

  const content = variant === "contrail" ? (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Rotator */}
      <div
        className="absolute inset-0"
        style={{ animation: `aviation-spin ${speed}s linear infinite`, animationDirection }}
      >
        {/* Dotted orbit contrail */}
        <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
          {(() => {
            const dots: JSX.Element[] = [];
            const dotCount = 16;
            const radius = 36; // orbit radius inside 100x100 viewbox
            for (let i = 0; i < dotCount; i++) {
              const t = 1 - i / (dotCount - 1); // 1 near plane, 0 tail
              const ease = t * t * (3 - 2 * t); // smoothstep
              const dotR = 1.8 + ease * 2.6; // 1.8 -> 4.4
              const deg = -90 + i * (300 / (dotCount - 1)); // 300° arc
              const rad = (deg * Math.PI) / 180;
              const cx = 50 + radius * Math.cos(rad);
              const cy = 50 + radius * Math.sin(rad);
              const opacity = 0.25 + ease * 0.65;
              dots.push(<circle key={i} cx={cx} cy={cy} r={dotR} fill={color} opacity={opacity} />);
            }
            return dots;
          })()}
        </svg>

        {/* Plane head at start of arc (top), oriented tangent to the orbit */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" style={{ width: size * 0.34, height: size * 0.34 }}>
          <svg viewBox="0 0 64 64" width={size * 0.34} height={size * 0.34} aria-hidden>
            <g transform={`rotate(${planeTiltDeg} 32 32)`}>
              <path
                d="M6 34c10-2 22-6 32-14 3-2 6-5 9-7 3-2 6-3 9-3 1 0 2 1 2 2 0 2-2 4-4 6-3 3-7 6-10 8-8 6-15 11-20 18l-6 10c-1 1-3 1-4-1l3-11c-3-1-5-2-7-3-2-1-3-2-4-3-1-2 0-3 2-3 2 0 5 0 8 1l5 1 3-4c2-2 5-4 12-9"
                fill={color}
                opacity="0.95"
              />
              <path d="M20 43l-7 11" stroke={color} strokeWidth="4" strokeLinecap="round" />
              <circle cx="58" cy="10" r="3" fill={color} opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Faint base ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `inset 0 0 0 ${Math.max(2, Math.round(size * 0.045))}px ${trackColor}`, opacity: 0.25 }}
        aria-hidden
      />
    </div>
  ) : variant === "turn" ? (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Bezel */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <radialGradient id={`turnBezel-${uniqueId}`} cx="50%" cy="50%" r="55%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.06" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke={trackColor} strokeWidth="4" />
        <circle cx="50" cy="50" r="48" fill="none" stroke={`url(#turnBezel-${uniqueId})`} strokeWidth="6" />
      </svg>

      {/* Bank reference arc marks */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        {[-30, -20, -10, 10, 20, 30].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            <line x1="50" y1="8" x2="50" y2={Math.abs(deg) % 20 === 0 ? 14 : 12} stroke={trackColor} strokeWidth={Math.abs(deg) % 20 === 0 ? 2 : 1.5} strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {/* Slip/skid ball track */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <rect x="32" y="72" width="36" height="8" rx="4" fill={trackColor} opacity="0.5" />
      </svg>

      {/* Slip/skid ball */}
      <div className="absolute left-1/2" style={{ top: size * 0.72, transform: "translateX(-50%)" }}>
        <div
          style={{
            width: size * 0.12,
            height: size * 0.12,
            borderRadius: "9999px",
            background: color,
            animation: `ball-oscillate ${speed * 1.4}s ease-in-out infinite alternate`,
            animationDirection,
          }}
        />
      </div>

      {/* Miniature airplane that banks left and right */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: size * 0.65,
            height: size * 0.65,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "50% 60%",
            animation: `bank-oscillate ${speed * 1.4}s ease-in-out infinite alternate`,
            animationDirection,
          }}
          aria-hidden
        >
          <svg viewBox="0 0 100 100" width={size * 0.65} height={size * 0.65}>
            {/* Wings */}
            <line x1="20" y1="50" x2="80" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round" />
            {/* Fuselage */}
            <line x1="50" y1="50" x2="50" y2="66" stroke={color} strokeWidth="3" strokeLinecap="round" />
            {/* Tail */}
            <line x1="50" y1="66" x2="50" y2="70" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  ) : variant === "compass" ? (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Bezel */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <radialGradient id={`compassBezel-${uniqueId}`} cx="50%" cy="50%" r="55%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.06" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke={trackColor} strokeWidth="4" />
        <circle cx="50" cy="50" r="48" fill="none" stroke={`url(#compassBezel-${uniqueId})`} strokeWidth="6" />
      </svg>

      {/* Compass rose ticks */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          const isCardinal = angle % 90 === 0;
          const y1 = isCardinal ? 8 : 10;
          const y2 = isCardinal ? 16 : 14;
          return (
            <g key={angle} transform={`rotate(${angle} 50 50)`}>
              <line x1="50" y1={y1} x2="50" y2={y2} stroke={trackColor} strokeWidth={isCardinal ? 2 : 1.5} strokeLinecap="round" />
            </g>
          );
        })}
        {/* North triangle marker */}
        <g>
          <polygon points="50,6 47,12 53,12" fill={color} opacity="0.9" />
        </g>
      </svg>

      {/* Rotating heading needle */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden
        style={{ animation: `aviation-spin ${Math.max(0.9, speed)}s linear infinite`, animationDirection }}
      >
        <line x1="50" y1="50" x2="50" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="50,10 47,16 53,16" fill={color} />
        <line x1="50" y1="50" x2="50" y2="82" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>

      {/* Center hub */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r="3.2" fill={color} />
      </svg>
    </div>
  ) : variant === "attitude" ? (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Bezel & bank scale */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <radialGradient id={`bezelShade-${uniqueId}`} cx="50%" cy="50%" r="55%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.06" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke={trackColor} strokeWidth="4" />
        <circle cx="50" cy="50" r="48" fill="none" stroke={`url(#bezelShade-${uniqueId})`} strokeWidth="6" />

        {/* Bank marks (10°, 20°, 30°, 45°) around top */}
        {[
          0, 10, 20, 30, 45, -10, -20, -30, -45,
        ].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            <line x1="50" y1="4" x2="50" y2={deg % 30 === 0 ? 10 : 8} stroke={trackColor} strokeWidth={deg % 30 === 0 ? 2 : 1.5} strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {/* Rotating horizon & pitch ladder */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <clipPath id={`att-clip-${uniqueId}`}>
            <circle cx="50" cy="50" r="44" />
          </clipPath>
        </defs>
        <g clipPath={`url(#att-clip-${uniqueId})`} style={{ animation: `aviation-spin ${speed}s linear infinite`, animationDirection }}>
          {/* Sky and earth halves */}
          <rect x="0" y="0" width="100" height="50" fill={skyColor} />
          <rect x="0" y="50" width="100" height="50" fill={earthColor} />
          {/* Horizon line */}
          <rect x="0" y="49" width="100" height="2" fill={color} opacity="0.6" />

          {/* Pitch ladder marks */}
          {[
            10, 20, 30
          ].flatMap((p) => [p, -p]).map((p) => (
            <g key={p}>
              <line x1={50 - (p === 10 ? 24 : p === 20 ? 18 : 12)} y1={50 - p} x2={50 + (p === 10 ? 24 : p === 20 ? 18 : 12)} y2={50 - p} stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </g>
          ))}
        </g>
      </svg>

      {/* Fixed miniature aircraft symbol */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        {/* Wings */}
        <line x1="35" y1="50" x2="65" y2="50" stroke={color} strokeWidth="3" strokeLinecap="round" />
        {/* Fuselage */}
        <line x1="50" y1="50" x2="50" y2="60" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        {/* Nose marker */}
        <circle cx="50" cy="46" r="2.2" fill={color} />
      </svg>
    </div>
  ) : variant === "turbine" ? (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Outer ring with subtle depth */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <radialGradient id={`ringShade-${uniqueId}`} cx="50%" cy="50%" r="55%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.06" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke={trackColor} strokeWidth="6" />
        <circle cx="50" cy="50" r="46" fill="none" stroke={`url(#ringShade-${uniqueId})`} strokeWidth="6" />
      </svg>

      {/* Rotating blades */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden
        style={{ animation: `turbine-spin ${speed}s linear infinite`, animationDirection }}
      >
        <defs>
          <linearGradient id={`bladeGrad-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.75" />
            <stop offset="80%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 8) * i} 50 50)`}>
            <rect x={50 - 3.2} y={18} width={6.4} height={26} rx={3.2} fill={`url(#bladeGrad-${uniqueId})`} />
          </g>
        ))}
      </svg>

      {/* Hub */}
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r="10" fill={color} />
        <circle cx="50" cy="50" r="6" fill="#fff" opacity="0.8" />
      </svg>
    </div>
  ) : (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `inset 0 0 0 ${Math.max(2, Math.round(size * 0.05))}px ${trackColor}`,
          filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.04))",
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, ${color} 0deg, transparent 90deg)`,
          opacity: 0.35,
          WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 62%)",
          maskImage: "radial-gradient(circle at center, black 60%, transparent 62%)",
          animation: `aviation-spin ${speed}s linear infinite`,
          animationDirection,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{ animation: `aviation-spin ${speed}s linear infinite`, animationDirection }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div
            style={{
              width: planeSize,
              height: planeSize,
              transform: `rotate(${planeTiltDeg}deg)`,
              transformOrigin: "50% 50%",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.12))",
            }}
          >
            <svg viewBox="0 0 64 64" width={planeSize} height={planeSize} aria-hidden="true" focusable="false">
              <path
                d="M6 34c10-2 22-6 32-14 3-2 6-5 9-7 3-2 6-3 9-3 1 0 2 1 2 2 0 2-2 4-4 6-3 3-7 6-10 8-8 6-15 11-20 18l-6 10c-1 1-3 1-4-1l3-11c-3-1-5-2-7-3-2-1-3-2-4-3-1-2 0-3 2-3 2 0 5 0 8 1l5 1 3-4c2-2 5-4 12-9"
                fill={color}
                opacity="0.95"
              />
              <path d="M20 43l-7 11" stroke={color} strokeWidth="4" strokeLinecap="round" />
              <circle cx="58" cy="10" r="3" fill={color} opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden
        style={{ animation: `aviation-spin ${speed * 1.2}s linear infinite`, animationDirection }}
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray="60 260" strokeOpacity="0.25" />
      </svg>
    </div>
  );

  return (
    <div role="status" aria-live="polite" aria-label={label} className={className} style={style}>
      {content}
      <span style={srOnlyStyles}>{label}</span>

      <style jsx>{`
        @keyframes aviation-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes turbine-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bank-oscillate {
          0% { transform: rotate(-12deg); }
          100% { transform: rotate(12deg); }
        }
        @keyframes ball-oscillate {
          0% { transform: translateX(-16px); }
          100% { transform: translateX(16px); }
        }
      `}</style>
    </div>
  );
}

const srOnlyStyles: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
};

export default AviationSpinner;


