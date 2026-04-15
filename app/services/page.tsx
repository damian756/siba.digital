import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CommissionForm from "@/components/CommissionForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services: BID Governance Audits, OSINT and FOI Strategy",
  description:
    "Digital governance audits and OSINT for Business Improvement Districts, councils, Town Deals and major developments. Four tiers from surface-level health checks to full forensic transparency audits and digital security assessments. Public money accountability.",
  alternates: {
    canonical: "https://www.siba.digital/services",
  },
  openGraph: {
    title: "Services | SIBA Digital",
    description:
      "Digital governance audits, OSINT, FOI strategy and digital security assessments for public bodies and major developments across the UK.",
    url: "https://www.siba.digital/services",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@id": "https://www.siba.digital/#organization",
  },
  name: "Digital Governance Audits",
  description:
    "OSINT-based governance audits for Business Improvement Districts, local authorities, and major developments managing public money.",
  url: "https://www.siba.digital/services",
  areaServed: {
    "@type": "Place",
    name: "United Kingdom",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Audit Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Digital Governance Health Check",
        description:
          "Surface-level governance assessment and conflict of interest review. 5 working days.",
        price: "1500",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Deep Transparency Audit",
        description:
          "Full forensic mapping of corporate ecosystem, procurement chains, and media contracts. 2-3 weeks.",
        price: "4500",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Ongoing Monitoring",
        description:
          "Quarterly governance monitoring with change detection and flagged alerts.",
        price: "750",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Digital Security Assessment",
        description:
          "External attack surface review, network exposure analysis, and data protection posture assessment.",
        price: "2000",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Governance Disclosure Review",
        description:
          "Review of public-facing governance documentation, digital footprint audit, and remediation roadmap. Identifies what a third-party OSINT reviewer would find and what needs to change.",
        price: "2500",
        priceCurrency: "GBP",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <Reveal>
          <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-6 leading-[1.15]">
            Digital Governance Audits
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-[17px] text-[#3d3d3d] leading-relaxed max-w-xl mb-20">
            You will know what your corporate trail looks like before someone
            else maps it for you. Structured analysis from public records,
            scoped to your organisation, delivered confidentially.
          </p>
        </Reveal>

        {/* Tier 1 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 1
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Digital Governance Health Check
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <p className="text-sm text-[#6b6b6b]">Turnaround: 5 working days</p>
              <p className="text-sm font-medium text-[#1c1c1c]">From £1,500</p>
            </div>

            <p className="text-[15px] text-[#1c1c1c] font-medium leading-relaxed mb-4">
              You will know whether your board has undisclosed conflicts of
              interest before a journalist, FOI request, or renewal ballot
              reveals them.
            </p>

            <ul className="space-y-2 text-[15px] text-[#3d3d3d] leading-relaxed mb-5">
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Board of directors cross-referenced against Companies House
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Basic conflict of interest flag report
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Surface-level OSINT scan of corporate network
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Digital footprint review of public-facing platforms
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Summary report with risk flags and recommendations
              </li>
            </ul>

            <p className="text-[13px] text-[#a0a0a0]">
              Deliverable: PDF report via encrypted email.
            </p>
          </section>
        </Reveal>

        {/* Tier 2 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 2
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Deep Transparency Audit
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <p className="text-sm text-[#6b6b6b]">Turnaround: 2 to 3 weeks</p>
              <p className="text-sm font-medium text-[#1c1c1c]">From £4,500</p>
            </div>

            <p className="text-[15px] text-[#1c1c1c] font-medium leading-relaxed mb-4">
              You will have a complete map of every corporate relationship,
              procurement chain, and media contract connected to your
              governance structure. The same depth applied to the Southport
              BID investigation.
            </p>

            <ul className="space-y-2 text-[15px] text-[#3d3d3d] leading-relaxed mb-5">
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Full forensic mapping of director network and corporate ecosystem
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Procurement history and contractor relationship analysis
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Media and PR contract disclosure review
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Related-party transaction mapping from public filings
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Budget flow analysis sourced from published documents
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Comprehensive report with structural findings and evidence chain
              </li>
            </ul>

            <p className="text-[13px] text-[#a0a0a0]">
              Deliverable: Full report with evidence appendix via encrypted transfer.
            </p>
          </section>
        </Reveal>

        {/* Tier 3 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 3
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Ongoing Monitoring
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <p className="text-sm text-[#6b6b6b]">Quarterly reports</p>
              <p className="text-sm font-medium text-[#1c1c1c]">From £750/quarter</p>
            </div>

            <p className="text-[15px] text-[#1c1c1c] font-medium leading-relaxed mb-4">
              You will know the moment anything in your governance structure
              changes. New appointments, new filings, new procurement patterns.
              Before anyone else notices.
            </p>

            <ul className="space-y-2 text-[15px] text-[#3d3d3d] leading-relaxed mb-5">
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Quarterly review of board changes and new director appointments
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Companies House filing monitoring for target entities
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Contractor and procurement change detection
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Digital footprint shift analysis
              </li>
            </ul>

            <p className="text-[13px] text-[#a0a0a0]">
              Requires completed Tier 2 audit as baseline. Deliverable: Quarterly PDF update.
            </p>
          </section>
        </Reveal>

        {/* Tier 4 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 4
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Digital Security Assessment
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <p className="text-sm text-[#6b6b6b]">Turnaround: 5 to 10 working days</p>
              <p className="text-sm font-medium text-[#1c1c1c]">From £2,000</p>
            </div>

            <p className="text-[15px] text-[#1c1c1c] font-medium leading-relaxed mb-4">
              You will know what your organisation looks like to someone trying
              to get inside it. External attack surface, network exposure, and
              data protection posture reviewed before a vulnerability becomes
              an incident.
            </p>

            <ul className="space-y-2 text-[15px] text-[#3d3d3d] leading-relaxed mb-5">
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                External digital attack surface review
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Network exposure and port vulnerability analysis
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Data protection posture assessment
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Public data leakage and credential exposure check
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Prioritised remediation report
              </li>
            </ul>

            <p className="text-[13px] text-[#a0a0a0]">
              Delivered standalone or alongside a governance audit. Deliverable: PDF report via encrypted email.
            </p>
          </section>
        </Reveal>

        {/* Tier 5 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 5
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Governance Disclosure Review
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <p className="text-sm text-[#6b6b6b]">Turnaround: 5 to 10 working days</p>
              <p className="text-sm font-medium text-[#1c1c1c]">From £2,500</p>
            </div>

            <p className="text-[15px] text-[#1c1c1c] font-medium leading-relaxed mb-4">
              You will know what your governance record looks like to an informed
              external reviewer, and exactly what needs to change before they
              look. Designed for organisations that have completed a Tier 2 audit
              or identified their own exposure.
            </p>

            <ul className="space-y-2 text-[15px] text-[#3d3d3d] leading-relaxed mb-5">
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Review of all public-facing governance documentation: Companies House filings, BID website, published accounts, board minutes
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Identification of gaps, inaccuracies, and undisclosed interests in public records
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Register of interests compliance check against published declarations
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Digital footprint audit: what a third-party OSINT reviewer would find and flag
              </li>
              <li className="flex gap-2">
                <span className="text-[#a0a0a0] flex-shrink-0 mt-0.5">—</span>
                Remediation roadmap: specific steps to bring your public record into line with how you actually operate
              </li>
            </ul>

            <p className="text-[13px] text-[#a0a0a0]">
              Deliverable: Remediation report with prioritised action list, delivered via encrypted transfer. Can be commissioned standalone or following a Tier 2 audit.
            </p>
          </section>
        </Reveal>

        {/* Case study proof point */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <div className="border-l-2 border-[#112d6e] pl-6 py-1">
              <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
                Proof of concept
              </p>
              <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-4">
                  This methodology is not theoretical. It was applied in full to
                  the Southport BID investigation: 3 published reports, 15 FOI
                  requests. Every finding sourced from public
                documents. The investigation reached the House of Commons,
                MHCLG, and national media with over 10,000 LinkedIn
                impressions and no paid promotion.
              </p>
              <Link
                href="/overview"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                Read the founding case study
                <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Who commissions this */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <h2 className="text-[#112d6e] mb-10">When to commission an audit</h2>

            <div className="space-y-6">
              {[
                {
                  trigger: "Your BID is approaching renewal",
                  detail:
                    "You need your governance structure to be defensible before the ballot. Any undisclosed conflict of interest discovered during a renewal campaign becomes a reason to vote no.",
                },
                {
                  trigger: "Your organisation has received an FOI request",
                  detail:
                    "Someone is already looking. You need to know what they will find before they find it. A governance health check identifies exposure points in days.",
                },
                {
                  trigger: "Your Town Deal board is under scrutiny",
                  detail:
                    "Town Deal and Levelling Up boards manage significant public funds with governance structures that are rarely tested until a complaint surfaces. A deep audit maps the corporate relationships before a headline does.",
                },
                {
                  trigger: "You are bidding on a public contract",
                  detail:
                    "Counter-party due diligence is standard in private transactions. It should be standard when public money is involved. Know your own corporate exposure before a procurement officer or journalist maps it for you.",
                },
                {
                  trigger: "You have appointed new board members",
                  detail:
                    "A new appointment changes the corporate network. A baseline governance check ensures no undisclosed conflicts have been introduced.",
                },
                {
                  trigger: "You want continuous assurance",
                  detail:
                    "Governance structures change. Directors are appointed and terminated. Procurement relationships shift. Ongoing monitoring means you know about changes before they become problems.",
                },
                {
                  trigger: "You have received an audit finding and need to act on it",
                  detail:
                    "Knowing you have a governance problem and fixing what the public record shows are two different things. A Governance Disclosure Review maps your exposure precisely and tells you what to correct, update, or formally declare.",
                },
              ].map((item) => (
                <div key={item.trigger}>
                  <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                    {item.trigger}
                  </p>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Methodology */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <h2 className="text-[#112d6e] mb-10">How we work</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                  Public records only
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  All research is conducted under existing public access rights.
                  Companies House, Land Registry, Charity Commission, published
                  accounts, FOI responses, and observable digital footprints. No
                  hacking. No social engineering. No covert methods.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                  Evidence standard
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Every finding in a SIBA report is linked to its source
                  document. If we cannot source a claim from a publicly
                  available record, we do not include it. Nothing is assumed.
                  Everything is verifiable.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                  Adversarial review
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Reports are reviewed for factual accuracy and legal risk
                  before delivery. Findings must survive challenge. If a
                  finding would not stand up to scrutiny from the subject of
                  the report, it does not go in.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                  Right of reply
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  In published investigations, any party named is offered the
                  opportunity to respond. Responses are published in full. For
                  confidential commercial audits, the commissioning organisation
                  receives the findings and decides how to act, including
                  whether and when to offer right of reply to named parties.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">
                  Confidential delivery
                </p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Unlike the published case study, commercial audit reports are
                  delivered privately to the commissioning organisation. You
                  receive the findings. You decide how to act on them.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Commission form */}
        <Reveal>
          <section id="commission" className="scroll-mt-24">
            <h2 className="text-[#112d6e] mb-2">Commission an Audit</h2>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-10 max-w-lg">
              Tell us about your organisation and what prompted your enquiry.
              We respond to every submission within one working day.
            </p>
            <CommissionForm />

            <div className="mt-10 pt-8 border-t border-[#ddddd5]">
              <p className="text-[14px] text-[#6b6b6b] mb-3">
                Not ready to commission?
              </p>
              <div className="flex flex-wrap gap-5">
                <Link
                  href="/overview"
                  className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                >
                  Read the case study first
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                >
                  Read the blog
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
