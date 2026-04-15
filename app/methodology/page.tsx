import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Methodology: How SIBA Conducts Governance Audits",
  description:
    "SIBA uses public records only. Companies House, FOI, council registers of interest, published accounts, and digital footprint analysis. Every finding is sourced, linked, and independently verifiable.",
  alternates: {
    canonical: "https://www.siba.digital/methodology",
  },
  openGraph: {
    title: "Methodology | SIBA Digital",
    description:
      "Public records only. Every finding sourced, linked, and independently verifiable. How SIBA conducts digital governance audits.",
    url: "https://www.siba.digital/methodology",
    type: "website",
  },
};

const methodologySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Methodology: How SIBA Conducts Governance Audits",
  description:
    "SIBA uses public records only. Companies House, FOI, council registers of interest, published accounts, and digital footprint analysis.",
  url: "https://www.siba.digital/methodology",
  isPartOf: {
    "@id": "https://www.siba.digital/#organization",
  },
};

const sources = [
  {
    label: "Companies House",
    detail:
      "Director appointment and resignation history. Corporate group structures. Related-party directorships. Beneficial ownership filings. Confirmation statements and accounts. Every UK company's filing history is public. We read it systematically.",
  },
  {
    label: "Council Registers of Interest",
    detail:
      "All elected members and many senior officers are required to declare financial interests, directorships, and organisational memberships. Published online by every local authority. Cross-referenced against BID board membership and procurement relationships to identify undisclosed overlaps.",
  },
  {
    label: "Freedom of Information Act 2000",
    detail:
      "Public bodies are legally required to respond to information requests within 20 working days. SIBA structures FOI requests to build a documented evidence chain. Refusals are appealed. Every response and refusal is published in full on WhatDoTheyKnow, creating a permanent public record.",
  },
  {
    label: "Published Accounts and Business Plans",
    detail:
      "BIDs are required to publish annual accounts and business plans. Budget line analysis reveals procurement patterns, contractor relationships, and spending decisions. Where money goes and who receives it is documented in the public record.",
  },
  {
    label: "Digital Footprint Analysis",
    detail:
      "Media contracts, editorial relationships, sponsored content, platform bias, undeclared sponsorships, and public-facing disclosure consistency. The gap between what an organisation says and what its digital trail shows is often where governance failures are most visible.",
  },
];

const standards = [
  {
    label: "Public records only",
    detail:
      "All research is conducted under existing public access rights. No covert methods. No social engineering. No private information. Everything SIBA finds, you could find yourself. We are faster, more systematic, and more experienced in reading what the documents reveal.",
  },
  {
    label: "Source every claim",
    detail:
      "Every factual finding in a SIBA report is linked to its source document. If a claim cannot be sourced from a publicly available record, it does not go in the report. Nothing is assumed. Nothing is inferred beyond what the document states.",
  },
  {
    label: "Adversarial review",
    detail:
      "Before delivery, every report is reviewed against the question: would this finding survive challenge from the subject of the report? If the answer is no, the finding is either strengthened with additional sourcing or removed. Reports are built to withstand scrutiny.",
  },
  {
    label: "Right of reply",
    detail:
      "In published investigations, any individual or organisation named is offered the opportunity to respond before publication. Responses are published in full, unedited. For confidential commercial audits, the commissioning organisation receives the findings and decides whether and when to offer right of reply.",
  },
  {
    label: "Confidential delivery",
    detail:
      "Commercial audit reports are delivered privately to the commissioning organisation via encrypted transfer. They are never published, shared, or referenced publicly without the client's explicit instruction.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
            Methodology
          </p>
        </Reveal>
        <Reveal>
          <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-6 leading-[1.15]">
            Public records. Verifiable findings. Nothing else.
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-[17px] text-[#3d3d3d] leading-relaxed max-w-xl mb-20">
            Every SIBA audit is built entirely from information that already exists
            in the public domain. No covert methods. No private information. No
            speculation. If we cannot source a finding to a public document, it does
            not go in the report.
          </p>
        </Reveal>

        {/* Sources */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              The five sources
            </p>
            <div className="space-y-10">
              {sources.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-semibold text-[#1c1c1c] mb-2">
                    {s.label}
                  </p>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Evidence standards */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Evidence standards
            </p>
            <div className="space-y-10">
              {standards.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-semibold text-[#1c1c1c] mb-2">
                    {s.label}
                  </p>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Proof */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-6">
              Proof of concept
            </p>
            <div className="border-l-2 border-[#112d6e] pl-6 py-1">
              <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-4">
                This methodology is not theoretical. It was applied in full to the
                Southport BID investigation: 3 published reports, 15 FOI requests to
                Sefton Council, and a complete corporate network map built entirely
                from public documents.
              </p>
              <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-6">
                The investigation reached the House of Commons, MHCLG, Bristol City
                Council, Transport for London, Savills, and BBC journalists. Over
                10,000 LinkedIn impressions with no paid promotion. 55% of the
                audience held senior, director, or executive positions.
              </p>
              <Link
                href="/overview"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                Read the Southport case study
                <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section>
            <h2 className="text-[#112d6e] mb-4">Commission an audit</h2>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-lg mb-8">
              The same methodology applied to the Southport investigation is
              available commercially. Tell us about your organisation and what
              prompted your enquiry.
            </p>
            <Link
              href="/services#commission"
              className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
            >
              Get started
              <ArrowRight size={13} />
            </Link>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
