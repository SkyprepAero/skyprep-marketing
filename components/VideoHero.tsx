"use client";

import { useEffect } from "react";
import home from "@/content/home.json";

interface VideoHeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function VideoHero({ title, description, buttonText, buttonHref }: VideoHeroProps) {
  const videoId = home.heroVideoId;
  const videoSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&fs=0&disablekb=1&iv_load_policy=3&enablejsapi=1&vq=hd1080&quality=hd1080&fmt=22`;

  useEffect(() => {
    const iframe = document.getElementById('hero-video') as HTMLIFrameElement;
    if (iframe) {
      const handleLoad = () => {
        try {
          iframe.contentWindow?.postMessage('{"event":"command","func":"setPlaybackRate","args":[3]}', '*');
        } catch (e) {
          console.log('YouTube API not ready:', e);
        }
      };
      
      iframe.addEventListener('load', handleLoad);
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section className="relative overflow-hidden w-screen h-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      {/* Video Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10" />
      <iframe
        id="hero-video"
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="eager"
        aria-label={`${title} - ${description}`}
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200 max-w-3xl mx-auto">
            {description}
          </p>
          <a 
            href={buttonHref}
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in-up animate-delay-400"
            aria-label={`${buttonText} - ${title}`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
