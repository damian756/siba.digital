"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2026-04-07T00:00:00");
const DUE_DATE = new Date("2026-05-05T23:59:59");
const TOTAL_WORKING_DAYS = 20;

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
      <div className="mb-10 overflow-hidden rounded-lg border border-red-900">
        <div className="flex items-center gap-2 bg-red-950 px-6 py-3">
          <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-red-500" />
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Statutory Breach: Freedom of Information Act 2000, s.10(1)
          </p>
        </div>
        <div className="bg-[#0c1628] px-6 py-8">
          <p className="mb-4 text-2xl leading-tight text-red-400 sm:text-3xl">
            Sefton Council is in breach of the Freedom of Information Act 2000.
          </p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/50">
            Under s.10(1), a public authority must comply with a request
            promptly and in any event not later than 20 working days following
            the date of receipt. The deadline of{" "}
            <span className="font-semibold text-white">5 May 2026</span> has
            passed. No response has been received. This non-compliance is a
            matter of public record. This matter may be referred to the
            Information Commissioner&apos;s Office.
          </p>
          <div className="h-1.5 w-full rounded-full bg-red-950">
            <div className="h-1.5 w-full rounded-full bg-red-500" />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-red-500/70">
            20 of 20 statutory working days expired
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10 overflow-hidden rounded-lg border border-[#1e2d4a]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e2d4a] bg-[#0c1628] px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#2c4a52]" />
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Statutory Deadline: Freedom of Information Act 2000, s.10(1)
          </p>
        </div>
        <p className="text-xs text-white/30">
          Clock started: <span className="font-semibold text-white/60">7 April 2026</span>
        </p>
      </div>

      <div className="bg-[#0c1628] px-6 pt-6 pb-5">
        <div className="mb-6 grid grid-cols-4 gap-3">
          {[
            { value: countdown.days, label: "Calendar Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Minutes" },
            { value: countdown.seconds, label: "Seconds" },
          ].map((u) => (
            <div
              key={u.label}
              className="rounded-lg border border-[#1e2d4a] bg-[#0f1f38] py-5 text-center"
            >
              <p className="text-5xl leading-none tabular-nums text-white sm:text-6xl">
                {String(u.value).padStart(2, "0")}
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                {u.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-2">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Working days elapsed
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              {remaining} remaining
            </p>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#1e2d4a]">
            <div
              className="h-1.5 rounded-full bg-[#2c4a52] transition-all duration-1000"
              style={{ width: `${pctUsed}%` }}
            />
          </div>
          <div className="mt-1.5 flex justify-between">
            <p className="text-xs text-white/40">
              {elapsed} of {TOTAL_WORKING_DAYS} days used
            </p>
            <p className="text-xs text-white/30">
              Due: <span className="font-semibold text-white/70">5 May 2026</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e2d4a] bg-[#0a1020] px-6 py-4">
        <p className="text-xs leading-relaxed text-white/25">
          Under s.10(1) of the Freedom of Information Act 2000, a public
          authority must comply promptly and in any event not later than 20
          working days following the date of receipt. All responses will be
          published here in full, unedited.
        </p>
      </div>
    </div>
  );
}
