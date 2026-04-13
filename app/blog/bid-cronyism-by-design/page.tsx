import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How BIDs Breed Cronyism by Design | SIBA",
  description:
    "The BID model does not just enable cronyism. It requires it. An original structural analysis of why every Business Improvement District produces the same outcome regardless of who runs it.",
  alternates: {
    canonical: "https://www.siba.digital/blog/bid-cronyism-by-design",
  },
  openGraph: {
    title: "How BIDs Breed Cronyism by Design",
    description:
      "Most critics focus on bad actors. The real problem is structural. A BID model analysis from SIBA.",
    url: "https://www.siba.digital/blog/bid-cronyism-by-design",
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
    "@id": "https://www.siba.digital/blog/bid-cronyism-by-design",
  },
};

export default function CronyismByDesignPost() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] border border-[#ddddd5] px-2 py-0.5">
            Structural Analysis
          </span>
          <span className="text-xs text-[#a0a0a0]">April 2026</span>
        </div>

        <h1 className="mb-6">How BIDs Breed Cronyism by Design</h1>

        <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12">
          Most critics of Business Improvement Districts focus on bad actors.
          This is the wrong analysis. The BID model creates the conditions for
          cronyism structurally, regardless of intent. Here is why.
        </p>

        <div className="prose-siba space-y-6 text-[15px] text-[#3d3d3d] leading-relaxed">
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Before the BID existed
          </h2>
          <p>
            Before a BID exists, businesses talk to each other. Horizontal.
            Peer to peer. No intermediary. No gatekeeper. A restaurant
            recommends a hotel because the hotel is good. A retailer partners
            with an events organiser because the partnership makes commercial
            sense. Nobody sits in the middle. Nobody controls who gets promoted.
          </p>
          <p>
            These networks are messy, decentralised, and self-correcting. A bad
            recommendation damages your reputation. A good one builds it. The
            market does what markets are supposed to do.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The moment a BID is created, that structure changes permanently
          </h2>
          <p>
            When a BID is established, it inserts itself between businesses as
            a mandatory intermediary. Businesses no longer outreach directly to
            each other for the services the levy is supposed to fund. They
            outreach to the BID. Or to BID-controlled platforms. Or through
            BID-approved channels.
          </p>
          <p>
            The levy funds this intermediary. The intermediary is compulsory.
            And the intermediary is governed by a board.
          </p>
          <p>That board decides where the money goes.</p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Why the board always spends money with people it knows
          </h2>
          <p>
            The BID board is self-selecting. Incumbents recruit successors. The
            people already in the room choose who joins them.
          </p>
          <p>
            The board spends money with businesses and individuals it trusts.
            The businesses it trusts are the businesses it knows. The businesses
            it knows are the businesses already connected to board members.
          </p>
          <p>
            Nobody needs to make a corrupt decision. Nobody needs to pick up
            the phone and say &quot;let us look after each other.&quot; The
            structure does it automatically. You spend money with people you
            trust. The people you trust are the people already in the room.
          </p>
          <p>
            The businesses without those connections pay exactly the same levy.
            They receive proportionally less benefit. They have no practical
            mechanism to challenge it.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            That is cronyism produced not by individual bad actors but by a
            structure operating exactly as designed. A well-intentioned board
            produces the same outcome as a self-interested one because the
            mechanism is identical.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The Southport illustration
          </h2>
          <p>
            Before the BID, a Southport hospitality business might have
            appeared on SouthportGuide, TripAdvisor, their own website, through
            word of mouth, through direct relationships with other local
            businesses. Independent choices made freely by independent
            operators.
          </p>
          <p>
            With the BID in place, the official channel for visibility in
            Southport is YourSouthport. Controlled by the BID. Governed by a
            board that includes the Commercial Director of one of
            Southport&apos;s largest hospitality groups. Funded by a levy that
            every hospitality business, including that group&apos;s direct
            competitors, cannot opt out of.
          </p>
          <p>
            The competitor pays the levy. The levy funds the platform. The
            platform features the board member&apos;s employer&apos;s venues
            alongside competitors who had no input into the platform&apos;s
            design or governance. The board member participates in decisions
            about the platform. The competitor has no mechanism to challenge
            any of it.
          </p>
          <p>
            Replace Southport with any BID town. Replace the names with
            different names. The outcome is the same. The structure produces it
            regardless.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The suppression effect
          </h2>
          <p>
            The BID does not simply create cronyism among its board members. It
            actively suppresses the organic peer-to-peer networks that would
            otherwise exist.
          </p>
          <p>
            The BID does not merely compete with organic business networks. It
            structurally replaces them. The levy funds the official channel. The
            official channel becomes the default. The default displaces the
            alternatives. The businesses that previously built their own
            networks now depend on one they do not control and cannot leave.
            The BID has not earned that dependency. It has legislated it.
          </p>
          <p>
            Because the formal BID channel becomes the default, businesses stop
            building direct relationships with each other. Everything routes
            through the intermediary. The intermediary becomes essential. Which
            is precisely how it justifies its own renewal at the next ballot.
          </p>
          <p>
            A BID that has successfully centralised local business
            communication creates the dependency that guarantees its own
            survival. The proof of its value is the absence of the alternatives
            it displaced.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Why this argument matters
          </h2>
          <p>
            Most anti-BID arguments are reactive. Bad governance. Poor return
            on investment. Undemocratic ballots. These are important critiques
            but they treat cronyism as an aberration, as the result of a
            particular bad board in a particular bad town.
          </p>
          <p>
            The structural argument is different. A well-intentioned board
            produces the same outcome as a self-interested one because the
            mechanism is identical. Cronyism in a BID is not a bug. It is an
            emergent property of the model itself.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            That is not an argument for better BID governance. It is an
            argument against the BID model. Better people running the same
            structure will produce the same result.
          </p>

          <div className="border-t border-[#ddddd5] my-12" />

          <p className="text-xs text-[#a0a0a0] leading-relaxed">
            This is a structural analysis. It does not allege impropriety by
            any specific individual or organisation. The Southport illustration
            uses only publicly available information to demonstrate a general
            structural pattern. The same pattern is observable in any BID area
            where board composition overlaps with the beneficiaries of BID
            spending.
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-[#ddddd5] flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>
          <Link
            href="/blog/why-bid-ballots-favour-incumbents"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
          >
            Next: Why BID Ballots Favour Incumbents
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
