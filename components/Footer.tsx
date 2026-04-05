import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#080f1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white mb-2">
              SIBA<span className="text-[#f97316]">.digital</span>
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              The Southport Independent Business Alliance. Serving PR8 and PR9 businesses
              with data-driven digital infrastructure. No levy. No agenda.
            </p>
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
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} Southport Independent Business Alliance. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built by{" "}
            <a
              href="https://churchtownmedia.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              Churchtown Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
