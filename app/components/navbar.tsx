import React, { useState } from 'react';

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
  backgroundColor?: string;
  textColor?: string;
  sticky?: boolean;
  onLogoClick?: () => void;
}

export default function Navbar({
  logo,
  brandName = "Brand",
  links = [],
  rightContent,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  sticky = false,
  onLogoClick
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stickyClass = sticky ? "sticky top-0 z-50" : "";
  const shadowClass = sticky ? "shadow-md" : "";

  return (
    <header className={`w-full py-2 px-4 ${backgroundColor} ${textColor} ${stickyClass} ${shadowClass}`}>
      <nav className="container-md mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onLogoClick}
        >
          {logo && (
            <div className="flex-shrink-0">
              {typeof logo === 'string' ? (
                <img src={logo} alt={brandName} className="h-20 w-auto" />
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
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Content (Login, Button, etc) */}
        <div className="hidden md:flex items-center gap-4">
          {rightContent}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
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
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
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