import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Minus,
  ArrowUpRight,
  Plus
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  category: string;
  details: string[];
}

// --- Minimalist Data ---
const SERVICES: Service[] = [
  {
    id: "01",
    category: "Brokerage",
    title: "ที่ปรึกษาการซื้อ-ขายและขายฝาก",
    details: ["รับซื้อ-ขายฝาก ดอกเบี้ย 1.25%", "วิเคราะห์ราคาตลาดแม่นยำ", "คัดกรองคุณภาพผู้ซื้อ/ผู้เช่า"]
  },
  {
    id: "02",
    category: "Investment",
    title: "การวางแผนกลยุทธ์การลงทุน",
    details: ["วิเคราะห์ Yield & Cash Flow", "กลยุทธ์ Buy to Sell / Flip", "บริหารพอร์ตอสังหาริมทรัพย์"]
  },
  {
    id: "03",
    category: "Management",
    title: "การบริหารจัดการทรัพย์สิน",
    details: ["ดูแลผู้เช่าและสัญญาเช่า", "ประสานงานนิติบุคคล", "ตรวจสภาพทรัพย์สินมืออาชีพ"]
  }
];


  const reasons = [
    {
      title: "Direct Market Experience",
      thaiTitle: "ประสบการณ์ตรงในตลาดอสังหาริมทรัพย์",
      description: "ความเชี่ยวชาญที่กลั่นกรองจากหน้างานจริง ทำให้เรามองเห็นโอกาสและความเสี่ยงก่อนใคร"
    },
    {
      title: "Dual Perspective",
      thaiTitle: "เข้าใจทั้งมุม “เจ้าของทรัพย์” และ “นักลงทุน”",
      description: "เราเชื่อมโยงความต้องการของทั้งสองฝั่ง เพื่อสร้างข้อตกลงที่ดีที่สุดสำหรับทุกฝ่าย"
    },
    {
      title: "Total Transparency",
      thaiTitle: "ทำงานโปร่งใส จริงใจ ดูแลเหมือนทรัพย์ของตัวเอง",
      description: "ความเชื่อมั่นคือรากฐานของธุรกิจเรา เราดูแลทุกรายละเอียดด้วยมาตรฐานสูงสุด"
    },
    {
      title: "Result-Driven",
      thaiTitle: "มุ่งเน้นผลลัพธ์ที่จับต้องได้ ไม่ขายฝัน",
      description: "ทุกคำแนะนำอ้างอิงจากข้อมูลและตัวเลขจริง เพื่อให้เป้าหมายของคุณสำเร็จอย่างเป็นรูปธรรม"
    }
  ];

// --- Animation Variants ---
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const imageTransition = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 1.05, opacity: 0 },
  transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
};

export default function HomePropertyPro() {
  const [index, setIndex] = useState(0);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % 2), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">



      {/* 2. ARCHITECTURAL HERO SECTION */}
      <header className="relative h-screen flex items-end px-8 pb-20 overflow-hidden bg-[#121212]">
        <AnimatePresence mode="wait">
          <motion.div key={index} {...imageTransition} className="absolute inset-0 z-0">
            <img
              src={index === 0 ? "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" : "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"}
              className="w-full h-full object-cover grayscale-[40%] opacity-40"
              alt="Architecture"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              EST. 2026 — Bangkok, TH
            </span>
            <h1 className="text-white text-5xl md:text-[clamp(3rem,8vw,6rem)] leading-[0.95] font-light tracking-tighter mb-10">
              Home Property Consulting Company Limited
            </h1>
            <div className="flex items-center gap-8">
              <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-500">
                Contact Us
              </button>
              <div className="hidden md:flex gap-4 items-center text-white/40">
                <span className={index === 0 ? "text-white" : ""}>01</span>
                <div className="w-12 h-px bg-white/20">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    key={index}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                </div>
                <span className={index === 1 ? "text-white" : ""}>02</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. THE "WHY" SECTION - TYPOGRAPHY FOCUS */}
      <section className="py-32 px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30">Philosophy</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-light leading-tight text-slate-800">
              “เราไม่ได้ทำหน้าที่เพียงแค่การส่งมอบอสังหาริมทรัพย์
              แต่เราคือผู้วางแผนความมั่งคั่งอย่างยั่งยืน
              ภายใต้ความโปร่งใสและผลลัพธ์ที่จับต้องได้จริง”
            </p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES - MINIMAL LIST DESIGN */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-4">Professional Expertise</h2>
            <h3 className="text-4xl font-light tracking-tighter">ขอบเขตการให้บริการ</h3>
          </div>

          <div className="divide-y divide-black/5 border-y border-black/5">
            {SERVICES.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 10 }}
                className="group py-12 grid grid-cols-1 md:grid-cols-12 items-start transition-all cursor-default"
              >
                <div className="md:col-span-1 text-black/20 font-mono text-sm">{item.id}</div>
                <div className="md:col-span-2 text-[10px] uppercase tracking-widest text-black/40 font-bold mt-1.5 pt-px">
                  {item.category}
                </div>
                <div className="md:col-span-5 pr-8">
                  <h4 className="text-2xl font-light tracking-tight group-hover:text-black/60 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="md:col-span-4 flex flex-col gap-2 md:items-end">
                  {item.details.map((detail, idx) => (
                    <span key={idx} className="text-xs text-black/40 flex items-center gap-2">
                      <Minus className="w-3 h-3 opacity-20" /> {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            {/* Left Side: Sticky Title */}
            <div className="md:col-span-4 self-start sticky top-32">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-6">Values</h2>
              <h3 className="text-4xl font-light tracking-tighter leading-tight">
                ทำไมต้องเลือก <br />
                <span className="font-medium text-black">Home Property Consulting</span>
              </h3>
              <div className="mt-8 w-12 h-px bg-black/10"></div>
            </div>

            {/* Right Side: Reason Cards */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
                {reasons.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                  >
                    <span className="block font-mono text-[10px] text-black/20 mb-6 tracking-widest">
                    // 0{i + 1}
                    </span>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40 mb-3">
                      {item.title}
                    </h4>
                    <h5 className="text-xl font-medium tracking-tight mb-4">
                      {item.thaiTitle}
                    </h5>
                    <p className="text-sm text-black/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INVESTMENT HIGHLIGHT - CLEAN CALLOUT */}
      <section className="bg-black py-40 px-8 text-white text-center overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-12 opacity-50">Yield Management</h2>
          <h3 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] mb-16">
            เพราะทุกการลงทุนอสังหาฯ <br /> ต้องมี <span className="italic text-(--primary-color) ">Strategy.</span>
          </h3>
          <button className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em]">
            ร่วมลงทุนกับเรา <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
        {/* Subtle geometric background accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
      </section>


    </div>
  );
}