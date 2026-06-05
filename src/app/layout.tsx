import type { Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatButton from "@/components/ChatButton";
import AuthSessionProvider from "@/components/AuthSessionProvider";
import SiteJsonLd from "@/components/SiteJsonLd";
import { createHomeMetadata } from "@/lib/seo";

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

export const metadata = createHomeMetadata();

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
    <html lang="ar" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Egypt" />
        <meta name="language" content="Arabic, English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
html,body{overflow-x:hidden;max-width:100vw;margin:0}
body{color:#40606d;background:#f5f1ec;font-family:system-ui,-apple-system,sans-serif}
.header{background:rgba(255,255,255,.92);position:sticky;top:0;z-index:50;border-bottom:1px solid rgba(139,115,85,.08)}
.header-container{display:flex;align-items:center;justify-content:space-between;max-width:100%;box-sizing:border-box}
.desktop-nav{display:none!important}
.search-container{display:none}
@media(min-width:768px){.search-container{display:flex}}
@media(min-width:1024px){.desktop-nav{display:flex!important}}
@media(max-width:767px){.search-container{display:none!important}}
.min-h-screen:not(.home-page)>main.hero{display:none}
.about-elegant-card{max-width:100%;box-sizing:border-box;overflow:visible}
.vax-hub-hero,.hcp-vs-hub-hero{background:linear-gradient(135deg,#355a63,#4a7580 42%,#5a9a8a)!important;color:#fff;border-radius:22px;padding:1rem 1.25rem;text-align:center}
.vax-hub-hero-title,.hcp-vs-hub-hero-title{color:#fff;font-weight:800;font-size:clamp(1.35rem,5vw,2rem);margin:0}
.hcp-vs-items-grid{grid-template-columns:1fr!important}
@media(min-width:640px){.hcp-vs-items-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
.nav-link,.mobile-link{color:#40606d;text-decoration:none}
a{color:#0d9488}
`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
      >
        <SiteJsonLd />
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
        
        <AuthSessionProvider>
          {children}
          <ChatButton />
        </AuthSessionProvider>
      </body>
    </html>
  );
}