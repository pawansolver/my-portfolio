import type { Metadata, Viewport } from "next";
import "./globals.css";

// Industry Standard: Analytics & Speed monitoring
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import AnimatedCursor from "@/components/layout/AnimatedCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nighwan.tech'), // Global URL base
  title: {
    default: "Nighwan Technology | Global AI & Fintech Ecosystem",
    template: "%s | Nighwan Technology",
  },
  description: "Accelerating digital transformation through AI, Cloud Core, and Zero-Trust Security.",
  // Professional Verification (Industry Standard)
  verification: {
    google: "google-site-verification-id", // Future use
  },
  openGraph: {
    type: "website",
    siteName: "Nighwan Technology",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Professional JSON-LD (Schema.org) Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nighwan Technology",
    "url": "https://nighwan.tech",
    "logo": "https://nighwan.tech/logo.png",
    "sameAs": [
      "https://linkedin.com/company/nighwantech",
      "https://twitter.com/nighwantech"
    ],
    "description": "Enterprise-grade AI and Cloud solutions."
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Injecting Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="antialiased flex flex-col min-h-screen"
      >
        <AnimatedCursor />
        <Navbar />

        <main className="flex-grow relative z-10 w-full">
          {children}
        </main>

        <Footer />
        
        {/* Industry standard monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}