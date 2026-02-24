import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Clock, CheckCircle2, FileText, Banknote, MapPin, Zap, Building2 } from 'lucide-react';
import { Link } from 'react-router';
import type { Route } from './+types/buy-condo';
import { CondoFAQ } from './components/faq';
import { faqData } from '~/const/app';

export function meta({ }: Route.MetaArgs) {
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


      {/* --- DIRECT PURCHASE SERVICE SECTION --- */}
      <section className="py-32 px-6 bg-white border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          {/* Header & Intro */}
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-(--primary-color) font-bold">Premium Direct Condo Purchase Service</h2>
              <h3 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">
                เปลี่ยนทรัพย์สินของคุณ <br />
                <span className="italic text-gray-400">ให้เป็นสภาพคล่องอย่างมืออาชีพ</span>
              </h3>
            </div>
            <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl">
              การขายคอนโดไม่ควรเป็นเรื่องยุ่งยาก และไม่ควรทำให้คุณเสียเวลาเป็นปี ๆ
              Home Property Consulting คือบริษัทที่รับซื้อคอนโดโดยตรง ดำเนินการอย่างโปร่งใส
              ประเมินตามสภาพจริง และดูแลทุกขั้นตอนด้วยมาตรฐานระดับมืออาชีพ
            </p>
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-black/5 border border-black/5 mb-32">
            <div className="bg-white p-10 space-y-6">
              <div className="text-(--primary-color) font-mono text-xs tracking-widest uppercase italic">01 / Speed</div>
              <h4 className="text-xl font-medium tracking-tight">ความรวดเร็วที่คุณควบคุมได้</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li>• ไม่ต้องรอลูกค้า</li>
                <li>• ไม่ต้องลงประกาศ</li>
                <li>• ไม่ต้องเปิดห้องหลายรอบ</li>
              </ul>
              <p className="text-xs text-gray-400 leading-relaxed italic">เราสามารถสรุปผลและเสนอราคาได้รวดเร็ว เพื่อให้คุณวางแผนการเงินได้อย่างมั่นใจ</p>
            </div>

            <div className="bg-white p-10 space-y-6">
              <div className="text-(--primary-color) font-mono text-xs tracking-widest uppercase italic">02 / Expertise</div>
              <h4 className="text-xl font-medium tracking-tight">ประเมินอย่างมืออาชีพ</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                เราเชี่ยวชาญตลาดคอนโดโดยตรง เข้าใจทำเล ศักยภาพโครงการ และแนวโน้มราคา
                การประเมินของเราอิงจากข้อมูลจริง ไม่ใช่การตั้งราคาแบบคาดเดา
              </p>
            </div>

            <div className="bg-white p-10 space-y-6">
              <div className="text-(--primary-color) font-mono text-xs tracking-widest uppercase italic">03 / Transparency</div>
              <h4 className="text-xl font-medium tracking-tight">ไม่มีค่านายหน้า ไม่มีค่าใช้จ่ายแอบแฝง</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                การขายทั่วไปอาจมีค่านายหน้า 3% กับเรา ไม่มีค่าธรรมเนียมดังกล่าว คุณได้รับความชัดเจนตั้งแต่ต้น
              </p>
            </div>
          </div>

          {/* Approach & Debt Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <div className="space-y-8">
              <h3 className="text-3xl font-light tracking-tighter">เชี่ยวชาญดีลที่มีภาระธนาคาร</h3>
              <div className="grid grid-cols-1 gap-4">
                {['คอนโดติดจำนอง', 'ต้องการปิดบัญชีธนาคาร', 'ต้องการโครงสร้างการปิดหนี้ที่ปลอดภัย'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-black/[0.03] bg-[#FAF9F6]">
                    <CheckCircle2 className="w-4 h-4 text-(--primary-color)" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                เราประสานงานดูแลเอกสารครบวงจร เพื่อให้การโอนกรรมสิทธิ์เป็นไปอย่างราบรื่น
              </p>
            </div>

            <div className="bg-[#0D0D0D] p-12 text-white space-y-6 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xs uppercase tracking-[0.3em] text-(--primary-color) font-bold mb-4">Our Approach</h4>
                <h3 className="text-2xl font-light italic mb-6">"เราไม่ได้มองเพียง การซื้อทรัพย์ แต่เรามองถึง เป้าหมายทางการเงินของคุณ"</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  บางกรณีเราอาจแนะนำให้ขายทันที บางกรณีเราอาจเสนอทางเลือกที่เหมาะสมกว่า
                  เพราะความสัมพันธ์ระยะยาว สำคัญกว่าดีลระยะสั้น
                </p>
              </div>
              <Building2 className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5" />
            </div>
          </div>

          {/* Process & Target */}
          <div className="border-t border-black/5 pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-12">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold">Simple & Professional Process</h3>
                <div className="space-y-8">
                  {[
                    "ส่งรายละเอียดทรัพย์",
                    "ประเมินราคาเบื้องต้น",
                    "เสนอเงื่อนไขอย่างโปร่งใส",
                    "ตรวจสอบภาระผูกพัน",
                    "นัดโอนกรรมสิทธิ์ ณ กรมที่ดิน",
                    "รับเงินตามข้อตกลง"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <span className="text-xs font-mono text-gray-300 group-hover:text-black transition-colors">0{idx + 1}</span>
                      <div className="h-px flex-1 bg-black/5 group-hover:bg-black/20 transition-colors"></div>
                      <span className="text-sm font-medium tracking-tight uppercase">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="p-10 border border-(--primary-color)/20 rounded-sm space-y-6">
                  <h4 className="text-xl font-medium">เหมาะสำหรับ</h4>
                  <ul className="space-y-4">
                    {[
                      "เจ้าของที่ต้องการเงินก้อนอย่างรวดเร็ว",
                      "ผู้ที่ต้องการปิดภาระหนี้",
                      "มีภาระผ่อนธนาคาร / กำลังจะโดนยึด",
                      "ผู้ที่ย้ายประเทศ / ย้ายงาน และต้องการความรวดเร็ว"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600 font-light italic">
                        <span className="text-(--primary-color)">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center py-6">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">
                    Professional. Transparent. Efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className=" px-6 bg-white">
        <CondoFAQ faqs={faqData[1]} />
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-40 px-6 text-center bg-[#121212] text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter leading-tight">
            ประเมินราคาคอนโดของคุณ <br className="hidden md:block" />
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