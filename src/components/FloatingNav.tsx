"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6">
      <nav className="flex items-center gap-1 rounded-full border border-black/[0.07] bg-white/65 px-2 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.07)] backdrop-blur-2xl dark:border-white/[0.13] dark:bg-white/[0.05] dark:shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div key={item.href} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={`flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#e9ecef] text-[#212529] dark:bg-white/[0.14] dark:text-white"
                    : "text-[#6c757d] hover:text-[#212529] dark:text-white/40 dark:hover:text-white/75"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}

        {/* Divider */}
        <div className="mx-1 h-4 w-px bg-[#dee2e6] dark:bg-white/[0.12]" />

        {/* Theme toggle */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#6c757d] transition-all duration-200 hover:bg-[#e9ecef] hover:text-[#212529] dark:text-white/40 dark:hover:bg-white/[0.14] dark:hover:text-white"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.button>
      </nav>
    </div>
  );
}
