import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock, CheckCircle2, XCircle } from "lucide-react";
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

type FoiRequest = {
  number: string;
  title: string;
  slug: string;
  due: string;
  status: "awaiting" | "received" | "refused" | "partial";
  summary: string;
  relatedLabel: string | null;
  relatedHref: string | null;
  highlight?: boolean;
  response?: {
    date: string;
    outcome: string;
    wdtkResponseUrl?: string;
  };
};

const requests: FoiRequest[] = [
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

function StatusBadge({ status }: { status: FoiRequest["status"] }) {
  if (status === "received") {
    return (
      <span className="inline-flex items-center gap-1 border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-emerald-700">
        <CheckCircle2 size={10} />
        Response received
      </span>
    );
  }
  if (status === "refused") {
    return (
      <span className="inline-flex items-center gap-1 border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-red-700">
        <XCircle size={10} />
        Refused
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="inline-flex items-center gap-1 border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-amber-700">
        <CheckCircle2 size={10} />
        Partial response
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 border border-[#ddddd5] bg-[#f6f6ef] px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
      <Clock size={10} />
      Awaiting response
    </span>
  );
}

export default function FoiPage() {
  const awaiting = requests.filter((r) => r.status === "awaiting").length;
  const responded = requests.filter((r) => r.status !== "awaiting").length;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
          Accountability
        </p>
        <h1 className="mb-6">Freedom of Information Requests</h1>
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-[#3d3d3d]">
          SIBA has submitted {requests.length} Freedom of Information requests
          to Sefton Council under the Freedom of Information Act 2000. Every
          request is publicly listed on WhatDoTheyKnow. Every response will be
          published in full on this platform.
        </p>

        <div className="mb-14 grid max-w-sm grid-cols-3 divide-x divide-[#ddddd5] border border-[#ddddd5] bg-white">
          {[
            { value: String(requests.length), label: "Requests submitted" },
            { value: String(awaiting), label: "Awaiting response" },
            { value: String(responded), label: "Responses received" },
          ].map((s) => (
            <div key={s.label} className="px-5 py-4 text-center">
              <p className="text-xl font-medium text-[#112d6e]">{s.value}</p>
              <p className="mt-0.5 text-xs leading-tight text-[#6b6b6b]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <InvestigationClosed />
        </div>

        <FoiCountdown />

        <div className="mb-10 -mt-6 flex items-start gap-3 border border-[#ddddd5] bg-white px-5 py-4">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#a0a0a0]" />
          <p className="text-xs leading-relaxed text-[#a0a0a0]">
            The countdown above tracks the statutory deadline for FOI requests 1-9 (5-6 May 2026).
            FOI requests 10-15, submitted 8-9 April 2026, have a response deadline of{" "}
            <span className="font-semibold text-[#6b6b6b]">7 May 2026</span>.
          </p>
        </div>

        <div className="mb-14 border-l-2 border-[#112d6e] bg-white p-6">
          <p className="mb-2 text-sm font-medium text-[#1c1c1c]">
            Why we are using FOI
          </p>
          <p className="text-sm leading-relaxed text-[#3d3d3d]">
            The Freedom of Information Act 2000 gives anyone the right to
            request recorded information held by public authorities. Sefton
            Council is a public authority. It funds VisitSouthport.com, collects
            and administers the BID ballot, and employs the officer who runs
            Visit Southport and simultaneously sits on the BID board. These
            requests ask for information that should be a matter of public
            record. SIBA is making it one.
          </p>
        </div>

        <p className="mb-6 text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
          All requests to Sefton Borough Council
        </p>

        <div className="space-y-px">
          {requests.map((r) => (
            <div
              id={r.number}
              key={r.number}
              className={`border-b border-[#ddddd5] bg-white p-6 sm:p-7 ${
                "highlight" in r && r.highlight
                  ? "border-l-2 border-l-[#112d6e]"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#ddddd5] bg-[#f6f6ef]">
                    <span className="text-sm font-medium text-[#6b6b6b]">
                      {r.number}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-base font-medium text-[#1c1c1c]">
                      {r.title}
                    </h2>
                    <StatusBadge status={r.status} />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[#3d3d3d]">
                    {r.summary}
                  </p>

                  {r.response && (
                    <div className="mb-4 border border-[#ddddd5] bg-[#f6f6ef] p-4">
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                        Response received {r.response.date}
                      </p>
                      <p className="text-sm leading-relaxed text-[#3d3d3d]">
                        {r.response.outcome}
                      </p>
                      {r.response.wdtkResponseUrl && (
                        <a
                          href={r.response.wdtkResponseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
                        >
                          Read full response on WhatDoTheyKnow
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`${BASE_WDTK}/${r.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
                    >
                      View on WhatDoTheyKnow
                      <ExternalLink size={11} />
                    </a>

                    <span className="text-xs text-[#a0a0a0]">
                      {r.status === "awaiting" ? `Response due ${r.due}` : `Due date was ${r.due}`}
                    </span>

                    {r.relatedLabel && r.relatedHref && (
                      <Link
                        href={r.relatedHref}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
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

        <div className="mt-14 border-t border-[#ddddd5] pt-10">
          <p className="max-w-2xl text-sm leading-relaxed text-[#3d3d3d]">
            All requests are publicly visible on{" "}
            <a
              href="https://www.whatdotheyknow.com/user/southport_independent_business_a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#2c4a52] hover:underline"
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
  );
}
