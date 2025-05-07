import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nejc Bevk - Portfolio",
  description: "Personal portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
