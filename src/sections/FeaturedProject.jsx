import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FeaturedProject({ onSelectProject }) {
  const featured = companyData.projects[0]; // Modern Architectural Residence

  return (
    <section id="projects" className="scroll-mt-20 py-20 relative bg-navy-900 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Image Covering 60-65% width */}
          <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => onSelectProject(featured)}>
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 p-2 bg-gradient-to-b from-navy-800 via-navy-850 to-navy-900 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-navy-950">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/90 backdrop-blur-md border border-gold-500/50">
                  <Sparkles size={13} className="text-gold-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                    Architectural Showcase
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-950/40 backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                    Click to View Full Project Details
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Content Covering remaining width */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
                FEATURED PROJECT
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                {featured.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-gold-400/90">
                <MapPin size={13} />
                <span>{featured.location}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {featured.description}
            </p>

            <div className="p-4 rounded-xl bg-navy-850 border border-slate-700/80 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                Project Scope & Execution
              </span>
              <p className="text-xs font-medium text-slate-200">
                {featured.scope}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectProject(featured)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all group"
              >
                <span>Explore Project Details</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
