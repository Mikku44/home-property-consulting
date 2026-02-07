import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Remark } from 'react-remark';
import { 
  ArrowLeft,  
  ChevronRight,
  Share2
} from 'lucide-react';

import { POSTS } from '~/repo/blogData';
import { Link, useNavigate, useParams } from 'react-router';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Find the post based on the URL Slug
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-black/40 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            กลับไปหน้าบทความ
          </button>
        </div>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="pt-12 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8 text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-black/10 rounded-full"></span>
              <span className="text-black/40">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-10">
              {post.title}
            </h1>

            <div className="flex justify-between items-center py-8 border-y border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold tracking-tighter">
                  HPC
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold">กองบรรณาธิการ</p>
                  <p className="text-[11px] text-black/40 uppercase tracking-widest">ใช้เวลาอ่าน {post.readTime}</p>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="p-3 hover:bg-black hover:text-white rounded-full transition-all border border-black/5 bg-white shadow-sm flex items-center gap-2"
              >
                <span className="hidden md:inline text-[10px] uppercase tracking-widest font-bold px-2">แชร์บทความ</span>
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <section className="px-8 mb-20">
        <div className="max-w-6xl mx-auto h-[50vh] md:h-[70vh] overflow-hidden bg-slate-200 rounded-sm">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={post.image} 
            className="w-full h-full object-cover"
            alt={post.title}
          />
        </div>
      </section>

      {/* 4. CONTENT BODY RENDERER */}
      <article className="px-8 pb-32">
        <div className="max-w-[720px] mx-auto">
          {/* Enhanced Thai Typography for Remark */}
          <div className="remark-content prose prose-lg prose-slate max-w-none 
            prose-headings:font-light prose-headings:tracking-tight 
            prose-p:font-light prose-p:leading-[1.8] prose-p:text-black/80 prose-p:mb-8
            prose-blockquote:border-l-[#C5A059] prose-blockquote:bg-black/5 
            prose-blockquote:py-4 prose-blockquote:font-normal prose-blockquote:italic
            prose-strong:font-bold prose-strong:text-black
            prose-hr:border-black/5">
            
            <Remark children={post?.content || ""}/>

          </div>

          {/* Tags */}
          <div className="mt-20 pt-10 border-t border-black/5 flex flex-wrap gap-3">
            {['การลงทุน', 'อสังหาริมทรัพย์', 'กรุงเทพมหานคร'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-black/5 rounded-full text-[11px] font-bold tracking-widest text-black/40">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* NOTIFICATION TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-black text-white px-8 py-4 rounded-full text-[11px] font-bold shadow-2xl"
          >
            คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว
          </motion.div>
        )}
      </AnimatePresence>

      {/* READ NEXT SECTION */}
      <section className="py-24 px-8 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/30 mb-12">เจาะลึกความรู้เพิ่มเติม</h4>
          <Link to={`/blog/${POSTS[1].slug}`} className="group block">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-80 aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <img src={POSTS[1].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Next Post" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] mb-4">{POSTS[1].category}</p>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight leading-snug group-hover:opacity-60 transition-opacity">
                  {POSTS[1].title}
                </h3>
                <div className="mt-8 flex items-center justify-center md:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest">
                  อ่านต่อ <ChevronRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}