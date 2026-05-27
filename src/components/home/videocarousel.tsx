"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoCarousel() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    { 
      id: "1194868041",  
      title: "La historia de tus residuos con Beland",
      isLocal: false 
    },
    { 
      id: "1194868315", 
      title: "La historia de tus residuos con Beland",
      isLocal: false 
    },
    { 
      id: "1194874591",  
      title: "La historia de tus residuos con Beland",
      isLocal: false 
    },
    { 
      id: "1110359756", 
      title: "Gestión de los residuos - Deborah DeLuca",
      isLocal: false 
    },
    { 
      id: "1194874522", 
      title: "Cristoph Circular",
      isLocal: false 
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const next = () => setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <section className="py-12 md:py-24 bg-background overflow-x-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* 1. Encabezado  */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
            <span className="text-orange-500">Beland</span> en <span className="text-[#769C48]">Acción</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-base italic mt-2 md:mt-3 font-medium tracking-tight px-4">
            "{videos[index].title}"
          </p>
        </div>

        {/* 2. Visor de Video */}
        <div className="relative group flex justify-center mx-auto mb-6 md:mb-10">
          
          <div className="relative bg-transparent z-10 overflow-hidden shadow-2xl w-full max-w-[400px] h-[500px]">
            
            {videos[index].isLocal ? (
              <video
                key={videos[index].id}
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                loop
                className="w-full h-full object-cover object-center brightness-90 transition-all hover:brightness-100" 
              />
            ) : (
              <iframe
                key={videos[index].id}
                src={`https://player.vimeo.com/video/${videos[index].id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                className="absolute inset-0 w-full h-full z-10"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                style={{ border: 0, backgroundColor: 'transparent' }}
              />
            )}

            {/* Texto decorativo Beland  */}
            <div className="absolute bottom-3 md:bottom-6 left-0 right-0 text-center pointer-events-none z-0">
              <h3 className="text-white/5 text-lg md:text-4xl font-black italic tracking-tighter uppercase leading-none select-none">
                beland
              </h3>
            </div>
          </div>

          {/* 3. Botones de Navegación  */}
          <div className="absolute bottom-0 right-0 translate-y-12 md:translate-y-14 flex gap-1 md:gap-2 z-50">
            <button 
              onClick={prev} 
              className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={next} 
              className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white shadow-2xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* 4. Botón Inferior */}
        <div className="mt-16 md:mt-20 flex justify-center w-full">
          <Link href="/media-gallery" className="group/btn flex items-center gap-2 md:gap-3 p-1.5 md:p-2 pr-3 md:pr-5 rounded-full bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#769C48] flex items-center justify-center text-white group-hover/btn:scale-110 transition-transform shadow-md">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-[#769C48]">Explora Más</span>
              <span className="text-[10px] md:text-xs font-bold text-slate-900 leading-none">Galería Multimedia</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}