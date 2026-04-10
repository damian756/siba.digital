import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "2026 Hub: Open Championship Readiness for Southport Businesses",
  description:
    "The Open 2026 is at Royal Birkdale, 12-19 July. A technical roadmap for PR8 and PR9 shops and restaurants to be search-ready before the first tee shot.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.siba.digital/2026",
  },
  openGraph: {
    title: "2026 Hub: Open Championship Readiness | SIBA Digital",
    description:
      "The Open 2026 is at Royal Birkdale, 12-19 July. Get your Southport business search-ready before 150,000 visitors arrive.",
    url: "https://www.siba.digital/2026",
    type: "website",
  },
};

const metrics = [
  { label: "LCP", value: "Under 2.5s", desc: "Largest Contentful Paint", status: "required" },
  { label: "CLS", value: "Under 0.1", desc: "Cumulative Layout Shift", status: "required" },
  { label: "Mobile", value: "90+", desc: "Lighthouse mobile score", status: "required" },
  { label: "Reviews", value: "20+ fresh", desc: "Google reviews from 2025/26", status: "recommended" },
];

const timeline = [
  {
    period: "Now \u2014 April 2026",
    urgent: true,
    title: "Technical audit and baseline",
    tasks: [
      "Core Web Vitals: LCP under 2.5s, CLS under 0.1",
      "Mobile usability test and fix",
      "Google Business Profile: hours, photos, categories, Q&A",
      "Structured data: LocalBusiness schema",
      "SSL, HTTPS, no mixed content warnings",
    ],
  },
  {
    period: "May 2026",
    urgent: false,
    title: "Local SEO and content",
    tasks: [
      "Target keywords: 'restaurants near Royal Birkdale', 'where to eat during The Open Southport'",
      "Landing page for The Open 2026 (if not done)",
      "Google Business posts: pre-event, during event",
      "Citation consistency: NAP across all directories",
      "Review generation: aim for 20+ fresh Google reviews before July",
    ],
  },
  {
    period: "June 2026",
    urgent: false,
    title: "Conversion optimisation",
    tasks: [
      "Booking/reservation links in Google Business Profile",
      "Click-to-call button above the fold on mobile",
      "Opening hours confirmed for Open week",
      "FAQs for Open week questions",
      "Page speed re-test: everything green",
    ],
  },
  {
    period: "12\u201319 July 2026",
    urgent: false,
    title: "The Open Championship",
    tasks: [
      "Royal Birkdale, Southport",
      "Expected footfall: 150,000+ visitors",
      "Peak search days: Friday-Sunday each weekend",
      "Monitor Google Business messages and reviews in real time",
      "Update hours immediately if you extend them for the event",
    ],
  },
];

const queries = {
  restaurants: [
    "restaurants near Royal Birkdale",
    "where to eat Southport The Open",
    "lunch near Birkdale golf club",
    "best restaurants Southport 2026",
    "fish and chips near golf course Southport",
  ],
  accommodation: [
    "hotels near Royal Birkdale Open 2026",
    "accommodation Southport golf",
    "B&B Southport July 2026",
    "stay near Royal Birkdale",
    "self catering near Royal Birkdale",
  ],
};

const hub2026Schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "2026 Hub: Open Championship Readiness for Southport Businesses",
  description:
    "The Open 2026 is at Royal Birkdale, 12-19 July. A technical roadmap for PR8 and PR9 businesses to be search-ready before the first tee shot.",
  url: "https://www.siba.digital/2026",
  isPartOf: {
    "@id": "https://www.siba.digital/#website",
  },
  about: {
    "@type": "Event",
    name: "The Open Championship 2026",
    startDate: "2026-07-12",
    endDate: "2026-07-19",
    location: {
      "@type": "Place",
      name: "Royal Birkdale Golf Club",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Southport",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
    },
  },
};

export default function Hub2026Page() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hub2026Schema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-5">
          Royal Birkdale, 12-19 July 2026
        </p>
        <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-4 leading-[1.15]">The 2026 Hub</h1>
        <p className="text-lg text-[#3d3d3d] leading-relaxed max-w-xl mb-14">
          The Open Championship comes to Southport in July. 150,000 visitors, most of them
          on smartphones, all of them searching. This is the technical roadmap to make sure
          your business is findable when they do.
        </p>

        {/* Urgency */}
        <div className="border-l-2 border-[#ccccc4] pl-5 py-2 mb-14">
          <div className="flex gap-3">
            <AlertTriangle size={16} className="text-[#6b6b6b] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#1c1c1c] mb-1">
                Book ahead. I am serious.
              </p>
              <p className="text-sm text-[#3d3d3d] leading-relaxed">
                The Open is in July. SEO improvements take weeks to index. Core Web Vitals
                fixes take developer time. If you start in June, you are already late.
              </p>
              <p className="mt-2 text-[12px] text-[#a0a0a0]">
                This page is part of SIBA&apos;s founding case study archive.
              </p>
            </div>
          </div>
        </div>

        {/* Technical metrics */}
        <section className="pb-14 mb-14 border-b border-[#ddddd5]">
          <h2 className="text-2xl text-[#112d6e] mb-2">The technical targets</h2>
          <p className="text-sm text-[#6b6b6b] mb-8">
            Specific thresholds, not guidelines. These are the numbers that determine whether
            your site ranks and converts during Open week.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-[#ddddd5] pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono font-semibold text-[#a0a0a0]">{m.label}</span>
                  <span className="text-[10px] text-[#a0a0a0] uppercase tracking-wider">{m.status}</span>
                </div>
                <p className="text-lg font-semibold text-[#1c1c1c] mb-0.5">{m.value}</p>
                <p className="text-[12px] text-[#6b6b6b]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="pb-14 mb-14 border-b border-[#ddddd5]">
          <h2 className="text-2xl text-[#112d6e] mb-2">Readiness roadmap</h2>
          <p className="text-sm text-[#6b6b6b] mb-8">
            Month by month. What needs to happen, and when.
          </p>
          <div className="space-y-8">
            {timeline.map((phase) => (
              <div key={phase.period}>
                <p className={`text-[13px] font-mono font-semibold mb-1 ${phase.urgent ? "text-[#1c1c1c]" : "text-[#6b6b6b]"}`}>
                  {phase.period}
                </p>
                <p className="text-sm font-semibold text-[#1c1c1c] mb-3">{phase.title}</p>
                <ul className="space-y-1.5">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-[#ccccc4]" />
                      <span className="text-sm text-[#3d3d3d]">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Search queries */}
        <section className="pb-14 mb-14 border-b border-[#ddddd5]">
          <h2 className="text-2xl text-[#112d6e] mb-2">
            The searches that will happen in July
          </h2>
          <p className="text-sm text-[#6b6b6b] mb-8">
            These are the actual queries visitors will type during Open week. Your business
            needs to appear for the ones relevant to it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-[#1c1c1c] mb-3">Restaurants and food</p>
              <ul className="space-y-1.5">
                {queries.restaurants.map((q) => (
                  <li key={q} className="font-mono text-[13px] text-[#3d3d3d]">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1c1c1c] mb-3">Hotels and accommodation</p>
              <ul className="space-y-1.5">
                {queries.accommodation.map((q) => (
                  <li key={q} className="font-mono text-[13px] text-[#3d3d3d]">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <p className="text-[13px] text-[#a0a0a0]">
            This page is part of SIBA&apos;s founding case study archive.
          </p>
        </div>
      </div>
    </div>
  );
}
