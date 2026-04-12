import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SIBA Digital | BID Governance Audits and OSINT",
    template: "%s | SIBA Digital",
  },
  description:
    "Digital governance audits, OSINT and FOI strategy for Business Improvement Districts, councils and major developments across the UK. We find the vulnerabilities before the public does.",
  metadataBase: new URL("https://www.siba.digital"),
  openGraph: {
    siteName: "SIBA Digital",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/siba-hero.jpg",
        width: 1168,
        height: 784,
        alt: "SIBA Digital: BID Governance Audits and OSINT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/siba-hero.jpg"],
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
      name: "SIBA Digital",
      alternateName: "SIBA Digital",
      url: "https://www.siba.digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.siba.digital/icon.svg",
      },
      image: "https://www.siba.digital/images/siba-hero.jpg",
      email: "damian@siba.digital",
      telephone: "+441704635785",
      areaServed: {
        "@type": "Place",
        name: "United Kingdom",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Churchtown Media Ltd",
        url: "https://www.churchtownmedia.co.uk",
        sameAs:
          "https://find-and-update.company-information.service.gov.uk/company/16960442",
      },
      founder: {
        "@type": "Person",
        name: "Damian Roche",
        url: "https://www.siba.digital/about",
        sameAs: [
          "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
          "https://www.churchtownmedia.co.uk",
        ],
      },
      sameAs: [
        "https://www.churchtownmedia.co.uk",
        "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
      ],
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main className="pt-[60px]">{children}</main>
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
