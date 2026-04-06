import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Lock, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "SIBA Reports: The Southport Accountability Project",
  description:
    "An ongoing investigation into BID governance, levy spending, and the corporate interests shaping Southport's regeneration. Publishing in sequence.",
  alternates: {
    canonical: "https://www.siba.digital/reports",
  },
  openGraph: {
    title: "SIBA Reports: The Southport Accountability Project",
    description:
      "An ongoing investigation into BID governance, levy spending, and the corporate interests shaping Southport's regeneration. Publishing in sequence.",
    url: "https://www.siba.digital/reports",
    type: "website",
  },
};

const publishedReports = [
  {
    number: "01",
    slug: "southport-bid-budget-2024",
    title: "Where does Southport BID spend your levy?",
    subtitle: "A line-by-line breakdown of the 2024-2029 BID Business Plan budget",
    date: "April 2026",
    category: "Budget Transparency",
    summary:
      "Southport BID collects £448,211 in compulsory levy income in year one of its current term, rising automatically by 3% each year. This report breaks down exactly where that money goes, sourced directly from the BID's own publicly available Business Plan.",
  },
];

const upcomingReports = [
  {
    number: "02",
    title: "Governance, Conflicts of Interest, and the BID Board",
    subtitle: "An examination of board composition, dual roles, and undisclosed relationships",
    date: "May 2026",
    category: "Governance",
  },
  {
    number: "03",
    title: "Corporate Interests and Southport's Regeneration Funding",
    subtitle: "The private sector connections behind Southport's public funding allocation",
    date: "In preparation",
    category: "Accountability",
  },
];

const methodologyStats = [
  { value: "12+", label: "Months of research" },
  { value: "47+", label: "Companies House filings reviewed" },
  { value: "6", label: "Reports in preparation" },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Ongoing Investigation</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
            The Southport Accountability Project
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mb-6">
            This investigation began with a single question: where does the BID levy money go?
            What the research uncovered took us considerably further than Southport.
            We are publishing in sequence. We are not finished.
          </p>

          {/* Methodology stats */}
          <div className="grid grid-cols-3 divide-x divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-[#f8fafc] max-w-lg">
            {methodologyStats.map((s) => (
              <div key={s.label} className="px-5 py-4 text-center">
                <p className="text-xl font-bold text-[#0f172a]">{s.value}</p>
                <p className="text-xs text-[#64748b] leading-tight mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Source notice */}
        <div className="card p-5 bg-[#fff7ed] border-[#fed7aa] mb-10">
          <div className="flex gap-3">
            <FileText size={16} className="text-[#f97316] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#64748b] leading-relaxed">
              Every factual claim in SIBA reports is sourced from publicly available documents
              and linked directly. SIBA welcomes corrections from any party named or referenced
              and will publish responses in full.
            </p>
          </div>
        </div>

        {/* Published reports */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-5">
            Published
          </p>
          <div className="space-y-4">
            {publishedReports.map((r) => (
              <Link
                key={r.slug}
                href={`/reports/${r.slug}`}
                className="card card-hover bg-white p-7 flex flex-col sm:flex-row gap-6 group block"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                    <span className="text-sm font-bold text-[#f97316]">{r.number}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="badge badge-orange">{r.category}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#94a3b8]">
                      <Calendar size={11} />
                      {r.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#f97316] transition-colors">
                    {r.title}
                  </h2>
                  <p className="text-sm text-[#64748b] mb-1">{r.subtitle}</p>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{r.summary}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <ArrowRight size={18} className="text-[#cbd5e1] group-hover:text-[#f97316] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming reports */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-5">
            In preparation
          </p>
          <div className="space-y-4">
            {upcomingReports.map((r) => (
              <div
                key={r.number}
                className="card bg-white p-7 flex flex-col sm:flex-row gap-6 opacity-75"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f1f5f9] border border-[#e2e8f0]">
                    <span className="text-sm font-bold text-[#94a3b8]">{r.number}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="badge badge-navy">{r.category}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#94a3b8]">
                      <Clock size={11} />
                      {r.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#475569] mb-1">{r.title}</h2>
                  <p className="text-sm text-[#94a3b8]">{r.subtitle}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <Lock size={16} className="text-[#cbd5e1]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investigation sign-off */}
        <div className="mt-14 border-t border-[#e2e8f0] pt-10">
          <div className="max-w-2xl">
            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              Our research has identified structural patterns connecting local governance decisions
              to corporate interests at a national and international level. Some of what we have
              found involves organisations with revenues in the hundreds of millions. We are being
              thorough. We are taking our time.
            </p>
            <p className="text-sm text-[#64748b] leading-relaxed">
              If you have information relevant to BID governance, Town Deal funding, or business
              representation in PR8 or PR9, contact{" "}
              <a href="mailto:damian@siba.digital" className="text-[#f97316] hover:underline">
                damian@siba.digital
              </a>
              . All communications handled in strict confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
