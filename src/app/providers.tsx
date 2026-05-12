"use client";

import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  // HeroUI v3 no longer requires a provider wrapper for basic functionality
  // Toast functionality is available via hooks without ToastProvider
  return <>{children}</>;
}
