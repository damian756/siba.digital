import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InvestigationClosed from "@/components/InvestigationClosed";

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
    title: "Southport BID\u2019s Contracted Media Partner Is Also Paid by Mikhail Hotel and Leisure Group",
    subtitle:
      "Andrew Brown\u2019s Stand Up For Southport has held a paid contract with Southport BID since 2021. In his own words, he also provides paid media and PR services to Mikhail Hotel and Leisure Group. He covers both organisations without consistent disclosure.",
    date: "April 2026",
    category: "Media Contracts",
  },
  {
    slug: "bid-treasurer-mikhail",
    title: "Southport\u2019s BID Treasurer Is an Active Director of the Town\u2019s Biggest Hospitality Group",
    subtitle:
      "Companies House confirms Geoffrey Wareham is currently a registered active director of Mikhail Hotels and Leisure Holdings Limited while simultaneously serving as Treasurer of Southport BID. No termination has ever been filed. This analysis documents the structure.",
    date: "April 2026",
    category: "Governance",
  },
  {
    slug: "selective-promotion",
    title: "Which Businesses Does VisitSouthport.com Actually Promote?",
    subtitle:
      "A manual review of editorial content on Southport\u2019s publicly-funded tourism platform. Four seasonal pages. Every mention. Every link. Zero independent restaurants or pubs. One commercial group on every page.",
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
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-5">
          Original Research
        </p>
        <h1 className="text-3xl text-[#1c1c1c] mb-4">Analysis</h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed max-w-xl mb-8">
          Structural critiques of the Business Improvement District model.
          Not reactive complaints about individual boards. Analysis of why
          the model itself produces predictable outcomes regardless of intent.
        </p>
        <div className="mb-14">
          <InvestigationClosed />
        </div>

        <div className="space-y-0 divide-y divide-[#e8e8e4]">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/analysis/${a.slug}`}
              className="block py-8 first:pt-0 last:pb-0 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0]">
                  {a.category}
                </span>
                <span className="text-[11px] text-[#d4d4cf]">&middot;</span>
                <span className="text-[11px] text-[#a0a0a0]">{a.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-[#1c1c1c] mb-1.5 group-hover:text-[#3d3d3d] transition-colors">
                {a.title}
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-2">{a.subtitle}</p>
              <span className="inline-flex items-center gap-1 text-[13px] text-[#a0a0a0] group-hover:text-[#1c1c1c] transition-colors">
                Read
                <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
