"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import SibaLogo from "@/components/SibaLogo";

const topLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const caseStudyLinks = [
  { href: "/analysis", label: "Analysis" },
  { href: "/reports", label: "Reports" },
  { href: "/foi", label: "FOI Requests" },
  { href: "/contact-log", label: "Contact Log" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/2026", label: "2026 Readiness" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[60px] items-center justify-between">
          <Link href="/" aria-label="SIBA Digital home">
            <SibaLogo markSize={24} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-[#6b7280] hover:text-[#111827] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1 text-[13px] font-medium text-[#6b7280] hover:text-[#111827] transition-colors"
              >
                Case Study
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 border border-[#e5e7eb] bg-white shadow-sm py-1 z-50">
                  {caseStudyLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-[13px] text-[#6b7280] hover:text-[#111827] hover:bg-[#f9fafb] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/services#commission"
              className="text-[13px] font-medium text-[#111827] border-b border-[#111827] pb-0.5 hover:text-[#374151] hover:border-[#374151] transition-colors"
            >
              Commission an Audit
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#6b7280] hover:text-[#111827] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white px-4 py-4 space-y-1">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-[#6b7280] hover:text-[#111827]"
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-2">
            <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af]">
              Case Study
            </p>
            {caseStudyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-[#6b7280] hover:text-[#111827]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 px-3">
            <Link
              href="/services#commission"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#111827] border-b border-[#111827] pb-0.5 w-fit"
            >
              Commission an Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
