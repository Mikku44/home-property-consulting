import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target, ArrowDown } from 'lucide-react';

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
      
      {/* 1. HERO SECTION - MISSION STATEMENT */}
      <header className="relative pt-48 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-8">About Home Property Consulting</h1>
            <h2 className="text-5xl md:text-[5rem] font-light tracking-tighter leading-[0.95] mb-12">
              Expertise that <br /> 
              <span className="italic text-black/20">Builds Trust.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-light max-w-3xl leading-relaxed italic">
              "บริการด้วยใจ บริการแบบมืออาชีพ ผู้เชี่ยวชาญเรื่องคอนโดทั่วกรุงเทพฯ"
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Decorative Background Text */}
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 select-none pointer-events-none opacity-[0.02] hidden lg:block">
          <span className="text-[20rem] font-black tracking-tighter">EST. 2026</span>
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
        <button className="group relative overflow-hidden px-16 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em]">
           <span className="relative z-10">Get to Know Us Better</span>
           <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
}