import type { Metadata } from "next";
import CommissionForm from "@/components/CommissionForm";

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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <h1 className="text-4xl text-[#111827] mb-6">
          Digital Governance Audits
        </h1>
        <p className="text-lg text-[#374151] leading-relaxed max-w-xl mb-16">
          Structured analysis from public records. Every engagement is
          scoped to your organisation and delivered confidentially.
        </p>

        {/* Tier 1 */}
        <section className="pb-12 mb-12 border-b border-[#e5e7eb]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
            Tier 1
          </p>
          <h2 className="text-xl text-[#111827] mb-2">
            Digital Governance Health Check
          </h2>
          <p className="text-sm text-[#6b7280] mb-6">Turnaround: 5 working days</p>

          <p className="text-sm text-[#374151] leading-relaxed mb-4">
            A surface-level assessment of governance structures and digital
            presence. Board of directors cross-referenced against Companies
            House. Basic conflict of interest flag report. Surface-level OSINT
            scan of corporate network. Digital footprint review of public-facing
            platforms. Delivered as a summary report with risk flags and
            recommendations.
          </p>
          <p className="text-[13px] text-[#6b7280]">
            Suited to smaller BIDs, mid-sized property developers, and
            organisations seeking an initial assessment.
          </p>
        </section>

        {/* Tier 2 */}
        <section className="pb-12 mb-12 border-b border-[#e5e7eb]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
            Tier 2
          </p>
          <h2 className="text-xl text-[#111827] mb-2">
            Deep Transparency Audit
          </h2>
          <p className="text-sm text-[#6b7280] mb-6">Turnaround: 2 to 3 weeks</p>

          <p className="text-sm text-[#374151] leading-relaxed mb-4">
            Full forensic mapping of the corporate ecosystem and director
            network. Procurement history and contractor relationship analysis.
            Media and PR contract disclosure review. Related-party transaction
            mapping from public filings. Budget flow analysis sourced from
            published documents. Delivered as a comprehensive report with
            structural findings and evidence chain.
          </p>
          <p className="text-[13px] text-[#6b7280]">
            Suited to major city BIDs, local authorities preparing for fund
            audits, and construction networks managing public grants.
          </p>
        </section>

        {/* Tier 3 */}
        <section className="pb-12 mb-12 border-b border-[#e5e7eb]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
            Tier 3
          </p>
          <h2 className="text-xl text-[#111827] mb-2">
            Ongoing Monitoring
          </h2>
          <p className="text-sm text-[#6b7280] mb-6">Turnaround: Quarterly</p>

          <p className="text-sm text-[#374151] leading-relaxed mb-4">
            Quarterly review of board changes and new director appointments.
            Companies House filing monitoring for target entities. Contractor
            and procurement change detection. Digital footprint shift analysis.
            Delivered as a quarterly update report with flagged changes.
          </p>
          <p className="text-[13px] text-[#6b7280]">
            Suited to organisations that have completed a Tier 2 audit and
            want continuous governance assurance.
          </p>
        </section>

        {/* Methodology */}
        <section className="pb-12 mb-12 border-b border-[#e5e7eb]">
          <h2 className="text-xl text-[#111827] mb-8">How we work</h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-1.5">Public records only</p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Every finding is sourced from publicly available documents.
                Companies House, published accounts, FOI responses, and
                observable digital footprints. Nothing is assumed. Everything
                is linked.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-1.5">Structured and repeatable</p>
              <p className="text-sm text-[#374151] leading-relaxed">
                The same methodology applied to the Southport BID case study
                is applied to every engagement. Structured data collection,
                cross-referencing, and evidence-chain documentation.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-1.5">Confidential delivery</p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Unlike the published case study, commercial audit reports are
                delivered privately to the commissioning organisation. You
                receive the findings. You decide how to act on them.
              </p>
            </div>
          </div>
        </section>

        {/* Commission form */}
        <section id="commission" className="scroll-mt-24">
          <h2 className="text-xl text-[#111827] mb-2">Commission an Audit</h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-8 max-w-lg">
            Tell us about your organisation and what prompted your enquiry.
            We respond to every submission within one working day.
          </p>
          <CommissionForm />
        </section>
      </div>
    </div>
  );
}
