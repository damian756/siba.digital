import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy and Legal",
  description:
    "SIBA Digital privacy policy, statement of ownership, and terms of use for siba.digital.",
  alternates: {
    canonical: "https://www.siba.digital/privacy",
  },
  openGraph: {
    title: "Privacy Policy and Legal | SIBA Digital",
    description:
      "SIBA Digital privacy policy, statement of ownership, and terms of use for siba.digital.",
    url: "https://www.siba.digital/privacy",
    type: "website",
  },
};

const LAST_UPDATED = "April 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-5 pb-4 border-b border-[#ddddd5]">
        {title}
      </h2>
      <div className="space-y-4 text-sm text-[#3d3d3d] leading-relaxed">{children}</div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-medium text-[#1c1c1c] mt-6 mb-2">{children}</h3>;
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0]">
          Legal and Transparency
        </p>
        <h1 className="mb-3">Privacy and Legal</h1>
        <p className="mb-10 text-sm text-[#6b6b6b]">
          Last updated: {LAST_UPDATED}. Questions?{" "}
          <a href="mailto:damian@siba.digital" className="text-[#2c4a52] hover:underline">
            damian@siba.digital
          </a>
        </p>

        <div className="sticky top-[60px] z-10 mb-10 border-y border-[#ddddd5] bg-[#f6f6ef]/95 backdrop-blur-sm">
          <nav className="flex flex-wrap items-center gap-x-1 py-2.5">
            <span className="mr-1 flex-shrink-0 border-r border-[#ddddd5] pr-3 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
              Jump to
            </span>
            {[
              { href: "#ownership", label: "Ownership" },
              { href: "#privacy", label: "Privacy" },
              { href: "#cookies", label: "Cookies" },
              { href: "#terms", label: "Terms" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 px-2.5 py-1 text-xs font-medium text-[#6b6b6b] transition-colors hover:text-[#1c1c1c]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-12">

          <Section id="ownership" title="Statement of Ownership">
            <p>
              SIBA Digital (siba.digital) is owned and operated by the Southport Independent
              Business Alliance (SIBA), based in Southport, Merseyside. SIBA is the entity
              responsible for all content published on this website.
            </p>
            <p>
              SIBA Digital is a trading name of Churchtown Media Ltd. It provides
              digital governance audits and open-source intelligence services for
              public bodies, BIDs, and major developments across the UK.
            </p>
            <p>
              SIBA is not affiliated with, endorsed by, or related to the Southport BID or
              any other mandatory business levy organisation. SIBA does not collect compulsory
              levies. Membership and engagement are entirely voluntary.
            </p>
            <div className="mt-4 border border-[#ddddd5] bg-[#f6f6ef] p-4">
              <p className="text-xs font-medium text-[#1c1c1c] mb-2">Contact</p>
              <p>
                SIBA Digital (a trading name of Churchtown Media Ltd, Company No. 16960442, VAT No. GB511024262), Southport, Merseyside.
                <br />
                Email:{" "}
                <a href="mailto:damian@siba.digital" className="text-[#2c4a52] hover:underline">
                  damian@siba.digital
                </a>
                {" "}&nbsp;|&nbsp; Tel:{" "}
                <a href="tel:01704635785" className="text-[#2c4a52] hover:underline">
                  01704 635785
                </a>
              </p>
            </div>
          </Section>

          <Section id="privacy" title="Privacy Policy">
            <p>
              This policy applies to information collected by siba.digital. It explains what
              data we collect, how we use it, and your rights under UK GDPR.
            </p>
            <H3>Data we collect</H3>
            <p>
              When you submit an audit request form, we collect: your name, business name,
              postcode, email address, phone number (optional), website URL, and any notes
              you provide. We collect this information solely to process your audit request
              and respond to you.
            </p>
            <p>
              We use Plausible Analytics for website traffic measurement. Plausible is
              privacy-preserving and does not use cookies, does not collect personally
              identifiable information, and does not share data with third parties.
            </p>
            <H3>How we use your data</H3>
            <p>
              Form submission data is used only to deliver the requested audit, communicate
              with you about that audit, and (with your explicit consent) include you in
              future SIBA communications. We do not sell, share, or transfer your personal
              data to third parties for marketing purposes.
            </p>
            <H3>Data retention</H3>
            <p>
              Audit request data is retained for 24 months from submission or until you
              request deletion. To request deletion, email{" "}
              <a href="mailto:damian@siba.digital" className="text-[#2c4a52] hover:underline">
                damian@siba.digital
              </a>{" "}
              with your name and business name.
            </p>
            <H3>Your rights</H3>
            <p>
              Under UK GDPR, you have the right to access, correct, or delete personal data
              we hold about you. You also have the right to object to processing and to data
              portability. Contact{" "}
              <a href="mailto:damian@siba.digital" className="text-[#2c4a52] hover:underline">
                damian@siba.digital
              </a>{" "}
              to exercise any of these rights.
            </p>
          </Section>

          <Section id="cookies" title="Cookies">
            <p>
              siba.digital does not use tracking cookies. We use Plausible Analytics, which
              is cookieless. We do not use Google Analytics, Facebook Pixel, or any other
              third-party tracking tools that set cookies. No cookie consent banner is
              displayed because no cookies requiring consent are set.
            </p>
          </Section>

          <Section id="terms" title="Terms of Use">
            <p>
              By accessing siba.digital, you agree to the following terms.
            </p>
            <H3>Content</H3>
            <p>
              All content on siba.digital is published for informational purposes. Levy
              calculations, audit assessments, and ranking data are estimates based on
              publicly available information. They should not be treated as formal financial
              or legal advice.
            </p>
            <p>
              BID levy rate figures are based on the standard 2% rate. Actual rates may
              vary. Verify your specific levy with your local BID or rateable value with the
              Valuation Office Agency.
            </p>
            <H3>Acceptable use</H3>
            <p>
              You may not use siba.digital to distribute malware, attempt unauthorised access
              to systems, scrape content at scale without permission, or engage in any
              activity that violates UK law.
            </p>
            <H3>Limitation of liability</H3>
            <p>
              SIBA accepts no liability for decisions made based on content published on
              siba.digital. SEO audits and recommendations are provided in good faith but
              results depend on factors outside our control, including search engine
              algorithm changes.
            </p>
            <H3>Governing law</H3>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
