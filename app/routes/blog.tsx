import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router';
import type { Route } from './+types/blog';

// --- Types ---
interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  readTime: string;
}

// --- Sample Data ---
const POSTS: BlogPost[] = [
  {
    id: "01",
    slug: "condo-investment-strategies-2026-yield-analysis",
    category: "Investment",
    date: "Feb 05, 2026",
    readTime: "5 min",
    title: "กลยุทธ์การเลือกคอนโดเพื่อการลงทุนในปี 2026: Yield แบบไหนที่คุ้มค่าจริง?",
    excerpt: "เจาะลึกวิเคราะห์การเปลี่ยนแปลงของตลาดอสังหาฯ หลังยุคดอกเบี้ยผันผวน และวิธีเลือกทรัพย์ที่สร้าง Cash Flow เป็นบวก...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    slug: "5-common-landlord-mistakes-rental-management",
    category: "Property Management",
    date: "Jan 28, 2026",
    readTime: "4 min",
    title: "5 ความผิดพลาดที่เจ้าของห้องมักเจอ เมื่อปล่อยเช่าด้วยตัวเอง",
    excerpt: "ทำไมการมีที่ปรึกษาบริหารจัดการทรัพย์สินถึงช่วยลดความเสี่ยงได้มากกว่า และวิธีคัดกรองผู้เช่าคุณภาพระดับพรีเมียม...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    slug: "thailand-property-tax-updates-2026",
    category: "Legal & Tax",
    date: "Jan 15, 2026",
    readTime: "7 min",
    title: "อัปเดตภาษีที่ดินและสิ่งปลูกสร้างปีล่าสุด ที่นักลงทุนควรรู้",
    excerpt: "สรุปรายละเอียดค่าธรรมเนียมการโอน ภาษีธุรกิจเฉพาะ และวิธีวางแผนภาษีอสังหาริมทรัพย์ให้ถูกต้องตามกฎหมาย...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "04",
    slug: "luxury-wellness-residence-trends-2026",
    category: "Market Trends",
    date: "Feb 07, 2026",
    readTime: "6 min",
    title: "เทรนด์ Wellness Residence: เมื่อบ้านไม่ได้เป็นเพียงที่พัก แต่คือ 'สินทรัพย์เพื่อสุขภาพ'",
    excerpt: "ทำไมอสังหาฯ แนวสุขภาพถึงมีมูลค่าพุ่งสูงขึ้นอย่างรวดเร็วในปีนี้ และเจาะลึกทำเลรอบกรุงเทพฯ ที่น่าจับตามองสำหรับนักลงทุนสายเน้นคุณภาพชีวิต...",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "05",
    slug: "how-to-sell-condo-bts-onnuch-best-price",
    category: "Selling Guide",
    date: "Feb 10, 2026",
    readTime: "8 min",
    title: "วิธีขายคอนโด BTS อ่อนนุช ให้ได้ราคาดีที่สุด: คู่มือครบถ้วนสำหรับเจ้าของอสังหาฯ",
    excerpt: "ทำเลดี ราคาแข่งขันได้ แต่ต้องรู้กลยุทธ์ที่ถูกต้อง ดูวิธีการขายคอนโด BTS อ่อนนุชให้ได้ราคาสูงสุด พร้อมเทคนิคลับและขั้นตอนที่ผู้ขายต้องรู้...",
    image: "/poster (11).jpg"
  },
  {
    id: "06",
    slug: "condo-deposit-interest-1-25-percent-better",
    category: "Investment Strategy",
    date: "Feb 10, 2026",
    readTime: "7 min",
    title: "ขายฝากคอนโด ดอกเบี้ย 1.25% ดีกว่าแบบอื่นยังไง? วิเคราะห์ทางเลือกสำหรับเจ้าของคอนโด",
    excerpt: "ดอกเบี้ย 1.25% ต่ำกว่าธนาคาร แต่ดีกว่าการเช่าอยู่หรือ? เปรียบเทียบเชิงลึกระหว่าง 'ขายฝาก' 'เช่า' และ 'ขายสด' พร้อมตัวเลขและกลยุทธ์ที่ผู้มีคอนโดต้องรู้...",
    image: "/blog.jpg"
  },
   {
  id: "07",
  slug: "buying-selling-condo-bts-onnuch-guide",
  category: "Real Estate Transaction",
  date: "Feb 10, 2026",
  readTime: "9 min",
  title: "รับซื้อขายคอนโด BTS อ่อนนุช: คู่มือเต็มอบรมสำหรับผู้ซื้อและผู้ขาย",
  excerpt: "BTS อ่อนนุช เป็นตลาดคอนโดยอดนิยมในกรุงเทพฯ ราคา 2.5-7 ล้านบาท ขึ้นอยู่กับประเภท ดูคู่มือเต็มสำหรับผู้ซื้อและผู้ขายพร้อมราคาตลาด ขั้นตอน และเทคนิคการต่อรอง...",
  image: "/poster (16).jpg"
}
];

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "คลังความรู้และบทวิเคราะห์อสังหาริมทรัพย์ | Home Property Consulting",
    },
    {
      name: "description",
      content: "เจาะลึกเทรนด์ตลาดคอนโด กลยุทธ์การลงทุน และอัปเดตกฎหมายอสังหาฯ ปี 2026 โดยทีม Condo Specialists เพื่อให้คุณตัดสินใจลงทุนได้อย่างแม่นยำ",
    },
    {
      name: "keywords",
      content: "บทความอสังหาริมทรัพย์, วิเคราะห์ตลาดคอนโด 2026, วางแผนภาษีที่ดิน, เทรนด์อสังหาฯ, วิธีเลือกคอนโดลงทุน, Creative Tour Guru",
    },

    // Open Graph - สำหรับแชร์หน้าคลังความรู้ลง Social Media
    {
      property: "og:title",
      content: "Insight & Knowledge: ติดอาวุธความรู้ก่อนลงทุนอสังหาฯ",
    },
    {
      property: "og:description",
      content: "รวมบทความคุณภาพและสรุปสาระสำคัญที่คุณต้องรู้ เกี่ยวกับตลาดคอนโดและการบริหารสินทรัพย์อย่างมืออาชีพ",
    },
    {
      property: "og:type",
      content: "website",
    },

    {
      property: "og:url",
      content: "https://www.homepropertyconsultinglimited.com/blog",
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Property Investment Knowledge Base",
    },
  ];
}

