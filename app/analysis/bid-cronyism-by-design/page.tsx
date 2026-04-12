import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";
import InvestigationClosed from "@/components/InvestigationClosed";

export const metadata: Metadata = {
  title: "How BIDs Breed Cronyism by Design | SIBA",
  description:
    "The BID model does not just enable cronyism. It requires it. An original structural analysis of why every Business Improvement District produces the same outcome regardless of who runs it.",
  alternates: {
    canonical: "https://www.siba.digital/analysis/bid-cronyism-by-design",
  },
  openGraph: {
    title: "How BIDs Breed Cronyism by Design",
    description:
      "Most critics focus on bad actors. The real problem is structural. A BID model analysis from SIBA.",
    url: "https://www.siba.digital/analysis/bid-cronyism-by-design",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How BIDs Breed Cronyism by Design",
  description:
    "The BID model does not just enable cronyism. It requires it. An original structural analysis of why every Business Improvement District produces the same outcome regardless of who runs it.",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
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
    "@id": "https://www.siba.digital/analysis/bid-cronyism-by-design",
  },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#1c1c1c]" />
      <h2 className="text-2xl font-bold text-[#1c1c1c] tracking-tight">{children}</h2>
    </div>
  );
}

export default function CronyismAnalysisPage() {
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
            href="/analysis"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Analysis
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-navy">Structural Analysis</span>
            <span className="text-xs text-[#a0a0a0]">April 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-4 leading-tight">
            How BIDs Breed Cronyism by Design
          </h1>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            Most critics of Business Improvement Districts focus on bad actors. This is the
            wrong analysis. The BID model creates the conditions for cronyism structurally,
            regardless of intent. Here is why.
          </p>
        </div>
      </div>

      {/* Investigation closed */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6">
        <InvestigationClosed />
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-16 z-10 bg-[#1c1c1c] border-b border-[#2a2a2a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-1 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ccccc4] pr-3 mr-1 border-r border-[#3d3d3d] flex-shrink-0">
              Jump to
            </span>
            {[
              { href: "#before", label: "Before the BID" },
              { href: "#intermediary", label: "The Intermediary" },
              { href: "#board", label: "The Board" },
              { href: "#illustration", label: "Southport" },
              { href: "#suppression", label: "Suppression Effect" },
              { href: "#conclusion", label: "Why This Matters" },
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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Plain language summary */}
        <section className="scroll-mt-32">
          <div className="rounded-xl bg-[#1c1c1c] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Info size={14} className="text-[#ccccc4] flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#ccccc4]">
                What this article is about
              </p>
            </div>
            <div className="space-y-3 text-[#ccccc4] text-sm leading-relaxed">
              <p>
                A BID is a Business Improvement District. Businesses in a defined town centre area
                pay a compulsory levy. The money is collected by the council and handed to a BID
                board to spend on behalf of the area. You pay whether or not you voted for it, and
                there is no practical way to opt out.
              </p>
              <p>
                Most criticism of BIDs focuses on specific bad boards or specific bad decisions.
                This article argues that is the wrong question. The argument here is structural:
                the BID model creates the conditions for a particular pattern of spending, even
                when everyone involved is acting in good faith.
              </p>
              <p>
                The pattern works like this. The board is small. It decides where the money goes.
                Board members naturally spend with people they trust. The people they trust are
                the people they already know. The businesses without those existing connections
                pay the same levy and receive proportionally less in return. No individual has
                to make a corrupt decision.{" "}
                <span className="text-white font-semibold">
                  The structure produces the outcome automatically.
                </span>
              </p>
              <p>
                The BID also replaces the organic peer-to-peer networks that existed before it.
                Before a BID, businesses promoted each other directly. After a BID, everything
                routes through the official channel. The official channel is the BID. The BID is
                controlled by the board. The businesses that previously built their own networks
                now depend on one they did not choose and cannot leave.
              </p>
              <p>
                If this argument is correct, better governance is not the solution. The model
                itself is the problem. Better people running the same structure will produce the
                same result.
              </p>
              <p className="text-[#a0a0a0] text-xs pt-2 border-t border-[#2a2a2a]">
                This is a structural analysis. It does not allege impropriety by any specific
                individual or organisation. The Southport-specific evidence for this argument
                is documented in two companion pieces linked at the bottom of this article.
                Use the navigation above to jump to the section most relevant to you.
              </p>
            </div>
          </div>
        </section>

        {/* Before the BID */}
        <section id="before" className="scroll-mt-32">
          <SectionHeading>Before the BID existed</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Before a BID exists, businesses talk to each other. Horizontal. Peer to peer.
              No intermediary. No gatekeeper. A restaurant recommends a hotel because the
              hotel is good. A retailer partners with an events organiser because the
              partnership makes commercial sense. Nobody sits in the middle. Nobody controls
              who gets promoted.
            </p>
            <p>
              These networks are messy, decentralised, and self-correcting. A bad
              recommendation damages your reputation. A good one builds it. The market does
              what markets are supposed to do.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* The intermediary problem */}
        <section id="intermediary" className="scroll-mt-32">
          <SectionHeading>The moment a BID is created, that structure changes permanently</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              When a BID is established, it inserts itself between businesses as a mandatory
              intermediary. Businesses no longer outreach directly to each other for the
              services the levy is supposed to fund. They outreach to the BID. Or to
              BID-controlled platforms. Or through BID-approved channels.
            </p>
            <p>
              The levy funds this intermediary. The intermediary is compulsory. And the
              intermediary is governed by a board.
            </p>
            <p>That board decides where the money goes.</p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Why the board spends with people it knows */}
        <section id="board" className="scroll-mt-32">
          <SectionHeading>Why the board always spends money with people it knows</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The BID board is self-selecting. Incumbents recruit successors. The people
              already in the room choose who joins them.
            </p>
            <p>
              The board spends money with businesses and individuals it trusts. The businesses
              it trusts are the businesses it knows. The businesses it knows are the businesses
              already connected to board members.
            </p>
            <p>
              Nobody needs to make a corrupt decision. Nobody needs to pick up the phone and
              say &quot;let us look after each other.&quot; The structure does it automatically.
              You spend money with people you trust. The people you trust are the people
              already in the room.
            </p>
            <p>
              The businesses without those connections pay exactly the same levy. They receive
              proportionally less benefit. They have no practical mechanism to challenge it.
            </p>
            <div className="my-6 card p-6 bg-[#eeeee6] border-[#ddddd5]">
              <p className="text-sm font-semibold text-[#1c1c1c] mb-2">The structural point</p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                That is cronyism produced not by individual bad actors but by a structure
                operating exactly as designed. A well-intentioned board produces the same
                outcome as a self-interested one because the mechanism is identical.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* The Southport illustration */}
        <section id="illustration" className="scroll-mt-32">
          <SectionHeading>The Southport illustration</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <div className="card p-5 bg-[#eeeee6] border-[#ddddd5] mb-2">
              <p className="text-xs text-[#a0a0a0] leading-relaxed">
                The following is a description of how structural incentives operate within
                Southport&apos;s BID. It is not an allegation of deliberate impropriety by any
                individual. The point is precisely that deliberate impropriety is not required
                for the outcome to occur.
              </p>
            </div>
            <p>
              Before the BID, a Southport hospitality business might have appeared on
              SouthportGuide, TripAdvisor, their own website, through word of mouth, through
              direct relationships with other local businesses. Independent choices made freely
              by independent operators.
            </p>
            <p>
              With the BID in place, the official channel for visibility in Southport is
              YourSouthport. Controlled by the BID. Governed by a board that includes the
              Commercial Director of one of Southport&apos;s largest hospitality groups. Funded
              by a levy that every hospitality business, including that group&apos;s direct
              competitors, cannot opt out of.
            </p>
            <p>
              The competitor pays the levy. The levy funds the platform. The platform features
              the board member&apos;s employer&apos;s venues alongside competitors who had no
              input into the platform&apos;s design or governance. The board member
              participates in decisions about the platform. The competitor has no mechanism to
              challenge any of it.
            </p>
            <p>
              Replace Southport with any BID town. Replace the names with different names.
              The outcome is the same. The structure produces it regardless.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* The suppression effect */}
        <section id="suppression" className="scroll-mt-32">
          <SectionHeading>The suppression effect</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              The BID does not simply create cronyism among its board members. It actively
              suppresses the organic peer-to-peer networks that would otherwise exist.
            </p>
            <p>
              The BID does not merely compete with organic business networks. It structurally
              replaces them. The levy funds the official channel. The official channel becomes
              the default. The default displaces the alternatives. The businesses that
              previously built their own networks now depend on one they do not control and
              cannot leave. The BID has not earned that dependency. It has legislated it.
            </p>
            <p>
              Because the formal BID channel becomes the default, businesses stop building
              direct relationships with each other. Everything routes through the intermediary.
              The intermediary becomes essential. Which is precisely how it justifies its own
              renewal at the next ballot.
            </p>
            <p>
              A BID that has successfully centralised local business communication creates
              the dependency that guarantees its own survival. The proof of its value is the
              absence of the alternatives it displaced.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Why this argument matters */}
        <section id="conclusion" className="scroll-mt-32">
          <SectionHeading>Why this argument matters</SectionHeading>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>
              Most anti-BID arguments are reactive. Bad governance. Poor return on investment.
              Undemocratic ballots. These are important critiques but they treat cronyism as
              an aberration, as the result of a particular bad board in a particular bad town.
            </p>
            <p>
              The structural argument is different. A well-intentioned board produces the same
              outcome as a self-interested one because the mechanism is identical. Cronyism in
              a BID is not a bug. It is an emergent property of the model itself.
            </p>
            <p className="font-semibold text-[#1c1c1c]">
              That is not an argument for better BID governance. It is an argument against the
              BID model. Better people running the same structure will produce the same result.
            </p>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Evidence links */}
        <section className="scroll-mt-32 space-y-4">
          <div className="card card-hover p-6 border-l-4 border-l-[#1c1c1c]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0] mb-3">
              The empirical evidence
            </p>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-3">
              This analysis describes the structural theory. For the evidence
              that confirms it in practice, read our manual editorial review of
              which businesses Southport&apos;s publicly-funded tourism platform
              actually promotes. Every seasonal page. Every mention. Every link.
            </p>
            <Link
              href="/analysis/selective-promotion"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c1c1c] underline hover:text-[#3d3d3d] transition-colors"
            >
              Which businesses does VisitSouthport.com actually promote?
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="card card-hover p-6 border-l-4 border-l-[#1c1c1c]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0] mb-3">
              A live case study
            </p>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-3">
              The structural pattern described here is documented in a specific, named case.
              Southport BID&apos;s Treasurer is a registered active director of the largest
              hospitality group in the town, with no TM01 ever filed. Read the analysis.
            </p>
            <Link
              href="/analysis/bid-treasurer-mikhail"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c1c1c] underline hover:text-[#3d3d3d] transition-colors"
            >
              The BID Treasurer and Mikhail Hotels
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* FOI cross-link */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-[#a0a0a0] mb-4">
            Active FOI Requests
          </p>
          <p className="text-sm text-[#4a4a4a] leading-relaxed mb-5">
            The governance patterns described in this analysis are the subject
            of formal Freedom of Information requests to Sefton Council. SIBA
            is asking for the BID operating agreement, declarations of interest
            from Town Deal board members, and details of Mark Catherall&apos;s
            register of interests as a council officer who simultaneously runs
            Visit Southport and sits on the BID board.
          </p>
          <Link
            href="/foi"
            className="inline-flex items-center gap-2 rounded-lg border border-[#ddddd5] bg-white px-4 py-2.5 text-xs font-semibold text-[#1c1c1c] hover:bg-[#eeeee6] transition-colors"
          >
            View all 15 FOI requests
            <ArrowRight size={12} />
          </Link>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* CTA */}
        <div className="text-center py-4">
          <p className="text-[#6b6b6b] mb-6 leading-relaxed max-w-xl mx-auto">
            SIBA provides digital governance audits and OSINT for BIDs,
            councils, and major developments across the UK. The methodology
            used in this investigation is now available commercially.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/services#commission"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1c1c1c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3d3d3d] transition-colors shadow-sm"
            >
              Commission an Audit
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/overview"
              className="inline-flex items-center gap-2 rounded-lg border border-[#ddddd5] bg-white px-6 py-3 text-sm font-semibold text-[#1c1c1c] hover:bg-[#eeeee6] hover:border-[#ccccc4] transition-colors"
            >
              Case Study Overview
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
