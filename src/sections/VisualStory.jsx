import React from 'react';
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function VisualStory({ onOpenConsultation }) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-navy-950 border-t border-b border-slate-800/80">
      {/* Background Ambient Glow & Blueprint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/we-construct-home.jpeg"
          alt="We Construct Homes, not Just Houses"
          className="w-full h-full object-cover object-center filter blur-xl opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-navy-950/90"></div>
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Corporate Promise Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
                Corporate Promise
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                YOUR DREAM HOME, <br />
                <span className="text-gold-gradient">OUR RESPONSIBILITY.</span>
              </h2>
              <p className="font-display text-xl sm:text-2xl text-gold-300/95 font-semibold italic">
                "{companyData.tagline}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From initial site survey, soil testing, and 5-day GMDA building permission to seismic-resistant RCC framing and turnkey finishing, JHD Infrastructure stands beside you through every brick and milestone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={15} className="text-gold-400 shrink-0" />
                <span>Earthquake Resistant Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={15} className="text-gold-400 shrink-0" />
                <span>Certified Steel & Cement</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={15} className="text-gold-400 shrink-0" />
                <span>5-Day GMDA Municipal Liaison</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={15} className="text-gold-400 shrink-0" />
                <span>Turnkey Milestone Handover</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-glow transition-all duration-300"
              >
                <span>Start Your Dream Home Project</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-gold-500/50 bg-navy-900/80 transition-colors"
              >
                <Phone size={14} className="text-gold-400" />
                <span>Call {companyData.phones[0].display}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Prominent Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 p-2 sm:p-3 bg-gradient-to-b from-navy-850 via-navy-900 to-navy-950 shadow-2xl group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/12] bg-navy-950">
                <img
                  src="/we-construct-home.jpeg"
                  alt="We Construct Homes, not Just Houses - JHD Infrastructure"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/90 backdrop-blur-md border border-gold-500/50">
                  <Sparkles size={13} className="text-gold-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                    Dream Home Execution
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-navy-950/85 backdrop-blur-md border border-slate-700/60">
                  <p className="text-xs font-semibold text-white">
                    "We Construct Homes, not Just Houses"
                  </p>
                  <p className="text-[11px] text-gold-400/90">
                    Custom Architectural Elevation & Turnkey Contracting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
