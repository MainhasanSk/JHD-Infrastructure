import React from 'react';
import { Users, Shield, Briefcase, Award } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Team({ onOpenConsultation }) {
  return (
    <section id="team" className="scroll-mt-20 py-24 relative bg-navy-900 border-t border-b border-slate-800/80">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              The People Behind The Build
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Meet Our Leadership & Engineering Team
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Certified civil engineers, creative architects, GMDA liaison officers, and experienced site supervisors dedicated to building your dream home with total integrity.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {companyData.teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl bg-navy-850 border border-slate-800 hover:border-gold-500/50 overflow-hidden shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo Viewport */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-navy-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-navy-950/85 backdrop-blur-md border border-gold-500/30">
                  {member.badge}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-gold-400/90 leading-tight">
                    {member.title}
                  </p>
                  <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-400">JHD Infrastructure</span>
                  <span className="text-emerald-400 font-medium">On-Duty</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Client Customization */}
        <div className="mt-12 p-4 rounded-xl bg-navy-950/60 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-gold-400 font-semibold">Head Office:</span> Sawkuchi, Dakshin Gaon, House N.3 (3rd floor), Near NEF college, Guwahati, Assam.
          </p>
        </div>
      </div>
    </section>
  );
}
