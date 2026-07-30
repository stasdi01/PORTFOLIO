import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { site, siteUrl } from "@content/site";
import { Sidebar } from "@/components/site/Sidebar";
import "./globals.css";

// Fraunces (variable) carries the display type; Inter (variable) is the body face;
// JetBrains Mono sets micro-labels and technical links. All self-hosted by
// next/font with matched fallback metrics → no layout shift.
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
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <Sidebar />
        <div className="min-h-dvh pt-16 lg:pl-64 lg:pt-0">{children}</div>
      </body>
    </html>
  );
}
