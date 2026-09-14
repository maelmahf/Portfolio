import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mohammed Elmahfoudi — Software Engineer", template: "%s — Mohammed Elmahfoudi" },
  description: "Software engineer building reliable full-stack products, backend systems, and infrastructure.",
  keywords: ["Mohammed Elmahfoudi", "Software Engineer", "Full-Stack", "Backend", "DevOps", "Morocco"],
  authors: [{ name: "Mohammed Elmahfoudi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohammed Elmahfoudi — Software Engineer",
    description: "Reliable software systems, from backend infrastructure to polished web products.",
    siteName: "Mohammed Elmahfoudi",
  },
  twitter: { card: "summary_large_image", title: "Mohammed Elmahfoudi — Software Engineer", description: "Full-stack, backend, and infrastructure engineering." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f2f0e9", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
