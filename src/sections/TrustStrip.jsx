import React from 'react';
import { Award, Clock, Users, Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TrustStrip() {
  const pillars = [
    {
      icon: Award,
      title: "Quality Work",
      subtitle: "Grade-Tested Steel, Cement & Precise Masonry"
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      subtitle: "Milestone-Tracked Civil Schedules & Punctuality"
    },
    {
      icon: Users,
      title: "Experienced Team",
      subtitle: "Registered Civil Engineers & Creative Architects"
    },
    {
      icon: Handshake,
      title: "End-to-End Solutions",
      subtitle: "From Land Survey & Permit to Turnkey Keys"
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-navy-900/95 backdrop-blur-xl border border-gold-500/35 rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-5' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-gold-sm">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide flex items-center gap-1.5">
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
