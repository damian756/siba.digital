"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const orgTypes = [
  "Business Improvement District",
  "Local Authority",
  "Property Developer",
  "Housing Association",
  "Construction / Infrastructure",
  "Other",
];

export default function CommissionForm() {
  const [fields, setFields] = useState({
    orgName: "",
    orgType: "",
    role: "",
    email: "",
    scope: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof typeof fields) => (v: string) =>
    setFields((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "commission-audit",
          name: fields.role,
          businessName: fields.orgName,
          email: fields.email,
          message: `Organisation type: ${fields.orgType}\n\n${fields.scope}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Could not reach the server. Please try again or email damian@siba.digital directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#e2e8f0] bg-white px-8 py-10 max-w-xl">
        <p className="text-lg font-bold text-[#0f172a] mb-2">Enquiry received</p>
        <p className="text-sm text-[#64748b] leading-relaxed">
          Thank you. SIBA will respond within one working day to discuss scope
          and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#e2e8f0] bg-white p-6 sm:p-8 max-w-xl space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="orgName" className="block text-sm font-semibold text-[#0f172a]">
          Organisation name <span className="text-[#f97316]">*</span>
        </label>
        <input
          id="orgName"
          type="text"
          required
          value={fields.orgName}
          onChange={(e) => set("orgName")(e.target.value)}
          className="input"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="orgType" className="block text-sm font-semibold text-[#0f172a]">
          Organisation type <span className="text-[#f97316]">*</span>
        </label>
        <select
          id="orgType"
          required
          value={fields.orgType}
          onChange={(e) => set("orgType")(e.target.value)}
          className="input"
        >
          <option value="">Select type</option>
          {orgTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="role" className="block text-sm font-semibold text-[#0f172a]">
          Your name and role <span className="text-[#f97316]">*</span>
        </label>
        <input
          id="role"
          type="text"
          required
          placeholder="e.g. Jane Smith, Monitoring Officer"
          value={fields.role}
          onChange={(e) => set("role")(e.target.value)}
          className="input"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-semibold text-[#0f172a]">
          Email address <span className="text-[#f97316]">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => set("email")(e.target.value)}
          className="input"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="scope" className="block text-sm font-semibold text-[#0f172a]">
          What prompted this enquiry? <span className="text-[#f97316]">*</span>
        </label>
        <textarea
          id="scope"
          rows={5}
          required
          placeholder="Describe the situation, the organisation, and what you are looking for."
          value={fields.scope}
          onChange={(e) => set("scope")(e.target.value)}
          className="input resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit Enquiry"}
          {status !== "sending" && <ArrowRight size={14} />}
        </button>
        <p className="mt-3 text-xs text-[#94a3b8]">
          SIBA responds to all enquiries within one working day.
        </p>
      </div>
    </form>
  );
}
