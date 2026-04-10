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
      {/* Chess pawn silhouette */}
      {/* Head */}
      <circle cx="14" cy="7" r="3.5" fill={fg} />
      {/* Neck */}
      <rect x="12" y="9" width="4" height="3.5" fill={fg} />
      {/* Body */}
      <ellipse cx="14" cy="15" rx="5.5" ry="4" fill={fg} />
      {/* Stem */}
      <rect x="12" y="17.5" width="4" height="3" fill={fg} />
      {/* Base */}
      <rect x="8" y="20" width="12" height="3.5" rx="1.5" fill={fg} />
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
