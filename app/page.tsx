import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Globe,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Search,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Southport Independent Business Alliance | SIBA Digital",
  description:
    "Real data, better infrastructure, no levy. SIBA provides PR8 and PR9 businesses with world-class digital tools ahead of The Open 2026.",
};

const features = [
  {
    icon: ShieldCheck,
    title: "Independent Advocacy",
    subtitle: "PR8 and PR9 Focus",
    body: "SIBA represents businesses that the mandatory BID model fails to serve. No compulsory levy. No top-down agenda. Just practical support for businesses in Southport's town centre and surrounding postcodes.",
  },
  {
    icon: Globe,
    title: "Automated Promotion",
    subtitle: "Global Visibility",
    body: "Your business listed, optimised, and promoted across the platforms that actually drive footfall. Google Business, structured data, local SEO. The infrastructure the BID should have built years ago.",
  },
  {
    icon: BarChart3,
    title: "Data Transparency",
    subtitle: "Levy Analysis",
    body: "We publish what the BID does not. Levy rates, rateable values, and a clear accounting of what PR8 and PR9 businesses pay versus what they receive. The numbers are public. We just put them in one place.",
  },
];

const stats = [
  { value: "£2,400+", label: "Average annual BID levy, PR9 business" },
  { value: "0", label: "SIBA membership fee" },
  { value: "12-19 July", label: "The Open 2026, Royal Birkdale" },
  { value: "515k", label: "Additional visitors projected, MLEC 2027" },
];

const services = [
  {
    icon: Search,
    title: "SEO Audit",
    body: "A technical audit of your current search presence. Page speed, local citations, structured data. We tell you what is broken and how to fix it.",
  },
  {
    icon: TrendingUp,
    title: "Local Ranking Report",
    body: "Where you rank for the searches that matter in PR8 and PR9. Compared to competitors. Updated monthly.",
  },
  {
    icon: FileText,
    title: "Levy ROI Analysis",
    body: "What your BID levy costs versus what SIBA provides free. A clear document you can use in any BID consultation or ballot.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Southport PR8 and PR9
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Southport&apos;s New
              <br />
              <span className="text-[#f97316]">Digital Infrastructure</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              Real Data. Better Infrastructure. No Levy.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Preparing Southport&apos;s high streets for The Open 2026 and beyond. SIBA provides
              independent businesses with the digital tools, SEO support, and data transparency
              that the current Business Improvement District model does not.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
              >
                Request a Free Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/40 transition-colors"
              >
                Read the Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/8 bg-[#0a1628]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-[#f97316]">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
              What SIBA Does
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Infrastructure the BID should have built
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I have watched Southport businesses pay a compulsory levy for years and receive digital
              support that would embarrass a 2010 marketing agency. SIBA exists to close that gap
              without charging you a penny for the privilege.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="card-lift rounded-xl border border-white/8 bg-[#0a1628] p-8"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon size={22} className="text-[#f97316]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                    {f.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0a1628] border-y border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
                Free for PR8 and PR9 Businesses
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Tools that pay for themselves in week one
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The Open 2026 is at Royal Birkdale in July. That is 150,000 visitors arriving in
                Southport with money to spend. Every PR8 and PR9 business needs to be findable,
                fast, and mobile-ready before the first tee shot. SIBA gets you there.
              </p>
              <Link
                href="/2026"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f97316] hover:text-orange-400 transition-colors"
              >
                See the 2026 readiness roadmap
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex gap-4 rounded-lg border border-white/8 bg-[#0f172a] p-5"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded bg-orange-500/10">
                        <Icon size={18} className="text-[#f97316]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-2xl border border-orange-500/20 p-12"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(249,115,22,0.08) 0%, transparent 70%)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
              No obligation. No levy.
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Your business should be on the first page of Google by July
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
              Request a free SEO audit. We will tell you exactly where you stand, what is costing
              you customers, and what to fix before The Open. Takes five minutes.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded bg-[#f97316] px-8 py-3.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Request Your Free Audit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
