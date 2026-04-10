import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Philosophy | SIBA Digital",
  description:
    "Why SIBA exists, who it serves, and how it works. The belief that the people who pay for something have a right to know how it is spent, who decided to spend it, and what relationships shaped those decisions.",
  alternates: {
    canonical: "https://www.siba.digital/philosophy",
  },
  openGraph: {
    title: "Our Philosophy | SIBA Digital",
    description:
      "Why SIBA exists, who it serves, and how it works. The belief that accountability is not destructive. It is protective.",
    url: "https://www.siba.digital/philosophy",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Our Philosophy",
  description:
    "Why SIBA exists, who it serves, and how it works. The people who pay for something have a right to know how it is spent.",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
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
    "@id": "https://www.siba.digital/philosophy",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-5">
          SIBA, April 2026
        </p>
        <h1 className="text-3xl text-[#1c1c1c] mb-4">Our Philosophy</h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed mb-16">
          Why SIBA exists. Who it is here for. And what it is built on.
        </p>

        {/* Opening: direct address */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-5">
            If you are reading this
          </p>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              If you are a business owner in PR8 or PR9 who has spent years paying a levy you do
              not fully understand, to an organisation you did not choose, for outcomes you cannot
              measure, this page is for you.
            </p>
            <p>
              If you have asked where the money goes and not received a straight answer. If you
              have watched certain businesses get promoted on publicly-funded platforms while yours
              was ignored. If you felt something was wrong but had no way to document it.
            </p>
            <p className="font-semibold text-[#1c1c1c]">
              You were not wrong. Nobody had simply sat down and read the documents carefully.
              SIBA did.
            </p>
          </div>
        </section>

        {/* The belief */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <h2 className="text-2xl text-[#1c1c1c] mb-5">The belief we are built on</h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              The people who pay for something have a right to know how it is spent, who decided to
              spend it, and what relationships shaped those decisions.
            </p>
            <p>
              That belief is not complicated. It does not require a political position. It does not
              require anger or grievance. It requires only the willingness to ask questions that
              should have been asked years ago, and the discipline to source every answer from
              documents that already exist in the public domain.
            </p>
            <p>
              Companies House filings. Published committee minutes. BID business plans. Council
              websites. Freedom of Information requests. Everything SIBA has found was already
              there. Nobody had read it carefully. We did. And{" "}
              <Link href="/analysis" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                we published what we found
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Who we serve */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <h2 className="text-2xl text-[#1c1c1c] mb-5">The businesses we are here for</h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              The independent restaurant on a side street that has never been mentioned on{" "}
              <Link href="/analysis/selective-promotion" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                Southport&apos;s publicly-funded tourism platform
              </Link>
              . The retailer paying &pound;2,400 a year who got a letter saying their levy had increased
              and did not get a reply when they asked what it was spent on last year. The cafe owner
              who cannot get a straight answer from the BID. The hotel on the seafront that is not
              part of a connected commercial group and has never appeared in a BID feature.
            </p>
            <p>
              These are the businesses SIBA was built to serve. They are not anti-investment. They
              are not against Southport&apos;s regeneration. They want the town to thrive. They just
              want to know that the money they are compelled to hand over is spent fairly, governed
              honestly, and accounted for in public.
            </p>
            <p>
              That is not an unreasonable thing to want. It is the legal minimum. SIBA is making
              sure it happens.
            </p>
          </div>
        </section>

        {/* Horizontal networks */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <h2 className="text-2xl text-[#1c1c1c] mb-5">What the BID replaced</h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              Before the BID existed, businesses in Southport talked directly to each other.
              Horizontal. Peer to peer. A restaurant called the hotel next door because the hotel
              was good. A retailer collaborated with an events organiser because the partnership made
              commercial sense. Nobody sat in the middle. Nobody controlled who got promoted and who
              got ignored.
            </p>
            <p>
              When the BID was established, it inserted itself between those businesses as a
              mandatory intermediary. Businesses no longer reach out directly. They route through
              the BID. Or through BID-controlled platforms. Or through{" "}
              <Link href="/analysis/andrew-brown-bid-media" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                BID-contracted media
              </Link>
              . The levy funds this intermediary. The intermediary is compulsory.{" "}
              <Link href="/analysis/bid-cronyism-by-design" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                And the intermediary is governed by a board
              </Link>
              .
            </p>
            <p>
              That board decides where the money goes. Who gets promoted. Which suppliers get
              contracted. Which businesses appear on the tourism platform and which do not. When
              members of that board have undisclosed commercial relationships with the businesses
              that benefit most, the entire structure becomes something other than what it was sold
              as.
            </p>
            <p>
              SIBA is the alternative model. No levy. No board. No intermediary. Direct
              relationships between businesses, direct access to digital tools, direct accountability
              to the people we serve. If we are not useful, businesses do not join us. That is the
              correct incentive structure and{" "}
              <Link href="/manifesto" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                it is written into our founding charter
              </Link>
              .
            </p>
          </div>
        </section>

        {/* What we are not */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <h2 className="text-2xl text-[#1c1c1c] mb-5">Three things worth stating clearly</h2>
          <div className="space-y-6">
            {[
              {
                heading: "We are not anti-business.",
                body: "The businesses paying the BID levy are businesses. The independent restaurants, the retailers, the hotels on the side streets. They are the businesses SIBA was built to serve. We are not against investment in Southport. We are against the compulsory extraction of money from those businesses to fund a governance structure that serves a connected network rather than the people paying for it.",
              },
              {
                heading: "We are not anti-regeneration.",
                body: "Southport needs investment. The Marine Lake Events Centre, the restored Victorian buildings, the hospitality investment on Lord Street. These are real and welcome. What we question is not the investment but the governance of the institutions allocating it. Public money spent well is a good thing. Public money spent through an opaque network of interlocking interests without proper disclosure is a different thing entirely. The two are not the same and conflating them is how accountability gets suppressed.",
              },
              {
                heading: "We are not a campaign.",
                body: "SIBA does not campaign for political positions, endorse candidates or align with parties. We publish documented findings. We file Freedom of Information requests. We offer right of reply to every party named in every publication. We correct factual errors promptly and transparently. We let the evidence speak and trust readers to draw their own conclusions. That independence is not a constraint. It is the source of everything SIBA has achieved in its first days. The moment a transparency organisation becomes identified with a political position its findings become deniable. We will not let that happen.",
              },
            ].map((item) => (
              <div key={item.heading}>
                <p className="text-sm font-semibold text-[#1c1c1c] mb-2">{item.heading}</p>
                <p className="text-sm text-[#3d3d3d] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="mb-14 pb-14 border-b border-[#e8e8e4]">
          <h2 className="text-2xl text-[#1c1c1c] mb-5">Transparency is protective, not destructive</h2>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              Every party named in a SIBA publication is offered a right of reply. Every factual
              claim is sourced to a public document and linked directly. Every{" "}
              <Link href="/foi" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                FOI response is published in full
              </Link>
              . Every contact received in connection with the investigation is{" "}
              <Link href="/contact-log" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                logged publicly
              </Link>
              .
            </p>
            <p>
              This is not aggressive journalism. It is accountable journalism. The difference
              matters. We are not trying to destroy reputations. We are trying to establish facts.
              If the facts are uncomfortable for some people the discomfort is a consequence of the
              facts, not of the journalism.
            </p>
            <p>
              Four days in, SIBA has documented{" "}
              <Link href="/analysis/bid-treasurer-mikhail" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                a governance conflict at the heart of the BID board
              </Link>
              ,{" "}
              <Link href="/analysis/selective-promotion" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                a pattern of selective promotion on a publicly-funded platform
              </Link>
              ,{" "}
              <Link href="/analysis/andrew-brown-bid-media" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                an undisclosed commercial relationship between the BID&apos;s contracted media partner
                and its Treasurer&apos;s employer
              </Link>
              , and{" "}
              <Link href="/reports/mark-catherall-visit-southport" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                a council officer running the town&apos;s tourism platform while sitting on the BID board
              </Link>
              . All of it from public documents. None of it required inside information. It required
              only the willingness to read carefully and the discipline to source every claim.
            </p>
            <p>
              We have submitted{" "}
              <Link href="/foi" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                15 Freedom of Information requests to Sefton Council
              </Link>
              . Every response will be published in full. If the answers are unremarkable, we will
              say so. If they reveal further questions, we will ask them.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center py-8">
          <div className="space-y-2 mb-8">
            <p className="text-2xl text-[#1c1c1c]">We are not finished.</p>
            <p className="text-2xl text-[#1c1c1c]">We are not stopping.</p>
            <p className="text-2xl font-semibold text-[#1c1c1c]">And we are not for sale.</p>
          </div>
          <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-md mx-auto mb-6">
            If you are a business in PR8 or PR9 and you want to understand what the levy costs
            you, what it should be doing, and what SIBA has found, start here.
          </p>
          <p className="text-[13px] text-[#a0a0a0]">
            This page is part of SIBA&apos;s founding case study archive.
          </p>
        </section>

      </div>
    </div>
  );
}
