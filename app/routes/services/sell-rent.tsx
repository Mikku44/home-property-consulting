import { motion } from 'framer-motion';
import { Camera, Megaphone,  Key, Search, BarChart3, Users2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import type { Route } from './+types/sell-rent';

export function meta({}: Route.MetaArgs) {
  return [
    { 
      title: "ฝากขาย-ฝากเช่าคอนโด มืออาชีพ | Home Property Consulting", 
    },
    { 
      name: "description", 
      content: "บริการรับฝากขายและปล่อยเช่าคอนโดระดับพรีเมียม โดยทีมงาน Condo Specialists ดูแลการตลาดครบวงจร ถ่ายภาพโปรโปรเฟสชันแนล และคัดกรองผู้เช่าคุณภาพ", 
    },
  ];
}

export default function ListingPage() {
  const services = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Media",
      desc: "บริการถ่ายภาพและวิดีโอระดับมืออาชีพ เพื่อดึงความโดดเด่นของทรัพย์สินคุณออกมาให้มากที่สุด"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Targeted Marketing",
      desc: "วางแผนการตลาดออนไลน์และออฟไลน์ ตรงกลุ่มเป้าหมาย ทั้งลูกค้าชาวไทยและชาวต่างชาติ (Expat)"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Tenant Screening",
      desc: "คัดกรองผู้เช่าที่มีคุณภาพ ตรวจสอบประวัติ และดูแลเรื่องสัญญาเช่าที่เป็นธรรมแก่ทุกฝ่าย"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Analysis",
      desc: "วิเคราะห์ราคาตลาดเชิงลึก เพื่อตั้งราคาที่เหมาะสมและสามารถปิดการขาย/เช่า ได้รวดเร็วที่สุด"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="h-[80vh] relative overflow-hidden bg-[#0a0a0a]">
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
                  Consignment Services
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
                ฝากขาย / ปล่อยเช่า <br />
                <span className="italic font-serif opacity-80">With Premium Marketing</span>
              </h1>
              <p className="max-w-md text-white/50 text-sm font-light leading-relaxed pt-4 border-t border-white/10 mt-8">
                ยกระดับการนำเสนออสังหาริมทรัพย์ของคุณ <br />
                ผ่านเครือข่ายนักลงทุนและระบบการตลาดที่ทรงพลังที่สุด
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
        <img
          src="/sell.png" 
          className='w-full h-full object-cover opacity-50'
          alt="Luxury Condo Marketing"
        />
      </div>

      {/* --- CORE SERVICES GRID --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-tight">
                    ทำไมต้องฝากทรัพย์ <br />
                    กับ <span className="text-(--primary-color)">Home Property?</span>
                </h2>
            </div>
            <div className="lg:col-span-7">
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                    เราไม่ใช่แค่ผู้ลงประกาศขาย (Listing Agent) แต่เราคือผู้ดูแลทรัพย์สินแบบครบวงจร 
                    ด้วยประสบการณ์กว่า 10 ปีในย่าน CBD เราเข้าใจพฤติกรรมลูกค้าและรู้วิธีการปิดดีลให้ได้ผลตอบแทนสูงสุด
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 border border-black/[0.05] hover:border-(--primary-color)/30 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#FAF9F6] mb-6 group-hover:text-black transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATISTICS SECTION (Social Proof) --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                <div className="space-y-2">
                    <span className="text-4xl md:text-6xl font-light text-(--primary-color)">10+</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Years of Expertise</p>
                </div>
                <div className="space-y-2">
                    <span className="text-4xl md:text-6xl font-light text-(--primary-color)">1,000+</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Properties Listed</p>
                </div>
                <div className="space-y-2">
                    <span className="text-4xl md:text-6xl font-light text-(--primary-color)">500+</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Trusted Landlords</p>
                </div>
                <div className="space-y-2">
                    <span className="text-4xl md:text-6xl font-light text-(--primary-color)">24hr</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Fast Response</p>
                </div>
            </div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[15rem] font-bold whitespace-nowrap">CONSULTING</span>
        </div>
      </section>

      {/* --- STEPS TO SUCCESS --- */}
      <section className="py-32 px-6 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            <div className="flex items-start gap-8">
              <span className="text-4xl font-serif italic text-black/10">01</span>
              <div>
                <h4 className="text-xl font-medium mb-2">ลงทะเบียนทรัพย์สิน</h4>
                <p className="text-gray-500 font-light">เพียงส่งรายละเอียดและรูปถ่ายเบื้องต้นผ่านระบบหรือ Line OA ทีมงานจะติดต่อกลับเพื่อขอข้อมูลเพิ่มเติมทันที</p>
              </div>
            </div>
            <div className="flex items-start gap-8 border-t border-black/5 pt-16">
              <span className="text-4xl font-serif italic text-black/10">02</span>
              <div>
                <h4 className="text-xl font-medium mb-2">ประเมินและจัดทำสื่อ</h4>
                <p className="text-gray-500 font-light">ทีมงานเข้าสำรวจหน้างานจริง พร้อมให้คำปรึกษาด้านการตกแต่งและถ่ายภาพ Property Photography ระดับมืออาชีพ</p>
              </div>
            </div>
            <div className="flex items-start gap-8 border-t border-black/5 pt-16">
              <span className="text-4xl font-serif italic text-black/10">03</span>
              <div>
                <h4 className="text-xl font-medium mb-2">เริ่มแคมเปญการตลาด</h4>
                <p className="text-gray-500 font-light">นำทรัพย์ของคุณขึ้นระบบ Multi-Channel Marketing ทั้งเว็บต่างชาติ, Social Media และเครือข่าย Agent พันธมิตร</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 px-6 text-center border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <Users2 className="w-12 h-12 mx-auto mb-8 text-black opacity-20" />
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter leading-tight mb-12">
            ให้ทรัพย์สินของคุณ <br />
            ได้รับการดูแลจากมืออาชีพตัวจริง
          </h2>
          <div className="flex flex-col items-center gap-10">
            <Link to="/contact" className="group relative overflow-hidden px-16 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em]">
              <span className="relative z-10">เริ่มฝากขาย / ฝากเช่า</span>
              <div className="absolute inset-0 bg-(--primary-color) translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-(--primary-color)" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Safe & Legal</span>
                </div>
                <div className="flex items-center gap-2">
                    <Key className="w-4 h-4 text-(--primary-color)" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Premium Quality</span>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}