import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Clock, X, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'การลงทุนในอสังหาริมทรัพย์',
    message: ''
  });

  // Add this function inside your ContactPage component
  const handleFinalize = async () => {
    // 1. Prepare the message for copying
    const copyMessage = `
ข้อมูลการติดต่อจากเว็บไซต์
---------------------------
ชื่อ-นามสกุล: ${formData.name}
อีเมล: ${formData.email}
หัวข้อ: ${formData.subject}
ข้อความ: ${formData.message}
---------------------------
ส่งจาก: Home Property Consulting Website
    `.trim();

    try {
      // 2. Copy to Clipboard
      await navigator.clipboard.writeText(copyMessage);

      // 3. Redirect to Line OA
      window.open("https://lin.ee/aHn58W1", "_blank");

      // 4. Close Modal
      setIsModalOpen(false);

      // Optional: Reset form
      setFormData({ name: '', email: '', subject: 'การลงทุนในอสังหาริมทรัพย์', message: '' });

      alert("คัดลอกข้อมูลเรียบร้อยแล้ว! กำลังนำคุณไปยัง LINE เพื่อส่งข้อความ...");
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback: Just open Line if copy fails
      window.open("https://lin.ee/aHn58W1", "_blank");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "ที่อยู่สำนักงาน",
      value: "46/9 ซอยสุขุมวิท 49 (กลาง) แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
      link: "https://share.google/YPHG3ALNvQJQZm47K"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "ติดต่อสอบถาม",
      value: "02 096 4653",
      link: "tel:020964653"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "อีเมลสนับสนุน",
      value: "homepropertyconsulting@gmail.com",
      link: "mailto:homepropertyconsulting@gmail.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "เวลาทำการ",
      value: "วันจันทร์ – วันศุกร์: 09:00 - 18:00 น.",
      link: null
    }
  ];

  return (
    <div className="bg-[#FAF9F6] relative min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      <div className="h-[100px] bg-(--bg-color)"></div>
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <header className="relative w-full h-screen bg-[#FAF9F6] flex items-center justify-center overflow-hidden">

        {/* Background Decorative Element: Subtle Serif Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <h2 className="text-[20vw] font-serif italic text-black/[0.02] whitespace-nowrap">
            Excellence
          </h2>
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-0">

          {/* LEFT SIDE: Visual Authority */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full aspect-[4/5] md:w-[450px] mx-auto overflow-hidden shadow-2xl"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                src="/award3.jpg"
                className="w-full h-full object-cover  transition-all duration-1000"
                alt="Academy Excellence"
              />
              {/* Absolute Border Overlay */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-black text-white p-8 hidden md:block"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] leading-none mb-2">Since</p>
              <p className="text-2xl font-serif">2015</p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content & Trust */}
          <div className="relative z-10 lg:pl-20 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 border border-black/10 rounded-full text-[9px] uppercase tracking-widest text-black/40 mb-8">
                Professional Consulting
              </span>

              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
                ก้าวสำคัญ <br />
                <span className=" italic text-black/40">สู่ความมั่นคง</span>
              </h1>

              <div className="space-y-6 max-w-sm">
                <p className="text-sm text-black/60 leading-relaxed font-light">
                  เราให้ความสำคัญกับความโปร่งใสและข้อมูลที่แม่นยำ
                  เพื่อให้ทุกการตัดสินใจด้านอสังหาริมทรัพย์ของคุณเป็นไปอย่างชาญฉลาด
                </p>

               
              </div>
            </motion.div>
          </div>

        </div>

        {/* Subtle Side Label */}
        <div className="absolute left-8 bottom-24 hidden xl:block">
          <p className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/10 -rotate-90 origin-left">
            Home Property Academy
          </p>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <header className="pt-40 pb-20 px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-6">ติดต่อเรา</h1>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">
              ร่วมวางแผน <br />
              <span className="italic text-black/20">ทรัพย์สินในอนาคตของคุณ</span>
            </h2>
          </motion.div>
        </div>
      </header>

      {/* 3. CONTACT CONTENT GRID */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-10">ช่องทางการติดต่อ</h3>
              <div className="space-y-12">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="text-black/20 group-hover:text-black transition-colors shrink-0 pt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-widest font-bold text-black/30 mb-2">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="text-lg font-light leading-snug hover:opacity-50 transition-opacity block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-light leading-snug">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 border border-black/5 shadow-sm">
            <h3 className="text-2xl font-light tracking-tighter mb-12">ส่งข้อความถึงเรา</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">ชื่อ-นามสกุล</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light"
                    placeholder="ระบุชื่อของคุณ"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">อีเมล</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light"
                    placeholder="อีเมลสำหรับการติดต่อกลับ"
                  />
                </div>
              </div>
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">หัวข้อที่ต้องการติดต่อ</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light appearance-none rounded-none cursor-pointer"
                >
                  <option>การลงทุนในอสังหาริมทรัพย์</option>
                  <option>การฝากขาย/เช่า</option>
                  <option>ขายฝาก ดอกเบี้ย 1.25%</option>
                  <option>การบริหารจัดการทรัพย์สิน</option>
                  <option>อื่นๆ</option>
                </select>
              </div>
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">ข้อความ</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light resize-none"
                  placeholder="รายละเอียดที่คุณต้องการให้เราดูแล"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center gap-4 bg-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-all active:scale-95"
              >
                ส่งข้อความ <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. MODAL OVERLAY */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg p-12 shadow-2xl border border-black/5"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-black/20 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-10">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-zinc-300" strokeWidth={1} />
                <h3 className="text-2xl font-light tracking-tighter">สรุปข้อมูลการติดต่อ</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-black/30 mt-2">ขอบคุณที่วางใจ Home Property Consulting</p>
              </div>

              <div className="space-y-6 text-sm border-t border-b border-black/5 py-8 mb-10 font-light text-black/70">
                <div className="flex justify-between gap-4">
                  <span className="font-bold text-[9px] uppercase tracking-widest text-black/30 shrink-0">ผู้ติดต่อ</span>
                  <span className="text-right">{formData.name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-bold text-[9px] uppercase tracking-widest text-black/30 shrink-0">อีเมล</span>
                  <span className="text-right">{formData.email}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-bold text-[9px] uppercase tracking-widest text-black/30 shrink-0">หัวข้อ</span>
                  <span className="text-right">{formData.subject}</span>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <span className="font-bold text-[9px] uppercase tracking-widest text-black/30 block mb-2">ข้อความของคุณ</span>
                  <p className="italic leading-relaxed">"{formData.message}"</p>
                </div>
              </div>

              <button
                onClick={handleFinalize}
                className="w-full bg-[#06C755] text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#05b34c] transition-all flex items-center justify-center gap-2"
              >
                คัดลอกข้อมูลและไปที่ LINE <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[9px] text-center text-black/40 mt-4 italic">
                *ระบบจะคัดลอกรายละเอียดของคุณโดยอัตโนมัติ เพื่อให้คุณวางข้อความใน LINE ได้ทันที
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. MAP SECTION */}
      <section className="h-[500px] w-full bg-black/5 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.766378298918!2d100.575807!3d13.732644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa47f7d3e5f%3A0xc3f5c5b9e0f3e1a0!2zU3VraHVtdml0IDQ5!5e0!3m2!1sen!2sth!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Home Property Consulting Office Location"
        />
      </section>
    </div>
  );
}