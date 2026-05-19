"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-accent text-black rounded-lg flex items-center justify-center font-bold">
            <Building2 size={24} />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-wider text-white">HABITAT</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-colors relative py-2 ${
                pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-4">
            <button className="text-sm font-semibold text-foreground hover:text-accent transition-colors cursor-pointer">
              تسجيل الدخول
            </button>
            <button className="bg-accent text-black px-6 py-2.5 rounded-md text-sm font-bold hover:bg-accent/90 transition-all shadow-sm cursor-pointer">
              أضف عقاراً
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden z-50 p-2 text-foreground hover:text-accent transition-colors focus:outline-none cursor-pointer"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-20 bg-background/98 border-b border-border-color shadow-2xl z-40 xl:hidden overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                        pathname === link.path
                          ? "bg-accent/10 text-accent"
                          : "text-foreground hover:bg-white/5 hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="h-px bg-border-color my-2" />

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold py-3 px-4 rounded-lg text-foreground hover:bg-white/5 hover:text-accent transition-colors text-right cursor-pointer"
                  >
                    تسجيل الدخول
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-accent text-black w-full py-3.5 rounded-lg text-base font-bold hover:bg-accent/90 transition-all shadow-md text-center cursor-pointer"
                  >
                    أضف عقاراً
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
