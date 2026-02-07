import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Minus,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router';
import VisionSection from './home/visionSection';
import VisualCarousel from '~/components/imageSlider';

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
  const images = ["/lecture5.webp", "/lecture6.webp"];
  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % 2), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">



      <header className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
        {/* 1. BACKGROUND LAYER: Cinematic Ken Burns Effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={images[index]}
              className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
              alt="ที่ปรึกษาอสังหาริมทรัพย์มืออาชีพ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent hidden md:block" />
          </motion.div>
        </AnimatePresence>

        {/* 2. CONTENT LAYER */}
        <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-8 md:px-20 flex flex-col justify-end pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12">

            {/* Left Side: Branding & Title */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-12 bg-white/30" />
                  <span className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold">
                    กรุงเทพมหานคร, ประเทศไทย
                  </span>
                </div>

                <h1 className="text-white text-6xl md:text-[90px] leading-[1.1] font-light tracking-tighter mb-12">
                  ยกระดับ <br />
                  <span className="italic text-white/20">มูลค่าอสังหาริมทรัพย์</span>
                </h1>

                <div className="flex flex-wrap items-center gap-10">
                  <Link
                    to="/contact"
                    className="group relative flex items-center gap-4 bg-white px-10 py-5 overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 text-black text-[12px] font-bold uppercase tracking-[0.1em] group-hover:text-white transition-colors">
                      เริ่มรับคำปรึกษา
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-black group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>

                  <div className="hidden sm:block">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">ความเชี่ยวชาญของเรา</p>
                    <p className="text-white/60 text-sm font-light italic">การลงทุนและบริหารจัดการทรัพย์สิน</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Navigation & Progress */}
            <div className="lg:col-span-4 flex flex-col items-end gap-8">
              <div className="flex items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                <span className={index === 0 ? "text-white" : "transition-colors duration-500"}>01</span>
                <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    key={index}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute inset-0 bg-white"
                  />
                </div>
                <span className={index === 1 ? "text-white" : "transition-colors duration-500"}>02</span>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Side Label */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <p className="text-white/5 text-[10px] uppercase tracking-[1em] rotate-90 origin-center whitespace-nowrap font-bold">
            Home Property Consulting
          </p>
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

      <VisualCarousel slides={[
        { image: "/award.jpg" },
        { image: "/award2.jpg" },
        { image: "/award3.jpg" },
        { image: "/award4.jpg" },
        { image: "/award5.jpg" },
        { image: "/award6.jpg" },
        { image: "/trophy.webp" },
      ]} />

      <VisionSection />

      {/* 5. INVESTMENT HIGHLIGHT - CLEAN CALLOUT */}
      <section className="bg-black py-40 px-8 text-white text-center overflow-hidden relative">
        <img src="/award.jpg" className='w-full h-full object-cover absolute inset-0 opacity-50' />
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
          <Link
            target='_blank'
            to={"https://lin.ee/aHn58W1"}
            className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em]">
            ร่วมลงทุนกับเรา <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
        {/* Subtle geometric background accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
      </section>


    </div>
  );
}