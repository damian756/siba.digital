import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle } from "lucide-react";
import InvestigationClosed from "@/components/InvestigationClosed";

export const metadata: Metadata = {
  title: "The Council Officer Running Southport's Tourism Platform | SIBA Reports",
  description:
    "Mark Catherall is Sefton Council's Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council's formally appointed representative. This report documents the structure.",
  alternates: {
    canonical: "https://www.siba.digital/reports/mark-catherall-visit-southport",
  },
  openGraph: {
    title: "The Council Officer Running Southport's Tourism Platform",
    description:
      "Mark Catherall is Sefton Council's Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council's formally appointed representative. This report documents the structure.",
    url: "https://www.siba.digital/reports/mark-catherall-visit-southport",
    type: "article",
  },
};

const MODGOV_URL = "https://modgov.sefton.gov.uk/mgAi.aspx?ID=63615";
const BID_TEAM_URL = "https://southportbid.com/our-team/";
const LINKEDIN_URL = "https://uk.linkedin.com/in/mark-catherall-79644830";
const LCRDP_URL =
  "https://liverpoolcityregiondp.com/2025/09/16/southport-leaders-in-conversation-rachel-fitzgerald-and-mark-catherall-on-the-towns-incredible-future/";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Council Officer Running Southport's Tourism Platform",
  description:
    "Mark Catherall is Sefton Council's Service Manager for Tourism. He runs Visit Southport and sits on the BID board as the council's formally appointed representative.",
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
  author: {
    "@type": "Organization",
    "@id": "https://www.siba.digital/#organization",
    name: "SIBA Digital",
    url: "https://www.siba.digital",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.siba.digital/#organization",
    name: "SIBA Digital",
    logo: {
      "@type": "ImageObject",
      url: "https://www.siba.digital/icon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.siba.digital/reports/mark-catherall-visit-southport",
  },
};

const careerRows = [
  {
    period: "Sep 2005 – Sep 2007",
    role: "Townscape Heritage Initiative Officer",
    highlight: false,
  },
  {
    period: "Oct 2007 – May 2013",
    role: "Principal Development Officer",
    highlight: false,
  },
  {
    period: "May 2013 – Sep 2014",
    role: "BID Development Manager",
    highlight: true,
  },
  {
    period: "Sep 2014 – present",
    role: "Service Manager – Tourism",
    highlight: true,
  },
];

const questions = [
  "Is Mr Catherall's role on the BID board considered part of his formal Sefton Council duties, or an outside appointment? If the latter, was it declared and approved through the council's outside interest process?",
  "Has Mr Catherall declared his BID board directorship in Sefton Council's register of officers' interests? If so, when was it declared, and who approved the arrangement?",
  "In his capacity as a BID board member, does Mr Catherall declare his council role as the officer who leads Visit Southport when decisions are made about BID promotional spending?",
  "Does Sefton Council provide any direct or indirect financial support to Visit Southport, whether as part of Catherall's salary cost, through a grant, a service level agreement, or any other mechanism?",
  "What oversight, if any, does Sefton Council exercise over the editorial and commercial decisions made through Visit Southport, given that it operates as a council tourism service?",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#1c1c1c]" />
      <h2 className="text-2xl font-bold text-[#1c1c1c] tracking-tight">{children}</h2>
    </div>
  );
}

