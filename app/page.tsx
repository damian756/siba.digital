import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.15] tracking-tight text-[#111827] mb-8">
            We find the vulnerabilities<br />
            before the public does.
          </h1>
          <p className="text-lg text-[#374151] leading-relaxed max-w-xl mb-10">
            SIBA maps the corporate relationships, procurement chains, and
            digital footprints behind public funding decisions. Open-source
            intelligence and digital governance audits for BIDs, councils,
            and major developments across the UK.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/services#commission"
              className="text-sm font-medium text-[#111827] border-b border-[#111827] pb-0.5 hover:text-[#374151] hover:border-[#374151] transition-colors"
            >
              Commission an Audit
            </Link>
            <Link
              href="/analysis"
              className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors"
            >
              Read the Case Study
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-[#e5e7eb] mx-auto max-w-3xl" />

      {/* Methodology */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#111827] mb-10">Methodology</h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-2">
                OSINT and Corporate Mapping
              </p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Companies House director networks, related-party transactions,
                beneficial ownership structures, and corporate group hierarchies.
                We map the relationships that public documents reveal but
                procurement teams miss.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#111827] mb-2">
                Digital Footprint Analysis
              </p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Procurement trails, media contracts, undeclared sponsorships,
                editorial conflict patterns, and public-facing disclosure
                consistency. Every claim is sourced, linked, and independently
                verifiable.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#111827] mb-2">
                Public Records and FOI Strategy
              </p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Structured information requests under the Freedom of Information
                Act 2000, transparency obligation mapping, and public record
                monitoring. We build the paper trail that holds governance to
                account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#e5e7eb] mx-auto max-w-3xl" />

      {/* Case Study */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-4">
            Published Investigation
          </p>
          <h2 className="text-2xl text-[#111827] mb-5">
            Southport BID Governance Audit
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-6 max-w-xl">
            A 12-month open-source investigation into a Business Improvement
            District managing over &pound;448,000 in compulsory levy income.
            The audit mapped director conflicts of interest, undeclared media
            contracts, procurement opacity, and editorial bias on a publicly-funded
            tourism platform. 15 Freedom of Information requests were submitted
            to Sefton Council. Six analyses and reports were published in full.
          </p>
          <Link
            href="/analysis"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111827] hover:text-[#374151] transition-colors"
          >
            Read the full case study
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <hr className="border-[#e5e7eb] mx-auto max-w-3xl" />

      {/* Reach */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#111827] mb-5">Reach</h2>
          <p className="text-sm text-[#374151] leading-relaxed max-w-xl">
            A single published analysis generated over 7,300 impressions on
            LinkedIn. The readership included government administration
            professionals, compliance officers, construction and real estate
            executives, and national media. The methodology attracted attention
            because it was structured, sourced, and independently verifiable.
          </p>
        </div>
      </section>

      <hr className="border-[#e5e7eb] mx-auto max-w-3xl" />

      {/* Contact */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#111827] mb-5">
            Your organisation manages public money.
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed max-w-xl mb-6">
            We make sure the digital and corporate trail is clean before
            someone else finds it.
          </p>
          <Link
            href="/services#commission"
            className="text-sm font-medium text-[#111827] border-b border-[#111827] pb-0.5 hover:text-[#374151] hover:border-[#374151] transition-colors"
          >
            Commission an Audit
          </Link>
        </div>
      </section>
    </>
  );
}
