import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Clock, CheckCircle2, FileText, Banknote, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router';
import type { Route } from './+types/buy-condo';

export function meta({}: Route.MetaArgs) {
  return [
    { 
      title: "รับซื้อคอนโดด่วน ราคายุติธรรม | Home Property Consulting", 
    },
    { 
      name: "description", 
      content: "ต้องการขายคอนโดด่วน? Home Property Consulting โดยคุณนุ่น ปัณณภัสร์ รับซื้อคอนโดในกรุงเทพฯ และปริมณฑล ปิดดีลไว ได้เงินสดทันใจ บริการโดยมืออาชีพ ประสบการณ์กว่า 10 ปี", 
    },
    { 
      name: "keywords", 
      content: "รับซื้อคอนโด, ขายคอนโดด่วน, รับซื้อคอนโดมือสอง, Home Property Consulting, ปัณณภัสร์ ศรีพัชรพัชร์", 
    },
  ];
}

export default function CondoBuybackPage() {
  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 text-(--primary-color)" />,
      title: "1. ส่งข้อมูลเพื่อประเมิน",
      desc: "ส่งรายละเอียดโครงการ รูปถ่าย และราคาที่ต้องการทาง Line: @condobkk เพื่อให้ทีมงานประเมินเบื้องต้น"
    },
    {
      icon: <Clock className="w-6 h-6 text-(--primary-color)" />,
      title: "2. นัดตรวจสภาพห้อง",
      desc: "ทีมงาน Condo Specialists จะเข้าตรวจเช็คสภาพห้องจริงและตรวจสอบเอกสารสิทธิ์ภายใน 1-2 วันทำการ"
    },
    {
      icon: <Banknote className="w-6 h-6 text-(--primary-color)" />,
      title: "3. ทำสัญญาและรับเงิน",
      desc: "ตกลงราคาที่พึงพอใจทั้งสองฝ่าย ทำสัญญาจะซื้อจะขาย และดำเนินการโอนกรรมสิทธิ์ ณ กรมที่ดินทันที"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="h-[75vh] relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto md:px-28 px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-(--primary-color)"></div>
                <span className="text-sm uppercase tracking-[0.4em] font-medium text-(--primary-color)">
                  Acquisition Services
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
                รับซื้อคอนโด <br />
                <span className="italic opacity-80">ปิดดีลไว ได้เงินสดทันใจ</span>
              </h1>
              <p className="max-w-md text-white/50 text-sm font-light leading-relaxed pt-4 border-t border-white/10 mt-8">
                บริการรับซื้ออสังหาริมทรัพย์โดยตรงจาก Home Property Consulting <br />
                เพื่อเสริมสภาพคล่องให้กับเจ้าของทรัพย์ ด้วยขั้นตอนที่โปร่งใสและเป็นธรรม
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent"></div>
        <img
          src="/people.jpg" 
          className='w-full h-full object-cover opacity-60'
          alt="Home Property Condo Acquisition"
        />
      </div>

      {/* --- WHY US SECTION --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-(--primary-color) mb-6 block">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8">
              ทำไมต้องขายคอนโดกับเรา?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-black">
                  <Zap className="w-5 h-5 text-(--primary-color)" />
                  <span className="font-medium">รวดเร็วที่สุด</span>
                </div>
                <p className="text-sm text-gray-500 font-light">ลดขั้นตอนการหาผู้เชี่ยวชาญและการทำตลาดที่ยาวนาน เราพร้อมซื้อเองโดยตรง</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-black">
                  <ShieldCheck className="w-5 h-5 text-(--primary-color)" />
                  <span className="font-medium">โปร่งใส เป็นธรรม</span>
                </div>
                <p className="text-sm text-gray-500 font-light">ประเมินราคาตามกลไกตลาดจริง โดยทีมงานผู้เชี่ยวชาญ (Condo Specialists)</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-black">
                  <Wallet className="w-5 h-5 text-(--primary-color)" />
                  <span className="font-medium">จบทุกปัญหาหนี้สิน</span>
                </div>
                <p className="text-sm text-gray-500 font-light">ยินดีให้คำปรึกษาสำหรับห้องที่ยังติดจำนอง หรือต้องการปิดภาระหนี้เร่งด่วน</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-black">
                  <MapPin className="w-5 h-5 text-(--primary-color)" />
                  <span className="font-medium">เน้นทำเลศักยภาพ</span>
                </div>
                <p className="text-sm text-gray-500 font-light">รับซื้อเน้นโซนสุขุมวิท, รัชดา, พระราม 9 และคอนโดใกล้สถานีรถไฟฟ้า BTS/MRT</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
               <img src="/ceo-home-property-consulting.jpg" className="w-full h-full object-cover" alt="Professional Consulting" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#121212] p-8 text-white max-w-[280px] hidden md:block">
              <p className="text-xs font-light italic leading-relaxed">
                "เราไม่ใช่แค่ตัวแทน แต่เราคือพาร์ทเนอร์ที่ช่วยเปลี่ยนทรัพย์สินให้เป็นโอกาส"
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-4 font-bold text-(--primary-color)">— ปัณณภัสร์ ศรีพัชรพัชร์</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-32 px-6 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-4">Simple Steps</h3>
            <h2 className="text-3xl md:text-4xl font-light italic">ขั้นตอนการขายที่ง่ายและรวดเร็ว</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 bg-white border border-black/[0.03] text-center space-y-6 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAF9F6] mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-medium">{step.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-40 px-6 text-center bg-[#121212] text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter leading-tight">
            ประเมินราคาคอนโดของคุณ <br className="hidden md:block"/>
            กับ Condo Specialist วันนี้
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-20 bg-white/10"></div>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="https://line.me/R/ti/p/@690zabib" 
                target="_blank"
                className="px-12 py-5 bg-green-500 text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors duration-300"
              >
                Line OA
              </a>
              <Link 
                to="/contact" 
                className="px-12 py-5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
              >
                ติดต่อเรา
              </Link>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              Home Property Consulting Co., Ltd.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}