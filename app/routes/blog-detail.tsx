import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Share2, 
  Clock, 
  Calendar, 
  ChevronRight,
  Facebook,
  Twitter,
  Link as LinkIcon
} from 'lucide-react';

export default function BlogDetailPage() {
  // สมมติข้อมูลบทความ (Mock Data)
  const post = {
    category: "Investment Strategy",
    date: "Feb 05, 2026",
    readTime: "6 min read",
    title: "เจาะลึกกลยุทธ์การเลือกคอนโดเพื่อการลงทุนในปี 2026: Yield แบบไหนที่คุ้มค่าจริง?",
    author: "Investment Team",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* 1. TOP NAVIGATION (Back to Blog) */}
      <nav className="pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <button className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </button>
        </div>
      </nav>

      {/* 2. ARTICLE HEADER */}
      <header className="pt-12 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8 text-[10px] font-bold uppercase tracking-widest text-yellow-500">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-black/10 rounded-full"></span>
              <span className="text-black/40">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] mb-10">
              {post.title}
            </h1>

            <div className="flex justify-between items-center py-8 border-y border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  HPC
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">By {post.author}</p>
                  <p className="text-[10px] text-black/40 uppercase tracking-widest">{post.readTime}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-black hover:text-white rounded-full transition-all border border-black/5">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. FEATURED IMAGE */}
      <section className="px-8 mb-20">
        <div className="max-w-6xl mx-auto h-[60vh] overflow-hidden bg-slate-200">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={post.image} 
            className="w-full h-full object-cover grayscale-[30%]"
            alt="Article Visual"
          />
        </div>
      </section>

      {/* 4. CONTENT BODY */}
      <article className="px-8 pb-32">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg prose-slate max-w-none font-light leading-relaxed text-black/80">
            <p className="text-xl font-medium leading-relaxed mb-10">
              ในสภาวะตลาดอสังหาริมทรัพย์ปี 2026 ที่มีการปรับตัวของอัตราดอกเบี้ยและพฤติกรรมผู้บริโภคที่เปลี่ยนไป การมองหาเพียง 'ทำเลดี' อาจไม่เพียงพออีกต่อไปสำหรับการสร้างผลตอบแทนที่ยั่งยืน...
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-16 mb-6 text-black">1. การวิเคราะห์ Yield ในยุค New Normal</h2>
            <p className="mb-8 italic border-l-4 border-black/10 pl-6 py-2 text-black/60">
              "ตัวเลข Gross Yield อาจดูสวยงามบนหน้ากระดาษ แต่ Net Cash Flow คือสิ่งที่นักลงทุนตัวจริงต้องให้ความสำคัญ"
            </p>
            <p className="mb-8">
              การคำนวณผลตอบแทนต้องครอบคลุมถึงค่าส่วนกลาง ภาษีที่ดิน และค่าบำรุงรักษาประจำปี ทีมงาน Home Property Consulting พบว่าคอนโดระดับ Mid-tier ในโซนสุขุมวิทตอนกลางยังคงรักษาระดับ Yield ได้ที่ 4.5-5.2%...
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-16 mb-6 text-black">2. ปัจจัยด้าน Property Management</h2>
            <p className="mb-8">
              หนึ่งใน Key Success ที่มักถูกมองข้ามคือการบริหารจัดการทรัพย์สิน การมีทีมงานมืออาชีพคัดกรองผู้เช่าจะช่วยลดอัตราการว่าง (Vacancy Rate) ได้อย่างมีนัยสำคัญ...
            </p>
          </div>

          {/* Tags */}
          <div className="mt-20 pt-10 border-t border-black/5 flex flex-wrap gap-3">
            {['Investment', 'BangkokCondo', 'RealEstate2026', 'HPCInsights'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/40">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* 5. NEXT ARTICLE PREVIEW */}
      <section className="py-24 px-8 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-4">Read Next</h4>
              <h5 className="text-3xl font-light tracking-tighter">บทความที่คุณอาจสนใจ</h5>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-64 aspect-video overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="next post" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2 block">Management // Jan 28, 2026</span>
                <h6 className="text-xl font-medium tracking-tight group-hover:text-blue-600 transition-colors">5 ความผิดพลาดที่เจ้าของห้องมักเจอ เมื่อปล่อยเช่าด้วยตัวเอง</h6>
                <p className="text-sm text-black/40 mt-3 flex items-center gap-2">
                  Continue Reading <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER CTA (MINI) */}
      <section className="py-20 px-8 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 opacity-40">Get Insights</h4>
          <p className="text-xl font-light italic mb-8">รับบทวิเคราะห์เจาะลึกส่งตรงถึงอีเมลคุณ</p>
          <div className="flex border-b border-white/20 pb-2 max-w-md mx-auto">
            <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full text-[10px] tracking-widest focus:outline-none" />
            <button className="text-[10px] font-bold uppercase tracking-widest ml-4">Join</button>
          </div>
        </div>
      </section>
    </div>
  );
}