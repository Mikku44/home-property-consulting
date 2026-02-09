import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target, ArrowDown } from 'lucide-react';
import YoutubeShortsSection from '~/components/shortVideo';
import ProfessionalTimeline from './about/ProfessionalTimeline';
import { Link } from 'react-router';

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Professional Team",
      desc: "ทีมงานที่มีความเชี่ยวชาญและประสบการณ์สูงระดับมืออาชีพ พร้อมดูแลคุณด้วยใจ"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Tailored Selection",
      desc: "ทุ่มเทคัดสรรอสังหาริมทรัพย์ให้ได้ตรงตามความต้องการของลูกค้าและนักลงทุนอย่างแม่นยำ"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Full-Service Advisory",
      desc: "ที่ปรึกษาด้านการลงทุนแบบครบวงจร ทั้งการซื้อ เช่า และบริหารการขายอย่างมีกลยุทธ์"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      <div className="h-[100vh] relative overflow-hidden bg-[#0a0a0a]">
        {/* 1. TEXT CONTENT - Refined for Authority */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto md:px-28 px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Label with Line - Classic Consultant Branding */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-(--primary-color)"></div>
                <span className="text-sm uppercase tracking-[0.4em] font-medium text-(--primary-color)">
                  About Us
                </span>
              </div>

              {/* Main Heading - Using Serifs and Spacing */}
              <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none">
                เกี่ยวกับ <br />
                <div className="text-5xl opacity-90 tracking-normal  w-[600px]">
                  Home Property Consulting Company Limited
                  </div>
              </h1>

              {/* Trust Subtext - New element for "Guru" feel */}
              <p className="max-w-md text-white/40 text-sm font-light leading-relaxed pt-4 border-t border-white/10 mt-8">
                ความเชี่ยวชาญที่ส่งต่อจากรุ่นสู่รุ่น เพื่อยกระดับมาตรฐาน <br />
                การลงทุนอสังหาริมทรัพย์ในประเทศไทยให้ก้าวไกลกว่าที่เคย
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. GRADIENT MASK - Deeper and more professional */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent"></div>

        {/* 3. IMAGE COMPONENT - With subtle parallax motion */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }} // Slow "Ken Burns" effect
          src="/about.jpg"
          className='w-full h-full object-cover opacity-80'
          alt="Home Property Academy Team and Heritage"
        />

        {/* 4. DESIGN ELEMENT - Floating vertical indicator */}
        <div className="absolute right-12 bottom-0 h-1/3 w-[1px] bg-gradient-to-b from-transparent to-(--primary-color) hidden md:block opacity-50"></div>
      </div>
      {/* 1. HERO SECTION - MISSION STATEMENT */}
     <header className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-6 bg-[#FAF9F6] border-b border-black/[0.03] overflow-hidden">
      
      {/* Background Decor - hidden on mobile to prevent horizontal scroll */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 select-none pointer-events-none hidden xl:block">
        <span className="text-[20rem] font-black tracking-tighter text-black/[0.015]">
          EST. 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Area */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-6 md:space-y-10">
              {/* Label */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 md:w-12 bg-(--primary-color)" />
                <h1 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">
                  Home Property Consulting
                </h1>
              </div>

              {/* Responsive Heading - Using Clamp to prevent overflow */}
              <h2 className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] font-light tracking-tighter leading-[1.1] text-gray-900">
                Expertise that <br />
                <span className="italic font-serif text-(--primary-color)/80 block sm:inline">Builds Trust.</span>
              </h2>

              {/* Thai Subtext */}
              <div className="pt-4 md:pt-6">
                <p className="text-lg md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed italic border-l-[3px] border-(--primary-color) pl-5 md:pl-8">
                  "บริการด้วยใจ บริการแบบมืออาชีพ <br className="hidden sm:block"/>
                  ผู้เชี่ยวชาญเรื่องคอนโดทั่วกรุงเทพฯ"
                </p>
              </div>
            </div>
          </div>

          {/* Award Image Area */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative p-4 md:pt-12 md:pr-12 inline-block">
              {/* Ghost Block */}
              <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-black/[0.02] -z-10 rounded-sm hidden md:block" />
              
              <div className="relative bg-white shadow-xl border border-gray-100 p-1">
                <img 
                  src="/awart-cert.jpg" 
                  className="w-full max-w-[260px] md:max-w-[320px] h-auto block" 
                  alt="Professional Certification" 
                />
                
                {/* Floating Authority Tag */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-black text-white px-4 py-3 md:px-6 md:py-4 shadow-2xl">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold mb-1 opacity-60">Verified</p>
                  <p className="text-[10px] md:text-xs italic text-(--primary-color)">Official Certified</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Details - Hidden on very small screens */}
      <div className="absolute bottom-8 left-6 md:left-8 hidden sm:block">
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest font-bold text-black/20">Location</span>
            <span className="text-[10px] md:text-[11px] font-medium">Bangkok, Thailand</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest font-bold text-black/20">Focus</span>
            <span className="text-[10px] md:text-[11px] font-medium">Luxury Condominiums</span>
          </div>
        </div>
      </div>
    </header>

      {/* 2. CORE NARRATIVE SECTION */}
      <section className="py-32 px-8 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden ">
              <img
                src="trophy.webp"
                alt="Professional consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Our Identity</h3>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-black/70">
              <p>
                บริษัท โฮม พร็อพเพอร์ คอนซัลติ้ง จำกัด ดำเนินธุรกิจตัวแทนอสังหาริมทรัพย์ระดับแนวหน้า
                ที่มุ่งเน้นการให้บริการเป็นที่ปรึกษาด้านการลงทุนแบบครบวงจร
                ครอบคลุมทั้งการแนะนำเรื่องซื้อ เช่า และรับฝากขาย-ปล่อยเช่า
              </p>
              <p>
                ด้วยประสบการณ์ที่สั่งสมมายาวนานและทีมงานที่มีความเชี่ยวชาญสูง
                เราจึงไม่ใช่เพียงแค่ตัวแทนขาย แต่เราคือ <span className="text-black font-medium">"Condo Specialists"</span> ที่พร้อมคัดสรรสิ่งที่ดีที่สุดให้กับทั้งลูกค้าที่มองหาที่อยู่อาศัยและนักลงทุนที่ต้องการความคุ้มค่า
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-32 px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT: Image Area --- */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden bg-gray-200"
            >
              <img 
                src="/ceo-home-property-consulting.jpg" // Replace with actual CEO image
                alt="นันทนัช ศรีพัชรพัชร์ (นุ่น)"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </motion.div>
            
            {/* Subtle decorative box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-black/5 -z-10 hidden md:block" />
          </div>

          {/* --- RIGHT: Content Area --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-(--primary-color)">
                  Visionary Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-gray-900 leading-tight">
                  นันทนัช ศรีพัชรพัชร์ (นุ่น)
                </h2>
                <p className="text-lg italic text-gray-400">CEO and Founder</p>
              </div>

              <div className="h-px w-20 bg-black/10" />

              <div className="space-y-6">
                <p className="text-xl text-gray-800 font-light leading-relaxed">
                  <span className="font-medium text-black">Home Property Consulting Co.,Ltd.</span> 
                  <br className="hidden md:block"/> ภายใต้การนำของคุณนุ่น มุ่งเน้นการยกระดับมาตรฐานตัวแทนอสังหาริมทรัพย์ในไทย
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    "คณะกรรมการ สมาคมนายหน้าอสังหาริมทรัพย์ไทย",
                    "คณะกรรมการ การขายและการตลาดอสังหาไทย",
                    "วิทยากร วินเนอร์ เอสเตท เอ็ดดูเคชั่น",
                    "วิทยากร โรงเรียนธุรกิจอสังหาริมทรัพย์ไทย"
                  ].map((role, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="h-1.5 w-1.5 rounded-full bg-(--primary-color) mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-sm text-gray-500 font-light leading-snug">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10">
                <p className="text-gray-400 text-sm font-light italic border-l-2 border-gray-100 pl-6 py-2">
                  "ความสำเร็จของลูกค้า คือหัวใจสำคัญของการทำงานในฐานะที่ปรึกษาด้านอสังหาริมทรัพย์"
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>

      <YoutubeShortsSection />

      <ProfessionalTimeline />

      {/* 3. VALUES & PROMISE */}
      <section className="py-32 px-8 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-6 opacity-40">Our Professional Values</h4>
            <h5 className="text-3xl md:text-5xl font-light tracking-tighter italic">ทุ่มเทคัดสรร เพื่อผลลัพธ์ที่ดีที่สุด</h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-white/10 hover:border-white/30 transition-all flex flex-col items-center text-center group"
              >
                <div className="mb-8 text-white/30 group-hover:text-white transition-colors">
                  {val.icon}
                </div>
                <h6 className="text-xs uppercase tracking-widest font-bold mb-4">{val.title}</h6>
                <p className="text-sm font-light leading-relaxed text-white/50 group-hover:text-white/80 transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISIONARY FOOTER */}
      <section className="py-40 px-8 text-center bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-light tracking-tighter leading-tight mb-12">
            “ที่นี่เราทุ่มเทคัดสรรอสังหาริมทรัพย์ <br />
            ให้ได้ตามที่ลูกค้าต้องการ... เพื่อความมั่นคงในอนาคตของคุณ”
          </h3>
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-px h-20 bg-black/10"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30">Home Property Consulting</span>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <div className="py-20 px-8 flex justify-center border-t border-black/5">
        <Link to="/contact" className="group relative overflow-hidden px-16 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em]">
          <span className="relative z-10">Get to Know Us Better</span>
          <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </div>
    </div>
  );
}