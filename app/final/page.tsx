"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLifestyle } from "@/components/LifestyleProvider";

export default function FinalPage() {
  const router = useRouter();
  const { setLifestyle } = useLifestyle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRestart = () => {
    setLifestyle("none");
    router.push("/intro");
  };

  if (!mounted) return null;

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black text-white px-6 overflow-hidden">
      <div className="max-w-3xl flex flex-col items-center text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-heading font-light tracking-wide leading-relaxed"
        >
          هذا ليس مجرد منزل.
          <br />
          <span className="text-accent mt-4 block">هذه هي حياتك القادمة.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 2 }}
          className="mt-24 flex gap-8"
        >
          <button
            className="uppercase tracking-widest text-sm text-white/50 hover:text-white transition-colors duration-500"
            onClick={handleRestart}
          >
            إعادة البدء
          </button>
          <button
            className="uppercase tracking-widest text-sm text-accent border border-accent/20 px-8 py-3 rounded-full hover:bg-accent hover:text-black transition-all duration-500"
          >
            استمرار
          </button>
        </motion.div>
      </div>

      {/* Ambient Ending Glow Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_60%)]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-black/80 pointer-events-none z-0" />
    </main>
  );
}
