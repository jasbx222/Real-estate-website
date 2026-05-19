"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Calendar, Clock, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BookingsDashboardPage() {
  const router = useRouter();

  const activeBookings = [
    {
      id: "1",
      propertyTitle: "برج النخبة المالي",
      location: "المركز المالي، الرياض",
      price: "4,200,000 ر.س",
      bookingType: "حجز بعربون 💳",
      amountPaid: "50,000 ر.س",
      date: "اليوم",
      time: "02:00 م",
      status: "مؤكد بنجاح",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-background min-h-screen text-foreground">
      <div className="mb-10 bg-card p-6 rounded-2xl border-2 border-border-color">
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4">حجوزاتي وعقاراتي النشطة</h1>
        <p className="text-foreground font-bold text-base md:text-lg">قائمة بجميع العمليات الاستثمارية النشطة، الزيارات المجدولة، والعقارات المحجوزة.</p>
      </div>

      {activeBookings.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeBookings.map((booking) => (
            <motion.div 
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border-2 border-border-color rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl"
            >
              {/* Image side */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${booking.img})` }}
                />
              </div>

              {/* Details side */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-2xl font-heading font-extrabold text-white leading-tight">{booking.propertyTitle}</h3>
                    <span className="bg-emerald-500 text-black text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <CheckCircle2 size={14} className="stroke-[3]" /> {booking.status}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-foreground font-bold flex items-center gap-1.5 mb-6">
                    <MapPin size={16} className="text-accent" /> {booking.location}
                  </p>

                  <div className="space-y-3 border-t-2 border-border-color pt-4 mb-6 text-base font-bold">
                    <div className="flex justify-between">
                      <span className="text-foreground">نوع العملية الاستثمارية:</span>
                      <span className="text-white font-extrabold">{booking.bookingType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">الموعد المؤكد:</span>
                      <span className="text-accent font-extrabold flex items-center gap-1.5">
                        <Calendar size={16} /> {booking.date} - <Clock size={16} /> {booking.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">المبلغ المودع (العربون):</span>
                      <span className="font-black text-accent text-lg">{booking.amountPaid}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => router.push(`/property/${booking.id}`)}
                    className="flex-1 bg-slate-800 border-2 border-border-color hover:bg-slate-700 py-3 rounded-xl text-sm font-extrabold text-white transition-colors"
                  >
                    عرض العقار
                  </button>
                  <button className="flex-1 bg-accent text-black py-3 rounded-xl text-sm font-extrabold hover:bg-accent/90 transition-colors shadow-md">
                    إدارة الحجز
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card border-2 border-border-color rounded-2xl">
          <p className="text-lg md:text-xl text-foreground font-extrabold mb-6">ليس لديك أي حجوزات نشطة حالياً في محفظتك.</p>
          <button 
            onClick={() => router.push("/properties")}
            className="bg-accent text-black px-8 py-3.5 rounded-xl font-extrabold hover:bg-accent/90 transition-colors shadow-md"
          >
            تصفح العقارات المتاحة للاستثمار
          </button>
        </div>
      )}

      <div className="mt-12 bg-card border-2 border-accent/40 rounded-2xl p-8 flex items-center gap-6 shadow-lg">
        <ShieldCheck className="text-accent flex-shrink-0" size={44} />
        <div>
          <h4 className="font-heading font-extrabold text-xl text-white mb-2">حماية المستثمر وضمان الجدية المصرفية</h4>
          <p className="text-base text-foreground font-medium leading-relaxed">
            جميع الحجوزات بالعربون محمية بفترة استرجاع كاملة وغير مشروطة لمدة 14 يوماً. يمكنك إلغاء الحجز أو تعديل الموعد بسهولة بضغطة زر واحدة من لوحة التحكم أو بالتواصل مع مستشارك المالي المباشر.
          </p>
        </div>
      </div>
    </div>
  );
}
