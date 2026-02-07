import React from 'react';
import { Trophy, ShieldCheck, Users, Star, ArrowUpRight } from 'lucide-react';

export default function VisionSection() {
  const visions = [
    {
      icon: <Trophy />,
      title: "ที่หนึ่งเรื่องคอนโด",
      desc: "มุ่งมั่นสู่การเป็นผู้นำอันดับหนึ่งด้านที่อยู่อาศัยและคอนโดมิเนียมในประเทศไทย"
    },
    {
      icon: <Star />,
      title: "มาตรฐานมืออาชีพ",
      desc: "ยกระดับการให้บริการสู่มาตรฐานสากล ด้วยความเชี่ยวชาญระดับมืออาชีพ"
    },
    {
      icon: <ShieldCheck />,
      title: "จรรยาบรรณ ความถูกต้อง",
      desc: "ดำเนินธุรกิจด้วยความโปร่งใส ยึดมั่นในความถูกต้องและหลักธรรมาภิบาล"
    },
    {
      icon: <Users />,
      title: "สร้างบุคลากรคุณภาพ",
      desc: "ผลิตและพัฒนาทักษะนายหน้าอสังหาริมทรัพย์ให้เป็นมืออาชีพที่ไว้วางใจได้"
    },
    {
      icon: <ArrowUpRight />,
      title: "บริการเหนือระดับ",
      desc: "มอบงานบริการที่ใส่ใจในทุกรายละเอียด เพื่อผลลัพธ์ที่เกินความคาดหวังของลูกค้า"
    }
  ];

  return (
    <section className=" py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Decorative Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--primary-color)] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Vision
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold  leading-tight">
              วิสัยทัศน์และความมุ่งมั่น <br /> 
              <span className="">ของเรา</span>
            </h3>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-[var(--primary-color)] mb-4"></div>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {visions.map((item, index) => (
            <div 
              key={index} 
              className="group  p-10 transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="w-12 h-12 mb-8 text-[var(--primary-color)] transition-transform duration-500 group-hover:scale-110">
                {React.cloneElement(item.icon as React.ReactElement, { strokeWidth: 1.5, size: 40 })}
              </div>
              
              <h4 className="text-xl font-bold  mb-4 group-hover:text-[var(--primary-color)] transition-colors">
                {item.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed font-light">
                {item.desc}
              </p>
              
              {/* Subtle accent line that grows on hover */}
              <div className="mt-8 w-0 h-[2px] bg-[var(--primary-color)] transition-all duration-500 group-hover:w-12"></div>
            </div>
          ))}
          
          {/* Final Call to Action Box (Optional) */}
         
        </div>
      </div>
    </section>
  );
}