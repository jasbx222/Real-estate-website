"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function IntroPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black text-white px-6">
      <div className="max-w-3xl flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-light tracking-wide leading-relaxed"
        >
          قبل أن نعرض لك المنازل...
          <br />
          <span className="opacity-60">نحتاج أن نفهم كيف تريد أن تعيش.</span>
        </motion.p>

        <motion.button
          onClick={() => router.push("/lifestyle")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="mt-16 group flex items-center gap-4 text-sm uppercase tracking-widest text-accent hover:text-white transition-colors duration-500"
        >
          ابدأ الرحلة
          <motion.span
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.span>
        </motion.button>
      </div>

      {/* Ambient Breathing Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[-1] opacity-20 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
    </main>
  );
}
