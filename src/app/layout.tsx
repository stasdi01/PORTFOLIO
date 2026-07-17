import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@content/site";
import "./globals.css";

// Fraunces (variable) carries the display type; Inter (variable) is the body face.
// Both are self-hosted by next/font with matched fallback metrics → no layout shift.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Set once from the deploy URL; falls back to localhost in development.
// TODO(dimi): set NEXT_PUBLIC_SITE_URL to your production domain in Vercel.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Backend Developer`,
    template: `%s — ${site.name}`,
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
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
