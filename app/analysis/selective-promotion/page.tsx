import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Who Does VisitSouthport.com Actually Promote? | SIBA",
  description:
    "An Ahrefs analysis of outbound links from Southport's publicly-funded tourism platform. Two hospitality businesses linked. Both connected to the same commercial group. Every other independent excluded.",
  alternates: {
    canonical: "https://www.siba.digital/analysis/selective-promotion",
  },
  openGraph: {
    title: "Who Does VisitSouthport.com Actually Promote?",
    description:
      "An independent analysis of outbound linking on Southport's publicly-funded tourism platform, sourced from Ahrefs data.",
    url: "https://www.siba.digital/analysis/selective-promotion",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Who Does VisitSouthport.com Actually Promote?",
  description:
    "An Ahrefs analysis of outbound links from Southport's publicly-funded tourism platform. Two hospitality businesses linked. Both connected to the same commercial group. Every other independent excluded.",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: {
    "@type": "Organization",
    "@id": "https://www.siba.digital/#organization",
    name: "Southport Independent Business Alliance",
    url: "https://www.siba.digital",
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
    "@id": "https://www.siba.digital/analysis/selective-promotion",
  },
};

const linkingData = [
  { domain: "thegrand.co.uk", links: 3, dofollow: 3, dr: 32, type: "Hospitality venue" },
  { domain: "southportmarket.com", links: 3, dofollow: 3, dr: 28, type: "Food and drink venue" },
  { domain: "theatkinson.co.uk", links: 7, dofollow: 7, dr: 56, type: "Arts and culture (council-run)" },
  { domain: "lawnmowerworld.co.uk", links: 2, dofollow: 2, dr: 42, type: "Local attraction" },
  { domain: "wwt.org.uk", links: 4, dofollow: 4, dr: 76, type: "Martin Mere (national charity)" },
];

const infrastructureData = [
  { domain: "sefton.gov.uk", links: 1071, type: "Sefton Council" },
  { domain: "simpleviewinc.com", links: 1071, type: "CMS provider" },
  { domain: "googletagmanager.com", links: 1112, type: "Analytics infrastructure" },
  { domain: "southport2026.com", links: 533, type: "The Open 2026 site" },
  { domain: "englandsgolfcoast.com", links: 552, type: "Tourism brand" },
];

const domainStats = [
  { label: "Domain Rating", value: "59" },
  { label: "Live Backlinks", value: "797" },
  { label: "Referring Domains", value: "225" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
      <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">{children}</h2>
    </div>
  );
}

