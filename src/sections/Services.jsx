import React, { useState } from 'react';
import { Home, Building2, Layers, ShieldCheck, ArrowRight, Check, HardHat, FileCheck, Warehouse, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services({ onOpenConsultation }) {
  const iconMap = {
    "01": HardHat,
    "02": Building2,
    "03": FileCheck,
    "04": Warehouse
  };

  return (
    <section id="services" className="scroll-mt-20 py-24 relative bg-navy-900 border-t border-b border-slate-800/80">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-15 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              ENGINEER • ARCHITECT • CONTRACTOR
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Work and Design
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Full-spectrum civil engineering, architectural planning, 5-day building permissions, and turnkey development.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {companyData.services.map((service) => {
            const Icon = iconMap[service.id] || Building2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-navy-850/85 border border-slate-700/60 overflow-hidden shadow-xl transition-all duration-400 hover:border-gold-500/50 hover:shadow-gold-glow flex flex-col justify-between"
              >
                {/* Top Image Preview */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-navy-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>

                  {/* Number Badge & Icon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/85 backdrop-blur-md border border-gold-500/40">
                    <span className="font-mono font-bold text-xs text-gold-400">{service.id}</span>
                    <span className="w-1 h-3 bg-gold-500/50 rounded-full"></span>
                    <Icon size={14} className="text-white" />
                  </div>

                  {/* Division Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-navy-950/90 border border-slate-700 text-[10px] font-bold uppercase text-slate-300">
                    {service.division}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gold-400/90 leading-snug">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights from Flyer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <Check size={13} className="text-gold-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gold accent line & CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      JHD Infrastructure
                    </span>
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 9 Specialized Development Works Showcase (Direct from Flyer) */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Sector Capabilities
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Construction & Development Works
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Specialized execution capabilities spanning commercial, agricultural, industrial, and recreation infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {companyData.developmentCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="group relative rounded-xl overflow-hidden bg-navy-850 border border-slate-700/70 p-3 flex flex-col justify-between hover:border-gold-500/50 hover:shadow-gold-sm transition-all"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-950 mb-2.5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-gold-300 transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
