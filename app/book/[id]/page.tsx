"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { 
  Calendar, Clock, CreditCard, User, Mail, Phone, 
  CheckCircle, ArrowRight, ArrowLeft, Building, ShieldCheck
} from "lucide-react";

// Fake Data for Summary
const homeData = {
  id: "1",
  title: "برج النخبة المالي",
  location: "المركز المالي، الرياض",
  price: "4,200,000 ر.س",
  tag: "حياة المدن الراقية",
  img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
};

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  
  const [cardData, setCardData] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.back();
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setStep(5);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col md:flex-row relative">
      
      {/* Sidebar Summary - High Contrast */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-card border-l-2 border-border-color p-8 flex flex-col justify-between hidden md:flex shadow-2xl">
        <div>
          <button onClick={() => router.back()} className="flex items-center gap-2 text-accent font-extrabold hover:text-white transition-colors mb-12">
            <ArrowRight size={20} className="stroke-[3]" />
            <span className="text-base tracking-wider">العودة للخلف</span>
          </button>

          <h2 className="text-base text-accent font-black tracking-widest uppercase mb-4">ملخص عملية الحجز</h2>
          
          <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 border-2 border-border-color">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${homeData.img})` }} />
          </div>

          <h3 className="text-2xl font-heading font-extrabold text-white mb-2">{homeData.title}</h3>
          <p className="text-foreground font-bold text-sm mb-6 flex items-center gap-2">
            <Building size={16} className="text-accent" /> {homeData.location}
          </p>

          <div className="pt-6 border-t-2 border-border-color">
            <p className="text-sm text-foreground font-extrabold mb-1">السعر الإجمالي للأصل</p>
            <p className="text-3xl font-heading font-black text-accent">{homeData.price}</p>
          </div>
        </div>

        <div className="text-white font-extrabold text-xs flex items-center gap-2">
          <ShieldCheck size={18} className="text-accent" /> نظام تشفير وحماية مصرفية متكاملة
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-24 overflow-y-auto">
        
        {/* Progress Indicator - Super legible */}
        {step < 5 && (
          <div className="mb-12 max-w-2xl w-full mx-auto bg-card p-6 rounded-2xl border-2 border-border-color shadow-lg">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-slate-700 -z-10" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-extrabold transition-all duration-500 ${step >= i ? "bg-accent text-black scale-110 shadow-lg" : "bg-slate-800 border-2 border-border-color text-foreground"}`}>
                  {step > i ? <CheckCircle size={20} className="stroke-[3]" /> : i}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs md:text-sm font-extrabold mt-4 text-white">
              <span>نوع العملية</span>
              <span>تحديد الموعد</span>
              <span>البيانات الشخصية</span>
              <span>تأكيد الدفع</span>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="flex-1 max-w-2xl w-full mx-auto relative flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Booking Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-8">كيف تود المضي قدماً بالعملية؟</h1>
                
                {[
                  { id: "buy", title: "شراء فوري 🏠", desc: "دفع كامل قيمة الأصل العقاري ونقل ملكية العقد فوراً" },
                  { id: "visit", title: "جدولة زيارة ومعاينة 📅", desc: "احجز موعداً لزيارة الأصل العقاري ورؤيته على أرض الواقع مع مستشارك المالي" },
                  { id: "reserve", title: "حجز فوري بعربون 💳", desc: "دفع عربون حجز رمزي مسترد بالكامل لضمان حجز الأصل لمدة 14 يوماً" }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { setBookingType(type.id); handleNext(); }}
                    className={`w-full text-right p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col gap-2 shadow-md cursor-pointer ${bookingType === type.id ? "border-accent bg-accent/15" : "border-border-color hover:border-accent hover:bg-slate-800"}`}
                  >
                    <span className="text-xl md:text-2xl font-heading font-black text-white">{type.title}</span>
                    <span className="text-foreground font-bold text-sm md:text-base">{type.desc}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-8">اختر الموعد الاستثماري المناسب</h1>
                
                <div>
                  <h3 className="text-base font-extrabold text-accent mb-4 flex items-center gap-2"><Calendar size={20} /> اختر اليوم المتاح</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                    {["اليوم", "غداً", "12 مايو", "13 مايو", "14 مايو"].map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 px-8 py-5 rounded-xl border-2 font-extrabold text-base transition-all duration-300 cursor-pointer ${selectedDate === date ? "border-accent bg-accent/20 text-accent shadow-lg" : "border-border-color hover:border-accent text-white bg-slate-800"}`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-accent mb-4 flex items-center gap-2"><Clock size={20} /> اختر التوقيت المتاح</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["10:00 ص", "12:00 م", "02:00 م", "04:00 م", "06:00 م"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-4 rounded-xl border-2 font-extrabold text-base transition-all duration-300 cursor-pointer ${selectedTime === time ? "border-accent bg-accent/20 text-accent shadow-lg" : "border-border-color hover:border-accent text-white bg-slate-800"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex justify-between items-center">
                  <button onClick={handleBack} className="text-white hover:text-accent font-extrabold text-base transition-colors">رجوع للخلف</button>
                  <button 
                    onClick={handleNext} 
                    disabled={!selectedDate || !selectedTime}
                    className="bg-accent text-black px-8 py-3.5 rounded-full flex items-center gap-2 font-extrabold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    الخطوة التالية <ArrowLeft size={18} className="stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: User Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-8">إدخال البيانات الرسمية للتواصل</h1>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-extrabold text-white mb-2">الاسم الكامل للمستثمر</label>
                    <div className="relative">
                      <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent stroke-[3]" />
                      <input 
                        type="text" 
                        placeholder="أدخل اسمك الكامل كما هو في الهوية" 
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                        className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 pr-12 pl-4 font-bold focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-white mb-2">عنوان البريد الإلكتروني</label>
                    <div className="relative">
                      <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent stroke-[3]" />
                      <input 
                        type="email" 
                        placeholder="example@domain.com" 
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 pr-12 pl-4 font-bold focus:outline-none focus:border-accent transition-colors text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-white mb-2">رقم الهاتف النشط</label>
                    <div className="relative">
                      <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent stroke-[3]" />
                      <input 
                        type="tel" 
                        placeholder="+966 50 000 0000" 
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 pr-12 pl-4 font-bold focus:outline-none focus:border-accent transition-colors text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex justify-between items-center">
                  <button onClick={handleBack} className="text-white hover:text-accent font-extrabold text-base transition-colors">رجوع للخلف</button>
                  <button 
                    onClick={handleNext} 
                    disabled={!userData.name || !userData.email || !userData.phone}
                    className="bg-accent text-black px-8 py-3.5 rounded-full flex items-center gap-2 font-extrabold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    الخطوة التالية <ArrowLeft size={18} className="stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Payment UI */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8 relative"
              >
                <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-2">بيانات بوابة الدفع الآمنة</h1>
                <p className="text-base text-foreground font-bold mb-8">يتم معالجة كافة بيانات بطاقتك الائتمانية بشكل مشفر وثنائي الحماية.</p>

                {/* Credit Card Mock - Accessible, High Contrast */}
                <div className="perspective-1000 mb-8 mx-auto max-w-sm w-full" dir="ltr">
                  <motion.div
                    animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                    className="w-full aspect-[1.586/1] rounded-2xl relative preserve-3d"
                  >
                    {/* Front - slate-800 with clean high contrast text */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-slate-800 border-2 border-accent p-6 flex flex-col justify-between shadow-2xl">
                      <div className="flex justify-between items-start">
                        <CreditCard size={28} className="text-accent" />
                        <div className="w-12 h-8 bg-slate-700 border border-slate-600 rounded-md" /> {/* Fake chip */}
                      </div>
                      <div>
                        <div className="text-2xl tracking-widest font-mono font-bold mb-3 text-white">
                          {cardData.number || "•••• •••• •••• ••••"}
                        </div>
                        <div className="flex justify-between text-xs font-mono font-extrabold text-accent uppercase">
                          <span>{cardData.name || "CARDHOLDER NAME"}</span>
                          <span>{cardData.expiry || "MM/YY"}</span>
                        </div>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-slate-800 border-2 border-accent flex flex-col justify-center shadow-2xl" style={{ transform: "rotateY(180deg)" }}>
                      <div className="w-full h-12 bg-black/60 mb-4" />
                      <div className="px-6 flex justify-end">
                        <div className="bg-white text-black px-4 py-2 rounded text-base font-mono font-bold tracking-widest">
                          {cardData.cvv || "•••"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Payment Form inputs */}
                <div className="space-y-4 font-bold" dir="ltr">
                  <input 
                    type="text" 
                    placeholder="Card Number (رقم البطاقة الائتمانية)" 
                    maxLength={19}
                    value={cardData.number}
                    onFocus={() => setIsCardFlipped(false)}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                      let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
                      setCardData({...cardData, number: formatted});
                    }}
                    className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 px-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all font-mono"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Name on Card (الاسم المكتوب على البطاقة)" 
                      value={cardData.name}
                      onFocus={() => setIsCardFlipped(false)}
                      onChange={(e) => setCardData({...cardData, name: e.target.value.toUpperCase()})}
                      className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 px-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all uppercase"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        maxLength={5}
                        value={cardData.expiry}
                        onFocus={() => setIsCardFlipped(false)}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
                          setCardData({...cardData, expiry: val});
                        }}
                        className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 px-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all font-mono"
                      />
                      <input 
                        type="text" 
                        placeholder="CVV" 
                        maxLength={3}
                        value={cardData.cvv}
                        onFocus={() => setIsCardFlipped(true)}
                        onBlur={() => setIsCardFlipped(false)}
                        onChange={(e) => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                        className="w-full bg-slate-800 border-2 border-border-color rounded-xl py-4 px-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex justify-between items-center" dir="rtl">
                  <button onClick={handleBack} className="text-white hover:text-accent font-extrabold text-base transition-colors">رجوع للخلف</button>
                  <button 
                    onClick={handlePayment} 
                    disabled={isProcessing || !cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv}
                    className="bg-accent text-black px-10 py-4 rounded-full flex items-center justify-center gap-2 font-extrabold hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg min-w-[220px]"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>تأكيد المعاملة المالية والاعتماد <CheckCircle size={18} className="stroke-[3]" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Success Screen */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 flex flex-col items-center py-20 bg-card border-2 border-border-color p-8 rounded-3xl shadow-2xl"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border-2 border-emerald-400 shadow-lg"
                >
                  <CheckCircle size={52} className="stroke-[3]" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-heading font-black text-emerald-400">تمت المعاملة بنجاح كامل</h1>
                <p className="text-foreground font-bold text-lg md:text-xl">تم تأكيد الحجز وإيداع العربون بنجاح، وستصلك التفاصيل الرسمية إلى بريدك الالكتروني خلال دقائق.</p>

                <div className="pt-12 flex gap-4 w-full justify-center">
                  <button onClick={() => router.push("/")} className="px-8 py-4 rounded-xl border-2 border-border-color text-white font-extrabold hover:bg-slate-800 transition-colors">
                    العودة للرئيسية
                  </button>
                  <button onClick={() => router.push("/bookings")} className="bg-accent text-black px-8 py-4 rounded-xl font-extrabold hover:bg-accent/90 transition-colors shadow-lg">
                    عرض تفاصيل حجوزاتي النشطة
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
