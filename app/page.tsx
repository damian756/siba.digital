import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SIBA Digital | Strategic Intelligence & Business Audits",
  description:
    "Digital governance audits and open-source intelligence for BIDs, councils, and major developments. We find the vulnerabilities before the public does.",
  alternates: {
    canonical: "https://www.siba.digital",
  },
  openGraph: {
    title: "SIBA Digital | Strategic Intelligence & Business Audits",
    description:
      "Digital governance audits and OSINT for BIDs, councils, and major developments across the UK.",
    url: "https://www.siba.digital",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 lg:pt-52 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#112d6e] mb-10 leading-[1.12]">
              We find the vulnerabilities<br />
              before the public does.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[17px] text-[#3d3d3d] leading-relaxed max-w-lg mx-auto mb-12">
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
                className="text-sm text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
              >
                Commission an Audit
              </Link>
              <Link
                href="/analysis"
                className="text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors"
              >
                Read the Case Study
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="border-[#ddddd5] mx-auto max-w-3xl" />

      {/* Methodology */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl text-[#112d6e] mb-12 text-center">Methodology</h2>
          </Reveal>

          <div className="space-y-10 max-w-xl mx-auto">
            <Reveal>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-2">
                  OSINT and Corporate Mapping
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Companies House director networks, related-party transactions,
                  beneficial ownership structures, and corporate group hierarchies.
                  We map the relationships that public documents reveal but
                  procurement teams miss.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-2">
                  Digital Footprint Analysis
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Procurement trails, media contracts, undeclared sponsorships,
                  editorial conflict patterns, and public-facing disclosure
                  consistency. Every claim is sourced, linked, and independently
                  verifiable.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-2">
                  Public Records and FOI Strategy
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
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

      <hr className="border-[#ddddd5] mx-auto max-w-3xl" />

      {/* Case Study */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4 text-center">
              Published Investigation
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-xl text-[#112d6e] mb-6 text-center">
              Southport BID Governance Audit
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-8 max-w-lg mx-auto text-center">
              A 12-month open-source investigation into a Business Improvement
              District managing over &pound;448,000 in compulsory levy income.
              The audit mapped director conflicts of interest, undeclared media
              contracts, procurement opacity, and editorial bias on a publicly-funded
              tourism platform. 15 Freedom of Information requests were submitted
              to Sefton Council. Six analyses and reports were published in full.
            </p>
          </Reveal>
          <Reveal>
            <div className="text-center">
              <Link
                href="/analysis"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                Read the full case study
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="border-[#ddddd5] mx-auto max-w-3xl" />

      {/* Reach */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-xl text-[#112d6e] mb-6">Reach</h2>
          </Reveal>
          <Reveal>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-lg mx-auto">
              A single published analysis generated over 7,300 impressions on
              LinkedIn. The readership included government administration
              professionals, compliance officers, construction and real estate
              executives, and national media. The methodology attracted attention
              because it was structured, sourced, and independently verifiable.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="border-[#ddddd5] mx-auto max-w-3xl" />

      {/* Contact */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-xl text-[#112d6e] mb-6">
              Your organisation manages public money.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-lg mx-auto mb-8">
              We make sure the digital and corporate trail is clean before
              someone else finds it.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/services#commission"
              className="text-sm text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
            >
              Commission an Audit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
