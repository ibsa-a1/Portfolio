import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ibsa Abera",
    default: "Ibsa Abera | Full Stack Developer",
  },
  description: "Portfolio of Ibsa Abera, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Ibsa Abera | Full Stack Developer",
    description: "Portfolio of Ibsa Abera, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://ibsaabera.tech",
    siteName: "Ibsa Abera Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibsa Abera | Full Stack Developer",
    description: "Portfolio of Ibsa Abera, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibsa Abera",
    jobTitle: "Full Stack Developer",
    url: "https://ibsaabera.tech",
    sameAs: [
      "https://github.com/ibsa-a1",
      "https://www.linkedin.com/in/ibsaabera/"
    ],
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
