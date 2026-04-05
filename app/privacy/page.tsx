import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy and Legal",
  description:
    "SIBA Digital privacy policy, statement of ownership, and terms of use for siba.digital.",
};

const LAST_UPDATED = "April 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">{title}</h2>
      <div className="space-y-4 text-sm text-slate-400 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/8 bg-[#0a1628] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Legal and Transparency
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy and Legal</h1>
          <p className="text-slate-400">
            Last updated: {LAST_UPDATED}. If you have questions about any of the below,
            contact us at{" "}
            <a href="mailto:hello@siba.digital" className="text-[#f97316] hover:underline">
              hello@siba.digital
            </a>
            .
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-16 z-10 border-b border-white/8 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-6 overflow-x-auto py-3 text-sm">
            {[
              { href: "#ownership", label: "Ownership" },
              { href: "#privacy", label: "Privacy Policy" },
              { href: "#cookies", label: "Cookies" },
              { href: "#terms", label: "Terms of Use" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex-shrink-0 text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        <Section id="ownership" title="Statement of Ownership">
          <p>
            SIBA Digital (siba.digital) is owned and operated by Churchtown Media, a digital
            publishing company based in Southport, Merseyside. Churchtown Media is the entity
            responsible for all content published on this website.
          </p>
          <p>
            The Southport Independent Business Alliance (SIBA) is a non-mandatory advocacy
            organisation. It is not a legally incorporated body and does not hold funds, employ
            staff, or enter into contracts. Its activities are coordinated and published by
            Churchtown Media on behalf of participating businesses.
          </p>
          <p>
            SIBA is not affiliated with, endorsed by, or related to the Southport BID (Business
            Improvement District) or any other mandatory business levy organisation. SIBA does
            not collect compulsory levies. Membership and engagement are entirely voluntary.
          </p>
          <div className="rounded-lg border border-white/8 bg-[#0a1628] p-4 mt-4">
            <p className="text-xs font-semibold text-white mb-2">Contact</p>
            <p>
              Churchtown Media, Southport, Merseyside.
              <br />
              Email:{" "}
              <a href="mailto:hello@siba.digital" className="text-[#f97316] hover:underline">
                hello@siba.digital
              </a>
            </p>
          </div>
        </Section>

        <Section id="privacy" title="Privacy Policy">
          <p>
            This policy applies to information collected by siba.digital. It explains what data
            we collect, how we use it, and your rights.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Data we collect</h3>
          <p>
            When you submit an audit request form, we collect: your name, business name,
            postcode, email address, phone number (optional), website URL, and any notes you
            provide. We collect this information solely to process your audit request and
            respond to you.
          </p>
          <p>
            We use Plausible Analytics for website traffic measurement. Plausible is
            privacy-preserving and does not use cookies, does not collect personally
            identifiable information, and does not share data with third parties. No analytics
            cookie consent is required.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">How we use your data</h3>
          <p>
            Form submission data is used only to: deliver the requested audit, communicate with
            you about that audit, and (with your explicit consent) include you in future SIBA
            communications. We do not sell, share, or transfer your personal data to third
            parties for marketing purposes.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Data retention</h3>
          <p>
            Audit request data is retained for 24 months from submission or until you request
            deletion. To request deletion, email{" "}
            <a href="mailto:hello@siba.digital" className="text-[#f97316] hover:underline">
              hello@siba.digital
            </a>{" "}
            with your name and business name.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Your rights</h3>
          <p>
            Under UK GDPR, you have the right to access, correct, or delete personal data we
            hold about you. You also have the right to object to processing and to data
            portability. To exercise any of these rights, contact us at{" "}
            <a href="mailto:hello@siba.digital" className="text-[#f97316] hover:underline">
              hello@siba.digital
            </a>
            .
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Legal basis for processing</h3>
          <p>
            We process form submission data on the basis of legitimate interest (responding to
            a direct request from you) and, where applicable, your consent. We do not process
            sensitive personal data.
          </p>
        </Section>

        <Section id="cookies" title="Cookies">
          <p>
            siba.digital does not use tracking cookies. We use Plausible Analytics, which is
            cookieless. We do not use Google Analytics, Facebook Pixel, or any other
            third-party tracking tools that set cookies.
          </p>
          <p>
            No cookie consent banner is displayed because no cookies requiring consent are set.
            If this changes, this policy will be updated and a consent mechanism implemented.
          </p>
        </Section>

        <Section id="terms" title="Terms of Use">
          <p>
            By accessing siba.digital, you agree to the following terms. If you do not agree,
            do not use the site.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Content</h3>
          <p>
            All content on siba.digital is published for informational purposes. Levy
            calculations, audit assessments, and ranking data are estimates based on publicly
            available information and our own analysis. They should not be treated as formal
            financial or legal advice.
          </p>
          <p>
            BID levy rate figures are based on the standard 2% rate applied across many UK
            BIDs. Actual rates may vary. Verify your specific levy with your local BID or
            rateable value with the Valuation Office Agency.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Acceptable use</h3>
          <p>
            You may not use siba.digital to: distribute malware, attempt to gain unauthorised
            access to systems, scrape content at scale without permission, or engage in any
            activity that violates UK law.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Limitation of liability</h3>
          <p>
            Churchtown Media accepts no liability for decisions made based on content published
            on siba.digital. SEO audits and recommendations are provided in good faith but
            results depend on factors outside our control, including search engine algorithm
            changes.
          </p>

          <h3 className="text-sm font-semibold text-white mt-6 mb-2">Governing law</h3>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes will be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </Section>
      </div>
    </div>
  );
}
