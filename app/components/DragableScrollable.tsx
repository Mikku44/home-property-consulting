import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

// Type for carousel items
interface CarouselItem {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
  href: string;
  badge?: string;
}

interface DraggableCarouselProps {
  items: CarouselItem[];
  title?: string;
  des?: string;
  showDragHint?: boolean;
  onItemClick?: (item: CarouselItem) => void;
}

export default function DraggableCarousel({
  items,
  title = "Academy & Extra Services",
  des = "Complementary",
  showDragHint = true,
  onItemClick
}: DraggableCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ right: 0, left: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  useEffect(() => {
    const updateConstraints = () => {
      if (innerRef.current && carouselRef.current) {
        const scrollWidth = innerRef.current.scrollWidth;
        const containerWidth = carouselRef.current.offsetWidth;
        const leftConstraint = -(scrollWidth - containerWidth);
        
        setConstraints({
          right: 0,
          left: leftConstraint
        });
        
        setCanScrollLeft(false);
        setCanScrollRight(scrollWidth > containerWidth);
      }
    };

    updateConstraints();
    const observer = new ResizeObserver(updateConstraints);
    if (carouselRef.current) observer.observe(carouselRef.current);
    
    return () => observer.disconnect();
  }, [items]);

  const handleDragEnd = (info: any) => {
    setIsDragging(false);
    
    if (innerRef.current) {
      const x = info.x;
      const scrollWidth = innerRef.current.scrollWidth;
      const containerWidth = carouselRef.current?.offsetWidth || 0;
      
      setCanScrollLeft(x < 0);
      setCanScrollRight(x > -(scrollWidth - containerWidth) + 50);
    }
  };

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (carouselRef.current && innerRef.current) {
      const scrollAmount = 500;
      const currentScroll = innerRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
      const targetScroll = direction === 'right' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      // Animate scroll
      innerRef.current.animate(
        { transform: [`translateX(${currentScroll}px)`, `translateX(${targetScroll}px)`] },
        { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
      );
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with refined typography */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs md:text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4 md:mb-6">
                {des}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight">
                {title}
              </h2>
            </motion.div>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            {/* Gradient overlays for visual polish */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-slate-100 via-slate-50 to-transparent pointer-events-none z-20" />

            {/* Main carousel */}
            <motion.div
              ref={carouselRef}
              className={`overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseEnter={() => setIsDragging(false)}
            >
              <motion.div
                ref={innerRef}
                drag="x"
                dragConstraints={constraints}
                dragElastic={0.15}
                dragMomentum={true}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="flex gap-6 md:gap-8"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => onItemClick?.(item)}
                    className="relative min-w-[280px] md:min-w-[420px] lg:min-w-[500px] aspect-square group flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer select-none"
                  >
                    {/* Card background with backdrop blur effect */}
                    <div className="absolute inset-0 bg-slate-200 -z-10 rounded-2xl" />

                    {/* Image with advanced hover effects */}
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale transition-all duration-700 pointer-events-none select-none"
                      whileHover={{ scale: 1.08, filter: 'grayscale(0%)' }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Animated overlay gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Secondary overlay for consistency */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    {/* Content container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10 text-white">
                      {/* Category badge */}
                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-[0.65rem] md:text-[0.7rem] font-semibold tracking-[0.2em] text-slate-300 uppercase">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="text-[0.6rem] font-bold tracking-widest text-emerald-400 uppercase px-2 py-1 bg-emerald-400/10 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title with dynamic animation */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight mb-3 leading-tight">
                        {item.title}
                      </h3>

                      {/* Description with refined typography */}
                      <motion.p
                        className="text-slate-200 text-xs md:text-sm font-light leading-relaxed max-w-xs mb-6 line-clamp-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Interactive CTA with icon animation */}
                      <motion.a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-[0.75rem] md:text-xs font-semibold tracking-widest text-white uppercase border-b-2 border-white/40 hover:border-white transition-all duration-300 pb-2 w-fit group/link"
                        onClick={(e) => !isDragging || e.preventDefault()}
                        whileHover={{ gap: '0.5rem' }}
                      >
                        Learn More
                        <motion.div
                          whileHover={{ x: 3, y: -3 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                        </motion.div>
                      </motion.a>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation buttons with improved styling */}
            <motion.button
              onClick={() => scrollToDirection('left')}
              className={`absolute -left-6 md:left-0 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-slate-900/80 hover:bg-slate-900 text-white hover:scale-110'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              } backdrop-blur-sm`}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-180" />
            </motion.button>

            <motion.button
              onClick={() => scrollToDirection('right')}
              className={`absolute -right-6 md:right-0 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full transition-all duration-300 ${
                canScrollRight
                  ? 'bg-slate-900/80 hover:bg-slate-900 text-white hover:scale-110'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              } backdrop-blur-sm`}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.1 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Drag hint with animated text */}
            {showDragHint && (
              <motion.div
                className="hidden lg:flex items-center gap-2 absolute bottom-0 right-0 text-xs font-medium text-slate-500 tracking-widest uppercase"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ← Drag
                </motion.span>
              </motion.div>
            )}
          </div>

          {/* Footer info */}
          <motion.div
            className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-slate-200/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm text-slate-500 font-light tracking-wide">
              Drag to explore our full range of complementary services and educational programs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

