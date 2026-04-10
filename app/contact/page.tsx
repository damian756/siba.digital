"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category = "commission" | "partnership" | "general" | "";

const categories: { value: Category; label: string; description: string }[] = [
  {
    value: "commission",
    label: "Commission an Audit",
    description: "Enquire about a digital governance or OSINT audit.",
  },
  {
    value: "partnership",
    label: "Partnership or Referral",
    description: "Journalists, institutions, or firms wanting to collaborate.",
  },
  {
    value: "general",
    label: "General Enquiry",
    description: "Anything else.",
  },
];

export default function ContactPage() {
  const [category, setCategory] = useState<Category>("");
  const [fields, setFields] = useState({
    name: "",
    organisation: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof typeof fields) => (v: string) =>
    setFields((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!category) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          name: fields.name,
          businessName: fields.organisation,
          email: fields.email,
          message: fields.message,
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
        "Could not reach the server. Please email damian@siba.digital directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Message received</h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Thank you. SIBA will respond within one working day.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setCategory("");
              setFields({ name: "", organisation: "", email: "", message: "" });
            }}
            className="text-sm font-semibold text-[#0f172a] hover:text-[#475569] transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0f172a]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-6">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Use the form below or email{" "}
            <a
              href="mailto:damian@siba.digital"
              className="text-white font-semibold hover:underline"
            >
              damian@siba.digital
            </a>{" "}
            directly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        {category === "commission" ? (
          <div className="space-y-4">
            <p className="text-sm text-[#475569]">
              For audit commissions, use the dedicated form on the Services page.
            </p>
            <Link
              href="/services#commission"
              className="inline-flex items-center gap-2 rounded bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b] transition-colors"
            >
              Go to Commission Form
              <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setCategory("")}
              className="block text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors mt-2"
            >
              Back to options
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#0f172a] uppercase tracking-widest">
                What is this about? <span className="text-[#f97316]">*</span>
              </p>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setCategory(c.value)}
                    className={`w-full text-left border p-4 transition-colors ${
                      category === c.value
                        ? "border-[#0f172a] bg-[#f8fafc]"
                        : "border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#0f172a]">{c.label}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{c.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {(category === "partnership" || category === "general") && (
              <div className="border border-[#e2e8f0] bg-white p-6 sm:p-8 space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0f172a]">
                    Your name <span className="text-[#f97316]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={fields.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className="input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="organisation" className="block text-sm font-semibold text-[#0f172a]">
                    Organisation <span className="text-xs font-normal text-[#94a3b8]">(optional)</span>
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    value={fields.organisation}
                    onChange={(e) => set("organisation")(e.target.value)}
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
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0f172a]">
                    Your message <span className="text-[#f97316]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={fields.message}
                    onChange={(e) => set("message")(e.target.value)}
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
                    {status === "sending" ? "Sending..." : "Send message"}
                    {status !== "sending" && <ArrowRight size={14} />}
                  </button>
                  <p className="mt-3 text-xs text-[#94a3b8]">
                    SIBA responds to all messages within one working day.
                  </p>
                </div>
              </div>
            )}
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-4">
            Direct contact
          </p>
          <div className="space-y-2">
            <p className="text-sm text-[#475569]">
              <span className="text-[#94a3b8] font-medium">Email: </span>
              <a href="mailto:damian@siba.digital" className="text-[#0f172a] font-semibold hover:underline">
                damian@siba.digital
              </a>
            </p>
            <p className="text-sm text-[#475569]">
              <span className="text-[#94a3b8] font-medium">Phone: </span>
              <a href="tel:01704635785" className="text-[#0f172a] font-semibold hover:underline">
                01704 635785
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
