import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Southport BID's Contracted Media Partner Is Also Paid by the Town's Dominant Hospitality Group | SIBA",
  description:
    "Andrew Brown's Stand Up For Southport has been contracted by Southport BID since 2021. In a published interview, Brown states he also provides paid media and PR services to the town's dominant hospitality group. He covers both organisations without consistent disclosure. This analysis documents the structure.",
  alternates: {
    canonical: "https://www.siba.digital/reports/andrew-brown-bid-media",
  },
  openGraph: {
    title: "Southport BID's Contracted Media Partner Is Also Paid by the Town's Dominant Hospitality Group",
    description:
      "Andrew Brown's Stand Up For Southport is contracted by Southport BID. In his own words, he also provides paid PR services to the town's dominant hospitality group. Both relationships are documented from public sources.",
    url: "https://www.siba.digital/reports/andrew-brown-bid-media",
    type: "article",
  },
};

const BID_CONTRACT_URL =
  "https://southportbid.com/southport-bid-announces-new-media-partnership-with-stand-up-for-southport/";
const SUFS_ABOUT_URL = "https://standupforsouthport.com/about/";
const MEDIUM_URL =
  "https://medium.com/behind-local-news-uk/with-the-huge-local-following-we-have-now-there-is-a-lot-we-can-achieve-8716ffc9d2a7";
const CH_URL =
  "https://find-and-update.company-information.service.gov.uk/company/12553604";
const BOLD_WIN_URL =
  "https://standupforsouthport.com/the-bold-celebrates-winning-southport-hotel-of-the-year-honour-at-your-southport-stars-awards/";
const STARS_2025_URL =
  "https://standupforsouthport.com/towns-top-businesses-honoured-as-2025-your-southport-stars-awards-winners-and-finalists-revealed/";
const STARS_2026_URL =
  "https://standupforsouthport.com/your-southport-stars-seeks-local-businesses-which-shine-ahead-of-glittering-awards-night/";
const REVENUE_URL =
  "https://standupforsouthport.com/mikhail-hotel-and-leisure-group-reports-50-rise-in-revenues-as-growth-continues";
const INVEST_URL =
  "https://standupforsouthport.com/mikhail-hotel-and-leisure-group-to-invest-further-in-southport-thanks-to-towns-huge-potential/";
const PRIDE_URL =
  "https://standupforsouthport.com/grand-pride-of-sefton-awards-2026-launched-to-celebrate-our-inspiring-community-heroes/";
const WDTK_FOI15 =
  "https://www.whatdotheyknow.com/request/foi_request_15_bid_media_contrac";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Southport BID's Contracted Media Partner Is Also Paid by the Town's Dominant Hospitality Group",
  description:
    "Andrew Brown's Stand Up For Southport has been contracted by Southport BID since 2021. In a published interview, Brown states he also provides paid media and PR services to the town's dominant hospitality group.",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
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
    logo: { "@type": "ImageObject", url: "https://www.siba.digital/icon.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.siba.digital/reports/andrew-brown-bid-media",
  },
};

