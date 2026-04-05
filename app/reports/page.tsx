import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "SIBA Reports: Transparency and Data",
  description:
    "In-depth transparency reports on Southport's Business Improvement District. All data sourced from publicly available documents.",
};

const reports = [
  {
    slug: "southport-bid-budget-2024",
    title: "Where does Southport BID spend your levy?",
    subtitle: "A line-by-line breakdown of the 2024-2029 BID Business Plan budget",
    date: "April 2026",
    category: "Budget Transparency",
    summary:
      "Southport BID collects £448,211 in compulsory levy income in year one of its current term, rising automatically by 3% each year. This report breaks down exactly where that money goes, sourced directly from the BID's own publicly available Business Plan.",
  },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Transparency</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">Reports</h1>
          <p className="text-lg text-[#64748b] leading-relaxed max-w-2xl">
            In-depth analysis of Southport&apos;s business improvement district finances,
            spending, and governance. All data is sourced from publicly available documents
            and linked directly at source.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Notice */}
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

        {/* Reports list */}
        <div className="space-y-4">
          {reports.map((r) => (
            <Link
              key={r.slug}
              href={`/reports/${r.slug}`}
              className="card card-hover bg-white p-7 flex flex-col sm:flex-row gap-6 group block"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                  <FileText size={22} className="text-[#f97316]" />
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

        {/* More coming */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#94a3b8]">
            More reports in preparation. If you have information relevant to BID transparency
            in PR8 or PR9, contact{" "}
            <a href="mailto:office@siba.digital" className="text-[#f97316] hover:underline">
              office@siba.digital
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
