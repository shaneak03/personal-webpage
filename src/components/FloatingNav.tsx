"use client";

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
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <nav 
        className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg px-8 py-3 flex items-center gap-8"
      >
        <p className="font-bold text-white text-lg">{name}</p>
        <div className="flex gap-1">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/10 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
