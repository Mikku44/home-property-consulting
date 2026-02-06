import React, { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  logo?: string | React.ReactNode;
  brandName?: string;
  links?: NavLink[];
  rightContent?: React.ReactNode;
  textColor?: string;
  className?: string;
  sticky?: boolean;
  onLogoClick?: () => void;
  // New prop to customize the scrolled background color
  scrolledBgColor?: string; 
}

export default function Navbar({
  logo,
  brandName = "Brand",
  links = [],
  rightContent,
  className = "",
  textColor = "text-gray-900",
  sticky = true, // Usually desired if changing bg on scroll
  onLogoClick,
  scrolledBgColor = "bg-white/95 backdrop-blur-md"
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger change after scrolling 20 pixels
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyClass = sticky ? "fixed top-0 left-0 z-50 transition-all duration-300" : "";
  const backgroundClass = isScrolled ? scrolledBgColor : "bg-transparent";
  const shadowClass = isScrolled ? "shadow-md" : "";

  return (
    <header className={`w-full py-2 px-4 ${stickyClass} ${backgroundClass} ${className} ${textColor} ${shadowClass}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onLogoClick}
        >
          {logo && (
            <div className="flex-shrink-0">
              {typeof logo === 'string' ? (
                <img src={logo} alt={brandName} className="h-16 rounded-full w-auto" />
              ) : (
                logo
              )}
            </div>
          )}
          {brandName && <span className="text-lg font-bold">{brandName}</span>}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity font-medium"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Content */}
        <div className="hidden md:flex items-center gap-4">
          {rightContent}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 ${textColor} transition-all duration-300`} style={{
            transform: mobileMenuOpen ? 'rotate(45deg) translateY(10px)' : 'none'
          }} />
          <span className={`w-6 h-0.5 ${textColor} transition-all duration-300`} style={{
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <span className={`w-6 h-0.5 ${textColor} transition-all duration-300`} style={{
            transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'none'
          }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white px-4">
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon && <span>{link.icon}</span>}
                {link.label}
              </a>
            ))}
            {rightContent && (
              <div className="border-t border-gray-200 pt-4 mt-2">
                {rightContent}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}