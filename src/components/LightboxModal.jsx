import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function LightboxModal({ project, projects, onClose, onSelectProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectImages = project?.images || (project ? [project.image] : []);

  useEffect(() => {
    setCurrentImageIndex(0);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        if (projectImages.length > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
        } else {
          handleNext();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (projectImages.length > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
        } else {
          handlePrev();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projectImages.length]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[prevIndex]);
  };

  const waInquiryLink = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    `Hello JHD Infrastructure, I am interested in learning more about your project: "${project.title}" (${project.category}). Could you please share more details?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl bg-navy-900 border border-gold-500/40 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-navy-950/80">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 border border-gold-500/30 rounded-full">
              {project.badge || project.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Project {currentIndex + 1} of {projects.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          {/* Project Image Viewport */}
          <div className="relative lg:col-span-8 bg-black flex flex-col items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] lg:max-h-none overflow-hidden group">
            <div className="relative flex-1 w-full h-full flex items-center justify-center p-2">
              <img
                src={projectImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[60vh]"
              />

              {/* Navigation Arrows for Project/Images */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (projectImages.length > 1) {
                    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
                  } else {
                    handlePrev();
                  }
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 border border-slate-700/80 text-white flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (projectImages.length > 1) {
                    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
                  } else {
                    handleNext();
                  }
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 border border-slate-700/80 text-white flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Thumbnails (Only show if multiple images exist) */}
            {projectImages.length > 1 && (
              <div className="w-full bg-navy-950/90 border-t border-slate-800 p-3 flex gap-2 overflow-x-auto custom-scrollbar">
                {projectImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === idx ? 'border-gold-500 shadow-gold-sm opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-navy-850/90 border-t lg:border-t-0 lg:border-l border-slate-800 space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-gold-400 font-medium mb-1.5">
                <MapPin size={13} />
                <span>{project.location}</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="p-3.5 rounded-lg bg-navy-900/90 border border-slate-700/60 mb-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Scope of Work:
                </span>
                <span className="text-xs font-medium text-slate-200">
                  {project.scope}
                </span>
              </div>

              {project.coordinates && (
                <div className="flex items-start gap-2 text-xs text-slate-400 bg-navy-950/60 p-2.5 rounded border border-slate-800">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300 block">Verified Site Coordinates</span>
                    <span className="font-mono text-[11px] text-slate-400">{project.coordinates}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <a
                href={waInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-all"
              >
                <MessageSquare size={16} />
                <span>Inquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${companyData.phones[0].tel}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-slate-300 bg-navy-900 hover:bg-navy-800 border border-slate-700 transition-colors"
              >
                <span>Call JHD Infrastructure</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
