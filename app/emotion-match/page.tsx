"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLifestyle } from "@/components/LifestyleProvider";
import { ArrowLeft } from "lucide-react";

export default function EmotionMatchPage() {
  const router = useRouter();
  const { lifestyle } = useLifestyle();
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 3000); // Mock analysis time
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      {analyzing ? (
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-24 h-24 border-t-2 border-accent rounded-full animate-spin mb-8" />
          <p className="font-heading text-2xl animate-pulse">جاري حساب التوافق...</p>
          <p className="text-sm opacity-50 mt-4 uppercase tracking-widest">تتم الآن المطابقة النفسية</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-3xl w-full border border-foreground/10 p-12 rounded-3xl bg-foreground/[0.02] backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-foreground/10 pb-8">
            <div>
              <p className="text-accent uppercase tracking-widest text-sm mb-2">اكتمل التحليل</p>
              <h1 className="text-4xl md:text-5xl font-heading">لماذا يناسبك هذا المنزل</h1>
            </div>
            <div className="mt-6 md:mt-0 text-left">
              <span className="text-6xl font-light text-accent">98%</span>
              <p className="text-sm opacity-60 uppercase tracking-widest mt-1">نسبة التوافق</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading mb-2">الاستنتاج العاطفي</h3>
              <p className="opacity-80 leading-relaxed">
                أنت تفضل الصمت، الإضاءة الناعمة، والصباحات البطيئة. يتوافق هذا المنزل مع نمط راحتك النفسية، مما يوفر لك ملاذاً يعمل بنشاط على خفض مستويات التوتر لديك.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-xl font-heading mb-2">توافق البيئة</h3>
                <p className="opacity-80">عمارة تؤطر الطبيعة بشكل مثالي، وتلبي حاجتك للاتصال العضوي دون التضحية بالراحة المطلقة.</p>
              </div>
              <div>
                <h3 className="text-xl font-heading mb-2">تناغم المزاج</h3>
                <p className="opacity-80">انتقال الضوء الطبيعي عبر هذه المساحات يحاكي تماماً إيقاع يومك المثالي.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-end">
            <button 
              onClick={() => router.push("/final")}
              className="flex items-center gap-4 group text-accent hover:text-foreground transition-colors duration-500"
            >
              <span className="uppercase tracking-widest text-sm font-semibold">اتخذ القرار</span>
              <motion.div 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500"
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        </motion.div>
      )}
    </main>
  );
}
