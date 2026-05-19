"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "العقارات", path: "/properties" },
    { name: "الاستثمارات", path: "/investments" },
    { name: "مستشار أسلوب الحياة", path: "/lifestyle" },
    { name: "حجوزاتي", path: "/bookings" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border-color transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent text-black rounded-lg flex items-center justify-center font-bold">
            <Building2 size={24} />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-wider text-white">HABITAT</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold hidden md:block text-foreground hover:text-accent transition-colors">
            تسجيل الدخول
          </button>
          <button className="bg-accent text-black px-6 py-2.5 rounded-md text-sm font-bold hover:bg-accent/90 transition-all shadow-sm">
            أضف عقاراً
          </button>
        </div>
      </div>
    </header>
  );
}
