import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoaderProvider } from "@/contexts/LoaderContext";
import GlobalLoader from "@/components/GlobalLoader";
import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/seo";
import { AnalyticsTracker } from "./analytics-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const IS_ANALYTICS_ENABLED = Boolean(GA_MEASUREMENT_ID) && process.env.NODE_ENV === "production";

export const metadata: Metadata = generateMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {IS_ANALYTICS_ENABLED ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
        <LoaderProvider>
          {IS_ANALYTICS_ENABLED ? (
            <AnalyticsTracker measurementId={GA_MEASUREMENT_ID as string} />
          ) : null}
          <Navbar />
          <main className="flex-1 pt-16 md:pt-0">
            <div className="container min-h-[60vh]">{children}</div>
          </main>
          <Footer />
          <WhatsAppButton />
          <GlobalLoader />
        </LoaderProvider>
      </body>
    </html>
  );
}