export default function CaterallReportPage() {
  return (
    <div className="min-h-screen bg-[#eeeee6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <div className="bg-white border-b border-[#ddddd5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          <Link
            href="/reports"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Reports
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-navy">Governance</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a0a0a0] border border-[#ddddd5] rounded px-2 py-0.5 bg-[#eeeee6]">
              Report 02 of an ongoing investigation
            </span>
            <span className="text-xs text-[#a0a0a0]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-4 leading-tight">
            The council officer running Southport&apos;s tourism platform
          </h1>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            Mark Catherall is Sefton Council&apos;s Service Manager for Tourism. He runs Visit
            Southport. He sits on the BID board as the council&apos;s formally appointed
            representative. He helped design the BID before moving into his current post. This
            report documents the structure and asks the questions that follow from it.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#eeeee6] border-b border-[#ddddd5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2.5 items-start">
            <AlertTriangle size={14} className="text-[#a0a0a0] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#a0a0a0] leading-relaxed">
              Every factual claim in this report is sourced from publicly available documents,
              linked directly below. SIBA does not allege misconduct by any individual. SIBA
              welcomes corrections or responses from any party named and will publish them in full
              at{" "}
              <a
                href="mailto:damian@siba.digital"
                className="underline hover:text-[#6b6b6b]"
              >
                damian@siba.digital
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Investigation closed */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6">
        <InvestigationClosed />
      </div>

      {/* Sticky nav */}
      <div className="sticky top-16 z-10 bg-[#1c1c1c] border-b border-[#2a2a2a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-1 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1c1c1c] pr-3 mr-1 border-r border-[#3d3d3d] flex-shrink-0">
              Jump to
            </span>
            {[
              { href: "#roles", label: "The roles" },
              { href: "#career", label: "Career" },
              { href: "#structure", label: "What this creates" },
              { href: "#interests", label: "Declared interests" },
              { href: "#questions", label: "Questions" },
              { href: "#foi", label: "FOI" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 px-2.5 py-1 text-xs font-semibold text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Intro */}
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
          <p>
            Sefton Council has one officer responsible for tourism in Southport. He has held that
            role for over a decade. In that time, he has run the council&apos;s Visit Southport
            platform, sat on the board of the Southport BID as the council&apos;s formally
            appointed representative, and before all of that, spent over a year as the
            council&apos;s own BID Development Manager, helping design the BID in the first place.
          </p>
          <p>
            His name is Mark Catherall. His title is Service Manager – Tourism at Sefton
            Metropolitan Borough Council. These facts are not in dispute. They appear on the
            BID&apos;s own website, in Sefton Council&apos;s publicly available committee minutes,
            and on his LinkedIn profile. None of it is hidden.
          </p>
          <p>
            What this report examines is the governance structure that results from combining these
            roles, and the questions that structure requires to be answered publicly.
          </p>
        </div>

        <div className="border-t border-[#ddddd5]" />

        {/* The Roles */}
        <section id="roles" className="scroll-mt-32 space-y-5">
          <SectionHeading>The roles</SectionHeading>
          <p className="text-[#4a4a4a] leading-relaxed">
            Mark Catherall holds three overlapping positions, all confirmed by publicly available
            primary sources.
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#eeeee6] border-b border-[#ddddd5]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a0a0a0]">
                Confirmed roles, April 2026
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#ddddd5]">
                  <th className="text-left px-5 py-3 font-semibold text-[#1c1c1c]">Role</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#1c1c1c]">Organisation</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#1c1c1c] hidden sm:table-cell">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ddddd5]">
                <tr className="hover:bg-[#eeeee6]">
                  <td className="px-5 py-3 text-[#1c1c1c] font-medium">
                    Service Manager – Tourism
                  </td>
                  <td className="px-5 py-3 text-[#4a4a4a]">
                    Sefton Metropolitan Borough Council
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      LinkedIn <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-[#eeeee6]">
                  <td className="px-5 py-3 text-[#1c1c1c] font-medium">Leads Visit Southport</td>
                  <td className="px-5 py-3 text-[#4a4a4a]">Sefton Council tourism service</td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={LCRDP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      LCRDP interview <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-[#eeeee6]">
                  <td className="px-5 py-3 text-[#1c1c1c] font-medium">
                    Board director (council representative)
                  </td>
                  <td className="px-5 py-3 text-[#4a4a4a]">Southport BID</td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <a
                      href={MODGOV_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5 text-xs"
                    >
                      Sefton cabinet minutes <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-5 pb-4 pt-2 border-t border-[#ddddd5]">
              <p className="text-xs text-[#a0a0a0]">
                Sources:{" "}
                <a
                  href={MODGOV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
                >
                  Sefton Council committee minutes <ExternalLink size={10} />
                </a>
                {" · "}
                <a
                  href={BID_TEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
                >
                  Southport BID &ldquo;Our Team&rdquo; <ExternalLink size={10} />
                </a>
                {" · "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
                >
                  Mark Catherall LinkedIn <ExternalLink size={10} />
                </a>
              </p>
            </div>
          </div>

          <div className="card bg-white p-6 border-l-4 border-l-[#1c1c1c]">
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              His BID board appointment is not informal. It is listed in Sefton Council&apos;s
              committee minutes as an &ldquo;Officer Only Appointment&rdquo; approved by cabinet:
            </p>
            <blockquote className="mt-4 pl-4 border-l-2 border-[#ddddd5]">
              <p className="text-sm font-medium text-[#1c1c1c] italic">
                &ldquo;Southport Business Improvement District (BID) Board: 1 Service Manager –
                Tourism (Mark Catherall)&rdquo;
              </p>
            </blockquote>
            <p className="text-xs text-[#a0a0a0] mt-3">
              Source:{" "}
              <a
                href={MODGOV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
              >
                Sefton Council modgov, Officer Outside Body Appointments{" "}
                <ExternalLink size={10} />
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Career */}
        <section id="career" className="scroll-mt-32 space-y-5">
          <SectionHeading>Twenty years in the same building</SectionHeading>
          <p className="text-[#4a4a4a] leading-relaxed">
            Mark Catherall has worked at Sefton Council since at least 2005. His LinkedIn profile,
            which is publicly visible, records the following progression:
          </p>

          <div className="card bg-white overflow-hidden">
            <div className="px-5 py-3 bg-[#eeeee6] border-b border-[#ddddd5]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a0a0a0]">
                Career history at Sefton Council
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#ddddd5]">
                  <th className="text-left px-5 py-3 font-semibold text-[#1c1c1c]">Period</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#1c1c1c]">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ddddd5]">
                {careerRows.map((row) => (
                  <tr
                    key={row.period}
                    className={row.highlight ? "bg-[#eeeee6]" : "hover:bg-[#eeeee6]"}
                  >
                    <td className="px-5 py-3 text-[#4a4a4a] text-xs font-mono">{row.period}</td>
                    <td
                      className={`px-5 py-3 ${
                        row.highlight
                          ? "font-semibold text-[#1c1c1c]"
                          : "text-[#4a4a4a]"
                      }`}
                    >
                      {row.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 pb-4 pt-2 border-t border-[#ddddd5]">
              <p className="text-xs text-[#a0a0a0]">
                Source:{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
                >
                  Mark Catherall, LinkedIn <ExternalLink size={10} />
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The BID Development Manager role (May 2013 to September 2014) is significant. In
              that capacity, Catherall worked on establishing the Southport BID. He then moved
              directly into the Service Manager – Tourism role, from which he has since sat on the
              BID board as the council&apos;s representative.
            </p>
            <p>
              He has been involved in Southport BID governance, in one capacity or another, for
              over twelve years. The current BID term runs from November 2024 to November 2029.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* What this creates */}
        <section id="structure" className="scroll-mt-32 space-y-5">
          <SectionHeading>What this structure creates</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Sefton Council operates Visit Southport as its tourism service. It runs
              visitsouthport.com, the primary public-facing platform for Southport tourism.
              Editorial decisions about which businesses are featured on that platform, which events
              are promoted, and how the town is presented to visitors are made from within the
              council&apos;s Tourism Service.
            </p>
            <p>
              The Southport BID collects a compulsory levy from approximately 720 businesses and
              funds promotional activity across the town. Its board makes decisions about how that
              money is spent. The council has one officer seat on that board. The officer who holds
              that seat also controls the council&apos;s own tourism platform.
            </p>
            <p>
              Both primary channels of town centre promotion, the council&apos;s tourism platform
              and the BID&apos;s promotional budget, are therefore governed by or directly
              influenced by the same person, placed there by the same employer.
            </p>
            <p>
              SIBA has separately published an editorial review of visitsouthport.com that
              documents patterns in which businesses the platform promotes and which it does not.
            </p>
          </div>
          <Link
            href="/analysis/selective-promotion"
            className="inline-flex items-center gap-2 rounded-lg border border-[#ddddd5] bg-white px-4 py-2.5 text-xs font-semibold text-[#1c1c1c] hover:bg-[#eeeee6] transition-colors"
          >
            Read: Which Businesses Does VisitSouthport.com Actually Promote?
            <ArrowRight size={12} />
          </Link>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Declared interests */}
        <section id="interests" className="scroll-mt-32 space-y-5">
          <SectionHeading>Declared interests</SectionHeading>

          <div className="card bg-white p-6 border-l-4 border-l-[#ddddd5]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">
              From the Southport BID website
            </p>
            <blockquote>
              <p className="text-sm text-[#1c1c1c] leading-relaxed italic">
                &ldquo;Southport BID operates a robust policy where any pecuniary and personal
                interests related to BID activities and decisions of board members or employees are
                recorded. To view the policy and/or the records, please contact us.&rdquo;
              </p>
            </blockquote>
            <p className="text-xs text-[#a0a0a0] mt-3">
              Source:{" "}
              <a
                href={BID_TEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c1c1c] hover:underline inline-flex items-center gap-0.5"
              >
                Southport BID, Our Team page <ExternalLink size={10} />
              </a>
            </p>
          </div>

          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The register is not published. It is available only on direct request to the BID.
              There is no public searchable record of what has or has not been declared.
            </p>
            <p>
              Sefton Council does not publish a register of officers&apos; outside interests in
              the same publicly searchable form as councillors&apos; declarations. SIBA has no
              visibility into what has been declared by any officer, including Catherall.
            </p>
            <p>
              This report makes no allegation that declarations have not been made. It notes that
              the current arrangements make it impossible for a levy-paying business, or a member
              of the public, to verify that they have.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Questions */}
        <section id="questions" className="scroll-mt-32 space-y-5">
          <SectionHeading>The questions</SectionHeading>
          <p className="text-[#4a4a4a] leading-relaxed">
            SIBA is not in a position to answer the following. Sefton Council and Southport BID
            are.
          </p>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="card bg-white p-5 flex gap-4">
                <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded bg-[#eeeee6] text-xs font-bold text-[#4a4a4a]">
                  {i + 1}
                </span>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* FOI */}
        <section id="foi" className="scroll-mt-32 space-y-5">
          <SectionHeading>Formal requests submitted</SectionHeading>
          <p className="text-[#4a4a4a] leading-relaxed">
            SIBA has submitted two Freedom of Information requests to Sefton Council directly
            relevant to the questions raised in this report. All responses will be published on
            this site in full, unedited.
          </p>

          <p className="text-sm text-[#4a4a4a] leading-relaxed">
            A companion analysis documents a separate but structurally related governance conflict
            at the BID board level.{" "}
            <Link href="/analysis/bid-treasurer-mikhail" className="text-[#1c1c1c] hover:underline">
              Southport&apos;s BID Treasurer is a registered active director of Mikhail Hotels and
              Leisure Holdings Limited
            </Link>{" "}
            while simultaneously overseeing BID finances. Together, these two cases document a
            governance environment where conflicts of interest are managed without public
            transparency.
          </p>

          <div className="space-y-3">
            {[
              {
                number: "04",
                title: "Mark Catherall Register of Interests",
                href: "/foi#04",
                due: "5 May 2026",
              },
              {
                number: "13",
                title: "Employment Arrangements and Outside Role with Visit Southport",
                href: "/foi#13",
                due: "7 May 2026",
              },
            ].map((f) => (
              <Link
                key={f.number}
                href={f.href}
                className="card bg-white p-5 flex items-center gap-4 hover:bg-[#eeeee6] transition-colors block"
              >
                <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#eeeee6] border border-[#ddddd5] text-sm font-bold text-[#1c1c1c]">
                  {f.number}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1c1c1c]">{f.title}</p>
                  <p className="text-xs text-[#a0a0a0] mt-0.5">Response due {f.due}</p>
                </div>
                <ArrowRight size={14} className="text-[#ccccc4] flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Right of reply */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0]">
            Right of reply
          </p>
          <p className="text-sm text-[#4a4a4a] leading-relaxed">
            If you are Mark Catherall, a representative of Sefton Council, Visit Southport, or
            Southport BID and you wish to respond to any aspect of this report, contact{" "}
            <a href="mailto:damian@siba.digital" className="text-[#1c1c1c] hover:underline">
              damian@siba.digital
            </a>
            . Responses will be published in full without editing. The right of reply is open
            without time limit.
          </p>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            If you have information relevant to governance at the BID, Visit Southport, or Sefton
            Council, you can contact SIBA in strict confidence at the same address.
          </p>
        </section>

      </div>
    </div>
  );
}
