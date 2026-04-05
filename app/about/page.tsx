import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  BarChart3,
  ExternalLink,
  CheckCircle2,
  Code2,
  Globe,
  Zap,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SIBA: Who We Are and Why We Exist",
  description:
    "SIBA is independent digital infrastructure for PR8 and PR9 businesses in Southport. Free SEO audits, levy transparency, and 2026 readiness. Built by a 20-year web and SEO professional.",
  alternates: {
    canonical: "https://www.siba.digital/about",
  },
  openGraph: {
    title: "About SIBA | Southport Independent Business Alliance",
    description:
      "Independent digital infrastructure for PR8 and PR9 businesses. Free SEO audits, levy transparency, 2026 readiness. No levy. No catch.",
    url: "https://www.siba.digital/about",
    type: "website",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SIBA",
  url: "https://www.siba.digital/about",
  description:
    "SIBA is independent digital infrastructure for PR8 and PR9 businesses in Southport. Free SEO audits, levy transparency, and 2026 readiness.",
  about: {
    "@id": "https://www.siba.digital/#organization",
  },
  mainEntity: {
    "@type": "Person",
    name: "Damian Roche",
    jobTitle: "Founder",
    worksFor: {
      "@id": "https://www.siba.digital/#organization",
    },
    url: "https://www.churchtownmedia.co.uk/about",
  },
};

const credentials = [
  { value: "20 years", label: "Web and SEO experience" },
  { value: "15 years", label: "Organic search specialist" },
  { value: "4 sites", label: "Sefton Coast Network built" },
  { value: "£0", label: "Cost to PR8 and PR9 businesses" },
  { value: "July 2026", label: "The deadline. We are already working." },
];

const stack = [
  { icon: Code2, name: "Next.js 16", role: "App Router framework" },
  { icon: Globe, name: "TypeScript", role: "Type-safe codebase" },
  { icon: Zap, name: "Tailwind CSS v4", role: "Styling" },
  { icon: Database, name: "Vercel", role: "Deployment" },
];

const proofSites = [
  {
    name: "SouthportGuide.co.uk",
    desc: "Full visitor guide to Southport. Restaurants, hotels, events, The Open 2026 hub. 999+ venues listed.",
    href: "https://www.southportguide.co.uk",
  },
  {
    name: "SeftonLinks.com",
    desc: "Championship links golf across Royal Birkdale, Hillside, Formby and three more courses. Built in 18 languages.",
    href: "https://www.seftonlinks.com",
  },
  {
    name: "FormbyGuide.co.uk",
    desc: "Dedicated guide to Formby. The first of its kind. Red squirrels, National Trust beach, village dining.",
    href: "https://www.formbyguide.co.uk",
  },
  {
    name: "SeftonCoastWildlife.co.uk",
    desc: "257-species database for the Sefton Coast Special Area of Conservation. Birds, mammals, insects, plants.",
    href: "https://seftoncoastwildlife.co.uk",
  },
];

