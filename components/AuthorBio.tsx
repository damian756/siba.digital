import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AuthorBio() {
  return (
    <div className="mt-12 pt-8 border-t border-[#ddddd5]">
      <div className="flex gap-5 items-start">
        <Link href="/about" className="flex-shrink-0">
          <Image
            src="/images/damian-roche.jpg"
            alt="Damian Roche, Founder of SIBA Digital"
            width={72}
            height={72}
            className="rounded-full border border-[#ddddd5]"
          />
        </Link>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-1">
            Author
          </p>
          <Link href="/about">
            <h3 className="text-base font-semibold text-[#1c1c1c] hover:text-[#2c4a52] transition-colors">
              Damian Roche
            </h3>
          </Link>
          <p className="text-xs text-[#a0a0a0] mb-3">Founder, SIBA Digital</p>
          <p className="text-[14px] text-[#3d3d3d] leading-relaxed max-w-lg">
            Ex-British Army, Queen&apos;s Guards. 20 years in web development
            and SEO. Built the SIBA investigation methodology from public
            documents alone. Cross-referencing Companies House filings, director
            networks, procurement chains, and FOI strategy. The same discipline
            is applied to every audit.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <Link
              href="/about"
              className="text-[13px] text-[#2c4a52] hover:text-[#1c1c1c] transition-colors border-b border-[#2c4a52] hover:border-[#1c1c1c] pb-px"
            >
              About Damian
            </Link>
            <a
              href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
            >
              LinkedIn
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
