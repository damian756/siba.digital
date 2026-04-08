import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Southport's BID Treasurer Is an Active Director of the Town's Biggest Hospitality Group | SIBA",
  description:
    "Companies House confirms Geoffrey Wareham is currently an active director of Mikhail Hotels and Leisure Holdings Limited. He is simultaneously Treasurer of Southport BID. No termination has ever been filed. This analysis documents the structure.",
  alternates: {
    canonical: "https://www.siba.digital/analysis/bid-treasurer-mikhail",
  },
  openGraph: {
    title: "Southport's BID Treasurer Is an Active Director of the Town's Biggest Hospitality Group",
    description:
      "Companies House confirms Geoffrey Wareham is currently an active director of Mikhail Hotels and Leisure Holdings Limited while serving as Treasurer of Southport BID.",
    url: "https://www.siba.digital/analysis/bid-treasurer-mikhail",
    type: "article",
  },
};

const CH_OFFICERS_URL =
  "https://find-and-update.company-information.service.gov.uk/company/10533763/officers";
const BID_TEAM_URL = "https://southportbid.com/our-team/";
const STARS_2025_URL =
  "https://yoursouthport.com/blog/winners-revealed-at-2025-your-southport-stars-awards";
const STARS_2025_BOLD_URL =
  "https://standupforsouthport.com/the-bold-celebrates-winning-southport-hotel-of-the-year-honour-at-your-southport-stars-awards/";
const STARS_2023_URL =
  "https://standupforsouthport.com/southport-market-bar-delighted-to-win-your-southport-stars-bar-of-the-year-award/";
const JAILANDBAIL_URL =
  "https://standupforsouthport.com/mikhail-hotel-and-leisure-group-commercial-director-is-counting-on-your-support-for-queenscourt-jail-and-bail-fundraiser/";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Southport's BID Treasurer Is an Active Director of the Town's Biggest Hospitality Group",
  description:
    "Companies House confirms Geoffrey Wareham is currently an active director of Mikhail Hotels and Leisure Holdings Limited while serving as Treasurer of Southport BID.",
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
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
    logo: { "@type": "ImageObject", url: "https://www.siba.digital/icon.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.siba.digital/analysis/bid-treasurer-mikhail",
  },
};

const mikhailVenues = [
  "The Bold Hotel, Lord Street",
  "The Grand, Lord Street",
  "Lord Street Hotel, Lord Street",
  "Punch Tarmey's Irish Bar, Lord Street",
  "Mavericks, Lord Street",
  "Southport Market Bar",
];

const awardsRows = [
  {
    year: "2023",
    venue: "Southport Market Bar",
    category: "Pub, Bar or Club of the Year",
    result: "Won",
    note: "Public vote. Organised by Southport BID.",
    highlight: false,
  },
  {
    year: "2024",
    venue: "Southport Market Bar",
    category: "Pub, Bar or Club of the Year",
    result: "Won",
    note: "Public vote. Second consecutive win.",
    highlight: false,
  },
  {
    year: "2024",
    venue: "The Bold Hotel",
    category: "Hotel or Guest House of the Year",
    result: "Finalist",
    note: "Public vote.",
    highlight: false,
  },
  {
    year: "2025",
    venue: "The Bold Hotel",
    category: "Hotel or Guest House of the Year",
    result: "Won",
    note: "Business Leaders Award — panel judged, not public vote.",
    highlight: true,
  },
  {
    year: "2025",
    venue: "Lord Street Hotel",
    category: "Hotel or Guest House of the Year",
    result: "Finalist",
    note: "Ceremony held at The Grand, also Mikhail.",
    highlight: true,
  },
];

