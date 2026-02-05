import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office Address",
      value: "46/9 Soi Sukhumvit 49 (Klang), Khlong Tan Nuea, Wattana, Bangkok 10110",
      link: "https://share.google/YPHG3ALNvQJQZm47K"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone Inquiry",
      value: "02 096 4653",
      link: "tel:020964653"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Support",
      value: "homepropertyconsulting@gmail.com",
      link: "mailto:homepropertyconsulting@gmail.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Office Hours",
      value: "Monday – Friday: 09:00 - 18:00",
      link: null
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* 1. HERO SECTION */}
      <header className="pt-40 pb-20 px-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-6">Contact Us</h1>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">
              Let’s discuss your <br /> 
              <span className="italic text-black/20">future assets.</span>
            </h2>
          </motion.div>
        </div>
      </header>

      {/* 2. CONTACT CONTENT GRID */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-10">Reach Out</h3>
              <div className="space-y-12">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="text-black/20 group-hover:text-black transition-colors shrink-0 pt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-widest font-bold text-black/30 mb-2">{item.label}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.label === "Office Address" ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="text-lg font-light leading-snug hover:opacity-50 transition-opacity block"
                        >
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

            {/* Social Links Small */}
            <div className="pt-10 border-t border-black/5 flex gap-8">
              {['Facebook', 'Line', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-blue-600 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 border border-black/5">
            <h3 className="text-2xl font-light tracking-tighter mb-12">Send an Inquiry</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light" placeholder="Your name" />
                </div>
                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light" placeholder="Email address" />
                </div>
              </div>
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">Subject</label>
                <select className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light appearance-none rounded-none">
                  <option>Property Investment</option>
                  <option>Selling/Leasing</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest font-bold text-black/30 group-focus-within:text-black transition-colors">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-all font-light resize-none" placeholder="Tell us about your requirements" />
              </div>
              <button className="group flex items-center gap-4 bg-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-all">
                Send Message <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION (MINIMAL IFRAME) */}
      <section className="h-[500px] w-full bg-black/5 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7876822839446!2d100.57468137591873!3d13.731333386657966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f032235081f%3A0x633d7b4334360e2!2sSukhumvit%2049!5e0!3m2!1sen!2sth!4v1700000000000"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}