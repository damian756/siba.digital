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
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl text-[#1c1c1c] mb-3">Message received</h2>
          <p className="text-sm text-[#3d3d3d] leading-relaxed mb-6">
            Thank you. SIBA will respond within one working day.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setCategory("");
              setFields({ name: "", organisation: "", email: "", message: "" });
            }}
            className="text-sm text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-4 leading-[1.15]">Get in touch</h1>
        <p className="text-sm text-[#3d3d3d] leading-relaxed mb-12">
          Use the form below or email{" "}
          <a
            href="mailto:damian@siba.digital"
            className="font-medium text-[#2c4a52] underline hover:text-[#1c1c1c]"
          >
            damian@siba.digital
          </a>{" "}
          directly.
        </p>

        {category === "commission" ? (
          <div className="space-y-4">
            <p className="text-sm text-[#3d3d3d]">
              For audit commissions, use the dedicated form on the Services page.
            </p>
            <Link
              href="/services#commission"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
            >
              Go to Commission Form
              <ArrowRight size={13} />
            </Link>
            <button
              onClick={() => setCategory("")}
              className="block text-sm text-[#a0a0a0] hover:text-[#1c1c1c] transition-colors mt-2"
            >
              Back to options
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold text-[#1c1c1c] uppercase tracking-widest">
                What is this about? <span className="text-[#8b1a1a]">*</span>
              </p>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setCategory(c.value)}
                    className={`w-full text-left border p-4 transition-colors ${
                      category === c.value
                        ? "border-[#1c1c1c] bg-[#eeeee6]"
                        : "border-[#ddddd5] bg-white hover:border-[#ccccc4]"
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#1c1c1c]">{c.label}</p>
                    <p className="text-[13px] text-[#6b6b6b] mt-0.5">{c.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {(category === "partnership" || category === "general") && (
              <div className="border border-[#ddddd5] bg-white p-6 sm:p-8 space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1c1c1c]">
                    Your name <span className="text-[#8b1a1a]">*</span>
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
                  <label htmlFor="organisation" className="block text-sm font-semibold text-[#1c1c1c]">
                    Organisation <span className="text-[13px] font-normal text-[#a0a0a0]">(optional)</span>
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
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1c1c1c]">
                    Your message <span className="text-[#8b1a1a]">*</span>
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
                  <p className="text-sm text-red-700">{errorMsg}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="text-sm font-medium text-[#1c1c1c] border-b border-[#1c1c1c] pb-0.5 hover:text-[#3d3d3d] hover:border-[#3d3d3d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  <p className="mt-3 text-[12px] text-[#a0a0a0]">
                    SIBA responds to all messages within one working day.
                  </p>
                </div>
              </div>
            )}
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-[#ddddd5]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-4">
            Direct contact
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-[#a0a0a0]">Email: </span>
              <a href="mailto:damian@siba.digital" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                damian@siba.digital
              </a>
            </p>
            <p className="text-sm">
              <span className="text-[#a0a0a0]">PGP: </span>
              <a href="/contact#pgp" className="text-[#2c4a52] underline hover:text-[#1c1c1c]">
                3D9C2224
              </a>
            </p>
          </div>
        </div>

        <div id="pgp" className="mt-8 pt-8 border-t border-[#ddddd5]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-4">
            Encrypted contact
          </p>
          <p className="text-sm text-[#3d3d3d] leading-relaxed mb-4">
            If you are sending sensitive information, use PGP to encrypt your
            message before emailing. SIBA operates a zero-tolerance approach
            to source confidentiality.
          </p>
          <div className="border border-[#ddddd5] bg-white px-5 py-4 space-y-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-1">
                Public key fingerprint
              </p>
              <p className="font-mono text-[13px] text-[#1c1c1c] break-all">
                7460 66D3 A9E6 427A 5494 7413 ACB2 EF0A 3D9C 2224
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="/pgp.txt"
                download
                className="inline-flex items-center gap-1.5 text-[13px] text-[#2c4a52] underline hover:text-[#1c1c1c] transition-colors"
              >
                Download public key
              </a>
              <a
                href="https://keys.openpgp.org/search?q=damian%40siba.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#2c4a52] underline hover:text-[#1c1c1c] transition-colors"
              >
                Verify on keys.openpgp.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
