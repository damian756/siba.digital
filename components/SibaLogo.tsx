interface SibaLogoProps {
  markSize?: number;
  showWordmark?: boolean;
  className?: string;
}

export function SibaMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="#0f172a" />
      {/* Top-left: white */}
      <rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1.5" fill="white" />
      {/* Top-right: orange */}
      <rect x="15" y="5.5" width="7.5" height="7.5" rx="1.5" fill="#f97316" />
      {/* Bottom-left: orange dim */}
      <rect x="5.5" y="15" width="7.5" height="7.5" rx="1.5" fill="#f97316" fillOpacity="0.35" />
      {/* Bottom-right: white */}
      <rect x="15" y="15" width="7.5" height="7.5" rx="1.5" fill="white" />
    </svg>
  );
}

export default function SibaLogo({ markSize = 28, showWordmark = true, className = "" }: SibaLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <SibaMark size={markSize} />
      {showWordmark && (
        <span className="text-[26px] font-bold tracking-tight text-[#0f172a] leading-none">
          SIBA
          <span className="text-[#f97316]">.digital</span>
        </span>
      )}
    </span>
  );
}
