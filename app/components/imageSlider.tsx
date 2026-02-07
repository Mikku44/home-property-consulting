import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideVariants = {
  enter: (direction: number) => ({
    scale: 1.1,
    opacity: 0,
    filter: "brightness(0.5) blur(4px)",
  }),
  center: {
    scale: 1,
    opacity: 1,
    filter: "brightness(1) blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cinematic easing
    },
  },
  exit: (direction: number) => ({
    scale: 0.95,
    opacity: 0,
    filter: "brightness(0.5) blur(4px)",
    transition: { duration: 0.8 },
  }),
};

const VisualCarousel: React.FC<{ slides: { image: string }[] }> = ({ slides }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = Math.abs(page % slides.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Main Image Component */}
      <div className="relative w-[85%] h-[70%] overflow-hidden bg-zinc-900 shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={slides[activeIndex].image}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Layer */}
      <div className="absolute inset-0 flex items-center justify-between px-10">
        <button
          onClick={() => paginate(-1)}
          className="z-20 text-white/30 hover:text-white transition-all text-2xl font-light"
        >
          <ChevronLeft className="size-14" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="z-20 text-white/30 hover:text-white transition-all text-2xl font-light"
        >
          <ChevronRight className="size-14"/>
        </button>
      </div>

      {/* Progress Bars (Minimalist dots) */}
      <div className="absolute bottom-12 flex gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className="h-[2px] bg-white"
            animate={{ 
              width: i === activeIndex ? 40 : 12,
              opacity: i === activeIndex ? 1 : 0.3 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export default VisualCarousel;