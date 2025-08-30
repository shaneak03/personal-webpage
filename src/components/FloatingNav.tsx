"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link } from "@heroui/react";
import { useState } from "react";

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
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function FloatingNav({ items = defaultNavItems, className = "", name = "Shane" }: FloatingNavProps) {
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <Navbar 
        className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg"
        classNames={{
          item: "px-4 py-2",
          brand: "px-4",
          content: "px-6 py-4"
        }}
        height="4rem"
        maxWidth="full"
      >
        <NavbarBrand>
          <p className="font-bold text-white text-xl">{name}</p>
        </NavbarBrand>
        
        <NavbarContent className="flex gap-4" justify="end">
          {items.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 px-6 py-3 rounded-full hover:bg-white/10 text-lg font-medium"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
