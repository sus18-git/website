import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PingPal AI | AI Automation & Custom Software That Ships Fast",
  description: "AI chatbots, workflow automation, and custom apps—built fast, secure, and cost-efficient by a senior AI + product engineering team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white`}
      >
        <NoiseOverlay />
        <Navbar />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
