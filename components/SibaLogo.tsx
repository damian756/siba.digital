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
      <rect width="28" height="28" rx="4" fill={bg} />
      <rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1" fill={fg} />
      <rect x="15" y="5.5" width="7.5" height="7.5" rx="1" fill={fg} fillOpacity="0.5" />
      <rect x="5.5" y="15" width="7.5" height="7.5" rx="1" fill={fg} fillOpacity="0.25" />
      <rect x="15" y="15" width="7.5" height="7.5" rx="1" fill={fg} />
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
