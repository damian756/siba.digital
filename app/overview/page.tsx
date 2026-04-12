import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Southport BID Investigation: Overview and Timeline",
  description:
    "A complete chronological record of the SIBA investigation into Southport BID governance. Every analysis, report, FOI request, and contact event in sequence. All sourced from public documents.",
  alternates: {
    canonical: "https://www.siba.digital/overview",
  },
  openGraph: {
    title: "Southport BID Investigation: Overview and Timeline",
    description:
      "The complete record of the SIBA investigation into Southport BID governance. Every action, in sequence.",
    url: "https://www.siba.digital/overview",
    type: "article",
  },
};

type EventType = "analysis" | "report" | "foi" | "contact" | "commercial";

const events: {
  date: string;
  type: EventType;
  title: string;
  description: string;
  href?: string;
}[] = [
  {
    date: "Easter Sunday, 5 April 2026",
    type: "analysis",
    title: "Investigation begins",
    description:
      "A single question: where does the Southport BID levy money go? A BID business plan read on a phone. The first Companies House searches. Cross-referencing of director networks begins.",
  },
  {
    date: "7 April 2026",
    type: "analysis",
    title: "How BIDs Breed Cronyism by Design",
    description:
      "The founding structural analysis. The BID model does not just enable cronyism. It requires it. Published in full with no named allegations.",
    href: "/analysis/bid-cronyism-by-design",
  },
  {
    date: "7 April 2026",
    type: "analysis",
    title: "Southport's BID Treasurer Is an Active Director of the Town's Biggest Hospitality Group",
    description:
      "Companies House confirms Geoffrey Wareham is a registered active director of Mikhail Hotels and Leisure Holdings Limited while simultaneously serving as BID Treasurer. No termination has been filed.",
    href: "/analysis/bid-treasurer-mikhail",
  },
  {
    date: "7 April 2026",
    type: "analysis",
    title: "Southport BID's Contracted Media Partner Is Also Paid by Mikhail Hotel and Leisure Group",
    description:
      "Andrew Brown's Stand Up For Southport holds a paid contract with Southport BID and, in his own words, also provides paid media and PR services to Mikhail Hotel and Leisure Group. Both organisations are covered without consistent disclosure.",
    href: "/analysis/andrew-brown-bid-media",
  },
  {
    date: "7 April 2026",
    type: "analysis",
    title: "Which Businesses Does VisitSouthport.com Actually Promote?",
    description:
      "A manual review of editorial content on Southport's publicly-funded tourism platform. Four seasonal pages. Every mention. Every link. Zero independent restaurants or pubs. One commercial group on every page.",
    href: "/analysis/selective-promotion",
  },
  {
    date: "7 April 2026",
    type: "report",
    title: "Where Does Southport BID Spend Your Levy?",
    description:
      "A line-by-line breakdown of Southport BID's 2024-2029 Business Plan budget. £448,211 collected in year one. All figures sourced from the BID's own published documents.",
    href: "/reports/southport-bid-budget-2024",
  },
  {
    date: "8 April 2026",
    type: "contact",
    title: "Direct contact received demanding removal of published content",
    description:
      "A phone call was received from a named hospitality group chairman. Removal of published content was demanded. The content remained published. The contact is documented in full.",
    href: "/contact-log",
  },
  {
    date: "8 April 2026",
    type: "report",
    title: "The Council Officer Running Southport's Tourism Platform",
    description:
      "Mark Catherall is Sefton Council's Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council's formally appointed representative. This report documents the structure.",
    href: "/reports/mark-catherall-visit-southport",
  },
  {
    date: "9 April 2026",
    type: "foi",
    title: "15 Freedom of Information requests submitted to Sefton Council",
    description:
      "Requests covering BID ballot integrity, declarations of interest, meeting minutes, procurement decisions, COVID grant recipients, media contractor payments, and Town Deal governance. All submitted through WhatDoTheyKnow and on the public record.",
    href: "/foi",
  },
  {
    date: "April 2026",
    type: "commercial",
    title: "SIBA Digital launched commercially",
    description:
      "The Southport investigation becomes the founding case study for a national governance audit methodology. Digital governance audits and OSINT for BIDs, councils, and major developments across the UK.",
    href: "/services",
  },
  {
    date: "5-7 May 2026",
    type: "foi",
    title: "FOI statutory deadlines: Sefton Council responses due",
    description:
      "Requests 1-8 are due by 5 May 2026. Request 9 is due 6 May. Requests 10-15 are due 7 May. Every response will be published in full on this site.",
    href: "/foi",
  },
];

