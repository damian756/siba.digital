import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8e8e4]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-8 md:gap-12">
          <div className="max-w-xs">
            <p className="text-[13px] font-semibold text-[#1c1c1c] mb-2">SIBA Digital</p>
            <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
              Digital governance audits and open-source intelligence
              for BIDs, councils, and major developments.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/analysis", label: "Case Study" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/privacy#ownership", label: "Statement of Ownership" },
                { href: "/privacy#terms", label: "Terms of Use" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-3">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:damian@siba.digital"
                  className="text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
                >
                  damian@siba.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:01704635785"
                  className="text-[13px] text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors"
                >
                  01704 635785
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e8e8e4]">
          <p className="text-[12px] text-[#a0a0a0] leading-relaxed">
            &copy; {year} Strategic Intelligence &amp; Business Audits.
            SIBA Digital is a trading name of Churchtown Media Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
