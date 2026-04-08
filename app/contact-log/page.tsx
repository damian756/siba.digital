import type { Metadata } from "next";
import { AlertTriangle, Phone, Eye, Clock, Calendar, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Log | SIBA",
  description:
    "SIBA documents all formal and informal contact received in connection with its investigation into Southport BID governance. Responses and right of reply offers are published in full.",
  alternates: {
    canonical: "https://www.siba.digital/contact-log",
  },
  openGraph: {
    title: "Contact Log | SIBA",
    description:
      "SIBA documents all contact received in connection with its investigation. All parties named retain a permanent right of reply.",
    url: "https://www.siba.digital/contact-log",
    type: "website",
  },
};

const entries = [
  {
    id: "CL-002",
    date: "8 April 2026",
    time: "Approximately 13:05 to 13:15",
    duration: null,
    method: "LinkedIn",
    methodIcon: "eye",
    parties: [
      {
        name: "Rachel Fitzgerald",
        role: "CEO, Southport BID",
      },
      {
        name: "Andrew Brown",
        role: "Contracted media partner, Southport BID",
      },
    ],
    nature:
      "Rachel Fitzgerald and Andrew Brown both viewed SIBA founder Damian Roche's LinkedIn profile within five minutes of each other. This is an observable public fact recorded by LinkedIn's own 'Who Viewed Your Profile' feature. The views occurred within the same timeframe as the phone call documented in Entry CL-001. Martin Sarbutts, Facilities Development and Management Officer at Sefton Council, also viewed the profile approximately 13 hours prior, on the morning of 8 April 2026.",
    sibaResponse:
      "No private information is disclosed in this entry. All information is drawn from LinkedIn's publicly visible 'Who Viewed Your Profile' feature. SIBA notes the coordination and timing as a matter of documented public record.",
    highlight: false,
  },
  {
    id: "CL-001",
    date: "8 April 2026",
    time: "13:22",
    duration: "4 minutes 16 seconds",
    method: "Telephone",
    methodIcon: "phone",
    parties: [
      {
        name: "Andrew Mikhail",
        role: "Owner, Mikhail Hotel and Leisure Group",
      },
    ],
    nature:
      "Caller identified themselves as Andrew from Mikhail and requested removal of published analysis at siba.digital/analysis/bid-treasurer-mikhail. Caller stated the article was about his staff. No specific factual inaccuracy was identified by the caller. No formal legal claim was made in writing. No letter before action from a solicitor was received before or after the call.",
    sibaResponse:
      "Content remains published. The analysis is sourced entirely from Companies House, a statutory public register, and the BID's own published website. Every factual claim in the analysis is independently verifiable. SIBA does not remove content on the basis of informal telephone requests. The right of reply offered in the published analysis remains open without time limit at damian@siba.digital.",
    highlight: true,
  },
];

function MethodIcon({ type }: { type: string }) {
  if (type === "phone") return <Phone size={14} className="text-[#f97316]" />;
  if (type === "eye") return <Eye size={14} className="text-[#94a3b8]" />;
  return null;
}

export default function ContactLogPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#0f172a] border-b border-[#1e293b]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              Active Record
            </span>
            <span className="text-xs text-[#475569]">{entries.length} entries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Contact Log
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            SIBA documents all formal and informal contact received in connection with its
            investigation into Southport BID governance. The log is published as a matter of
            transparency and public record. All parties named retain a permanent right of reply.
          </p>
        </div>
      </div>

      {/* Why we publish this */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-3 items-start">
            <Info size={15} className="text-[#f97316] flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">
                Why SIBA publishes this log
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                SIBA operates transparently in both directions. We publish our findings. We also
                publish responses to those findings, including attempts to influence or request
                removal of published content. Every entry in this log is factual and
                independently verifiable. No private communications are disclosed without consent.
                This log functions as a contemporaneous public record and as a deterrent against
                informal attempts to suppress accountability journalism sourced from public
                documents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">

        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`rounded-xl border overflow-hidden ${
              entry.highlight
                ? "border-[#fca5a5] shadow-sm"
                : "border-[#e2e8f0]"
            } bg-white`}
          >
            {/* Entry header */}
            <div
              className={`px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
                entry.highlight
                  ? "bg-red-50 border-[#fca5a5]"
                  : "bg-[#f8fafc] border-[#e2e8f0]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                    entry.highlight
                      ? "bg-red-100 text-red-700"
                      : "bg-[#f1f5f9] text-[#64748b]"
                  }`}
                >
                  {entry.id}
                </span>
                <div className="flex items-center gap-1.5">
                  <MethodIcon type={entry.methodIcon} />
                  <span className="text-sm font-semibold text-[#0f172a]">
                    {entry.method}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748b]">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={11} />
                  {entry.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={11} />
                  {entry.time}
                </span>
                {entry.duration && (
                  <span className="font-mono text-[#94a3b8]">
                    Duration: {entry.duration}
                  </span>
                )}
              </div>
            </div>

            {/* Entry body */}
            <div className="px-6 py-5 space-y-5">
              {/* Parties */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                  Party / Parties
                </p>
                <div className="space-y-1.5">
                  {entry.parties.map((p) => (
                    <div key={p.name} className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-semibold text-[#0f172a]">{p.name}</span>
                      <span className="text-xs text-[#64748b]">{p.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nature */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                  Nature of contact
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">{entry.nature}</p>
              </div>

              {/* SIBA response */}
              <div
                className={`rounded-lg p-4 ${
                  entry.highlight
                    ? "bg-[#fff7ed] border border-[#fed7aa]"
                    : "bg-[#f8fafc] border border-[#e2e8f0]"
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                  SIBA position
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">{entry.sibaResponse}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder for future entries */}
        <div className="rounded-xl border border-dashed border-[#e2e8f0] px-6 py-5 text-center">
          <p className="text-xs text-[#94a3b8]">
            Future contact will be documented here in chronological order as received.
          </p>
        </div>

        {/* Right of reply */}
        <div className="rounded-xl bg-[#0f172a] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-[#f97316] flex-shrink-0" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
              Right of reply
            </p>
          </div>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            Every party named in this log, and every party named in any SIBA publication, retains
            a permanent right of reply. Responses will be published in full, unedited, alongside
            the relevant entry or report. There is no time limit on this offer.
          </p>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            If you believe any entry in this log contains a factual inaccuracy, contact SIBA at{" "}
            <a
              href="mailto:damian@siba.digital"
              className="text-[#f97316] hover:underline font-semibold"
            >
              damian@siba.digital
            </a>
            . Corrections will be made promptly and transparently.
          </p>
          <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-[#1e293b]">
            SIBA does not publish private communications without consent. All information in this
            log is drawn from directly observable public sources or from SIBA&apos;s own
            contemporaneous notes of contact received. This log is maintained as a factual record
            and does not constitute legal advice or formal legal proceedings.
          </p>
        </div>

      </div>
    </div>
  );
}
