import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define the shape of each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// 2. Define the Component Props
interface CondoFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function CondoFAQ({ 
  faqs, 
  title = "คำถามที่พบบ่อย", 
  subtitle = "Common Questions" 
}: CondoFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-(--primary-color) mb-6 block text-center md:text-left">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-center md:text-left">
            {title}
          </h2>
        </div>

        <div className="divide-y divide-black/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8">
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left group transition-all duration-300"
              >
                <span className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-300 ${expandedIndex === i ? 'text-(--primary-color)' : 'group-hover:text-(--primary-color)'}`}>
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedIndex === i ? (
                      <Minus className="w-5 h-5 font-light" />
                    ) : (
                      <Plus className="w-5 h-5 font-light" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}