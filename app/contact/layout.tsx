import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SIBA Digital",
  description:
    "Commission a digital governance audit, discuss a partnership or referral, or send a general enquiry to SIBA Digital.",
  alternates: {
    canonical: "https://www.siba.digital/contact",
  },
  openGraph: {
    title: "Contact | SIBA Digital",
    description:
      "Commission an audit, discuss a partnership, or get in touch with SIBA Digital.",
    url: "https://www.siba.digital/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
