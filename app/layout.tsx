import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SIBA Digital | Strategic Intelligence & Business Audits",
    template: "%s | SIBA Digital",
  },
  description:
    "Digital governance audits and open-source intelligence for BIDs, councils, and major developments across the UK.",
  metadataBase: new URL("https://www.siba.digital"),
  openGraph: {
    siteName: "SIBA Digital",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/siba-og.png",
        width: 1080,
        height: 1080,
        alt: "SIBA Digital: Strategic Intelligence & Business Audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/siba-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.siba.digital/#organization",
      name: "Strategic Intelligence & Business Audits",
      alternateName: "SIBA Digital",
      url: "https://www.siba.digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.siba.digital/icon.svg",
      },
      email: "damian@siba.digital",
      telephone: "+441704635785",
      areaServed: {
        "@type": "Place",
        name: "United Kingdom",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.siba.digital/#website",
      url: "https://www.siba.digital",
      name: "SIBA Digital",
      description:
        "Digital governance audits and open-source intelligence for BIDs, councils, and major developments.",
      publisher: {
        "@id": "https://www.siba.digital/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="nUQShDgkJVT10fQpmqAvaw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
