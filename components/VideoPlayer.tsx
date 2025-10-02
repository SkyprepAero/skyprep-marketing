"use client";

// Video path directly from public folder
const WingTowardsLeft = '/media/videos/wing-towardsleft.mp4';

interface VideoPlayerProps {
  videoPath?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  poster?: string;
}

export function VideoPlayer({
  videoPath = WingTowardsLeft,
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  className = "",
  poster
}: VideoPlayerProps) {
  return (
    <video
      className={`w-full h-auto ${className}`}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      controls={controls}
      poster={poster}
      preload="metadata"
      playsInline
    >
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// Usage Examples Component
export function VideoExamples() {
  return (
    <div className="space-y-8">
      {/* Basic Video Player */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Video Player</h3>
        <VideoPlayer />
      </section>

      {/* Autoplay Video (muted for browser compliance) */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Autoplay Video</h3>
        <VideoPlayer autoplay muted loop />
      </section>

      {/* Custom Styled Video */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Styled Video</h3>
        <VideoPlayer 
          className="rounded-lg shadow-lg"
          poster="/placeholder-video.jpg"
        />
      </section>

      {/* Background Video */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Background Video</h3>
        <div className="relative h-96 overflow-hidden rounded-lg">
          <VideoPlayer 
            autoplay 
            muted 
            loop 
            controls={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Overlay Content</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
