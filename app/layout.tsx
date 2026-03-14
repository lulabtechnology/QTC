import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Quality Techno Services | Soluciones Industriales Críticas",
  description:
    "Ingeniería aplicada, representación estratégica y soporte especializado para industrias donde la continuidad operativa no es opcional.",
  openGraph: {
    title: "Quality Techno Services | Soluciones Industriales Críticas",
    description:
      "Respaldo técnico industrial para bombeo, protección de activos y soporte especializado.",
    url: siteConfig.url,
    siteName: "Quality Techno Services",
    locale: "es_PA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Techno Services | Soluciones Industriales Críticas",
    description:
      "Ingeniería aplicada, representación estratégica y soporte especializado para industrias críticas."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quality Techno Services",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsapp,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.whatsapp,
        areaServed: ["PA", "US", "VE", "LATAM", "Caribbean"],
        availableLanguage: ["Spanish", "English"]
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
