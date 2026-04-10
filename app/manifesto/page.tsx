import type { Metadata } from "next";
import Link from "next/link";
import InvestigationClosed from "@/components/InvestigationClosed";

export const metadata: Metadata = {
  title: "The SIBA Manifesto",
  description:
    "The 2026 Vision, the failure of the mandatory BID levy model, and the SIBA Technical Charter for Southport independent businesses.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.siba.digital/manifesto",
  },
  openGraph: {
    title: "The SIBA Manifesto | SIBA Digital",
    description:
      "Why SIBA exists, what it is committed to delivering, and why the current Business Improvement District model is not fit for purpose in 2026.",
    url: "https://www.siba.digital/manifesto",
    type: "website",
  },
};

const manifestoSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The SIBA Manifesto",
  description:
    "The 2026 Vision, the failure of the mandatory BID levy model, and the SIBA Technical Charter for Southport independent businesses.",
  datePublished: "2026-04-01",
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
    "@id": "https://www.siba.digital/manifesto",
  },
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manifestoSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-5">
          SIBA Technical Charter, April 2026
        </p>
        <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-4 leading-[1.15]">The Manifesto</h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed mb-10">
          Why SIBA exists, what it is committed to delivering, and why the current
          Business Improvement District model is not fit for purpose in 2026.
        </p>

        <div className="mb-14">
          <InvestigationClosed />
        </div>

        {/* Section nav */}
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-[#ddddd5] py-3 mb-16 text-[13px]">
          <span className="text-[#a0a0a0] font-medium mr-1">Jump to</span>
          <a href="#vision" className="text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors">01. 2026 Vision</a>
          <a href="#levy" className="text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors">02. The Levy Failure</a>
          <a href="#charter" className="text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors">03. Technical Charter</a>
        </nav>

        {/* 01 */}
        <section id="vision" className="scroll-mt-24 pb-14 mb-14 border-b border-[#ddddd5]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">01</p>
          <h2 className="text-2xl text-[#112d6e] mb-2">The 2026 Vision</h2>
          <p className="text-sm text-[#6b6b6b] mb-6">The commercial case for acting now</p>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              The Open Championship comes to Royal Birkdale in July 2026. That means roughly
              150,000 visitors arriving in this town over seven days, most of them on
              smartphones, many of them looking for somewhere to eat, drink, and stay. It is
              the single largest commercial opportunity Southport has had in a decade.
            </p>
            <p>
              The question is not whether the footfall will arrive. It will. The question is
              whether Southport&apos;s independent businesses will be findable when it does.
              Right now, too many of them are not. Websites that load in four seconds. Google
              Business profiles with outdated hours. No structured data. No mobile
              optimisation. No local SEO worth the name.
            </p>
            <p>
              MLEC, the Marine Lake Events Centre, opens in 2027 and projects an additional
              515,000 visitors per year. That is not a one-off. That is structural change in
              footfall patterns for this town for the next decade.
            </p>
            <p>
              SIBA&apos;s 2026 vision is simple: every PR8 and PR9 independent business should
              be technically ready before Royal Birkdale hosts The Open. Fast. Findable.
              Optimised for the searches that will actually happen in July.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section id="levy" className="scroll-mt-24 pb-14 mb-14 border-b border-[#ddddd5]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">02</p>
          <h2 className="text-2xl text-[#112d6e] mb-2">The Failure of the Mandatory Levy Model</h2>
          <p className="text-sm text-[#6b6b6b] mb-6">A structural critique, not a political one</p>
          <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">
            <p>
              Business Improvement Districts were a reasonable idea in 2004. A collective levy,
              pooled for collective benefit. Events, marketing, street improvements. The model
              made sense when digital infrastructure was not the primary driver of commercial
              success. It does not make sense now.
            </p>
            <p>
              The BID levy is mandatory. If your business falls within the defined zone, you
              pay. There is no opt-out based on whether you are receiving value. A restaurant
              paying &pound;2,400 per year has no practical way to direct any of that money toward
              the SEO audit that would fill its tables on a Tuesday in November.
            </p>
            <p>
              The problem is not that BIDs do events badly. Some of the events are fine. The
              problem is that events are not the primary driver of business success in 2026.
              Search is. Mobile is. Page speed is. Google Business Profile completeness is.
            </p>

            <div className="border-l-2 border-[#ccccc4] pl-5 py-2 my-6">
              <p className="text-sm font-semibold text-[#1c1c1c] mb-2">The calculation</p>
              <p className="text-sm text-[#6b6b6b]">
                A Southport business with a rateable value of &pound;120,000 pays approximately
                &pound;2,400 per year in BID levy at a 2% rate. At the time of this case study,
                SIBA provided SEO audits, local ranking reports, and levy ROI analysis
                to affected businesses.
              </p>
            </div>

            <p>
              The mandatory model also removes the market discipline that forces organisations
              to prove their value. SIBA operates on the voluntary model. If we are not useful,
              businesses do not join. That is the correct incentive structure.
            </p>
            <p>
              For the full structural analysis of why the BID model breeds cronyism by
              design, regardless of who runs it,{" "}
              <Link href="/analysis/bid-cronyism-by-design" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                read the analysis
              </Link>.
            </p>
          </div>
        </section>

        {/* 03 */}
        <section id="charter" className="scroll-mt-24 pb-14 mb-14 border-b border-[#ddddd5]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">03</p>
          <h2 className="text-2xl text-[#112d6e] mb-2">The SIBA Technical Charter</h2>
          <p className="text-sm text-[#6b6b6b] mb-8">Commitments, not aspirations</p>
          <div className="space-y-6">
            {[
              {
                title: "Transparency as default",
                body: "SIBA publishes BID levy rates, rateable value data, and its own finances. We do not hide numbers. If data is publicly available, we make it accessible.",
              },
              {
                title: "Technical standards, not marketing",
                body: "SIBA measures success by Lighthouse scores, search rankings, and Core Web Vitals, not by social media impressions or event attendance.",
              },
              {
                title: "No mandatory fees",
                body: "SIBA membership is voluntary. No business is compelled to join or pay. If we are not providing value, businesses should not join us.",
              },
              {
                title: "PR8 and PR9 focus",
                body: "SIBA serves businesses in the PR8 and PR9 postcode areas. Southport town centre, Birkdale, Churchtown, and the surrounding commercial areas. Not a wider region.",
              },
              {
                title: "2026 as the operational deadline",
                body: "Every business in scope should be technically ready before Royal Birkdale hosts The Open in July 2026. That is the deadline SIBA is working toward.",
              },
              {
                title: "Data provided, not withheld",
                body: "Any analysis SIBA conducts for a business belongs to that business. We do not use audit data to create dependency. We hand over the report.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-[#1c1c1c] mb-1.5">{item.title}</p>
                <p className="text-sm text-[#3d3d3d] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
