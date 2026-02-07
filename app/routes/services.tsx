import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Minus,
  Target,
  BarChart3,
  ShieldCheck,
  FileSearch,
  Camera
} from 'lucide-react';
import { Link } from 'react-router';

// --- Data Structure ---
const SERVICES = [
  {
    id: "01",
    icon: <Target className="w-5 h-5" />,
    title: "บริการครบวงจร อสังหาริมทรัพย์",
    subtitle: "End-to-End Property Solutions",
    description: "รับซื้อ รับขายฝาก (ดอกเบี้ย 1.25%) ฝากขาย และฝากปล่อยเช่า คอนโดมิเนียม บ้าน และที่อยู่อาศัย โดยทีมงานมืออาชีพที่ดูแลคุณในทุกขั้นตอน",
    points: [
      "วิเคราะห์ราคาตลาดอย่างแม่นยำ",
      "ทำการตลาดออนไลน์–ออฟไลน์",
      "คัดกรองผู้เช่าและผู้ซื้อคุณภาพ",
      "ดูแลตั้งแต่เริ่มจนถึงวันโอน / เข้าอยู่จริง"
    ]
  },
  {
    id: "02",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "ที่ปรึกษาการลงทุนอสังหาริมทรัพย์",
    subtitle: "Investment Advisory",
    description: "เหมาะสำหรับผู้ที่ต้องการสร้างรายได้จากการลงทุนระยะสั้นและระยะยาว ด้วยกลยุทธ์ที่ผ่านการวิเคราะห์มาอย่างดี",
    points: [
      "วิเคราะห์ผลตอบแทน (Yield / Cash Flow)",
      "แนะนำคอนโดลงทุน ราคาดี ปล่อยเช่าง่าย",
      "กลยุทธ์ซื้อ–ขาย (Buy to Sell / Flip)",
      "วางแผนพอร์ตอสังหาฯ ให้เติบโตอย่างยั่งยืน"
    ]
  },
  {
    id: "03",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "บริหารจัดการทรัพย์สิน",
    subtitle: "Property Management",
    description: "ช่วยลดภาระเจ้าของห้อง ให้คุณมีรายได้แบบสบายใจ (Passive Income) โดยไม่ต้องจัดการปัญหาจุกจิกด้วยตนเอง",
    points: [
      "ดูแลผู้เช่าและสัญญาเช่า",
      "ประสานงานนิติบุคคล",
      "ตรวจสภาพห้องก่อน–หลังเช่า",
      "แก้ไขปัญหาเบื้องต้นแทนเจ้าของ"
    ]
  },
  {
    id: "04",
    icon: <FileSearch className="w-5 h-5" />,
    title: "บริการด้านเอกสารและสัญญา",
    subtitle: "Legal & Documentation",
    description: "มั่นใจ ถูกต้อง ตามกฎหมาย ลดความเสี่ยงในการทำธุรกรรมอสังหาริมทรัพย์ทุกประเภท",
    points: [
      "จัดทำและตรวจสอบสัญญาเช่า / สัญญาจะซื้อจะขาย",
      "ให้คำปรึกษาเรื่องภาษี ค่าโอน และค่าใช้จ่ายต่างๆ",
      "ดูแลขั้นตอนการโอนกรรมสิทธิ์ครบถ้วน"
    ]
  },
  {
    id: "05",
    icon: <Camera className="w-5 h-5" />,
    title: "บริการการตลาดอสังหาริมทรัพย์",
    subtitle: "Real Estate Marketing",
    description: "เพิ่มโอกาสขายไว ปล่อยเช่าเร็ว ด้วยเทคนิคการนำเสนอที่โดดเด่นและเข้าถึงกลุ่มเป้าหมายที่แท้จริง",
    points: [
      "ถ่ายภาพ / วิดีโอ / เขียนคอนเทนต์ขาย",
      "ลงประกาศในแพลตฟอร์มชั้นนำ",
      "ทำโฆษณาออนไลน์เจาะกลุ่มเป้าหมาย",
      "สร้างภาพลักษณ์โครงการและทรัพย์ให้โดดเด่น"
    ]
  }
];

