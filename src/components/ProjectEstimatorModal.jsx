import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ProjectEstimatorModal({ isOpen, onClose }) {
  const [area, setArea] = useState(2000);
  const [projectType, setProjectType] = useState('residential');
  const [qualityTier, setQualityTier] = useState('premium');

  if (!isOpen) return null;

  // Approximate realistic guidance based on standard construction ranges
  const estimateTimelineMonths = () => {
    if (area <= 1200) return '5 - 7 Months';
    if (area <= 2500) return '8 - 11 Months';
    if (area <= 5000) return '11 - 15 Months';
    return '15 - 20 Months';
  };

  const projectTypeLabels = {
    residential: 'Residential Custom Home / Villa',
    commercial: 'Commercial Complex / Institutional',
    turnkey: 'Full Turnkey Civil, PEB & Interior'
  };

  const tierDetails = {
    standard: {
      name: 'Standard Engineering Tier',
      desc: 'Solid structural RCC frame, standard grade masonry, certified steel, basic electrical & sanitary provisions.'
    },
    premium: {
      name: 'Premium JHD Standard',
      desc: 'Architectural 3D elevations, brand cement & primary TMT steel, vitrified tiles, fast 5-day GMDA permit assistance.'
    },
    luxury: {
      name: 'Luxury Architectural & Turnkey',
      desc: 'Bespoke facade louvers, designer sanitaryware, false ceilings, acoustic treatment, swimming pool & high-end joinery.'
    }
  };

  const handleWhatsAppShare = () => {
    const text = `*JHD Infrastructure Project Estimator Summary*\n- Built-Up Area: ${area.toLocaleString()} sq. ft.\n- Project Type: ${projectTypeLabels[projectType]}\n- Finishing Tier: ${tierDetails[qualityTier].name}\n- Estimated Delivery Timeline: ${estimateTimelineMonths()}\n\nHello JHD Infrastructure, I calculated this preliminary scope on your website and would like to get a formal architectural consultation, bank loan BOQ, and building permission assistance.`;
    window.open(`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-xl bg-navy-900 border border-gold-500/40 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Project Scope & Timeline Estimator
              </h3>
              <p className="text-[11px] text-gold-400">
                Plan your construction parameters with JHD Infrastructure
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* 1. Built-up Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Approximate Built-Up Area
              </label>
              <span className="font-display font-bold text-lg text-gold-400 bg-navy-850 px-3 py-1 rounded border border-gold-500/30">
                {area.toLocaleString()} <span className="text-xs font-normal text-slate-400">sq. ft.</span>
              </span>
            </div>
            <input
              type="range"
              min="600"
              max="15000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-navy-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>600 sq.ft. (Compact)</span>
              <span>3,500 sq.ft. (Medium Villa)</span>
              <span>15,000+ sq.ft. (Commercial / PEB)</span>
            </div>
          </div>

          {/* 2. Project Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Select Project Nature
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'residential', label: 'Residential Home' },
                { id: 'commercial', label: 'Commercial Complex' },
                { id: 'turnkey', label: 'PEB / Turnkey Build' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setProjectType(type.id)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                    projectType === type.id
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-gold-sm'
                      : 'bg-navy-850 border-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Finishing Specification Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Specification & Finishing Tier
            </label>
            <div className="space-y-2">
              {Object.entries(tierDetails).map(([key, tier]) => (
                <div
                  key={key}
                  onClick={() => setQualityTier(key)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                    qualityTier === key
                      ? 'bg-navy-800/90 border-gold-500/60 shadow-gold-sm'
                      : 'bg-navy-850/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 border ${
                      qualityTier === key
                        ? 'border-gold-400 bg-gold-500 text-navy-950'
                        : 'border-slate-600'
                    }`}
                  >
                    {qualityTier === key && <Check size={12} strokeWidth={3} />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {tier.name}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-snug block">
                      {tier.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculation Summary Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-navy-850 via-navy-800 to-navy-900 border border-gold-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
              <Sparkles size={14} />
              <span>Project Roadmap Summary</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded bg-navy-950/70 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Estimated Timeline</span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {estimateTimelineMonths()}
                </span>
              </div>
              <div className="p-2.5 rounded bg-navy-950/70 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Next Step</span>
                <span className="font-display font-bold text-sm sm:text-base text-gold-300">
                  Land Survey & Drawings
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              * Official rates depend on soil testing, structural load, byelaw requirements, and architectural selections. JHD Infrastructure provides an itemized Bill of Quantities (BOQ) and bank loan estimates after site inspection.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppShare}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-all"
            >
              <MessageSquare size={16} />
              <span>Share Estimate on WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-semibold text-slate-300 bg-navy-850 hover:bg-navy-800 border border-slate-700 transition-colors"
            >
              <span>Close Estimator</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
