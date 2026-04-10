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

const stats = [
  { value: "55+", label: "Companies House filings reviewed" },
  { value: "15", label: "FOI requests submitted" },
  { value: "6", label: "Published analyses and reports" },
  { value: "330+", label: "BIDs operating in the UK" },
  { value: "300+", label: "Local authorities in England" },
];

const capabilities = [
  {
    title: "OSINT and Corporate Mapping",
    body: "Companies House director networks, related-party transactions, beneficial ownership structures, and corporate group hierarchies. We map the relationships that public documents reveal but procurement teams miss.",
  },
  {
    title: "Digital Footprint Analysis",
    body: "Procurement trails, media contracts, undeclared sponsorships, editorial conflict patterns, and public-facing disclosure consistency. Every claim is sourced, linked, and independently verifiable.",
  },
  {
    title: "Public Records and FOI Strategy",
    body: "Structured information requests under the Freedom of Information Act 2000, transparency obligation mapping, and public record monitoring. We build the paper trail that holds governance to account.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-6">
            Strategic Intelligence &amp; Business Audits
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-8">
            We find the vulnerabilities<br />
            before the public does.
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mb-10">
            SIBA maps the corporate relationships, procurement chains, and digital
            footprints behind public funding decisions. Open-source intelligence
            and digital governance audits for BIDs, councils, and major developments
            across the UK.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services#commission"
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
            >
              Commission an Audit
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/analysis"
              className="inline-flex items-center gap-2 rounded border border-[#334155] px-6 py-3 text-sm font-semibold text-[#94a3b8] hover:text-white hover:border-[#475569] transition-colors"
            >
              Read the Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#e2e8f0]">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-4 first:pl-0 last:pr-0">
                <p className="text-2xl font-bold text-[#0f172a] mb-0.5">{s.value}</p>
                <p className="text-xs text-[#94a3b8]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
            Methodology
          </p>
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Structured analysis from public records
          </h2>
          <p className="text-[#64748b] leading-relaxed max-w-2xl mb-14">
            Every finding is sourced from publicly available documents. Companies House
            filings, FOI responses, published accounts, and digital footprint analysis.
            We do not guess. We link to the source.
          </p>

          <div className="space-y-0 divide-y divide-[#e2e8f0]">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-10 py-8 first:pt-0 last:pb-0"
              >
                <p className="text-sm font-semibold text-[#0f172a]">{c.title}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
            Case Study
          </p>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
            Southport BID Governance Audit (2026)
          </h2>
          <p className="text-[#64748b] leading-relaxed mb-6 max-w-2xl">
            A 12-month open-source investigation into a Business Improvement District
            managing over £448,000 in compulsory levy income. The audit mapped director
            conflicts of interest, undeclared media contracts, procurement opacity, and
            editorial bias on a publicly-funded tourism platform. 15 Freedom of
            Information requests were submitted to Sefton Council. Six analyses and
            reports were published in full.
          </p>
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            {[
              { label: "Duration", value: "12 months" },
              { label: "FOI requests", value: "15" },
              { label: "Published reports", value: "6" },
              { label: "Companies House filings reviewed", value: "55+" },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-xs text-[#94a3b8]">{d.label}</p>
                <p className="font-semibold text-[#0f172a]">{d.value}</p>
              </div>
            ))}
          </div>
          <Link
            href="/analysis"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f172a] hover:text-[#475569] transition-colors"
          >
            Read the full case study
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Reach */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
            Reach
          </p>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
            The right people read this work
          </h2>
          <p className="text-[#64748b] leading-relaxed max-w-2xl mb-10">
            A single published analysis generated over 7,300 impressions on LinkedIn.
            The readership included government administration professionals, compliance
            officers, construction and real estate executives, and national media.
            The methodology attracted attention because it was structured, sourced,
            and independently verifiable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7,300+", label: "LinkedIn impressions" },
              { value: "12.8%", label: "Government administration" },
              { value: "BBC", label: "National media viewers" },
              { value: "MHCLG", label: "Central government reach" },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-xl font-bold text-[#0f172a] mb-1">{d.value}</p>
                <p className="text-xs text-[#94a3b8]">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your organisation manages public money.
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-xl mx-auto">
            We make sure the digital and corporate trail is clean before
            someone else finds it.
          </p>
          <Link
            href="/services#commission"
            className="inline-flex items-center gap-2 rounded bg-white px-8 py-3.5 text-sm font-semibold text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
          >
            Commission an Audit
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
