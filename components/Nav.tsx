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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="SIBA Digital home">
            <SibaLogo markSize={28} />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0f172a] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0f172a] transition-colors"
              >
                Case Study
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 border border-[#e2e8f0] bg-white shadow-lg py-1 z-50">
                  {caseStudyLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-3 pl-3 border-l border-[#e2e8f0]">
              <Link
                href="/services#commission"
                className="inline-flex items-center rounded bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e293b] transition-colors"
              >
                Commission an Audit
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#475569] hover:text-[#0f172a] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 py-4 space-y-1">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f172a]"
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-1">
            <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
              Case Study
            </p>
            {caseStudyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f172a]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/services#commission"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded bg-[#0f172a] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Commission an Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
