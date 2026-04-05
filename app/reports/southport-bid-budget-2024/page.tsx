import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Where does Southport BID spend your levy? | SIBA Reports",
  description:
    "A line-by-line breakdown of Southport BID's 2024-2029 Business Plan budget. £448,211 collected in year one. All figures sourced from the BID's own published documents.",
  alternates: {
    canonical: "https://www.siba.digital/reports/southport-bid-budget-2024",
  },
  openGraph: {
    title: "Where does Southport BID spend your levy?",
    description:
      "A line-by-line breakdown of the BID's 2024-2029 Business Plan. £448,211 collected in year one. All figures from publicly available documents.",
    url: "https://www.siba.digital/reports/southport-bid-budget-2024",
    type: "article",
  },
};

const BID_PDF = "https://southportbid.com/wp-content/uploads/2024/05/Southport-BID-Business-Plan-2024-2029.pdf";

const budgetRows = [
  { category: "Promotion", amount: "£150,000", pct: "33%", note: "YourSouthport platform and associated marketing" },
  { category: "Activation", amount: "£100,000", pct: "22%", note: "Christmas lights, floral displays, public events" },
  { category: "Celebration", amount: "£75,000", pct: "17%", note: "Your Southport Stars Awards and recognition" },
  { category: "Collaboration", amount: "£20,000", pct: "4%", note: "Lobbying, business representation, stakeholder engagement" },
  { category: "Operating costs", amount: "£110,000", pct: "23%", note: "Running the organisation — staff, admin, overheads", highlight: true },
];

const levyProjections = [
  { year: "Year 1 (2024/25)", income: "£448,211", increase: "Baseline" },
  { year: "Year 2 (2025/26)", income: "£461,657", increase: "+3%" },
  { year: "Year 3 (2026/27)", income: "£475,507", increase: "+3%" },
  { year: "Year 4 (2027/28)", income: "£489,772", increase: "+3%" },
  { year: "Year 5 (2028/29)", income: "£504,465", increase: "+3%" },
  { year: "5-year total", income: "£2,379,613", increase: "", bold: true },
];

function Source({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-[#94a3b8] mt-3 italic">{children}</p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
      <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">{children}</h2>
    </div>
  );
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Where does Southport BID spend your levy?",
  description:
    "A line-by-line breakdown of Southport BID's 2024-2029 Business Plan budget. £448,211 collected in year one. All figures sourced from the BID's own published documents.",
  datePublished: "2026-04-05",
  dateModified: "2026-04-05",
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
    "@id": "https://www.siba.digital/reports/southport-bid-budget-2024",
  },
  isBasedOn: {
    "@type": "PublicationIssue",
    name: "Southport BID Business Plan 2024-2029",
    url: "https://southportbid.com/wp-content/uploads/2024/05/Southport-BID-Business-Plan-2024-2029.pdf",
  },
};

