import React from 'react';
import { FileCheck, Clock, CheckCircle2, ShieldCheck, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function BuildingPermission({ onOpenConsultation }) {
  const categories = [
    { name: "Residential Buildings", desc: "Independent villas, duplexes, multi-storey family homes" },
    { name: "Commercial Buildings", desc: "Shopping complexes, office buildings, retail spaces" },
    { name: "Institutional Buildings", desc: "Schools, colleges, training centers, community halls" },
    { name: "Other Building Projects", desc: "PEB warehouses, mixed-use structures, resorts" }
  ];

  const steps = [
    { num: "01", title: "Site Inspection & Byelaw Check", desc: "Land boundary verification, road width, FAR, and GMDA zoning check." },
    { num: "02", title: "Plan Preparation & Drawings", desc: "Architectural drawings, floor plans, sections, and structural stability certification." },
    { num: "03", title: "Document Verification", desc: "Title deed, jamabandi, trace map, tax receipts, and municipal formalities." },
    { num: "04", title: "Expedited 5-Day Processing", desc: "Proactive authority liaison for fast, hassle-free approval and official sanction." }
  ];

  return (
    <section id="permission" className="scroll-mt-20 py-20 relative bg-navy-950 border-t border-b border-gold-500/20 overflow-hidden">
      {/* Background blueprint subtle texture & radial glow */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border-2 border-gold-500/40 p-6 sm:p-12 shadow-2xl overflow-hidden">
          {/* Top Stamp / Ribbon */}
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 rotate-12 hidden md:block">
            <div className="px-10 py-2 bg-emerald-600 text-white font-black text-xs uppercase tracking-widest shadow-xl border border-emerald-400">
              FAST-TRACK 5 DAYS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  GMDA Areas & Other Locations across Assam
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Fast & Hassle-Free <br />
                  <span className="text-gold-gradient">Building Permission Service</span>
                </h2>
                <p className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <Clock size={20} />
                  <span>Permission Processing Within 5 Days</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Navigating municipal building byelaws and approvals can delay your construction for months. <strong>JHD Infrastructure</strong> offers specialized architectural drawing preparation and expedited liaison for quick, lawful approvals under Guwahati Metropolitan Development Authority (GMDA) and Assam municipal authorities.
              </p>

              {/* Coverage Categories */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Building Plan Preparation & Permission Assistance for:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories.map((cat) => (
                    <div
                      key={cat.name}
                      className="p-3 rounded-lg bg-navy-950/70 border border-slate-700/70 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{cat.name}</h4>
                        <p className="text-[11px] text-slate-400">{cat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
                >
                  <span>Apply for 5-Day Permission</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={`tel:${companyData.phones[0].tel}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-navy-800 border border-slate-700 hover:border-gold-500/50 transition-colors"
                >
                  <Phone size={14} className="text-gold-400" />
                  <span>Call: {companyData.phones[0].display}</span>
                </a>
              </div>
            </div>

            {/* Right Card: The Official "APPROVED" Visual & Process Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-navy-950/90 border border-emerald-500/40 shadow-2xl relative">
                {/* Stamp visual */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <FileCheck size={24} className="text-emerald-400" />
                    <div>
                      <span className="text-xs font-black uppercase text-white block">
                        Official Approval Guarantee
                      </span>
                      <span className="text-[11px] text-slate-400">
                        100% Byelaw-Compliant Drawings
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded border-2 border-emerald-500 text-emerald-400 font-mono font-black text-xs uppercase tracking-widest rotate-[-4deg]">
                    APPROVED
                  </div>
                </div>

                {/* 4 Quick Steps */}
                <div className="space-y-3.5 pt-4">
                  {steps.map((st) => (
                    <div key={st.num} className="flex items-start gap-3">
                      <span className="font-mono font-black text-sm text-gold-400 bg-navy-850 px-2 py-0.5 rounded border border-gold-500/30 shrink-0">
                        {st.num}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{st.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-snug">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center">
                  <p className="text-[11px] text-emerald-300 font-semibold">
                    Guaranteed Fast Submission • Zero Unnecessary Back-and-Forth
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