const typeConfig: Record<EventType, { label: string; colour: string }> = {
  analysis: { label: "Analysis", colour: "bg-[#112d6e]" },
  report: { label: "Report", colour: "bg-[#2c4a52]" },
  foi: { label: "FOI", colour: "bg-[#5a4a2c]" },
  contact: { label: "Contact", colour: "bg-[#6b2c2c]" },
  commercial: { label: "Commercial", colour: "bg-[#1c5a2c]" },
};

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
            Southport Case Study
          </p>
          <h1 className="mb-4">Overview</h1>
          <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl mb-4">
            A complete chronological record of the SIBA investigation into
            Southport BID governance. Every analysis, report, FOI request,
            and contact event, in sequence.
          </p>
          <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl mb-14">
            Every factual claim is sourced from publicly available documents.
            SIBA welcomes corrections from any party named or referenced and
            will publish responses in full.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#ddddd5] border border-[#ddddd5] mb-14">
            {[
              { value: "4", label: "Analyses" },
              { value: "2", label: "Reports" },
              { value: "15", label: "FOI Requests" },
              { value: "10,000+", label: "LinkedIn Impressions" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-5 text-center">
                <p className="text-2xl font-semibold text-[#112d6e]">{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#a0a0a0]">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-10">
            {(Object.entries(typeConfig) as [EventType, { label: string; colour: string }][]).map(([, cfg]) => (
              <span key={cfg.label} className="inline-flex items-center gap-1.5 text-xs text-[#6b6b6b]">
                <span className={`h-2 w-2 rounded-full ${cfg.colour}`} />
                {cfg.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="space-y-0">
          {events.map((event, i) => {
            const cfg = typeConfig[event.type];
            const isLast = i === events.length - 1;
            return (
              <Reveal key={i}>
                <div className="flex gap-5">
                  {/* Spine */}
                  <div className="flex flex-col items-center flex-shrink-0 w-5">
                    <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 mt-1 ${cfg.colour}`} />
                    {!isLast && <span className="w-px flex-1 bg-[#ddddd5] my-1" />}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 ${isLast ? "" : ""}`}>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                      {event.date}
                      <span className="ml-2 normal-case not-italic font-normal text-[#ccccc4]">
                        {cfg.label}
                      </span>
                    </p>
                    {event.href ? (
                      <Link
                        href={event.href}
                        className="group inline-block"
                      >
                        <h2 className="text-[18px] font-medium text-[#1c1c1c] group-hover:text-[#112d6e] transition-colors mb-1.5 leading-snug">
                          {event.title}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="text-[18px] font-medium text-[#1c1c1c] mb-1.5 leading-snug">
                        {event.title}
                      </h2>
                    )}
                    <p className="text-[14px] text-[#6b6b6b] leading-relaxed mb-2">
                      {event.description}
                    </p>
                    {event.href && (
                      <Link
                        href={event.href}
                        className="inline-flex items-center gap-1 text-xs text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                      >
                        Read
                        <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="border-t border-[#ddddd5] mt-4 pt-10">
          <Reveal>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/analysis"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                All Analysis
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                All Reports
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/foi"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                FOI Tracker
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact-log"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                Contact Log
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
