"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLifestyle, Lifestyle } from "@/components/LifestyleProvider";
import { ArrowLeft } from "lucide-react";

const lifestyles: { id: Lifestyle; title: string; icon: string; desc: string }[] = [
  { id: "fast-city", title: "حياة المدينة السريعة", icon: "🏙️", desc: "الطاقة، التواصل، وإطلالات بانورامية على ناطحات السحاب." },
  { id: "silent-nature", title: "حياة الطبيعة الهادئة", icon: "🌿", desc: "خامات عضوية، مساحات هادئة، وهواء نقي." },
  { id: "luxury-minimal", title: "حياة البساطة الفاخرة", icon: "💎", desc: "مواد راقية، إضاءة واسعة، وتصميم خالٍ من الفوضى." },
  { id: "night-creative", title: "حياة الإبداع الليلي", icon: "🌙", desc: "ظلال عميقة، إضاءات محيطية، وتركيز مطلق." },
  { id: "investor", title: "وضع المستثمر", icon: "📈", desc: "مواقع حيوية، عوائد عالية، وقيمة معمارية استثنائية." }
];

export default function LifestylePage() {
  const router = useRouter();
  const { setLifestyle } = useLifestyle();

  const handleSelect = (id: Lifestyle) => {
    setLifestyle(id);
    setTimeout(() => {
      router.push("/simulation");
    }, 1000); // 1s delay for theme transition to be felt
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-heading mb-4">ما هو أسلوب الحياة الذي تريد أن تعيشه؟</h1>
        <p className="text-sm md:text-base opacity-60 uppercase tracking-widest">اختر التردد الذي يناسبك</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">
        {lifestyles.map((l, i) => (
          <motion.div
            key={l.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => handleSelect(l.id)}
              whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-right h-72 rounded-2xl border border-white/10 p-6 flex flex-col justify-between group transition-colors duration-500 hover:text-black overflow-hidden relative"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-4xl">{l.icon}</div>
              <div>
                <h3 className="text-xl font-heading mb-2 group-hover:text-black">{l.title}</h3>
                <p className="text-sm opacity-60 group-hover:opacity-80 group-hover:text-black/80 transition-opacity">
                  {l.desc}
                </p>
              </div>

              {/* Reveal icon on hover */}
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-2 group-hover:translate-x-0">
                <ArrowLeft className="w-6 h-6 text-black" />
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
