import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SIBA Digital | BID Governance Audits and OSINT",
  description:
    "Digital governance audits, OSINT and FOI strategy for Business Improvement Districts, councils and major developments across the UK. We find the vulnerabilities before the public does.",
  alternates: {
    canonical: "https://www.siba.digital",
  },
  openGraph: {
    title: "SIBA Digital | BID Governance Audits and OSINT",
    description:
      "Digital governance audits, OSINT and FOI strategy for Business Improvement Districts, councils and major developments across the UK.",
    url: "https://www.siba.digital",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[60px] flex min-h-[80vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/siba-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#f6f6ef]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-[60px] pb-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="mb-10 text-[36px] leading-[1.1] text-white drop-shadow-lg sm:text-[46px] lg:text-[56px]">
              We find the vulnerabilities<br />
              before the public does.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mb-12 max-w-lg text-[17px] leading-relaxed text-white/80">
              SIBA maps the corporate relationships, procurement chains, and
              digital footprints behind public funding decisions. Open-source
              intelligence and digital governance audits for BIDs, councils,
              and major developments across the UK.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-8">
              <Link
                href="/services#commission"
                className="border-b border-white/40 pb-0.5 text-sm text-white/90 transition-colors hover:border-white hover:text-white"
              >
                Commission an Audit
              </Link>
              <Link
                href="/overview"
                className="text-sm text-white/40 transition-colors hover:text-white/80"
              >
                Read the Case Study
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-12 text-center">Methodology</h2>
          </Reveal>

          <div className="mx-auto max-w-xl space-y-10">
            <Reveal>
              <div>
                <p className="mb-2 text-sm font-medium text-[#1c1c1c]">
                  OSINT and Corporate Mapping
                </p>
                <p className="text-[15px] leading-relaxed text-[#3d3d3d]">
                  Companies House director networks, related-party transactions,
                  beneficial ownership structures, and corporate group hierarchies.
                  We map the relationships that public documents reveal but
                  procurement teams miss.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="mb-2 text-sm font-medium text-[#1c1c1c]">
                  Digital Footprint Analysis
                </p>
                <p className="text-[15px] leading-relaxed text-[#3d3d3d]">
                  Procurement trails, media contracts, undeclared sponsorships,
                  editorial conflict patterns, and public-facing disclosure
                  consistency. Every claim is sourced, linked, and independently
                  verifiable.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="mb-2 text-sm font-medium text-[#1c1c1c]">
                  Public Records and FOI Strategy
                </p>
                <p className="text-[15px] leading-relaxed text-[#3d3d3d]">
                  Structured information requests under the Freedom of Information
                  Act 2000, transparency obligation mapping, and public record
                  monitoring. We build the paper trail that holds governance to
                  account.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* Case Study */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
              Published Investigation
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mb-6 text-center">
              Southport BID Governance Audit
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mb-8 max-w-lg text-center text-[15px] leading-relaxed text-[#3d3d3d]">
              An open-source investigation into a Business Improvement
              District managing over &pound;448,000 in compulsory levy income.
              The audit mapped director conflicts of interest, undeclared media
              contracts, procurement opacity, and editorial bias on a publicly-funded
              tourism platform. 15 Freedom of Information requests were submitted
              to Sefton Council. Three reports were published in full.
            </p>
          </Reveal>
          <Reveal>
            <div className="text-center">
              <Link
                href="/overview"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Read the full case study
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* FOI Deadline */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between border border-[#ddddd5] bg-white px-6 py-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                  Live FOI Tracker
                </p>
                <p className="text-[15px] text-[#3d3d3d]">
                  15 Freedom of Information requests to Sefton Council.
                  Statutory deadlines: <strong className="text-[#1c1c1c]">5-7 May 2026</strong>.
                </p>
              </div>
              <Link
                href="/foi"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                View countdown
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* Featured Analysis */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
              Structural Analysis
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mb-6 text-center">
              The Silence Is the Story
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mb-8 max-w-lg text-center text-[15px] leading-relaxed text-[#3d3d3d]">
              In BID towns across the UK, small business owners self-censor. Not because
              anyone has threatened them. Because the structure makes silence the only
              rational choice. A structural analysis of fear in BID towns.
            </p>
          </Reveal>
          <Reveal>
            <div className="text-center">
              <Link
                href="/blog/the-silence-is-the-story"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Read the analysis
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* Reach */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-6 text-center">Reach</h2>
          </Reveal>

          <Reveal>
            <div className="mb-10 grid grid-cols-2 divide-x divide-[#ddddd5] border border-[#ddddd5]">
              <div className="px-8 py-6 text-center">
                <p className="text-3xl font-semibold text-[#112d6e]">10,000+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#a0a0a0]">Impressions</p>
              </div>
              <div className="px-8 py-6 text-center">
                <p className="text-3xl font-semibold text-[#112d6e]">7,191</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#a0a0a0]">Members reached</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mx-auto max-w-lg text-center text-[15px] leading-relaxed text-[#3d3d3d]">
              A single published analysis. No paid promotion. Over 55% of the
              audience held senior, director, or executive positions. Viewers
              included professionals from <strong className="text-[#1c1c1c]">the House of Commons</strong>,{" "}
              <strong className="text-[#1c1c1c]">MHCLG</strong>,{" "}
              <strong className="text-[#1c1c1c]">Bristol City Council</strong>,{" "}
              <strong className="text-[#1c1c1c]">North Yorkshire Council</strong>,{" "}
              <strong className="text-[#1c1c1c]">Transport for London</strong>,{" "}
              <strong className="text-[#1c1c1c]">Savills</strong>, and{" "}
              <strong className="text-[#1c1c1c]">AtkinsRéalis</strong>. Government
              Administration was the single largest industry at 14.6% of the
              audience, followed by construction, infrastructure, and real estate.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-6 text-center">
              <a
                href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#6b6b6b] transition-colors hover:text-[#1c1c1c]"
              >
                View on LinkedIn
                <ExternalLink size={11} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* Contact */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="mb-6">
              Your organisation manages public money.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mb-8 max-w-lg text-[15px] leading-relaxed text-[#3d3d3d]">
              We make sure the digital and corporate trail is clean before
              someone else finds it.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/services#commission"
              className="border-b border-[#2c4a52] pb-0.5 text-sm text-[#2c4a52] transition-colors hover:border-[#1c1c1c] hover:text-[#1c1c1c]"
            >
              Commission an Audit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