export default function BidBudgetReportPage() {
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
            href="/reports"
            className="inline-flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Reports
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-orange">Budget Transparency</span>
            <span className="text-xs text-[#94a3b8]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
            Where does Southport BID spend your levy?
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            A line-by-line breakdown of the 2024-2029 Business Plan budget. All figures
            are taken directly from Southport BID&apos;s own publicly available documents.
          </p>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2.5 items-start">
            <AlertTriangle size={14} className="text-[#94a3b8] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Every factual claim in this report is sourced from publicly available documents,
              linked directly below. SIBA welcomes corrections or responses from Southport BID
              and will publish them in full at{" "}
              <a href="mailto:office@siba.digital" className="underline hover:text-[#64748b]">
                office@siba.digital
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-16 z-10 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {[
              { href: "#levy", label: "The levy" },
              { href: "#budget", label: "The budget" },
              { href: "#operating", label: "Operating costs" },
              { href: "#yoursouthport", label: "YourSouthport" },
              { href: "#transparency", label: "Transparency" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 px-3 py-2 rounded-md text-sm font-semibold text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Feature graphic */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
          <Image
            src="/images/bid-transparency-chart.svg"
            alt="Southport BID budget breakdown: where does the levy go?"
            width={680}
            height={740}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>
        <Source>
          Data source: Southport BID Business Plan 2024-2029.{" "}
          <a
            href={BID_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
          >
            View the original PDF
            <ExternalLink size={11} />
          </a>
        </Source>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Intro */}
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>
            If your business is on Lord Street, Chapel Street, Market Street, or any of the
            other streets in Southport&apos;s town centre, there is a good chance you are paying
            the BID levy right now. It is not optional. You cannot opt out. And it increases
            automatically every year.
          </p>
          <p>
            The figures below are taken directly from Southport BID&apos;s own published Business
            Plan for 2024 to 2029,{" "}
            <a
              href={BID_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
            >
              publicly available at southportbid.com
              <ExternalLink size={11} />
            </a>
            . SIBA has not adjusted, estimated, or interpolated any of these numbers.
          </p>
        </div>

        <div className="border-t border-[#e2e8f0]" />

        {/* The levy */}
        <section id="levy" className="scroll-mt-32 space-y-5">
          <SectionHeading>The levy income</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              In year one of the current BID term, which runs from November 2024, the BID
              collected approximately <strong className="text-[#0f172a]">£448,211</strong> in
              levy income from around 720 Southport businesses. That figure rises automatically
              every year. From year two onwards, the levy rate increases by 3% per annum
              regardless of performance or prevailing business conditions.
            </p>
            <p>
              Over the full five-year term, total projected levy income is{" "}
              <strong className="text-[#0f172a]">£2,379,613</strong>.
            </p>
          </div>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Projected levy income, 2024-2029
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Year</th>
                  <th className="text-right px-5 py-3 font-semibold text-[#0f172a]">Levy income</th>
                  <th className="text-right px-5 py-3 font-semibold text-[#0f172a]">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {levyProjections.map((row) => (
                  <tr
                    key={row.year}
                    className={row.bold ? "bg-[#fff7ed]" : "hover:bg-[#f8fafc]"}
                  >
                    <td className={`px-5 py-3 ${row.bold ? "font-bold text-[#0f172a]" : "text-[#475569]"}`}>
                      {row.year}
                    </td>
                    <td className={`px-5 py-3 text-right ${row.bold ? "font-bold text-[#f97316]" : "text-[#0f172a] font-medium"}`}>
                      {row.income}
                    </td>
                    <td className="px-5 py-3 text-right text-[#94a3b8] text-xs">{row.increase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Source>
              <span className="px-5 pb-3 block">
                Source: Southport BID Business Plan 2024-2029, p.14.{" "}
                <a href={BID_PDF} target="_blank" rel="noopener noreferrer" className="text-[#f97316] hover:underline inline-flex items-center gap-0.5">
                  View PDF <ExternalLink size={10} />
                </a>
              </span>
            </Source>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The budget */}
        <section id="budget" className="scroll-mt-32 space-y-5">
          <SectionHeading>Where it goes</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            The BID&apos;s own budget breakdown for year one is as follows. All figures are
            taken directly from their published Business Plan.
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Year one expenditure breakdown
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Category</th>
                  <th className="text-right px-5 py-3 font-semibold text-[#0f172a]">Amount</th>
                  <th className="text-right px-5 py-3 font-semibold text-[#0f172a]">% of spend</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a] hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {budgetRows.map((row) => (
                  <tr
                    key={row.category}
                    className={row.highlight ? "bg-[#fff7ed]" : "hover:bg-[#f8fafc]"}
                  >
                    <td className={`px-5 py-3.5 font-medium ${row.highlight ? "text-[#f97316]" : "text-[#0f172a]"}`}>
                      {row.category}
                      {row.highlight && (
                        <span className="ml-2 text-xs font-normal text-[#94a3b8]">see below</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-[#0f172a]">{row.amount}</td>
                    <td className="px-5 py-3.5 text-right text-[#94a3b8]">{row.pct}</td>
                    <td className="px-5 py-3.5 text-[#64748b] hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
                <tr className="bg-[#f8fafc] border-t-2 border-[#e2e8f0]">
                  <td className="px-5 py-3 font-bold text-[#0f172a]">Total</td>
                  <td className="px-5 py-3 text-right font-bold text-[#0f172a]">£455,000</td>
                  <td className="px-5 py-3 text-right font-bold text-[#0f172a]">100%</td>
                  <td className="hidden sm:table-cell" />
                </tr>
              </tbody>
            </table>
            <Source>
              <span className="px-5 pb-3 block">
                Source: Southport BID Business Plan 2024-2029.{" "}
                <a href={BID_PDF} target="_blank" rel="noopener noreferrer" className="text-[#f97316] hover:underline inline-flex items-center gap-0.5">
                  View PDF <ExternalLink size={10} />
                </a>
              </span>
            </Source>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Operating costs */}
        <section id="operating" className="scroll-mt-32 space-y-4">
          <SectionHeading>The operating cost question</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              £110,000 per year in operating costs, every year for five years, totals{" "}
              <strong className="text-[#0f172a]">£550,000</strong> over the term. That is more
              than the entire collaboration and celebration budgets combined. It is more than
              what the BID spends on actually representing the interests of Southport businesses.
            </p>
            <p>
              The Business Plan describes operating costs as 23% of total expenditure. This is
              not unusual for a BID of this size. But it is worth knowing, particularly when
              the organisation collects a compulsory levy with no opt-out mechanism.
            </p>
          </div>
          <div className="card bg-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-[#f97316]">£110,000</p>
                <p className="text-xs text-[#94a3b8] mt-1">Annual operating cost</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">£550,000</p>
                <p className="text-xs text-[#94a3b8] mt-1">5-year total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">23%</p>
                <p className="text-xs text-[#94a3b8] mt-1">Of all BID expenditure</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* YourSouthport */}
        <section id="yoursouthport" className="scroll-mt-32 space-y-4">
          <SectionHeading>What YourSouthport actually is</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Many Southport businesses and visitors encounter YourSouthport and assume it is
              an independent local guide. It is not.
            </p>
            <p>
              The BID&apos;s own 2024-2029 Business Plan states that YourSouthport was launched
              in August 2022 and lists a named member of the BID team with the specific job
              title of Your Southport Marketing Manager. That individual is listed in the
              Business Plan alongside the CEO and Head of Operations as part of the BID staff
              structure.
            </p>
            <p>
              The Business Plan also states, under future strategy for promotion:{" "}
              <em>
                &ldquo;Southport BID will continue to invest in the &lsquo;Your Southport&rsquo; platform
                as the primary means of advertising town centre businesses to residents
                and visitors.&rdquo;
              </em>
            </p>
            <p>
              And from the BID&apos;s own homepage, in their own words:{" "}
              <em>
                &ldquo;Your Southport is the platform we use to celebrate the people and
                businesses that make our town centre special.&rdquo;
              </em>
            </p>
          </div>

          <div className="card p-5 bg-[#fff7ed] border-[#fed7aa]">
            <p className="text-sm font-semibold text-[#0f172a] mb-2">Three sources. One conclusion.</p>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 font-bold text-[#f97316]">1.</span>
                The Business Plan lists YourSouthport as the BID&apos;s primary marketing tool,
                funded by the levy.
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 font-bold text-[#f97316]">2.</span>
                The Business Plan lists a named paid BID employee whose sole job title is
                Your Southport Marketing Manager.
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 font-bold text-[#f97316]">3.</span>
                The BID&apos;s own homepage describes it as &ldquo;the platform we use&rdquo; in the
                first person.
              </li>
            </ul>
            <Source>
              Sources: Southport BID Business Plan 2024-2029{" "}
              <a href={BID_PDF} target="_blank" rel="noopener noreferrer" className="text-[#f97316] hover:underline inline-flex items-center gap-0.5">
                (PDF) <ExternalLink size={10} />
              </a>{" "}
              and southportbid.com (homepage, April 2026).
            </Source>
          </div>

          <p className="text-[#475569] leading-relaxed">
            The BID values the content produced through YourSouthport at over £200,000 per
            year. That is the BID&apos;s own assessment of the value of content produced by its
            own paid employee, using levy funds. No independent verification of this figure
            is cited in the Business Plan.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Transparency */}
        <section id="transparency" className="scroll-mt-32 space-y-4">
          <SectionHeading>The transparency question</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              The BID&apos;s resources page states that board meeting minutes are available on
              request by emailing info@southportbid.com. They are not published publicly.
            </p>
            <p>
              For an organisation collecting nearly half a million pounds per year from
              businesses that have no choice but to pay, routine publication of board minutes
              is a reasonable expectation. It is standard practice for many comparable
              public-interest bodies.
            </p>
          </div>

          <div className="card bg-white p-5">
            <p className="text-sm font-semibold text-[#0f172a] mb-3">What SIBA says</p>
            <div className="space-y-3 text-sm text-[#64748b]">
              <p>
                SIBA is not arguing that Southport BID has done nothing of value. The Christmas
                lights exist. The floral displays happen. The crime reduction network operates.
                These are real.
              </p>
              <p>
                What SIBA is arguing is that businesses paying a compulsory levy deserve to
                know exactly where every pound goes, to see board minutes published routinely
                rather than available on request, and to have access to independent digital
                infrastructure that does not depend on the BID&apos;s goodwill or membership.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* 2026 */}
        <section className="space-y-4">
          <SectionHeading>Before July</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              The Open Championship comes to Royal Birkdale in July 2026. 150,000 visitors.
              Potentially the busiest trading period Southport has seen in years. Every
              business in PR8 and PR9 needs to be findable, optimised, and ready. SIBA
              provides free digital audits and local SEO support to help make that happen,
              regardless of whether you are a BID levy payer or not.
            </p>
          </div>
          <Link
            href="/audit#request"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm"
          >
            Request a free audit
            <ArrowRight size={14} />
          </Link>
        </section>

        {/* Source footer */}
        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-3">
            Primary source
          </p>
          <a
            href={BID_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#f97316] hover:underline font-medium"
          >
            Southport BID Business Plan 2024-2029 (PDF, southportbid.com)
            <ExternalLink size={13} />
          </a>
          <p className="text-xs text-[#94a3b8] mt-3">
            All factual claims in this report are sourced from the document above or from
            southportbid.com (accessed April 2026). SIBA welcomes corrections or responses
            and will publish them in full. Contact{" "}
            <a href="mailto:office@siba.digital" className="underline hover:text-[#64748b]">
              office@siba.digital
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
