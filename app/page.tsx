"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building, TrendingUp, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] flex flex-col justify-center items-center text-center px-6 border-b border-border-color">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#070b15]/85 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 bg-accent/20 border-2 border-accent text-accent rounded-full text-sm font-bold mb-6"
          >
            المنصة الرائدة في ذكاء العقارات والاستثمار
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight text-white"
          >
            اكتشف أصولاً عقارية استثنائية بعوائد مضمونة
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            نحن نربط المستثمرين العصريين بممتلكات عالية القيمة، موفرين أدوات تحليل العائد وإدارة الاستثمارات في منصة واحدة متكاملة.
          </motion.p>

          {/* High Contrast SaaS Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-3 rounded-xl border-2 border-border-color shadow-2xl flex flex-col md:flex-row gap-3 max-w-3xl mx-auto"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/50 rounded-lg text-white border border-border-color">
              <MapPin className="text-accent" size={20} />
              <input 
                type="text" 
                placeholder="الموقع، المدينة، أو الرمز البريدي" 
                className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-gray-400 text-white" 
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/50 rounded-lg text-white border border-border-color">
              <Building className="text-accent" size={20} />
              <select className="w-full bg-transparent outline-none text-sm font-semibold text-white cursor-pointer appearance-none">
                <option value="" className="bg-card">نوع العقار</option>
                <option value="residential" className="bg-card">سكني فاخر</option>
                <option value="commercial" className="bg-card">تجاري</option>
                <option value="investment" className="bg-card">أصول استثمارية</option>
              </select>
            </div>
            <button 
              onClick={() => router.push('/properties')}
              className="bg-accent text-black px-8 py-3 rounded-lg font-extrabold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              بحث <Search size={18} className="stroke-[3]" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border-color">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-border-color">
          {[
            { label: "حجم الأصول المُدارة", value: "$2.4B+" },
            { label: "عائد الاستثمار السنوي (متوسط)", value: "8.5%" },
            { label: "عقارات تم التحقق منها", value: "1,200+" },
            { label: "مستثمر نشط", value: "4,500+" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-accent mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base font-bold text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-white">لماذا يثق بنا المستثمرون؟</h2>
            <p className="text-lg font-semibold text-foreground max-w-xl mx-auto">منصة صممت خصيصاً لتوفير بيانات دقيقة وتجربة سلسة لإدارة الممتلكات.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "بيانات ذكية وعميقة", desc: "نقدم تحليلات عميقة للسوق وتوقعات للنمو مبنية على الذكاء الاصطناعي بدقة متناهية ووفرة في البيانات الاستثمارية الموثقة.", icon: <TrendingUp size={24} /> },
              { title: "عقارات حصرية متميزة", desc: "وصول مباشر وحصري لممتلكات فاخرة وتجارية واعدة قبل طرحها في الأسواق العامة لضمان الفوز بأكبر الفرص المتاحة.", icon: <Building size={24} /> },
              { title: "إتمام صفقات آمن كلياً", desc: "نظام دفع وحجز متكامل يوفر حماية مصرفية رفيعة المستوى لكافة معاملاتك الاستثمارية لضمان سلامة وأمان أموالك.", icon: <ShieldCheck size={24} /> }
            ].map((feature, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border-2 border-border-color shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-6 border border-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-extrabold mb-4 text-white">{feature.title}</h3>
                  <p className="text-base text-foreground font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
