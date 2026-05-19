"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useLifestyle } from "@/components/LifestyleProvider";
import { ArrowLeft } from "lucide-react";

const getImagesForLifestyle = (lifestyle: string) => {
  const images = {
    "fast-city": [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&q=80&w=2000",
    ],
    "silent-nature": [
      "https://images.unsplash.com/photo-1542314831-c6a4d1429d50?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
    ],
    "luxury-minimal": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000",
    ],
    "night-creative": [
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1493225457124-a1a2a5f22eb7?auto=format&fit=crop&q=80&w=2000",
    ],
    "investor": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    ]
  };
  return images[lifestyle as keyof typeof images] || images["luxury-minimal"];
};

const timeline = [
  { time: "الصباح", title: "استيقاظ هادئ", desc: "يتسلل الضوء، متناغماً تماماً مع إيقاعك اليومي." },
  { time: "العمل", title: "تركيز مستمر", desc: "مساحة مصممة بعناية للوضوح والإنتاجية العالية." },
  { time: "المساء", title: "الساعات الذهبية", desc: "الانتقال السلس من صخب الحركة إلى سكون الراحة." },
  { time: "الليل", title: "تجديد عميق", desc: "صمت، عمق، واستعداد واثق للغد." },
];

export default function SimulationPage() {
  const router = useRouter();
  const { lifestyle } = useLifestyle();
  const containerRef = useRef<HTMLDivElement>(null);
  const images = getImagesForLifestyle(lifestyle);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {timeline.map((section, index) => {
        return (
          <Section 
            key={index} 
            index={index} 
            section={section} 
            image={images[index]} 
            progress={scrollYProgress} 
            isLast={index === timeline.length - 1}
            router={router}
          />
        );
      })}
    </div>
  );
}

function Section({ index, section, image, progress, isLast, router }: any) {
  const targetScale = 1 - ((4 - index) * 0.05);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div 
        className="relative w-full h-full origin-top flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="text-accent uppercase tracking-[0.3em] text-sm mb-4"
          >
            {section.time}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading text-white mb-6"
          >
            {section.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-white/80"
          >
            {section.desc}
          </motion.p>

          {isLast && (
            <motion.button
              onClick={() => router.push("/homes")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-16 inline-flex items-center gap-4 text-sm uppercase tracking-widest text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              اكتشف منازلك
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
