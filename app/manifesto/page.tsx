import type { Metadata } from "next";
import Link from "next/link";
import InvestigationClosed from "@/components/InvestigationClosed";

export const metadata: Metadata = {
  title: "The SIBA Manifesto",
  description:
    "The 2026 Vision, the failure of the mandatory BID levy model, and the SIBA Technical Charter for Southport independent businesses.",
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
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manifestoSchema) }}
      />
      {/* Header */}
      <div className="border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-orange mb-5">SIBA Technical Charter, April 2026</span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">The Manifesto</h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            Why SIBA exists, what it is committed to delivering, and why the current
            Business Improvement District model is not fit for purpose in 2026.
          </p>
        </div>
      </div>

      {/* Investigation closed note */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10">
        <InvestigationClosed />
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-16 z-10 bg-[#0f172a] border-b border-[#1e293b]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-1 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] pr-3 mr-1 border-r border-[#334155] flex-shrink-0">
              Jump to
            </span>
            {[
              { href: "#vision", label: "01. 2026 Vision" },
              { href: "#levy", label: "02. The Levy Failure" },
              { href: "#charter", label: "03. Technical Charter" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 px-2.5 py-1 text-xs font-semibold text-[#64748b] hover:text-[#f97316] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* 01 */}
        <section id="vision" className="scroll-mt-32">
          <div className="flex items-start gap-5 mb-7">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center text-xs font-bold text-[#f97316]">
              01
            </span>
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a]">The 2026 Vision</h2>
              <p className="text-sm text-[#94a3b8] mt-1">The commercial case for acting now</p>
            </div>
          </div>
          <div className="space-y-4 text-[#475569] leading-relaxed pl-14">
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

        <div className="border-t border-[#e2e8f0]" />

        {/* 02 */}
        <section id="levy" className="scroll-mt-32">
          <div className="flex items-start gap-5 mb-7">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center text-xs font-bold text-[#f97316]">
              02
            </span>
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a]">The Failure of the Mandatory Levy Model</h2>
              <p className="text-sm text-[#94a3b8] mt-1">A structural critique, not a political one</p>
            </div>
          </div>
          <div className="space-y-4 text-[#475569] leading-relaxed pl-14">
            <p>
              Business Improvement Districts were a reasonable idea in 2004. A collective levy,
              pooled for collective benefit. Events, marketing, street improvements. The model
              made sense when digital infrastructure was not the primary driver of commercial
              success. It does not make sense now.
            </p>
            <p>
              The BID levy is mandatory. If your business falls within the defined zone, you
              pay. There is no opt-out based on whether you are receiving value. A restaurant
              paying £2,400 per year has no practical way to direct any of that money toward
              the SEO audit that would fill its tables on a Tuesday in November.
            </p>
            <p>
              The problem is not that BIDs do events badly. Some of the events are fine. The
              problem is that events are not the primary driver of business success in 2026.
              Search is. Mobile is. Page speed is. Google Business Profile completeness is.
            </p>

            <div className="my-6 card p-5 bg-[#fff7ed] border-[#fed7aa]">
              <p className="text-sm font-semibold text-[#0f172a] mb-2">The calculation</p>
              <p className="text-sm text-[#64748b]">
                A Southport business with a rateable value of £120,000 pays approximately
                £2,400 per year in BID levy at a 2% rate. At the time of this case study,
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
              <Link href="/analysis/bid-cronyism-by-design" className="text-[#f97316] hover:underline font-medium">
                read the analysis
              </Link>.
            </p>
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />

        {/* 03 */}
        <section id="charter" className="scroll-mt-32">
          <div className="flex items-start gap-5 mb-7">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center text-xs font-bold text-[#f97316]">
              03
            </span>
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a]">The SIBA Technical Charter</h2>
              <p className="text-sm text-[#94a3b8] mt-1">Commitments, not aspirations</p>
            </div>
          </div>
          <div className="pl-14 space-y-4">
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
              <div key={item.title} className="card p-5 flex gap-4">
                <div className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-[#f97316]" />
                <div>
                  <p className="text-sm font-semibold text-[#0f172a] mb-1">{item.title}</p>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0]" />
      </div>
    </div>
  );
}
