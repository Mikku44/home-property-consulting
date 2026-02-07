import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string | number;
  image: string;
  title: string;
  description: string;
  label?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  onSlideChange?: (index: number) => void;
  backgroundColor?: string;
}

// 1. New Fade & Scale Variants
const fadeVariants = {
  initial: {
    opacity: 0,
    scale: 1.05, // Slight zoom-in start
  },
  enter: {
    opacity: 1,
    scale: 1, // Settles to natural size
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  onSlideChange,
  backgroundColor = 'bg-black',
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Normalizing the index to handle infinite loops correctly
  const slideIndex = ((current % items.length) + items.length) % items.length;

  const paginate = (newDirection: number) => {
    setCurrent((prev) => prev + newDirection);
    onSlideChange?.(slideIndex);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    onSlideChange?.(index);
  };

  useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => paginate(1), autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isHovering, current]);

  return (
    <div
      className={`relative w-full h-screen ${backgroundColor} overflow-hidden`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Slides Container */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          variants={fadeVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Image */}
          <img
            src={items[slideIndex].image}
            alt={items[slideIndex].title}
            className="w-full h-full object-cover"
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
            <div className="max-w-3xl">
              {items[slideIndex].label && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-medium"
                >
                  {items[slideIndex].label}
                </motion.span>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl font-light text-white mb-6 leading-[0.8]"
              >
                {items[slideIndex].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl text-white/80 font-light max-w-xl leading-relaxed"
              >
                {items[slideIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation UI */}
      {showArrows && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Modern Line Indicators */}
      {showDots && (
        <div className="absolute bottom-12 left-8 z-50 flex gap-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative py-4"
            >
              <div
                className={`h-[2px] transition-all duration-700 ${
                  index === slideIndex ? 'w-12 bg-white' : 'w-6 bg-white/30'
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute bottom-12 right-12 z-50 text-white/40 font-mono text-sm tracking-tighter">
        <span className="text-white">{String(slideIndex + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        {String(items.length).padStart(2, '0')}
      </div>
    </div>
  );
}