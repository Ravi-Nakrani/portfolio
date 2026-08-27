import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { personal } from "@/data";

// ── Font ────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ── Metadata ────────────────────────────────────────────────────
// NOTE: Replace with the real deployment URL before going live.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ravinakrani.vercel.app"; // PLACEHOLDER — update before deploy

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} — Full-Stack Software Engineer`,
    template: `%s | ${personal.name}`,
  },
  description:
    "Full-Stack Software Engineer with 4 years of experience building scalable web applications and real-time systems using TypeScript, Node.js, NestJS, React, and Next.js.",
  keywords: [
    "Full-Stack Software Engineer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "WebSockets",
    "Redis",
    "AWS SQS",
  ],
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${personal.name} — Portfolio`,
    title: `${personal.name} — Full-Stack Software Engineer`,
    description:
      "Full-Stack Software Engineer with 4 years of experience building scalable web applications and real-time systems.",
    images: [
      {
        url: "/og-image.png", // PLACEHOLDER — create in Phase 4
        width: 1200,
        height: 630,
        alt: `${personal.name} — Full-Stack Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full-Stack Software Engineer`,
    description:
      "Full-Stack Software Engineer with 4 years of experience building scalable web applications and real-time systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ── JSON-LD structured data ──────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Full-Stack Software Engineer",
  email: personal.email,
  url: SITE_URL,
  sameAs: [personal.social.linkedin, personal.social.github].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

// ── Root Layout ──────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[--font-inter] antialiased">
        {/* Skip navigation — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
