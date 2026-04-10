import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About SIBA Digital",
  description:
    "SIBA Digital provides open-source intelligence and digital governance audits for BIDs, councils, and major developments. Founded by Damian Roche, a 20-year web and SEO professional.",
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

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <h1 className="text-3xl text-[#1c1c1c] mb-6">
          Built from a real investigation.{" "}
          <span className="text-[#6b6b6b]">Now available commercially.</span>
        </h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed max-w-xl mb-16">
          SIBA began as a 12-month open-source investigation into BID
          governance in Southport. The methodology proved robust enough to
          attract institutional attention from central government, national
          media, and compliance professionals. It is now offered as a
          commercial audit service for organisations managing public money.
        </p>

        {/* Founder */}
        <section className="pb-12 mb-12 border-b border-[#e8e8e4]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-4">
            Founder
          </p>
          <h2 className="text-xl text-[#1c1c1c] mb-5">Damian Roche</h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed max-w-xl">
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

          <div className="flex flex-wrap gap-5 mt-6">
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

        {/* Origin */}
        <section className="pb-12 mb-12 border-b border-[#e8e8e4]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-4">
            Origin
          </p>
          <h2 className="text-xl text-[#1c1c1c] mb-5">
            How a local investigation became a national capability
          </h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed max-w-xl">
            <p>
              In 2025, SIBA set out to answer a single question: where does
              the Southport BID levy money go? The research uncovered
              structural conflicts of interest, undisclosed media contracts,
              and a governance model that produced predictable outcomes
              regardless of who ran it.
            </p>
            <p>
              The published findings generated over 7,300 impressions on
              LinkedIn. The readership included government administrators,
              compliance professionals, real estate executives, construction
              firms, BBC journalists, and representatives from the Ministry
              of Housing, Communities and Local Government.
            </p>
            <p>
              The investigation survived a legal threat, prompted 15 FOI
              requests to Sefton Council, and produced six published analyses
              and reports, all sourced entirely from public documents.
            </p>
            <p className="font-semibold text-[#1c1c1c]">
              That methodology is now available to any organisation that
              manages public money and wants to know what their corporate
              trail looks like before someone else maps it for them.
            </p>
          </div>

          <Link
            href="/analysis"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors"
          >
            Read the full case study
            <ArrowRight size={13} />
          </Link>
        </section>

        {/* What SIBA is not */}
        <section className="pb-12 mb-12 border-b border-[#e8e8e4]">
          <h2 className="text-xl text-[#1c1c1c] mb-8">What SIBA is not</h2>
          <div className="space-y-6">
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
                <p className="text-sm font-semibold text-[#1c1c1c] mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm text-[#3d3d3d] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-xl text-[#1c1c1c] mb-4">Commission an audit</h2>
          <p className="text-sm text-[#3d3d3d] leading-relaxed max-w-lg mb-6">
            Tell us about your organisation and what prompted your enquiry.
          </p>
          <Link
            href="/services#commission"
            className="text-sm font-medium text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
          >
            Get started
          </Link>
        </section>
      </div>
    </div>
  );
}
