import React from 'react';
import { MessageSquareQuote, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Testimonials({ onOpenConsultation }) {
  return (
    <section className="py-20 relative bg-navy-950 border-b border-slate-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl bg-navy-900/80 border border-gold-500/20 p-8 sm:p-10 shadow-xl text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto">
            <MessageSquareQuote size={24} />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
              Client Feedback & Handover
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Authentic Client Reviews & Handover Letters
            </h2>
          </div>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <strong>JHD Infrastructure</strong> values transparent, long-term client relationships. We take immense pride in delivering on time, adhering to byelaw approvals, and providing structural craftsmanship that endures generations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2">
            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <CheckCircle2 size={14} className="text-gold-400" />
                <span>Zero Fabricated Reviews Policy</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Every review represents a verified physical site delivered under full client satisfaction and GMDA compliance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <FileText size={14} className="text-gold-400" />
                <span>Client Completion Certificates</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Formal project completion records, structural stability certificates, and occupancy documentation.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all"
            >
              <span>Speak Directly with Our Engineers</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
