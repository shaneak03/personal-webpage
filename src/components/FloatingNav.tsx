"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items?: NavItem[];
  className?: string;
  name?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function FloatingNav({ items = defaultNavItems, className = "", name = "Shane" }: FloatingNavProps) {
  const pathname = usePathname();

  return (
    <div className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.25rem)] max-w-4xl -translate-x-1/2 sm:top-6 ${className}`}>
      <nav
        className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-6 sm:py-3"
      >
        <div className="flex items-center justify-center sm:justify-start">
          <p className="text-base font-bold text-white sm:text-lg">{name}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-1">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div key={item.href} whileTap={{ scale: 0.96 }}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:text-base ${
                    isActive
                      ? "bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
