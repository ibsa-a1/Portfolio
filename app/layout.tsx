import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  metadataBase: new URL("https://ibsaabera.tech"),
  alternates: { canonical: "/" },
  title: {
    template: "%s | Ibsa Abera",
    default: "Ibsa Abera | Full Stack Developer",
  },
  description: "Portfolio of Ibsa Abera, a full-stack developer building production software with Next.js, TypeScript, Express and PostgreSQL.",
  openGraph: {
    title: "Ibsa Abera | Full Stack Developer",
    description: "Portfolio of Ibsa Abera, a full-stack developer building production software with Next.js, TypeScript, Express and PostgreSQL.",
    url: "https://ibsaabera.tech",
    siteName: "Ibsa Abera Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibsa Abera | Full Stack Developer",
    description: "Portfolio of Ibsa Abera, a full-stack developer building production software with Next.js, TypeScript, Express and PostgreSQL.",
  },
};

// Runs before first paint. Light is the default; only a saved dark choice overrides it.
const themeScript = `(() => {
  try {
    const saved = localStorage.getItem("theme");
    const theme = saved === "dark" ? "dark" : "light";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();`;

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
      "https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
    ],
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
