import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink, Info } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Which Businesses Does VisitSouthport.com Actually Promote? | SIBA",
  description:
    "A manual review of editorial content on Southport's publicly-funded tourism platform. Four seasonal pages. Every mention. Every link. Zero independent restaurants or pubs. One commercial group on every page.",
  alternates: {
    canonical: "https://www.siba.digital/analysis/selective-promotion",
  },
  openGraph: {
    title: "Which Businesses Does VisitSouthport.com Actually Promote?",
    description:
      "A manual editorial review of Southport's publicly-funded tourism platform. The findings are specific and independently verifiable.",
    url: "https://www.siba.digital/analysis/selective-promotion",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Which Businesses Does VisitSouthport.com Actually Promote?",
  description:
    "A manual review of editorial content on Southport's publicly-funded tourism platform. Four seasonal pages. Every mention. Every link. Zero independent restaurants or pubs.",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
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
    logo: {
      "@type": "ImageObject",
      url: "https://www.siba.digital/icon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.siba.digital/analysis/selective-promotion",
  },
};

const mentionData = [
  {
    business: "The Atkinson",
    christmas: 18,
    halloween: 13,
    easter: 26,
    halfTerm: 112,
    total: 169,
    type: "Council-run",
  },
  {
    business: "WWT Martin Mere",
    christmas: 5,
    halloween: 6,
    easter: 58,
    halfTerm: 40,
    total: 109,
    type: "National charity",
  },
  {
    business: "Silcock\u2019s Funland",
    christmas: 4,
    halloween: 0,
    easter: 0,
    halfTerm: 30,
    total: 34,
    type: "Local attraction",
  },
  {
    business: "British Lawnmower Museum",
    christmas: 5,
    halloween: 9,
    easter: 0,
    halfTerm: 15,
    total: 29,
    type: "Local attraction",
  },
  {
    business: "Hickory\u2019s",
    christmas: 9,
    halloween: 0,
    easter: 15,
    halfTerm: 0,
    total: 24,
    type: "National chain",
  },
  {
    business: "The Grand",
    christmas: 6,
    halloween: 0,
    easter: 5,
    halfTerm: 1,
    total: 12,
    type: "Mikhail Group",
    highlight: true,
  },
  {
    business: "The Bold Hotel",
    christmas: 9,
    halloween: 0,
    easter: 3,
    halfTerm: 0,
    total: 12,
    type: "Mikhail Group",
    highlight: true,
  },
  {
    business: "The Vincent Hotel",
    christmas: 10,
    halloween: 6,
    easter: 0,
    halfTerm: 0,
    total: 16,
    type: "Mikhail Group",
    highlight: true,
  },
  {
    business: "Southport Market",
    christmas: 1,
    halloween: 2,
    easter: 3,
    halfTerm: 1,
    total: 7,
    type: "Mikhail Group",
    highlight: true,
  },
  {
    business: "Ocean Plaza",
    christmas: 2,
    halloween: 0,
    easter: 3,
    halfTerm: 3,
    total: 8,
    type: "Leisure centre",
  },
  {
    business: "Bijou Cinema",
    christmas: 4,
    halloween: 0,
    easter: 0,
    halfTerm: 0,
    total: 4,
    type: "Cinema",
  },
];

const externalLinkData = [
  {
    page: "Christmas",
    links: [
      "theatkinson.co.uk (3)",
      "thegrand.co.uk (2)",
      "thevincenthotel.com (2)",
      "southportmarket.com (1)",
      "hickorys.co.uk (1)",
      "lawnmowerworld.co.uk (1)",
      "silcock-leisure.co.uk (1)",
      "oceanplazaleisure.com (1)",
      "southportbijoucinema.co.uk (1)",
      "santassecretforest.co.uk (1)",
      "wwt.org.uk (1)",
    ],
    total: 15,
    allDofollow: true,
  },
  {
    page: "Halloween",
    links: [
      "theatkinson.co.uk (2)",
      "southportmarket.com (2)",
      "thevincenthotel.com (1)",
      "lawnmowerworld.co.uk (1)",
      "pixelplaygroundvr.co.uk (1)",
      "waterfrontsouthporthotel.co.uk (1)",
      "wayfarersarcade.co.uk (1)",
      "formbyhallgolfresort.co.uk (1)",
      "windmillanimalfarm.co.uk (1)",
      "wwt.org.uk (1)",
    ],
    total: 12,
    allDofollow: true,
  },
  {
    page: "Easter",
    links: [],
    total: 0,
    allDofollow: true,
  },
  {
    page: "Half-Term",
    links: [],
    total: 0,
    allDofollow: true,
  },
];

