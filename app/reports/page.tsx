import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InvestigationClosed from "@/components/InvestigationClosed";

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
    slug: "selective-promotion",
    title: "Which businesses does VisitSouthport.com actually promote?",
    subtitle: "A manual review of editorial content on Southport\u2019s publicly-funded tourism platform",
    date: "7 April 2026",
    category: "Editorial Review",
    summary:
      "Four seasonal pages. Every mention counted. Every outbound link checked. Zero independent restaurants or pubs. One commercial group on every page. The pattern is consistent and independently verifiable.",
  },
  {
    slug: "southport-bid-budget-2024",
    title: "Where does Southport BID spend your levy?",
    subtitle: "A line-by-line breakdown of the 2024-2029 BID Business Plan budget",
    date: "7 April 2026",
    category: "Budget Transparency",
    summary:
      "Southport BID collects \u00a3448,211 in compulsory levy income in year one of its current term, rising automatically by 3% each year. This report breaks down exactly where that money goes, sourced directly from the BID\u2019s own publicly available Business Plan.",
  },
  {
    slug: "mark-catherall-visit-southport",
    title: "The council officer running Southport\u2019s tourism platform",
    subtitle: "How one Sefton Council officer controls both Visit Southport and a seat on the BID board",
    date: "8 April 2026",
    category: "Governance",
    summary:
      "Mark Catherall is Sefton Council\u2019s Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council\u2019s formally appointed representative. He helped design the BID before moving into his current post. This report documents the structure and asks the questions that follow.",
  },
  {
    slug: "andrew-brown-bid-media",
    title: "Southport BID\u2019s contracted media partner is also paid by Mikhail Hotel and Leisure Group",
    subtitle: "Andrew Brown\u2019s Stand Up For Southport holds a BID contract since 2021 and in his own words also provides paid PR services to Mikhail Hotel and Leisure Group",
    date: "9 April 2026",
    category: "Media Contracts",
    summary:
      "Both commercial relationships are confirmed from public sources: a BID announcement dated January 2021 and a published interview in November 2024. Neither relationship is consistently disclosed in Andrew Brown\u2019s coverage of either organisation.",
  },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-5">
          Investigation Archive
        </p>
        <h1 className="mb-4">
          The Southport Accountability Project
        </h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed max-w-xl mb-14">
          This investigation began with a single question: where does the BID levy money go?
          Four published reports and fifteen Freedom of Information requests later,
          that question has a detailed public answer.
        </p>

        {/* Source notice */}
        <div className="border-l-2 border-[#ccccc4] pl-5 py-1 mb-14">
          <p className="text-sm text-[#3d3d3d] leading-relaxed">
            Every factual claim in SIBA reports is sourced from publicly available documents
            and linked directly. SIBA welcomes corrections from any party named or referenced
            and will publish responses in full.
          </p>
        </div>

        {/* Published reports */}
        <div className="mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-6">
            Published
          </p>
          <div className="divide-y divide-[#ddddd5]">
            {publishedReports.map((r) => (
              <Link
                key={r.slug}
                href={`/reports/${r.slug}`}
                className="article-card first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                    {r.category}
                  </span>
                  <span className="text-[11px] text-[#ccccc4]">&middot;</span>
                  <span className="text-[11px] text-[#a0a0a0]">{r.date}</span>
                </div>
                <h2 className="article-card__title font-medium mb-1.5">
                  {r.title}
                </h2>
                <p className="text-sm text-[#6b6b6b] mb-1">{r.subtitle}</p>
                <p className="text-sm text-[#a0a0a0] leading-relaxed mb-3">{r.summary}</p>
                <span className="article-card__read inline-flex items-center gap-1 text-[13px] font-medium">
                  Read
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* FOI block */}
        <div className="pb-14 mb-14 border-b border-[#ddddd5]">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-5">
            Freedom of Information
          </p>
          <h2 className="font-medium mb-3">
            15 FOI Requests Submitted to Sefton Council
          </h2>
          <p className="text-sm text-[#3d3d3d] leading-relaxed mb-4">
            SIBA submitted 15 Freedom of Information requests to Sefton Council covering
            BID ballot integrity, governance conflicts of interest, public spending, COVID
            grant recipients, media contractor payments, and the editorial decisions behind
            Southport&apos;s publicly-funded tourism platform. All requests are publicly
            listed on WhatDoTheyKnow.
          </p>
          <Link
            href="/foi"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#112d6e] hover:text-[#1c1c1c] transition-colors"
          >
            View all FOI requests
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Investigation sign-off */}
        <InvestigationClosed />
      </div>
    </div>
  );
}
