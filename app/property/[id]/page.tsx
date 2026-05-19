"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin, BedDouble, Scaling, Star, TrendingUp, CheckCircle2 } from "lucide-react";

export default function PropertyDetailsPage() {
  const router = useRouter();

  const prop = {
    id: "1", title: "برج النخبة المالي", location: "المركز المالي، الرياض", price: "4,200,000 ر.س", 
    beds: 3, baths: 4, sqft: "240 م²", rating: "4.9", yield: "7.2%", growth: "+12.5%",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-background min-h-screen text-foreground">
      
      {/* Header & Breadcrumbs */}
      <div className="mb-8 bg-card p-6 rounded-2xl border-2 border-border-color">
        <div className="text-sm md:text-base font-extrabold text-accent mb-3 flex items-center gap-2">
          <span>العقارات</span> &gt; <span>الرياض</span> &gt; <span className="text-white">{prop.title}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-3">{prop.title}</h1>
            <p className="text-base md:text-lg font-bold text-foreground flex items-center gap-1.5"><MapPin size={18} className="text-accent" /> {prop.location}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl md:text-4xl font-heading font-black text-accent">{prop.price}</p>
            <p className="text-base md:text-lg text-emerald-400 font-extrabold mt-1">عائد متوقع: {prop.yield}</p>
          </div>
        </div>
      </div>

      {/* Hero Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[400px] md:h-[500px]">
        <div className="md:col-span-3 rounded-2xl overflow-hidden bg-foreground/5 border border-border-color">
          <img src={prop.images[0]} alt="Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden bg-foreground/5 border border-border-color">
            <img src={prop.images[1]} alt="Side 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-foreground/5 relative border border-border-color">
            <img src={prop.images[2]} alt="Side 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/75 transition-colors">
              <span className="text-white font-extrabold text-lg">+12 صور حية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-2/3 space-y-12">
          
          {/* High legibility tabs */}
          <div className="flex gap-8 border-b-2 border-border-color">
            {["نظرة عامة", "الميزات", "التحليل الاستثماري", "الموقع"].map((tab, i) => (
              <button key={tab} className={`pb-4 text-base font-extrabold transition-colors ${i === 0 ? "border-b-4 border-accent text-accent" : "text-white hover:text-accent"}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Overview */}
          <section className="bg-card p-8 rounded-2xl border-2 border-border-color">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-6">نظرة عامة</h2>
            <div className="flex flex-wrap gap-8 py-6 border-y-2 border-border-color mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/20">
                  <BedDouble className="text-accent" size={24} />
                </div>
                <div><p className="text-xs text-foreground font-bold">غرف النوم</p><p className="font-extrabold text-lg text-white">{prop.beds}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/20">
                  <Scaling className="text-accent" size={24} />
                </div>
                <div><p className="text-xs text-foreground font-bold">المساحة</p><p className="font-extrabold text-lg text-white">{prop.sqft}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/20">
                  <Star className="text-accent" size={24} />
                </div>
                <div><p className="text-xs text-foreground font-bold">التقييم</p><p className="font-extrabold text-lg text-white">{prop.rating}</p></div>
              </div>
            </div>
            <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
              يمثل {prop.title} تحفة معمارية في قلب {prop.location}، مصمم خصيصاً لتلبية احتياجات النخبة من المستثمرين والمشترين الجادين. يجمع بين التصميم العصري والتشطيبات الفاخرة لتوفير بيئة عمل ومعيشة استثنائية. العائد الاستثماري المدروس يجعله أحد أهم الأصول المتاحة في المنطقة لضمان نمو رأس مالك بشكل ثابت وامن.
            </p>
          </section>

          {/* Features */}
          <section className="bg-card p-8 rounded-2xl border-2 border-border-color">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-6">الميزات الرئيسية للأصل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["نظام أمني وحراسة 24/7", "نوافذ بانورامية عازلة للصوت بالكامل", "مواقف سيارات تحت الأرض مجهزة شواحن كهربائية", "تكييف مركزي ذكي موفر للطاقة", "نادي صحي وصالة ألعاب مجهزة ومسبح أولمبي", "شهادة LEED الذهبية للبناء المستدام"].map(f => (
                <div key={f} className="flex items-center gap-3 text-white font-extrabold text-base">
                  <CheckCircle2 size={22} className="text-accent flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </section>

          {/* Investment Snippet */}
          <section className="bg-card border-2 border-border-color rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-accent" size={28} />
              <h2 className="text-2xl font-heading font-extrabold text-white">التحليل والمؤشرات الاستثمارية</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-xl border border-border-color text-center">
                <p className="text-sm md:text-base text-foreground font-extrabold mb-2">العائد الإيجاري السنوي المتوقع</p>
                <p className="text-3xl font-heading font-black text-accent">{prop.yield}</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border-color text-center">
                <p className="text-sm md:text-base text-foreground font-extrabold mb-2">النمو الرأسمالي المتوقع (5 سنوات)</p>
                <p className="text-3xl font-heading font-black text-emerald-400">{prop.growth}</p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Sticky Sidebar */}
        <aside className="w-full md:w-1/3">
          <div className="bg-card border-2 border-border-color rounded-2xl p-6 sticky top-28 shadow-xl">
            <h3 className="text-2xl font-heading font-extrabold text-white mb-3">إتمام الصفقة الآمنة</h3>
            <p className="text-sm md:text-base text-foreground font-semibold mb-6">احجز هذا العقار أو حدد موعداً للمعاينة مع مستشار استثماري مالي مرخص.</p>
            
            <div className="space-y-4 mb-6">
              <button 
                onClick={() => router.push(`/book/${prop.id}`)}
                className="w-full bg-accent text-black py-4 rounded-xl font-extrabold text-base hover:bg-accent/90 transition-colors shadow-lg"
              >
                احجز العقار فوراً
              </button>
              <button className="w-full bg-slate-800 border-2 border-border-color text-white py-4 rounded-xl font-extrabold text-base hover:bg-foreground/10 transition-colors">
                طلب ملف الاستثمار الشامل
              </button>
            </div>

            <div className="border-t-2 border-border-color pt-6 text-center">
              <p className="text-base font-extrabold text-white mb-2">هل تحتاج لمساعدة فورية؟</p>
              <p className="text-sm text-accent font-bold">تحدث مباشرة مع خبير استثماري: 920000000</p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
