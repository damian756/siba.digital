"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SibaLogo from "@/components/SibaLogo";

const links = [
  { href: "/about", label: "About" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/audit", label: "Audit Hub" },
  { href: "/reports", label: "Reports" },
  { href: "/foi", label: "FOI" },
  { href: "/analysis", label: "Analysis" },
  { href: "/2026", label: "2026 Hub" },
];

const alertLink = { href: "/contact-log", label: "Contact Log" };

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="SIBA Digital home">
            <SibaLogo markSize={30} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={alertLink.href}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              {alertLink.label}
            </Link>
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
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={alertLink.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            {alertLink.label}
          </Link>
          <div className="pt-2">
          <Link
            href="/audit#request"
            onClick={() => setOpen(false)}
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
