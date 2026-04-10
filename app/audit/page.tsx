import type { Metadata } from "next";
import LevyCalculator from "@/components/LevyCalculator";
import AuditForm from "@/components/AuditForm";
import { CheckCircle2, Clock, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Hub: Free SEO Audit for Southport Businesses",
  description:
    "Request a free technical SEO audit for your PR8 or PR9 business. Calculate your BID levy ROI and see what SIBA provides for free.",
  alternates: {
    canonical: "https://www.siba.digital/audit",
  },
  openGraph: {
    title: "Free SEO Audit for Southport Businesses | SIBA Digital",
    description:
      "Request a free technical SEO audit for your PR8 or PR9 business. Calculate your BID levy ROI and see what SIBA provides for free.",
    url: "https://www.siba.digital/audit",
    type: "website",
  },
};

const process = [
  {
    icon: FileText,
    step: "01",
    title: "Submit your details",
    body: "Name, business, postcode, and your website URL. That is all we need to start.",
  },
  {
    icon: Clock,
    step: "02",
    title: "We run the audit",
    body: "Technical SEO, Core Web Vitals, local citations, Google Business completeness. Typically 48 hours.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "You receive the report",
    body: "A clear document with findings, priority fixes, and estimated ranking impact. No upsell.",
  },
];

const covers = [
  "Core Web Vitals (LCP, CLS, INP)",
  "Mobile usability and page speed",
  "Google Business Profile completeness",
  "Local citation consistency",
  "Structured data (schema markup)",
  "Title tags and meta descriptions",
  "Internal link structure",
  "Crawl errors and index status",
  "Competitor ranking comparison",
  "Priority fix list with impact ratings",
];

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Audit Hub: Free SEO Audit for Southport Businesses",
  description:
    "Request a free technical SEO audit for your PR8 or PR9 business. Calculate your BID levy ROI and see what SIBA provides for free.",
  url: "https://www.siba.digital/audit",
  isPartOf: {
    "@id": "https://www.siba.digital/#website",
  },
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#eeeee6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />
      {/* Header */}
      <div className="bg-white border-b border-[#ddddd5]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-navy mb-5">Free for PR8 and PR9 Businesses</span>
          <h1 className="text-4xl font-bold text-[#1c1c1c] mb-4">The Audit Hub</h1>
          <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-2xl">
            Two tools in one place. Calculate the real cost of your BID levy versus what SIBA
            provides for free. Then request your official technical SEO audit.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Levy Calculator */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2">Levy ROI Calculator</h2>
            <p className="text-[#6b6b6b] leading-relaxed">
              Enter your business rateable value to see your annual BID levy cost compared to
              the market value of what SIBA provides at no charge.
            </p>
          </div>
          <LevyCalculator />
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8">How the audit works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#1c1c1c] font-mono">{p.step}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eeeee6] border border-[#ddddd5]">
                      <Icon size={16} className="text-[#1c1c1c]" />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-[#1c1c1c] mb-2">{p.title}</p>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>

          {/* What's covered */}
          <div className="card p-6 bg-white">
            <h3 className="text-sm font-bold text-[#1c1c1c] mb-4">What the audit covers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {covers.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1c1c1c] flex-shrink-0" />
                  <span className="text-sm text-[#4a4a4a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#ddddd5]" />

        {/* Urgency */}
        <div className="card p-5 bg-[#eeeee6] border-[#ddddd5]">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 text-sm font-bold text-[#1c1c1c] mt-0.5">!</span>
            <div>
              <p className="text-sm font-semibold text-[#1c1c1c] mb-1">
                The Open is in July. Start now.
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                SEO improvements take weeks to index. If you start in June, you are already
                late. Request an audit today and we will prioritise the fixes that matter most
                before the first tee shot.
              </p>
              <a
                href="#request"
                className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-[#1c1c1c] hover:text-[#3d3d3d]"
              >
                Jump to the form
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ddddd5]" />

        {/* Form */}
        <section id="request" className="scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2">Request Your Official Audit</h2>
            <p className="text-[#6b6b6b] leading-relaxed">
              Complete the form below. We confirm receipt within one business day and deliver
              the audit within 48 hours of confirmation.
            </p>
          </div>
          <AuditForm />
        </section>
      </div>
    </div>
  );
}
