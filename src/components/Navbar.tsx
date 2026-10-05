import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isLightMode: boolean;
  onToggleTheme: () => void;
}

const PRIMARY_NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
];

const MORE_NAV = [
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

const ALL_MOBILE_NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isLightMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 ${
        isLightMode
          ? scrolled
            ? 'bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200'
            : 'bg-zinc-50 border-b border-zinc-200/60'
          : scrolled
            ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-zinc-800/80'
            : 'bg-[#090A0F] border-b border-zinc-900'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className={`font-display text-lg font-bold tracking-tight whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
            isLightMode ? 'text-zinc-900' : 'text-zinc-100'
          }`}
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium"
        >
          {PRIMARY_NAV.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative py-1 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                  isActive
                    ? isLightMode
                      ? 'text-cyan-700 font-semibold'
                      : 'text-cyan-400 font-semibold'
                    : isLightMode
                      ? 'text-zinc-600 hover:text-zinc-900'
                      : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isLightMode ? 'bg-cyan-600' : 'bg-cyan-400'
                    }`}
                  />
                )}
              </a>
            );
          })}

          {/* Desktop XL full links */}
          <div className="hidden xl:flex items-center gap-7">
            {MORE_NAV.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                    isActive
                      ? isLightMode
                        ? 'text-cyan-700 font-semibold'
                        : 'text-cyan-400 font-semibold'
                      : isLightMode
                        ? 'text-zinc-600 hover:text-zinc-900'
                        : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isLightMode ? 'bg-cyan-600' : 'bg-cyan-400'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Medium/Large More dropdown */}
          <div className="relative xl:hidden">
            <button
              type="button"
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 180)}
              className={`flex items-center gap-1 py-1 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                MORE_NAV.some((m) => m.id === activeSection)
                  ? isLightMode
                    ? 'text-cyan-700 font-semibold'
                    : 'text-cyan-400 font-semibold'
                  : isLightMode
                    ? 'text-zinc-600 hover:text-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-100'
              }`}
              aria-expanded={moreDropdownOpen}
            >
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {moreDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-44 rounded-xl py-2 shadow-xl border ${
                  isLightMode
                    ? 'bg-white border-zinc-200 text-zinc-800'
                    : 'bg-[#12141D] border-zinc-800 text-zinc-200'
                }`}
              >
                {MORE_NAV.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      activeSection === item.id
                        ? isLightMode
                          ? 'text-cyan-700 bg-cyan-50/70 font-semibold'
                          : 'text-cyan-400 bg-cyan-950/40 font-semibold'
                        : isLightMode
                          ? 'hover:bg-zinc-100'
                          : 'hover:bg-zinc-800/60'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLightMode ? 'Switch to dark theme' : 'Switch to light theme'}
            className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-cyan-400 ${
              isLightMode
                ? 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                : 'border-zinc-800 text-zinc-300 hover:bg-zinc-800/70'
            }`}
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
              isLightMode
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-cyan-500 text-zinc-950 hover:bg-cyan-400'
            }`}
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${
              isLightMode
                ? 'border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                : 'border-zinc-800 text-zinc-200 hover:bg-zinc-800/70'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-5 py-4 ${
            isLightMode
              ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
              : 'bg-[#0D0F17] border-zinc-800 text-zinc-200'
          }`}
        >
          <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-2">
            {ALL_MOBILE_NAV.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? isLightMode
                        ? 'bg-cyan-50 text-cyan-700 font-semibold'
                        : 'bg-cyan-950/50 text-cyan-400 font-semibold'
                      : isLightMode
                        ? 'text-zinc-600 hover:bg-zinc-100'
                        : 'text-zinc-400 hover:bg-zinc-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
