"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin, BedDouble, Scaling, Star } from "lucide-react";

const properties = [
  { id: "1", title: "برج النخبة المالي", location: "المركز المالي، الرياض", price: "4,200,000 ر.س", beds: 3, sqft: "240 م²", rating: "4.9", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", type: "سكني فاخر" },
  { id: "2", title: "فيلا الساحل الأزرق", location: "الواجهة البحرية، جدة", price: "8,500,000 ر.س", beds: 5, sqft: "650 م²", rating: "5.0", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", type: "فيلا استثمارية" },
  { id: "3", title: "مجمع الأعمال الذكي", location: "وادي التقنية، دبي", price: "12,000,000 ر.س", beds: 0, sqft: "1200 م²", rating: "4.8", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5f22eb7?auto=format&fit=crop&q=80&w=800", type: "مساحة تجارية" },
  { id: "4", title: "شقة الجوهر البانورامية", location: "داون تاون، الرياض", price: "2,100,000 ر.س", beds: 2, sqft: "160 م²", rating: "4.7", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800", type: "سكني فاخر" },
];

export default function PropertiesPage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 bg-background min-h-screen text-foreground">
      
      {/* Filters Sidebar - High legibility borders and text */}
      <aside className="w-full md:w-1/4 space-y-8 sticky top-28 h-fit bg-card p-6 rounded-2xl border-2 border-border-color shadow-lg">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-white mb-6">تصفية العقارات</h2>
          <div className="space-y-6">
            
            {/* Price Filter */}
            <div>
              <label className="text-base font-bold text-white mb-3 block">نطاق السعر (ر.س)</label>
              <input type="range" min="1000000" max="20000000" className="w-full accent-accent cursor-pointer h-2 bg-slate-700 rounded-lg" />
              <div className="flex justify-between text-sm font-extrabold text-accent mt-3">
                <span>1 مليون</span>
                <span>20 مليون+</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-base font-bold text-white mb-3 block">الموقع</label>
              <select className="w-full bg-slate-800 border-2 border-border-color rounded-xl px-4 py-3 text-sm font-bold text-white outline-none focus:border-accent cursor-pointer">
                <option className="bg-card text-white">جميع المواقع</option>
                <option className="bg-card text-white">الرياض</option>
                <option className="bg-card text-white">جدة</option>
                <option className="bg-card text-white">دبي</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-base font-bold text-white mb-3 block">نوع العقار</label>
              <div className="space-y-3">
                {["سكني فاخر", "مساحة تجارية", "فيلا استثمارية", "شقة فندقية"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer select-none">
                    <input type="checkbox" className="w-5 h-5 rounded border-2 border-border-color accent-accent cursor-pointer" />
                    <span className="text-sm font-bold text-foreground hover:text-white transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-accent text-black py-3.5 rounded-xl font-extrabold text-sm hover:bg-accent/90 transition-colors shadow-md">
              تطبيق الفلاتر
            </button>
          </div>
        </div>
      </aside>

      {/* Property Grid */}
      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-8 bg-card p-4 rounded-xl border border-border-color">
          <p className="text-white font-extrabold text-lg">عرض {properties.length} من الأصول الاستثمارية</p>
          <select className="bg-transparent text-sm font-extrabold text-accent outline-none cursor-pointer">
            <option className="bg-card">ترتيب حسب: الأحدث</option>
            <option className="bg-card">السعر: من الأعلى للأقل</option>
            <option className="bg-card">السعر: من الأقل للأعلى</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((prop, i) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-2 border-border-color rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:border-accent transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${prop.img})` }}
                />
                <div className="absolute top-4 right-4 bg-accent text-black text-xs font-extrabold px-3 py-1.5 rounded-md shadow-lg border border-black/10">
                  {prop.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-tight">{prop.title}</h3>
                  <div className="flex items-center gap-1 text-base font-extrabold text-accent bg-accent/15 px-2.5 py-1 rounded-md border border-accent/30">
                    <Star size={16} className="fill-accent" /> {prop.rating}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-foreground font-bold flex items-center gap-1.5 mb-6">
                  <MapPin size={16} className="text-accent" /> {prop.location}
                </p>

                <div className="text-3xl font-heading font-black text-accent mb-6">
                  {prop.price}
                </div>

                <div className="flex items-center gap-6 border-t-2 border-border-color pt-5 mt-auto mb-6 text-sm md:text-base font-bold text-foreground">
                  <div className="flex items-center gap-2"><BedDouble size={18} className="text-accent" /> {prop.beds} غرف</div>
                  <div className="flex items-center gap-2"><Scaling size={18} className="text-accent" /> {prop.sqft}</div>
                </div>

                <button 
                  onClick={() => router.push(`/property/${prop.id}`)}
                  className="w-full bg-slate-800 border-2 border-border-color text-white py-3.5 rounded-xl font-extrabold text-sm hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-md"
                >
                  عرض تفاصيل الأصل العقاري
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
