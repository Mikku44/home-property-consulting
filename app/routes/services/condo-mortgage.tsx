import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Building2, Gavel, Handshake, ShieldCheck, Landmark, Receipt, Percent } from 'lucide-react';
import { Link } from 'react-router';


export function meta() {
  return [
    { 
      title: "บริการขายฝากคอนโด ถูกต้องตามกฎหมาย | Home Property Consulting", 
    },
    { 
      name: "description", 
      content: "บริการขายฝากคอนโดเพื่อเสริมสภาพคล่องทางธุรกิจ ดอกเบี้ยเป็นธรรม ทำสัญญา ณ กรมที่ดินถูกต้องตามกฎหมาย 100% โดยทีมที่ปรึกษา Home Property Consulting", 
    },
  ];
}

export default function SaleWithRedemptionPage() {
  const highlights = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Legal Transparency",
      desc: "ทำสัญญาและจดทะเบียน ณ สำนักงานที่ดินเท่านั้น ถูกต้องตาม พ.ร.บ. ขายฝาก พ.ศ. 2562"
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: "Fair Rates",
      desc: "รับขายฝากคอนโด ดอกเบี้ย 1.25% ต่อเดือน  ไม่มีการเก็บค่าธรรมเนียมแอบแฝง"
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Capital Liquidity",
      desc: "เปลี่ยนทรัพย์สินเป็นเงินทุนหมุนเวียนได้อย่างรวดเร็ว เพื่อโอกาสทางธุรกิจของคุณ"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="h-[70vh] relative overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto md:px-28 px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-(--primary-color)"></div>
                <span className="text-sm uppercase tracking-[0.4em] font-medium text-(--primary-color)">
                  Financial Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
               ขายฝากคอนโด ดอกเบี้ย 1.25% ต่อเดือน <br />
                <span className="italic  opacity-80">ให้ราคาประเมินสูง อนุมัติไว</span>
              </h1>
              <div className="max-w-xl p-6 bg-white/5 backdrop-blur-md border-l-2 border-(--primary-color) mt-8">
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  เสริมสภาพคล่องอย่างมั่นใจ ด้วยบริการขายฝากที่ดำเนินการโดยทีมที่ปรึกษามืออาชีพ 
                  เน้นความถูกต้องโปร่งใสในทุกขั้นตอน พร้อมปกป้องสิทธิ์ของเจ้าของทรัพย์ตามกฎหมาย
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent"></div>
        <img
          src="/client2.png" 
          className='w-full h-full object-cover opacity-40'
          alt="Professional Real Estate Legal Services"
        />
      </div>

      {/* --- CORE PRINCIPLES --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {highlights.map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-14 h-14 flex items-center justify-center border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPORTANT NOTICE / LEGAL --- */}
      <section className="py-32 px-6 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter">
              มาตรฐานการดำเนินงาน <br />
              <span className="italic text-gray-400">ตามระเบียบกรมที่ดิน</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><ShieldCheck className="w-5 h-5 text-(--primary-color)" /></div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider mb-2">สัญญาเป็นธรรม</h4>
                  <p className="text-gray-500 text-sm font-light">กำหนดระยะเวลาไถ่ถอนชัดเจน และสามารถขยายเวลาได้ตามตกลงภายใต้ขอบเขตกฎหมาย</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Receipt className="w-5 h-5 text-(--primary-color)" /></div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider mb-2">ประเมินทรัพย์สินตามจริง</h4>
                  <p className="text-gray-500 text-sm font-light">ใช้ฐานข้อมูลราคาประเมินและราคาตลาดปัจจุบัน เพื่อให้ยอดวงเงินที่เป็นธรรมที่สุด</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Building2 className="w-5 h-5 text-(--primary-color)" /></div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider mb-2">ครอบคลุมทุกทำเล CBD</h4>
                  <p className="text-gray-500 text-sm font-light">รับพิจารณาคอนโดมิเนียมในแนวรถไฟฟ้า และย่านธุรกิจสำคัญทั่วกรุงเทพฯ</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-white p-12 shadow-sm border border-black/[0.03]">
              <Scale className="w-12 h-12 mb-8 opacity-10" />
              <h3 className="text-2xl italic mb-6">"ความโปร่งใสคือหัวใจของสัญญา"</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                เรายึดถือจรรยาบรรณวิชาชีพนายหน้าอสังหาริมทรัพย์อย่างเคร่งครัด 
                การขายฝากกับ Home Property Consulting จะไม่มีการทำสัญญานอกรอบ 
                หรือข้อตกลงที่ไม่เป็นธรรมต่อผู้ขายฝากเด็ดขาด
              </p>
              <div className="h-px w-full bg-black/5 mb-8"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
                Official Certified Consultant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-40 px-6 bg-[#0a0a0a] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <Handshake className="w-16 h-16 mx-auto mb-4 opacity-30 text-(--primary-color)" />
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter leading-tight">
            ปรึกษาเรื่องการขายฝาก <br />
            และประเมินวงเงินเบื้องต้น
          </h2>
          <p className="text-white/40 font-light italic">
            ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุดตามนโยบายความเป็นส่วนตัว
          </p>
          <div className="flex flex-col items-center gap-10">
            <div className="w-px h-20 bg-white/10"></div>
            <a 
              href="https://line.me/R/ti/p/@condobkk" 
              target="_blank"
              className="px-16 py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-(--primary-color) transition-all duration-300"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}