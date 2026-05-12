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
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <nav 
        className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg px-8 py-3 flex items-center gap-8"
      >
        <p className="font-bold text-white text-lg">{name}</p>
        <div className="flex gap-1">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div key={item.href} whileTap={{ scale: 0.96 }}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/12 text-white"
                      : "text-white hover:text-gray-300 hover:bg-white/10"
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
