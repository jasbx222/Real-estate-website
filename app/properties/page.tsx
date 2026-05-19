"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin, BedDouble, Scaling, Star, SlidersHorizontal, X } from "lucide-react";

const properties = [
  { id: "1", title: "برج النخبة المالي", location: "المركز المالي، الرياض", price: "4,200,000 ر.س", beds: 3, sqft: "240 م²", rating: "4.9", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", type: "سكني فاخر" },
  { id: "2", title: "فيلا الساحل الأزرق", location: "الواجهة البحرية، جدة", price: "8,500,000 ر.س", beds: 5, sqft: "650 م²", rating: "5.0", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", type: "فيلا استثمارية" },
  { id: "3", title: "مجمع الأعمال الذكي", location: "وادي التقنية، دبي", price: "12,000,000 ر.س", beds: 0, sqft: "1200 م²", rating: "4.8", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5f22eb7?auto=format&fit=crop&q=80&w=800", type: "مساحة تجارية" },
  { id: "4", title: "شقة الجوهر البانورامية", location: "داون تاون، الرياض", price: "2,100,000 ر.س", beds: 2, sqft: "160 م²", rating: "4.7", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800", type: "سكني فاخر" },
];

export default function PropertiesPage() {
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Filters Shared Content
  const FiltersContent = () => (
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
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 bg-background min-h-screen text-foreground">
      
      {/* Header and Sorting Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-card p-4 md:p-6 rounded-2xl border border-border-color shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-black text-white">الأصول الاستثمارية المتاحة</h1>
          <p className="text-foreground/70 text-sm mt-1">اكتشف خيارات عقارية حصرية وذكية تتلاءم مع أهدافك</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Mobile Filter Toggle Button */}
          <button 
            onClick={() => setIsFiltersOpen(true)}
            className="lg:hidden flex-1 md:flex-initial flex items-center justify-center gap-2 bg-accent/10 text-accent border border-accent/20 px-5 py-3 rounded-xl font-bold text-sm hover:bg-accent/20 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={16} />
            <span>تصفية</span>
          </button>
          
          <select className="flex-1 md:flex-initial bg-slate-800 border-2 border-border-color rounded-xl px-4 py-3 text-sm font-extrabold text-white outline-none cursor-pointer">
            <option className="bg-card">ترتيب حسب: الأحدث</option>
            <option className="bg-card">السعر: من الأعلى للأقل</option>
            <option className="bg-card">السعر: من الأقل للأعلى</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 space-y-8 sticky top-28 h-fit bg-card p-6 rounded-2xl border-2 border-border-color shadow-lg">
          <div>
            <h2 className="text-2xl font-heading font-extrabold text-white mb-6">تصفية العقارات</h2>
            <FiltersContent />
            <button className="w-full bg-accent text-black py-3.5 rounded-xl font-extrabold text-sm hover:bg-accent/90 transition-colors shadow-md mt-6 cursor-pointer">
              تطبيق الفلاتر
            </button>
          </div>
        </aside>

        {/* Property Grid Content */}
        <main className="w-full lg:w-3/4">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-white font-extrabold text-base md:text-lg">عرض {properties.length} من الأصول الاستثمارية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white leading-tight">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-sm md:text-base font-extrabold text-accent bg-accent/15 px-2.5 py-1 rounded-md border border-accent/30 shrink-0">
                      <Star size={14} className="fill-accent" /> {prop.rating}
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-foreground font-bold flex items-center gap-1.5 mb-6">
                    <MapPin size={14} className="text-accent" /> {prop.location}
                  </p>

                  <div className="text-2xl md:text-3xl font-heading font-black text-accent mb-6">
                    {prop.price}
                  </div>

                  <div className="flex items-center gap-6 border-t-2 border-border-color pt-5 mt-auto mb-6 text-xs md:text-sm font-bold text-foreground">
                    <div className="flex items-center gap-2"><BedDouble size={16} className="text-accent" /> {prop.beds} غرف</div>
                    <div className="flex items-center gap-2"><Scaling size={16} className="text-accent" /> {prop.sqft}</div>
                  </div>

                  <button 
                    onClick={() => router.push(`/property/${prop.id}`)}
                    className="w-full bg-slate-800 border-2 border-border-color text-white py-3.5 rounded-xl font-extrabold text-sm hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-md cursor-pointer"
                  >
                    عرض تفاصيل الأصل العقاري
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile/Tablet Filters Drawer */}
      <AnimatePresence>
        {isFiltersOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFiltersOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Slide-up Bottom Sheet Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-card rounded-t-3xl border-t-2 border-border-color p-6 z-50 lg:hidden flex flex-col shadow-2xl animate-in"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-6 border-b border-border-color pb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={20} className="text-accent" />
                  <h2 className="text-xl font-heading font-extrabold text-white">تصفية العقارات</h2>
                </div>
                <button 
                  onClick={() => setIsFiltersOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full text-foreground hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Filters Content */}
              <div className="flex-1 overflow-y-auto pr-1">
                <FiltersContent />
              </div>

              {/* Drawer Footer Buttons */}
              <div className="flex gap-4 border-t border-border-color pt-4 mt-6">
                <button 
                  onClick={() => setIsFiltersOpen(false)}
                  className="flex-1 bg-accent text-black py-4 rounded-xl font-extrabold text-sm hover:bg-accent/90 transition-all shadow-md cursor-pointer"
                >
                  تطبيق الفلاتر
                </button>
                <button 
                  onClick={() => setIsFiltersOpen(false)}
                  className="flex-1 bg-slate-800 border-2 border-border-color text-white py-4 rounded-xl font-extrabold text-sm hover:bg-white/5 transition-all cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
