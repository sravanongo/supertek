import { useId } from "react";

type SupertekLogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

/** Explicit colors — SVG gradient stops break when ancestors use backdrop-filter + CSS vars. */
const LOGO_ACCENT = "oklch(0.8 0.18 60)";
const LOGO_FOREGROUND = "oklch(0.98 0.01 250)";
const LOGO_MUTED = "oklch(0.72 0.025 250)";

export function SupertekLogo({ className = "", variant = "full" }: SupertekLogoProps) {
  const uid = useId().replace(/:/g, "");
  const accentGradientId = `supertek-accent-${uid}`;
  const darkGradientId = `supertek-dark-${uid}`;
  const markOnly = variant === "mark";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={markOnly ? "0 0 116 84" : "0 0 360 84"}
      fill="none"
      aria-label="SUPERTEK"
      role="img"
      className={`relative isolate ${className}`}
    >
      <defs>
        <linearGradient id={accentGradientId} x1="8" y1="4" x2="92" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={LOGO_ACCENT} />
          <stop offset="100%" stopColor={LOGO_ACCENT} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={darkGradientId} x1="16" y1="16" x2="92" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={LOGO_FOREGROUND} stopOpacity="0.9" />
          <stop offset="100%" stopColor={LOGO_FOREGROUND} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <path
        d="M 90 16 C 84 12 74 10 62 10 C 36 10 20 18 20 30 C 20 40 30 45 54 49 C 78 53 88 57 88 66 C 88 76 74 82 52 82 C 36 82 24 79 14 73"
        stroke={`url(#${accentGradientId})`}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 90 16 C 84 12 74 10 62 10 C 36 10 20 18 20 30 C 20 40 30 45 54 49 C 78 53 88 57 88 66 C 88 76 74 82 52 82 C 36 82 24 79 14 73"
        stroke={`url(#${darkGradientId})`}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="230 230"
        strokeDashoffset="-122"
      />

      <rect x="82" y="2" width="9" height="9" rx="1.5" fill={`url(#${accentGradientId})`} />
      <rect x="94" y="2" width="8" height="8" rx="1.3" fill={`url(#${accentGradientId})`} opacity="0.76" />
      <rect x="94" y="13" width="7" height="7" rx="1.2" fill={`url(#${accentGradientId})`} opacity="0.5" />
      <rect x="104" y="4" width="6" height="6" rx="1" fill={`url(#${accentGradientId})`} opacity="0.32" />

      {!markOnly && (
        <>
          <text
            x="126"
            y="58"
            fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="40"
            letterSpacing="1"
          >
            <tspan fill={`url(#${accentGradientId})`}>SUPER</tspan>
            <tspan fill={`url(#${darkGradientId})`}>TEK</tspan>
          </text>
          <line x1="126" y1="70" x2="158" y2="70" stroke={LOGO_ACCENT} strokeOpacity="0.7" strokeWidth="1.5" />
          <text
            x="247"
            y="73"
            fontFamily="'Inter', system-ui, -apple-system, sans-serif"
            fontSize="6.8"
            fontWeight="600"
            letterSpacing="2.8"
            textAnchor="middle"
            fill={LOGO_MUTED}
          >
            THINK SMART, WORK FASTER
          </text>
          <line x1="335" y1="70" x2="358" y2="70" stroke={LOGO_ACCENT} strokeOpacity="0.7" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
