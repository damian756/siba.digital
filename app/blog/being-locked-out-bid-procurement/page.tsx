import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title:
    "Being Locked Out: How BID and Council Procurement Affects the Businesses Paying for It | SIBA",
  description:
    "The levy is compulsory. The events are not neutral. A structural analysis of how BID procurement decisions, event commissioning, and supply chain exclusion concentrate commercial advantage in the hands of those closest to the board.",
  alternates: {
    canonical:
      "https://www.siba.digital/blog/being-locked-out-bid-procurement",
  },
  openGraph: {
    title:
      "Being Locked Out: How BID and Council Procurement Affects the Businesses Paying for It",
    description:
      "Every levy payer funds the events. Every supply chain contractor competes for the work. But BID procurement decisions follow relationships, not open tender. A structural analysis.",
    url: "https://www.siba.digital/blog/being-locked-out-bid-procurement",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Being Locked Out: How BID and Council Procurement Affects the Businesses Paying for It",
  description:
    "The levy is compulsory. The events are not neutral. A structural analysis of how BID procurement decisions concentrate commercial advantage through events commissioning and supply chain exclusion.",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: {
    "@type": "Person",
    "@id": "https://www.siba.digital/about#founder",
    name: "Damian Roche",
    url: "https://www.siba.digital/about",
    jobTitle: "Founder",
    sameAs: [
      "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
      "https://find-and-update.company-information.service.gov.uk/company/16960442",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": "https://www.siba.digital/#organization",
      name: "SIBA Digital",
      url: "https://www.siba.digital",
    },
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.siba.digital/#organization",
    name: "SIBA Digital",
    logo: {
      "@type": "ImageObject",
      url: "https://www.siba.digital/icon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.siba.digital/blog/being-locked-out-bid-procurement",
  },
};

const industries = [
  {
    name: "Hospitality and Food & Drink",
    score: 9.5,
    annotation:
      "Events bring footfall. Footfall converts to covers. Tourism platform placement determines which venues visitors find first.",
  },
  {
    name: "Media and PR",
    score: 8.5,
    annotation:
      "BID media contracts concentrate editorial coverage. Connected venues receive compounding promotional advantage.",
  },
  {
    name: "Events and Entertainment",
    score: 8.0,
    annotation:
      "Event delivery contracts follow existing relationships. Independent organisers are excluded from levy-funded work.",
  },
  {
    name: "Creative and Digital",
    score: 7.0,
    annotation:
      "Photography, video, web development and design contracts are awarded without visible tender. The most invisible exclusion.",
  },
  {
    name: "Retail",
    score: 7.0,
    annotation:
      "Event location decisions determine which streets receive visitor traffic. A shop on the route benefits. One outside it does not.",
  },
  {
    name: "Accommodation",
    score: 6.0,
    annotation:
      "Tourism platform promotion determines which accommodation visitors find. Independent guest houses compete for already-directed traffic.",
  },
  {
    name: "Professional Services",
    score: 5.0,
    annotation:
      "Less affected by footfall but exposed to BID business support contracts, legal, accounting, and marketing procurement.",
  },
];

const maxScore = 10;

export default function ProcurementLockedOutPost() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] border border-[#ddddd5] px-2 py-0.5">
            Structural Analysis
          </span>
          <span className="text-xs text-[#a0a0a0]">April 2026</span>
        </div>

        <h1 className="mb-6">
          Being Locked Out: How BID and Council Procurement Affects the
          Businesses Paying for It
        </h1>

        <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12">
          The levy is compulsory. The events are not neutral. Every business
          in a BID area pays. What they receive in return depends entirely
          on procurement decisions made by a board whose members have
          commercial interests in the outcomes. And the businesses excluded
          from those decisions extend far beyond the levy area itself.
        </p>

        <div className="prose-siba space-y-6 text-[15px] text-[#3d3d3d] leading-relaxed">

          {/* Section 1: Events as the primary procurement vehicle */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Events as the primary procurement vehicle
          </h2>
          <p>
            The BID&apos;s largest budget line is almost always events and
            place marketing. In any typical BID business plan, the marketing
            and events category dominates the spend. This is where the levy
            money goes in the most visible and commercially significant way.
          </p>
          <p>
            Events do several things simultaneously. They generate footfall.
            They determine which areas of the town centre receive that footfall.
            They decide which venues benefit from associated dwell time and
            spend. They shape the media coverage of the town. They create the
            promotional narrative that the BID&apos;s contracted media partners
            amplify.
          </p>
          <p>
            Every one of those outcomes has a commercial value. And every one
            of those outcomes is determined by procurement decisions made by
            a board whose members have commercial interests in the town centre
            those events serve.
          </p>

          {/* Section 2: How events procurement creates competitive advantage */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            How events procurement creates competitive advantage
          </h2>
          <p>
            When a BID commissions a street food festival it chooses which
            traders participate. When it organises an awards ceremony it
            determines the categories and the judging process. When it funds
            a seasonal promotional campaign it selects which venues and
            experiences are featured.
          </p>
          <p>
            None of these decisions are neutral. Each one advantages some
            businesses over others. A venue on the event route benefits more
            than one a street away. A trader accepted into a BID market
            benefits more than one that was not approached. A business featured
            in the BID&apos;s promotional photography receives organic reach
            that its competitors do not.
          </p>
          <p>
            The question governance exists to answer is whether these decisions
            are made on merit, on geographic fairness, on commercial logic. Or
            whether they follow the lines of existing relationships between
            board members and operators they know.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            The governance framework requires board members to declare conflicts
            of interest and recuse themselves from relevant decisions. In
            practice, the enforcement of this requirement depends entirely on
            the rigour of the BID&apos;s own internal governance. There is no
            external auditor checking declarations. There is no independent
            scrutiny of procurement decisions unless a levy payer formally
            challenges them. Most levy payers do not challenge them. They do
            not have the time, the legal knowledge, or the access to the
            BID&apos;s internal records that would be required to identify a
            problem in the first place.
          </p>

          {/* Section 3: The council procurement dimension */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The council procurement dimension
          </h2>
          <p>
            The problem compounds when the council is simultaneously the ballot
            administrator, a levy payer, and has a formally appointed
            representative on the BID board.
          </p>
          <p>
            Council procurement decisions about town centre events, tourism
            platform management and business support programmes interact
            directly with BID spending. When the same officer manages both
            the council&apos;s tourism platform and sits on the BID board,
            the boundary between council procurement and BID procurement
            becomes unclear.
          </p>
          <p>
            A business seeking to supply either the council or the BID faces a
            procurement landscape where the relationships between decision
            makers are not always transparent. A new business entering the
            market has no visibility of the corporate relationships that shape
            procurement outcomes. An existing business that has not cultivated
            the right relationships may find itself consistently outside the
            decision loop regardless of the quality or price of its offering.
          </p>

          {/* Section 4: Supply chain exclusion */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The supply chain nobody talks about
          </h2>
          <p>
            The businesses most visibly affected by BID procurement are levy
            payers inside the area. But the affected population is
            significantly larger than that.
          </p>
          <p>
            When a BID commissions an event, the money flows outward through
            a procurement chain. Event management companies. Security
            contractors. Stage and lighting suppliers. Sound equipment hire.
            Food and drink suppliers. Photographers. Web designers building
            the event pages. Social media managers. Print and signage
            companies. Cleaning contractors.
          </p>
          <p>
            None of those suppliers necessarily sit inside the BID levy area.
            None of them necessarily pay the levy. But all of them depend on
            whether the BID&apos;s procurement decisions are transparent and
            competitive, or whether they follow existing relationships.
          </p>
          <p>
            If the event management contract goes to a connected supplier
            without open tender, an independent local event company never gets
            the opportunity. If the catering contract follows an existing
            relationship, a local food supplier never gets a call. If the web
            and digital work goes to a preferred agency, a local web designer
            never gets asked to quote.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            The levy payers fund all of that. The supply chain benefits from
            or is excluded from all of that. And the procurement decisions
            that determine who gets what happen inside a governance structure
            with no external scrutiny. The affected population is not just
            businesses on the high street. It is every supplier in the
            regional economy who could legitimately compete for
            BID-commissioned work but has no visibility of how those decisions
            are made, or who makes them.
          </p>

          {/* Section 5: Industries most exposed — chart */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The industries most exposed
          </h2>
          <p>
            Based on the structural analysis of how BID procurement and events
            commissioning typically operates, the industries most exposed are
            those where BID spending decisions have the most direct commercial
            impact on competitive dynamics, both inside the levy area and
            across the supply chain.
          </p>

          {/* Chart */}
          <div className="mt-8 mb-4 border border-[#ddddd5] rounded-lg p-6 sm:p-8 bg-[#fafaf5]">
            <h3 className="text-sm font-bold text-[#1c1c1c] mb-6">
              Industries Most Exposed to BID Procurement Opacity
            </h3>
            <div className="space-y-5">
              {industries.map((industry) => (
                <div key={industry.name}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[13px] font-medium text-[#1c1c1c]">
                      {industry.name}
                    </span>
                    <span className="text-[13px] font-bold text-[#112d6e] ml-3 flex-shrink-0">
                      {industry.score}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-[#eeeee8] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(industry.score / maxScore) * 100}%`,
                        background:
                          industry.score >= 8
                            ? "#112d6e"
                            : industry.score >= 7
                              ? "#2c4a52"
                              : "#6b8f71",
                      }}
                    />
                  </div>
                  <p className="text-[12px] text-[#6b6b6b] mt-1 leading-snug">
                    {industry.annotation}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#a0a0a0] mt-6">
              Based on structural analysis of BID procurement frameworks,
              events commissioning patterns, and supply chain dependency
              mapping. No named organisations. Exposure score reflects
              directness of commercial impact from BID spending decisions.
            </p>
          </div>

          {/* Section 6: What new businesses face */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            What new businesses face
          </h2>
          <p>
            A new business entering a BID area faces an established ecosystem.
            The events calendar is set. The media partnerships are contracted.
            The tourism platform has its featured operators. The board
            relationships are formed.
          </p>
          <p>
            Without a route into those relationships, the new business pays
            the levy, contributes to the events that benefit established
            operators, and competes for footfall that the promotional
            infrastructure is not designed to direct toward it.
          </p>
          <p>
            The same dynamic applies to the supply chain. A new event
            management company, a new AV supplier, a new web agency moving
            into the region faces a procurement landscape where the contracts
            follow existing relationships and the tender process, if one
            exists at all, is not publicly visible.
          </p>
          <p>
            This is not unique to any individual BID. It is the predictable
            outcome of a governance structure that does not require transparent
            procurement, published contractor decisions, or open competition
            for BID-funded opportunities.
          </p>

          {/* Section 7: What good governance looks like */}
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            What good governance looks like
          </h2>
          <p>
            A well-governed BID publishes its procurement decisions. It
            maintains a clear register of board member interests that is
            updated in real time. It offers right of reply to any business
            that believes it has been unfairly excluded from a contracting
            opportunity. It separates the board members who declare an
            interest from the decisions those members participate in.
          </p>
          <p>
            These are not extraordinary requirements. They are the baseline
            governance standards that any organisation managing public or
            compulsory money should meet.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            When they are not met, the levy becomes something other than a
            collective investment in shared town centre success. It becomes
            a mechanism for concentrating commercial advantage in the hands
            of those with the best access to the people who make the
            decisions. The businesses paying for the system are subsidising
            outcomes they cannot influence and may never benefit from.
          </p>

          <div className="border-t border-[#ddddd5] my-12" />

          <p className="text-xs text-[#a0a0a0] leading-relaxed">
            Sources: Public Contracts Regulations 2015; Business Improvement
            Districts (England) Regulations 2004; Companies Act 2006; National
            Audit Office guidance on public money accountability; CIPFA
            Financial Management Code. This analysis names no individual or
            organisation and makes no allegation of wrongdoing. The industry
            exposure assessment is based on structural analysis of BID
            procurement frameworks and is applicable to any BID operating
            under the current legislative model.
          </p>
        </div>

        <AuthorBio />

        <div className="mt-14 pt-8 border-t border-[#ddddd5] flex items-center justify-between">
          <Link
            href="/blog/how-procurement-opacity-compounds"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors"
          >
            <ArrowLeft size={14} />
            Previous
          </Link>
          <Link
            href="/blog/the-bid-model-twenty-year-policy-failure"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
          >
            Next: The Twenty-Year Policy Failure
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
