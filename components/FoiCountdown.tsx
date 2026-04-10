"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2026-04-07T00:00:00");
const DUE_DATE = new Date("2026-05-05T23:59:59");
const TOTAL_WORKING_DAYS = 20;

// UK bank holidays within the response window
const BANK_HOLIDAYS = new Set(["2026-05-04"]);

function isWorkingDay(date: Date): boolean {
  const day = date.getDay();
  const dateStr = date.toISOString().split("T")[0];
  return day !== 0 && day !== 6 && !BANK_HOLIDAYS.has(dateStr);
}

function getWorkingDaysElapsed(): number {
  const now = new Date();
  let count = 0;
  const cursor = new Date(START_DATE);
  while (cursor < now) {
    if (isWorkingDay(cursor)) count++;
    cursor.setDate(cursor.getDate() + 1);
  }
  return Math.min(count, TOTAL_WORKING_DAYS);
}

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
  const [elapsed, setElapsed] = useState(getWorkingDaysElapsed());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
      setElapsed(getWorkingDaysElapsed());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const remaining = TOTAL_WORKING_DAYS - elapsed;
  const pctUsed = (elapsed / TOTAL_WORKING_DAYS) * 100;

  if (countdown.overdue) {
    return (
      <div className="rounded-lg overflow-hidden mb-10 border border-red-900">
        <div className="bg-red-950 px-6 py-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            Statutory Breach — Freedom of Information Act 2000, s.10(1)
          </p>
        </div>
        <div className="bg-[#1c1c1c] px-6 py-8">
          <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-4 leading-tight">
            Sefton Council is in breach of the Freedom of Information Act 2000.
          </p>
          <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6 max-w-2xl">
            Under s.10(1), a public authority must comply with a request
            promptly and in any event not later than 20 working days following
            the date of receipt. The deadline of{" "}
            <span className="text-white font-semibold">5 May 2026</span> has
            passed. No response has been received. This non-compliance is a
            matter of public record. This matter may be referred to the
            Information Commissioner&apos;s Office.
          </p>
          <div className="w-full h-2 rounded-full bg-red-900">
            <div className="h-2 rounded-full bg-red-500 w-full" />
          </div>
          <p className="text-xs text-red-600 mt-2 font-semibold uppercase tracking-widest">
            20 of 20 statutory working days expired
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden mb-10 border border-[#2a2a2a]">
      {/* Header bar */}
      <div className="bg-[#1c1c1c] border-b border-[#2a2a2a] px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#1c1c1c] animate-pulse flex-shrink-0" />
          <p className="text-xs font-bold uppercase tracking-widest text-[#1c1c1c]">
            Statutory Deadline — Freedom of Information Act 2000, s.10(1)
          </p>
        </div>
        <p className="text-xs text-[#4a4a4a]">
          Clock started: <span className="text-[#a0a0a0] font-semibold">7 April 2026</span>
        </p>
      </div>

      {/* Main countdown */}
      <div className="bg-[#1c1c1c] px-6 pt-6 pb-5">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { value: countdown.days, label: "Calendar Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Minutes" },
            { value: countdown.seconds, label: "Seconds" },
          ].map((u) => (
            <div
              key={u.label}
              className="text-center bg-[#2a2a2a] rounded-lg py-5 border border-[#3d3d3d]"
            >
              <p className="text-5xl sm:text-6xl font-bold text-white tabular-nums leading-none">
                {String(u.value).padStart(2, "0")}
              </p>
              <p className="text-[10px] text-[#4a4a4a] mt-3 uppercase tracking-widest font-semibold">
                {u.label}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a4a4a]">
              Working days elapsed
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a4a4a]">
              {remaining} remaining
            </p>
          </div>
          <div className="w-full h-2 rounded-full bg-[#2a2a2a]">
            <div
              className="h-2 rounded-full bg-[#1c1c1c] transition-all duration-1000"
              style={{ width: `${pctUsed}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <p className="text-xs font-bold text-[#1c1c1c]">
              {elapsed} of {TOTAL_WORKING_DAYS} days used
            </p>
            <p className="text-xs text-[#4a4a4a]">
              Due: <span className="text-white font-semibold">5 May 2026</span>
            </p>
          </div>
        </div>
      </div>

      {/* Legal footer */}
      <div className="bg-[#0a0f1a] px-6 py-4 border-t border-[#2a2a2a]">
        <p className="text-xs text-[#4a4a4a] leading-relaxed">
          Under s.10(1) of the Freedom of Information Act 2000, a public
          authority must comply promptly and in any event not later than 20
          working days following the date of receipt. All responses will be
          published here in full, unedited.
        </p>
      </div>
    </div>
  );
}
