"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/context/ModalContext"; // Popup Context
import { usePathname } from "next/navigation"; // Path tracking

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    // 🔥 bg-[#050505] black background smooth load ke liye
    <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        // 🔥 Strictly keeping your logic: opacity starts at 0 and fades in to 100
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          filter: "none",
          background: "transparent"
        }}
      >
        {/* 🔥 FULL UPDATE: Path fixed to root public and name fixed as per your screenshot */}
        <source src="/14294714_3840_2160_24fps.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Subtle dark overlay taaki white text hamesha clearly visible rahe */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* 🔥 container-custom for standard left-right padding */}
      <div className="container-custom absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // 🔥 Lifted slightly on mobile so it doesn't clash with bottom logos
          className="flex flex-col items-center w-full mt-[-8dvh] md:mt-0"
        >
          <h1 className="heading-xl !text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] !mb-4 md:!mb-6">
            OUR <span className="text-brandOrange">IDENTITY</span>
          </h1>

          {/* 🔥 Mobile optimized tracking and font sizes */}
          <p className="text-muted !text-white/90 uppercase tracking-[0.2em] md:tracking-[0.4em] !text-[10px] sm:!text-xs md:!text-sm mb-6 md:mb-8 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Architects of the Digital Future
          </p>

          {/* 🚀 Popup Attach + Center Fix */}
          <div className="mt-2 md:mt-4 flex justify-center w-full pointer-events-auto">
            <button onClick={() => openModal(`Hero Video Section - ${pathname}`)} className="btn-primary mx-auto">
              View Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
