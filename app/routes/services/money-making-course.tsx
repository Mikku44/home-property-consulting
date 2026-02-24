import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Users2,
  Award,
  Clock,
  Briefcase,
  Star,
  ExternalLink
} from 'lucide-react';
import { FaWhatsapp, FaLine, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';
import { CondoFAQ } from './components/faq';
import { faqData } from '~/const/app';

export function meta() {
  return [
    { title: "คอร์สสร้างเงินแสนเงินล้านจากงานขาย-เช่าคอนโด | โค้ชนุ่น ปัณณภัสร์" },
    { name: "description", content: "เรียนรู้งานนายหน้าคอนโดแบบครบวงจร 6,000+ เคส โดยโค้ชนุ่น เจ้าของรางวัล Dot Property Thailand Awards 2025" },
  ];
}

export default function CoursePage() {
  const contactActions = [
    { label: "WhatsApp", icon: <FaWhatsapp size={20} />, color: "bg-[#25D366]", href: "https://wa.me/66817146934" },
    { label: "Line Official", icon: <FaLine size={20} />, color: "bg-[#06C755]", href: "https://lin.ee/aHn58W1" },
    { label: "Call Us", icon: <FaPhone size={16} />, color: "bg-[#111827]", href: "tel:0613544246" },
    { label: "Email", icon: <FaEnvelope size={16} />, color: "bg-[#4B5563]", href: "mailto:homepropertyconsulting@gmail.com" },
  ];

  const curriculumHighlights = [
    "หลักการสร้างรายได้หลักแสนจากการปล่อยเช่าคอนโด",
    "เทคนิคเปลี่ยนมือใหม่เป็นมือโปรที่ลูกค้าเชื่อถือทันที",
    "กลยุทธ์สแกนผู้เช่าและผู้ให้เช่าที่ใช่ (ไม่ต้องเสียเวลากับทรัพย์ไม่ทำเงิน)",
    "เทคนิคคุยก่อนรับนัด (Pre-screening) เพื่อปิดการขาย 100%",
    "ความลับการทำเอกสารและสัญญาที่เป็นธรรมทุกฝ่าย",
    "เทคนิคเจรจาต่อรองขั้น Advanced (หาไม่ได้จากคอร์สทั่วไป)",
    "จิตวิทยาขั้นสูงในการเข้าใจปัญหาผู้เช่า/ผู้ให้เช่า",
    "ระบบ After Sale และการเตรียมตัวเป็นนักลงทุน",
    "การหาคอนโด Yield 8% - 10%",
    "ชุดเครื่องมือและเอกสารสัญญาเช่า-ขาย กว่า 20 ประเภท"
  ];

  const studentResults = [
    "https://linevoom.line.me/post/1171713555901300265",
    "https://linevoom.line.me/post/1170891790799030478",
    "https://linevoom.line.me/post/1170868899591940585",
    "https://linevoom.line.me/post/1171526765633263241"
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      <div className="h-[110px] bg-(--bg-color)"></div>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary-color)/10 text-(--primary-color) text-xs font-bold uppercase tracking-widest">
                <Award className="w-4 h-4" /> Dot Property Thailand Awards 2025 Winner
              </div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
                สร้างเงินแสนเงินล้าน <br />
                <span className="italic opacity-80 text-(--primary-color)">จากงานขาย-เช่าคอนโด</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                ทางลัดจาก "นายหน้า" สู่ "นักลงทุน" กับ โค้ชนุ่น ปัณณภัสร์
                เจ้าแม่คอนโดปล่อยเช่า ผู้ปิดดีลมาแล้วกว่า 6,000+ เคส
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="https://lin.ee/aHn58W1"
                  target="_blank"
                  className="px-10 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-(--primary-color) transition-colors">
                  สมัครเรียนราคาพิเศษ 15,900.-
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-2xl relative shadow-2xl">
                <img
                  src="/course/course (14).jpg"
                  className="w-full h-full object-cover"
                  alt="โค้ชนุ่น ปัณณภัสร์ ศรีพัชรพัชร์"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                  <h4 className="font-bold text-lg">โค้ชนุ่น ปัณณภัสร์</h4>
                  <p className="text-sm opacity-80 font-light">
                    • ปิดเคสเช่ามาแล้วกว่า 6,000+ เคส<br />
                    • สอนนักเรียนมาแล้วกว่า 1,000+ คน<br />
                    • พอร์ตลงทุน 8 หลัก สร้าง Passive Income 6 หลัก/เดือน
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IMPROVED CURRICULUM SECTION --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-(--primary-color) font-bold">Course Curriculum</h2>
              <h3 className="text-4xl md:text-5xl font-light tracking-tighter italic">เส้นทางลัดสู่มือโปรใน 2 วัน</h3>
            </div>
            <p className="text-gray-400 font-light max-w-md border-l border-black/10 pl-6">
              จากพื้นฐานงานเช่าที่สร้างเงินเร็ว สู่กลยุทธ์งานขายและพอร์ตลงทุนระดับ 8 หลัก
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Day 1 Card */}
            <div className="relative p-10 bg-[#FAF9F6] border border-black/5 rounded-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-8xl font-serif italic text-black/[0.03] group-hover:text-(--primary-color)/10 transition-colors">01</div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <span className="px-4 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest">Day 1: Money Flow</span>
                  <h4 className="text-2xl font-medium pt-2">ระบบงานเช่า (สร้างรายได้ทันที)</h4>
                </div>
                <div className="grid gap-4">
                  {curriculumHighlights.slice(0, 5).map((text, i) => (
                    <div key={i} className="flex gap-4 items-start group/item">
                      <CheckCircle2 className="w-5 h-5 text-(--primary-color) shrink-0 mt-0.5" />
                      <p className="text-sm font-light text-gray-600 group-hover/item:text-black transition-colors">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day 2 Card */}
            <div className="relative p-10 bg-black text-white rounded-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-8xl font-serif italic text-white/[0.05] group-hover:text-(--primary-color)/20 transition-colors">02</div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <span className="px-4 py-1 rounded-full bg-(--primary-color) text-black text-[10px] font-bold uppercase tracking-widest">Day 2: Wealth Mastery</span>
                  <h4 className="text-2xl font-medium pt-2">งานขายและกลยุทธ์นักลงทุน</h4>
                </div>
                <div className="grid gap-4">
                  {curriculumHighlights.slice(5, 10).map((text, i) => (
                    <div key={i} className="flex gap-4 items-start group/item">
                      <CheckCircle2 className="w-5 h-5 text-(--primary-color) shrink-0 mt-0.5" />
                      <p className="text-sm font-light text-white/60 group-hover/item:text-white transition-colors">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- PREMIUM IMAGE-ONLY GALLERY --- */}
      <section className="py-32 px-6 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="relative mb-24">
            <div className="absolute -left-4 top-0 w-1 bg-(--primary-color) h-full opacity-50"></div>
            <div className="pl-8 space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 font-bold">Course Atmosphere</h2>
              <h3 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">
                บรรยากาศการเรียน <br />
                <span className="italic text-gray-400">และความสำเร็จของเหล่านักเรียน</span>
              </h3>
            </div>
          </div>

          {/* Masonry Layout - Purely Visual */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

            {/* 01. Featured Large Portrait */}
            <div className="relative group overflow-hidden rounded-3xl bg-white border border-black/[0.03] shadow-sm break-inside-avoid">
              <img
                src="/course/course (11).jpg"
                alt="Coach Noon and Students"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* 02. Success Quote Overlay */}
            <div className="break-inside-avoid bg-(--primary-color) p-10 rounded-3xl flex flex-col justify-center aspect-square md:aspect-auto md:h-64">
              <h4 className="text-2xl font-light tracking-tighter leading-tight text-black italic">
                "สอนให้คุณทำเป็น ทำจริง <br />และมีรายได้คืนค่าเรียนใน 1 เดือน"
              </h4>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-black/40">— Home Property Academy</p>
            </div>

            {/* 03. Grid of Course Images */}
            {[
              "/course/course (1).jpg",
              "/course/course (2).jpg",
              "/course/course (3).jpg",
              "/course/course (4).jpg",
              "/course/course (5).jpg",
              "/course/course (6).jpg",
              "/course/course (7).jpg",
              "/course/course (8).jpg"
            ].map((path, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl bg-white border border-black/[0.03] break-inside-avoid shadow-sm"
              >
                <img
                  src={path}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-auto object-cover transition-all duration-700"
                />
                {/* Subtle frame effect on hover */}
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/10 transition-all duration-500 rounded-2xl" />
              </div>
            ))}

            {/* 04. Stats / Branding Card */}
            <div className="break-inside-avoid bg-black text-white p-10 rounded-3xl space-y-4">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-(--primary-color)">Student Results</div>
              <p className="text-2xl font-light tracking-tight">ปิดเคสกันรัวๆ แทบทุกคนได้ค่าเรียนคืนภายในไม่ถึงเดือน</p>
              <div className="h-px w-12 bg-white/20"></div>
            </div>

          </div>
        </div>
      </section>


      {/* --- VIP BONUSES --- */}
      <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-light tracking-tighter leading-tight">
                สิทธิพิเศษ <br />
                <span className="text-(--primary-color) font-serif italic">VIP BONUS</span>
              </h2>
              <p className="mt-6 text-white/50 font-light leading-relaxed">
                เรียนจบแล้วไม่ทิ้งกัน เราดูแลคุณเป็นพาร์ทเนอร์ระยะยาว เพื่อให้มั่นใจว่าคุณสร้างรายได้ได้จริง
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Personal Consultant 1 ปี", desc: "โค้ชเป็นที่ปรึกษาให้ 1 ปีเต็ม โทรปรึกษาได้ทุกวัน 9.00-18.00", icon: <Clock /> },
                { title: "Real Assets (Co-50/50)", desc: "มีรายการทรัพย์ให้คุณไปทำการตลาดได้ทันที เริ่มงานได้เลยไม่ต้องหาเอง", icon: <Briefcase /> },
                { title: "Inner Circle Line Group", desc: "กลุ่มแบ่งปันเคสจริง ประสบการณ์จริงจากพี่สู่น้อง เห็นภาพงานไวขึ้น", icon: <Users2 /> },
                { title: "Social Success Community", desc: "สังคมคนทำงานนายหน้าคุณภาพ คอยสนับสนุนกันตลอดเส้นทาง", icon: <Star /> }
              ].map((bonus, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
                  <div className="text-(--primary-color) mb-4">{bonus.icon}</div>
                  <h4 className="text-lg font-medium mb-2">{bonus.title}</h4>
                  <p className="text-sm text-white/40 font-light">{bonus.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STUDENT RESULTS / PROOF --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-light tracking-tighter italic">ผลลัพธ์จากนักเรียนจริง</h2>
              <p className="text-gray-500 max-w-xl">
                นักเรียนรุ่น มกราคม-กุมภาพันธ์ ได้ค่าคอร์สคืนกันถ้วนหน้าภายในไม่ถึงเดือน
                บางคนใช้เวลาเพียง 10 กว่าวันจากการทำตามระบบ VIP Private Class
              </p>
            </div>
            {/* <a href="https://linevoom.line.me" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">ดูผลลัพธ์เพิ่มเติม</a> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {studentResults.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <img src={`/course/result (${i + 1}).jpg`} className="w-full h-full object-cover" alt="Student Result" />
              </a>
            ))}
          </div>
        </div>
      </section>

       {/* --- FAQ SECTION --- */}
            <section className=" px-6 bg-white">
              <CondoFAQ faqs={faqData[5]} />
            </section>

      {/* --- CONTACT & CTA SECTION --- */}
      <section className="py-32 px-6 bg-[#F4F3F0]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block py-2 px-6 border border-(--primary-color) text-(--primary-color) text-xs font-bold uppercase tracking-[0.3em]">
              สมัครเรียนวันนี้เพื่อรับสิทธิ์ที่ปรึกษา 1 ปี
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
              15,900 <span className="text-2xl text-gray-400">THB</span>
            </h2>
            <p className="text-gray-500 font-light italic text-xl">
              "ปิดเช่าเพียง 1 ห้อง คุณก็ได้ค่าเรียนคืนแล้ว"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {contactActions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl text-white ${action.color} hover:scale-105 transition-transform shadow-lg`}
              >
                {action.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest">{action.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-black/5">
            <p className="text-sm font-medium">โค้ชนุ่น ปัณณภัสร์ ศรีพัชรพัชร์</p>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Home Property Consulting Co., Ltd.</p>
          </div>
        </div>
      </section>


    </div>
  );
}