const absentBusinesses = [
  "Gusto",
  "Bistrot V\u00e9rit\u00e9",
  "Trattoria 51",
  "Punch Tarmey\u2019s",
  "The Hesketh Arms",
  "Nostalgia Tea Rooms",
  "Remedy",
  "The Potting Shed",
  "Casa Italia",
  "La Tabella",
  "The Inn Beer Shop",
  "Tap \u0026 Bottles",
  "Eight Bar",
  "The Bold Arms",
  "Pepe\u2019s",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
      <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
        {children}
      </h2>
    </div>
  );
}

export default function SelectivePromotionPage() {
  const mikhailTotal = mentionData
    .filter((d) => d.type === "Mikhail Group")
    .reduce((sum, d) => sum + d.total, 0);

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
            <span className="badge badge-orange">Editorial Review</span>
            <span className="text-xs text-[#94a3b8]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
            Which Businesses Does VisitSouthport.com Actually Promote?
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            A manual review of editorial content across every seasonal page on
            Southport&apos;s publicly-funded tourism platform. Every mention
            counted. Every outbound link checked. The pattern is consistent and
            independently verifiable.
          </p>
        </div>
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-16 z-10 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-4 py-1">
            {[
              { href: "#platform", label: "The Platform" },
              { href: "#method", label: "What We Did" },
              { href: "#mentions", label: "The Mentions" },
              { href: "#links", label: "The Links" },
              { href: "#absent", label: "Who Is Missing" },
              { href: "#pattern", label: "The Pattern" },
              { href: "#governance", label: "The Governance" },
              { href: "#questions", label: "Questions" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold text-[#94a3b8] hover:text-[#0f172a] transition-colors py-2 px-1 text-center"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Plain language summary */}
        <section className="scroll-mt-32">
          <div className="rounded-xl bg-[#0f172a] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Info size={14} className="text-[#f97316] flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
                What this article is about
              </p>
            </div>
            <div className="space-y-3 text-[#cbd5e1] text-sm leading-relaxed">
              <p>
                VisitSouthport.com is a publicly-funded tourism website operated by Sefton Council.
                Its stated purpose is to promote Southport to visitors. It is not a private
                commercial website. Public money built it and public money runs it.
              </p>
              <p>
                Southport BID is a separate organisation that collects a compulsory levy from
                around 720 town centre businesses. The BID and Visit Southport collaborate on
                seasonal marketing content. The BID&apos;s CEO confirmed this on the public record.
              </p>
              <p>
                We read every seasonal editorial page on VisitSouthport.com. All four of them:
                Christmas, Halloween, Easter, and half-term. We counted every business mentioned.
                We checked every external link.
              </p>
              <p>
                The findings are specific:{" "}
                <span className="text-white font-semibold">
                  one commercial group&apos;s venues appear on every seasonal page.
                </span>{" "}
                No independent restaurant, pub, or cafe appears on any of them.
              </p>
              <p>
                Every outbound link on this publicly-funded website passes full SEO authority to
                the businesses it links to. That is a real, measurable commercial benefit.
                The question this article asks is: who decided how that benefit should be
                distributed, and how was that decision governed?
              </p>
              <p className="text-[#94a3b8] text-xs pt-2 border-t border-[#1e293b]">
                This analysis documents a pattern identified from publicly available data. It is
                not an allegation of deliberate impropriety by any individual. Every claim is
                independently verifiable by anyone with a web browser. Use the navigation above
                to jump to the section most relevant to you.
              </p>
            </div>
          </div>
        </section>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-white">
          {[
            { value: "4", label: "Pages reviewed" },
            { value: String(mikhailTotal), label: "Mikhail Group mentions" },
            { value: "0", label: "Independent restaurants" },
            { value: "3", label: "BID directors also governing Visit Southport" },
          ].map((s) => (
            <div key={s.label} className="px-5 py-4 text-center">
              <p className="text-xl font-bold text-[#0f172a]">{s.value}</p>
              <p className="text-xs text-[#64748b] leading-tight mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* What VisitSouthport is */}
        <section id="platform" className="scroll-mt-32">
          <SectionHeading>What VisitSouthport.com is</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              VisitSouthport.com is a publicly-funded tourism promotion platform
              for Southport. It holds a Domain Rating of 59 according to Ahrefs,
              built over years of council investment and institutional linking.
              Its stated purpose is to promote the town and its businesses to
              visitors.
            </p>
            <p>
              The platform includes a directory of business listings, an events
              calendar, and a series of seasonal editorial blog posts covering
              Christmas, Halloween, Easter and school holidays. These editorial
              pages are where the platform makes active choices about which
              businesses to name, describe, and link to.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Method */}
        <section id="method" className="scroll-mt-32">
          <SectionHeading>What we did</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              We manually reviewed the full HTML source of every seasonal
              editorial page on VisitSouthport.com. We counted every mention of
              every business. We extracted every external outbound link. We
              checked the dofollow/nofollow status of each link by inspecting the
              rendered HTML.
            </p>
            <div className="card p-5 bg-[#f8fafc] font-mono text-xs text-[#64748b] space-y-1.5">
              <p>
                visitsouthport.com/whats-on/seasonal-events/christmas/
              </p>
              <p>
                visitsouthport.com/whats-on/seasonal-events/halloween/
              </p>
              <p>
                visitsouthport.com/whats-on/seasonal-events/easter/
              </p>
              <p>
                visitsouthport.com/whats-on/seasonal-events/half-term/
              </p>
            </div>
            <p>
              We also reviewed the main category pages (Food &amp; Drink,
              Restaurants, Accommodation, Things to Do, What&apos;s On). These
              directory-style pages contain zero editorial external links. No
              business on any listing page receives an outbound link to their own
              website. The editorial promotion happens exclusively on the
              seasonal blog pages.
            </p>
            <p>
              This review was conducted on 7 April 2026. The pages are publicly
              accessible. Every finding is independently verifiable by anyone
              with a web browser and View Source.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The mentions */}
        <section id="mentions" className="scroll-mt-32">
          <SectionHeading>
            Who gets mentioned in the editorial content
          </SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              The following table shows every business mentioned across the four
              seasonal editorial pages. Mention counts include editorial prose,
              event listings, image alt text, and structured data present on each
              page.
            </p>
          </div>

          <div className="mt-6 card overflow-x-auto">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                Business mentions across seasonal editorial pages
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <th className="text-left px-4 py-3 font-semibold text-[#0f172a]">
                    Business
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-[#0f172a]">
                    Xmas
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-[#0f172a]">
                    Hall.
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-[#0f172a]">
                    Easter
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-[#0f172a]">
                    H-Term
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-[#0f172a]">
                    Total
                  </th>
                  <th className="text-left px-3 py-3 font-semibold text-[#0f172a]">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {mentionData.map((row) => (
                  <tr
                    key={row.business}
                    className={`hover:bg-[#f8fafc] transition-colors ${
                      "highlight" in row && row.highlight
                        ? "bg-[#fff7ed]"
                        : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-[#0f172a] font-medium text-xs">
                      {row.business}
                    </td>
                    <td className="px-3 py-3 text-center text-[#475569]">
                      {row.christmas || "\u2013"}
                    </td>
                    <td className="px-3 py-3 text-center text-[#475569]">
                      {row.halloween || "\u2013"}
                    </td>
                    <td className="px-3 py-3 text-center text-[#475569]">
                      {row.easter || "\u2013"}
                    </td>
                    <td className="px-3 py-3 text-center text-[#475569]">
                      {row.halfTerm || "\u2013"}
                    </td>
                    <td className="px-3 py-3 text-center font-semibold text-[#0f172a]">
                      {row.total}
                    </td>
                    <td className="px-3 py-3 text-[#64748b] text-xs">
                      {row.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 card p-6 bg-[#fff7ed] border-[#fed7aa]">
            <p className="text-sm font-semibold text-[#0f172a] mb-2">
              The pattern in the data
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              The Atkinson (council-run) and WWT Martin Mere (national charity)
              dominate total mentions. That is expected. They run large seasonal
              programmes. Among privately-owned commercial hospitality
              businesses, only one group appears on every seasonal page: The
              Grand, The Bold Hotel, The Vincent Hotel, and Southport Market.
              All four are part of the same commercial group.{" "}
              {mikhailTotal} mentions across four pages.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The links */}
        <section id="links" className="scroll-mt-32">
          <SectionHeading>
            Who gets linked from the editorial content
          </SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              An outbound dofollow link from a Domain Rating 59 website is a
              tangible commercial asset. It passes authority to the receiving
              domain, improves its search rankings, and drives referral traffic.
              When that link comes from a publicly-funded platform, who receives
              it is a governance question.
            </p>
            <p>
              Two of the four seasonal pages contain external editorial links.
              Two contain none at all.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {externalLinkData.map((page) => (
              <div key={page.page} className="card overflow-hidden">
                <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#0f172a]">
                    {page.page} page
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#64748b]">
                      {page.total} outbound links
                    </span>
                    {page.allDofollow && page.total > 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
                        All dofollow
                      </span>
                    )}
                  </div>
                </div>
                {page.links.length > 0 ? (
                  <div className="px-5 py-3 space-y-1">
                    {page.links.map((link) => (
                      <p
                        key={link}
                        className="font-mono text-xs text-[#475569]"
                      >
                        {link}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="px-5 py-4">
                    <p className="text-sm text-[#94a3b8] italic">
                      No external editorial links. Infrastructure links only
                      (Sefton Council, CMS, analytics).
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            Every link was verified by HTML source inspection. None carry a{" "}
            <code className="text-xs bg-[#f1f5f9] px-1.5 py-0.5 rounded">
              rel=&quot;nofollow&quot;
            </code>{" "}
            attribute. All pass full link equity.
          </p>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The absent */}
        <section id="absent" className="scroll-mt-32">
          <SectionHeading>
            Who is completely absent from the editorial content
          </SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              These are established independent Southport restaurants, pubs, and
              cafes. They serve the same visitors. Many of them pay the same
              compulsory BID levy. Not one appears in any editorial content on
              VisitSouthport.com&apos;s seasonal pages.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {absentBusinesses.map((biz) => (
              <div
                key={biz}
                className="card px-4 py-3 text-sm text-[#475569] text-center"
              >
                {biz}
              </div>
            ))}
          </div>

          <div className="mt-6 card p-6 bg-[#fff7ed] border-[#fed7aa]">
            <p className="text-sm font-semibold text-[#0f172a] mb-2">
              Zero mentions. Zero links. Every page.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              Southport has dozens of independent restaurants, pubs and cafes.
              Across four seasonal editorial pages, not a single one is named,
              described, or linked to. The only commercial hospitality group that
              receives consistent editorial promotion is the group whose
              Commercial Director sits on the BID board.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* The pattern */}
        <section id="pattern" className="scroll-mt-32">
          <SectionHeading>The structural pattern</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <div className="card p-5 bg-[#f8fafc] border-[#e2e8f0] mb-2">
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                The following describes a structural pattern identified from
                publicly available data. It is not an allegation of deliberate
                impropriety by any individual.
              </p>
            </div>
            <p>
              VisitSouthport&apos;s editorial content follows a recognisable
              structure. Each seasonal page opens with an introduction, then
              describes specific activities and events, naming the businesses
              involved. The businesses that are named receive both visibility and
              dofollow links. The businesses that are not named receive neither.
            </p>
            <p>
              Among attractions, the coverage is reasonably broad. The Atkinson,
              WWT Martin Mere, Silcock&apos;s, the Lawnmower Museum, Ocean
              Plaza, and the Bijou Cinema all appear. This is expected. They
              run structured seasonal programmes and are natural editorial
              choices.
            </p>
            <p>
              Among commercial hospitality businesses, the coverage is not broad
              at all. One group appears on every page. Every other independent
              hospitality business in Southport appears on none of them.
            </p>
            <p>
              The Commercial Director of that hospitality group sits on the
              Southport BID board. That board oversees the promotional
              infrastructure of the town, including the platforms that decide
              which businesses receive editorial coverage.
            </p>
            <p>
              The competing independent businesses pay exactly the same BID
              levy. They receive zero editorial mentions, zero outbound links,
              and zero seasonal promotion on the publicly-funded platform that is
              supposed to serve all of them.
            </p>
            <p>
              This is the structural pattern described in SIBA&apos;s analysis
              of{" "}
              <Link
                href="/analysis/bid-cronyism-by-design"
                className="text-[#f97316] hover:underline font-medium"
              >
                how BIDs breed cronyism by design
              </Link>
              , operating in practice on a specific, publicly-funded platform
              with independently verifiable data.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Governance section */}
        <section id="governance" className="scroll-mt-32">
          <SectionHeading>The governance connection</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              This is not speculation about editorial influence. The BID and
              Visit Southport have confirmed their joint working on seasonal
              content in a published interview. In September 2025,{" "}
              <strong className="text-[#0f172a]">Rachel Fitzgerald</strong>,
              CEO of Southport BID, sat down with Mark Catherall, Sefton
              Council&apos;s Tourism Service Manager and the person who runs
              Visit Southport day-to-day. The interview was published by
              Liverpool City Region Destination Partnership.
            </p>
            <p>
              Fitzgerald stated directly:
            </p>
          </div>

          {/* Pull quote */}
          <div className="my-6 border-l-4 border-l-[#f97316] bg-white rounded-r-lg p-6 shadow-sm">
            <p className="text-lg font-medium text-[#0f172a] leading-relaxed italic mb-4">
              &ldquo;Christmas is another time when the town comes alive and
              working alongside the Visit Southport team on marketing helps us
              extend the reach of what we offer locally.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e2e8f0]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
                Rachel Fitzgerald
              </p>
              <div className="h-px flex-1 bg-[#e2e8f0]" />
            </div>
            <p className="text-xs text-[#94a3b8] text-center mt-1.5">
              CEO, Southport BID. Liverpool City Region Destination Partnership interview, September 2025.
            </p>
          </div>

          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              The seasonal pages reviewed in this analysis are therefore a joint
              editorial product between two organisations whose governance
              structures overlap directly. The three shared positions are
              documented on public records.
            </p>
          </div>

          {/* Governance table */}
          <div className="mt-6 card overflow-hidden">
            <div className="px-5 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                Shared positions between Southport BID and Visit Southport
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <th className="text-left px-5 py-3 font-semibold text-[#0f172a]">Person</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f172a]">BID role</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f172a]">Visit Southport role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {[
                  {
                    name: "Geoff Wareham",
                    bid: "Treasurer",
                    visit: "Not on board",
                    note: "Commercial Director, Mikhail Hotel and Leisure Group",
                    highlight: true,
                  },
                  {
                    name: "Peter Hampson",
                    bid: "Co-opted Director",
                    visit: "Chair",
                    note: "Director, British Destinations",
                    highlight: false,
                  },
                  {
                    name: "Mark Catherall",
                    bid: "Director",
                    visit: "Day-to-day operator (Sefton Council)",
                    note: "Tourism Service Manager, Sefton Council",
                    highlight: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={`hover:bg-[#f8fafc] transition-colors ${row.highlight ? "bg-[#fff7ed]" : ""}`}
                  >
                    <td className="px-5 py-3">
                      <p className="font-semibold text-[#0f172a] text-sm">{row.name}</p>
                      <p className="text-xs text-[#94a3b8] mt-0.5">{row.note}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#475569]">{row.bid}</td>
                    <td className="px-4 py-3 text-sm text-[#475569]">{row.visit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 card p-6 bg-[#fff7ed] border-[#fed7aa]">
            <p className="text-sm font-semibold text-[#0f172a] mb-2">
              What this means
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              The organisation whose Treasurer is the Mikhail Group&apos;s
              Commercial Director collaborates directly with Visit Southport on
              the seasonal marketing content that consistently promotes Mikhail
              Group venues. The Chair of Visit Southport sits on the BID board.
              The person who runs Visit Southport day-to-day sits on the BID
              board. Rachel Fitzgerald confirmed the collaboration on the record.
              The content is a joint product. The outcomes of that content are
              not evenly distributed.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Questions */}
        <section id="questions" className="scroll-mt-32">
          <SectionHeading>Questions for the record</SectionHeading>
          <div className="space-y-3">
            {[
              "Who has editorial control over which businesses are named and linked in VisitSouthport's seasonal content?",
              "What criteria determine which hospitality businesses receive editorial promotion and which do not?",
              "Is there a declared conflict of interest relating to any person with editorial influence over VisitSouthport and the businesses it promotes?",
              "Why does no independent Southport restaurant, pub, or cafe appear in any seasonal editorial content?",
              "Have independent hospitality businesses been invited to contribute to the seasonal editorial pages? If so, what was the process?",
              "Has Sefton Council conducted any review of the editorial content or linking decisions on a platform it funds?",
            ].map((q) => (
              <div key={q} className="card p-4 flex gap-3">
                <span className="flex-shrink-0 mt-0.5 h-2 w-2 rounded-full bg-[#f97316]" />
                <p className="text-sm text-[#475569] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#64748b] leading-relaxed">
            SIBA has submitted formal Freedom of Information requests to Sefton
            Council on these precise points.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/foi#09"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#fff7ed] border border-[#fed7aa] text-[9px] font-bold text-[#f97316]">
                09
              </span>
              FOI 09: VisitSouthport Link Management
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/foi#04"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#fff7ed] border border-[#fed7aa] text-[9px] font-bold text-[#f97316]">
                04
              </span>
              FOI 04: Mark Catherall Register of Interests
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* Methodology */}
        <section className="scroll-mt-32">
          <SectionHeading>Methodology and sources</SectionHeading>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              This analysis was conducted through manual review of publicly
              accessible web pages. No automated crawling tools were used for the
              editorial content analysis. Every mention count was obtained by
              searching the full HTML source of each page. Every outbound link
              was extracted and its dofollow/nofollow status verified by
              inspecting the rendered HTML attributes.
            </p>
            <p>
              Domain Rating data is sourced from{" "}
              <a
                href="https://ahrefs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
              >
                Ahrefs
                <ExternalLink size={11} />
              </a>
              , an independent third-party SEO analytics platform.
            </p>
            <p>
              The Rachel Fitzgerald quote is sourced from a published interview
              conducted by Liverpool City Region Destination Partnership in
              September 2025, titled &ldquo;Southport Leaders in Conversation:
              Rachel Fitzgerald and Mark Catherall on the Town&apos;s Incredible
              Future.&rdquo; The interview is publicly accessible at{" "}
              <a
                href="https://liverpoolcityregiondp.com/2025/09/16/southport-leaders-in-conversation-rachel-fitzgerald-and-mark-catherall-on-the-towns-incredible-future/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
              >
                liverpoolcityregiondp.com
                <ExternalLink size={11} />
              </a>
              . BID board membership data is sourced from southportbid.com/our-team/.
            </p>
            <p>
              The review was conducted on 7 April 2026. All pages referenced are
              publicly accessible and every finding is independently verifiable
              by any party with a web browser. SIBA welcomes corrections from
              VisitSouthport, Sefton Council, or any party referenced in this
              analysis and will publish responses in full.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* CTA */}
        <div className="text-center py-4">
          <p className="text-[#64748b] mb-6 leading-relaxed max-w-xl mx-auto">
            This analysis provides the empirical evidence for the structural
            argument made in our companion piece on BID cronyism by design. Read
            both.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/analysis/bid-cronyism-by-design"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm"
            >
              Read: Cronyism by Design
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-colors"
            >
              View All Reports
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
