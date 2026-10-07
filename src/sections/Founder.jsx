import React from 'react';
import { ArrowRight, Phone, MessageSquare, Award, Compass, ShieldCheck, Sparkles, Building2, UserCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Founder({ onOpenConsultation }) {
  const waFounderLink = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    "Hello Zahedul Islam Sir, I would like to consult with you regarding a construction project with JHD Infrastructure."
  )}`;

  return (
    <section id="founder" className="scroll-mt-20 py-24 relative bg-navy-900 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30">
            <Sparkles size={13} className="text-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              Leadership & Vision
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Leading JHD Infrastructure with engineering precision, youthful innovation, and uncompromising integrity.
          </p>
        </div>

        {/* Founder Feature Showcase Card */}
        <div className="relative rounded-3xl bg-navy-950/90 border border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          {/* Subtle gold glow behind card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Photo Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/60 p-2 bg-gradient-to-b from-navy-800 via-navy-850 to-navy-900 shadow-gold-glow">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-navy-950">
                    <img
                      src="/Founder.jpeg"
                      alt="Zahedul Islam - Founder of JHD Infrastructure"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                    {/* Role badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-navy-950/90 backdrop-blur-md border border-gold-500/40 text-center">
                      <span className="font-display font-bold text-sm text-gold-300 block">
                        Zahedul Islam
                      </span>
                      <span className="text-[11px] font-medium text-slate-300 block">
                        Structural Engineer & Entrepreneur
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Leadership Tag */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <UserCheck size={14} className="text-gold-400" />
                  <span>Founder & Managing Director • JHD Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Profile & Vision Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/15 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  Founder Profile
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Zahedul Islam
                </h3>
                <p className="font-medium text-base sm:text-lg text-gold-300">
                  Structural Engineer and a Young Entrepreneur
                </p>
              </div>

              {/* Personal Vision Statement Quote */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border-l-4 border-gold-400 border-r border-t border-b border-slate-800 shadow-md">
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  "At JHD Infrastructure, we don't just build structures — we engineer lifelong trust. Every project is approached with mathematical rigor, architectural creativity, and an entrepreneur’s dedication to timely excellence."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-gold-400">— Zahedul Islam</span>
                  <span>Guwahati, Assam</span>
                </div>
              </div>

              {/* 3 Core Leadership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                    <Compass size={16} />
                  </div>
                  <h4 className="font-display font-bold text-xs text-white">Structural Precision</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Earthquake-resistant seismic engineering & load calculations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                    <Sparkles size={16} />
                  </div>
                  <h4 className="font-display font-bold text-xs text-white">Young Entrepreneur</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Modern tech, agile execution & client-first transparency.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                    <ShieldCheck size={16} />
                  </div>
                  <h4 className="font-display font-bold text-xs text-white">Direct Supervision</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Personal oversight on site quality and material testing.
                  </p>
                </div>
              </div>

              {/* CTAs to Connect with Founder */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-sm transition-all"
                >
                  <span>Book Consultation With Founder</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={waFounderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 hover:bg-emerald-900/70 transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Zahedul Islam</span>
                </a>

                <a
                  href={`tel:${companyData.phones[0].tel}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md text-xs sm:text-sm font-semibold text-slate-300 bg-navy-900 border border-slate-700 hover:border-gold-500/50 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-gold-400" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
