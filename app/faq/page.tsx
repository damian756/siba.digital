import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ: BID Governance Audits and OSINT | SIBA Digital",
  description:
    "Answers to common questions about SIBA Digital's governance audit services. What we do, how we work, who can commission an audit, confidentiality, costs, and what happens after an audit.",
  alternates: {
    canonical: "https://www.siba.digital/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | SIBA Digital",
    description:
      "What is a BID governance audit? Who can commission one? Is OSINT legal? How much does it cost? Everything you need to know before engaging SIBA Digital.",
    url: "https://www.siba.digital/faq",
    type: "website",
  },
};

const faqs = [
  {
    category: "About SIBA",
    items: [
      {
        q: "What is SIBA Digital?",
        a: "SIBA Digital is a digital governance audit and open-source intelligence firm based in Southport, Merseyside. We map the corporate relationships, procurement chains, and digital footprints behind public funding decisions. Our clients are Business Improvement Districts, local authorities, Town Deal boards, and major developments that manage public money and need to know what their governance trail looks like before someone else maps it for them.",
      },
      {
        q: "Who runs SIBA Digital?",
        a: "SIBA Digital was founded by Damian Roche. Ex-British Army, Queen's Guards. Twenty years in web development and SEO, fifteen years focused on organic search. Self-taught developer. Damian built the SIBA investigation methodology from scratch during the Southport BID investigation in 2026, applying the same precision to public record analysis that characterised his military service.",
      },
      {
        q: "Is SIBA Digital a law firm?",
        a: "No. SIBA Digital is not a law firm and does not provide legal advice. Audit reports present documented findings and evidence chains for the commissioning organisation to act upon. If findings require legal action, we recommend instructing a solicitor. SIBA can work alongside legal teams as a research and intelligence function.",
      },
      {
        q: "Is SIBA politically affiliated?",
        a: "No. SIBA has no relationship with any political party, elected representative, council, or funding body. Independence is non-negotiable. We have been contacted by elected officials following published work but have accepted no funding, direction, or instruction from any political source.",
      },
      {
        q: "Are you the same organisation that investigated Southport BID?",
        a: "Yes. The Southport BID investigation is SIBA's founding case study. Three reports were published, 15 FOI requests were submitted to Sefton Council, and the investigation reached the House of Commons, MHCLG, and national media. The methodology developed during that investigation is now offered commercially. You can read the full case study at siba.digital/overview.",
      },
    ],
  },
  {
    category: "What we do",
    items: [
      {
        q: "What is a digital governance audit?",
        a: "A digital governance audit is a structured review of an organisation's corporate relationships, procurement chains, board composition, and public-facing disclosures, conducted entirely from publicly available records. It identifies conflicts of interest, undisclosed relationships, and governance vulnerabilities before they are discovered by journalists, FOI requests, or formal complaints.",
      },
      {
        q: "What is OSINT?",
        a: "OSINT stands for open-source intelligence. It is the practice of gathering and analysing information from publicly available sources: Companies House, council registers of interest, published accounts, FOI responses, land registry, charity commission, and observable digital footprints. Everything SIBA uses is already in the public domain. We are systematic, experienced, and faster than a manual search.",
      },
      {
        q: "What does a BID governance audit cover?",
        a: "A BID governance audit covers board composition and director networks cross-referenced against Companies House; declared and undeclared conflicts of interest; procurement patterns and contractor relationships; media and PR contract disclosure; budget flow analysis from published business plans and accounts; and digital footprint consistency. The depth depends on the tier commissioned. See the services page for a full breakdown.",
      },
      {
        q: "What is the difference between a Tier 1 and Tier 2 audit?",
        a: "Tier 1 is a Digital Governance Health Check. It covers board-level conflict of interest flags and a surface-level OSINT scan of the corporate network. Delivered in five working days from £1,500. Tier 2 is a Deep Transparency Audit. It covers the full corporate ecosystem, all procurement chains, media contracts, related-party transaction mapping, and a comprehensive findings report with evidence appendix. Delivered in two to three weeks from £4,500.",
      },
      {
        q: "Can you audit a Town Deal board or local authority?",
        a: "Yes. The methodology applies to any public body managing public money. Town Deal boards, Levelling Up boards, council-owned development companies, and arm's-length bodies all produce the same types of public records. If the governance structure exists, the audit methodology applies.",
      },
    ],
  },
  {
    category: "Legality and ethics",
    items: [
      {
        q: "Is what you do legal?",
        a: "Yes. All SIBA research is conducted under existing public access rights. Companies House records are publicly accessible by statute. Council registers of interest are required to be published online. FOI requests are a statutory right under the Freedom of Information Act 2000. Published accounts, business plans, and land registry entries are public documents. Nothing SIBA does requires special access, permissions, or authorisation.",
      },
      {
        q: "Do you use private or confidential information?",
        a: "No. Every finding in a SIBA report is sourced from a publicly available document and linked directly. We do not use hacked data, stolen documents, private communications, or information obtained through covert methods. If we cannot source a claim from the public record, it does not go in the report.",
      },
      {
        q: "What is the difference between what you do and hacking?",
        a: "Hacking involves gaining unauthorised access to private systems or data. SIBA accesses only information that is already publicly available by law or by publication. There is no technical intrusion, no social engineering, and no covert access. The distinction is significant legally and ethically. We read what is already public, systematically and thoroughly.",
      },
      {
        q: "Do you work under legal professional privilege?",
        a: "No. SIBA is not a law firm and does not operate under legal professional privilege. However, SIBA can be instructed by a law firm to conduct research as part of a legally privileged engagement, in which case the privilege may attach to the work product depending on the structure of the instruction. We recommend discussing this with your legal advisers if privilege is a requirement.",
      },
      {
        q: "Can your findings be used in a formal complaint or legal proceeding?",
        a: "SIBA reports are built to an evidence standard that makes them suitable for use in formal complaints, regulatory submissions, and legal proceedings. Every finding is sourced and linked. The evidence chain is documented. Reports have been reviewed and referenced by compliance professionals, elected officials, and journalists following the Southport investigation.",
      },
      {
        q: "What is your insurance position?",
        a: "SIBA Digital operates under Churchtown Media Ltd, which carries professional indemnity insurance to £5,000,000 and public liability insurance to £1,000,000. Professional indemnity cover is the relevant policy for audit and intelligence services. Details are available on request.",
      },
    ],
  },
  {
    category: "Commissioning",
    items: [
      {
        q: "Who can commission an audit?",
        a: "Any organisation or individual with a legitimate governance concern can commission a SIBA audit. Typical clients include BID boards preparing for renewal, councils overseeing BIDs or development bodies, Town Deal and Levelling Up board members, solicitors conducting due diligence, compliance officers, and journalists working on public accountability stories.",
      },
      {
        q: "Can a levy payer commission an audit of their own BID?",
        a: "Yes. Levy payers have a direct financial interest in how BID money is spent. If you have concerns about your BID's governance, procurement decisions, or board composition, you can commission a Tier 1 health check. Your identity as the commissioning client is kept confidential.",
      },
      {
        q: "How much does an audit cost?",
        a: "Tier 1 Digital Governance Health Check is from £1,500. Tier 2 Deep Transparency Audit is from £4,500. Tier 3 Ongoing Monitoring is from £750 per quarter and requires a completed Tier 2 audit as a baseline. Tier 4 Digital Security Assessment is from £2,000. All prices exclude VAT. See the services page for full scope details.",
      },
      {
        q: "How long does an audit take?",
        a: "Tier 1 is five working days from instruction. Tier 2 is two to three weeks. Tier 4 Digital Security Assessment is five to ten working days. Tier 3 ongoing monitoring produces quarterly reports. Timelines assume timely receipt of any contextual information requested from the client at the start of the engagement.",
      },
      {
        q: "Do you work outside Merseyside?",
        a: "Yes. All SIBA research is conducted remotely from publicly available records. Geography is irrelevant. We have already identified specific governance questions in BIDs across the North West and beyond. The methodology applies to any UK public body.",
      },
      {
        q: "What happens after I submit the enquiry form?",
        a: "We respond to every submission within one working day. The initial response will confirm receipt, ask any clarifying questions about scope, and outline the recommended audit tier based on your situation. No commitment is required at that stage.",
      },
    ],
  },
  {
    category: "Confidentiality",
    items: [
      {
        q: "Will my identity as the commissioning client be kept confidential?",
        a: "Yes. The identity of commissioning clients is kept strictly confidential. We do not disclose who has instructed an audit, to whom, or under what circumstances. This applies to all tiers.",
      },
      {
        q: "Will SIBA publish the findings of a commissioned audit?",
        a: "No. Commissioned audits are private engagements. Findings are delivered to the commissioning organisation only. They are never published, shared, or referenced publicly without explicit written instruction from the client. This is the fundamental distinction between commissioned audits and SIBA's independent published investigations.",
      },
      {
        q: "How are reports delivered?",
        a: "Tier 1 reports are delivered as PDF via encrypted email. Tier 2 reports are delivered via encrypted file transfer with a full evidence appendix. PGP encryption is available for clients who require it. Our PGP key is published at siba.digital/contact.",
      },
      {
        q: "What if the findings implicate our council partners?",
        a: "The findings go in the report if they are sourced from public records, regardless of who is implicated. The commissioning organisation decides how to act on the findings, including whether to share them with named parties, raise them through formal governance channels, or seek legal advice. SIBA's role is to document what the public record shows. What happens next is your decision.",
      },
    ],
  },
  {
    category: "After the audit",
    items: [
      {
        q: "What if you find evidence of wrongdoing?",
        a: "SIBA documents what the public record shows. If findings indicate potential misconduct, that is reported clearly in the audit with the supporting evidence chain. The commissioning organisation then decides how to act: internal remediation, regulatory referral, formal complaint, or legal action. SIBA does not make referrals on behalf of clients without instruction, and does not make allegations beyond what the documents support.",
      },
      {
        q: "Can we commission ongoing monitoring after an initial audit?",
        a: "Yes. Tier 3 Ongoing Monitoring provides quarterly reviews of board changes, new director appointments, Companies House filings, procurement changes, and digital footprint shifts. It requires a completed Tier 2 audit as the baseline. From £750 per quarter.",
      },
      {
        q: "What if we disagree with a finding?",
        a: "Every finding in a SIBA report is linked to its source document. If you believe a finding is factually inaccurate, we will review the source and correct the report if an error is identified. If the finding is accurate but you dispute its significance or interpretation, that disagreement is noted in the report alongside the finding. We do not remove accurate, sourced findings on the basis of disagreement alone.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
            FAQ
          </p>
        </Reveal>
        <Reveal>
          <h1 className="text-[32px] sm:text-[36px] text-[#112d6e] mb-6 leading-[1.15]">
            Frequently Asked Questions
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-[17px] text-[#3d3d3d] leading-relaxed max-w-xl mb-20">
            Everything you need to know before engaging SIBA Digital. If your
            question is not answered here, contact us directly.
          </p>
        </Reveal>

        <div className="space-y-16">
          {faqs.map((section) => (
            <Reveal key={section.category}>
              <section>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a0a0a0] mb-8 pb-3 border-b border-[#ddddd5]">
                  {section.category}
                </p>
                <div className="space-y-10">
                  {section.items.map((item) => (
                    <div key={item.q}>
                      <h2 className="text-[15px] font-semibold text-[#1c1c1c] mb-2 leading-snug">
                        {item.q}
                      </h2>
                      <p className="text-[15px] text-[#3d3d3d] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 pt-10 border-t border-[#ddddd5]">
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-6 max-w-lg">
              Question not answered here? Contact us directly. We respond to
              every enquiry within one working day.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] border-b border-[#2c4a52] pb-0.5 hover:text-[#1c1c1c] hover:border-[#1c1c1c] transition-colors"
              >
                Contact us
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
              >
                View services and pricing
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
