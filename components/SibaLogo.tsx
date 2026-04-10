interface SibaLogoProps {
  markSize?: number;
  showWordmark?: boolean;
  className?: string;
  variant?: "default" | "light";
}

export function SibaMark({ size = 28, variant = "default" }: { size?: number; variant?: "default" | "light" }) {
  const light = variant === "light";
  const bg = light ? "#ffffff" : "#112d6e";
  const fg = light ? "#112d6e" : "#ffffff";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      {/* Container square */}
      <rect width="28" height="28" rx="4" fill={bg} />
      {/* Classic geometric chess pawn */}
      <g fill={fg}>
        {/* Head */}
        <circle cx="14" cy="7" r="4" />
        {/* Collar */}
        <ellipse cx="14" cy="11.5" rx="5.5" ry="1.2" />
        {/* Body */}
        <path d="M 11.5 12 Q 11.5 17 8 21 L 20 21 Q 16.5 17 16.5 12 Z" />
        {/* Base upper step */}
        <rect x="7" y="21" width="14" height="2" rx="0.5" />
        {/* Base lower step */}
        <rect x="5.5" y="23" width="17" height="2.5" rx="1" />
      </g>
    </svg>
  );
}

export default function SibaLogo({
  markSize = 28,
  showWordmark = true,
  className = "",
  variant = "default",
}: SibaLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SibaMark size={markSize} variant={variant} />
      {showWordmark && (
        <span
          className={`text-[15px] font-semibold tracking-wide uppercase leading-none transition-colors duration-300 ${
            variant === "light" ? "text-white" : "text-[#112d6e]"
          }`}
        >
          SIBA Digital
        </span>
      )}
    </span>
  );
}
