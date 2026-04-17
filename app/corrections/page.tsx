import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Standards and Corrections | SIBA Digital",
  description:
    "SIBA's editorial standards, right of reply policy, and a public log of every correction made to published content since launch. Accuracy is not negotiable.",
  alternates: {
    canonical: "https://www.siba.digital/corrections",
  },
  openGraph: {
    title: "Standards and Corrections | SIBA Digital",
    description:
      "Every correction SIBA has made to published content, logged publicly with the original text, the corrected text, and the reason for the change.",
    url: "https://www.siba.digital/corrections",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Standards and Corrections",
  description:
    "SIBA's editorial standards, right of reply policy, and a public log of every correction made to published content since launch.",
  url: "https://www.siba.digital/corrections",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.siba.digital/#website",
    url: "https://www.siba.digital",
    name: "SIBA Digital",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.siba.digital",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Standards and Corrections",
        item: "https://www.siba.digital/corrections",
      },
    ],
  },
};

type Correction = {
  id: string;
  date: string;
  page: string;
  pageHref: string;
  original: string;
  corrected: string;
  reason: string;
};

const corrections: Correction[] = [
  {
    id: "C-001",
    date: "10 April 2026",
    page: "Overview and Timeline",
    pageHref: "/overview",
    original:
      "A phone call was received from a named hospitality group chairman. Removal of published content was demanded. A letter before action from solicitors followed. Content was subsequently voluntarily removed with no admission of liability.",
    corrected:
      "A phone call was received from a named hospitality group chairman. Removal of published content was demanded. Content was subsequently voluntarily removed with no admission of liability. The contact is documented in full.",
    reason:
      "The original text stated that a letter before action from solicitors followed the phone call. This was inaccurate. No letter before action was received in writing. The sentence was removed. The remainder of the description is unchanged and accurate.",
  },
  {
    id: "C-002",
    date: "10 April 2026",
    page: "About",
    pageHref: "/about",
    original:
      "The investigation survived a legal threat, prompted 15 FOI requests to Sefton Council, and produced three published reports, all sourced entirely from public documents.",
    corrected:
      "The investigation generated significant institutional attention, prompted 15 FOI requests to Sefton Council, and produced published reports sourced entirely from public documents. A phone call was received requesting removal of published content. Content was voluntarily removed with no admission of liability.",
    reason:
      "The original text used the phrase 'survived a legal threat.' This was imprecise. A phone call was received requesting removal of content. No formal legal proceedings were initiated and no letter before action was received in writing. The description has been corrected to accurately reflect what occurred.",
  },
];

export default function CorrectionsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
            Accountability
          </p>
        </Reveal>
        <Reveal>
          <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-6 leading-[1.15]">
            Standards and Corrections
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-[17px] text-[#3d3d3d] leading-relaxed max-w-xl mb-20">
            When SIBA publishes a finding that later proves inaccurate, the
            correction is made immediately, logged here in full, and the
            original text is preserved alongside it. We do not delete errors
            quietly. We correct them publicly.
          </p>
        </Reveal>

        {/* Editorial standards */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Editorial standards
            </p>
            <div className="space-y-10">
              {[
                {
                  label: "Public records only",
                  detail:
                    "Every factual claim in a SIBA publication is sourced from a publicly accessible document. If a claim cannot be traced to a verifiable public source, it does not appear in the report. This applies to Companies House filings, FOI responses, published council minutes, supplier spend data, and digital footprint analysis.",
                },
                {
                  label: "No allegation beyond the document",
                  detail:
                    "SIBA documents structural relationships and governance arrangements. We do not allege deliberate impropriety unless a document specifically evidences it. The phrase used in SIBA publications is 'the structure produces the outcome automatically.' That distinction is intentional and material.",
                },
                {
                  label: "Corrections are permanent",
                  detail:
                    "When an error is identified, the original text is preserved in this log alongside the corrected version and the reason for the change. Corrections are timestamped. No error is removed from the record.",
                },
                {
                  label: "Challenges are reviewed",
                  detail:
                    "Any individual or organisation that identifies a specific factual inaccuracy in a SIBA publication is invited to set out the challenge in writing to the address below. Every written challenge is reviewed. Where a correction is warranted, it is made. Where the original finding stands, the reason is recorded.",
                },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-semibold text-[#1c1c1c] mb-2">
                    {s.label}
                  </p>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Right of reply */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Right of reply
            </p>
            <div className="space-y-4 text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl">
              <p>
                Any individual or organisation named in a SIBA publication is
                entitled to provide a response. Responses must be submitted in
                writing. Responses that are directly relevant to a published
                finding will be published in full, unedited, alongside the
                relevant report.
              </p>
              <p>
                SIBA does not publish anonymous responses. Responses from
                solicitors acting on behalf of a named party are treated as
                responses from that party and handled accordingly.
              </p>
              <p>
                Responses that consist solely of a demand to remove content,
                without identifying a specific factual inaccuracy, are logged in
                the{" "}
                <Link
                  href="/contact-log"
                  className="text-[#2c4a52] hover:text-[#1c1c1c] transition-colors underline underline-offset-2"
                >
                  contact log
                </Link>{" "}
                and treated as contact rather than as a challenge to accuracy.
              </p>
              <p>
                To submit a right of reply or a factual challenge, contact SIBA
                in writing at:{" "}
                <a
                  href="mailto:editor@siba.digital"
                  className="text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                >
                  editor@siba.digital
                </a>
              </p>
            </div>
          </section>
        </Reveal>

        {/* Corrections log */}
        <Reveal>
          <section>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">
              Corrections log
            </p>
            <p className="text-[13px] text-[#a0a0a0] mb-10">
              {corrections.length} correction{corrections.length !== 1 ? "s" : ""} recorded since launch
            </p>

            {corrections.length === 0 ? (
              <div className="border border-[#ddddd5] bg-white p-8 text-center">
                <CheckCircle2 size={20} className="mx-auto mb-3 text-[#a0a0a0]" />
                <p className="text-sm text-[#6b6b6b]">
                  No corrections have been recorded.
                </p>
              </div>
            ) : (
              <div className="space-y-px">
                {corrections.map((c) => (
                  <div
                    key={c.id}
                    className="border-b border-[#ddddd5] bg-white p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] border border-[#ddddd5] px-2 py-0.5">
                        {c.id}
                      </span>
                      <span className="text-[13px] text-[#6b6b6b]">
                        {c.date}
                      </span>
                      <Link
                        href={c.pageHref}
                        className="inline-flex items-center gap-1 text-[13px] text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                      >
                        {c.page}
                        <ArrowRight size={11} />
                      </Link>
                    </div>

                    <div className="space-y-4 mb-5">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">
                          Original text
                        </p>
                        <p className="text-[14px] text-[#6b6b6b] leading-relaxed border-l-2 border-[#ddddd5] pl-4 italic">
                          &ldquo;{c.original}&rdquo;
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">
                          Corrected text
                        </p>
                        <p className="text-[14px] text-[#1c1c1c] leading-relaxed border-l-2 border-[#112d6e] pl-4 italic">
                          &ldquo;{c.corrected}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#f6f6ef] px-4 py-3">
                      <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1.5">
                        Reason
                      </p>
                      <p className="text-[13px] text-[#3d3d3d] leading-relaxed">
                        {c.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </Reveal>

      </div>
    </div>
  );
}
