"use client";

import { useState } from "react";

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
      <div className="border border-[#e5e7eb] px-8 py-10 max-w-xl">
        <p className="text-lg font-semibold text-[#111827] mb-2">Enquiry received</p>
        <p className="text-sm text-[#374151] leading-relaxed">
          Thank you. SIBA will respond within one working day to discuss scope
          and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#e5e7eb] p-6 sm:p-8 max-w-xl space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="orgName" className="block text-sm font-semibold text-[#111827]">
          Organisation name <span className="text-[#991b1b]">*</span>
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
        <label htmlFor="orgType" className="block text-sm font-semibold text-[#111827]">
          Organisation type <span className="text-[#991b1b]">*</span>
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
        <label htmlFor="role" className="block text-sm font-semibold text-[#111827]">
          Your name and role <span className="text-[#991b1b]">*</span>
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
        <label htmlFor="email" className="block text-sm font-semibold text-[#111827]">
          Email address <span className="text-[#991b1b]">*</span>
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
        <label htmlFor="scope" className="block text-sm font-semibold text-[#111827]">
          What prompted this enquiry? <span className="text-[#991b1b]">*</span>
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
        <p className="text-sm text-red-700">{errorMsg}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-sm font-medium text-[#111827] border-b border-[#111827] pb-0.5 hover:text-[#374151] hover:border-[#374151] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit Enquiry"}
        </button>
        <p className="mt-3 text-[12px] text-[#9ca3af]">
          SIBA responds to all enquiries within one working day.
        </p>
      </div>
    </form>
  );
}
