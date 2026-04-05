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
    "Digital infrastructure for PR8 and PR9 independent businesses. SEO audits, levy analysis, and automated promotion. No mandatory levy.",
  metadataBase: new URL("https://siba.digital"),
  openGraph: {
    siteName: "SIBA Digital",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
