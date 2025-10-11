'use client';

import { useState, useEffect } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
}

export function LazyYouTube({ videoId, title }: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Auto-load after 2 seconds to improve initial page load
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad && !isLoaded) {
      setIsLoaded(true);
    }
  }, [shouldLoad, isLoaded]);

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
        {/* Thumbnail preview with play button */}
        <div 
          className="absolute inset-0 cursor-pointer group"
          onClick={() => setIsLoaded(true)}
        >
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600/80 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all group-hover:scale-110">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      id="background-video"
      className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 scale-150"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1`}
      title={title}
      allow="autoplay; encrypted-media"
      style={{ pointerEvents: 'none' }}
      loading="lazy"
    />
  );
}

