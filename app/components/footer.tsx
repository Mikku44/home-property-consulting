import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="text-2xl font-medium tracking-tighter mb-6 italic">
              Home Property <br />
              <span className="text-white/40">Consulting.</span>
            </div>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-sm mb-8">
              ที่ปรึกษาอสังหาริมทรัพย์ครบวงจร ยกระดับการลงทุนและการอยู่อาศัยของคุณด้วยประสบการณ์ระดับมืออาชีพ
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">Expertise</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Investment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Column - Fixed Overflow */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <MapPin className="w-4 h-4 text-white/20 mt-1 shrink-0" />
                <p className="text-xs font-light leading-relaxed text-white/60 group-hover:text-white transition-colors">
                  Sukhumvit 49, Wattana, <br /> Bangkok 10110
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <Phone className="w-4 h-4 text-white/20 shrink-0" />
                <p className="text-xs font-light text-white/60 group-hover:text-white transition-colors">02 096 4653</p>
              </div>
              <div className="flex gap-4 items-center group">
                <Mail className="w-4 h-4 text-white/20 shrink-0" />
                {/* break-all prevents long emails from pushing the container */}
                <p className="text-xs font-light text-white/60 group-hover:text-white transition-colors break-all">
                  homepropertyconsulting@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 text-center md:text-left">
            © {currentYear} Home Property Consulting.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors md:border-l md:border-white/10 md:pl-6"
            >
              Top <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* FIXED WATERMARK - restricted width */}
      <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none select-none leading-none translate-y-1/4 max-w-full overflow-hidden">
        <span className="text-[12rem] md:text-[20rem] font-black whitespace-nowrap block">
          HOME PROPERTY
        </span>
      </div>
    </footer>
  );
}