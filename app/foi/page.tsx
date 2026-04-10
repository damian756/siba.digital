import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import FoiCountdown from "@/components/FoiCountdown";
import InvestigationClosed from "@/components/InvestigationClosed";

export const metadata: Metadata = {
  title: "FOI Requests: Sefton Council | SIBA",
  description:
    "SIBA has submitted 15 Freedom of Information requests to Sefton Council covering BID ballot integrity, governance conflicts of interest, public spending, media contractor payments, and editorial decisions on publicly-funded platforms.",
  alternates: {
    canonical: "https://www.siba.digital/foi",
  },
  openGraph: {
    title: "FOI Requests: Sefton Council | SIBA",
    description:
      "15 Freedom of Information requests to Sefton Council. All responses will be published in full.",
    url: "https://www.siba.digital/foi",
    type: "website",
  },
};

const BASE_WDTK = "https://www.whatdotheyknow.com/request";

const requests = [
  {
    number: "01",
    title: "BID Ballot Voting",
    slug: "foi_request_1_bid_ballot_voting",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "Was the 2024 BID renewal ballot legitimate? Asks for the full vote breakdown by number and rateable value, how Sefton Council voted using its own properties within the BID area, and critically whether the ballot result would have passed either threshold without the council's own votes.",
    relatedLabel: "Reports",
    relatedHref: "/reports",
  },
  {
    number: "02",
    title: "BID Consultancy Costs",
    slug: "foi_request_2_bid_consultancy_co",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "Who was engaged to advise on or administer the 2024 BID ballot, and how much were they paid? The ballot process should be independently administered. This request identifies who held that role and at what cost to public funds.",
    relatedLabel: "Reports",
    relatedHref: "/reports",
  },
  {
    number: "03",
    title: "Lord Street Lighting",
    slug: "foi_request_3_lord_street_lighti",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "A request for the full cost and contractor details for Lord Street lighting installations funded through public or BID budgets. Part of our ongoing audit of how public money flows through Southport's town centre infrastructure.",
    relatedLabel: null,
    relatedHref: null,
  },
  {
    number: "04",
    title: "Mark Catherall Register of Interests",
    slug: "foi_request_4_mark_catherall_reg",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "Mark Catherall is Sefton Council's Tourism Service Manager. He runs Visit Southport day-to-day and also sits on the Southport BID board as a director. This request asks for his register of declared interests as a council officer, specifically whether his BID board directorship is declared.",
    relatedLabel: "Selective Promotion Analysis",
    relatedHref: "/analysis/selective-promotion#governance",
    highlight: true,
  },
  {
    number: "05",
    title: "Council Properties in BID Area",
    slug: "foi_request_5_council_properties",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "A full list of Sefton Council-owned properties within the BID levy area, their rateable values, and how the council voted in the 2024 ballot for each. The council is simultaneously the ballot administrator, a levy payer, and has a director on the BID board.",
    relatedLabel: "Reports",
    relatedHref: "/reports",
  },
  {
    number: "06",
    title: "Town Deal Board Declarations of Interest",
    slug: "foi_request_6_town_deal_board_de",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "Southport received Town Deal funding. This request asks for all declarations of interest made by Town Deal board members at any meeting where funding allocation was discussed. Part of a wider examination of how public regeneration money flows through connected interests.",
    relatedLabel: null,
    relatedHref: null,
  },
  {
    number: "07",
    title: "BID Operating Agreement",
    slug: "foi_request_7_bid_operating_agre",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "The formal contract or operating agreement between Sefton Council and Southport BID that governs how the compulsory levy is collected and how the BID operates within the council's jurisdiction. The terms of this agreement define the accountability framework for every BID activity.",
    relatedLabel: "Reports",
    relatedHref: "/reports",
  },
  {
    number: "08",
    title: "Acceleration Grant Full Spend",
    slug: "foi_request_8_acceleration_grant",
    due: "5 May 2026",
    status: "awaiting",
    summary:
      "A line-by-line breakdown of how the BID Acceleration Grant was spent. Who received funds, for what purpose, and what procurement process was followed. Public money should have a public audit trail.",
    relatedLabel: "Reports",
    relatedHref: "/reports",
  },
  {
    number: "09",
    title: "VisitSouthport Website Link Management and Amendment History",
    slug: "foi_request_9_visitsouthport_web",
    due: "6 May 2026",
    status: "awaiting",
    summary:
      "Who has editorial control over the outbound links in VisitSouthport.com's seasonal content? What is the process for adding or removing a business link? Has any audit of the editorial content been conducted? This request directly supports our published analysis of which businesses VisitSouthport.com promotes.",
    relatedLabel: "Selective Promotion Analysis",
    relatedHref: "/analysis/selective-promotion",
    highlight: true,
  },
  {
    number: "10",
    title: "BID Board Members' Declarations of Interest and Outside Directorships",
    slug: "foi_request_10_bid_board_members",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Asks whether the BID governance framework requires board members to declare outside directorships, whether declarations were made by or in relation to G R Wareham (BID Treasurer) between January 2022 and December 2024 during the period he served as a director of Mikhail Hotels and Leisure Holdings Limited, and whether any correspondence exists between council officers and BID board members regarding declarations of outside commercial interests.",
    relatedLabel: "BID Treasurer Analysis",
    relatedHref: "/analysis/bid-treasurer-mikhail",
    highlight: true,
  },
  {
    number: "11",
    title: "COVID Business Grant Recipients and Council Transparency Page",
    slug: "foi_request_11_freedom_of_inform",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Two-part request. Part 1 asks for the full list of COVID-19 business grant recipients paid by Sefton Council between March 2020 and March 2022, including the name of each recipient, the amount received, and the grant scheme under which it was paid. Part 2 asks why the Council Spend transparency page no longer displays any documents, and when those documents were removed.",
    relatedLabel: null,
    relatedHref: null,
  },
  {
    number: "12",
    title: "Financial Relationship Between Sefton Council and Visit Southport",
    slug: "foi_request_12_freedom_of_inform",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Asks for any grants, contracts, service level agreements, or other payments made between Sefton Council and Visit Southport from 2018 to present. Also asks for any formal arrangement or agreement governing the relationship between the council and the Visit Southport tourism service.",
    relatedLabel: "Catherall Report",
    relatedHref: "/reports/mark-catherall-visit-southport",
  },
  {
    number: "13",
    title: "Employment Arrangements and Outside Role with Visit Southport",
    slug: "foi_request_13_freedom_of_inform",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Asks for Mark Catherall's job title and description, any secondment or outside activity agreement governing his Visit Southport role, any entry in Sefton's register of employees' interests relating to his BID board directorship, and any correspondence about managing conflicts of interest arising from his simultaneous council and BID roles.",
    relatedLabel: "Catherall Report",
    relatedHref: "/reports/mark-catherall-visit-southport",
    highlight: true,
  },
  {
    number: "14",
    title: "Southport Business Recovery Fund Recipients and Payments",
    slug: "foi_request_14_freedom_of_inform",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Asks for full details of the Southport Business Recovery Fund including the total allocation, source of funding, a complete list of recipients and payments received, the eligibility criteria applied, and the names of the officers or decision-makers who approved each payment.",
    relatedLabel: null,
    relatedHref: null,
  },
  {
    number: "15",
    title: "BID Media Contractor Payments and Procurement",
    slug: "foi_request_15_bid_media_contrac",
    due: "7 May 2026",
    status: "awaiting",
    summary:
      "Three-part request. Part 1 asks for all payments made by Sefton Council, or from any council-administered fund, to Stand Up For Southport Limited (company 12553604), Andrew Brown Media, or Andrew Edward Brown personally, from January 2019 to the date of the request. Part 2 asks whether such payments appear in the council transparency data and whether any records were removed. Part 3 asks for any tender or procurement documentation held by the council relating to the appointment of Stand Up For Southport or Andrew Brown as a media supplier to Southport BID.",
    relatedLabel: "BID Media Analysis",
    relatedHref: "/analysis/andrew-brown-bid-media",
    highlight: true,
  },
];

