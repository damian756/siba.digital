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
      {/* Chess pawn (FontAwesome 6 Free, CC BY 4.0) scaled to fit 28x28 */}
      <g transform="translate(6.5,2) scale(0.046875)">
        <path
          d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88C264 78.6 217.4 32 160 32S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8C64.6 326.3 48 363.6 48 404c0 0 16 36 16 36l192 0s16-36 16-36c0-40.4-16.6-77.7-44.5-116.2C243.5 286 256 272.5 256 256c0-17.7-14.3-32-32-32h-8.5zM0 448c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z"
          fill={fg}
        />
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
