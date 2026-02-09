import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  brandName?: string;
  links?: NavLink[];
  rightContent?: React.ReactNode;
}

export default function Navbar({
  logo = "/logo.png",
  brandName = "Home Property",
  links = [],
  rightContent,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#080e1c]/80 backdrop-blur-xl"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-start gap-3 z-[110] group"
            aria-label="Home Property Consulting - Return to Home"
          >
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              className="relative w-10 h-10 flex items-start justify-center"
            >
              <img
                src={logo}
                alt="Home Property Logo"
                className="w-full h-full min-w-[120px] object-contain"
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tighter text-white leading-none">
                {brandName}
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-[var(--primary-color)] font-bold mt-1 opacity-80">
                Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 list-none">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--primary-color)]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--primary-color)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-[1px] bg-white/10 mx-2" />

            <div className="flex items-center">{rightContent}</div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-end w-8 h-8 z-[120]"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            <span
              className={`h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen
                  ? "w-8 rotate-45 translate-y-[1px]"
                  : "w-8 mb-1.5"
              }`}
            />
            <span
              className={`h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-8 -rotate-45" : "w-5"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER (OUTSIDE HEADER) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#080e1c] z-[999] lg:hidden"
          >
             <button
            className="lg:hidden flex flex-col justify-center absolute right-0 m-10 items-end w-8 h-8 z-[120]"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            <span
              className={`h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen
                  ? "w-8 rotate-45 translate-y-[1px]"
                  : "w-8 mb-1.5"
              }`}
            />
            <span
              className={`h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-8 -rotate-45" : "w-5"
              }`}
            />
          </button>
            <div className="flex flex-col h-full pt-32 px-10">
              <span className="text-[var(--primary-color)] text-[10px] font-bold tracking-[0.5em] uppercase mb-12 opacity-50">
                Navigation
              </span>

              <div className="flex flex-col space-y-8">
                {links.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        to={link.href}
                        className={`text-4xl md:text-6xl font-light tracking-tighter hover:italic transition-all inline-block ${
                          isActive
                            ? "text-[var(--primary-color)]"
                            : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto pb-12 flex flex-col gap-6">
                <div className="h-[1px] w-full bg-white/5" />
                <div className="flex justify-between items-end">
                  <div className="text-[10px] uppercase tracking-widest text-white/30 leading-loose">
                    <p>© 2026 Home Property Consulting</p>
                    <p>Bangkok, Thailand</p>
                  </div>
                  {rightContent}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
