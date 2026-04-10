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
      <rect width="28" height="28" rx="4" fill="#1c1c1c" />
      <rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1" fill="white" />
      <rect x="15" y="5.5" width="7.5" height="7.5" rx="1" fill="white" fillOpacity="0.5" />
      <rect x="5.5" y="15" width="7.5" height="7.5" rx="1" fill="white" fillOpacity="0.25" />
      <rect x="15" y="15" width="7.5" height="7.5" rx="1" fill="white" />
    </svg>
  );
}

export default function SibaLogo({ markSize = 28, showWordmark = true, className = "" }: SibaLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SibaMark size={markSize} />
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-wide uppercase text-[#1c1c1c] leading-none">
          SIBA Digital
        </span>
      )}
    </span>
  );
}
