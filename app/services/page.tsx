import type { Metadata } from "next";
import Image from "next/image";
import CommissionForm from "@/components/CommissionForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services: Digital Governance Audits",
  description:
    "Three tiers of digital governance and OSINT audits for BIDs, councils, and major developments. From surface-level health checks to full forensic transparency audits.",
  alternates: {
    canonical: "https://www.siba.digital/services",
  },
  openGraph: {
    title: "Services | SIBA Digital",
    description:
      "Digital governance audits and open-source intelligence for public bodies and major developments.",
    url: "https://www.siba.digital/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="relative w-full aspect-[1920/1620] flex items-end">
        <Image
          src="/images/services-hero.png"
          alt="SIBA Digital services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f6f6ef]" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pb-[22%] pt-12">
          <h1
            className="text-white mb-5 leading-[1.12]"
            style={{
              fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.2rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Digital Governance Audits
          </h1>
          <p className="text-white/80 text-[17px] leading-relaxed max-w-xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
            Structured analysis from public records. Every engagement is
            scoped to your organisation and delivered confidentially.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Tier 1 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 1
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Digital Governance Health Check
            </h2>
            <p className="text-sm text-[#6b6b6b] mb-6">Turnaround: 5 working days</p>

            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-4">
              A surface-level assessment of governance structures and digital
              presence. Board of directors cross-referenced against Companies
              House. Basic conflict of interest flag report. Surface-level OSINT
              scan of corporate network. Digital footprint review of public-facing
              platforms. Delivered as a summary report with risk flags and
              recommendations.
            </p>
            <p className="text-[13px] text-[#6b6b6b]">
              Suited to smaller BIDs, mid-sized property developers, and
              organisations seeking an initial assessment.
            </p>
          </section>
        </Reveal>

        {/* Tier 2 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 2
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Deep Transparency Audit
            </h2>
            <p className="text-sm text-[#6b6b6b] mb-6">Turnaround: 2 to 3 weeks</p>

            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-4">
              Full forensic mapping of the corporate ecosystem and director
              network. Procurement history and contractor relationship analysis.
              Media and PR contract disclosure review. Related-party transaction
              mapping from public filings. Budget flow analysis sourced from
              published documents. Delivered as a comprehensive report with
              structural findings and evidence chain.
            </p>
            <p className="text-[13px] text-[#6b6b6b]">
              Suited to major city BIDs, local authorities preparing for fund
              audits, and construction networks managing public grants.
            </p>
          </section>
        </Reveal>

        {/* Tier 3 */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-3">
              Tier 3
            </p>
            <h2 className="text-[#112d6e] mb-2">
              Ongoing Monitoring
            </h2>
            <p className="text-sm text-[#6b6b6b] mb-6">Turnaround: Quarterly</p>

            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-4">
              Quarterly review of board changes and new director appointments.
              Companies House filing monitoring for target entities. Contractor
              and procurement change detection. Digital footprint shift analysis.
              Delivered as a quarterly update report with flagged changes.
            </p>
            <p className="text-[13px] text-[#6b6b6b]">
              Suited to organisations that have completed a Tier 2 audit and
              want continuous governance assurance.
            </p>
          </section>
        </Reveal>

        {/* Methodology */}
        <Reveal>
          <section className="pb-14 mb-14 border-b border-[#ddddd5]">
            <h2 className="text-[#112d6e] mb-10">How we work</h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">Public records only</p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Every finding is sourced from publicly available documents.
                  Companies House, published accounts, FOI responses, and
                  observable digital footprints. Nothing is assumed. Everything
                  is linked.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">Structured and repeatable</p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  The same methodology applied to the Southport BID case study
                  is applied to every engagement. Structured data collection,
                  cross-referencing, and evidence-chain documentation.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1c1c1c] mb-1.5">Confidential delivery</p>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                  Unlike the published case study, commercial audit reports are
                  delivered privately to the commissioning organisation. You
                  receive the findings. You decide how to act on them.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Commission form */}
        <Reveal>
          <section id="commission" className="scroll-mt-24">
            <h2 className="text-[#112d6e] mb-2">Commission an Audit</h2>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-10 max-w-lg">
              Tell us about your organisation and what prompted your enquiry.
              We respond to every submission within one working day.
            </p>
            <CommissionForm />
          </section>
        </Reveal>

      </div>
    </div>
  );
}
