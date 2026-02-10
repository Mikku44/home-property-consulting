import React, { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { SERVICES_IMAGES } from "~/const/app"
import { Link } from "react-router"

/**
 * Shared Navigation Button Component
 */
const NavButton = ({ 
  direction, 
  onClick, 
  disabled 
}: { 
  direction: "left" | "right", 
  onClick: () => void, 
  disabled: boolean 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-12 h-12 md:w-10 md:h-10 border border-foreground/10 flex items-center justify-center transition-all hover:bg-foreground hover:text-background disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed"
    aria-label={`Scroll ${direction}`}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
    ) : (
      <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
    )}
  </button>
)

export default function DraggableScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    // Dynamically get the width of the first visible card or fallback
    const cardWidth = el.querySelector(".scroll-card")?.clientWidth || 300
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 32 : cardWidth + 32,
      behavior: "smooth",
    })
  }

  return (
    <section className="px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 mb-4">
              Complementary
            </span>
            <h2 className="text-4xl font-light tracking-tighter text-foreground">
              บริการเสริมเพื่อความสมบูรณ์แบบ
            </h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <NavButton 
              direction="left" 
              onClick={() => scrollBy("left")} 
              disabled={!canScrollLeft} 
            />
            <NavButton 
              direction="right" 
              onClick={() => scrollBy("right")} 
              disabled={!canScrollRight} 
            />
          </div>
        </div>

        {/* Draggable Scrollable Container */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className={`flex gap-8 overflow-x-auto pb-4 scrollbar-hide ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {SERVICES_IMAGES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="scroll-card relative aspect-square group overflow-hidden bg-muted flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[420px]"
            >
              <img
                loading='lazy'
                src={item.src || "/placeholder.svg"}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 ${
                  isDragging ? "pointer-events-none" : ""
                }`}
                alt={item.title}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-60">
                  Estate
                </h4>
                <h3 className="text-3xl font-light tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-light max-w-xs mb-6 transition-opacity duration-500">
                  {item.des}
                </p>
                <Link
                  target="_blank"
                  to="https://lin.ee/aHn58W1" 
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-white/20 w-fit pb-2"
                >
                  View Details <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <ScrollProgress scrollRef={scrollRef} />

        {/* Mobile Navigation Arrows (Visible only on mobile/tablet) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-2 mb-10">
            <NavButton 
              direction="left" 
              onClick={() => scrollBy("left")} 
              disabled={!canScrollLeft} 
            />
            <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold">
              Scroll
            </span>
            <NavButton 
              direction="right" 
              onClick={() => scrollBy("right")} 
              disabled={!canScrollRight} 
            />
        </div>
      </div>
    </section>
  )
}

function ScrollProgress({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll > 0) {
        setProgress(el.scrollLeft / maxScroll)
      }
    }

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [scrollRef])

  return (
    <div className="mt-8 h-[1px] bg-foreground/10 relative">
      <motion.div
        className="absolute top-0 left-0 h-full bg-foreground/60"
        animate={{ width: `${Math.max(progress * 100, 5)}%` }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
      />
    </div>
  )
}