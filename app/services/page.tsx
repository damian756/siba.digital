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

const tiers = [
  {
    label: "Tier 1",
    name: "Digital Governance Health Check",
    turnaround: "5 working days",
    scope: [
      "Board of directors cross-referenced against Companies House",
      "Basic conflict of interest flag report",
      "Surface-level OSINT scan of corporate network",
      "Digital footprint review of public-facing platforms",
      "Summary report with risk flags and recommendations",
    ],
    suited: "Smaller BIDs, mid-sized property developers, organisations seeking an initial assessment.",
  },
  {
    label: "Tier 2",
    name: "Deep Transparency Audit",
    turnaround: "2 to 3 weeks",
    scope: [
      "Full forensic mapping of corporate ecosystem and director network",
      "Procurement history and contractor relationship analysis",
      "Media and PR contract disclosure review",
      "Related-party transaction mapping from public filings",
      "Budget flow analysis sourced from published documents",
      "Comprehensive report with structural findings and evidence chain",
    ],
    suited: "Major city BIDs, local authorities preparing for fund audits, construction networks managing public grants.",
  },
  {
    label: "Tier 3",
    name: "Ongoing Monitoring",
    turnaround: "Quarterly",
    scope: [
      "Quarterly review of board changes and new director appointments",
      "Companies House filing monitoring for target entities",
      "Contractor and procurement change detection",
      "Digital footprint shift analysis",
      "Quarterly update report with flagged changes",
    ],
    suited: "Organisations that have completed a Tier 2 audit and want continuous governance assurance.",
  },
];

const methodology = [
  {
    title: "Public records only",
    body: "Every finding is sourced from publicly available documents. Companies House, published accounts, FOI responses, and observable digital footprints. Nothing is assumed. Everything is linked.",
  },
  {
    title: "Structured and repeatable",
    body: "The same methodology applied to the Southport BID case study is applied to every engagement. Structured data collection, cross-referencing, and evidence-chain documentation.",
  },
  {
    title: "Confidential delivery",
    body: "Unlike the published case study, commercial audit reports are delivered privately to the commissioning organisation. You receive the findings. You decide how to act on them.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-6">
            Services
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Digital Governance Audits
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl">
            Three tiers of structured analysis. From a surface-level governance
            health check to a full forensic transparency audit. Every engagement
            is scoped to your organisation and delivered confidentially.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Tiers */}
        {tiers.map((t) => (
          <section key={t.label} className="border-b border-[#e2e8f0] pb-16 last:border-0 last:pb-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-2">
              {t.label}
            </p>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-2">{t.name}</h2>
            <p className="text-sm text-[#64748b] mb-6">
              Turnaround: {t.turnaround}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-8 mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] pt-0.5">
                Scope
              </p>
              <ul className="space-y-2">
                {t.scope.map((s) => (
                  <li key={s} className="text-sm text-[#475569] leading-relaxed pl-4 border-l-2 border-[#e2e8f0]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] pt-0.5">
                Suited to
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">{t.suited}</p>
            </div>
          </section>
        ))}

        {/* Methodology */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
            How we work
          </p>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-10">
            Methodology
          </h2>
          <div className="space-y-0 divide-y divide-[#e2e8f0]">
            {methodology.map((m) => (
              <div
                key={m.title}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 first:pt-0 last:pb-0"
              >
                <p className="text-sm font-semibold text-[#0f172a]">{m.title}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commission form */}
        <section id="commission" className="scroll-mt-24">
          <div className="border-t border-[#e2e8f0] pt-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Get started
            </p>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
              Commission an Audit
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-8 max-w-2xl">
              Tell us about your organisation and what prompted your enquiry.
              We respond to every submission within one working day.
            </p>
            <CommissionForm />
          </div>
        </section>
      </div>
    </div>
  );
}