const coverageRows = [
  {
    date: "Oct 2024",
    headline: "Mikhail Hotel And Leisure Group reports 50% rise in revenues as growth continues",
    url: REVENUE_URL,
    disclosure: "None",
    note: "Promotional financial profile of Mikhail. Byline: Andrew Brown.",
    flagged: true,
  },
  {
    date: "Jan 2026",
    headline: "Mikhail Hotel And Leisure Group to invest further in Southport thanks to town's huge potential",
    url: INVEST_URL,
    disclosure: "None",
    note: "Investment announcement. Byline: Andrew Brown. Contact: mediaandrewbrown@gmail.com.",
    flagged: true,
  },
  {
    date: "Feb 2026",
    headline: "MHALG to appeal decision to decline planning permission for retractable canopy at The Bold",
    url: "https://standupforsouthport.com/mhalg-to-appeal-decision-to-decline-planning-permission-for-retractable-canopy-at-the-bold-in-southport/",
    disclosure: "None",
    note: "Advocacy piece supporting Mikhail planning appeal. No disclosure.",
    flagged: true,
  },
  {
    date: "May 2025",
    headline: "The Bold celebrates winning Southport Hotel of The Year honour at Your Southport Stars Awards",
    url: BOLD_WIN_URL,
    disclosure: "The Bold sponsored feature",
    note: "Dedicated follow-up on Mikhail venue winning BID award. Labelled as a The Bold sponsored feature. Does not disclose the broader ongoing commercial relationship with Mikhail.",
    flagged: false,
  },
  {
    date: "May 2025",
    headline: "Town's top businesses honoured as 2025 Your Southport Stars Awards winners and finalists revealed",
    url: STARS_2025_URL,
    disclosure: "Southport BID sponsored feature",
    note: "Main Stars Awards roundup. Labelled as BID sponsored feature in article header.",
    flagged: false,
  },
];

const questions = [
  "Was the Stand Up For Southport contract put out to competitive tender by Southport BID, or directly awarded? If directly awarded, on what basis?",
  "What is the total value of payments made by Southport BID to Stand Up For Southport Limited (company 12553604) since the contract began in January 2021?",
  "Has Andrew Brown declared his commercial relationship with Mikhail Hotel and Leisure Group to Southport BID as a potential conflict of interest in his role as contracted media partner?",
  "Who within Sefton Council, in its capacity as BID ballot administrator and levy collector, has oversight responsibility for the BID's procurement of media and communications services?",
  "Why is some Stand Up For Southport content labelled as a BID sponsored feature while other BID-related content carries no such label?",
  "Was the decision to hold the 2024 and 2025 Stars Awards at The Grand, a Mikhail venue, made with any involvement from Andrew Brown in his capacity as BID's contracted media partner?",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#1c1c1c]" />
      <h2 className="text-2xl font-bold text-[#1c1c1c] tracking-tight">{children}</h2>
    </div>
  );
}

