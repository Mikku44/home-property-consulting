import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, useTransform, animate } from 'framer-motion';

// --- Counter Component for Numbers ---
function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function ProfessionalTimeline() {
  const containerRef = useRef(null);
  
  // Line Drawing Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"]
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-(--primary-color) mb-4">Professional Evolution</h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tighter">เส้นทางแห่งความสำเร็จและประสบการณ์</h3>
        </motion.div>

        <div className="relative">
          {/* 1. ANIMATED VERTICAL LINE */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/5" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-black z-0"
          />

          <div className="space-y-32 relative z-10">
            
            {/* ITEM 1: Committee Roles */}
            <TimelineItem side="left" year="2024 - 2025">
              <h4 className="text-2xl font-light mt-2 mb-4 leading-tight">บทบาทคณะกรรมการสมาคม</h4>
              <div className="space-y-2 text-black/50 text-sm font-light">
                <p>• หนึ่งในคณะกรรมการ สมาคมนายหน้าอสังหาริมทรัพย์ไทย</p>
                <p>• หนึ่งในคณะกรรมการ การขายและการตลาดอสังหาริมทรัพย์ไทย</p>
              </div>
            </TimelineItem>

            {/* ITEM 2: Speaker Roles */}
            <TimelineItem side="right" year="2023">
              <h4 className="text-2xl font-light mt-2 mb-4 leading-tight">วิทยากรและที่ปรึกษาด้านการศึกษา</h4>
              <div className="space-y-3 text-black/60 text-sm leading-relaxed">
                <p className="border-l-2 border-black/5 pl-4 italic">"แบ่งปันกลยุทธ์งานนายหน้าและงานปล่อยเช่าคอนโด"</p>
                <ul className="space-y-1 opacity-70">
                  <li>• โรงเรียนธุรกิจอสังหาริมทรัพย์</li>
                  <li>• สมาคมนายหน้าอสังหาริมทรัพย์ไทย</li>
                  <li>• สมาคมการขายและการตลาดอสังหาริมทรัพย์ไทย</li>
                </ul>
              </div>
            </TimelineItem>

            {/* ITEM 3: Winner Estate */}
            <TimelineItem side="left" year="2020 - 2024">
              <h4 className="text-2xl font-light mt-2 mb-4">Winner Estate Education</h4>
              <p className="text-sm text-black/50 font-light leading-relaxed">
                วิทยากรผู้สอนหลัก หลักสูตรการขายและเช่าบ้าน-คอนโด <br className="hidden md:block"/> 
                ปั้นตัวแทนอสังหาริมทรัพย์มืออาชีพสู่ตลาด
              </p>
            </TimelineItem>

            {/* ITEM 4: The Stats (The Final Box) */}
            <TimelineItem side="right" year="2018 - PRESENT" isLast>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#121212] text-white p-8 rounded-sm shadow-2xl relative overflow-hidden"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">The Track Record</span>
                <h4 className="text-4xl font-light tracking-tighter mt-4 mb-2">
                  <Counter from={0} to={6000} />+ Units
                </h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">ความสำเร็จในการปิดการ ขาย-เช่า-ซื้อ</p>
                
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-light">
                      <Counter from={0} to={2000} />+
                    </div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Leads / Month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] italic text-(--primary-color)">Present</div>
                  </div>
                </div>
              </motion.div>
            </TimelineItem>

          </div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Component for Timeline Animation ---
function TimelineItem({ children, side, year, isLast = false }) {
  const isLeft = side === "left";
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center w-full`}
    >
      {/* The Dot on the line */}
      <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full z-20 bg-black border-4 border-white ring-1 ring-black/10`} />
      
      {/* Content Layout */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right text-left' : 'md:order-last md:pl-16 text-left'} pl-10 md:pl-0`}>
        <span className="text-xs font-mono text-black/30 font-bold tracking-[0.2em]">{year}</span>
        <div className="mt-2">{children}</div>
      </div>
      
      {/* Empty Space for the other side */}
      <div className="md:w-1/2 hidden md:block" />
    </motion.div>
  );
}