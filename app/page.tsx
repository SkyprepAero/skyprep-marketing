'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaTimes, FaCheck, FaPlane, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { WhatsAppButton } from '@/components/WhatsAppButton';

// Uncomment this interface when you need the countdown timer
// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

export default function ComingSoon() {
  // Uncomment these lines when you need the countdown timer
  // const targetDate = new Date('2025-10-20T18:37:00').getTime();
  // const [timeLeft, setTimeLeft] = useState<TimeLeft>({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });
  
  const [mounted, setMounted] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Uncomment this section when you need the countdown timer
    // const calculateTimeLeft = () => {
    //   const now = new Date().getTime();
    //   const difference = targetDate - now;
    //
    //   if (difference > 0) {
    //     setTimeLeft({
    //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //       hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //       minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    //       seconds: Math.floor((difference % (1000 * 60)) / 1000),
    //     });
    //   }
    // };
    //
    // calculateTimeLeft();
    // const timer = setInterval(calculateTimeLeft, 1000);

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
      // clearInterval(timer); // Uncomment when using countdown timer
      clearTimeout(popupTimer);
    };
  }, []); // Add [targetDate] to dependencies when using countdown timer

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
      
      <div className="fixed inset-0 w-screen h-screen min-h-screen bg-slate-900 overflow-hidden" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          id="background-video"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 scale-150"
          src="https://www.youtube.com/embed/OOCW7J-Vz8k?autoplay=1&mute=1&loop=1&playlist=OOCW7J-Vz8k&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1"
          title="Aviation Background Video - SkyPrep Aero"
          allow="autoplay; encrypted-media"
          style={{ pointerEvents: 'none' }}
        />
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
        <div className="absolute top-1 left-1 sm:top-3 sm:left-3 z-40 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
            <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image 
                width={80}
                height={80}
                src="/logo.png" 
                alt="SkyPrepAero Aviation Coaching" 
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative h-screen w-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 max-w-screen max-h-screen overflow-hidden py-2 sm:py-3">
          
          {/* Hero Section */}
          <div className="text-center mb-2 sm:mb-4 md:mb-6 animate-fade-in">
            {/* Title with gradient - Main H1 */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-1 sm:mb-2 md:mb-3 tracking-tight animate-slide-up leading-tight">
              SkyPrep Aero
            </h1>
            
            {/* Tagline - H2 */}
            <h2 className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/90 font-medium tracking-wide mb-2 sm:mb-3 md:mb-4 animate-slide-up animation-delay-100">
              Shaping Aviators with Precision
            </h2>
            
            {/* Animated divider */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="flex gap-0.5 sm:gap-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400 animate-pulse animation-delay-200"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400 animate-pulse animation-delay-400"></div>
              </div>
              <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 via-amber-200 to-white animate-gradient-text tracking-wider leading-tight pb-1 sm:pb-2 mb-2 sm:mb-3 md:mb-4">
              Launching Soon
            </p>

            {/* Launch Offer Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-400/50 sm:border-2 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300 mb-2 sm:mb-4 md:mb-6">
              <span className="text-base sm:text-xl md:text-2xl">🎉</span>
              <span className="text-white font-bold text-xs sm:text-sm md:text-lg lg:text-xl">14% OFF Launch Offer</span>
            </div>
          </div>

          {/* Premium Countdown Timer */}
        {/*  <div className="w-full max-w-4xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 animate-slide-up animation-delay-200">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="relative group">
                 
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl md:rounded-2xl blur-md sm:blur-lg md:blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  <div className="relative bg-white/15 backdrop-blur-2xl rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-4 lg:p-6 xl:p-8 border border-white/20 shadow-2xl hover:border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 sm:hover:-translate-y-1">
                   
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-amber-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-amber-500/20 transition-all duration-500"></div>
                    
                    <div className="relative">
                      <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 mb-0.5 sm:mb-1 md:mb-2 tabular-nums leading-none">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-blue-300/80 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-semibold leading-tight">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>*/}

          {/* Enhanced Services Grid */}
          <div className="w-full max-w-5xl mb-2 sm:mb-4 md:mb-6 animate-slide-up animation-delay-200">
            <h2 className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-blue-100/90 mb-2 sm:mb-4 md:mb-6 font-light">
              Your journey to the skies begins here
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {[
                { 
                  title: 'DGCA Prep', 
                  desc: 'Expert guidance for all aviation exams',
                  icon: <FaPlane className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-400" />
                },
                { 
                  title: 'FocusONE', 
                  desc: 'Personalized one-on-one training',
                  icon: <FaGraduationCap className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-amber-400" />
                },
                { 
                  title: 'Group Cohorts', 
                  desc: 'Collaborative learning experience',
                  icon: <FaUsers className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-purple-400" />
                }
              ].map((service, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white/20 backdrop-blur-3xl rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 border border-white/30 hover:border-white/40 hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-2xl">
                    <div className="mb-1.5 sm:mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-black text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2 text-center">{service.title}</h3>
                    <p className="text-blue-100/80 text-[10px] sm:text-xs md:text-sm text-center leading-relaxed">{service.desc}</p>
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
              className="inline-flex items-center gap-1 sm:gap-2 text-blue-300/90 hover:text-white transition-all duration-300 text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2 md:mb-3 hover:scale-105"
            >
              <FaEnvelope className="text-xs sm:text-sm" />
              <span>teams@skyprepaero.com</span>
            </a>
            
            {/* Social Media Icons */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-1.5 sm:mb-2 md:mb-3">
              <a 
                href="https://x.com/theSkyPrep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/theskyprep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base sm:text-xl md:text-2xl" />
              </a>
              <a 
                href="https://www.instagram.com/skyprepaero/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base sm:text-xl md:text-2xl" />
              </a>
              <a 
                href="https://wa.me/918788162210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base sm:text-xl md:text-2xl" />
              </a>
            </div>

            {/* Phone Number */}
            <a 
              href="tel:+918788162210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 text-[10px] sm:text-xs md:text-sm hover:scale-105"
            >
              <FaPhoneAlt className="text-xs sm:text-sm" />
              <span>+91 8788162210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Copyright Footer */}
      <div className="fixed bottom-0 right-0 z-30 pointer-events-none">
        <div className="px-2 sm:px-4 py-2">
          <div className="text-white/60 text-[10px] sm:text-xs font-medium">
            © {new Date().getFullYear()} SkyPrep Aero. All rights reserved.
          </div>
        </div>
      </div>

      {/* Super Interactive Email Newsletter Popup */}
      {showEmailPopup && (
        <div className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 max-w-[calc(100vw-1rem)] sm:max-w-sm ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
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
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 z-10 bg-black/20 hover:bg-black/40 rounded-full p-1.5 sm:p-2 backdrop-blur-sm"
            >
              <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

            <div className="relative p-3 sm:p-4 md:p-6">
              {!isSubmitted ? (
                <>
                  {/* Clean Header with Offer */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5">
                    <div className="relative">
                      {/* Main icon - simplified */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                        <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      
                      {/* Simple notification dot */}
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight mb-0.5 sm:mb-1">
                        🚀 Get Early Access
                      </h3>
                      <p className="text-blue-100/90 text-xs sm:text-sm font-medium">
                        Be first to launch & get 14% off! ✈️
                      </p>
                      
                      {/* Launch offer badge */}
                      <div className="mt-1 sm:mt-2">
                        <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                          <span className="text-amber-300 text-[10px] sm:text-xs font-bold">🎉</span>
                          <span className="text-amber-200 text-[10px] sm:text-xs font-medium">14% OFF Launch Offer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Form */}
                  <form onSubmit={handleEmailSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 rounded-xl sm:rounded-2xl blur-sm group-focus-within:blur-none transition-all duration-300"></div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="✉️ your.email@example.com"
                        required
                        className="relative w-full px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 bg-white/20 border border-white/30 sm:border-2 rounded-xl sm:rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400/80 focus:bg-white/25 transition-all duration-300 text-xs sm:text-sm font-medium shadow-inner backdrop-blur-sm hover:bg-white/22"
                      />
                      <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300">
                        <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white font-bold rounded-xl sm:rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-white/20"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Button content */}
                      {isSubmitting ? (
                        <>
                          <div className="relative">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          </div>
                          <span className="text-xs sm:text-sm">Launching you aboard...</span>
                        </>
                      ) : (
                        <>
                          <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                          <span className="text-xs sm:text-sm">Notify Me at Launch</span>
                          <div className="text-base sm:text-lg animate-pulse">🚀</div>
                        </>
                      )}
                      
                      {/* Success checkmark (hidden by default) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </button>
                  </form>

                  {/* Simple trust indicators */}
                  <div className="mt-2 sm:mt-3 md:mt-4 text-center">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
                      <div className="flex items-center gap-0.5 sm:gap-1 text-white/60">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full"></div>
                        <span>🔒 Secure</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 text-white/60">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
                        <span>📧 No Spam</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 text-white/60">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"></div>
                        <span>✈️ Exclusive</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Clean Success State */
                <div className="text-center py-2 sm:py-3 md:py-4">
                  <div className="relative inline-block mb-2 sm:mb-3 md:mb-4">
                    {/* Success icon - simplified */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-400/40 to-emerald-500/40 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
                      <FaCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                    Welcome Aboard! 🎉
                  </h3>
                  <p className="text-green-100/90 text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4">
                    You&apos;re locked in for 14% off at launch!
                  </p>
                  
                  <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full"></div>
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
