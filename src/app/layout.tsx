import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, siteUrl } from "@content/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

// Geist carries the whole site; Geist Mono is kept for code and data in the
// case study. Both self-hosted by next/font.
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.positioning,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {/* Fixed star layer, behind every page. */}
        <div className="site-stars" aria-hidden="true" />

        <div className="bg-hero-pattern min-h-screen text-foreground">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
