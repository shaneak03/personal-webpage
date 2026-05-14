import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import StarField from "@/components/StarField";
import FloatingNav from "@/components/FloatingNav";
import BottomBar from "@/components/BottomBar";
import CursorGlow from "@/components/CursorGlow";
import ProgressBar from "@/components/ProgressBar";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shane's Webpage",
  description: "CS student at NUS — Software Engineering & AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content on theme load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                const p = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                if ((t || p) === 'dark') document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {/* StarField, FloatingNav, BottomBar are outside PageTransition so
              position:fixed works correctly (CSS transforms on PageTransition's
              motion.div would otherwise create a new containing block) */}
          <CursorGlow />
          <ProgressBar />
          <StarField />
          <FloatingNav />
          <Providers>{children}</Providers>
          <BottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
