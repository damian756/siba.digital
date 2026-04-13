import type { Metadata } from "next";
import { AlertTriangle, Phone, Eye, Clock, Calendar, Info, Mail } from "lucide-react";
import InvestigationClosed from "@/components/InvestigationClosed";

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
    id: "CL-003",
    date: "13 April 2026",
    time: "15:24",
    duration: null,
    method: "Letter",
    methodIcon: "letter",
    parties: [
      {
        name: "Victoria Sweeney",
        role: "Director, River Law Limited",
      },
      {
        name: "Geoffrey Wareham",
        role: "Named client",
      },
      {
        name: "Mikhail Hotels and Leisure Holdings Limited",
        role: "Named client",
      },
      {
        name: "Mikhail Hotels Limited",
        role: "Named client",
      },
    ],
    nature:
      "Letter before action received from River Law Limited acting for Geoffrey Wareham, Mikhail Hotels and Leisure Holdings Limited, and Mikhail Hotels Limited. The letter alleged defamation in relation to a published analysis and a deleted Facebook post. No factual inaccuracy was identified. The published analysis was voluntarily removed. No admission of liability was made. No response was sent to River Law. SIBA considers the Southport BID case study closed. SIBA acknowledges the positive contribution Mikhail Hotel and Leisure Group has made to Southport's hospitality economy. 15 Freedom of Information requests remain on the public record.",
    sibaResponse:
      "The published analysis was voluntarily removed on the date the letter was received. No admission of liability was made. No response was sent. SIBA considers the Southport BID case study closed.",
    highlight: false,
  },
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
      "Caller identified themselves as Andrew from Mikhail and requested removal of a published analysis. Caller stated the article was about his staff. No specific factual inaccuracy was identified by the caller. No formal legal claim was made in writing.",
    sibaResponse:
      "The analysis referenced in this call was subsequently removed voluntarily on 13 April 2026 following a separate letter before action (see CL-003). No admission of liability was made.",
    highlight: false,
  },
];

function MethodIcon({ type }: { type: string }) {
  if (type === "phone") return <Phone size={14} className="text-[#6b6b6b]" />;
  if (type === "eye") return <Eye size={14} className="text-[#a0a0a0]" />;
  if (type === "letter") return <Mail size={14} className="text-[#6b6b6b]" />;
  return null;
}

export default function ContactLogPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 px-3 py-1 text-xs font-medium uppercase tracking-widest text-red-600">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            Active Record
          </span>
          <span className="text-xs text-[#a0a0a0]">{entries.length} entries</span>
        </div>

        <h1 className="mb-4">Contact Log</h1>
        <p className="mb-14 max-w-xl text-[15px] leading-relaxed text-[#3d3d3d]">
          SIBA documents all formal and informal contact received in connection with its
          investigation into Southport BID governance. The log is published as a matter of
          transparency and public record. All parties named retain a permanent right of reply.
        </p>

        <div className="mb-10 flex items-start gap-3 border-l-2 border-[#112d6e] bg-white p-5">
          <Info size={15} className="mt-0.5 flex-shrink-0 text-[#6b6b6b]" />
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b6b6b]">
              Why SIBA publishes this log
            </p>
            <p className="text-sm leading-relaxed text-[#3d3d3d]">
              SIBA operates transparently in both directions. We publish our findings. We also
              publish responses to those findings, including attempts to influence or request
              removal of published content. Every entry in this log is factual and
              independently verifiable. No private communications are disclosed without consent.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <InvestigationClosed />
        </div>

        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`overflow-hidden border bg-white ${
                entry.highlight
                  ? "border-red-200"
                  : "border-[#ddddd5]"
              }`}
            >
              <div
                className={`flex flex-col gap-3 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  entry.highlight
                    ? "border-red-200 bg-red-50"
                    : "border-[#ddddd5] bg-[#f6f6ef]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-xs font-medium ${
                      entry.highlight
                        ? "bg-red-100 text-red-700"
                        : "bg-white text-[#6b6b6b]"
                    }`}
                  >
                    {entry.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <MethodIcon type={entry.methodIcon} />
                    <span className="text-sm font-medium text-[#1c1c1c]">
                      {entry.method}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#6b6b6b]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={11} />
                    {entry.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} />
                    {entry.time}
                  </span>
                  {entry.duration && (
                    <span className="font-mono text-[#a0a0a0]">
                      Duration: {entry.duration}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-5 px-6 py-5">
                <div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                    Party / Parties
                  </p>
                  <div className="space-y-1.5">
                    {entry.parties.map((p) => (
                      <div key={p.name} className="flex flex-wrap items-baseline gap-2">
                        <span className="text-sm font-medium text-[#1c1c1c]">{p.name}</span>
                        <span className="text-xs text-[#6b6b6b]">{p.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                    Nature of contact
                  </p>
                  <p className="text-sm leading-relaxed text-[#3d3d3d]">{entry.nature}</p>
                </div>

                <div className="border border-[#ddddd5] bg-[#f6f6ef] p-4">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                    SIBA position
                  </p>
                  <p className="text-sm leading-relaxed text-[#3d3d3d]">{entry.sibaResponse}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border border-dashed border-[#ddddd5] px-6 py-5 text-center">
            <p className="text-xs text-[#a0a0a0]">
              Future contact will be documented here in chronological order as received.
            </p>
          </div>

          <div className="border border-[#1e2d4a] bg-[#0c1628] p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle size={14} className="flex-shrink-0 text-white/40" />
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Right of reply
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-white/60">
                Every party named in this log, and every party named in any SIBA publication, retains
                a permanent right of reply. Responses will be published in full, unedited, alongside
                the relevant entry or report. There is no time limit on this offer.
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                If you believe any entry in this log contains a factual inaccuracy, contact SIBA at{" "}
                <a
                  href="mailto:damian@siba.digital"
                  className="font-semibold text-white/80 hover:underline"
                >
                  damian@siba.digital
                </a>
                . Corrections will be made promptly and transparently.
              </p>
              <p className="border-t border-[#1e2d4a] pt-4 text-xs leading-relaxed text-white/25">
                SIBA does not publish private communications without consent. All information in this
                log is drawn from directly observable public sources or from SIBA&apos;s own
                contemporaneous notes of contact received. This log is maintained as a factual record
                and does not constitute legal advice or formal legal proceedings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
