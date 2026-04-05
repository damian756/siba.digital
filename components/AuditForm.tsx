"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type State = "idle" | "submitting" | "success" | "error";

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Terry Smith", required: true },
  { name: "businessName", label: "Business name", type: "text", placeholder: "The Bold Hotel", required: true },
  { name: "postcode", label: "Business postcode", type: "text", placeholder: "PR8 1DA", required: true },
  { name: "email", label: "Email address", type: "email", placeholder: "you@yourbusiness.co.uk", required: true },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "01704 000 000", required: false },
  { name: "website", label: "Website URL", type: "url", placeholder: "https://yourbusiness.co.uk", required: true },
];

export default function AuditForm() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    name: "", businessName: "", postcode: "",
    email: "", phone: "", website: "", notes: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="card p-10 text-center bg-[#f0fdf4] border-green-200">
        <CheckCircle2 className="mx-auto mb-4 text-green-600" size={40} />
        <h3 className="text-lg font-bold text-[#0f172a] mb-2">Audit request received</h3>
        <p className="text-sm text-[#64748b]">
          We will confirm by email within one business day and deliver the audit within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
              {f.label}{" "}
              {f.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={f.type}
              name={f.name}
              required={f.required}
              value={form[f.name as keyof typeof form]}
              onChange={onChange}
              placeholder={f.placeholder}
              className="input"
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">
          Anything specific you want us to look at?
        </label>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={onChange}
          placeholder="e.g. We rank poorly for 'restaurants Southport' / our site is slow on mobile..."
          className="input resize-none"
        />
      </div>

      {state === "error" && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-sm text-red-600">
            Something went wrong. Please try again or email{" "}
            <a href="mailto:office@siba.digital" className="underline">
              office@siba.digital
            </a>
          </p>
        </div>
      )}

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Submitting..." : "Submit Audit Request"}
          <Send size={14} />
        </button>
        <p className="text-xs text-[#94a3b8]">
          We will never share your data.{" "}
          <a href="/privacy" className="underline hover:text-[#64748b]">
            Privacy policy
          </a>
        </p>
      </div>
    </form>
  );
}