export default function AndrewBrownBidMediaPage() {
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
            <span className="badge badge-navy">Media Contracts</span>
            <span className="text-xs text-[#a0a0a0]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-4 leading-tight">
            Southport BID&apos;s contracted media partner is also paid by the town&apos;s dominant hospitality group
          </h1>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            Andrew Brown&apos;s Stand Up For Southport has held a paid contract with Southport BID since
            January 2021. In a published interview, Brown states he also provides paid media and PR services
            to the town&apos;s dominant hospitality group. He covers both organisations without consistent
            disclosure of either relationship. This analysis documents what the public record shows.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#eeeee6] border-b border-[#ddddd5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2.5 items-start">
            <AlertTriangle size={14} className="text-[#a0a0a0] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#a0a0a0] leading-relaxed">
              Every factual claim in this analysis is sourced from publicly available documents,
              linked directly below. SIBA does not allege misconduct by any individual. SIBA
              welcomes corrections or responses from any party named and will publish them in full
              at{" "}
              <a href="mailto:damian@siba.digital" className="underline hover:text-[#6b6b6b]">
                damian@siba.digital
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="sticky top-16 z-10 bg-[#1c1c1c] border-b border-[#2a2a2a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-1 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ccccc4] pr-3 mr-1 border-r border-[#3d3d3d] flex-shrink-0">
              Jump to
            </span>
            {[
              { href: "#summary", label: "Plain terms" },
              { href: "#company", label: "The company" },
              { href: "#contract", label: "BID contract" },
              { href: "#mikhail", label: "Mikhail link" },
              { href: "#coverage", label: "The coverage" },
              { href: "#awards", label: "Stars Awards" },
              { href: "#loop", label: "The loop" },
              { href: "#contact-log", label: "8 April" },
              { href: "#foi", label: "FOI 15" },
              { href: "#questions", label: "Questions" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 px-2.5 py-1 text-xs font-semibold text-[#6b6b6b] hover:text-[#3d3d3d] transition-colors"
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
          <div className="rounded-xl bg-[#1c1c1c] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Info size={14} className="text-[#ccccc4] flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#ccccc4]">
                What this article is about
              </p>
            </div>
            <div className="space-y-3 text-[#ccccc4] text-sm leading-relaxed">
              <p>
                Southport BID is funded by a compulsory charge on around 720 town centre businesses.
                Part of that money, allocated under the &ldquo;Promotion&rdquo; budget line, is used to pay
                for media and communications services.
              </p>
              <p>
                Since January 2021, Southport BID has held a contract with Stand Up For Southport
                Limited, a company owned by journalist and PR consultant Andrew Brown. This contract
                is confirmed on the BID&apos;s own website, with a quote from BID CEO Rachel Fitzgerald.
              </p>
              <p>
                In a published interview in November 2024, Andrew Brown stated in his own words that
                he also provides paid media and PR services to Mikhail Hotel and Leisure Group. That
                is the hospitality company whose Chairman is Andrew Mikhail, and whose Commercial
                Director, Geoffrey Wareham, is simultaneously listed as an active director of
                Mikhail&apos;s holding company while serving as Treasurer of Southport BID.
              </p>
              <p>
              Stand Up For Southport publishes promotional content about Mikhail venues and covers
              the BID&apos;s own annual awards, which Mikhail businesses have won and which are held at
              a Mikhail venue. Individual commissioned pieces carry sponsored labels. What is never
              disclosed is the broader, ongoing commercial relationship between the outlet and Mikhail
              as a PR client. News articles about Mikhail are presented as independent editorial.
              </p>
              <p>
                This article documents the structure. SIBA does not allege that any individual has
                acted improperly. SIBA does say that the public record raises questions about
                transparency that levy payers deserve to have answered.
              </p>
            </div>
          </div>
        </section>

        {/* Who Andrew Brown is */}
        <section id="company" className="scroll-mt-32">
          <SectionHeading>The company and the man behind it</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Andrew Edward Brown is a Southport-based journalist and PR consultant with 25 years of
              experience. He was previously an editor at Reach plc, running the Southport Visiter,
              Midweek Visiter, Formby Times, Crosby Herald, and several other regional titles. He was
              made redundant in 2019 when Reach closed the Southport Visiter office.
            </p>
            <p>
              In April 2020, Brown incorporated{" "}
              <strong className="text-[#1c1c1c]">STAND UP FOR SOUTHPORT LIMITED</strong>, company
              number 12553604. He is its sole person with significant control, holding 75% or more of
              the shares and voting rights. He is also the sole director. The company is classified
              under SIC code 96090, Other service activities.
            </p>
            <p>
              The company operates the Stand Up For Southport website and social media channels,
              which have grown to over 60,000 followers. Brown also trades separately as Andrew Brown
              Media, providing freelance writing and PR services.
            </p>
          </div>

          {/* Company card */}
          <div className="mt-6 rounded-lg border border-[#ddddd5] bg-white overflow-hidden">
            <div className="bg-[#eeeee6] border-b border-[#ddddd5] px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0]">
                Companies House Record
              </p>
            </div>
            <div className="px-5 py-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Company name", value: "STAND UP FOR SOUTHPORT LIMITED" },
                { label: "Company number", value: "12553604" },
                { label: "Incorporated", value: "9 April 2020" },
                { label: "Status", value: "Active" },
                { label: "PSC", value: "Andrew Edward Brown" },
                { label: "Nature of control", value: "75%+ shares, voting rights, director appointment" },
              ].map((r) => (
                <div key={r.label}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-0.5">
                    {r.label}
                  </p>
                  <p className="font-semibold text-[#1c1c1c] text-sm leading-snug">{r.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#ddddd5] px-5 py-3">
              <a
                href={CH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors"
              >
                View on Companies House
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* The BID contract */}
        <section id="contract" className="scroll-mt-32">
          <SectionHeading>The BID contract: confirmed since January 2021</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              On 24 January 2021, Southport BID published an announcement on its own website confirming
              a formal contract with Stand Up For Southport. The announcement was simultaneously
              published on the Stand Up For Southport website. Rachel Fitzgerald, BID CEO, is quoted
              directly.
            </p>
          </div>

          {/* Quote block */}
          <div className="mt-6 rounded-lg border-l-4 border-l-[#1c1c1c] bg-white border border-[#ddddd5] px-6 py-5">
            <p className="text-sm text-[#1c1c1c] leading-relaxed italic mb-3">
              &ldquo;Southport BID has now contracted Stand Up For Southport to support its media, PR and
              communications strategy, highlight the BID&apos;s ongoing work and promote local businesses
              in the town.&rdquo;
            </p>
            <p className="text-xs text-[#a0a0a0]">
              Rachel Fitzgerald, CEO, Southport BID. Published on southportbid.com, January 2021.
            </p>
            <a
              href={BID_CONTRACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c1c1c] hover:opacity-80 transition-opacity mt-3"
            >
              Source: southportbid.com
              <ExternalLink size={11} />
            </a>
          </div>

          <div className="mt-5 space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The contract has been in place for over four years. Stand Up For Southport&apos;s own About
              page, currently live, lists Southport BID as a client alongside Southport Market:
            </p>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-l-[#6b6b6b] bg-white border border-[#ddddd5] px-6 py-5">
            <p className="text-sm text-[#1c1c1c] leading-relaxed italic mb-3">
              &ldquo;He launched Stand Up For Southport alongside Phil Gee, providing media, PR, social media
              and marketing services to firms and organisations including Southport Business Improvement
              District (Southport BID) and Southport Market.&rdquo;
            </p>
            <p className="text-xs text-[#a0a0a0]">
              Stand Up For Southport, About page. Sourced April 2026.
            </p>
            <a
              href={SUFS_ABOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c1c1c] hover:opacity-80 transition-opacity mt-3"
            >
              Source: standupforsouthport.com/about
              <ExternalLink size={11} />
            </a>
          </div>

          <div className="mt-5 space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The total value of payments made by Southport BID to Stand Up For Southport Limited over
              four-plus years is not publicly disclosed. Southport BID allocates £150,000 per year to
              its &ldquo;Promotion&rdquo; budget line, described as covering the YourSouthport platform and
              associated marketing. This contract sits within that line. The specific contract value
              is the subject of{" "}
              <Link href="/foi#15" className="text-[#1c1c1c] underline font-semibold">
                FOI Request 15
              </Link>
              .
            </p>
          </div>
        </section>

        {/* The Mikhail relationship */}
        <section id="mikhail" className="scroll-mt-32">
          <SectionHeading>The Mikhail relationship: his own words</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              In November 2024, Andrew Brown gave a detailed interview to Behind Local News, published
              on Medium. Asked about his business model, he described his income sources. What follows
              is a direct, unedited quote.
            </p>
          </div>

          {/* Key quote */}
          <div className="mt-6 rounded-xl bg-[#1c1c1c] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ccccc4] mb-4">
              Andrew Brown, in his own words (November 2024)
            </p>
            <p className="text-[#ddddd5] text-base leading-relaxed italic">
              &ldquo;We provide media and PR services for local businesses, working with the likes of{" "}
              <span className="text-[#eeeee6] font-bold not-italic">Southport BID</span>,
              Southport Flower Show, Southport Comedy Festival,{" "}
              <span className="text-[#eeeee6] font-bold not-italic">
                Mikhail Hotel and Leisure Group
              </span>
              , and others.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-xs text-[#6b6b6b]">
                Behind Local News UK, Medium. Published 3 November 2024.
              </p>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c1c1c] hover:opacity-80 transition-opacity"
              >
                Source
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Brown also confirms the awards co-organisation on the Stand Up For Southport About page,
              currently live:
            </p>
            <blockquote className="border-l-4 border-[#ddddd5] pl-4 text-[#4a4a4a] italic">
              &ldquo;We are proud to co-organise the Grand Pride Of Sefton Awards with Mikhail Hotel And
              Leisure Group which celebrates the amazing people across our borough.&rdquo;
            </blockquote>
            <p>
              The Grand Pride of Sefton Awards is a borough-wide community awards event. It is
              organised jointly by Stand Up For Southport and Mikhail Hotel and Leisure Group, with
              the awards ceremony held at The Grand, a Mikhail venue on Lord Street. Southport BID
              staff have attended the event launch. The BID&apos;s Head of Operations, Luke Randles,
              appeared in the official launch photograph alongside Andrew Brown, Andrew Mikhail, and
              Mikhail&apos;s Head of Marketing.
            </p>
            <p>
              Andrew Brown is therefore simultaneously contracted by the BID to promote its work, and
              commercially linked to the group whose Chairman&apos;s company is run by the BID&apos;s own
              Treasurer. These relationships exist in parallel and are confirmed by public sources.
              Neither has been publicly disclosed in the context of the other.
            </p>
          </div>
        </section>

        {/* The coverage */}
        <section id="coverage" className="scroll-mt-32">
          <SectionHeading>What Stand Up For Southport publishes about Mikhail</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Stand Up For Southport regularly publishes articles about Mikhail Hotel and Leisure
              Group. These are written by Andrew Brown, presented in editorial news format, and carry
              no disclosure of the commercial relationship between Brown and Mikhail. The table below
              documents a selection from the public record.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-[#ddddd5] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#ddddd5] bg-[#eeeee6]">
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                    Article
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                    Disclosure
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ddddd5]">
                {coverageRows.map((row) => (
                  <tr key={row.url} className={row.flagged ? "bg-[#eeeee6]" : ""}>
                    <td className="px-4 py-3 text-[#6b6b6b] whitespace-nowrap align-top">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors font-medium leading-snug inline-flex items-start gap-1"
                      >
                        {row.headline}
                        <ExternalLink size={10} className="flex-shrink-0 mt-1" />
                      </a>
                      <p className="text-xs text-[#a0a0a0] mt-1">{row.note}</p>
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap">
                      {row.flagged ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#dc2626] bg-red-50 border border-red-100 rounded px-2 py-0.5">
                          None
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#16a34a] bg-green-50 border border-green-100 rounded px-2 py-0.5">
                          BID sponsored
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-lg border border-[#ddddd5] bg-white px-5 py-4 flex items-start gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1c1c1c] mt-1.5" />
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              Andrew Brown does label some content as sponsored: individual articles directly
              commissioned by the BID carry a &ldquo;Southport BID sponsored feature&rdquo; label, and articles
              directly commissioned by Mikhail venues carry a &ldquo;The Bold sponsored feature&rdquo; or similar
              label. What is not disclosed in any of these articles is the broader, ongoing commercial
              relationship between Stand Up For Southport and Mikhail Hotel and Leisure Group as a PR
              client. News articles about Mikhail&apos;s revenues, investment plans, and planning appeals
              are presented as independent editorial. Readers have no way to know the outlet covering
              that news is also being paid by the subject for media and PR services.
            </p>
          </div>
        </section>

        {/* Stars Awards */}
        <section id="awards" className="scroll-mt-32">
          <SectionHeading>The Stars Awards: a case study in converging interests</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The Your Southport Stars Awards is the BID&apos;s annual business recognition event. It is
              organised by BID staff, funded from the levy, and promoted across BID channels. Coverage
              of the awards is provided by Stand Up For Southport, the BID&apos;s contracted media
              partner.
            </p>
            <p>
              In both 2024 and 2025, the Stars Awards ceremony was held at The Grand on Lord Street, a
              venue owned and operated by Mikhail Hotel and Leisure Group.
            </p>
            <p>
              In 2025, the Hotel or Guest House of the Year award, the Business Leaders Award category
              judged by a panel rather than public vote, was won by The Bold Hotel. The Bold is owned
              and operated by Mikhail Hotel and Leisure Group. The Lord Street Hotel, also owned by
              Mikhail, was a finalist in the same category.
            </p>
            <p>
              Stand Up For Southport published a dedicated follow-up article about The Bold winning.
              The article carries no disclosure that Andrew Brown provides paid media and PR services
              to Mikhail Hotel and Leisure Group.
            </p>
          </div>

          {/* Award fact row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Awards venue",
                value: "The Grand, Lord Street",
                sub: "Mikhail Hotel and Leisure Group, 2024 and 2025",
                color: "border-[#1c1c1c]",
              },
              {
                label: "2025 Hotel of the Year",
                value: "The Bold Hotel",
                sub: "Won Business Leaders Award. Panel-judged, not public vote.",
                color: "border-[#1c1c1c]",
              },
              {
                label: "2025 finalist, same category",
                value: "Lord Street Hotel",
                sub: "Also Mikhail Hotel and Leisure Group.",
                color: "border-[#6b6b6b]",
              },
            ].map((f) => (
              <div
                key={f.label}
                className={`rounded-lg border bg-white p-4 border-l-4 ${f.color}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-1">
                  {f.label}
                </p>
                <p className="text-base font-bold text-[#1c1c1c] leading-snug">{f.value}</p>
                <p className="text-xs text-[#6b6b6b] mt-1 leading-snug">{f.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The 2026 Stars Awards night is scheduled for{" "}
              <strong className="text-[#1c1c1c]">14 April 2026</strong>, again at The Grand. Stand Up
              For Southport is promoting the nominations process. The article carrying the nominations
              announcement is bylined Andrew Brown and includes his contact details at the footer.
            </p>
            <p>
              To be clear about the structure: the BID&apos;s contracted media partner promotes an awards
              event funded by the levy, the ceremony for which is held at a venue owned by the company
              that also pays the media partner, whose award-winning entries are then covered by the
              same media partner without disclosure of the commercial relationship.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={BOLD_WIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors border border-[#ddddd5] rounded-md px-3 py-1.5"
            >
              The Bold winning article
              <ExternalLink size={11} />
            </a>
            <a
              href={STARS_2026_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors border border-[#ddddd5] rounded-md px-3 py-1.5"
            >
              2026 Stars Awards nominations (SUFS)
              <ExternalLink size={11} />
            </a>
          </div>
        </section>

        {/* The loop */}
        <section id="loop" className="scroll-mt-32">
          <SectionHeading>How this connects to the wider structure</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              In our earlier analysis of the BID Treasurer&apos;s directorship, we documented a
              six-step loop showing how levy money consistently routes through connected interests
              back to the Mikhail group. Stand Up For Southport is an additional layer in that
              structure. It is the media operation that amplifies the loop.
            </p>
          </div>

          {/* Extended loop */}
          <div className="mt-6 space-y-3">
            {[
              {
                step: "01",
                title: "720 businesses pay the compulsory BID levy",
                body: "Levy funds go to the BID board. No business in the zone can opt out.",
                highlight: false,
              },
              {
                step: "02",
                title: "The BID board controls the budget",
                body: "The board includes a Treasurer appointed from the private sector. Governance questions about this structure remain on the public record via active FOI requests.",
                highlight: false,
              },
              {
                step: "03",
                title: "The BID contracts Stand Up For Southport for media and PR",
                body: "Confirmed January 2021. Rachel Fitzgerald, BID CEO, confirmed the contract in writing. It has been running for over four years. The contract value is not publicly disclosed.",
                highlight: false,
              },
              {
                step: "04",
                title: "Stand Up For Southport is also paid by Mikhail Hotel and Leisure Group",
                body: "Andrew Brown's own words, published November 2024: working with Southport BID and Mikhail Hotel and Leisure Group. Both in the same sentence.",
                highlight: true,
              },
              {
                step: "05",
                title: "Stand Up For Southport covers Mikhail as news, without disclosure",
                body: "Revenue announcements, investment stories, planning appeals, award wins. All published in editorial news format. No disclosure of the commercial relationship in most articles.",
                highlight: true,
              },
              {
                step: "06",
                title: "The BID's Stars Awards are held at a Mikhail venue, won by Mikhail businesses, and covered by Mikhail's media partner",
                body: "The 2024 and 2025 awards ceremonies were at The Grand. The 2025 Hotel of the Year went to The Bold. Coverage by Stand Up For Southport. No disclosure.",
                highlight: true,
              },
              {
                step: "07",
                title: "The public sees apparently independent local coverage",
                body: "Stand Up For Southport has 60,000+ followers and is widely trusted as local news. Readers have no way to distinguish sponsored content from editorial from this platform.",
                highlight: false,
              },
            ].map((s) => (
              <div
                key={s.step}
                className={`rounded-lg border p-5 flex gap-4 ${
                  s.highlight
                    ? "border-[#ddddd5] bg-[#eeeee6]"
                    : "border-[#ddddd5] bg-white"
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                      s.highlight
                        ? "bg-[#1c1c1c] text-white"
                        : "bg-[#eeeee6] text-[#6b6b6b]"
                    }`}
                  >
                    {s.step}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#1c1c1c] mb-1">{s.title}</p>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact log */}
        <section id="contact-log" className="scroll-mt-32">
          <SectionHeading>8 April 2026</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              On 8 April 2026, at approximately 13:05 to 13:15, two LinkedIn profile views of SIBA
              founder Damian Roche were recorded within five minutes of each other. One was from
              Rachel Fitzgerald, CEO of Southport BID. The other was from Andrew Brown.
            </p>
            <p>
              This occurred within the same timeframe as a phone call from Andrew Mikhail, Chairman
              of Mikhail Hotel and Leisure Group, requesting that SIBA remove its published analysis
              of the BID Treasurer&apos;s directorship. That call is documented as entry CL-001 in
              SIBA&apos;s public contact log.
            </p>
            <p>
              SIBA makes no inference about the cause of the coordinated profile views. SIBA notes
              the timing as a matter of documented public record, drawn from LinkedIn&apos;s own
              &ldquo;Who Viewed Your Profile&rdquo; feature.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/contact-log"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] hover:opacity-80 transition-opacity border border-[#ddddd5] rounded-md px-3 py-1.5 bg-[#eeeee6]"
            >
              View SIBA contact log (entries CL-001 and CL-002)
              <ArrowRight size={11} />
            </Link>
          </div>
        </section>

        {/* What we do not yet know */}
        <section className="scroll-mt-32">
          <SectionHeading>What we do not yet know</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The public record confirms the existence of both commercial relationships. It does not
              confirm:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "The total value of the BID contract with Stand Up For Southport Limited since 2021.",
                "Whether the contract was competitively tendered or directly awarded.",
                "Whether any council-administered funds have at any point been paid to Stand Up For Southport Limited or Andrew Brown Media.",
                "Whether Andrew Brown has declared his Mikhail commercial relationship to Southport BID in his capacity as their contracted media supplier.",
                "Who sits on the Business Leaders Award judging panel for the Stars Awards and what process governs their selection.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#1c1c1c] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              These are the questions that FOI Request 15 is designed to answer, at least in part.
              Not all of this information is held by Sefton Council. The BID is a private company and
              is not directly subject to the Freedom of Information Act. However, if any
              council-administered funds reached these entities, those records are FOI-able.
            </p>
          </div>
        </section>

        {/* FOI */}
        <section id="foi" className="scroll-mt-32">
          <SectionHeading>FOI Request 15: BID Media Contractor Payments and Procurement</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              SIBA has submitted Freedom of Information Request 15 to Sefton Borough Council. The
              request asks for three things:
            </p>
            <ol className="space-y-3 pl-4">
              {[
                "All payments made by Sefton Council, or from any council-administered fund, to Stand Up For Southport Limited (12553604), Andrew Brown Media, or Andrew Edward Brown personally, in the period January 2019 to the date of the request.",
                "Confirmation of whether any such payments appear in the council's transparency publication data, and whether any records were previously published but have since been removed.",
                "Any tender documentation, procurement records, or contract award notices held by the council in relation to the appointment of Stand Up For Southport or Andrew Brown as a media supplier to the BID.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 font-bold text-[#1c1c1c]">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
            <p>
              The response is due by 7 May 2026. It will be published in full on WhatDoTheyKnow and
              on this platform.
            </p>
          </div>
          <div className="mt-5 rounded-lg border border-[#ddddd5] bg-[#eeeee6] px-5 py-4 flex items-start gap-3">
            <span className="flex-shrink-0 font-bold text-[#1c1c1c] text-sm">15</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#1c1c1c] mb-1">
                FOI Request 15: BID Media Contractor Payments and Procurement
              </p>
              <p className="text-xs text-[#6b6b6b] mb-3">
                Submitted to Sefton Borough Council. Response due 7 May 2026.
              </p>
              <a
                href={WDTK_FOI15}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] hover:text-[#3d3d3d] transition-colors"
              >
                View on WhatDoTheyKnow
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/foi"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c1c1c] hover:opacity-80 transition-opacity"
            >
              View all 15 FOI requests
              <ArrowRight size={11} />
            </Link>
          </div>
        </section>

        {/* Governance questions */}
        <section id="questions" className="scroll-mt-32">
          <SectionHeading>Questions for the record</SectionHeading>
          <div className="space-y-3 text-[#4a4a4a] leading-relaxed mb-5">
            <p>
              SIBA is not in a position to answer these questions from public records alone. They are
              addressed to Southport BID, Sefton Council, and Andrew Brown.
            </p>
          </div>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#ddddd5] bg-white px-5 py-4 flex gap-3"
              >
                <span className="flex-shrink-0 font-bold text-[#1c1c1c] text-sm w-5">{i + 1}.</span>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Right of reply */}
        <section className="scroll-mt-32">
          <div className="rounded-lg border border-[#ddddd5] bg-white p-6">
            <p className="text-sm font-bold text-[#1c1c1c] mb-2">Right of reply</p>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              Andrew Brown, Southport BID, Rachel Fitzgerald, and Sefton Council are each invited to
              respond to the factual claims and questions documented in this analysis. Any response
              received will be published here in full and without editing. Contact:{" "}
              <a href="mailto:damian@siba.digital" className="text-[#1c1c1c] underline">
                damian@siba.digital
              </a>
              .
            </p>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-[#ddddd5] pt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0] mb-5">
            Related analysis and reports
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Report",
                title: "Which businesses does VisitSouthport.com actually promote?",
                href: "/reports/selective-promotion",
              },
              {
                label: "Report",
                title: "The council officer running Southport's tourism platform",
                href: "/reports/mark-catherall-visit-southport",
              },
              {
                label: "FOI Requests",
                title: "15 Freedom of Information requests on the public record",
                href: "/foi",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-center gap-4 rounded-lg border border-[#ddddd5] bg-white px-5 py-4 hover:border-[#1c1c1c] transition-colors group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1c1c1c] w-24 flex-shrink-0">
                  {r.label}
                </span>
                <p className="text-sm font-semibold text-[#1c1c1c] group-hover:text-[#3d3d3d] transition-colors flex-1 leading-snug">
                  {r.title}
                </p>
                <ArrowRight size={14} className="text-[#ccccc4] group-hover:text-[#3d3d3d] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
