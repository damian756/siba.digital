import Link from "next/link";
import SibaLogo from "@/components/SibaLogo";

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    href: "https://x.com/SouthportIBA",
    label: "X (formerly Twitter)",
    handle: "@SouthportIBA",
    icon: XIcon,
  },
  {
    href: "https://www.facebook.com/SouthportIBA/",
    label: "Facebook",
    handle: "SouthportIBA",
    icon: FacebookIcon,
  },
  {
    href: "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
    label: "LinkedIn",
    handle: "Damian Roche",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <SibaLogo markSize={30} className="mb-3" />
            <p className="text-sm text-[#64748b] leading-relaxed mb-5">
              The Southport Independent Business Alliance. Serving PR8 and PR9
              businesses with data-driven digital infrastructure.
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center gap-2.5 text-xs font-medium text-[#64748b] hover:text-[#0f172a] transition-colors group"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] group-hover:border-[#f97316] group-hover:text-[#f97316] transition-colors">
                      <Icon />
                    </span>
                    {s.handle}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Platform
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/manifesto", label: "Manifesto" },
                { href: "/audit", label: "Audit Hub" },
                { href: "/reports", label: "Reports" },
                { href: "/analysis", label: "Analysis" },
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
                  href="mailto:damian@siba.digital"
                  className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                >
                  damian@siba.digital
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
              href="mailto:damian@siba.digital"
              className="hover:text-[#94a3b8] transition-colors"
            >
              damian@siba.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
