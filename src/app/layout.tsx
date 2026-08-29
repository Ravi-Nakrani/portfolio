import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { personal } from "@/data";
import { SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} — Full-Stack Software Engineer`,
    template: `%s | ${personal.name}`,
  },
  description: `${personal.name} is a Full-Stack Software Engineer based in ${personal.location} with ${personal.yearsOfExperience}+ years of experience building scalable web applications and real-time distributed systems using TypeScript, Node.js, NestJS, React, and Next.js.`,
  applicationName: `${personal.name} — Portfolio`,
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  publisher: personal.name,
  keywords: [
    "Ravi Nakrani",
    "Full-Stack Software Engineer",
    "Software Engineer Surat",
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "Socket.io",
    "AWS SQS",
    "WebSockets",
    "Scalable Web Applications",
    "Real-Time Systems",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Ravi",
    lastName: "Nakrani",
    username: "ravinakrani",
    gender: "male",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${personal.name} — Portfolio`,
    title: `${personal.name} — Full-Stack Software Engineer`,
    description: `${personal.name} is a Full-Stack Software Engineer based in ${personal.location} with ${personal.yearsOfExperience}+ years of experience building scalable web applications and real-time distributed systems.`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personal.name} — Full-Stack Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full-Stack Software Engineer`,
    description: `${personal.name} is a Full-Stack Software Engineer based in ${personal.location} with ${personal.yearsOfExperience}+ years of experience building scalable web applications and real-time distributed systems.`,
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

// ── JSON-LD structured data graph ────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: personal.name,
      givenName: "Ravi",
      familyName: "Nakrani",
      jobTitle: "Full-Stack Software Engineer",
      description: personal.summary,
      url: SITE_URL,
      image: `${SITE_URL}/my_photo.png`,
      email: `mailto:${personal.email}`,
      telephone: personal.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      sameAs: [personal.social.linkedin, personal.social.github].filter(
        Boolean
      ),
      worksFor: {
        "@type": "Organization",
        name: "Tagline Infotech",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Maharaja Krishnakumarsinhji Bhavnagar University",
        },
        {
          "@type": "EducationalOrganization",
          name: "Jawahar Navodaya Vidyalaya",
        },
      ],
      knowsAbout: [
        "TypeScript",
        "JavaScript",
        "Node.js",
        "NestJS",
        "Express.js",
        "React",
        "Next.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Socket.io",
        "WebSockets",
        "AWS SQS",
        "REST APIs",
        "Distributed Systems",
        "Scalable Web Applications",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${personal.name} — Full-Stack Software Engineer`,
      description: `Personal portfolio and engineering showcase of ${personal.name}, Full-Stack Software Engineer based in ${personal.location}.`,
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${personal.name} — Full-Stack Software Engineer Portfolio`,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
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
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light");}else{document.documentElement.classList.remove("light");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[--font-inter] antialiased min-h-screen flex flex-col justify-between relative bg-bg text-text">
        {/* Ambient lighting & subtle depth layer */}
        <BackgroundOrbs />

        {/* Skip navigation — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main
          id="main-content"
          tabIndex={-1}
          className="outline-none relative z-10 flex-1"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
