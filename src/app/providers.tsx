"use client";

import { ReactNode } from "react";
import PageTransition from "@/components/PageTransition";

export default function Providers({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
