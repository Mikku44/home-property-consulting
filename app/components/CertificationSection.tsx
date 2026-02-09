import React from 'react';

const certifications = [
  {
    src: "cert.png", // Keep your CIPS logo
    alt: "CIPS",
    title: "Global Specialist",
    desc: "International Property Specialist"
  },
  {
    src: "cert2.png", // Keep your NAR logo
    alt: "NAR",
    title: "NAR Member",
    desc: "National Association of Realtors"
  },
  {
    src: "/cert4.jpg",
    alt: "TREBS",
    title: "Thai Real Estate",
    desc: "Business School (TREBS)"
  },
  {
    src: "/cert5.png",
    alt: "RESAM",
    title: "RESAM Member",
    desc: "Thai Real Estate Sales and Marketing Association"
  },
  {
    src: "/cert6.jpg", // Use local file for Winner Estate Education
    alt: "Winner Estate",
    title: "Expert Instructor",
    desc: "Winner Estate Education"
  },
  {
    src: "/cert7.png",
    alt: "Dot Property",
    title: "Partner",
    desc: "Dot Property Thailand"
  },
  {
    src: "/cert8.png",
    alt: "Hipflat",
    title: "Partner",
    desc: "Hipflat Thailand"
  },
  {
    src: "/cert9.png",
    alt: "Living Insider",
    title: "Partner",
    desc: "Living Insider Thailand"
  },
  {
    src: "/cert3.jpg",
    alt: "Thai Real Estate Broker Association",
    title: "BROKER",
    desc: "Thai Real Estate Broker Association"
  },
  {
    src: "/cert10.png",
    alt: "Thailand Professional Qualification Institute",
    title: "Partner",
    desc: "Thailand Professional Qualification Institute"
  },
  {
    src: "/cert11.jpg",
    alt: "Property hub",
    title: "Partner",
    desc: "Property hub"
  }
];

export default function CertificationSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-(--primary-color) uppercase mb-4">
            Professional Network & Certifications
          </h2>
          <p className="text-3xl md:text-4xl font-light text-gray-900 italic tracking-tight">
            Trusted by Industry Leaders
          </p>
          <div className="w-12 h-[1px] bg-black/20 mx-auto mt-8"></div>
        </div>

        {/* Certification Grid - Optimized for many logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-start">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center"
            >
              {/* Logo Container - Formal Card Style */}
              <div className="relative rounded-sm mb-6 w-full h-24 flex items-center justify-center p-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                <img 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100" 
                  src={cert.src} 
                  alt={cert.alt} 
                />
              </div>
              
              {/* Text - Clean Typography */}
              <h3 className="text-gray-900 font-semibold text-[11px] uppercase tracking-wider mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-[10px] leading-tight font-light max-w-[150px]">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}