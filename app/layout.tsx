import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SIBA Digital | Southport Independent Business Alliance",
    template: "%s | SIBA Digital",
  },
  description:
    "Digital infrastructure for PR8 and PR9 independent businesses. Free SEO audits, levy analysis, and automated promotion. No mandatory levy.",
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
        alt: "SIBA: Southport Independent Business Alliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SouthportIBA",
    creator: "@SouthportIBA",
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
      name: "Southport Independent Business Alliance",
      alternateName: "SIBA",
      url: "https://www.siba.digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.siba.digital/icon.svg",
      },
      email: "office@siba.digital",
      telephone: "+441704635785",
      areaServed: {
        "@type": "Place",
        name: "Southport, Merseyside, England",
      },
      sameAs: [
        "https://x.com/SouthportIBA",
        "https://www.facebook.com/SouthportIBA/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.siba.digital/#website",
      url: "https://www.siba.digital",
      name: "SIBA Digital",
      description:
        "Digital infrastructure for PR8 and PR9 independent businesses in Southport.",
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
      </body>
    </html>
  );
}
