import Link from "next/link";
import { SibaMark } from "@/components/SibaLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <SibaMark size={22} />
              <span className="text-sm font-bold text-[#0f172a]">SIBA Digital</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Digital governance audits and open-source intelligence for
              BIDs, councils, and major developments across the UK.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
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
                      className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
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
                      className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
                Contact
              </p>
              <ul className="space-y-2">
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
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            &copy; {year} Strategic Intelligence &amp; Business Audits. SIBA Digital is a
            trading name of Churchtown Media Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
