import Link from "next/link";
import SibaLogo from "@/components/SibaLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <SibaLogo markSize={30} className="mb-3" />
            <p className="text-sm text-[#64748b] leading-relaxed mb-4">
              The Southport Independent Business Alliance. Serving PR8 and PR9
              businesses with data-driven digital infrastructure.
            </p>
            <a
              href="https://twitter.com/SouthportIBA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#94a3b8] hover:text-[#f97316] transition-colors"
            >
              @SouthportIBA
            </a>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Platform
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/manifesto", label: "Manifesto" },
                { href: "/audit", label: "Audit Hub" },
                { href: "/2026", label: "2026 Hub" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/privacy#ownership", label: "Statement of Ownership" },
                { href: "/privacy#terms", label: "Terms of Use" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:office@siba.digital"
                  className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                >
                  office@siba.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:01704635785"
                  className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                >
                  01704 635785
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/audit"
                  className="inline-block rounded-lg bg-[#f97316] px-4 py-2 text-xs font-semibold text-white hover:bg-orange-500 transition-colors"
                >
                  Request Free Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8]">
            &copy; {year} Southport Independent Business Alliance. All rights reserved.
          </p>
          <p className="text-xs text-[#cbd5e1]">
            <a
              href="mailto:office@siba.digital"
              className="hover:text-[#94a3b8] transition-colors"
            >
              office@siba.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
