import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Filter } from 'lucide-react';

// --- Types ---
interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

// --- Sample Data ---
const POSTS: BlogPost[] = [
  {
    id: "01",
    category: "Investment",
    date: "Feb 05, 2026",
    readTime: "5 min",
    title: "กลยุทธ์การเลือกคอนโดเพื่อการลงทุนในปี 2026: Yield แบบไหนที่คุ้มค่าจริง?",
    excerpt: "เจาะลึกวิเคราะห์การเปลี่ยนแปลงของตลาดอสังหาฯ หลังยุคดอกเบี้ยผันผวน และวิธีเลือกทรัพย์ที่สร้าง Cash Flow เป็นบวก...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    category: "Property Management",
    date: "Jan 28, 2026",
    readTime: "4 min",
    title: "5 ความผิดพลาดที่เจ้าของห้องมักเจอ เมื่อปล่อยเช่าด้วยตัวเอง",
    excerpt: "ทำไมการมีที่ปรึกษาบริหารจัดการทรัพย์สินถึงช่วยลดความเสี่ยงได้มากกว่า และวิธีคัดกรองผู้เช่าคุณภาพระดับพรีเมียม...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    category: "Legal & Tax",
    date: "Jan 15, 2026",
    readTime: "7 min",
    title: "อัปเดตภาษีที่ดินและสิ่งปลูกส่งปีล่าสุด ที่นักลงทุนควรรู้",
    excerpt: "สรุปรายละเอียดค่าธรรมเนียมการโอน ภาษีธุรกิจเฉพาะ และวิธีวางแผนภาษีอสังหาริมทรัพย์ให้ถูกต้องตามกฎหมาย...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Investment', 'Management', 'Legal', 'Market Update'];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* 1. BLOG HEADER & FILTER */}
      <header className="pt-40 pb-16 px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-6">Journal & Insights</h1>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">Knowledge <br /> <span className="italic text-black/20">for Asset Growth.</span></h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`transition-colors ${activeCategory === cat ? 'text-black border-b border-black pb-1' : 'text-black/30 hover:text-black'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-64 group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 group-focus-within:text-black transition-colors" />
                <input 
                  type="text" 
                  placeholder="SEARCH INSIGHTS..." 
                  className="w-full bg-transparent border-b border-black/10 py-2 pl-8 text-[10px] uppercase tracking-widest focus:outline-none focus:border-black transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. FEATURED ARTICLE (Full Width) */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.article 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-7 overflow-hidden bg-black">
              <img 
                src={POSTS[0].image} 
                alt="Featured" 
                className="w-full aspect-[16/9] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale-[50%] group-hover:grayscale-0"
              />
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{POSTS[0].category}</span>
                <span className="w-8 h-px bg-black/10"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{POSTS[0].date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 group-hover:opacity-60 transition-opacity">
                {POSTS[0].title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed font-light mb-8">
                {POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 3. RECENT POSTS GRID */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 border-t border-black/5 pt-20">
            {POSTS.slice(1).concat(POSTS[0]).map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-black overflow-hidden mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale-[100%] group-hover:grayscale-0"
                  />
                </div>
                <div className="flex justify-between items-center mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-xl font-light tracking-tighter leading-snug mb-4 group-hover:text-black/60 transition-colors">
                  {post.title}
                </h4>
                <div className="w-0 group-hover:w-full h-px bg-black/20 transition-all duration-500"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER - MINIMALIST */}
      <section className="py-32 px-8 bg-[#121212] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 opacity-40 text-blue-400">Newsletter</h2>
          <h3 className="text-3xl md:text-5xl font-light tracking-tighter mb-12 italic">
            รับบทวิเคราะห์ตลาดรายสัปดาห์ <br /> ส่งตรงถึงอีเมลของคุณ
          </h3>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-[10px] tracking-widest focus:outline-none focus:border-white/40 transition-all"
            />
            <button className="px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}