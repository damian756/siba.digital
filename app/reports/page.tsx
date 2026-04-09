import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "SIBA Reports: The Southport Accountability Project",
  description:
    "Published reports on BID governance, levy spending, and the corporate interests shaping Southport's regeneration. The investigation is complete.",
  alternates: {
    canonical: "https://www.siba.digital/reports",
  },
  openGraph: {
    title: "SIBA Reports: The Southport Accountability Project",
    description:
      "Published reports on BID governance, levy spending, and the corporate interests shaping Southport's regeneration.",
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
  {
    number: "02",
    slug: "mark-catherall-visit-southport",
    title: "The council officer running Southport's tourism platform",
    subtitle: "How one Sefton Council officer controls both Visit Southport and a seat on the BID board",
    date: "April 2026",
    category: "Governance",
    summary:
      "Mark Catherall is Sefton Council's Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council's formally appointed representative. He helped design the BID before moving into his current post. This report documents the structure and asks the questions that follow.",
  },
];

const methodologyStats = [
  { value: "12+", label: "Months of research" },
  { value: "55+", label: "Companies House filings reviewed" },
  { value: "2", label: "Published reports" },
  { value: "15", label: "FOI requests submitted" },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Investigation Archive</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
            The Southport Accountability Project
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mb-6">
            This investigation began with a single question: where does the BID levy money go?
            Two published reports, four structural analyses, and fifteen Freedom of Information
            requests later, that question has a detailed public answer.
          </p>

          {/* Methodology stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-[#f8fafc] max-w-xl">
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

        {/* FOI block */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-5">
            Freedom of Information
          </p>
          <div className="card bg-white p-7 border-l-4 border-l-[#0f172a]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f1f5f9] border border-[#e2e8f0]">
                  <span className="text-sm font-bold text-[#0f172a]">15</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-[#0f172a] mb-2">
                  15 FOI Requests Submitted to Sefton Council
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  SIBA submitted 15 Freedom of Information requests to Sefton Council covering
                  BID ballot integrity, governance conflicts of interest, public spending, COVID
                  grant recipients, media contractor payments, and the editorial decisions behind
                  Southport&apos;s publicly-funded tourism platform. All requests are publicly
                  listed on WhatDoTheyKnow.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/foi"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] border border-[#e2e8f0] rounded px-3 py-1.5 bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
                  >
                    View all FOI requests
                    <ArrowRight size={11} />
                  </Link>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94a3b8] border border-[#e2e8f0] rounded px-3 py-1.5 bg-[#f8fafc]">
                    <Clock size={11} />
                    Responses due 7 May 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investigation sign-off */}
        <div className="mt-14 border-t border-[#e2e8f0] pt-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0f172a] mb-3">
              A note on where this project goes from here
            </p>
            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              When SIBA launched, the objective was clear: document, with evidence, how
              Southport&apos;s Business Improvement District operates and who benefits from it.
              That work is done. The reports and analysis published here remain available in full
              and will not be removed.
            </p>
            <p className="text-sm text-[#64748b] leading-relaxed mb-4">
              FOI responses, when issued by Sefton Council, will be published in accordance with
              their transparency obligations and listed publicly on WhatDoTheyKnow. No further
              investigation reports are planned.
            </p>
            <p className="text-sm text-[#64748b] leading-relaxed">
              SIBA&apos;s focus is now on building the digital infrastructure that Southport&apos;s
              independent businesses actually need. The investigation was the foundation. This is
              the building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
