"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, BarChart3, ArrowUpRight } from "lucide-react";

export default function InvestmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-background min-h-screen text-foreground">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 bg-card p-6 rounded-2xl border-2 border-border-color shadow-lg">
        <div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4">لوحة تحكم المستثمر العقاري</h1>
          <p className="text-foreground font-bold text-base md:text-lg">تحليل أداء الأصول وتوقعات العوائد في الوقت الفعلي بأعلى دقة ممكنة.</p>
        </div>
        <button className="bg-accent text-black px-6 py-3 rounded-lg font-extrabold text-sm hover:bg-accent/90 shadow-md">
          تحميل التقرير الاستثماري الشامل
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "إجمالي قيمة الأصول المقترحة", value: "$12.4M", trend: "+4.2%", positive: true },
          { label: "متوسط العائد الإيجاري (الصافي)", value: "8.7%", trend: "+1.1%", positive: true },
          { label: "مؤشر المخاطرة والموثوقية", value: "مستقر آمن", trend: "ممتاز", positive: true }
        ].map((kpi, i) => (
          <div key={i} className="bg-card border-2 border-border-color p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <p className="text-base font-extrabold text-white mb-3">{kpi.label}</p>
            <div className="flex justify-between items-end">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-accent">{kpi.value}</h2>
              <span className={`text-base font-extrabold flex items-center gap-1.5 ${kpi.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                {kpi.trend} <ArrowUpRight size={16} className="stroke-[3]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts / Data area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card border-2 border-border-color rounded-2xl p-6 h-96 flex flex-col shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2"><BarChart3 size={24} className="text-accent" /> نمو قيمة الأصول الاستثمارية (5 سنوات)</h3>
            <span className="text-xs font-black bg-accent text-black px-3 py-1 rounded-md shadow-md">توقع ذكي مدعوم بالبيانات</span>
          </div>
          
          {/* Mock Chart Area */}
          <div className="flex-1 border-b-2 border-l-2 border-border-color relative flex items-end justify-between px-6 pb-0">
            {/* Bars mock */}
            {[40, 55, 65, 80, 95].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-1/6 bg-accent rounded-t-md relative group cursor-pointer border border-black/25"
              >
                <div className="opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-black py-1 px-2.5 rounded shadow-lg border border-black/10">
                  {h}%
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-sm font-extrabold text-white px-4">
            <span>2024</span><span>2025</span><span>2026</span><span>2027</span><span>2028</span>
          </div>
        </div>

        <div className="bg-card border-2 border-border-color rounded-2xl p-6 h-96 flex flex-col shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2"><PieChart size={24} className="text-accent" /> توزيع الأصول الاستثمارية الأمثل</h3>
          </div>
          
          {/* Mock Circular Data */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-48 h-48 rounded-full border-[18px] border-slate-700 border-r-accent border-b-accent/60 rotate-45" />
            <div className="absolute flex flex-col items-center">
              <span className="text-xs text-white font-extrabold uppercase">متوسط العائد</span>
              <span className="text-3xl font-heading font-black text-accent mt-1">8.7%</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-extrabold text-white"><div className="w-3.5 h-3.5 bg-accent rounded-sm"/> سكني فاخر (50%)</div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-white"><div className="w-3.5 h-3.5 bg-accent/60 rounded-sm"/> تجاري (30%)</div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-white"><div className="w-3.5 h-3.5 bg-slate-700 rounded-sm"/> فندقي (20%)</div>
          </div>
        </div>
      </div>

      {/* Top ROI Properties */}
      <div className="bg-card border-2 border-border-color rounded-2xl p-6 shadow-xl">
        <h3 className="text-2xl font-heading font-extrabold text-white mb-6 border-b-2 border-border-color pb-4">الأصول الاستثمارية الأعلى عائداً هذا الشهر</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-base text-right">
            <thead>
              <tr className="text-white border-b-2 border-border-color text-lg font-bold">
                <th className="pb-4 font-extrabold">اسم الأصل العقاري</th>
                <th className="pb-4 font-extrabold">النوع</th>
                <th className="pb-4 font-extrabold">قيمة الاستثمار</th>
                <th className="pb-4 font-extrabold">العائد السنوي المتوقع</th>
                <th className="pb-4 font-extrabold">حالة توافر المعروض</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "برج النخبة المالي", type: "تجاري", val: "4.2 مليون", roi: "8.2%", status: "متاح بالكامل" },
                { name: "مجمع وادي التقنية الذكي", type: "صناعي ذكي", val: "12 مليون", roi: "9.5%", status: "مغلق جزئياً" },
                { name: "فيلات الساحل الأزرق الفاخرة", type: "سكني فاخر", val: "8.5 مليون", roi: "6.8%", status: "متاح بالكامل" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border-color/50 hover:bg-slate-800 transition-colors font-bold text-white text-base">
                  <td className="py-5 font-extrabold text-white">{row.name}</td>
                  <td className="py-5 text-foreground">{row.type}</td>
                  <td className="py-5 text-accent font-black">{row.val} ر.س</td>
                  <td className="py-5 text-emerald-400 font-black text-lg">{row.roi}</td>
                  <td className="py-5"><span className="bg-slate-800 border-2 border-border-color px-3 py-1 rounded-lg text-xs font-black">{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
