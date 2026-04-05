import type { Metadata } from "next";
import LevyCalculator from "@/components/LevyCalculator";
import AuditForm from "@/components/AuditForm";
import { CheckCircle2, Clock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Hub: Free SEO Audit for Southport Businesses",
  description:
    "Request a free technical SEO audit for your PR8 or PR9 business. Calculate your BID levy ROI and see what SIBA provides for free.",
};

const process = [
  {
    icon: FileText,
    title: "Submit your details",
    body: "Name, business, postcode, and your current website URL. That is all we need to start.",
  },
  {
    icon: Clock,
    title: "We run the audit",
    body: "Technical SEO, Core Web Vitals, local citation consistency, Google Business completeness. Typically completed within 48 hours.",
  },
  {
    icon: CheckCircle2,
    title: "You receive the report",
    body: "A clear PDF with findings, priority fixes, and an estimated impact on your local search rankings. No upsell. Just the data.",
  },
];

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/8 bg-[#0a1628] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Free for PR8 and PR9 Businesses
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">The Audit Hub</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Two tools in one place. Calculate the real cost of your BID levy versus what SIBA
            provides for free. Then request your official technical SEO audit.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Levy Calculator */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Levy ROI Calculator</h2>
            <p className="text-slate-400 leading-relaxed">
              Enter your business rateable value to see your annual BID levy cost compared to
              the market value of what SIBA provides at no charge.
            </p>
          </div>
          <LevyCalculator />
        </section>

        <div className="border-t border-white/8" />

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">How the audit works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                        <Icon size={18} className="text-[#f97316]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Step {i + 1}</p>
                      <p className="text-sm font-semibold text-white mb-2">{step.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What the audit covers */}
          <div className="rounded-xl border border-white/8 bg-[#0a1628] p-6 sm:p-8 mb-12">
            <h3 className="text-base font-bold text-white mb-4">What the audit covers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
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
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#f97316] flex-shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-white/8" />

        {/* Contact form */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Request Your Official Audit</h2>
            <p className="text-slate-400 leading-relaxed">
              Complete the form below. We will confirm receipt within one business day and deliver
              the audit within 48 hours of confirmation.
            </p>
          </div>
          <AuditForm />
        </section>
      </div>
    </div>
  );
}
