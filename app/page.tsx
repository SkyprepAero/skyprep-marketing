'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaTimes, FaCheck, FaPlane, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { WhatsAppButton } from '@/components/WhatsAppButton';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  const targetDate = new Date('2025-10-20T18:37:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Show email popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 5000);

    // Local video playback control - set speed to 2x
    const setupVideo = () => {
      const videoElement = document.getElementById('background-video') as HTMLVideoElement;
      if (videoElement) {
        // Wait for video to be loaded
        videoElement.addEventListener('loadedmetadata', () => {
          videoElement.playbackRate = 2.0;
        });
        
        // Set speed when video starts playing
        videoElement.addEventListener('play', () => {
          videoElement.playbackRate = 2.0;
        });
        
        // If video is already loaded, set speed immediately
        if (videoElement.readyState >= 2) {
          videoElement.playbackRate = 2.0;
        }
      }
    };
    
    // Run after a short delay to ensure DOM is ready
    setTimeout(setupVideo, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(popupTimer);
    };
  }, [targetDate]);

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowEmailPopup(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Hide popup after 3 seconds with slide out animation
      setTimeout(() => {
        handleClosePopup();
      }, 3000);
    }, 1500);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://skyprepaero.com/#organization",
        "name": "SkyPrep Aero Aviation Coaching",
        "alternateName": "SkyPrep",
        "description": "Professional pilot training and aviation coaching for aspiring aviators. Expert guidance for DGCA examinations, flight training, and aviation career development.",
        "url": "https://skyprepaero.com",
        "logo": "https://skyprepaero.com/logo.png",
        "image": "https://skyprepaero.com/og-image.svg",
        "telephone": "+91-8788162210",
        "email": "teams@skyprepaero.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://x.com/theSkyPrep",
          "https://www.linkedin.com/company/theskyprep",
          "https://www.instagram.com/skyprepaero/",
          "https://www.youtube.com/@skyprep"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://skyprepaero.com/#website",
        "url": "https://skyprepaero.com",
        "name": "SkyPrep Aero Aviation Coaching",
        "description": "Professional pilot training and DGCA exam preparation",
        "publisher": {
          "@id": "https://skyprepaero.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://skyprepaero.com/#webpage",
        "url": "https://skyprepaero.com",
        "name": "SkyPrep Aero Aviation Coaching | Professional Pilot Training - Launching Soon",
        "isPartOf": {
          "@id": "https://skyprepaero.com/#website"
        },
        "about": {
          "@id": "https://skyprepaero.com/#organization"
        },
        "description": "Expert pilot training, DGCA exam preparation, and aviation coaching for aspiring pilots. Launching soon!",
        "inLanguage": "en-IN"
      }
    ]
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="fixed inset-0 w-screen h-screen bg-slate-900 overflow-hidden">
        {/* Local Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          id="background-video"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ pointerEvents: 'none' }}
        >
          <source src="https://media.skyprepaero.com/takeoff_coming_soon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/75 animate-gradient"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Glassmorphic Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-noise"></div>

        {/* Logo - Top Left */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-40 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
              <Image 
                width={128}
                height={128}
                src="/logo.png" 
                alt="SkyPrepAero Aviation Coaching" 
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative h-screen w-screen flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 max-w-screen max-h-screen overflow-hidden pt-16 sm:pt-20">
          
          {/* Hero Section */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in pt-20 md:pt-0">
            {/* Title with gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-3 tracking-tight animate-slide-up leading-tight">
              SkyPrep Aero
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200/90 font-medium tracking-wide mb-4 animate-slide-up animation-delay-100">
              Shaping Aviators with Precision
            </p>
            
            {/* Animated divider */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse animation-delay-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse animation-delay-400"></div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 via-amber-200 to-white animate-gradient-text tracking-wider leading-tight pb-2">
              Launching Soon
            </p>
          </div>

          {/* Premium Countdown Timer */}
          <div className="w-full max-w-4xl mb-6 sm:mb-8 animate-slide-up animation-delay-200">
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Glass card */}
                  <div className="relative bg-white/15 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl hover:border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-amber-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-amber-500/20 transition-all duration-500"></div>
                    
                    <div className="relative">
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 mb-1 sm:mb-2 tabular-nums">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-blue-300/80 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold leading-tight">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="w-full max-w-4xl mb-6 sm:mb-8 animate-slide-up animation-delay-400">
            <p className="text-center text-base sm:text-lg md:text-xl text-blue-100/80 mb-6 font-light">
              Your journey to the skies begins here
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { 
                  title: 'DGCA Prep', 
                  desc: 'Expert guidance',
                  icon: <FaPlane className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
                },
                { 
                  title: 'FocusONE', 
                  desc: 'Personalized training',
                  icon: <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-400" />
                },
                { 
                  title: 'Group Cohorts', 
                  desc: 'Learn together',
                  icon: <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400" />
                }
              ].map((service, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white/15 backdrop-blur-2xl rounded-xl p-3 sm:p-4 md:p-5 border border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="text-white font-bold text-xs sm:text-sm md:text-base mb-1 text-center">{service.title}</div>
                    <div className="text-blue-200/70 text-[10px] sm:text-xs text-center">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center animate-slide-up animation-delay-600">
            {/* Email */}
            <a 
              href="mailto:teams@skyprepaero.com" 
              className="inline-flex items-center gap-2 text-blue-300/90 hover:text-white transition-all duration-300 text-sm sm:text-base mb-4 hover:scale-105"
            >
              <FaEnvelope className="text-base sm:text-lg" />
              <span>teams@skyprepaero.com</span>
            </a>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 sm:gap-5 justify-center items-center mb-3">
              <a 
                href="https://x.com/theSkyPrep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/theskyprep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="https://www.instagram.com/skyprepaero/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="https://wa.me/918788162210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl" />
              </a>
            </div>

            {/* Phone Number */}
            <a 
              href="tel:+918788162210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm sm:text-base hover:scale-105"
            >
              <FaPhoneAlt className="text-base sm:text-lg" />
              <span>+91 8788162210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Copyright Footer */}
      <div className="fixed bottom-0 left-0 z-30">
        <div className="px-4 sm:px-6 py-3">
          <div className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} SkyPrep Aero. All rights reserved.
          </div>
        </div>
      </div>

      {/* Super Interactive Email Newsletter Popup */}
      {showEmailPopup && (
        <div className={`fixed bottom-6 right-6 z-50 max-w-sm ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-amber-500/30 rounded-3xl blur-xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-3xl rounded-2xl border border-white/40 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
            {/* Subtle background particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-6 left-6 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3s'}}></div>
            </div>
            
            {/* Floating close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-sm"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="relative p-6">
              {!isSubmitted ? (
                <>
                  {/* Clean Header with Offer */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      {/* Main icon - simplified */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                        <FaEnvelope className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Simple notification dot */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight mb-1">
                        🚀 Get Early Access
                      </h3>
                      <p className="text-blue-100/90 text-sm font-medium">
                        Be first to launch & get 14% off! ✈️
                      </p>
                      
                      {/* Launch offer badge */}
                      <div className="mt-2">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-3 py-1">
                          <span className="text-amber-300 text-xs font-bold">🎉</span>
                          <span className="text-amber-200 text-xs font-medium">14% OFF Launch Offer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Form */}
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-2xl blur-sm group-focus-within:blur-none transition-all duration-300"></div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="✉️ your.email@example.com"
                        required
                        className="relative w-full px-5 py-4 bg-white/20 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400/80 focus:bg-white/25 transition-all duration-300 text-sm font-medium shadow-inner backdrop-blur-sm hover:bg-white/22"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300">
                        <FaEnvelope className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-white/20"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Button content */}
                      {isSubmitting ? (
                        <>
                          <div className="relative">
                            <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          </div>
                          <span>Launching you aboard...</span>
                        </>
                      ) : (
                        <>
                          <FaEnvelope className="w-5 h-5 group-hover:animate-bounce" />
                          <span>Notify Me at Launch</span>
                          <div className="text-lg animate-pulse">🚀</div>
                        </>
                      )}
                      
                      {/* Success checkmark (hidden by default) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <FaCheck className="w-5 h-5" />
                      </div>
                    </button>
                  </form>

                  {/* Simple trust indicators */}
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-xs">
                      <div className="flex items-center gap-1 text-white/60">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span>🔒 Secure</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/60">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>📧 No Spam</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/60">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>✈️ Exclusive</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Clean Success State */
                <div className="text-center py-4">
                  <div className="relative inline-block mb-4">
                    {/* Success icon - simplified */}
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400/40 to-emerald-500/40 rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
                      <FaCheck className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    Welcome Aboard! 🎉
                  </h3>
                  <p className="text-green-100/90 text-sm font-medium mb-4">
                    You&apos;re locked in for 14% off at launch!
                  </p>
                  
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Launch notifications coming soon</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          33% { 
            transform: translate(30px, -50px) scale(1.1); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9); 
          }
        }
        
        @keyframes gradient {
          0% { opacity: 0.85; }
          50% { opacity: 0.95; }
          100% { opacity: 0.85; }
        }
        
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(100%);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientText {
          0%, 100% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 20px rgba(96, 165, 250, 0.6));
          }
          25% { 
            background-position: 25% 50%;
            filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.7));
          }
          50% { 
            background-position: 50% 50%;
            filter: drop-shadow(0 0 30px rgba(167, 139, 250, 0.8));
          }
          75% { 
            background-position: 75% 50%;
            filter: drop-shadow(0 0 25px rgba(96, 165, 250, 0.7));
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-gradient-text {
          animation: gradientText 4s ease-in-out infinite;
          background-size: 300% 300%;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          animation-fill-mode: both;
        }

        /* Noise texture background */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </>
  );
}
