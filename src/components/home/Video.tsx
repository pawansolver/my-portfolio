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
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          filter: "none",
          background: "transparent"
        }}
      >
        <source src="https://res.cloudinary.com/dvths4ecl/video/upload/v1770939068/14294714_3840_2160_24fps_vyyytu.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="heading-xl !text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            OUR <span className="text-brandOrange">IDENTITY</span>
          </h1>
          <p className="text-muted !text-white/90 uppercase tracking-[0.4em] mb-8 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Architects of the Digital Future
          </p>

          {/* 🚀 Popup Attach + Center Fix */}
          <div className="mt-6 flex justify-center w-full">
            <button onClick={() => openModal(`Hero Video Section - ${pathname}`)} className="btn-primary mx-auto">
              View Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}