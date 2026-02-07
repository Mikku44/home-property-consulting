import React, { useState } from 'react';
import { FaLine, FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactActions = [
    {
      label: "Line Official",
      icon: <FaLine size={20} />,
      color: "bg-[#06C755] hover:bg-[#05b347]",
      href: "https://lin.ee/aHn58W1",
    },
    {
      label: "02 096 4653",
      icon: <FaPhone size={18} />,
      color: "bg-[var(--primary-color)] hover:bg-[#d4a210]",
      href: "tel:020964653",
    },
    {
      label: "homepropertyconsulting@gmail.com",
      icon: <FaEnvelope size={18} />,
      color: "bg-[#374151] hover:bg-[#4b5563]",
      href: "mailto:homepropertyconsulting@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 font-sans">
      {/* Expanded Menu */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {contactActions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.label === "Line Official" ? "_blank" : "_self"}
            rel="noreferrer"
            className={`flex items-center gap-3 group transition-all duration-200`}
          >
            {/* Label */}
            <span className="bg-white text-[#1f2937] px-3 py-2 rounded-md text-xs font-medium shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {action.label}
            </span>

            {/* Icon Button */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md transition-all duration-200 ${action.color}`}
            >
              {action.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-lg flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-[var(--primary-color)] hover:bg-[#d4a210]"
        }`}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <HiChatBubbleLeftRight size={26} />
        )}
      </button>
    </div>
  );
}