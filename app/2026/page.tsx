import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "2026 Hub: Open Championship Readiness for Southport Businesses",
  description:
    "The Open 2026 is at Royal Birkdale, 12-19 July. A technical roadmap for Southport shops and restaurants to be search-ready before the first tee shot.",
};

const timeline = [
  {
    date: "Now - April 2026",
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
    date: "May 2026",
    status: "upcoming",
    title: "Local SEO and content",
    tasks: [
      "Target keywords: 'restaurants near Royal Birkdale', 'where to eat during The Open Southport'",
      "Landing page: The Open 2026 (if not already done)",
      "Google Business posts: pre-event, during event",
      "Citation consistency: NAP across all directories",
      "Review generation: aim for 20+ fresh Google reviews before July",
    ],
  },
  {
    date: "June 2026",
    status: "upcoming",
    title: "Conversion optimisation",
    tasks: [
      "Booking/reservation links in Google Business Profile",
      "Click-to-call button above the fold on mobile",
      "Opening hours confirmed for Open week",
      "FAQs for Open week questions (parking, dogs, dress code)",
      "Page speed re-test: everything green",
    ],
  },
  {
    date: "July 2026",
    status: "event",
    title: "The Open Championship",
    tasks: [
      "Royal Birkdale: 12-19 July 2026",
      "Expected footfall: 150,000+ visitors across the week",
      "Peak search days: Friday-Sunday of each weekend",
      "Monitor Google Business messages and reviews in real time",
      "Update hours if you extend for the event",
    ],
  },
];

const metrics = [
  {
    label: "Target LCP",
    value: "Under 2.5s",
    desc: "Largest Contentful Paint. Google's primary page speed measure.",
    status: "required",
  },
  {
    label: "Target CLS",
    value: "Under 0.1",
    desc: "Cumulative Layout Shift. Pages that jump around on load lose mobile users.",
    status: "required",
  },
  {
    label: "Mobile score",
    value: "90+",
    desc: "Lighthouse mobile score. Most Open visitors will search on their phones.",
    status: "required",
  },
  {
    label: "Google reviews",
    value: "20+ (fresh)",
    desc: "Reviews from 2025/2026 carry more weight. Older reviews still count but diminish.",
    status: "recommended",
  },
];

export default function Hub2026Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative border-b border-white/8 bg-[#0a1628] py-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            Royal Birkdale, 12-19 July 2026
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">The 2026 Hub</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            The Open Championship comes to Southport in July. 150,000 visitors. Most of them
            on smartphones. All of them searching. This is the technical roadmap to make sure
            your business is findable when they do.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Urgency block */}
        <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
          <div className="flex gap-4">
            <AlertTriangle size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Book ahead. I am serious.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                The Open is in July. SEO improvements take weeks to index. Core Web Vitals
                fixes take developer time. Google Business Profile changes need time to propagate.
                If you start in June, you are already late. If you start now, you can be
                properly ready. Request an audit today and we will prioritise the fixes
                that matter most before the first tee shot.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#f97316] hover:text-orange-400"
              >
                Request your audit now
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Technical metrics */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">The technical targets</h2>
            <p className="text-slate-400 leading-relaxed">
              These are the specific numbers that determine whether your site ranks and converts
              during Open week. Not general guidelines. Actual thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-white/8 bg-[#0a1628] p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                    <p className="text-xl font-bold text-white">{m.value}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      m.status === "required"
                        ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Readiness roadmap</h2>
            <p className="text-slate-400 leading-relaxed">
              Month by month. What needs to happen, and when, to be properly ready for July.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((phase) => {
              const statusColour =
                phase.status === "urgent"
                  ? "border-orange-500/30 bg-orange-500/5"
                  : phase.status === "event"
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-white/8 bg-[#0a1628]";

              const dotColour =
                phase.status === "urgent"
                  ? "bg-orange-500"
                  : phase.status === "event"
                  ? "bg-green-500"
                  : "bg-slate-500";

              const dateColour =
                phase.status === "urgent"
                  ? "text-orange-400"
                  : phase.status === "event"
                  ? "text-green-400"
                  : "text-slate-500";

              return (
                <div key={phase.date} className={`rounded-xl border p-6 ${statusColour}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 mt-1 h-3 w-3 rounded-full ${dotColour}`} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`text-xs font-mono font-semibold ${dateColour}`}>
                          {phase.date}
                        </span>
                        {phase.status === "urgent" && (
                          <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                            Act now
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-bold text-white mb-3">{phase.title}</p>
                      <ul className="space-y-1.5">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className={`flex-shrink-0 mt-0.5 ${
                                phase.status === "event"
                                  ? "text-green-400"
                                  : "text-slate-600"
                              }`}
                            />
                            <span className="text-sm text-slate-400">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Local SEO specifics */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              The searches that will happen in July
            </h2>
            <p className="text-slate-400 leading-relaxed">
              These are the actual queries visitors will type during Open week. Your business
              needs to appear for the ones relevant to it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/8 bg-[#0a1628] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} className="text-[#f97316]" />
                <p className="text-sm font-semibold text-white">Restaurants and food</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  "restaurants near Royal Birkdale",
                  "where to eat Southport The Open",
                  "lunch near Birkdale golf club",
                  "best restaurants Southport 2026",
                  "dinner Southport PR8",
                  "fish and chips near golf course Southport",
                ].map((q) => (
                  <li key={q} className="font-mono text-xs text-slate-300 bg-[#0f172a] px-3 py-1.5 rounded">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/8 bg-[#0a1628] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#f97316]" />
                <p className="text-sm font-semibold text-white">Hotels and accommodation</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  "hotels near Royal Birkdale Open 2026",
                  "accommodation Southport golf",
                  "B&B Southport July 2026",
                  "where to stay The Open 2026 Southport",
                  "self catering near Royal Birkdale",
                  "hotels walking distance Royal Birkdale",
                ].map((q) => (
                  <li key={q} className="font-mono text-xs text-slate-300 bg-[#0f172a] px-3 py-1.5 rounded">
                    &quot;{q}&quot;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-2xl border border-orange-500/20 p-10" style={{ background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.06) 0%, transparent 70%)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
              July is closer than it looks
            </p>
            <h2 className="text-2xl font-bold text-white mb-3">
              Get your audit done before May
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto mb-6">
              The businesses that rank in July are the ones that fixed their sites in April.
              That is not a theory. That is how Google works.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Request a Free Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
