"use client";

import { useState } from "react";
import { Calculator, ExternalLink } from "lucide-react";

const BID_RATE = 0.02;

const SIBA_SERVICES = [
  { name: "Technical SEO Audit (one-off)", value: 450 },
  { name: "Google Business Profile optimisation", value: 180 },
  { name: "Local ranking report (12 months)", value: 360 },
  { name: "Structured data implementation", value: 220 },
  { name: "Core Web Vitals analysis and report", value: 190 },
  { name: "Levy ROI document for BID ballot", value: 120 },
];

const SIBA_TOTAL = SIBA_SERVICES.reduce((sum, s) => sum + s.value, 0);

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

export default function LevyCalculator() {
  const [raw, setRaw] = useState("");
  const [done, setDone] = useState(false);

  const rv = parseFloat(raw.replace(/,/g, "")) || 0;
  const levy = rv * BID_RATE;
  const diff = SIBA_TOTAL - levy;

  return (
    <div className="card overflow-hidden">
      {/* Input panel */}
      <div className="p-6 sm:p-8 border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
            <Calculator size={18} className="text-[#f97316]" />
          </div>
          <div>
            <p className="text-base font-bold text-[#0f172a]">Levy ROI Calculator</p>
            <p className="text-xs text-[#94a3b8]">Based on the standard 2% BID levy rate</p>
          </div>
        </div>

        <label className="block text-sm font-semibold text-[#0f172a] mb-1">
          Your Business Rateable Value (RV)
        </label>
        <p className="text-xs text-[#94a3b8] mb-3 flex items-center gap-1">
          Find your RV at{" "}
          <a
            href="https://www.gov.uk/find-business-rates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline inline-flex items-center gap-0.5"
          >
            gov.uk/find-business-rates
            <ExternalLink size={11} />
          </a>
        </p>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#94a3b8] pointer-events-none select-none">
              £
            </span>
            <input
              type="text"
              value={raw}
              onChange={(e) => { setRaw(e.target.value); setDone(false); }}
              placeholder="e.g. 48,000"
              className="w-full rounded-lg border border-[#e2e8f0] bg-white pl-8 pr-4 py-2.5 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#f97316] focus:ring-2 focus:ring-orange-500/10"
            />
          </div>
          <button
            onClick={() => { if (rv > 0) setDone(true); }}
            disabled={rv <= 0}
            className="rounded-lg bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calculate
          </button>
        </div>
      </div>

      {/* Results */}
      {done && rv > 0 && (
        <div className="p-6 sm:p-8 space-y-6 bg-white">
          {/* Key figures */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-red-50 border border-red-100">
              <p className="text-xs text-[#94a3b8] mb-1">Annual BID Levy</p>
              <p className="text-xl font-bold text-red-600">{fmt(levy)}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">you pay this</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
              <p className="text-xs text-[#94a3b8] mb-1">SIBA Cost</p>
              <p className="text-xl font-bold text-[#f97316]">{fmt(0)}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">always free</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50 border border-green-100">
              <p className="text-xs text-[#94a3b8] mb-1">Annual Saving</p>
              <p className="text-xl font-bold text-green-600">{fmt(levy)}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">vs. BID levy</p>
            </div>
          </div>

          {/* SIBA services breakdown */}
          <div>
            <p className="text-sm font-semibold text-[#0f172a] mb-3">
              What SIBA provides free (estimated market value)
            </p>
            <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
              {SIBA_SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    i < SIBA_SERVICES.length - 1 ? "border-b border-[#e2e8f0]" : ""
                  } hover:bg-[#f8fafc]`}
                >
                  <span className="text-[#475569]">{s.name}</span>
                  <span className="font-medium text-[#0f172a]">{fmt(s.value)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-4 py-3 bg-[#f8fafc] border-t border-[#e2e8f0]">
                <span className="text-sm font-bold text-[#0f172a]">Total SIBA value</span>
                <span className="text-sm font-bold text-[#f97316]">{fmt(SIBA_TOTAL)}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-lg bg-[#fff7ed] border border-[#fed7aa] p-4">
            <p className="text-sm text-[#475569] leading-relaxed">
              Based on a rateable value of {fmt(rv)}, your annual BID levy is approximately{" "}
              <span className="font-semibold text-[#0f172a]">{fmt(levy)}</span>. SIBA
              provides{" "}
              <span className="font-semibold text-[#0f172a]">{fmt(SIBA_TOTAL)}</span> in
              digital services at no cost.{" "}
              {diff > 0 ? (
                <>
                  That is{" "}
                  <span className="font-semibold text-[#f97316]">{fmt(diff)}</span> more
                  value than your annual levy, for free.
                </>
              ) : (
                <>
                  You still save{" "}
                  <span className="font-semibold text-[#f97316]">{fmt(levy)}</span> per year
                  versus the mandatory levy model.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
