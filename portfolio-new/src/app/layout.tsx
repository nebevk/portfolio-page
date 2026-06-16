import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap", variable: "--font-quicksand" });

export const metadata: Metadata = {
  title: "Nejc Bevk - Frontend Developer Portfolio",
  description: "Frontend developer with expertise in Angular, TypeScript, and modern web technologies. Creating intuitive user experiences with a focus on responsive design.",
  keywords: ["Frontend Developer", "Angular", "TypeScript", "React", "Vue.js", "Web Development", "Portfolio"],
  authors: [{ name: "Nejc Bevk" }],
  creator: "Nejc Bevk",
  publisher: "Nejc Bevk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nejcbevk.netlify.app'),
  openGraph: {
    title: "Nejc Bevk - Frontend Developer Portfolio",
    description: "Frontend developer with expertise in Angular, TypeScript, and modern web technologies.",
    url: 'https://nejcbevk.netlify.app',
    siteName: "Nejc Bevk Portfolio",
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Nejc Bevk - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nejc Bevk - Frontend Developer Portfolio",
    description: "Frontend developer with expertise in Angular, TypeScript, and modern web technologies.",
    images: ['/me.jpg'],
  },
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
  verification: {
    // Add your verification codes here if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${quicksand.className}`}>
        <div className="fixed inset-0 -z-10">
          <img
            src="/ocean-bg.jpg"
            alt="Dark Ocean Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.5) blur(1px)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <main className="min-h-screen bg-transparent">{children}</main>
        <Footer />
        <BackToTop />
        {/* 100% privacy-first analytics */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
