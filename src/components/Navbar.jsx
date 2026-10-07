import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, FileCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'GMDA Approvals', href: '#permission', badge: '5 Days' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 shadow-2xl'
            : 'bg-gradient-to-b from-navy-950/95 via-navy-950/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative h-11 sm:h-12 w-auto flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/jhd-logo.png"
                  alt="JHD Infrastructure Official 3D Crest"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-jhd-logo leading-tight">
                  JHD
                </span>
                <span className="font-display font-extrabold text-[10px] sm:text-[11px] tracking-[0.22em] text-slate-200 uppercase -mt-0.5 leading-tight">
                  INFRASTRUCTURE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors duration-200 tracking-wide relative group py-1 flex items-center gap-1.5"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider text-navy-950 bg-gold-400">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Direct Phone */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold-400 transition-colors"
                title="Direct Phone Contact"
              >
                <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Phone size={13} />
                </div>
                <span className="font-mono">{companyData.phones[0].display}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs font-bold tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md bg-navy-850 text-gold-400 border border-gold-500/30 hover:bg-navy-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-b border-gold-500/30 px-6 pt-4 pb-6 mt-3 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-gold-400 py-1.5 border-b border-slate-800/80 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-navy-950 bg-gold-400">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-md text-center text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-gold-sm"
              >
                Get a Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${companyData.phones[0].tel}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-navy-800 border border-slate-700 text-xs font-semibold text-white"
                >
                  <Phone size={13} className="text-gold-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={companyData.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
