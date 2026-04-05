import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, ShieldCheck, Search, TrendingUp, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Southport Independent Business Alliance | SIBA Digital",
  description:
    "Real data, better infrastructure, no levy. SIBA provides PR8 and PR9 businesses with digital tools, SEO audits, and levy transparency ahead of The Open 2026.",
};

const stats = [
  { value: "£2,400+", label: "Avg. annual BID levy", sub: "PR9 business" },
  { value: "£0", label: "SIBA membership", sub: "Always free" },
  { value: "150k+", label: "Open 2026 visitors", sub: "Royal Birkdale, July" },
  { value: "515k", label: "MLEC visitors p/a", sub: "Projected from 2027" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Independent Advocacy",
    subtitle: "PR8 and PR9 Focus",
    body: "SIBA represents businesses the mandatory BID model fails to serve. No compulsory levy. No top-down agenda. Practical support for businesses in Southport's town centre and surrounding postcodes.",
  },
  {
    icon: Globe,
    title: "Automated Promotion",
    subtitle: "Global Visibility",
    body: "Your business listed, optimised, and promoted across the platforms that drive footfall. Google Business, structured data, local SEO. The infrastructure the BID should have built years ago.",
  },
  {
    icon: BarChart3,
    title: "Data Transparency",
    subtitle: "Levy Analysis",
    body: "We publish what the BID does not. Levy rates, rateable values, and a clear accounting of what PR8 and PR9 businesses pay versus what they receive in return.",
  },
];

const services = [
  {
    icon: Search,
    title: "SEO Audit",
    body: "A technical audit of your search presence. Page speed, local citations, structured data. We tell you exactly what is broken and how to fix it.",
  },
  {
    icon: TrendingUp,
    title: "Local Ranking Report",
    body: "Where you rank for the searches that matter in PR8 and PR9. Compared to competitors. Updated monthly.",
  },
  {
    icon: FileText,
    title: "Levy ROI Analysis",
    body: "What your BID levy costs versus what SIBA provides free. A clear document for any BID consultation or ballot.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="badge badge-orange mb-6 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f97316] animate-pulse" />
              Southport PR8 and PR9
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
              Southport&apos;s New<br />
              <span className="text-[#f97316]">Digital Infrastructure</span>
            </h1>
            <p className="text-xl text-[#475569] leading-relaxed mb-3 font-medium">
              Real Data. Better Infrastructure. No Levy.
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl">
              Preparing Southport&apos;s high streets for The Open 2026 and beyond. SIBA provides
              independent businesses with the digital tools, SEO support, and data transparency
              that the current Business Improvement District model does not.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm"
              >
                Request a Free Audit
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-colors"
              >
                Read the Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e2e8f0]">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-4 first:pl-0 last:pr-0">
                <p className="text-2xl font-bold text-[#0f172a] mb-0.5">{s.value}</p>
                <p className="text-xs font-semibold text-[#475569]">{s.label}</p>
                <p className="text-xs text-[#94a3b8]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="badge badge-navy mb-3">What SIBA Does</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-3">
              Infrastructure the BID should have built
            </h2>
            <p className="text-[#64748b] leading-relaxed max-w-2xl">
              I have watched Southport businesses pay a compulsory levy for years and receive
              digital support that would embarrass a 2010 marketing agency. SIBA exists to
              close that gap without charging you a penny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card card-hover p-7">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                    <Icon size={20} className="text-[#f97316]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-1">
                    {f.subtitle}
                  </p>
                  <h3 className="text-base font-bold text-[#0f172a] mb-3">{f.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services + Open CTA */}
      <section className="py-20 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="badge badge-orange mb-4">Free for PR8 and PR9</span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
                Tools that pay for themselves in week one
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                The Open 2026 is at Royal Birkdale in July. That is 150,000 visitors arriving
                in Southport with money to spend. Every PR8 and PR9 business needs to be
                findable, fast, and mobile-ready before the first tee shot.
              </p>
              <Link
                href="/2026"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-orange-500 transition-colors"
              >
                See the 2026 readiness roadmap
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="card flex gap-4 p-5">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                        <Icon size={17} className="text-[#f97316]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a] mb-1">{s.title}</p>
                      <p className="text-sm text-[#64748b] leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why SIBA vs BID table */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="badge badge-navy mb-3">The Comparison</span>
            <h2 className="text-3xl font-bold text-[#0f172a]">
              SIBA vs. the mandatory levy model
            </h2>
          </div>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <th className="text-left px-6 py-4 font-semibold text-[#0f172a]">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-[#f97316]">SIBA</th>
                  <th className="text-center px-6 py-4 font-semibold text-[#94a3b8]">BID Levy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {[
                  ["Membership cost", "Free", "Mandatory (2% RV)"],
                  ["Technical SEO audit", "Included", "Not offered"],
                  ["Google Business optimisation", "Included", "Not offered"],
                  ["Levy data transparency", "Published", "Opaque"],
                  ["Local search rankings", "Tracked monthly", "Not tracked"],
                  ["Opt out if not satisfied", "Yes, always", "No"],
                  ["2026 Open readiness support", "Priority programme", "Not confirmed"],
                ].map(([feature, siba, bid]) => (
                  <tr key={feature} className="hover:bg-[#f8fafc] transition-colors">
                    <td className="px-6 py-3.5 text-[#475569] font-medium">{feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[#16a34a] font-semibold">
                        <CheckCircle2 size={14} />
                        {siba}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-center text-[#94a3b8]">{bid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f172a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">
            No obligation. No levy. No catch.
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your business should be on page one of Google by July
          </h2>
          <p className="text-[#94a3b8] leading-relaxed mb-8 max-w-xl mx-auto">
            Request a free SEO audit. We will tell you exactly where you stand, what is
            costing you customers, and what to fix before The Open. Takes five minutes.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-8 py-3.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-lg"
          >
            Request Your Free Audit
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
