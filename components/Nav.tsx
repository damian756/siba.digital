"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import SibaLogo from "@/components/SibaLogo";

const topLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/audit", label: "Audit Hub" },
  { href: "/2026", label: "2026 Hub" },
  { href: "/contact", label: "Contact" },
];

const investigationLinks = [
  { href: "/analysis", label: "Analysis" },
  { href: "/reports", label: "Reports" },
  { href: "/foi", label: "FOI Requests" },
  { href: "/contact-log", label: "Contact Log", alert: true },
  { href: "/manifesto", label: "Manifesto" },
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
            <SibaLogo markSize={30} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Investigation dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
              >
                The Investigation
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-[#e2e8f0] bg-white shadow-lg py-1 z-50">
                  {investigationLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                        l.alert
                          ? "text-red-600 hover:text-red-700 hover:bg-red-50"
                          : "text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {l.alert && (
                        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                        </span>
                      )}
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-2 pl-3 border-l border-[#e2e8f0]">
              <Link
                href="/audit#request"
                className="inline-flex items-center rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition-colors shadow-sm"
              >
                Request Audit
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 py-4 space-y-1">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc]"
            >
              {l.label}
            </Link>
          ))}

          {/* Investigation sub-section */}
          <div className="pt-1">
            <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
              The Investigation
            </p>
            {investigationLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  l.alert
                    ? "text-red-600 hover:text-red-700 hover:bg-red-50"
                    : "text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc]"
                }`}
              >
                {l.alert && (
                  <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                  </span>
                )}
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/audit#request"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-lg bg-[#f97316] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Request Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
