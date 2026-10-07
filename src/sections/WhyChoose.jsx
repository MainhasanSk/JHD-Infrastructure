import React from 'react';
import { CheckCircle2, ShieldCheck, Layers, Eye, Users, TrendingUp, Sparkles, Clock, Calculator, Award } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhyChoose({ onOpenConsultation }) {
  const icons = [Clock, Award, Calculator, ShieldCheck, Users, TrendingUp];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-blueprint opacity-25 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic On-Site Construction Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/35 p-2 bg-gradient-to-b from-navy-800 to-navy-900 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-navy-950">
                <img
                  src="/work3.jpg"
                  alt="JHD Infrastructure On-Site Civil Engineering Supervision"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>

                {/* Overlaid Project Proof Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/95 backdrop-blur-md border border-slate-700/80">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-1">
                    On-Site Civil Integrity
                  </span>
                  <p className="text-xs text-white font-semibold leading-snug">
                    RCC framing, column reinforcement, precision brickwork & PEB trusses engineered to seismic standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -top-4 -left-4 p-3 rounded-xl bg-navy-900/95 border border-gold-500/40 shadow-xl items-center gap-2.5 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">JHD Standard</span>
                <span className="text-xs font-bold text-white">Quality Work & On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                  Our Quality Commitment
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Why Choose <br />
                <span className="text-gold-gradient">JHD INFRASTRUCTURE?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3">
                We bridge the gap between design vision and construction reality. As registered Engineers, Architects, and Contractors, we ensure zero discrepancy between your drawings, municipal permissions, and physical building.
              </p>
            </div>

            {/* 6 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyData.whyChoosePoints.map((point, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={point.title}
                    className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:bg-navy-850/80 group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                        <Icon size={14} />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick CTA */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
              >
                <span>Consult with Our Engineers</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
