import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoaderProvider } from "@/contexts/LoaderContext";
import GlobalLoader from "@/components/GlobalLoader";
import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <LoaderProvider>
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

