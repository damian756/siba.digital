"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/audit", label: "Audit Hub" },
  { href: "/2026", label: "2026 Hub" },
  { href: "/privacy", label: "Legal" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#0f172a]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/siba-logo.png"
              alt="SIBA"
              width={36}
              height={36}
              className="rounded"
              priority
            />
            <span className="text-lg font-bold tracking-tight text-white">
              SIBA
              <span className="text-[#f97316]">.digital</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/audit"
              className="rounded bg-[#f97316] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Request Audit
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-[#0f172a] px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setOpen(false)}
            className="block w-full rounded bg-[#f97316] px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Request Audit
          </Link>
        </div>
      )}
    </header>
  );
}