const loopSteps = [
  {
    step: "01",
    actor: "The levy",
    title: "720 businesses pay a compulsory charge",
    body: "Every business in the BID zone is billed annually. The money goes to the BID board to spend on behalf of the area. No business can opt out. Mikhail Group pays the levy as one of the larger operators on Lord Street.",
    highlight: false,
  },
  {
    step: "02",
    actor: "The board",
    title: "Wareham oversees how the money is spent",
    body: "As Treasurer, he oversees BID finances and sits on the board that decides where the levy goes. His day job is Commercial Director of the group that owns six venues in the same area. He is currently listed as an active director of that group's holding company at Companies House.",
    highlight: true,
  },
  {
    step: "03",
    actor: "The collaboration",
    title: "BID and Visit Southport co-produce the town's seasonal marketing",
    body: "The BID's CEO confirmed on the public record that the BID works alongside the Visit Southport team on seasonal marketing content. Visit Southport is the publicly-funded tourism platform operated by Sefton Council. The two organisations jointly shape what visitors find when they look for things to do in Southport.",
    highlight: false,
  },
  {
    step: "04",
    actor: "The promotion",
    title: "The content consistently promotes Mikhail venues",
    body: "Four seasonal pages reviewed. 47 Mikhail venue mentions. Zero independent restaurants. Zero independent pubs. Zero independent cafes. All outbound links are dofollow and pass full SEO authority to the receiving domains.",
    highlight: true,
  },
  {
    step: "05",
    actor: "The awards",
    title: "The BID's own awards publicly validate Mikhail",
    body: "The Stars Awards are run by BID staff, funded by BID budget, and promoted across BID channels. Mikhail's bar won in 2023 and 2024. The panel-judged Hotel of the Year at the 2025 ceremony went to The Bold Hotel. The ceremony itself was held at The Grand, a Mikhail venue.",
    highlight: true,
  },
  {
    step: "06",
    actor: "The visitor",
    title: "Official channels direct visitors into the Mikhail ecosystem",
    body: "A visitor following VisitSouthport's seasonal recommendations can stay at a Mikhail hotel, eat at a Mikhail venue, and drink at a Mikhail bar. The publicly-funded infrastructure that is supposed to serve all 720 levy payers consistently routes visitors to the same commercial group.",
    highlight: false,
  },
];

const questions = [
  "Has Wareham declared his Mikhail Holdings directorship to the BID board as a formal conflict of interest, separately from his employment as Commercial Director?",
  "At which BID board meetings, if any, has Wareham declared a conflict and recused himself from discussion or vote?",
  "Was Wareham involved in the selection of The Grand as the venue for the 2025 Stars Awards ceremony, where his employer's own hotel won the panel-judged Hotel of the Year?",
  "Who sat on the Business Leaders Award judging panel at the 2025 Stars Awards, and did Wareham have any role in selecting or briefing them?",
  "Why has no TM01 been filed to notify Companies House of any change to Wareham's directorship, despite the 2024 annual accounts not listing him as a director?",
  "What steps has Sefton Council taken in its capacity as BID ballot administrator to satisfy itself that governance conflicts on the BID board are properly managed?",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
      <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">{children}</h2>
    </div>
  );
}

