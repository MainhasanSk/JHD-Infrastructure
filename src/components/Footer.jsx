import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, Shield, Mail, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto flex items-center justify-center p-0.5">
                <img
                  src="/jhd-logo.png"
                  alt="JHD Infrastructure Logo"
                  className="h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white tracking-wider">
                  JHD INFRASTRUCTURE
                </h3>
                <p className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                  ENGINEER • ARCHITECT • CONTRACTOR
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-white tracking-wide">
                "{companyData.tagline}"
              </p>
              <p className="text-xs text-gold-400 font-medium">
                {companyData.headline} • {companyData.motto}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Comprehensive engineering consultancy, turnkey civil and PEB warehouse construction, and fast 5-day GMDA building permission services in Guwahati and across Assam.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-gold-400 transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#permission" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>GMDA Permissions</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-600 text-white">5 Days</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold-400 transition-colors">Process</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-gold-400 transition-colors">Founder Profile</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">01</span>
                <span>Engineering Consultancy & BOQ</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">02</span>
                <span>2D & 3D Architectural Elevations</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">03</span>
                <span>Fast 5-Day GMDA Building Permissions</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">04</span>
                <span>Residential Villas & Commercial Complexes</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">05</span>
                <span>PEB Structures, Warehouses & Farm Houses</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gold-400 font-mono text-[10px]">06</span>
                <span>Swimming Pools, Resorts & Turnkey Interiors</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-gold-400 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/40 text-xs text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Primary Inquiries</span>
                  <span className="font-semibold text-gold-300 font-mono">{companyData.phones[0].display}</span>
                </div>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/40 text-xs text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail size={14} />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 block font-normal">Official Email</span>
                  <span className="font-semibold text-slate-200 text-[11px] truncate">{companyData.email}</span>
                </div>
              </a>

              <a
                href={companyData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 JHD Infrastructure. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Guwahati, Assam • GMDA Areas
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
