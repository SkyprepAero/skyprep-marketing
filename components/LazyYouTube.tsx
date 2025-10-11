'use client';

import { useState, useEffect, useRef } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
}

// Declare YouTube IFrame API types
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function LazyYouTube({ videoId }: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isLoaded) return;

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (!iframeContainerRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player('background-video-player', {
        videoId: videoId,
        host: 'https://www.youtube-nocookie.com', // Privacy-enhanced mode
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          cc_load_policy: 0,
          fs: 0,
          disablekb: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onPlayerReady(event: any) {
      // Set playback rate to 2x when player is ready
      event.target.setPlaybackRate(2);
      event.target.playVideo();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onPlayerStateChange(event: any) {
      // Ensure playback rate stays at 2x
      if (event.data === window.YT.PlayerState.PLAYING) {
        event.target.setPlaybackRate(2);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isLoaded, videoId]);

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
    <div 
      ref={iframeContainerRef}
      className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 scale-150"
      style={{ pointerEvents: 'none' }}
    >
      <div 
        id="background-video-player"
        className="w-full h-full"
      />
    </div>
  );
}

