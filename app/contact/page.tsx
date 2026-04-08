"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertTriangle, Lock, Shield, Users, HandHeart, Info, MessageSquare } from "lucide-react";

type Category = "join-siba" | "support-siba" | "support-anonymous" | "provide-information" | "general" | "";

const categories: { value: Category; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "join-siba",
    label: "Join SIBA",
    description: "Become a member. Free. No levy. PR8 or PR9 businesses.",
    icon: <Users size={16} />,
  },
  {
    value: "support-siba",
    label: "Support SIBA",
    description: "Back the investigation. Fundraising, skills, amplification.",
    icon: <HandHeart size={16} />,
  },
  {
    value: "support-anonymous",
    label: "Support SIBA anonymously",
    description: "Support without identifying yourself.",
    icon: <Shield size={16} />,
  },
  {
    value: "provide-information",
    label: "Provide information",
    description: "Share something relevant to the investigation. Treated in strict confidence.",
    icon: <Lock size={16} />,
  },
  {
    value: "general",
    label: "General contact",
    description: "Anything else.",
    icon: <MessageSquare size={16} />,
  },
];

function Field({
  label,
  id,
  type = "text",
  required = false,
  optional = false,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#0f172a]">
        {label}
        {required && <span className="ml-1 text-[#f97316]">*</span>}
        {optional && <span className="ml-1.5 text-xs font-normal text-[#94a3b8]">(optional)</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#f97316] focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 transition-colors resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#f97316] focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 transition-colors"
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [category, setCategory] = useState<Category>("");
  const [fields, setFields] = useState({
    name: "",
    businessName: "",
    postcode: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof typeof fields) => (v: string) => setFields((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!category) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, ...fields }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again or email damian@siba.digital directly.");
      setStatus("error");
    }
  }

  const selected = categories.find((c) => c.value === category);

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-5">
            <CheckCircle size={48} className="text-[#f97316]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Message received</h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            {category === "provide-information" || category === "support-anonymous"
              ? "Your message has been received and will be treated in strict confidence."
              : "Thank you for getting in touch. SIBA will respond as soon as possible."}
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setCategory("");
              setFields({ name: "", businessName: "", postcode: "", email: "", phone: "", message: "" });
            }}
            className="text-sm font-semibold text-[#f97316] hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#0f172a] border-b border-[#1e293b]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="badge badge-orange mb-4">Contact</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Get in touch
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Join SIBA, support the investigation, provide information in confidence, or just ask a
            question. Use the form below or email{" "}
            <a
              href="mailto:damian@siba.digital"
              className="text-[#f97316] hover:underline font-semibold"
            >
              damian@siba.digital
            </a>{" "}
            directly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Category selection */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#0f172a] uppercase tracking-widest">
              What is this about? <span className="text-[#f97316]">*</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {categories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    category === c.value
                      ? "border-[#f97316] bg-[#fff7ed] shadow-sm"
                      : "border-[#e2e8f0] bg-white hover:border-[#f97316]/50 hover:bg-[#fff7ed]/50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`${
                        category === c.value ? "text-[#f97316]" : "text-[#94a3b8]"
                      } flex-shrink-0`}
                    >
                      {c.icon}
                    </span>
                    <span className="text-sm font-semibold text-[#0f172a]">{c.label}</span>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed pl-6">{c.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Context notes */}
          {category === "support-anonymous" && (
            <div className="rounded-lg bg-[#0f172a] p-4 flex gap-3">
              <Shield size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-white">About anonymous submissions</p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  We will not ask for your name or email address. Your message will be treated in
                  strict confidence. Be aware that no browser-based form is completely anonymous.
                  Server logs record connection data. If you require stronger anonymity, consider
                  using a VPN and a separate email address not linked to your identity before
                  submitting.
                </p>
              </div>
            </div>
          )}

          {category === "provide-information" && (
            <div className="rounded-lg bg-[#0f172a] p-4 flex gap-3">
              <Lock size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-white">Confidentiality</p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  All information provided is treated in strict confidence. You do not need to
                  provide your name or email address. SIBA will not disclose your identity without
                  your explicit written consent under any circumstances. If you need stronger
                  anonymity guarantees, contact us via Signal or use a VPN and a throwaway email
                  address.
                </p>
              </div>
            </div>
          )}

          {category === "join-siba" && (
            <div className="rounded-lg bg-[#fff7ed] border border-[#fed7aa] p-4 flex gap-3">
              <Info size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#475569] leading-relaxed">
                SIBA membership is free. There is no levy, no fee, and no obligation. We are
                building an alternative network for PR8 and PR9 businesses. Damian will be in
                touch directly once your request is received.
              </p>
            </div>
          )}

          {/* Dynamic fields */}
          {category && (
            <div className="card bg-white p-6 sm:p-8 space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                {selected?.label}
              </p>

              {/* Name */}
              {(category === "join-siba" || category === "support-siba" || category === "general") && (
                <Field
                  label="Your name"
                  id="name"
                  required
                  placeholder="First and last name"
                  value={fields.name}
                  onChange={set("name")}
                />
              )}

              {category === "provide-information" && (
                <Field
                  label="Your name"
                  id="name"
                  optional
                  placeholder="You do not need to provide this"
                  value={fields.name}
                  onChange={set("name")}
                />
              )}

              {/* Business name */}
              {category === "join-siba" && (
                <Field
                  label="Business name"
                  id="businessName"
                  required
                  placeholder="Trading name of your business"
                  value={fields.businessName}
                  onChange={set("businessName")}
                />
              )}

              {/* Postcode */}
              {category === "join-siba" && (
                <Field
                  label="Business postcode"
                  id="postcode"
                  required
                  placeholder="PR8 or PR9"
                  value={fields.postcode}
                  onChange={set("postcode")}
                />
              )}

              {/* Email */}
              {(category === "join-siba" || category === "support-siba" || category === "general") && (
                <Field
                  label="Email address"
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={set("email")}
                />
              )}

              {category === "provide-information" && (
                <Field
                  label="Email address"
                  id="email"
                  type="email"
                  optional
                  placeholder="Only if you want a response"
                  value={fields.email}
                  onChange={set("email")}
                />
              )}

              {/* Phone */}
              {category === "join-siba" && (
                <Field
                  label="Phone number"
                  id="phone"
                  type="tel"
                  optional
                  placeholder="07..."
                  value={fields.phone}
                  onChange={set("phone")}
                />
              )}

              {/* Message */}
              <Field
                label={
                  category === "join-siba"
                    ? "Anything you want to tell us"
                    : category === "support-siba"
                    ? "How would you like to support?"
                    : category === "support-anonymous"
                    ? "Your message"
                    : category === "provide-information"
                    ? "Your information"
                    : "Your message"
                }
                id="message"
                type="textarea"
                required
                placeholder={
                  category === "provide-information"
                    ? "Tell us what you know. Include dates, names, or references if relevant. You can be as brief or as detailed as you like."
                    : category === "support-anonymous"
                    ? "Your message will be received without any identifying information required."
                    : undefined
                }
                value={fields.message}
                onChange={set("message")}
              />

              {/* Error */}
              {status === "error" && (
                <div className="flex items-start gap-2.5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
                  <AlertTriangle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  {status !== "sending" && <ArrowRight size={15} />}
                </button>
                <p className="mt-3 text-xs text-[#94a3b8]">
                  {category === "provide-information" || category === "support-anonymous"
                    ? "Your message is transmitted securely and treated in strict confidence."
                    : "SIBA responds to all messages. Typically within one working day."}
                </p>
              </div>
            </div>
          )}

        </form>

        {/* Alternative contact */}
        <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-4">
            Prefer direct contact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Email", value: "damian@siba.digital", href: "mailto:damian@siba.digital" },
              { label: "Phone", value: "01704 635785", href: "tel:01704635785" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card bg-white p-4 hover:bg-[#f8fafc] transition-colors flex items-center justify-between group"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                    {c.label}
                  </p>
                  <p className="text-sm font-semibold text-[#0f172a] mt-0.5">{c.value}</p>
                </div>
                <ArrowRight size={14} className="text-[#cbd5e1] group-hover:text-[#f97316] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
