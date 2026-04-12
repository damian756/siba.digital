import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Council Officer Dual-Role Problem in BID Governance",
  description:
    "Across the BID model nationally, the council appoints a representative who simultaneously administers the ballot, manages levy collection, and sits in the governance structure they are supposed to oversee.",
  alternates: {
    canonical:
      "https://www.siba.digital/blog/council-officer-dual-role-problem",
  },
  openGraph: {
    title: "The Council Officer Dual-Role Problem in BID Governance",
    description:
      "Why the council officer dual-role in BID governance is a structural flaw, not an individual failing.",
    url: "https://www.siba.digital/blog/council-officer-dual-role-problem",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Council Officer Dual-Role Problem in BID Governance",
  description:
    "Across the BID model nationally, the council appoints a representative who simultaneously administers the ballot, manages levy collection, and sits in the governance structure they are supposed to oversee.",
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
      "https://www.siba.digital/blog/council-officer-dual-role-problem",
  },
};

export default function DualRolePost() {
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

        <h1 className="mb-6">The Council Officer Dual-Role Problem</h1>

        <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12">
          The BID framework asks council officers to simultaneously oversee
          and participate in the same governance structure. This is not a
          local anomaly. It is how the national model was designed.
        </p>

        <div className="prose-siba space-y-6 text-[15px] text-[#3d3d3d] leading-relaxed">
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The framework
          </h2>
          <p>
            Under the BID regulations, the local authority has three distinct
            roles. It administers the ballot. It collects the levy. And it
            appoints a representative to the BID board.
          </p>
          <p>
            These three functions are routinely assigned to the same officer
            or the same small team within the council. The officer who
            manages the ballot process is the officer who manages the levy
            collection is the officer who sits on the board that decides how
            the levy is spent.
          </p>
          <p>
            The regulations do not prohibit this. They assume it. The BID
            Regulations 2004 require the billing authority to hold the ballot
            and collect the levy, and standard practice across English local
            authorities is to appoint a senior officer with responsibility
            for economic development or town centre management to the BID
            board as the council&apos;s formal representative.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Why this creates a structural conflict
          </h2>
          <p>
            The council officer on the BID board is supposed to represent the
            council&apos;s interests. But the council&apos;s interests are not
            neutral. The council benefits financially and operationally from
            the BID&apos;s existence:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The council charges a levy collection fee, typically 3-5% of
              total levy income.
            </li>
            <li>
              The BID delivers town centre services that the council would
              otherwise need to fund directly.
            </li>
            <li>
              The BID provides partnership governance that councils cite in
              funding applications and regeneration bids.
            </li>
            <li>
              BID-funded marketing and events supplement council tourism
              strategies without appearing on the council&apos;s balance sheet.
            </li>
          </ul>
          <p>
            The officer is therefore representing an organisation that has a
            direct financial interest in the BID&apos;s survival on the board
            of the BID itself. The officer is simultaneously inside the
            governance structure and supposed to be overseeing it.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The oversight gap
          </h2>
          <p>
            In standard corporate governance, oversight is separated from
            operations. Auditors do not sit on the board they audit.
            Regulators do not participate in the decisions they regulate.
            This separation is considered fundamental to accountability.
          </p>
          <p>
            The BID model inverts this. The authority responsible for ensuring
            the levy is properly collected and the ballot properly conducted
            sits inside the governance structure that benefits from both. The
            council officer participates in spending decisions, attends
            strategy discussions, and builds working relationships with the
            BID board members whose conduct they are nominally positioned to
            oversee.
          </p>
          <p>
            No individual needs to act improperly. The structure removes the
            distance that oversight requires. Familiarity, shared objectives,
            and institutional alignment do the rest.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The declaration problem
          </h2>
          <p>
            Council officers are subject to their authority&apos;s code of
            conduct and may have obligations to declare interests. But the
            nature of the BID board role makes this structurally inadequate.
          </p>
          <p>
            The interest is not a one-off financial benefit that can be
            declared and managed. It is a permanent, ongoing structural
            relationship between the council and the BID. Every decision the
            board makes affects the council&apos;s interests. Every meeting
            the officer attends reinforces the working relationship. The
            officer cannot declare the interest and then participate
            neutrally because the interest is the participation itself.
          </p>
          <p>
            A register of interests manages discrete, identifiable conflicts.
            It does not manage structural conflicts that are inherent to
            the role.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The platform question
          </h2>
          <p>
            The dual-role problem extends beyond board governance when the
            council officer also manages publicly-funded platforms that
            interact with the BID&apos;s commercial activities.
          </p>
          <p>
            If the same officer who sits on the BID board also manages a
            council-run tourism website, the editorial decisions on that
            website are not independent of the BID relationship. The officer
            is making editorial decisions about which businesses receive
            publicly-funded visibility while simultaneously sitting on the
            board of an organisation whose levy-paying members include those
            same businesses.
          </p>
          <p>
            The platform becomes an extension of the dual-role. The editorial
            choices are shaped by the same structural proximity that shapes
            every other BID board decision.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The structural conclusion
          </h2>
          <p>
            The council officer dual-role is not a local governance failure
            that better officers or better councils could fix. It is built
            into the BID framework at national level. The regulations assume
            the council will be simultaneously regulator, administrator, and
            participant.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            The absence of structural separation between oversight and
            participation is not a flaw in implementation. It is a feature
            of the design. Every BID in England operates under the same
            framework, and every one produces the same structural conflict.
          </p>

          <div className="border-t border-[#ddddd5] my-12" />

          <p className="text-xs text-[#a0a0a0] leading-relaxed">
            Sources: Business Improvement Districts (England) Regulations
            2004; Local Government Act 2003, Part 4; Localism Act 2011;
            Nolan Principles of Public Life; standard council officer codes
            of conduct. This analysis names no individual or organisation and
            makes no allegation of wrongdoing.
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-[#ddddd5] flex items-center justify-between">
          <Link
            href="/blog/why-bid-ballots-favour-incumbents"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors"
          >
            <ArrowLeft size={14} />
            Previous
          </Link>
          <Link
            href="/blog/how-procurement-opacity-compounds"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
          >
            Next: Procurement Opacity
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
