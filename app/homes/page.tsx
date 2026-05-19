"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLifestyle } from "@/components/LifestyleProvider";

const homesData = [
  { id: "1", title: "الملاذ الزجاجي", desc: "صباحات هادئة مع إضاءة ناعمة تتسلل عبر الأشجار القديمة.", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200" },
  { id: "2", title: "أفق السماء", desc: "يتلاشى ضجيج المدينة خلف الجدران الزجاجية بينما تراقب نبض الحياة بالأسفل.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" },
  { id: "3", title: "الجوهر المبسط", desc: "لوحة فارغة من الخرسانة والضوء، تنتظر أفكارك ورؤيتك.", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" },
  { id: "4", title: "المرصد الليلي", desc: "درجات داكنة وظلال محيطية مصممة خصيصاً للتركيز العميق.", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5f22eb7?auto=format&fit=crop&q=80&w=1200" },
];

const lifestyleNames = {
  "fast-city": "حياة المدينة السريعة",
  "silent-nature": "حياة الطبيعة الهادئة",
  "luxury-minimal": "حياة البساطة الفاخرة",
  "night-creative": "حياة الإبداع الليلي",
  "investor": "وضع المستثمر",
  "none": "التردد الخاص بك"
};

export default function HomesPage() {
  const router = useRouter();
  const { lifestyle } = useLifestyle();

  // In a real app, filter homes by lifestyle
  const displayHomes = homesData; 

  return (
    <main className="min-h-screen w-full px-6 py-32 md:px-20 lg:px-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-20"
      >
        <p className="text-accent uppercase tracking-widest text-sm mb-4">منسق خصيصاً لـ {lifestyleNames[lifestyle as keyof typeof lifestyleNames]}</p>
        <h1 className="text-4xl md:text-6xl font-heading">مساحات تتناغم<br/>مع ترددك الخاص.</h1>
      </motion.div>

      <div className="flex flex-col gap-32">
        {displayHomes.map((home, i) => (
          <motion.div
            key={home.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col md:flex-row gap-8 items-center"
            onClick={() => router.push(`/home/${home.id}`)}
          >
            <div className="w-full md:w-2/3 overflow-hidden rounded-2xl">
              <motion.div 
                className="w-full aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `url(${home.img})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 group-hover:text-accent transition-colors duration-500">{home.title}</h2>
              <p className="text-lg opacity-60 leading-relaxed mb-8">{home.desc}</p>
              
              <div className="w-12 h-[1px] bg-foreground/30 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
