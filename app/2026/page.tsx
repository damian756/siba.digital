import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "2026 Hub: Open Championship Readiness for Southport Businesses",
  description:
    "The Open 2026 is at Royal Birkdale, 12-19 July. A technical roadmap for PR8 and PR9 shops and restaurants to be search-ready before the first tee shot.",
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
    period: "Now — April 2026",
    status: "urgent",
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
    status: "upcoming",
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
    status: "upcoming",
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
    period: "12-19 July 2026",
    status: "event",
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
    <div className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hub2026Schema) }}
      />
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-orange mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f97316] animate-pulse" />
            Royal Birkdale, 12-19 July 2026
          </span>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-4">The 2026 Hub</h1>
          <p className="text-lg text-[#64748b] leading-relaxed max-w-2xl">
            The Open Championship comes to Southport in July. 150,000 visitors, most of them
            on smartphones, all of them searching. This is the technical roadmap to make sure
            your business is findable when they do.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Urgency */}
        <div className="card p-5 bg-[#fff7ed] border-[#fed7aa]">
          <div className="flex gap-3">
            <AlertTriangle size={18} className="text-[#f97316] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-[#0f172a] mb-1">
                Book ahead. I am serious.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                The Open is in July. SEO improvements take weeks to index. Core Web Vitals
                fixes take developer time. If you start in June, you are already late. Request
                an audit now and we will prioritise the fixes that matter most before the first tee shot.
              </p>
              <p className="mt-2 text-xs text-[#94a3b8]">
                This page is part of SIBA&apos;s founding case study archive.
              </p>
            </div>
          </div>
        </div>

        {/* Technical metrics */}
        <section>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">The technical targets</h2>
          <p className="text-[#64748b] mb-6">
            Specific thresholds, not guidelines. These are the numbers that determine whether
            your site ranks and converts during Open week.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="card bg-white p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#94a3b8]">{m.label}</span>
                  <span
                    className={`badge text-[10px] ${
                      m.status === "required" ? "badge-orange" : "badge-navy"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <p className="text-xl font-bold text-[#0f172a] mb-1">{m.value}</p>
                <p className="text-xs text-[#94a3b8]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Readiness roadmap</h2>
          <p className="text-[#64748b] mb-6">
            Month by month. What needs to happen, and when.
          </p>
          <div className="space-y-4">
            {timeline.map((phase) => {
              const isUrgent = phase.status === "urgent";
              const isEvent = phase.status === "event";
              return (
                <div
                  key={phase.period}
                  className={`card p-6 ${
                    isUrgent
                      ? "bg-[#fff7ed] border-[#fed7aa]"
                      : isEvent
                      ? "bg-[#f0fdf4] border-green-200"
                      : "bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isUrgent
                          ? "text-[#f97316]"
                          : isEvent
                          ? "text-green-600"
                          : "text-[#94a3b8]"
                      }`}
                    >
                      {phase.period}
                    </span>
                    {isUrgent && (
                      <span className="badge badge-orange">Act now</span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-[#0f172a] mb-3">{phase.title}</p>
                  <ul className="space-y-1.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className={`flex-shrink-0 mt-0.5 ${
                            isEvent ? "text-green-500" : "text-[#cbd5e1]"
                          }`}
                        />
                        <span className="text-sm text-[#475569]">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Search queries */}
        <section>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
            The searches that will happen in July
          </h2>
          <p className="text-[#64748b] mb-6">
            These are the actual queries visitors will type during Open week. Your business
            needs to appear for the ones relevant to it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={15} className="text-[#f97316]" />
                <p className="text-sm font-bold text-[#0f172a]">Restaurants and food</p>
              </div>
              <ul className="space-y-2">
                {queries.restaurants.map((q) => (
                  <li key={q} className="font-mono text-xs text-[#475569] bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 rounded-md">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={15} className="text-[#f97316]" />
                <p className="text-sm font-bold text-[#0f172a]">Hotels and accommodation</p>
              </div>
              <ul className="space-y-2">
                {queries.accommodation.map((q) => (
                  <li key={q} className="font-mono text-xs text-[#475569] bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 rounded-md">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Archive note */}
        <div className="border-t border-[#e2e8f0] pt-8 text-center">
          <p className="text-sm text-[#94a3b8]">
            This page is part of SIBA&apos;s founding case study archive.
          </p>
        </div>
      </div>
    </div>
  );
}
