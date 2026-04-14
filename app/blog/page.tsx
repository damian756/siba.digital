import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog: Structural Analysis of BID Governance",
  description:
    "Original structural analysis of Business Improvement Districts, public money governance, and accountability failures. No named individuals. No allegations. Just the mechanisms that produce predictable outcomes.",
  alternates: {
    canonical: "https://www.siba.digital/blog",
  },
  openGraph: {
    title: "Blog: Structural Analysis of BID Governance",
    description:
      "Original structural analysis of BID governance, public money accountability, and the mechanisms that produce predictable outcomes.",
    url: "https://www.siba.digital/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "the-silence-is-the-story",
    title: "The Silence Is the Story: Why Small Businesses Won't Criticise Their BID",
    summary:
      "In BID towns across the UK, small business owners self-censor. Not because anyone has threatened them. Because the structure makes silence the only rational choice. The fear extends beyond the levy area. The silence is the evidence.",
    date: "April 2026",
    tag: "Structural Analysis",
  },
  {
    slug: "why-bid-ballots-favour-incumbents",
    title: "Why BID Ballots Consistently Favour Incumbents",
    summary:
      "The ballot model is designed by the proposer, administered by the proposer, and the threshold for success is set by the proposer. The mechanism produces incumbent-friendly results not because of fraud but because of structure.",
    date: "April 2026",
    tag: "Structural Analysis",
  },
  {
    slug: "council-officer-dual-role-problem",
    title: "The Council Officer Dual-Role Problem",
    summary:
      "Across the BID model nationally, the council appoints a representative who simultaneously administers the ballot, manages levy collection, and sits in the governance structure they are supposed to oversee. This is how the framework was designed.",
    date: "April 2026",
    tag: "Structural Analysis",
  },
  {
    slug: "how-procurement-opacity-compounds",
    title: "How Procurement Opacity Compounds in Publicly-Funded Governance",
    summary:
      "When an organisation is funded by compulsory levy and managed by a board drawn from levy payers, procurement decisions flow towards relationships that already exist. No individual decision is necessarily corrupt. The compounding effect is structural.",
    date: "April 2026",
    tag: "Structural Analysis",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
            Blog
          </p>
          <h1 className="mb-4">Structural Analysis</h1>
          <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl mb-14">
            Original analysis of the mechanisms that produce predictable
            governance outcomes. No named individuals. No allegations. Each
            piece asks a single structural question and answers it with
            evidence from public legislation, published guidance, and
            observable patterns.
          </p>
        </Reveal>

        {/* Featured: Cronyism by Design */}
        <Reveal>
          <section className="mb-14 pb-14 border-b border-[#ddddd5]">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Featured
            </p>
            <h2 className="text-[#112d6e] mb-3">
              How BIDs Breed Cronyism by Design
            </h2>
            <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl mb-2">
              Most critics of Business Improvement Districts focus on bad
              actors. This is the wrong analysis. The BID model creates the
              conditions for cronyism structurally, regardless of intent. The
              founding analysis that started the conversation.
            </p>
            <p className="text-xs text-[#a0a0a0] mb-5">April 2026</p>
            <Link
              href="/blog/bid-cronyism-by-design"
              className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
            >
              Read the full analysis
              <ArrowRight size={13} />
            </Link>
          </section>
        </Reveal>

        {/* Post list */}
        <div className="space-y-12">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <article className="group">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] border border-[#ddddd5] px-2 py-0.5">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#a0a0a0]">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[#1c1c1c] mb-2 group-hover:text-[#112d6e] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl mb-4">
                  {post.summary}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                >
                  Read
                  <ArrowRight size={13} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
