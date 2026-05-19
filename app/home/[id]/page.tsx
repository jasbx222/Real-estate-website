"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { Moon, Sun, ArrowLeft } from "lucide-react";

export default function HomeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isNight, setIsNight] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mock data
  const home = {
    title: "الملاذ الزجاجي",
    heroDay: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2000",
    heroNight: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
    overview: "انتقال سلس بين الداخل والخارج اللامتناهي.",
    feel: "كأنك تستيقظ داخل فيلم بطيء الحركة.",
    spaces: [
      { name: "المعيشة", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" },
      { name: "الراحة", img: "https://images.unsplash.com/photo-1542314831-c6a4d1429d50?auto=format&fit=crop&q=80&w=1200" }
    ]
  };

  useEffect(() => {
    // Add smooth scroll effect specifically for this page if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-background transition-colors duration-1000">
      
      {/* Light Toggle */}
      <button 
        onClick={() => setIsNight(!isNight)}
        className="fixed top-8 left-8 z-50 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-md hover:bg-foreground hover:text-background transition-all duration-500"
      >
        {isNight ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden sticky top-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-[2s] ease-in-out"
          style={{ 
            backgroundImage: `url(${isNight ? home.heroNight : home.heroDay})`,
            scale: heroScale,
            opacity: heroOpacity
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-5xl md:text-7xl font-heading mb-6"
          >
            {home.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-lg md:text-2xl font-light max-w-2xl"
          >
            {home.overview}
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-background w-full">
        
        {/* Feel */}
        <section className="py-40 px-6 md:px-20 max-w-5xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl leading-relaxed font-heading"
          >
            "{home.feel}"
          </motion.p>
        </section>

        {/* Spaces Gallery */}
        <section className="py-20 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.spaces.map((space, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="group overflow-hidden rounded-2xl relative"
              >
                <div className="aspect-[4/5] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" style={{ backgroundImage: `url(${space.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-heading">{space.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA to Emotion Match & Booking */}
        <section className="h-[50vh] flex flex-col md:flex-row gap-12 items-center justify-center text-center px-6">
          <motion.button
            onClick={() => router.push("/emotion-match")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center gap-6"
          >
            <span className="text-xl md:text-3xl font-heading group-hover:text-accent transition-colors duration-500">
              هل هذه هي حياتك القادمة؟
            </span>
            <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <ArrowLeft />
            </div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block w-[1px] h-32 bg-foreground/10"
          />

          <motion.button
            onClick={() => router.push(`/book/${params.id}`)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center gap-6"
          >
            <span className="text-xl md:text-3xl font-heading group-hover:text-accent transition-colors duration-500">
              احجز هذا العقار الآن
            </span>
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500 text-accent">
              <ArrowLeft />
            </div>
          </motion.button>
        </section>
      </div>
    </div>
  );
}
