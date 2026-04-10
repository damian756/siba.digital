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
      {/*
        Chess pawn silhouette — single traced path:
        Start at bottom-left of head circle, arc over the top,
        concave neck curves inward, body sweeps out convexly,
        wide base with raised step collar.
      */}
      <path
        d="
          M 12 9.2
          A 4 4 0 1 1 16 9.2
          C 17.5 10.6, 17 12.5, 15.5 14
          C 14.5 15.5, 21.5 18.5, 21.5 21.5
          L 23.5 21.5
          L 23.5 25.5
          L 4.5 25.5
          L 4.5 21.5
          L 6.5 21.5
          C 6.5 18.5, 13.5 15.5, 12.5 14
          C 11 12.5, 10.5 10.6, 12 9.2
          Z
        "
        fill={fg}
      />
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
