import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative -mt-[60px] flex min-h-[80vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/siba-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/65" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#f6f6ef]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-[60px] pb-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="mb-10 text-[32px] leading-[1.12] text-white sm:text-[40px] lg:text-[48px]">
              We find the vulnerabilities<br />
              before the public does.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mb-12 max-w-lg text-[17px] leading-relaxed text-white/65">
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
                href="/analysis"
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
            <h2 className="mb-12 text-center text-xl">Methodology</h2>
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
            <h2 className="mb-6 text-center text-xl">
              Southport BID Governance Audit
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mb-8 max-w-lg text-center text-[15px] leading-relaxed text-[#3d3d3d]">
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

      {/* Reach */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 text-xl">Reach</h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-[#3d3d3d]">
              A single published analysis generated over 7,300 impressions on
              LinkedIn. The readership included government administration
              professionals, compliance officers, construction and real estate
              executives, and national media. The methodology attracted attention
              because it was structured, sourced, and independently verifiable.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#ddddd5]" />

      {/* Contact */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 text-xl">
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
