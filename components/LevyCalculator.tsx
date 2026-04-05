"use client";

import { useState } from "react";
import { Calculator, TrendingDown } from "lucide-react";

const BID_RATE = 0.02; // 2% standard BID levy rate

const SIBA_SERVICES = [
  { name: "Technical SEO Audit (one-off)", value: 450 },
  { name: "Google Business Profile optimisation", value: 180 },
  { name: "Local ranking report (12 months)", value: 360 },
  { name: "Structured data implementation", value: 220 },
  { name: "Core Web Vitals analysis and report", value: 190 },
  { name: "Levy ROI document for BID ballot", value: 120 },
];

const SIBA_TOTAL = SIBA_SERVICES.reduce((sum, s) => sum + s.value, 0);

export default function LevyCalculator() {
  const [rateable, setRateable] = useState("");
  const [calculated, setCalculated] = useState(false);

  const rv = parseFloat(rateable.replace(/,/g, "")) || 0;
  const annualLevy = rv * BID_RATE;
  const saving = annualLevy; // SIBA is free, so saving equals levy paid
  const difference = SIBA_TOTAL - annualLevy;

  const handleCalculate = () => {
    if (rv > 0) setCalculated(true);
  };

  const formatGBP = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="rounded-xl border border-white/8 bg-[#0a1628] overflow-hidden">
      {/* Input */}
      <div className="p-6 sm:p-8 border-b border-white/8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
            <Calculator size={20} className="text-[#f97316]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Levy ROI Calculator</h3>
            <p className="text-xs text-slate-500">Based on the standard 2% BID levy rate</p>
          </div>
        </div>

        <label className="block mb-2 text-sm font-medium text-slate-300">
          Your Business Rateable Value (RV)
        </label>
        <p className="text-xs text-slate-500 mb-3">
          Find your RV at{" "}
          <a
            href="https://www.gov.uk/find-business-rates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            gov.uk/find-business-rates
          </a>
        </p>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
              £
            </span>
            <input
              type="text"
              value={rateable}
              onChange={(e) => {
                setRateable(e.target.value);
                setCalculated(false);
              }}
              placeholder="e.g. 48,000"
              className="w-full rounded border border-white/12 bg-[#0f172a] pl-8 pr-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
            />
          </div>
          <button
            onClick={handleCalculate}
            disabled={rv <= 0}
            className="rounded bg-[#f97316] px-5 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calculate
          </button>
        </div>
      </div>

      {/* Results */}
      {calculated && rv > 0 && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-[#0f172a] border border-white/8 p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Annual BID Levy</p>
              <p className="text-2xl font-bold text-red-400">{formatGBP(annualLevy)}</p>
              <p className="text-xs text-slate-600 mt-1">You pay this every year</p>
            </div>
            <div className="rounded-lg bg-[#0f172a] border border-white/8 p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">SIBA Membership Cost</p>
              <p className="text-2xl font-bold text-[#f97316]">{formatGBP(0)}</p>
              <p className="text-xs text-slate-600 mt-1">Always free</p>
            </div>
            <div className="rounded-lg bg-[#0f172a] border border-white/8 p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Annual Saving</p>
              <p className="text-2xl font-bold text-green-400">{formatGBP(saving)}</p>
              <p className="text-xs text-slate-600 mt-1">vs BID levy</p>
            </div>
          </div>

          {/* SIBA services breakdown */}
          <div>
            <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <TrendingDown size={15} className="text-[#f97316]" />
              What SIBA provides free (estimated market value)
            </p>
            <div className="space-y-2">
              {SIBA_SERVICES.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span className="text-sm text-slate-400">{s.name}</span>
                  <span className="text-sm font-medium text-slate-300">{formatGBP(s.value)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-semibold text-white">Total SIBA value</span>
                <span className="text-sm font-bold text-[#f97316]">{formatGBP(SIBA_TOTAL)}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-lg bg-orange-500/5 border border-orange-500/20 p-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Based on your rateable value of {formatGBP(rv)}, your annual BID levy is
              approximately{" "}
              <span className="text-white font-semibold">{formatGBP(annualLevy)}</span>.
              SIBA provides{" "}
              <span className="text-white font-semibold">{formatGBP(SIBA_TOTAL)}</span> in
              digital services at no cost.{" "}
              {difference > 0 ? (
                <>
                  That is{" "}
                  <span className="text-[#f97316] font-semibold">{formatGBP(difference)}</span>{" "}
                  more value than your annual levy, for nothing.
                </>
              ) : (
                <>
                  That is still a saving of{" "}
                  <span className="text-[#f97316] font-semibold">{formatGBP(saving)}</span>{" "}
                  per year versus the mandatory levy model.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
