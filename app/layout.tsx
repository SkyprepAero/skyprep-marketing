import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.skyprepaero.com'),
  title: "SkyPrep Aero Aviation Coaching | Professional Pilot Training - Launching Soon",
  description: "Expert pilot training & DGCA exam prep for aspiring aviators. One-on-one coaching, group cohorts & personalized aviation training. Launching soon!",
  keywords: [
    "aviation training",
    "pilot training", 
    "flight school",
    "DGCA exam preparation",
    "aviation coaching",
    "pilot certification",
    "flight training India",
    "aviation career",
    "commercial pilot training",
    "SkyPrep",
    "SkyPrep Aero",
    "CPL training",
    "ATPL course",
    "aviation academy",
    "pilot school India",
    "FocusONE coaching",
    "group cohort training"
  ],
  authors: [{ name: "SkyPrep Aero Aviation Coaching" }],
  creator: "SkyPrep Aero",
  publisher: "SkyPrep Aero Aviation Coaching",
  applicationName: "SkyPrep Aero",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Education",
  classification: "Aviation Training",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skyprepaero.com",
    siteName: "SkyPrep Aero Aviation  Coaching",
    title: "SkyPrep Aero Aviation  Coaching | Professional Pilot Training",
    description: "Expert pilot training, DGCA exam preparation, and aviation coaching for aspiring pilots. Launching soon!",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SkyPrep Aero Aviation Coaching - Launching Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theSkyPrep",
    creator: "@theSkyPrep",
    title: "SkyPrep Aero Aviation  Coaching",
    description: "Expert pilot training and aviation coaching launching soon!",
    images: ["/og-image.svg"],
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
  alternates: {
    canonical: "https://skyprepaero.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-slate-900" style={{ backgroundColor: '#0f172a' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="format-detection" content="telephone=yes" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Favicons - Multiple formats for best compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
        suppressHydrationWarning
        style={{ backgroundColor: '#0f172a' }}
      >
      {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BNCBFYVNKJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BNCBFYVNKJ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
