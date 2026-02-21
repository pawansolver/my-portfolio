"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoSectionProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({ onPrevious }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const video = videoRef.current;
    if (!video) return;

    const handleVideoLoad = () => {
      setIsLoaded(true);
      video.play().catch(err => console.log("Autoplay failed:", err));
    };

    video.addEventListener("loadeddata", handleVideoLoad);
    return () => video.removeEventListener("loadeddata", handleVideoLoad);
  }, [isMounted]);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    // h-screen ensures it takes full viewport height without overflow
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0">
        {isMounted ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            // object-cover ensures the video fills the area without stretching
            className="w-full h-full object-cover"
            style={{ 
              filter: "brightness(0.7) contrast(1.1)",
              // Removed scale(1.05) to prevent edges from being cut off
              transition: "opacity 1s ease-in-out",
              opacity: isLoaded ? 1 : 0
            }}
          >
            <source src="https://res.cloudinary.com/dvths4ecl/video/upload/v1770939068/14294714_3840_2160_24fps_vyyytu.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-black" />
        )}
        
        {/* Overlays - Adjusted for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content Overlay - Centered properly */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div 
          className={`transition-all duration-1000 transform ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Headline - Added responsive text sizes */}
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4">
            OUR <span className="text-blue-500">IDENTITY</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-light tracking-widest uppercase">
            Architects of the Digital Future
          </p>

          {/* Trust Indicators - Simplified for better fit */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { label: "Enterprise Security", color: "text-green-400" },
              { label: "99.9% Uptime", color: "text-blue-400" },
              { label: "24/7 AI Support", color: "text-purple-400" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                <span className="text-white/70 text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Border Lines - Fixed to edges */}
      <div className="absolute inset-0 z-30 pointer-events-none border-[1px] border-white/5" />
      
      {/* Navigation Hint (Optional) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
};

export default VideoSection;