import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The SIBA Manifesto",
  description:
    "The 2026 Vision, the failure of the mandatory BID levy model, and the SIBA Technical Charter for Southport independent businesses.",
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/8 bg-[#0a1628] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            SIBA Technical Charter — April 2026
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">The Manifesto</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Why SIBA exists, what it is committed to delivering, and why the current Business
            Improvement District model is not fit for purpose in 2026.
          </p>
        </div>
      </div>

      {/* Manifesto cover image */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative w-full overflow-hidden rounded-xl border border-white/8 shadow-2xl">
          <Image
            src="/images/manifesto-cover.png"
            alt="Supporting Southport's Independents — SIBA Manifesto"
            width={1280}
            height={640}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Section 1: The 2026 Vision */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-[#f97316] font-mono text-sm font-bold mt-1">01</span>
            <div>
              <h2 className="text-2xl font-bold text-white">The 2026 Vision</h2>
              <p className="text-slate-500 text-sm mt-1">The commercial case for acting now</p>
            </div>
          </div>

          <div className="pl-10 space-y-4 text-slate-300 leading-relaxed">
            <p>
              The Open Championship comes to Royal Birkdale in July 2026. That means roughly
              150,000 visitors arriving in this town over seven days, most of them on smartphones,
              many of them looking for somewhere to eat, drink, and stay. It is the single largest
              commercial opportunity Southport has had in a decade.
            </p>
            <p>
              The question is not whether the footfall will arrive. It will. The question is whether
              Southport&apos;s independent businesses will be findable when it does. Right now, too many
              of them are not. Websites that load in four seconds. Google Business profiles with
              outdated hours. No structured data. No mobile optimisation. No local SEO worth the name.
            </p>
            <p>
              MLEC, the Marine Lake Events Centre, opens in 2027 and projects an additional 515,000
              visitors per year. That is not a one-off. That is structural change in footfall
              patterns for this town for the next decade. The businesses that build their digital
              infrastructure now will benefit from that. The ones that don&apos;t will be invisible to
              the people walking past their doors.
            </p>
            <p>
              SIBA&apos;s 2026 vision is simple: every PR8 and PR9 independent business should be
              technically ready before Royal Birkdale hosts The Open. Fast. Findable. Optimised
              for the searches that will actually happen in July. That is what we are building
              toward. That is the deadline.
            </p>
          </div>
        </section>

        <div className="border-t border-white/8" />

        {/* Section 2: The Failure of the Mandatory Levy */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-[#f97316] font-mono text-sm font-bold mt-1">02</span>
            <div>
              <h2 className="text-2xl font-bold text-white">
                The Failure of the Mandatory Levy Model
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                A structural critique, not a political one
              </p>
            </div>
          </div>

          <div className="pl-10 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Business Improvement Districts were a reasonable idea in 2004. A collective levy,
              pooled for collective benefit. Events, marketing, street improvements. The model made
              sense when digital infrastructure was not the primary driver of commercial success.
            </p>
            <p>
              It does not make sense now.
            </p>
            <p>
              The BID levy is mandatory. If your business falls within the defined zone, you pay.
              There is no opt-out based on whether you are receiving value. There is no mechanism
              to redirect your levy to the services you actually need. A restaurant paying
              £2,400 per year has no practical way to direct any of that money toward the SEO
              audit that would fill its tables on a Tuesday in November.
            </p>
            <p>
              The problem is not that BIDs do events badly. Some of the events are fine. The
              problem is that events are not the primary driver of business success in 2026. Search
              is. Mobile is. Page speed is. Google Business Profile completeness is. These are
              the variables that determine whether a customer chooses you or your competitor.
              And they are largely absent from what Southport&apos;s BID delivers.
            </p>
            <p>
              The levy transparency issue compounds this. Rateable values, levy calculations,
              and spending breakdowns are technically public information. They are not presented
              in a format that allows a business owner to understand what they are paying, why,
              and what they receive in return. SIBA publishes this data. It is not a political
              act. It is a basic service.
            </p>

            {/* Callout box */}
            <div className="my-6 rounded-lg border border-orange-500/20 bg-orange-500/5 p-5">
              <p className="text-sm font-semibold text-orange-400 mb-2">The calculation</p>
              <p className="text-sm text-slate-300">
                A Southport business with a rateable value of £120,000 pays approximately
                £2,400 per year in BID levy at a 2% rate. SIBA provides SEO audits, local
                ranking reports, and levy ROI analysis at no cost. Use the{" "}
                <Link href="/audit" className="text-[#f97316] hover:underline">
                  Levy ROI Calculator
                </Link>{" "}
                to see your own numbers.
              </p>
            </div>

            <p>
              The mandatory model also removes the market discipline that forces organisations
              to prove their value. A voluntary membership scheme must demonstrate that
              membership is worth the cost or members leave. A mandatory levy has no such
              pressure. SIBA operates on the voluntary model. If we are not useful, businesses
              do not join. That is the correct incentive structure.
            </p>
          </div>
        </section>

        <div className="border-t border-white/8" />

        {/* Section 3: The Technical Charter */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-[#f97316] font-mono text-sm font-bold mt-1">03</span>
            <div>
              <h2 className="text-2xl font-bold text-white">The SIBA Technical Charter</h2>
              <p className="text-slate-500 text-sm mt-1">Commitments, not aspirations</p>
            </div>
          </div>

          <div className="pl-10 space-y-6">
            {[
              {
                title: "Transparency as default",
                body: "SIBA publishes BID levy rates, rateable value data, and its own finances. We do not hide numbers. If data is publicly available, we make it accessible.",
              },
              {
                title: "Technical standards, not marketing",
                body: "SIBA measures success by Lighthouse scores, search rankings, and Core Web Vitals, not by social media impressions or event attendance. The standard is technical and objective.",
              },
              {
                title: "No mandatory fees",
                body: "SIBA membership is voluntary. No business is compelled to join or pay. If we are not providing value, businesses should not join us. That is intentional.",
              },
              {
                title: "PR8 and PR9 focus",
                body: "SIBA serves businesses in the PR8 and PR9 postcode areas. That is Southport town centre, Birkdale, Churchtown, and the surrounding commercial areas. Not a wider region. Not a theoretical catchment. These postcodes.",
              },
              {
                title: "2026 as the operational deadline",
                body: "Every business in scope should be technically ready before Royal Birkdale hosts The Open in July 2026. That is the deadline SIBA is working toward. It is achievable.",
              },
              {
                title: "Data provided, not withheld",
                body: "Any analysis SIBA conducts for a business belongs to that business. We do not use audit data to create dependency. We hand over the report and you decide what to do with it.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-[#f97316]" />
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/8" />

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-6 leading-relaxed">
            If that sounds like the kind of organisation Southport should have had ten years ago,
            you&apos;re right. It should. Request an audit and let&apos;s get started.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 rounded bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            Request a Free SEO Audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
