import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Vaccine Talk - التطعيمات في مصر | دليل شامل للتطعيمات في مصر",
    template: "%s | Vaccine Talk - التطعيمات في مصر"
  },
  description: "دليل شامل ومفصل عن التطعيمات في مصر - تطعيمات الأطفال والكبار. معلومات موثقة عن جدول التطعيمات، أنواع اللقاحات المتوفرة في مصر، وأسئلة شائعة عن التطعيمات. مصدر موثوق للمعلومات الصحية في مصر. Comprehensive guide to vaccines in Egypt - children and adult vaccinations, immunization schedules, and vaccine information.",
  keywords: [
    // English keywords
    "vaccines Egypt", "vaccination Egypt", "Egypt vaccines", "immunization Egypt",
    "children vaccines Egypt", "adult vaccines Egypt", "vaccine schedule Egypt",
    "Egyptian vaccines", "vaccine information Egypt", "health Egypt", "public health Egypt",
    "vaccine guide Egypt", "vaccine FAQ Egypt", "vaccine safety Egypt", "vaccine side effects",
    "MMR vaccine Egypt", "hepatitis vaccine Egypt", "influenza vaccine Egypt", "BCG vaccine Egypt",
    "polio vaccine Egypt", "DPT vaccine Egypt", "vaccine recommendations Egypt",
    // Arabic keywords - primary focus
    "التطعيمات في مصر", "تطعيم", "تطعيمات الاطفال", "تطعيمات الأطفال في مصر",
    "جدول التطعيمات في مصر", "لقاحات مصر", "التطعيم في مصر", "تطعيمات الكبار",
    "معلومات التطعيمات", "أسئلة عن التطعيمات", "تطعيمات حديثي الولادة",
    "لقاح الحصبة", "لقاح شلل الأطفال", "لقاح التهاب الكبد", "لقاح الدرن",
    "تطعيمات إجبارية", "تطعيمات اختيارية", "صحة الأطفال", "صحة الأسرة",
    "معلومات طبية مصر", "تعليم صحي مصر", "صحة عامة مصر", "وقاية من الأمراض",
    "لقاح MMR", "لقاح DPT", "لقاح BCG", "لقاح الإنفلونزا", "لقاح RSV",
    "تطعيمات آمنة", "آثار جانبية التطعيمات", "متى تطعيم الطفل",
    "تطعيم الحوامل", "تطعيمات السفر", "لقاحات مصرية", "وزارة الصحة المصرية"
  ],
  authors: [{ name: "Vaccine Talk Team" }],
  creator: "Vaccine Talk",
  publisher: "Vaccine Talk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://vaccinetalk.com",
    languages: {
      'ar': 'https://vaccinetalk.com',
      'en': 'https://vaccinetalk.com',
    },
  },
  openGraph: {
    title: "Vaccine Talk - التطعيمات في مصر | دليل شامل للتطعيمات",
    description: "دليل شامل ومفصل عن التطعيمات في مصر - تطعيمات الأطفال والكبار. معلومات موثقة عن جدول التطعيمات وأنواع اللقاحات المتوفرة في مصر. Comprehensive guide to vaccines in Egypt.",
    url: "https://vaccinetalk.com",
    siteName: "Vaccine Talk - Egyptian Edition",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Vaccine Talk - التطعيمات في مصر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine Talk - التطعيمات في مصر | دليل شامل للتطعيمات",
    description: "دليل شامل ومفصل عن التطعيمات في مصر - تطعيمات الأطفال والكبار. Comprehensive guide to vaccines in Egypt.",
    images: ["/logo.svg"],
    creator: "@VaccineTalk",
  },
  category: "Health & Medical",
  classification: "Health Education",
  other: {
    "geo.region": "EG",
    "geo.placename": "Egypt",
    "geo.position": "30.0444;31.2357",
    "ICBM": "30.0444, 31.2357",
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
        <link rel="canonical" href="https://vaccinetalk.com" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Egypt" />
        <meta name="language" content="Arabic, English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HGKML0Q41Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGKML0Q41Y');
          `}
        </Script>
        
        {children}
        <ChatButton />
      </body>
    </html>
  );
}