export default function BidTreasurerMikhailPage() {
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
            href="/analysis"
            className="inline-flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Analysis
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-orange">Governance</span>
            <span className="badge badge-navy">Conflicts of Interest</span>
            <span className="text-xs text-[#94a3b8]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
            Southport&apos;s BID Treasurer is an active director of the town&apos;s biggest
            hospitality group
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            Companies House confirms Geoffrey Wareham is currently a registered active director of
            Mikhail Hotels and Leisure Holdings Limited. He is simultaneously the Treasurer of
            Southport BID. No termination has ever been filed. This analysis documents what that
            means.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2.5 items-start">
            <AlertTriangle size={14} className="text-[#94a3b8] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Every factual claim in this analysis is sourced from publicly available documents,
              linked directly below. SIBA does not allege misconduct by any individual. SIBA
              welcomes corrections or responses from any party named and will publish them in full
              at{" "}
              <a href="mailto:damian@siba.digital" className="underline hover:text-[#64748b]">
                damian@siba.digital
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="sticky top-16 z-10 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {[
              { href: "#summary", label: "Plain terms" },
              { href: "#roles", label: "The roles" },
              { href: "#register", label: "Companies House" },
              { href: "#venues", label: "The venues" },
              { href: "#awards", label: "The awards" },
              { href: "#loop", label: "The loop" },
              { href: "#accountability", label: "The gap" },
              { href: "#impact", label: "Levy payers" },
              { href: "#questions", label: "Questions" },
              { href: "#foi", label: "FOI" },
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

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Plain language summary */}
        <section id="summary" className="scroll-mt-32">
          <div className="rounded-xl bg-[#0f172a] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Info size={14} className="text-[#f97316] flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
                What this article is about
              </p>
            </div>
            <div className="space-y-3 text-[#cbd5e1] text-sm leading-relaxed">
              <p>
                Southport BID is a local business organisation funded by a compulsory charge on
                town centre businesses. Around 720 businesses pay it. The money is used to promote
                Southport, run events, and market the town. Businesses have no choice but to pay.
              </p>
              <p>
                The BID has a Treasurer. His job is to oversee how the money is managed. He sits
                on the board. He is involved in financial decisions.
              </p>
              <p>
                That Treasurer also works for the biggest hotel and bar company operating in
                Southport. His employer owns six venues in the same town centre. All of them pay
                the same BID levy. All of them benefit from the same BID promotion and events.
              </p>
              <p>
                On top of his day job, the official Companies House register shows him as a
                currently{" "}
                <span className="text-white font-semibold">active director</span> of that
                company. Under UK company law, a director has a legal duty to act in the
                interests of that company. He holds that legal duty to his employer while
                simultaneously overseeing the finances of a body that spends money in ways that
                affect that employer.
              </p>
              <p>
                No paperwork has ever been filed at Companies House to say this directorship has
                ended.
              </p>
              <p className="text-[#94a3b8] text-xs pt-2 border-t border-[#1e293b]">
                The detail below is thorough because the evidence needs to be thorough. Every claim
                links to a primary source. Use the navigation above to skip to the section most
                relevant to you.
              </p>
            </div>
          </div>
        </section>

        {/* Opening */}
        <div className="space-y-4 text-[#475569] leading-relaxed">
          <p>
            The Southport BID&apos;s own website lists its board of directors publicly. Under the
            name Geoff Wareham, it states his role as Treasurer and his employment as{" "}
            <strong className="text-[#0f172a]">
              &ldquo;Commercial Director, Mikhail Hotel and Leisure Group.&rdquo;
            </strong>
          </p>
          <p>
            This is not hidden. The BID chose to publish it. What has not been established
            publicly is what governance steps were taken as a result of this combination of roles,
            and whether those steps were adequate. This analysis examines the structure and asks
            the questions it creates.
          </p>
        </div>

        <div className="border-t border-[#e2e8f0]" />

        {/* The Roles */}
        <section id="roles" className="scroll-mt-32 space-y-5">
          <SectionHeading>Three roles. One person.</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            The following are confirmed by primary public sources.
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Geoffrey Richard George Wareham — confirmed roles, April 2026
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Role</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a] hidden sm:table-cell">
                    Organisation
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a] hidden sm:table-cell">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                <tr className="hover:bg-[#f8fafc]">
                  <td className="px-5 py-3 font-semibold text-[#0f172a]">Treasurer</td>
                  <td className="px-5 py-3 text-[#475569] hidden sm:table-cell">Southport BID</td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={BID_TEAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f97316] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      BID Our Team <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-[#f8fafc]">
                  <td className="px-5 py-3 font-semibold text-[#0f172a]">Commercial Director</td>
                  <td className="px-5 py-3 text-[#475569] hidden sm:table-cell">
                    Mikhail Hotel and Leisure Group
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={BID_TEAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f97316] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      BID Our Team <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
                <tr className="bg-[#fff7ed]">
                  <td className="px-5 py-3 font-semibold text-[#0f172a]">
                    Active Director
                    <span className="ml-2 inline-flex items-center rounded-full bg-[#f97316] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest">
                      Live
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[#475569] hidden sm:table-cell">
                    Mikhail Hotels and Leisure Holdings Limited (10533763)
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={CH_OFFICERS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f97316] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      Companies House <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Companies House today */}
        <section id="register" className="scroll-mt-32 space-y-5">
          <SectionHeading>What Companies House shows today</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            The following is taken directly from the People register for Mikhail Hotels and Leisure
            Holdings Limited (company number 10533763), as it appears on the Companies House
            website on 8 April 2026.
          </p>

          <div className="rounded-xl border-2 border-[#0f172a] bg-white overflow-hidden">
            <div className="bg-[#0f172a] px-6 py-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f97316] mb-0.5">
                Companies House — Live Register
              </p>
              <p className="text-xs text-[#94a3b8]">
                Mikhail Hotels and Leisure Holdings Limited · Company 10533763
              </p>
            </div>
            <div className="px-6 py-5 divide-y divide-[#e2e8f0]">
              <div className="pb-4">
                <p className="text-base font-bold text-[#0f172a]">
                  WAREHAM, Geoffrey Richard George
                </p>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Role", value: "Director", highlight: false },
                    {
                      label: "Status",
                      value: "Active",
                      highlight: true,
                    },
                    { label: "Appointed", value: "1 January 2022", highlight: false },
                    { label: "Date of birth", value: "July 1980", highlight: false },
                    { label: "Nationality", value: "English", highlight: false },
                    { label: "Resigned", value: "No filing made", highlight: true },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className={`rounded-lg px-3 py-2 ${
                        f.highlight ? "bg-[#fff7ed] border border-[#fed7aa]" : "bg-[#f8fafc]"
                      }`}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                        {f.label}
                      </p>
                      <p
                        className={`text-sm font-semibold mt-0.5 ${
                          f.highlight ? "text-[#f97316]" : "text-[#0f172a]"
                        }`}
                      >
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex items-start gap-3">
                <AlertTriangle size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Sheldon, Stephen is the only resignation on this register (resigned 1 December
                    2023, TM01 filed 10 May 2024, five months late). No TM01 has ever been filed
                    for Wareham. Under section 167 of the Companies Act 2006, a company must
                    notify Companies House within 14 days of a director leaving office.
                  </p>
                  <a
                    href={CH_OFFICERS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#f97316] hover:underline"
                  >
                    Verify at Companies House <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#475569] leading-relaxed">
            The 2024 annual accounts for Mikhail Hotels and Leisure Holdings Limited (filed
            September 2025, covering the year ended 31 December 2024) do not list Wareham as a
            director. The Companies House People register has not been updated to reflect this.
            The two records are in conflict. Until a TM01 is filed, the official legal register
            shows him as a current director.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Mikhail's footprint */}
        <section id="venues" className="scroll-mt-32 space-y-5">
          <SectionHeading>Mikhail&apos;s footprint in the BID area</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            Mikhail Hotel and Leisure Group operates the following venues within the Southport BID
            levy zone. Every one of them is a levy-paying business. Every one of them benefits
            from the BID promotional activity overseen by the group&apos;s own Commercial Director
            in his capacity as Treasurer.
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Mikhail Group venues in the BID zone
              </p>
            </div>
            <ul className="divide-y divide-[#e2e8f0]">
              {mikhailVenues.map((v) => (
                <li
                  key={v}
                  className="px-5 py-3 flex items-center gap-3 text-sm text-[#0f172a] hover:bg-[#f8fafc]"
                >
                  <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                  {v}
                </li>
              ))}
            </ul>
            <div className="px-5 py-3 bg-[#f8fafc] border-t border-[#e2e8f0]">
              <p className="text-xs text-[#94a3b8]">
                Six venues. Group revenues reported at over £20.7 million annually. The dominant
                hospitality operator in Southport town centre.
              </p>
            </div>
          </div>

          <p className="text-sm text-[#475569] leading-relaxed">
            These venues compete directly with independent hotels, bars, and restaurants that also
            pay BID levy and have no director-level representation on the BID board. The
            person overseeing the BID&apos;s finances holds a legal directorial duty to the group
            that owns the dominant hospitality portfolio in the same area.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Stars Awards */}
        <section id="awards" className="scroll-mt-32 space-y-5">
          <SectionHeading>The BID&apos;s own awards</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            Southport BID organises the Your Southport Stars Awards annually. The awards are run
            by BID staff, funded by BID budget, and promoted across BID channels. They represent
            one of the BID&apos;s most prominent outputs.
          </p>
          <p className="text-[#475569] leading-relaxed">
            The following is the record of Mikhail Group venues across three award cycles, sourced
            from published results.
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Mikhail venues in Your Southport Stars Awards: 2023, 2024, 2025
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Year</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Venue</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Category</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0]">
                  {awardsRows.map((row, i) => (
                    <tr
                      key={i}
                      className={row.highlight ? "bg-[#fff7ed]" : "hover:bg-[#f8fafc]"}
                    >
                      <td className="px-5 py-3 text-[#475569] font-mono text-xs">{row.year}</td>
                      <td className="px-5 py-3 font-medium text-[#0f172a]">{row.venue}</td>
                      <td className="px-5 py-3 text-[#475569]">{row.category}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                            row.result === "Won"
                              ? "bg-[#fff7ed] text-[#f97316]"
                              : "bg-[#f1f5f9] text-[#64748b]"
                          }`}
                        >
                          {row.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-[#e2e8f0] bg-[#f8fafc] space-y-1">
              <p className="text-xs text-[#94a3b8]">
                2023 and 2024 results are People&apos;s Choice awards based on public vote.
                The 2025 Business Leaders Award for Hotel of the Year was decided by a judging
                panel whose composition has not been published. The composition of that panel is
                a governance question, not an accusation.
              </p>
              <p className="text-xs text-[#94a3b8]">
                The 2025 ceremony was held at The Grand, Lord Street, Southport. The Grand is a
                Mikhail Hotel and Leisure Group venue. It was simultaneously nominated in the
                Restaurant of the Year category at that same ceremony.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={STARS_2023_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] border border-[#e2e8f0] rounded px-3 py-1.5 bg-white hover:bg-[#f8fafc] transition-colors"
            >
              2023 awards source <ExternalLink size={10} />
            </a>
            <a
              href={STARS_2025_BOLD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] border border-[#e2e8f0] rounded px-3 py-1.5 bg-white hover:bg-[#f8fafc] transition-colors"
            >
              2025 awards source <ExternalLink size={10} />
            </a>
            <a
              href={STARS_2025_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] border border-[#e2e8f0] rounded px-3 py-1.5 bg-white hover:bg-[#f8fafc] transition-colors"
            >
              Full 2025 winners list <ExternalLink size={10} />
            </a>
          </div>

          <p className="text-sm text-[#475569] leading-relaxed">
            No allegation is made that Wareham influenced the outcome of any award. The question
            the structure creates is this: what steps were taken to ensure the BID Treasurer had
            no involvement in awards administration, shortlisting, venue selection, or panel
            appointments, given that his employer&apos;s venues were nominees or winners in every
            year of the awards&apos; existence?
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The full loop */}
        <section id="loop" className="scroll-mt-32 space-y-7">
          <SectionHeading>The full loop: what the structure produces</SectionHeading>

          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Each element documented in this analysis operates within a larger structure. When
              assembled, the picture is a closed loop: the levy funds the infrastructure, the
              infrastructure promotes the dominant operator, and the dominant operator&apos;s director
              oversees the fund. No single step requires deliberate coordination. The structure
              produces the outcome automatically.
            </p>
            <p>
              The diagram below traces how levy money flows into promotion, how that promotion
              consistently advantages one commercial group, and how that group&apos;s director sits at
              the point of governance where the fund is managed.
            </p>
          </div>

          {/* Flow diagram */}
          <div>
            {loopSteps.map((s, i) => (
              <div key={i}>
                <div
                  className={`rounded-xl border p-5 flex gap-4 ${
                    s.highlight
                      ? "bg-[#fff7ed] border-[#fed7aa]"
                      : "bg-white border-[#e2e8f0]"
                  }`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f172a] text-xs font-bold text-white">
                      {s.step}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] mb-0.5">
                      {s.actor}
                    </p>
                    <p className="text-sm font-semibold text-[#0f172a] mb-1.5">{s.title}</p>
                    <p className="text-sm text-[#475569] leading-relaxed">{s.body}</p>
                  </div>
                </div>
                <div className="flex justify-start pl-[1.1rem] py-1">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-px h-3 bg-[#cbd5e1]" />
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#cbd5e1]" />
                  </div>
                </div>
              </div>
            ))}

            {/* Loop back node */}
            <div className="rounded-xl bg-[#0f172a] p-5 flex gap-4 items-start">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f97316] text-white text-base font-bold leading-none">
                  ↻
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] mb-0.5">
                  The cycle
                </p>
                <p className="text-sm font-semibold text-white mb-1.5">
                  Reinforces at the next ballot
                </p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Mikhail&apos;s public profile grows through award wins and editorial coverage.
                  Independent competitors remain invisible on the official platform. The BID
                  renews. Wareham&apos;s board seat continues. The levy is collected again. The
                  loop continues from step 01.
                </p>
              </div>
            </div>
          </div>

          {/* Hospitality ecosystem map */}
          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-4 bg-[#0f172a]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f97316] mb-0.5">
                The Mikhail hospitality ecosystem: Southport town centre
              </p>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                A visitor following VisitSouthport&apos;s recommendations can complete their entire
                stay within this single group&apos;s portfolio. Accommodation. Food. Drink. Events.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e2e8f0]">
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
                  Sleep
                </p>
                <div className="space-y-2.5">
                  {[
                    { name: "The Bold Hotel", note: "Hotel of Year 2025 (panel)" },
                    { name: "The Grand", note: "2025 ceremony venue" },
                    { name: "Lord Street Hotel", note: "2025 finalist" },
                  ].map((v) => (
                    <div key={v.name}>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
                        <p className="text-sm font-medium text-[#0f172a]">{v.name}</p>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] ml-3.5">{v.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
                  Drink
                </p>
                <div className="space-y-2.5">
                  {[
                    { name: "Southport Market Bar", note: "Bar of Year 2023 and 2024" },
                    { name: "Punch Tarmey\u2019s", note: "2025 Awards nominee" },
                    { name: "Mavericks", note: "2025 Awards nominee" },
                  ].map((v) => (
                    <div key={v.name}>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
                        <p className="text-sm font-medium text-[#0f172a]">{v.name}</p>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] ml-3.5">{v.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
                  Eat and socialise
                </p>
                <div className="space-y-2.5">
                  {[
                    { name: "Southport Market", note: "Street food hall" },
                    { name: "The Grand restaurant", note: "2025 Restaurant nominee" },
                    { name: "The Bold restaurant", note: "Lord Street" },
                  ].map((v) => (
                    <div key={v.name}>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
                        <p className="text-sm font-medium text-[#0f172a]">{v.name}</p>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] ml-3.5">{v.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 py-3 bg-[#fff7ed] border-t border-[#fed7aa]">
              <p className="text-xs text-[#475569] leading-relaxed">
                This is not a criticism of Mikhail Group&apos;s investment in Southport or the quality of
                its venues. It is a description of a market structure in which the publicly-funded
                promotional infrastructure consistently routes visitors to one commercial group,
                while the director who oversees that infrastructure&apos;s finances is that group&apos;s own
                Commercial Director.
              </p>
            </div>
          </div>

          <p className="text-sm text-[#475569] leading-relaxed">
            The 720 levy-paying businesses financing this system include Mikhail&apos;s direct
            competitors. Independent hotels competing for the same guests. Independent bars
            competing for the same customers. They fund the awards that consistently validate their
            competitor. They fund the seasonal content that never mentions them. They fund the
            infrastructure that routes visitors to the venues owned by the group whose director
            oversees the fund.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The accountability gap */}
        <section id="accountability" className="scroll-mt-32 space-y-5">
          <SectionHeading>The accountability gap</SectionHeading>

          <p className="text-[#475569] leading-relaxed">
            There are two specific gaps in public accountability here. Neither is a matter of
            speculation. Both can be verified.
          </p>

          <div className="space-y-4">
            <div className="card bg-white p-6 border-l-4 border-l-[#0f172a]">
              <p className="text-sm font-bold text-[#0f172a] mb-2">1. The interest register is not public</p>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                The BID&apos;s website states: &ldquo;Southport BID operates a robust policy where
                any pecuniary and personal interests related to BID activities and decisions of
                board members or employees are recorded. To view the policy and/or the records,
                please contact us.&rdquo;
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                The register exists. It is not published. The 720 levy-paying businesses who fund
                the BID have no way to verify what has been declared, what decisions Wareham has
                participated in, or whether he has recused himself from any matter touching on
                Mikhail Group interests. They must make a direct request to the BID to find out
                anything.
              </p>
            </div>

            <div className="card bg-white p-6 border-l-4 border-l-[#f97316]">
              <p className="text-sm font-bold text-[#0f172a] mb-2">
                2. No TM01 has ever been filed
              </p>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                The one resignation in the Mikhail Holdings filing history, Stephen Sheldon
                (resigned 1 December 2023), was notified to Companies House via TM01 on
                10 May 2024 — five months late. The company is aware of the obligation.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                No TM01 has ever been filed for Wareham. The 2024 annual accounts do not list him
                as a director, but the official Companies House People register currently shows
                his role as{" "}
                <strong className="text-[#0f172a]">Active</strong>. Until a TM01 is filed, the
                official legal register records him as a current director of Mikhail Holdings while
                he simultaneously serves as BID Treasurer. The discrepancy between the accounts and
                the register requires a TM01 to resolve it.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Effect on levy payers */}
        <section id="impact" className="scroll-mt-32 space-y-5">
          <SectionHeading>What this means for the other 720 businesses</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Every levy-paying business in the BID area contributes to a fund whose Treasurer
              holds a directorial duty, and an employed commercial role, at the dominant
              hospitality group in the same area. The businesses that compete directly with
              Mikhail venues have no director on the board and no visibility into how this
              arrangement is being managed.
            </p>
            <p>
              Consider a small independent hotel on Lord Street. It pays between £500 and £2,400
              or more per year in BID levy, depending on its rateable value. It competes for
              guests directly with The Bold Hotel, The Grand, and Lord Street Hotel, all owned by
              Mikhail. The person overseeing the finances of the body that collects that levy is
              the Commercial Director and a registered director of the group that owns all three
              competitor hotels.
            </p>
            <p>
              Consider an independent bar in the town centre. It competes with Punch Tarmey&apos;s,
              Mavericks, and Southport Market Bar, all Mikhail venues. The BID&apos;s Stars Awards,
              funded by the levy, went to Mikhail&apos;s bar in both 2023 and 2024. The 2025
              ceremony was hosted by a Mikhail venue.
            </p>
            <p>
              The problem is not necessarily that harm has been caused. The problem is that the
              structure makes it impossible to verify that it has not. An unpublished interest
              register and unminuted board meetings mean that no levy-paying business can satisfy
              itself that its money is being governed without conflict.
            </p>
          </div>

          {/* Companion pieces */}
          <div className="rounded-lg bg-[#f8fafc] border border-[#e2e8f0] p-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
              Related analysis
            </p>
            <p className="text-xs text-[#64748b]">
              The governance pattern described here sits alongside two other documented structural
              problems at Southport BID and Visit Southport.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <Link
                href="/reports/mark-catherall-visit-southport"
                className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0f172a] hover:bg-white transition-colors"
              >
                Report 02: The council officer running Visit Southport
                <ArrowRight size={11} />
              </Link>
              <Link
                href="/analysis/selective-promotion"
                className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0f172a] hover:bg-white transition-colors"
              >
                Which businesses does VisitSouthport.com promote?
                <ArrowRight size={11} />
              </Link>
              <Link
                href="/analysis/bid-cronyism-by-design"
                className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0f172a] hover:bg-white transition-colors"
              >
                How BIDs breed cronyism by design
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Questions */}
        <section id="questions" className="scroll-mt-32 space-y-5">
          <SectionHeading>The questions</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            SIBA cannot answer the following. Southport BID, Sefton Council, and Geoffrey Wareham
            can.
          </p>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="card bg-white p-5 flex gap-4">
                <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded bg-[#f1f5f9] text-xs font-bold text-[#475569]">
                  {i + 1}
                </span>
                <p className="text-sm text-[#475569] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* FOI */}
        <section id="foi" className="scroll-mt-32 space-y-5">
          <SectionHeading>Active FOI request</SectionHeading>
          <p className="text-[#475569] leading-relaxed">
            SIBA has submitted a formal Freedom of Information request to Sefton Council directly
            relevant to the questions raised here. The response will be published in full,
            unedited.
          </p>
          <Link
            href="/foi#10"
            className="card bg-white p-5 flex items-center gap-4 hover:bg-[#f8fafc] transition-colors block"
          >
            <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa] text-sm font-bold text-[#f97316]">
              10
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0f172a]">
                FOI 10: BID Board Members&apos; Declarations of Interest and Outside
                Directorships
              </p>
              <p className="text-xs text-[#94a3b8] mt-0.5">Response due 7 May 2026</p>
            </div>
            <ArrowRight size={14} className="text-[#cbd5e1] flex-shrink-0" />
          </Link>

          <p className="text-sm text-[#64748b] leading-relaxed">
            SIBA has submitted 14 Freedom of Information requests to Sefton Council in total,
            covering BID governance, public spending, and tourism platform management.{" "}
            <Link href="/foi" className="text-[#f97316] hover:underline">
              View all FOI requests.
            </Link>
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Right of reply */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
            Right of reply
          </p>
          <p className="text-sm text-[#475569] leading-relaxed">
            If you are Geoffrey Wareham, a representative of Southport BID, Mikhail Hotel and
            Leisure Group, or Sefton Council and you wish to respond to any aspect of this
            analysis, contact{" "}
            <a href="mailto:damian@siba.digital" className="text-[#f97316] hover:underline">
              damian@siba.digital
            </a>
            . Responses will be published in full without editing. The right of reply is open
            without time limit.
          </p>
          <p className="text-sm text-[#64748b] leading-relaxed">
            If you are a Southport business with information relevant to BID governance or
            spending decisions, you can contact SIBA in strict confidence at the same address.
          </p>
        </section>

      </div>
    </div>
  );
}
