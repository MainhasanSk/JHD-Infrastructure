import React, { useState } from 'react';
import { Eye, MapPin, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ProjectShowcase({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(companyData.projects.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? companyData.projects
    : companyData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="all-projects" className="scroll-mt-20 py-24 relative bg-navy-950">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              Verified Project Portfolio
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Work Speaks for Us
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore selected work, active civil execution, and architectural design projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-gold-sm scale-105'
                  : 'bg-navy-900 border border-slate-700/80 text-slate-300 hover:border-gold-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-xl bg-navy-900 border border-slate-800 hover:border-gold-500/60 overflow-hidden shadow-xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow-gold-glow cursor-pointer flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-navy-950/90 backdrop-blur-md border border-gold-500/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
                    {project.badge || project.category}
                  </span>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Project</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Project Info Footer */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-navy-850/60">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="flex items-center gap-1 text-gold-400/90 font-medium">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </span>
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 truncate max-w-[200px]">
                    {project.scope}
                  </span>
                  <span className="text-gold-400 font-bold group-hover:translate-x-0.5 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
