import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#080f1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/siba-logo.png"
                alt="SIBA"
                width={40}
                height={40}
                className="rounded"
              />
              <p className="text-lg font-bold text-white">
                SIBA<span className="text-[#f97316]">.digital</span>
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The Southport Independent Business Alliance. Serving PR8 and PR9 businesses
              with data-driven digital infrastructure. No levy. No agenda.
            </p>
            <a
              href="https://twitter.com/SouthportIBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              <span className="text-[#f97316] font-semibold">@</span>SouthportIBA
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Platform
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/manifesto", label: "Manifesto" },
                { href: "/audit", label: "Audit Hub" },
                { href: "/2026", label: "2026 Hub" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#ownership"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Statement of Ownership
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#terms"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:office@siba.digital"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  office@siba.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:01704635785"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  01704 635785
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/audit"
                  className="inline-block rounded bg-[#f97316] px-4 py-2 text-xs font-semibold text-white hover:bg-orange-500 transition-colors"
                >
                  Request Free Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} Southport Independent Business Alliance. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            <a
              href="mailto:office@siba.digital"
              className="hover:text-slate-400 transition-colors"
            >
              office@siba.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