function SectionRule() {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero */}
      <div className="bg-[#0f172a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <span className="badge badge-orange mb-6 inline-flex">
            Southport Independent Business Alliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Independent. Technical.<br />
            <span className="text-[#f97316]">Free.</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mb-10">
            SIBA is the digital infrastructure Southport&apos;s independent businesses should
            have had years ago. We do not charge a levy. We do not have a board to impress.
            We build things that work and share them at no cost.
          </p>

          {/* Credential strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                <p className="text-lg font-bold text-[#f97316] leading-none mb-1">{c.value}</p>
                <p className="text-xs text-[#94a3b8] leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why SIBA exists */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
                <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  The problem is not ambition. It is accountability.
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Southport has a Business Improvement District that collects over £448,000 a
                  year from businesses with no opt-out. In return, those businesses get Christmas
                  lights, a social media account, and an awards ceremony.
                </p>
                <p>
                  What they do not get: a properly built digital presence. Technical SEO. Google
                  Business optimisation. Page speed analysis. A clear picture of what their levy
                  is actually spent on.
                </p>
                <p>
                  The Open Championship is at Royal Birkdale in July 2026. Between 150,000 and
                  290,000 visitors are expected. Those visitors will search on Google before they
                  arrive. Businesses that are invisible online will not benefit from a single one
                  of them.
                </p>
                <p className="font-semibold text-[#0f172a]">
                  SIBA exists to close that gap. With data, with proper technical work, and
                  without charging the businesses we serve.
                </p>
              </div>
            </div>

            {/* What we do cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Search,
                  title: "Free SEO Audits",
                  body: "A full technical report on your site. Page speed, structured data, mobile usability, Google Business profile. We tell you what is wrong and exactly how to fix it.",
                },
                {
                  icon: BarChart3,
                  title: "Levy Transparency",
                  body: "Every claim we make about the BID budget is sourced from their own published documents. We do not guess. We link to the source. Businesses deserve to know where their money goes.",
                },
                {
                  icon: ShieldCheck,
                  title: "2026 Readiness",
                  body: "A technical roadmap for PR8 and PR9 businesses to be search-ready before The Open. If visitors search for a restaurant near Royal Birkdale, you should be on page one.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card card-hover p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
                        <Icon size={18} className="text-[#f97316]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0f172a] mb-1.5">{item.title}</p>
                      <p className="text-sm text-[#64748b] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Who is behind it */}
      <div className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
            <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
              Real expertise. No mystery.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-4 text-[#475569] leading-relaxed">
              <p>
                SIBA is led by Damian Roche: a web and SEO professional with 20 years in
                the industry and 15 years focused on organic search. He is based in Churchtown,
                Southport. Former British Army, Queen&apos;s Guards. Self-taught developer.
              </p>
              <p>
                He built the Sefton Coast Network before SIBA: four independent editorial
                sites covering Southport, Formby, links golf, and coastal wildlife. All on
                the same technical foundation. All ranking and growing without a marketing
                budget, because they are built properly.
              </p>
              <p>
                That network is the proof of concept. Before asking a single Southport
                business to trust his work, he built it for himself and let the results speak.
                SIBA applies the same approach directly to the problem of Southport&apos;s
                digital infrastructure gap.
              </p>
              <p className="text-[#0f172a] font-semibold">
                This is not a campaign. It is a technical operation run by someone who has
                spent two decades making websites rank and convert.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.churchtownmedia.co.uk/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-orange-500 transition-colors"
                >
                  Churchtown Media
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors"
                >
                  LinkedIn profile
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Stack + credentials */}
            <div className="lg:col-span-2 space-y-4">
              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
                  The stack
                </p>
                <div className="space-y-3">
                  {stack.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.name} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#f1f5f9] border border-[#e2e8f0]">
                          <Icon size={15} className="text-[#475569]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0f172a] leading-none">{s.name}</p>
                          <p className="text-xs text-[#94a3b8] mt-0.5">{s.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
                  Why this stack
                </p>
                <ul className="space-y-2">
                  {[
                    "Statically generated pages load instantly",
                    "Structured data built in from the start",
                    "Core Web Vitals pass without optimisation hacks",
                    "No WordPress. No plugin sprawl. No fragility.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle2 size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof: the Sefton Coast Network */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
            <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
              Proof before pitch
            </h2>
          </div>
          <p className="text-[#64748b] leading-relaxed max-w-2xl mb-10 ml-4">
            Before asking any Southport business to trust this work, it was built in public.
            The Sefton Coast Network is four independent editorial sites, all on the same Next.js
            foundation, all built without an agency brief or a marketing budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proofSites.map((site) => (
              <a
                key={site.name}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-5 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm font-bold text-[#0f172a] group-hover:text-[#f97316] transition-colors">
                    {site.name}
                  </p>
                  <ExternalLink
                    size={13}
                    className="text-[#94a3b8] group-hover:text-[#f97316] flex-shrink-0 mt-0.5 transition-colors"
                  />
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">{site.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
                <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  How we work
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Every audit identifies specific, fixable problems. Not scores for their own
                  sake. Not generic recommendations that apply to any business anywhere. The
                  exact issues holding your site back in search, and the exact steps to address
                  them.
                </p>
                <p>
                  We check Core Web Vitals because page speed is a direct ranking signal and
                  most Southport business websites fail it. We look at your Google Business
                  profile because local pack rankings drive more footfall than anything else
                  for bricks-and-mortar businesses. We check structured data because Google
                  needs to understand what you are before it can recommend you.
                </p>
                <p>
                  The businesses that engage with this before July will be in a materially
                  better position than those that wait. The Open brings a search traffic spike
                  unlike anything Southport sees in a normal year. That traffic will go
                  somewhere. The only question is whether it goes to you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
                <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  What SIBA is not
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    label: "Not a trade association",
                    detail: "We do not charge membership fees or negotiate on your behalf with councils.",
                  },
                  {
                    label: "Not a campaign group",
                    detail: "We publish data from public documents. We do not organise protests or petitions.",
                  },
                  {
                    label: "Not affiliated with any funder",
                    detail: "No council budget. No BID money. No third-party with an interest in what we say.",
                  },
                  {
                    label: "Not a directory that sells placement",
                    detail: "We do not rank your business higher because you paid. The audit is free and the results are honest.",
                  },
                ].map((item) => (
                  <div key={item.label} className="card p-4">
                    <p className="text-sm font-semibold text-[#0f172a] mb-1">{item.label}</p>
                    <p className="text-sm text-[#64748b]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex-shrink-0 w-1 h-7 rounded-full bg-[#f97316]" />
            <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">Transparency</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 text-[#475569] leading-relaxed space-y-3">
              <p>
                SIBA is independent of Southport BID, Sefton Council, and any party with a
                financial interest in the status quo. Every factual claim we publish is sourced
                from publicly available documents and linked directly to the source. We do
                not guess and we do not editorialize beyond what the data supports.
              </p>
              <p>
                If we get something wrong, we correct it publicly and promptly. If Southport
                BID wants to respond to anything we have published, we will publish their
                response in full.
              </p>
              <p className="text-sm">
                Legal and data governance:{" "}
                <Link href="/privacy" className="text-[#f97316] hover:underline font-medium">
                  Privacy Policy and Statement of Ownership
                </Link>
              </p>
            </div>
            <div className="card p-5 border-[#fed7aa] bg-[#fff7ed]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">
                Get in touch
              </p>
              <p className="text-sm text-[#78350f] leading-relaxed mb-4">
                To request a correction, ask a question, or discuss your business&apos;s
                digital situation directly.
              </p>
              <a
                href="mailto:office@siba.digital"
                className="text-sm font-semibold text-[#f97316] hover:underline"
              >
                office@siba.digital
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0f172a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">
            No obligation. No levy. No catch.
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your business should be on page one before July
          </h2>
          <p className="text-[#94a3b8] leading-relaxed mb-8 max-w-xl mx-auto">
            Request a free SEO audit. We will tell you exactly where you stand, what is
            costing you customers, and what to fix before The Open. Takes five minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/audit#request"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-8 py-3.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-lg"
            >
              Request Your Free Audit
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Read Our Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
