"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function AuditForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    postcode: "",
    email: "",
    phone: "",
    website: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-green-400" size={40} />
        <h3 className="text-xl font-bold text-white mb-2">Audit request received</h3>
        <p className="text-slate-400">
          We will confirm receipt by email within one business day. Your audit will be delivered
          within 48 hours of confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/8 bg-[#0a1628] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Your name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Terry Smith"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Business name */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Business name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="The Bold Hotel"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Business postcode <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="postcode"
            required
            value={form.postcode}
            onChange={handleChange}
            placeholder="PR8 1DA"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Email address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.co.uk"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="01704 000 000"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Website URL <span className="text-red-400">*</span>
          </label>
          <input
            type="url"
            name="website"
            required
            value={form.website}
            onChange={handleChange}
            placeholder="https://yourbusiness.co.uk"
            className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Anything specific you want us to look at?
        </label>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          placeholder="e.g. We rank poorly for 'restaurants Southport' / our site is slow on mobile / we have no Google reviews..."
          className="w-full rounded border border-white/12 bg-[#0f172a] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 resize-none"
        />
      </div>

      {state === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong. Please try again or email us directly at hello@siba.digital
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 rounded bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Submitting..." : "Submit Audit Request"}
          <Send size={15} />
        </button>
        <p className="mt-3 text-xs text-slate-500">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-slate-400 hover:text-white underline">
            privacy policy
          </a>
          . We will never share your data.
        </p>
      </div>
    </form>
  );
}
