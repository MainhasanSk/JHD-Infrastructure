import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Mail, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Buildings',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `*New Consultation Request — JHD Infrastructure*\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'Not provided'}\nEmail: ${formData.email || 'N/A'}\nService Required: ${formData.projectType}\nProject Location: ${formData.location || 'Guwahati / Assam'}\nProject Details: ${formData.message || 'I would like to consult JHD Infrastructure regarding a project / building permission.'}`;
    window.open(`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 relative bg-navy-900 border-t border-slate-800/80">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-dense opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Phone Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                  Connect Directly
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Let's Talk About Your Dream Project
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Reach out directly to our engineering, architectural, and GMDA permission team. We are ready to examine your plot size, architectural drawings, and construction timeline.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Phone Card */}
              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-slate-700/80 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Call / WhatsApp Helpline
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors font-mono">
                    {companyData.phones[0].display}
                  </span>
                  <span className="text-[11px] text-slate-400 block">Click to call immediately</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-slate-700/80 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-gold-300 transition-colors">
                    {companyData.email}
                  </span>
                  <span className="text-[11px] text-slate-400 block">Send drawings & inquiries</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={companyData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-950/60 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                      Fast Messaging
                    </span>
                    <span className="font-display font-bold text-base text-white">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-emerald-400/80 block">Direct consultation</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-300 group-hover:translate-x-1 transition-transform">
                  Open →
                </span>
              </a>
            </div>

            {/* Office Location Card */}
            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-700/80 space-y-2">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Office Address</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Sawkuchi, Dakshin Gaon, House N.3 (3rd floor), Near NEF college
                  </p>
                  <p className="text-xs text-gold-400 font-semibold mt-0.5">
                    Guwahati, Assam • GMDA Areas & Other Locations
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-emerald-300">
                <Clock size={13} />
                <span>Fast 5-Day Building Permission Liaison Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Request a Project Consultation
                  </h3>
                  <p className="text-xs text-gold-400">
                    JHD Infrastructure • Engineer | Architect | Contractor
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Sparkles size={16} />
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Thank You, {formData.name || 'Valued Client'}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your parameters have been logged. The engineering team at JHD Infrastructure will contact you promptly at {formData.phone || 'your phone number'}.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-colors"
                    >
                      <MessageSquare size={16} />
                      <span>Send to Official WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center py-3 px-5 rounded-md text-xs font-semibold text-slate-300 bg-navy-900 hover:bg-navy-800 border border-slate-700 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 63020 14977"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="Residential Buildings">Residential Buildings & Villas</option>
                        <option value="Commercial Buildings">Commercial Buildings & Complexes</option>
                        <option value="GMDA 5-Day Building Permission">Building Permission & Approval (5 Days)</option>
                        <option value="Engineering Consultancy & BOQ">Engineering Consultancy & BOQ</option>
                        <option value="PEB Structures & Warehouses">PEB Structures & Warehouses</option>
                        <option value="Farm Houses & Agricultural Structures">Farm Houses & Agriculture</option>
                        <option value="Swimming Pools & Resorts">Swimming Pools, Resorts & Hotels</option>
                        <option value="Interior & Exterior Works">Interior & Exterior Works</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Location / Plot Area
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Sawkuchi / Guwahati / GMDA Area / Assam"
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Plot dimensions, number of floors, construction timeline, building permission needs..."
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 resize-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-sm transition-all duration-300"
                    >
                      <Send size={15} />
                      <span>Submit Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
