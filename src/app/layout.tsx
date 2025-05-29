import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nejc Bevk - Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  manifest: "/manifest.json",
  themeColor: "#007AFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nejc Bevk - Portfolio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// ... existing code ...
