"use client";

import { useEffect, useState } from "react";

const SUBMISSION_DATE = "7 April 2026";
const DUE_DATE = new Date("2026-05-05T23:59:59");

function getCountdown() {
  const now = new Date();
  const diff = DUE_DATE.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, overdue: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    overdue: false,
  };
}

export default function FoiCountdown() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (countdown.overdue) {
    return (
      <div className="bg-[#0f172a] text-white rounded-lg p-6 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
          Deadline passed
        </p>
        <p className="text-xl font-bold text-[#f97316] mb-3">
          Sefton Council has not responded. They are now overdue.
        </p>
        <p className="text-sm text-[#94a3b8] leading-relaxed">
          The 20 working day deadline under the Freedom of Information Act 2000
          expired on <span className="text-white font-semibold">5 May 2026</span>.
          No response has been received. This page will be updated when one is.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0f172a] text-white rounded-lg p-6 mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-4">
        Response deadline
      </p>

      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { value: countdown.days, label: "Days" },
          { value: countdown.hours, label: "Hours" },
          { value: countdown.minutes, label: "Minutes" },
          { value: countdown.seconds, label: "Seconds" },
        ].map((u) => (
          <div
            key={u.label}
            className="text-center bg-white/5 rounded-lg py-4"
          >
            <p className="text-3xl font-bold text-white tabular-nums leading-none">
              {String(u.value).padStart(2, "0")}
            </p>
            <p className="text-xs text-[#64748b] mt-2 uppercase tracking-widest">
              {u.label}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-[#94a3b8] leading-relaxed">
        Sefton Council has 20 working days to respond under the Freedom of
        Information Act 2000. Clock started:{" "}
        <span className="text-white font-semibold">{SUBMISSION_DATE}</span>.
        Responses due by{" "}
        <span className="text-[#f97316] font-semibold">5 May 2026</span>. All
        answers will be published here in full, unedited.
      </p>
    </div>
  );
}
