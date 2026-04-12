import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why BID Ballots Consistently Favour Incumbents",
  description:
    "The BID ballot model is designed by the proposer, administered by the proposer, and the threshold for success is set by the proposer. The mechanism produces incumbent-friendly results not because of fraud but because of structure.",
  alternates: {
    canonical:
      "https://www.siba.digital/blog/why-bid-ballots-favour-incumbents",
  },
  openGraph: {
    title: "Why BID Ballots Consistently Favour Incumbents",
    description:
      "A structural analysis of BID ballot design and why renewal outcomes are predictable before a single vote is cast.",
    url: "https://www.siba.digital/blog/why-bid-ballots-favour-incumbents",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why BID Ballots Consistently Favour Incumbents",
  description:
    "The BID ballot model is designed by the proposer, administered by the proposer, and the threshold for success is set by the proposer.",
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
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
    "@id":
      "https://www.siba.digital/blog/why-bid-ballots-favour-incumbents",
  },
};

export default function BallotPost() {
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

        <h1 className="mb-6">Why BID Ballots Consistently Favour Incumbents</h1>

        <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12">
          Every BID renewal ballot in recent UK history has passed. That is not
          because the model is popular. It is because the ballot mechanism is
          structurally designed to produce that outcome.
        </p>

        <div className="prose-siba space-y-6 text-[15px] text-[#3d3d3d] leading-relaxed">
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Who designs the ballot
          </h2>
          <p>
            Under the Business Improvement Districts (England) Regulations
            2004, the BID proposer drafts the BID proposal. The proposal
            defines the BID area, the levy rate, the services to be provided,
            and the duration of the BID term. The proposer is typically the
            existing BID company or a council-backed steering group. In a
            renewal, the proposer is the incumbent BID board.
          </p>
          <p>
            The proposer also determines the ballot area. Which properties are
            included. Which are excluded. The boundary of the ballot is not a
            neutral geographic fact. It is a strategic decision made by the
            organisation seeking the vote.
          </p>
          <p>
            A proposer that expects opposition from a particular street or
            sector can, within the regulations, adjust the boundary. Not
            illegally. Not even unusually. The regulations permit the proposer
            to define the area. The proposer defines the area that is most
            likely to vote yes.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Who administers the ballot
          </h2>
          <p>
            The ballot is administered by the local authority. In principle
            this provides independence. In practice, the council has a direct
            financial interest in the BID&apos;s continuation. The council
            collects the levy. The council charges a collection fee. The BID
            delivers services that supplement, and in many cases substitute
            for, council provision.
          </p>
          <p>
            A BID that fails to renew creates a gap in town centre services
            that the council would need to fill from its own diminished budget.
            The council is not a neutral administrator. It is a beneficiary of
            the BID&apos;s survival.
          </p>
          <p>
            The same council officer who manages the levy collection, who
            attends the BID board meetings, who co-develops the BID proposal,
            is the officer responsible for ensuring the ballot is conducted
            properly. That is not a conspiracy. It is the framework.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The threshold for success
          </h2>
          <p>
            A BID ballot requires a simple majority by number of voters and
            by aggregate rateable value. Not a majority of all eligible
            voters. A majority of those who vote.
          </p>
          <p>
            Non-participation benefits the incumbent. If 30% of eligible
            businesses vote and 51% of those vote yes, the BID is renewed. It
            becomes compulsory for 100% of businesses in the area, including
            the 70% who did not participate and the 49% who voted against.
          </p>
          <p>
            The incumbent BID has every advantage in driving turnout among
            supporters. It has the mailing list. It has the events calendar.
            It has the relationships. It has the staff. It has, critically, the
            levy income to fund the renewal campaign from existing resources.
            The opposition has none of these things.
          </p>
          <p>
            A small business owner who objects to the levy has no funded
            mechanism to organise against it. The BID itself, funded by the
            levy of that same business owner, campaigns for its own renewal.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The information asymmetry
          </h2>
          <p>
            Before the ballot, the BID produces a business plan. The business
            plan describes the services the BID will provide if renewed. It
            is the only formal document voters receive.
          </p>
          <p>
            The business plan is written by the BID. It presents the BID&apos;s
            account of its own achievements. It promises future services. It
            does not contain a comparable account of what the alternative looks
            like. There is no opposition manifesto. There is no independent
            assessment of whether the previous term delivered value. The
            business plan is the only narrative, and it is written by the
            organisation seeking the vote.
          </p>
          <p>
            A voter who wants to make an informed decision has one document.
            That document is a sales pitch by the incumbent.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The structural conclusion
          </h2>
          <p>
            The proposer defines the boundary. The proposer writes the only
            narrative. The council, a financial beneficiary, administers the
            process. Non-voters strengthen the incumbent position. The
            incumbent has funded resources to campaign. The opposition has
            nothing.
          </p>
          <p>
            No element of this is illegal. Every element of it is structural.
            The ballot outcome is not determined by the quality of the BID.
            It is determined by a mechanism that systematically advantages
            the organisation already in place.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            This is not an argument that any particular BID has manipulated
            its ballot. It is an observation that the ballot model itself is
            designed in a way that makes incumbent defeat structurally
            improbable. The outcome is predictable before a single vote is
            cast.
          </p>

          <div className="border-t border-[#ddddd5] my-12" />

          <p className="text-xs text-[#a0a0a0] leading-relaxed">
            Sources: Business Improvement Districts (England) Regulations
            2004; Local Government Act 2003, Part 4; BID ballot outcome data
            published by British BIDs and the Institute of Place Management.
            This analysis names no individual or organisation and makes no
            allegation of wrongdoing.
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
            href="/blog/council-officer-dual-role-problem"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
          >
            Next: The Council Officer Dual-Role Problem
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
