import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
          404
        </p>
        <h1 className="text-[28px] sm:text-[32px] text-[#112d6e] mb-4 leading-[1.15]">
          Page not found
        </h1>
        <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-10">
          The page you requested does not exist or has been removed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            href="/overview"
            className="inline-flex items-center gap-1.5 text-sm text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
          >
            Read the case study
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
