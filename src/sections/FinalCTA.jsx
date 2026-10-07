import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Mail } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background blueprint subtle texture & radial glow */}
      <div className="absolute inset-0 bg-blueprint opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-navy-900 via-navy-850 to-navy-900 border border-gold-500/40 p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/10 to-transparent pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
              <Sparkles size={13} className="text-gold-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                Begin Your Journey With JHD Infrastructure
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              YOUR DREAM HOME, <br />
              <span className="text-gold-gradient">OUR RESPONSIBILITY</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Ready to construct your home, commercial project, PEB warehouse, or obtain fast 5-day GMDA building permission? Let's discuss your requirements today.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-navy-800 hover:bg-navy-750 border border-slate-700 hover:border-gold-500/50 transition-colors"
              >
                <Phone size={16} className="text-gold-400" />
                <span>Call: {companyData.phones[0].display}</span>
              </a>
            </div>

            {/* Secondary Direct WhatsApp & Email Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 max-w-lg mx-auto">
              <a
                href={companyData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare size={13} />
                <span>Chat on WhatsApp ({companyData.phones[0].display})</span>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-1.5 hover:text-gold-400 font-semibold transition-colors"
              >
                <Mail size={13} className="text-gold-400" />
                <span>{companyData.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
