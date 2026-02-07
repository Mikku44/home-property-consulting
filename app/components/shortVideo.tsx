import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const SHORTS_DATA = [
  {
    id: "sq9S1mF9xyE",
    title: "เสียงจากผู้เรียน THE 2-DAY WAR ROOM",
    label: "Testimonial"
  },
  {
    id: "lXU0hXUmP4c",
    title: "ก้าวแรกสู่ธุรกิจอสังหาฯ ปี 2025",
    label: "Inspiration"
  },
  {
    id: "nK_588Cz98g",
    title: "เคสโอนกรรมสิทธิ์คอนโด Mayfair S64",
    label: "Success Story"
  }
];

export default function YoutubeShortsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Guru Style */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 block mb-4"
          >
            Insights & Academy
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter italic">
            ประสบการณ์ <span className="text-black/20">ผ่านมุมมองคนทำงาน</span>
          </h2>
        </div>

        {/* Shorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHORTS_DATA.map((short, i) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* The Video Container - Set to 9:16 Aspect Ratio */}
              <div className="relative aspect-[9/16] w-full bg-black overflow-hidden shadow-2xl border border-black/5 rounded-sm">
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?modestbranding=1&rel=0`}
                  title={short.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Overlay that disappears on hover to let users click play */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 pointer-events-none flex flex-col justify-end p-8">
                  <Play className="text-white/40 w-12 h-12 mb-4 group-hover:opacity-0 transition-opacity" strokeWidth={1} />
                  <span className="text-[9px] uppercase tracking-widest text-white/60 mb-2 font-bold">{short.label}</span>
                  <p className="text-white text-lg font-light leading-snug">{short.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-12 border-t border-black/5 flex justify-between items-center">
          <p className="text-sm text-black/40 font-light max-w-xs">
            ติดตามสาระสำคัญและบรรยากาศการเรียนรู้แบบ Real-time ได้ที่ช่อง YouTube ของเรา
          </p>
          <a 
            href="https://www.youtube.com/@homepropertyconsulting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity"
          >
            Subscribe Channel
          </a>
        </div>
      </div>
    </section>
  );
}