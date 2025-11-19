import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import ChatButton from "@/components/ChatButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vaccine Talk - Egyptian Edition | Professional Health Education",
  description: "Your trusted source for accurate, accessible vaccine information in Egypt. Empowering families and healthcare professionals with reliable health education.",
  keywords: [
    "vaccines", "Egypt", "health education", "medical information", "immunization", 
    "public health", "family health", "healthcare professionals", "HCP",
    "تطعيمات", "مصر", "صحة", "تعليم صحي", "معلومات طبية", "تطعيم", "صحة عامة"
  ],
  authors: [{ name: "Vaccine Talk Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Vaccine Talk - Egyptian Edition",
    description: "Professional health education platform for vaccine information in Egypt",
    type: "website",
    locale: "en_US",
    siteName: "Vaccine Talk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine Talk - Egyptian Edition",
    description: "Professional health education platform for vaccine information in Egypt",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
      >
        {children}
        <ChatButton />
      </body>
    </html>
  );
}