export default function SelectivePromotionPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          <Link
            href="/analysis"
            className="inline-flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Analysis
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-orange">Data Analysis</span>
            <span className="text-xs text-[#94a3b8]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
            Who Does VisitSouthport.com Actually Promote?
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            An independent analysis of outbound linking on Southport&apos;s publicly-funded
            tourism platform, sourced from Ahrefs data. The findings are specific.
          </p>
        </div>
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-16 z-10 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-6 overflow-x-auto py-3 text-sm">
            {[
              { href: "#platform", label: "The Platform" },
              { href: "#data", label: "The Data" },
              { href: "#links", label: "Why Links Matter" },
              { href: "#pattern", label: "The Pattern" },
              { href: "#questions", label: "Questions" },
              { href: "#methodology", label: "Methodology" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 text-sm font-semibold text-[#94a3b8] hover:text-[#0f172a] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Domain overview stats */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-white">
          {domainStats.map((s) => (
            <div key={s.label} className="px-5 py-4 text-center">
              <p className="text-xl font-bold text-[#0f172a]">{s.value}</p>
              <p className="text-xs text-[#64748b] leading-tight mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* What VisitSouthport is */}
        <section id="platform" className="scroll-mt-32">
          <SectionHeading>What VisitSouthport.com is</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              VisitSouthport.com is a publicly-funded tourism promotion platform for
              Southport. It holds a Domain Rating of 59, built over years of council
              investment and institutional linking. Its stated purpose is to promote the
              town and its businesses to visitors.
            </p>
            <p>
              It is not a private commercial website. It exists to serve all businesses in
              the area. Outbound links from a DR 59 domain carry measurable commercial value
              for any business that receives one.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The data */}
        <section id="data" className="scroll-mt-32">
          <SectionHeading>What we found</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              We queried the Ahrefs API for all external domains that VisitSouthport.com
              links to. After separating infrastructure links (CMS, analytics, council
              domain) from editorial content links, the hospitality and tourism linking
              pattern is as follows.
            </p>
          </div>

          {/* Editorial links table */}
          <div className="mt-6 card overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                Editorial outbound links from VisitSouthport.com
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Domain</th>
                  <th className="text-center px-4 py-3 font-semibold text-[#0f172a]">Links</th>
                  <th className="text-center px-4 py-3 font-semibold text-[#0f172a]">DR</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f172a]">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {linkingData.map((row) => (
                  <tr key={row.domain} className="hover:bg-[#f8fafc] transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-[#475569]">{row.domain}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#0f172a]">{row.links}</td>
                    <td className="px-4 py-3 text-center text-[#94a3b8]">{row.dr}</td>
                    <td className="px-4 py-3 text-[#64748b]">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 card p-6 bg-[#fff7ed] border-[#fed7aa]">
            <p className="text-sm font-semibold text-[#0f172a] mb-2">The key finding</p>
            <p className="text-sm text-[#475569] leading-relaxed">
              VisitSouthport.com links to two hospitality-related businesses. Both are
              connected to the same commercial group. No other independent restaurant, hotel,
              or pub in Southport receives a single outbound link from this publicly-funded
              platform. Not one.
            </p>
          </div>

          {/* Infrastructure links for transparency */}
          <details className="mt-6 card overflow-hidden">
            <summary className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0] text-sm font-semibold text-[#0f172a] cursor-pointer hover:bg-[#f1f5f9] transition-colors">
              Infrastructure links (excluded from analysis)
            </summary>
            <div className="divide-y divide-[#e2e8f0]">
              {infrastructureData.map((row) => (
                <div key={row.domain} className="flex items-center justify-between px-5 py-3 text-sm">
                  <span className="font-mono text-xs text-[#94a3b8]">{row.domain}</span>
                  <span className="text-[#94a3b8]">{row.type}</span>
                </div>
              ))}
            </div>
          </details>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Why outbound links matter */}
        <section id="links" className="scroll-mt-32">
          <SectionHeading>Why outbound links from this platform matter</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              An outbound dofollow link from a Domain Rating 59 website is a tangible
              commercial asset. It passes authority to the receiving domain, influences its
              search rankings, and drives referral traffic. This is not theoretical. It is
              how search engines work.
            </p>
            <p>
              A business that receives an outbound link from VisitSouthport gains a
              measurable advantage over competitors that do not. When that link comes from
              a publicly-funded platform, the question of who receives that advantage and
              who is excluded becomes a governance question.
            </p>
            <p>
              Every business in Southport&apos;s hospitality sector contributes to the local
              economy. A publicly-funded tourism platform exists to promote all of them. When
              it promotes only two, and both are connected to the same commercial interest,
              the remaining businesses are not just excluded. They are actively disadvantaged
              relative to the businesses the platform selects.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The pattern */}
        <section id="pattern" className="scroll-mt-32">
          <SectionHeading>Who benefits, who pays</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <div className="card p-5 bg-[#f8fafc] border-[#e2e8f0] mb-2">
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                The following describes a structural pattern identified from publicly
                available data. It is not an allegation of deliberate impropriety by any
                individual.
              </p>
            </div>
            <p>
              The hospitality group whose venues are the sole hospitality beneficiaries of
              VisitSouthport&apos;s outbound links has a Commercial Director who sits on the
              Southport BID board. That individual participates in governance decisions
              affecting the promotion infrastructure of the town.
            </p>
            <p>
              Competitors of that group operate in the same town, serve the same visitors,
              and in many cases pay the same compulsory BID levy. Those competitors receive
              zero outbound links from VisitSouthport.
            </p>
            <p>
              The competitor pays. The platform promotes somebody else. The competitor has no
              mechanism to challenge the decision or request inclusion. The selection criteria,
              if any exist, are not published.
            </p>
            <p>
              This is the structural pattern described in SIBA&apos;s analysis of{" "}
              <Link href="/analysis/bid-cronyism-by-design" className="text-[#f97316] hover:underline font-medium">
                how BIDs breed cronyism by design
              </Link>
              , operating in practice on a specific, publicly-funded platform with independently
              verifiable data.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Questions */}
        <section id="questions" className="scroll-mt-32">
          <SectionHeading>Questions for the record</SectionHeading>
          <div className="space-y-3">
            {[
              "Who has editorial control over which businesses receive outbound links from VisitSouthport.com?",
              "What criteria determine which hospitality businesses are linked and which are excluded?",
              "Is there a declared conflict of interest relating to any person with editorial control over VisitSouthport and the businesses it promotes?",
              "Has Sefton Council conducted any review of the content or linking decisions on a platform it funds?",
              "Have any independent hospitality businesses requested inclusion on VisitSouthport and been refused or ignored?",
            ].map((q) => (
              <div key={q} className="card p-4 flex gap-3">
                <span className="flex-shrink-0 mt-0.5 h-2 w-2 rounded-full bg-[#f97316]" />
                <p className="text-sm text-[#475569] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#64748b] leading-relaxed">
            SIBA has submitted these questions to Sefton Council. We will publish any
            response in full.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Methodology */}
        <section id="methodology" className="scroll-mt-32">
          <SectionHeading>Methodology</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              All data in this analysis was sourced from the{" "}
              <a
                href="https://ahrefs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
              >
                Ahrefs
                <ExternalLink size={11} />
              </a>{" "}
              API on 7 April 2026, using the following endpoints:
            </p>
            <div className="card p-5 bg-[#f8fafc] font-mono text-xs text-[#64748b] space-y-2">
              <p>GET /v3/site-explorer/outlinks-stats</p>
              <p>GET /v3/site-explorer/linkeddomains (mode=subdomains)</p>
              <p>GET /v3/site-explorer/domain-rating</p>
              <p>GET /v3/site-explorer/backlinks-stats</p>
              <p>GET /v3/site-explorer/metrics</p>
            </div>
            <p>
              Ahrefs is an independent third-party SEO analytics platform used by over
              500,000 professionals worldwide. The data is independently verifiable by any
              party with an Ahrefs subscription.
            </p>
            <p>
              SIBA welcomes corrections from VisitSouthport, Sefton Council, or any party
              referenced in this analysis and will publish responses in full.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* CTA */}
        <div className="text-center py-4">
          <p className="text-[#64748b] mb-6 leading-relaxed max-w-xl mx-auto">
            This analysis provides the empirical evidence for the structural argument
            made in our companion piece on BID cronyism by design. Read both.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/analysis/bid-cronyism-by-design"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm"
            >
              Read: Cronyism by Design
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-colors"
            >
              View All Reports
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
