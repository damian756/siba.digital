import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "SIBA Analysis: Structural Critiques of the BID Model",
  description:
    "Original structural analysis of Business Improvement Districts. Why the BID model produces cronyism by design, regardless of who runs it.",
  alternates: {
    canonical: "https://www.siba.digital/analysis",
  },
  openGraph: {
    title: "SIBA Analysis | SIBA Digital",
    description:
      "Original structural analysis of Business Improvement Districts. Why the model itself is the problem.",
    url: "https://www.siba.digital/analysis",
    type: "website",
  },
};

const articles = [
  {
    slug: "andrew-brown-bid-media",
    title: "Southport BID's Contracted Media Partner Is Also Paid by Mikhail Hotel and Leisure Group",
    subtitle:
      "Andrew Brown's Stand Up For Southport has held a paid contract with Southport BID since 2021. In his own words, he also provides paid media and PR services to Mikhail Hotel and Leisure Group. He covers both organisations without consistent disclosure.",
    date: "April 2026",
    category: "Media Contracts",
  },
  {
    slug: "bid-treasurer-mikhail",
    title: "Southport's BID Treasurer Is an Active Director of the Town's Biggest Hospitality Group",
    subtitle:
      "Companies House confirms Geoffrey Wareham is currently a registered active director of Mikhail Hotels and Leisure Holdings Limited while simultaneously serving as Treasurer of Southport BID. No termination has ever been filed. This analysis documents the structure.",
    date: "April 2026",
    category: "Governance",
  },
  {
    slug: "selective-promotion",
    title: "Which Businesses Does VisitSouthport.com Actually Promote?",
    subtitle:
      "A manual review of editorial content on Southport's publicly-funded tourism platform. Four seasonal pages. Every mention. Every link. Zero independent restaurants or pubs. One commercial group on every page.",
    date: "April 2026",
    category: "Editorial Review",
  },
  {
    slug: "bid-cronyism-by-design",
    title: "How BIDs Breed Cronyism by Design",
    subtitle:
      "The BID model does not just enable cronyism. It requires it. A structural analysis of why every BID produces the same outcome regardless of who runs it.",
    date: "April 2026",
    category: "Structural Analysis",
  },
];

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Original Research</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">Analysis</h1>
          <p className="text-lg text-[#64748b] leading-relaxed max-w-2xl">
            Structural critiques of the Business Improvement District model.
            Not reactive complaints about individual boards. Analysis of why
            the model itself produces predictable outcomes regardless of intent.
          </p>
          <div className="mt-6 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 max-w-2xl">
            <p className="text-xs font-semibold text-[#0f172a] mb-2">A note on where this project goes from here</p>
            <p className="text-xs text-[#64748b] leading-relaxed mb-2">
              When SIBA launched, the objective was to document, with evidence, how Southport&apos;s
              Business Improvement District operates and who benefits from it. That work is done.
              Everything published here remains available in full and will not be removed. No
              further analysis is planned.
            </p>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              15 Freedom of Information requests are on the public record via WhatDoTheyKnow.
              Responses, when issued by Sefton Council, will be published under their transparency
              obligations. SIBA&apos;s focus is now on building Southport&apos;s digital infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/analysis/${a.slug}`}
              className="card card-hover bg-white p-7 flex flex-col sm:flex-row gap-6 group block"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                  <span className="text-lg font-bold text-[#f97316]">&sect;</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="badge badge-orange">{a.category}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#94a3b8]">
                    <Calendar size={11} />
                    {a.date}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#f97316] transition-colors">
                  {a.title}
                </h2>
                <p className="text-sm text-[#64748b] leading-relaxed">{a.subtitle}</p>
              </div>
              <div className="flex-shrink-0 self-center">
                <ArrowRight size={18} className="text-[#cbd5e1] group-hover:text-[#f97316] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
