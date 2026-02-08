import React, { useState } from 'react';
import { FaLine, FaPhone, FaEnvelope, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { HiChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactActions = [
    {
      label: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      color: "bg-[#25D366]",
      href: "https://wa.me/66817146934",
    },
    {
      label: "Line Official",
      icon: <FaLine size={20} />,
      color: "bg-[#06C755]",
      href: "https://lin.ee/aHn58W1",
    },
    {
      label: "Call Us",
      icon: <FaPhone size={16} />,
      color: "bg-[#111827]", // Dark Slate for a formal look
      href: "tel:020964653",
    },
    {
      label: "Email",
      icon: <FaEnvelope size={16} />,
      color: "bg-[#4B5563]",
      href: "mailto:homepropertyconsulting@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end font-sans">
      {/* Expanded Menu */}
      <div
        className={`flex flex-col items-end gap-4 mb-4 transition-all duration-300 ease-out ${
          isOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "translate-y-10 opacity-0 invisible pointer-events-none"
        }`}
      >
        {contactActions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.href.startsWith('http') ? "_blank" : "_self"}
            rel="noreferrer"
            className="flex items-center group"
          >
            {/* Label - Modern Pill style */}
            <span className="mr-3 px-3 py-1.5 bg-white/90 backdrop-blur-md text-gray-700 text-sm font-medium rounded-full shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
              {action.label}
            </span>

            {/* Icon Button - Circular & Shadowed */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 ${action.color}`}
            >
              {action.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-in-out ${
          isOpen
            ? "bg-black text-gray-800 rotate-90"
            : "bg-yellow-600 hover:bg-yellow-700"
        }`}
      >
        {isOpen ? (
          <FaTimes size={22} />
        ) : (
          <HiChatBubbleOvalLeftEllipsis size={28} />
        )}
      </button>
    </div>
  );
}