import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Compass,
  ShieldCheck,
  Sparkles,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onOpenConsultation, onOpenEstimator }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-navy-950"
    >
      {/* Background Architectural Blueprint Grid & Cinematic Gradient */}
      <div className="absolute inset-0 bg-blueprint opacity-35 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-hero pointer-events-none"></div>

      {/* Decorative Gold & Blue Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-navy-700/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-gold-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 shadow-gold-sm">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold-300">
                JHD INFRASTRUCTURE • ENGINEER | ARCHITECT | CONTRACTOR
              </span>
            </div>

            {/* Main Tagline & Company Name */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                YOUR DREAM HOME <br />
                <span className="text-gold-gradient">OUR RESPONSIBILITY</span>
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <span className="font-display font-bold text-base sm:text-xl text-slate-100 tracking-wide">
                  "We Construct Homes, not Just Houses"
                </span>
                <span className="text-gold-400 font-bold hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-semibold text-gold-300/90 tracking-wider uppercase">
                  Building a Better Tomorrow Together
                </span>
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              From certified land survey and 2D/3D architectural elevations to turnkey civil construction, PEB warehouses, and guaranteed <strong className="text-gold-300">5-day GMDA building permission processing</strong> in Guwahati and Assam.
            </p>

            {/* 5-Day Fast-Track Permission Highlight Strip */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-navy-900/90 via-navy-850 to-navy-900/90 border border-gold-500/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Fast & Hassle-Free Building Permission
                  </span>
                  <span className="text-[11px] text-emerald-300 font-semibold">
                    Permission Processing Within 5 Days • GMDA Areas
                  </span>
                </div>
              </div>
              <a
                href="#permission"
                className="self-start sm:self-auto px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors shrink-0"
              >
                Learn More
              </a>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide text-white bg-navy-900/90 hover:bg-navy-850 border border-slate-700 hover:border-gold-500/50 transition-all duration-300"
              >
                <span>Our Services</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md text-xs font-semibold text-gold-300 hover:text-gold-200 transition-colors"
                title="Calculate preliminary project scope and timeline"
              >
                <Compass size={16} />
                <span className="underline underline-offset-4 decoration-gold-500/50">Project Estimator</span>
              </button>
            </div>

            {/* Direct Phone & Email on Hero */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-xl">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Phone size={13} className="text-gold-400 shrink-0" />
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Call / WhatsApp:</span>
                <a
                  href={`tel:${companyData.phones[0].tel}`}
                  className="hover:text-gold-400 font-bold font-mono text-white transition-colors"
                >
                  {companyData.phones[0].display}
                </a>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Mail size={13} className="text-gold-400 shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-gold-400 font-medium text-slate-300 transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Column - High-End Video Showcase with Official 3D Gold Logo & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Architectural Frame */}
              <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-gold-500/40 via-slate-800/50 to-gold-500/20 backdrop-blur-md shadow-2xl">
                {/* Main Video Viewport */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-navy-950 border border-slate-700/60 group">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    poster="/axomi-design.jpg"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  >
                    <source src="/hero-section-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/40 pointer-events-none"></div>

                  {/* Top Badge: Video Showcase */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-navy-950/90 backdrop-blur-md border border-gold-500/50 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                      Site Video Showcase
                    </span>
                  </div>

                  {/* Top Right Floating Controls (Play/Pause & Mute/Unmute) */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-full bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/40 backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-90"
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      title={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/40 backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-90"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      title={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>

                  {/* Floating 3D Logo Badge in Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-navy-950/95 backdrop-blur-md border border-gold-500/40 shadow-2xl">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-lg overflow-hidden border border-gold-500/50 p-1 bg-navy-900 shrink-0 flex items-center justify-center">
                        <img
                          src="/jhd-logo.png"
                          alt="JHD Infrastructure Official 3D Crest"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="font-display font-black text-sm sm:text-base text-white tracking-wider">
                            JHD INFRASTRUCTURE
                          </h2>
                        </div>
                        <p className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">
                          Engineer • Architect • Contractor
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Sawkuchi, Dakshin Gaon • Guwahati, Assam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engineering Quality Stamp */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3 rounded-xl bg-navy-900/95 border border-gold-500/50 shadow-gold-sm backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <CheckCircle2 size={17} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Assam & GMDA
                  </span>
                  <span className="text-xs font-bold text-white">
                    End-to-End Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
