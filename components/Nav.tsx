"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import SibaLogo from "@/components/SibaLogo";

const topLinks = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const southportLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/analysis", label: "Analysis" },
  { href: "/reports", label: "Reports" },
  { href: "/foi", label: "FOI Requests" },
  { href: "/contact-log", label: "Contact Log" },
];

export default function Nav() {
  const pathname = usePathname();
  const hasHero = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    if (!hasHero) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  const transparent = hasHero && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-[#f6f6ef]/95 backdrop-blur-sm border-[#ddddd5]"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[60px] items-center justify-between">
          <Link href="/" aria-label="SIBA Digital home">
            <SibaLogo markSize={24} variant={transparent ? "light" : "default"} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  transparent
                    ? "text-white/70 hover:text-white"
                    : "text-[#6b6b6b] hover:text-[#1c1c1c]"
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Case Studies dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`inline-flex items-center gap-1 text-[13px] font-medium transition-colors duration-300 ${
                  transparent
                    ? "text-white/70 hover:text-white"
                    : "text-[#6b6b6b] hover:text-[#1c1c1c]"
                }`}
              >
                Case Studies
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 border border-[#ddddd5] bg-[#f6f6ef] shadow-sm py-1.5 z-50">
                  {/* Southport BID section header */}
                  <Link
                    href="/overview"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-[13px] font-semibold text-[#1c1c1c] hover:bg-[#eeeee6] transition-colors"
                  >
                    Southport BID
                  </Link>
                  {/* Southport sub-pages */}
                  {southportLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block pl-7 pr-4 py-1.5 text-[12px] text-[#6b6b6b] hover:text-[#1c1c1c] hover:bg-[#eeeee6] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-[#ddddd5]" />

                  {/* Under investigation - greyed out, no link */}
                  <div className="px-4 py-2 flex items-center gap-2 cursor-default select-none">
                    <span className="text-[13px] font-semibold text-[#ccccc4]">
                      A North UK BID
                    </span>
                    <span className="inline-flex items-center rounded-sm bg-[#eeeee6] border border-[#ddddd5] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                      Under Investigation
                    </span>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/services#commission"
              className={`text-[13px] font-medium pb-0.5 border-b transition-colors duration-300 ${
                transparent
                  ? "text-white/80 border-white/40 hover:text-white hover:border-white"
                  : "text-[#2c4a52] border-[#2c4a52] hover:text-[#1c1c1c] hover:border-[#1c1c1c]"
              }`}
            >
              Commission an Audit
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              transparent
                ? "text-white/70 hover:text-white"
                : "text-[#6b6b6b] hover:text-[#1c1c1c]"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#ddddd5] bg-[#f6f6ef] px-4 py-4 space-y-1">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-[#6b6b6b] hover:text-[#1c1c1c]"
            >
              {l.label}
            </Link>
          ))}

          {/* Case Studies accordion */}
          <div className="pt-1">
            <button
              onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-sm text-[#6b6b6b] hover:text-[#1c1c1c]"
            >
              Case Studies
              <ChevronDown
                size={13}
                className={`transition-transform duration-150 ${mobileCaseStudiesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileCaseStudiesOpen && (
              <div className="pl-3 pb-1">
                <Link
                  href="/overview"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-[#1c1c1c]"
                >
                  Southport BID
                </Link>
                {southportLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-6 pr-3 py-2 text-sm text-[#6b6b6b] hover:text-[#1c1c1c]"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="my-1 border-t border-[#ddddd5] mx-3" />
                <div className="px-3 py-2 flex items-center gap-2 cursor-default select-none">
                  <span className="text-sm font-semibold text-[#ccccc4]">A North UK BID</span>
                  <span className="inline-flex items-center rounded-sm bg-[#eeeee6] border border-[#ddddd5] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                    Under Investigation
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 px-3">
            <Link
              href="/services#commission"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 w-fit hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
            >
              Commission an Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
