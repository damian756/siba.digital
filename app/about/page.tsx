import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About SIBA Digital: BID Governance Audits and OSINT",
  description:
    "SIBA Digital provides open-source intelligence, digital governance audits and FOI strategy for Business Improvement Districts, councils and major developments. Founded by Damian Roche, ex-British Army, 20-year web and SEO professional.",
  alternates: {
    canonical: "https://www.siba.digital/about",
  },
  openGraph: {
    title: "About | SIBA Digital",
    description:
      "Open-source intelligence and digital governance audits for public bodies and major developments across the UK.",
    url: "https://www.siba.digital/about",
    type: "website",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SIBA Digital",
  url: "https://www.siba.digital/about",
  description:
    "SIBA Digital provides open-source intelligence and digital governance audits for BIDs, councils, and major developments.",
  about: {
    "@id": "https://www.siba.digital/#organization",
  },
  mainEntity: {
    "@type": "Person",
    name: "Damian Roche",
    jobTitle: "Founder",
    worksFor: {
      "@id": "https://www.siba.digital/#organization",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero */}
      <div className="relative w-full aspect-video flex items-end">
        <Image
          src="/images/about-hero.jpg"
          alt="SIBA Digital — built from a real investigation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        {/* Bottom fade to cream content */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f6f6ef]" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pb-[28%] pt-12">
          <h1
            className="text-white mb-5 leading-[1.12]"
            style={{
              fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.2rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Built from a real investigation.{" "}
            <span className="text-white/60">Now available commercially.</span>
          </h1>
          <p className="text-white/80 text-[17px] leading-relaxed max-w-xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
            SIBA began as an open-source investigation into BID governance
            in Southport. The methodology proved robust enough to attract
            institutional attention from central government, national media,
            and compliance professionals. It is now offered as a commercial
            audit service for organisations managing public money.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Founder */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Founder
            </p>
            <h2 className="text-[#112d6e] mb-5">Damian Roche</h2>
            <div className="space-y-4 text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl">
              <p>
                Ex-British Army, Queen&apos;s Guards. 20 years in web development
                and SEO, 15 years focused on organic search. Self-taught developer.
                Based in Southport, Merseyside.
              </p>
              <p>
                Damian built the SIBA investigation methodology from scratch:
                cross-referencing Companies House filings, mapping director
                networks, analysing procurement chains, and building structured
                FOI strategies under the Freedom of Information Act 2000. The
                same discipline and precision that characterised his military
                service is applied to every engagement.
              </p>
              <p>
                He also operates Churchtown Media Ltd, a commercial web
                development and SEO agency, and the Sefton Coast Network, a
                portfolio of independent editorial publishing properties.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 mt-8">
              <a
                href="https://www.churchtownmedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
              >
                Churchtown Media
                <ExternalLink size={11} />
              </a>
              <a
                href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
              >
                LinkedIn
                <ExternalLink size={11} />
              </a>
            </div>
          </section>
        </Reveal>

        {/* Origin */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Origin
            </p>
            <h2 className="text-[#112d6e] mb-5">
              How a local investigation became a national capability
            </h2>
            <div className="space-y-4 text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl">
              <p>
                In 2026, SIBA set out to answer a single question: where does
                the Southport BID levy money go? The research uncovered
                structural conflicts of interest, undisclosed media contracts,
                and a governance model that produced predictable outcomes
                regardless of who ran it.
              </p>
              <p>
                A single published analysis generated over 10,000 impressions
                on LinkedIn with no paid promotion. Over 55% of the audience
                held senior, director, or executive positions. Viewers included
                professionals from the House of Commons, MHCLG, Bristol City
                Council, Transport for London, Savills, AtkinsRéalis, and BBC
                journalists.
              </p>
              <p>
                The investigation survived a legal threat, prompted 15 FOI
                requests to Sefton Council, and produced six published analyses
                and reports, all sourced entirely from public documents.
              </p>
              <p className="font-medium text-[#1c1c1c]">
                That methodology is now available to any organisation that
                manages public money and wants to know what their corporate
                trail looks like before someone else maps it for them.
              </p>
            </div>

            <Link
              href="/overview"
              className="inline-flex items-center gap-1.5 mt-8 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
            >
              Read the full case study
              <ArrowRight size={13} />
            </Link>
          </section>
        </Reveal>

        {/* Timeline */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Timeline
            </p>
            <h2 className="text-[#112d6e] mb-10">How SIBA Was Built</h2>

            <div className="space-y-8">
              {[
                {
                  period: "Easter Sunday, April 2026",
                  text: "A single question. Where does the Southport BID levy money go? A BID business plan read on a phone. The first Companies House searches. The investigation begins.",
                },
                {
                  period: "The First Week",
                  text: "Six analyses and reports published. All sourced from public documents. A direct phone call received from a named hospitality group chairman demanding removal of content. The content remained published. 15 FOI requests submitted to Sefton Council through WhatDoTheyKnow.",
                },
                {
                  period: "The Outcome",
                  text: "LinkedIn analytics confirmed the investigation reached the House of Commons, MHCLG, Bristol City Council, North Yorkshire Council, Transport for London, Savills, and AtkinsRéalis. Over 10,000 impressions. No paid promotion. 55% senior, director, or executive level audience.",
                },
                {
                  period: "April 2026",
                  text: "SIBA Digital launched commercially. The Southport BID investigation became the founding case study for a national governance audit methodology. Digital governance audits and OSINT for BIDs, councils, and major developments across the UK.",
                },
                {
                  period: "May 2026",
                  text: "15 FOI requests on the public record. Responses due from Sefton Council. Every response will be published in full.",
                },
              ].map((entry) => (
                <div key={entry.period} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 border-[#112d6e] bg-white" />
                    <span className="w-px flex-1 bg-[#ddddd5]" />
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                      {entry.period}
                    </p>
                    <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                      {entry.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* What SIBA is not */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <h2 className="text-[#112d6e] mb-10">What SIBA is not</h2>
            <div className="space-y-8">
              {[
                {
                  label: "Not a campaign group",
                  detail: "SIBA documents structures from public records. It does not organise protests, petitions, or lobbying campaigns.",
                },
                {
                  label: "Not a law firm",
                  detail: "SIBA does not provide legal advice. Audit reports present findings and evidence chains for the commissioning organisation to act upon.",
                },
                {
                  label: "Not politically affiliated",
                  detail: "SIBA has no relationship with any political party, council, or funding body. Independence is non-negotiable.",
                },
                {
                  label: "Not speculative",
                  detail: "Every factual claim in a SIBA report is sourced from publicly available documents and linked directly. We do not allege. We document.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section>
            <h2 className="text-[#112d6e] mb-4">Commission an audit</h2>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-lg mb-8">
              Tell us about your organisation and what prompted your enquiry.
            </p>
            <Link
              href="/services#commission"
              className="text-sm text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
            >
              Get started
            </Link>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
