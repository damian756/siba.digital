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
      <path
        d="
          M 11 9
          A 3.2 3.2 0 1 1 17 9
          C 16.5 10.3, 16 11.5, 15.5 12.5
          C 15.2 14, 18.5 17, 18.2 19.2
          L 20 19.8
          L 20 23.5
          L 8 23.5
          L 8 19.8
          L 9.8 19.2
          C 9.5 17, 12.8 14, 12.5 12.5
          C 12 11.5, 11.5 10.3, 11 9
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
