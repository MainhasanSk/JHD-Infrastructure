import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Award, Users, MapPin, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function About({ onOpenConsultation }) {
  const principles = [
    {
      title: "Triple Synergy: Engineer | Architect | Contractor",
      desc: "Integrated solutions from site survey, soil testing, and 3D architectural design to turnkey civil construction."
    },
    {
      title: "Fast 5-Day GMDA Building Permissions",
      desc: "Guaranteed prompt permission processing for residential, commercial, and institutional projects across Guwahati & Assam."
    },
    {
      title: "Bank Loan Project Estimates & Detailed BOQ",
      desc: "Official bank-approved estimates, transparent itemized quantities, and cost certainty with zero hidden escalation."
    },
    {
      title: "Versatile Construction & Development",
      desc: "Expertise spanning residential villas, commercial complexes, PEB warehouses, farm houses, pools, and resorts."
    },
    {
      title: "Disciplined Quality Control & Supervision",
      desc: "Certified cement and steel testing, seismic design compliance, and active on-site engineering supervision every day."
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 relative overflow-hidden bg-navy-950">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase (Brochure / Headquarters Visual) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 p-2 sm:p-2.5 bg-gradient-to-b from-navy-800 to-navy-900 shadow-2xl group">
              <div className="relative rounded-xl overflow-hidden bg-navy-950">
                <img
                  src="/WE-Construct-home-2.jpeg"
                  alt="We Construct Homes, Not Just Houses - JHD Infrastructure"
                  className="w-full h-auto block rounded-lg aspect-[4/3] object-cover bg-navy-950 transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/90 backdrop-blur-md border border-gold-500/40 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                  Residential Design & Execution
                </div>
              </div>
            </div>

            {/* Address & Operational Card */}
            <div className="p-4 rounded-xl bg-navy-900/95 border border-slate-700/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Head Office • Guwahati, Assam
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-300">
                      Sawkuchi, Dakshin Gaon, House N.3 (3rd floor), Near NEF college
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 shrink-0">
                  GMDA & Assam Wide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Approach */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                  About JHD Infrastructure
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                "We Construct Homes, <br />
                <span className="text-gold-gradient">Not Just Houses."</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong>JHD Infrastructure</strong>, we believe every structure should be a masterpiece of durability, functionality, and architectural elegance. Operating as licensed Engineers, Architects, and Contractors, we handle the entire project lifecycle—from rapid 5-day building permissions to final turnkey delivery.
            </p>

            {/* Principles Checklist */}
            <div className="space-y-3.5 pt-1">
              {principles.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
              >
                <span>Explore All Services</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={onOpenConsultation}
                className="text-xs font-semibold text-slate-300 hover:text-gold-400 underline underline-offset-4 transition-colors"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