// --- Sub-components ---

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group py-16 border-b border-black/5 last:border-0"
  >

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Number & Icon */}
      <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
        <span className="font-mono text-[10px] text-black/20 tracking-widest">{service.id}</span>
        <div className="text-black/40 group-hover:text-black transition-colors">
          {service.icon}
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-6">
        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30 mb-2">{service.subtitle}</h2>
        <h3 className="text-3xl font-light tracking-tighter mb-6">{service.title}</h3>
        <p className="text-sm text-black/50 leading-relaxed max-w-md">
          {service.description}
        </p>
      </div>

      {/* Features List */}
      <div className="md:col-span-5 pt-2">
        <ul className="grid grid-cols-1 gap-y-3">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-[13px] text-black/70 font-light leading-snug">
              <Minus className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
              {point}
            </li>
          ))}
        </ul>
        <motion.button
          onClick={() => window.location.href = "/contact"}
          whileHover={{ x: 5 }}
          className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 hover:text-black transition-colors"
        >
          Enquire Now <ArrowUpRight className="w-3 h-3" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default function ServicePage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-black selection:text-white">
      <div className="h-[100vh] relative overflow-hidden bg-(--bg-color)">

        {/* 1. LAYERED TEXT CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto md:px-28 px-6 pb-24">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Minimalist Top Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-(--primary-color)"></span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-(--primary-color)">
                  Executive Solutions
                </span>
              </div>

              {/* Main Title with Semantic Separation */}
              <h1 className="text-6xl md:text-[120px] font-light text-white tracking-tighter leading-[0.85] mb-10">
                บริการ <br />
                <span className="italic  text-white/20">ระดับมืออาชีพ</span>
              </h1>

              {/* Service Grid Summary - Adds instant value/trust */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 max-w-4xl">
                {[
                  { title: "Investment", desc: "วางแผนการลงทุน" },
                  { title: "Management", desc: "บริหารจัดการ" },
                  { title: "Brokerage", desc: "ตัวแทนซื้อ-ขาย" },
                  { title: "Academy", desc: "ศูนย์การเรียนรู้" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">{item.title}</p>
                    <p className="text-xs text-white/80 font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. ATMOSPHERIC MASKS */}
        {/* Bottom up mask for text clarity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-(--bg-color) via-black/40 to-transparent"></div>
        {/* Side mask for an "Editorial" look */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block"></div>

        {/* 3. BACKGROUND COMPONENT WITH PARALLAX */}
        <motion.div
          initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
          animate={{ scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/service.jpg"
            className='w-full h-full object-cover'
            alt="Home Property Professional Services"
          />
        </motion.div>

        {/* 4. SCROLL PROGRESS DECORATION */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-4">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">Discover More</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-10 bg-(--primary-color)"
          />
        </div>
      </div>
      {/* Header Section */}
      <section className="pt-40 pb-20 px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter leading-[0.9] mb-8">
              Expertise <br />
              <span className="italic text-black/30">& Professional Services.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 font-light max-w-2xl leading-relaxed">
              เรามอบบริการที่ปรึกษาอสังหาริมทรัพย์แบบครบวงจร
              ตั้งแต่การวิเคราะห์การลงทุน บริหารทรัพย์สิน ไปจนถึงงานด้านกฎหมายและเอกสาร
              เพื่อให้คุณมั่นใจในทุกการตัดสินใจ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - Integrated */}
      <section className="py-32 px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 opacity-50">Why Choose Us</h2>
              <div className="space-y-12">
                {[
                  { t: "Market Experience", d: "ประสบการณ์ตรงในตลาดอสังหาริมทรัพย์" },
                  { t: "Dual Perspective", d: "เข้าใจทั้งมุม “เจ้าของทรัพย์” และ “นักลงทุน”" },
                  { t: "Total Transparency", d: "ทำงานโปร่งใส จริงใจ ดูแลเหมือนทรัพย์ของตัวเอง" },
                  { t: "Result Oriented", d: "มุ่งเน้นผลลัพธ์ที่จับต้องได้ ไม่ขายฝัน" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <span className="block text-[10px] text-white/20 font-mono mb-2">// 0{i + 1}</span>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-2 group-hover:text-white transition-colors">{item.t}</h4>
                    <p className="text-xl font-light tracking-tight">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img
                src="lecture4.webp"
                className="w-full h-full object-cover opacity-50"
                alt="Professional Office"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <p className="text-2xl font-light italic leading-relaxed">
                  "Your professional partner in real estate growth and asset management."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 text-center bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light tracking-tighter mb-10">พร้อมเริ่มต้นวางแผนอสังหาริมทรัพย์กับเราหรือยัง?</h2>
          <Link
            target='_blank'
            to="https://lin.ee/aHn58W1" className="px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-all">
            ปรึกษาทีมงานมืออาชีพ
          </Link>
        </div>
      </section>
    </div>
  );
}