"use client";

import { useState } from "react";
import Link from "next/link";
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
          category: "commission",
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
      <div className="border border-[#ddddd5] px-8 py-10 max-w-xl">
        <p className="text-lg font-semibold text-[#1c1c1c] mb-2">Enquiry received</p>
        <p className="text-sm text-[#3d3d3d] leading-relaxed mb-5">
          Thank you. SIBA will respond within one working day to discuss scope
          and next steps.
        </p>
        <Link
          href="/overview"
          className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
        >
          Read the founding case study while you wait
          <ArrowRight size={13} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#ddddd5] p-6 sm:p-8 max-w-xl space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="orgName" className="block text-sm font-semibold text-[#1c1c1c]">
          Organisation name <span className="text-[#8b1a1a]">*</span>
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
        <label htmlFor="orgType" className="block text-sm font-semibold text-[#1c1c1c]">
          Organisation type <span className="text-[#8b1a1a]">*</span>
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
        <label htmlFor="role" className="block text-sm font-semibold text-[#1c1c1c]">
          Your name and role <span className="text-[#8b1a1a]">*</span>
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
        <label htmlFor="email" className="block text-sm font-semibold text-[#1c1c1c]">
          Email address <span className="text-[#8b1a1a]">*</span>
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
        <label htmlFor="scope" className="block text-sm font-semibold text-[#1c1c1c]">
          What prompted this enquiry? <span className="text-[#8b1a1a]">*</span>
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
          className="text-sm font-medium text-[#1c1c1c] border-b border-[#1c1c1c] pb-0.5 hover:text-[#3d3d3d] hover:border-[#3d3d3d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit Enquiry"}
        </button>
        <p className="mt-3 text-[12px] text-[#a0a0a0]">
          SIBA responds to all enquiries within one working day.
        </p>
      </div>
    </form>
  );
}
