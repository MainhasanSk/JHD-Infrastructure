import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Buildings & Villas',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*New Consultation Request — JHD Infrastructure*\nName: ${formData.name || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nEmail: ${formData.email || 'Not specified'}\nService Required: ${formData.projectType}\nLocation: ${formData.location || 'Not specified'}\nMessage: ${formData.message || 'I would like to discuss a project with JHD Infrastructure.'}`;
    window.open(`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-lg bg-navy-900 border border-gold-500/40 rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Request Project Consultation
            </h3>
            <p className="text-xs text-gold-400">
              JHD Infrastructure • Engineer | Architect | Contractor
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle size={36} />
              </div>
              <h4 className="font-display font-bold text-xl text-white">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, {formData.name || 'valued client'}. Our civil engineering team will review your parameters and get in touch with you promptly.
              </p>
              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp Directly</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-slate-200 underline pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 63020 14977"
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Residential Buildings & Villas">Residential Buildings & Villas</option>
                    <option value="Commercial Buildings">Commercial Buildings</option>
                    <option value="GMDA 5-Day Building Permission">Building Permission (5 Days)</option>
                    <option value="Engineering Consultancy & BOQ">Engineering Consultancy & BOQ</option>
                    <option value="PEB Structures & Warehouses">PEB Structures & Warehouses</option>
                    <option value="Farm Houses & Agriculture">Farm Houses & Agriculture</option>
                    <option value="Swimming Pools & Resorts">Swimming Pools & Resorts</option>
                    <option value="Interior & Exterior Works">Interior & Exterior Works</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Sawkuchi / Guwahati / Assam"
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Plot size, number of floors, construction timeline, building permission requirements..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-navy-850 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-sm transition-all"
                >
                  <Send size={15} />
                  <span>Request Consultation</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  Or call directly:{' '}
                  <a href={`tel:${companyData.phones[0].tel}`} className="text-gold-400 font-semibold font-mono underline">
                    {companyData.phones[0].display}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