export default function BlogPage() {
  // const [activeCategory, setActiveCategory] = useState('All');
  // const categories = ['All', 'Investment', 'Management', 'Legal', 'Market Update'];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      <div className="h-[100vh] relative overflow-hidden bg-(--bg-color)">
        {/* 1. ANIMATED TEXT CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto md:px-28 px-6 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative Background Text (Floating Knowledge) */}
              <span className="absolute -top-16 left-0 text-[12vw] font-serif italic text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
                The Archive
              </span>

              <div className="space-y-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-[2px] bg-(--primary-color) mb-4"
                />

                <h2 className="text-xl md:text-2xl font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Knowledge
                </h2>

                <h1 className="text-6xl md:text-[100px] font-light text-white tracking-tighter leading-none">
                  บทความ <br />
                  <span className="italic scale-75 text-white/80">น่ารู้และสาระสำคัญ</span>
                </h1>
              </div>

              {/* Categories Tag Cloud - Modern Touch */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4 mt-10"
              >
                {['Market Insight', 'Investment', 'Legal', 'Lifestyle'].map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 2. ATMOSPHERIC GRADIENT */}
        {/* Deep gradient for text readability and cinematic exit to page content */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-(--bg-color) via-black/40 to-black/10"></div>

        {/* 3. PARALLAX IMAGE COMPONENT */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/blog.avif"
            className='w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]'
            alt="Real Estate Knowledge Base"
          />
        </motion.div>

        {/* 4. DESIGN ELEMENT: Vertical Section Indicator */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 opacity-20">
          <div className="w-[1px] h-20 bg-white"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] -rotate-90 origin-center whitespace-nowrap text-white">
            Scroll to Read
          </span>
        </div>
      </div>
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

      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-7 overflow-hidden bg-black">
              {/* Wrap Image in Link */}
              <Link to={`/blog/${POSTS[0].slug}`}>
                <img
                  loading='lazy'
                  src={POSTS[0].image}
                  alt="Featured"
                  className="w-full aspect-[16/9] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale-[50%] group-hover:grayscale-0 cursor-pointer"
                />
              </Link>
            </div>

            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{POSTS[0].category}</span>
                <span className="w-8 h-px bg-black/10"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{POSTS[0].date}</span>
              </div>

              {/* Wrap Title in Link */}
              <Link to={`/blog/${POSTS[0].slug}`}>
                <h3 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 group-hover:opacity-60 transition-opacity cursor-pointer">
                  {POSTS[0].title}
                </h3>
              </Link>

              <p className="text-sm text-black/50 leading-relaxed font-light mb-8">
                {POSTS[0].excerpt}
              </p>

              {/* The Action Link */}
              <Link
                to={`/blog/${POSTS[0].slug}`}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-all w-fit"
              >
                Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 3. RECENT POSTS GRID */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 border-t border-black/5 pt-20">
            {POSTS.slice(1).map((post, i) => {
              const postSlug = post.slug;

              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${postSlug}`}>
                    <div className="aspect-[4/5] bg-black overflow-hidden mb-8 cursor-pointer">
                      <img
                        loading='lazy'
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale-[100%] group-hover:grayscale-0"
                      />
                    </div>
                  </Link>

                  <div className="flex justify-between items-center mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link to={`/blog/${postSlug}`}>
                    <h4 className="text-xl font-light tracking-tighter leading-snug mb-4 group-hover:text-black/60 transition-colors cursor-pointer">
                      {post.title}
                    </h4>
                  </Link>

                  <div className="w-0 group-hover:w-full h-px bg-black/20 transition-all duration-500"></div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-4">Visual Journal</h2>
            <h3 className="text-4xl font-light tracking-tighter">Market <span className="italic">Insights</span></h3>
          </div>
          <div className="flex gap-4 mb-2">
            {/* Custom Navigation buttons could go here */}
            <span className="text-[10px] uppercase tracking-widest opacity-30">Drag to Explore —&gt;</span>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          // ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-8 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {Array.from({ length: 21 }).map((_, index) => (
            <motion.div
              key={index}
              className="flex-none w-[85vw] md:w-[400px] snap-center"
            >
              <div className="aspect-square bg-[#F5F5F5] overflow-hidden group relative border border-black/5">
                <img
                  loading='lazy'
                  src={`/poster (${index + 1}).jpg`}
                  alt={`Insight ${index + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Number Indicator */}
                <div className="absolute top-4 right-4 text-[10px] font-serif italic text-white/50">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Property Series</h4>
                <p className="text-[9px] text-black/40 uppercase tracking-widest mt-1">Home Property Consulting Company Limited</p>
              </div>
            </motion.div>
          ))}
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