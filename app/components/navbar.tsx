import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { ChevronDown, Globe, MessageCircle } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

interface NavbarProps {
  logo?: string;
  brandName?: string;
  links?: NavLink[];
}

export default function Navbar({
  logo = "/logo.png",
  brandName = "Home Property",
  links = [],
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync Body Scroll & Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
    document.body.style.overflow = "unset";
  }, [location]);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "unset";
      return !prev;
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-start gap-3 z-[110] group">
            <motion.div
              animate={{ scale: isScrolled ? 0.85 : 1 }}
              className="relative w-10 h-10"
            >
              <img src={logo} alt="Logo" className="w-full h-full min-w-[120px] object-contain" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tighter text-white leading-none uppercase">
                {brandName}
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-(--primary-color) font-bold mt-1">
                Consulting
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10 list-none">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <li key={link.href} className="relative group py-2">
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                        isActive ? "text-(--primary-color)" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {hasChildren && <ChevronDown className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
                    </Link>

                    {/* DESKTOP SUBMENU */}
                    {hasChildren && (
                      <div className="absolute top-full left-[-20px] pt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out">
                        <div className="bg-[#0a0a0a] border border-white/10 p-2 min-w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="group/item flex flex-col px-4 py-3 hover:bg-white/[0.03] transition-colors"
                            >
                              <span className="text-[11px] text-white/70 group-hover/item:text-(--primary-color) font-medium tracking-wide transition-colors">
                                {child.label}
                              </span>
                              <div className="h-[1px] w-0 group-hover/item:w-full bg-(--primary-color)/30 transition-all duration-500 mt-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            
            {/* CTA Button */}
            <Link to="/contact" className="px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-(--primary-color) transition-colors">
              Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden flex flex-col justify-center items-end w-8 h-8 z-[120]" onClick={toggleMenu}>
            <span className={`h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-8 rotate-45 translate-y-[1px]" : "w-8 mb-2"}`} />
            <span className={`h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-8 -rotate-45" : "w-5"}`} />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[99] lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-32 px-8 pb-12">
              <span className="text-(--primary-color) text-[9px] font-bold tracking-[0.5em] uppercase mb-10 opacity-50">
                Navigation
              </span>

              <div className="flex flex-col space-y-6">
                {links.map((link) => (
                  <div key={link.href} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link to={link.href} className="text-4xl font-light tracking-tighter text-white hover:italic">
                        {link.label}
                      </Link>
                      {link.children && (
                        <button 
                          onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.label ? null : link.label)}
                          className="p-4"
                        >
                          <ChevronDown className={`text-white transition-transform ${activeMobileSubmenu === link.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {/* MOBILE ACCORDION */}
                    {link.children && (
                      <motion.div
                        initial={false}
                        animate={{ height: activeMobileSubmenu === link.label ? "auto" : 0, opacity: activeMobileSubmenu === link.label ? 1 : 0 }}
                        className="overflow-hidden flex flex-col pl-4 border-l border-white/10 mt-2 ml-2"
                      >
                        {link.children.map((child) => (
                          <Link key={child.href} to={child.href} className="text-lg py-3 text-white/50 hover:text-(--primary-color)">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="mt-auto pt-20">
                 <div className="h-[1px] bg-white/5 w-full mb-8" />
                 <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase">
                        <MessageCircle size={14} /> Line: @condobkk
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase">
                        <Globe size={14} /> Bangkok, TH
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}