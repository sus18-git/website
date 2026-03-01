import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Navbar from "@/components/Navbar";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PingPal AI | AI Automation & Custom Software That Ships Fast",
  description: "AI chatbots, workflow automation, and custom apps—built fast, secure, and cost-efficient by a senior AI + product engineering team.",
};

/* ═══════════════════════════════════════════════════════════════
   Flash Prevention Script
   
   This inline script runs BEFORE React hydration to set the
   correct data-theme attribute on <html>, preventing a flash
   of wrong-theme content (FOWC) on page load.
   ═══════════════════════════════════════════════════════════════ */
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('pingpal-theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white`}
      >
        <ThemeProvider>
          <NoiseOverlay />
          <Navbar />
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
