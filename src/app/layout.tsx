import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { site, siteUrl } from "@content/site";
import { Sidebar } from "@/components/site/Sidebar";
import "./globals.css";

// The home page uses the system sans (matching the reference). Fraunces
// (variable) still carries the display type and JetBrains Mono the micro-labels
// on the résumé and case-study pages. Both self-hosted by next/font.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · Backend Developer`,
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
      className={`${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <Sidebar />
        <div className="min-h-dvh pt-16 lg:pl-64 lg:pt-0">{children}</div>
      </body>
    </html>
  );
}
