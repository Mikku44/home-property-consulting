import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';
import { PAST_WORKS } from '~/const/app';

export function meta() {
  return [
    { 
      title: "ผลงานที่ผ่านมาและความสำเร็จ | Home Property Consulting", 
    },
    { 
      name: "description", 
      content: "สำรวจความสำเร็จและผลงานการดูแลลูกค้าของเรา ทั้งการปิดการขาย-เช่า คอนโดมิเนียมระดับ Luxury และการบริหารพอร์ตอสังหาฯ ที่ได้รับความไว้วางใจจากนักลงทุนกว่า 100 ราย", 
    },
    { 
      name: "keywords", 
      content: "ผลงาน Home Property Consulting, รีวิวลูกค้า, ปิดการขายคอนโด, บริหารการเช่าสำเร็จ, Condo Specialist Thailand, ความสำเร็จการลงทุนอสังหา", 
    },

    // Open Graph - แสดงความน่าเชื่อถือเมื่อแชร์ลิงก์
    { 
      property: "og:title", 
      content: "Proven Results: ผลงานจริงจากทีมงาน Home Property Consulting", 
    },
    { 
      property: "og:description", 
      content: "เราไม่ได้แค่พูด แต่เราทำจริง ดูสถิติการปิดการขายและเคสตัวอย่างความสำเร็จของลูกค้าที่ไว้วางใจให้เราดูแล", 
    },
    { 
      property: "og:type", 
      content: "website", 
    },
    { 
      property: "og:image", 
      content: "https://www.homepropertyconsultinglimited.com/trophy.webp", // แนะนำให้ใช้รูปที่รวมโลโก้โครงการดังๆ ที่เคยปิดดีลได้
    },
    { 
      property: "og:site_name", 
      content: "Home Property Consulting", 
    },

    // Twitter Card
    { 
      name: "twitter:card", 
      content: "summary_large_image", 
    },
    { 
      name: "twitter:title", 
      content: "Our Success Stories | Home Property Consulting", 
    },
  ];
}

export default function WorkPage() {
    // 1. State สำหรับเก็บรูปภาพที่ถูกเลือก
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans relative">
            <div className="h-[100px] bg-(--bg-color)"></div>

            {/* HEADER SECTION */}
            <header className="pt-20 pb-16 px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-6">Portfolio</h1>
                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight">
                        ผลงานที่เรา <br />
                        <span className="italic text-black/20">ภาคภูมิใจดูแล</span>
                    </h2>
                </motion.div>
            </header>

            {/* WORKS GRID */}
            <section className="px-8 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {PAST_WORKS.map((work, i) => (
                        <motion.div
                            key={work.id}
                            layoutId={`work-${work.id}`} // เพิ่ม layoutId สำหรับแอนิเมชันที่ลื่นไหล
                           
                            className="group cursor-pointer"
                            onClick={() => setSelectedImage(work.image)} // 2. คลิกเพื่อเลือกรูป
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 shadow-sm mb-6">
                                <motion.img
                                  loading='lazy'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-all duration-700"
                                />

                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/80 backdrop-blur-md text-white text-[8px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                                        {work.category}
                                    </span>
                                </div>

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <ArrowUpRight className="text-white w-10 h-10" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-light tracking-tight group-hover:text-black/60 transition-colors">

                                    Home Property Consulting Company Limited
                                </h3>
                                <p className="text-xs text-black/30 italic">กรุงเทพและปริมณฑล</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. FULL SCREEN PREVIEW MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        {/* Backdrop */}
                        <motion.div

                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
                        />

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative z-10 max-w-full max-h-full"
                        >
                            <img
                                src={selectedImage}
                                className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl border border-white/10"
                                alt="Full screen preview"
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-black text-white px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-light mb-8">ต้องการคำปรึกษาสำหรับทรัพย์สินของคุณ?</h3>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block border border-white/20 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                    >
                        เริ่มวางแผนกับเราวันนี้
                    </motion.a>
                </div>
            </section>
        </div>
    );
}