export default function FoiPage() {
  const awaiting = requests.filter((r) => r.status === "awaiting").length;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Accountability</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
            Freedom of Information Requests
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mb-6">
            SIBA has submitted {requests.length} Freedom of Information requests
            to Sefton Council under the Freedom of Information Act 2000.  Every
            request is publicly listed on WhatDoTheyKnow. Every response will be
            published in full on this platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-[#f8fafc] max-w-sm">
            {[
              { value: String(requests.length), label: "Requests submitted" },
              { value: String(awaiting), label: "Awaiting response" },
              { value: "0", label: "Substantive responses" },
            ].map((s) => (
              <div key={s.label} className="px-5 py-4 text-center">
                <p className="text-xl font-bold text-[#0f172a]">{s.value}</p>
                <p className="text-xs text-[#64748b] leading-tight mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">

        <div className="mb-10">
          <InvestigationClosed />
        </div>

        <FoiCountdown />

        <div className="rounded-lg border border-[#e2e8f0] bg-white px-5 py-4 mb-10 -mt-6 flex items-start gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#94a3b8] mt-1.5" />
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            The countdown above tracks the statutory deadline for FOI requests 1–9 (5–6 May 2026).
            FOI requests 10–15, submitted 8–9 April 2026, have a response deadline of{" "}
            <span className="font-semibold text-[#64748b]">7 May 2026</span>.
          </p>
        </div>

        {/* What FOI is */}
        <div className="card p-6 bg-white border-l-4 border-l-[#0f172a] mb-10">
          <p className="text-sm font-semibold text-[#0f172a] mb-2">
            Why we are using FOI
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            The Freedom of Information Act 2000 gives anyone the right to
            request recorded information held by public authorities. Sefton
            Council is a public authority. It funds VisitSouthport.com, collects
            and administers the BID ballot, and employs the officer who runs
            Visit Southport and simultaneously sits on the BID board. These
            requests ask for information that should be a matter of public
            record. SIBA is making it one.
          </p>
        </div>

        {/* Request list */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-5">
          All requests to Sefton Borough Council
        </p>

        <div className="space-y-4">
          {requests.map((r) => (
            <div
              id={r.number}
              key={r.number}
              className={`card bg-white p-6 sm:p-7 ${
                "highlight" in r && r.highlight
                  ? "border-l-4 border-l-[#111827]"
                  : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                      "highlight" in r && r.highlight
                        ? "bg-[#f9fafb] border-[#e5e7eb]"
                        : "bg-[#f1f5f9] border-[#e2e8f0]"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        "highlight" in r && r.highlight
                          ? "text-[#111827]"
                          : "text-[#475569]"
                      }`}
                    >
                      {r.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-base font-bold text-[#0f172a]">
                      {r.title}
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] border border-[#e2e8f0] rounded px-2 py-0.5 bg-[#f8fafc]">
                      <Clock size={10} />
                      Awaiting response
                    </span>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    {r.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`${BASE_WDTK}/${r.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] hover:text-[#111827] transition-colors"
                    >
                      View on WhatDoTheyKnow
                      <ExternalLink size={11} />
                    </a>

                    <span className="text-xs text-[#94a3b8]">
                      Response due {r.due}
                    </span>

                    {r.relatedLabel && r.relatedHref && (
                      <Link
                        href={r.relatedHref}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#111827] hover:text-[#374151] transition-colors"
                      >
                        Related: {r.relatedLabel}
                        <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 border-t border-[#e2e8f0] pt-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm text-[#475569] leading-relaxed">
              All requests are publicly visible on{" "}
              <a
                href="https://www.whatdotheyknow.com/user/southport_independent_business_a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111827] hover:underline inline-flex items-center gap-0.5"
              >
                WhatDoTheyKnow
                <ExternalLink size={11} />
              </a>
              . Responses will be published by Sefton Council under their transparency
              obligations and listed publicly there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
