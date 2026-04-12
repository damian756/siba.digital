import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title:
    "How Procurement Opacity Compounds in Publicly-Funded Governance",
  description:
    "When an organisation is funded by compulsory levy and managed by a board drawn from levy payers, procurement decisions flow towards existing relationships. No individual decision is corrupt. The compounding effect is structural and predictable.",
  alternates: {
    canonical:
      "https://www.siba.digital/blog/how-procurement-opacity-compounds",
  },
  openGraph: {
    title:
      "How Procurement Opacity Compounds in Publicly-Funded Governance",
    description:
      "A structural analysis of why BID procurement patterns produce predictable concentrations of benefit regardless of individual intent.",
    url: "https://www.siba.digital/blog/how-procurement-opacity-compounds",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Procurement Opacity Compounds in Publicly-Funded Governance",
  description:
    "When an organisation is funded by compulsory levy and managed by a board drawn from levy payers, procurement decisions flow towards existing relationships.",
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
      "https://www.siba.digital/blog/how-procurement-opacity-compounds",
  },
};

export default function ProcurementPost() {
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

        <h1 className="mb-6">
          How Procurement Opacity Compounds in Publicly-Funded Governance
        </h1>

        <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12">
          A single procurement decision made informally is unremarkable.
          Hundreds of informal procurement decisions compounding over a
          five-year BID term produce a pattern that is structurally
          indistinguishable from cronyism.
        </p>

        <div className="prose-siba space-y-6 text-[15px] text-[#3d3d3d] leading-relaxed">
          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The procurement framework that does not exist
          </h2>
          <p>
            A BID is a private company limited by guarantee. It is funded by a
            compulsory levy collected under statutory authority. The money is
            public in origin and compulsory in nature, but the company that
            spends it is private.
          </p>
          <p>
            Public bodies are subject to the Public Contracts Regulations
            2015. Local authorities must follow procurement frameworks,
            publish tenders above threshold values, and demonstrate value for
            money through competitive processes. BID companies are not subject
            to these regulations. They are private companies spending public
            money with no statutory procurement obligations.
          </p>
          <p>
            Most BIDs have no published procurement policy. Those that do
            typically set their own thresholds, their own process, and their
            own definition of competitive tendering. There is no external
            audit requirement specific to BID procurement. There is no public
            register of BID contracts. There is no Freedom of Information
            obligation for the BID company itself.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            How informal procurement works in practice
          </h2>
          <p>
            A BID board meets quarterly. Between meetings, the BID manager
            makes day-to-day spending decisions. A website needs updating.
            A photographer is needed for an event. A PR consultant is engaged
            for a campaign. Christmas lights need procuring. A social media
            manager is hired.
          </p>
          <p>
            Each of these decisions is, individually, below any reasonable
            procurement threshold. Each one is made informally. The BID
            manager contacts someone they know. Someone they have worked
            with before. Someone a board member recommends.
          </p>
          <p>
            Over a five-year BID term, these informal decisions accumulate.
            The same photographer is engaged repeatedly. The same PR
            consultant is retained across multiple campaigns. The same web
            developer maintains the site. The same events company is
            contracted year after year. None of these engagements were
            individually large enough to trigger a competitive process. In
            aggregate, they represent a significant concentration of levy
            income flowing to a small number of connected suppliers.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The compounding mechanism
          </h2>
          <p>
            The first informal procurement decision is the one that matters
            most, because it establishes the relationship. Once a supplier
            has been engaged, they have an advantage in every subsequent
            decision. They know the BID&apos;s systems. They know the
            manager&apos;s preferences. They are the path of least
            resistance.
          </p>
          <p>
            The second engagement is easier to justify than the first. The
            third is easier than the second. By the fourth or fifth, the
            supplier is effectively embedded. The BID manager is not making a
            procurement decision any more. They are continuing a relationship.
          </p>
          <p>
            Now add the board dimension. If a board member recommended the
            supplier, or if the supplier also works for a board member&apos;s
            business, the relationship has a structural anchor. Changing
            supplier means challenging a board member&apos;s recommendation.
            The BID manager reports to the board. The incentive to retain the
            existing supplier is not just operational convenience. It is
            organisational self-preservation.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            Why transparency does not fix this
          </h2>
          <p>
            The standard response to procurement concerns is transparency.
            Publish the contracts. Declare the interests. Make the spending
            visible.
          </p>
          <p>
            The structural problem is that transparency mechanisms in BID
            governance are voluntary, internal, and retrospective. A BID
            might publish an annual report showing total spending categories.
            It will not publish individual supplier invoices. It might have a
            conflicts of interest policy. It will not publish the register.
            It might minute board decisions. It will not minute the informal
            conversations between meetings where the actual procurement
            decisions are made.
          </p>
          <p>
            Transparency that the governed organisation controls is not
            accountability. It is presentation. The BID decides what to
            disclose, when to disclose it, and how to frame it. The levy
            payers who fund the BID have no independent mechanism to verify
            whether the disclosed information is complete.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The media contract problem
          </h2>
          <p>
            Procurement opacity becomes most consequential when it involves
            media and communications contracts. A BID that engages a media
            partner controls the narrative about its own activities. The media
            partner is paid by the BID. The media partner produces content
            about the BID. The content is, structurally, promotional material
            funded by compulsory levy income presented as independent
            editorial.
          </p>
          <p>
            If the same media partner also provides paid services to
            businesses whose directors sit on the BID board, the editorial
            independence is compromised twice. Once by the BID contract.
            Again by the commercial relationship with board members&apos;
            businesses. The levy payer reading the output has no way to
            distinguish independent coverage from paid promotion.
          </p>
          <p>
            This is not a hypothetical. It is the predictable outcome of a
            procurement model that allows media contracts to be awarded
            informally, retained indefinitely, and operated without
            disclosure requirements.
          </p>

          <h2 className="text-xl font-bold text-[#1c1c1c] mt-12 mb-4">
            The structural conclusion
          </h2>
          <p>
            BID procurement opacity is not a failure of individual BIDs. It
            is a consequence of the model. A private company spending
            compulsory public money with no statutory procurement obligations,
            no FOI exposure, no independent audit, and no published contract
            register will, over time, concentrate spending among connected
            suppliers.
          </p>
          <p>
            The compounding effect means the problem worsens with each BID
            term. Relationships deepen. Alternatives are not tested.
            Switching costs increase. By the second or third term, the
            procurement pattern is effectively locked in.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            This is not an allegation against any specific BID. It is an
            observation about what happens when compulsory public money is
            spent through a private governance model with no structural
            procurement accountability. The outcome is predictable. It is
            also, under the current framework, entirely legal.
          </p>

          <div className="border-t border-[#ddddd5] my-12" />

          <p className="text-xs text-[#a0a0a0] leading-relaxed">
            Sources: Public Contracts Regulations 2015; Companies Act 2006;
            Business Improvement Districts (England) Regulations 2004;
            National Audit Office guidance on public money accountability;
            CIPFA Financial Management Code. This analysis names no
            individual or organisation and makes no allegation of wrongdoing.
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-[#ddddd5] flex items-center justify-between">
          <Link
            href="/blog/council-officer-dual-role-problem"
            className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors"
          >
            <ArrowLeft size={14} />
            Previous
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
          >
            All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
