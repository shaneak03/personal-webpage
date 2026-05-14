import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { FluidTransitionProvider, FluidContentWrapper } from "@/components/FluidTransition";
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
          {/* Fixed decorators that must NOT be inside any CSS-filtered wrapper */}
          <CursorGlow />
          <ProgressBar />
          <StarField />

          {/* FluidTransitionProvider owns the morph-goo overlay + navigation context.
              FloatingNav, page content, and BottomBar live inside so they can call
              navigate(), but FluidTransitionProvider's root has no transform/filter
              so position:fixed still works relative to the viewport. */}
          <FluidTransitionProvider>
            <FloatingNav />
            <FluidContentWrapper>
              <Providers>{children}</Providers>
            </FluidContentWrapper>
            <BottomBar />
          </FluidTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
