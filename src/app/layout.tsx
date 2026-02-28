import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "PingPal | AI Automation & Custom Software That Ships Fast",
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
        className={`${roboto.variable} font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white`}
      >
        <NoiseOverlay />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
