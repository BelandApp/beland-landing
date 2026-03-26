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
      id: "local-01", 
      title: "Bienvenidos a Beland", 
      url: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774060033/home.1_zoze9u.mp4", 
      isLocal: true 
    },
    { id: "1110360770", title: "La historia de tus residuos con Beland", isLocal: false },
    { id: "1110359756", title: "Gestión de los residuos - Deborah DeLuca", isLocal: false },
    { id: "1110358536", title: "Cristoph Circular", isLocal: false }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const next = () => setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container px-6 mx-auto max-w-5xl">
        
        {/* 1. Encabezado Estilo Nosotros */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
            <span className="text-orange-500">Beland</span> en <span className="text-[#769C48]">Acción</span>
          </h2>
          <p className="text-slate-500 text-lg italic mt-4 font-medium tracking-tight">
            "{videos[index].title}"
          </p>
        </div>

        {/* 2. Visor de Video */}
        <div className="relative group max-w-4xl mx-auto mb-12">
          
          <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black border-4 border-white z-10">
            
            {videos[index].isLocal ? (
              <video
                key={videos[index].url}
                ref={videoRef}
                src={videos[index].url}
                controls
                playsInline
                
                loop
                
                className="absolute inset-0 w-full h-full object-contain bg-black brightness-90 transition-all hover:brightness-100" 
              />
            ) : (
              <iframe
                key={videos[index].id}
                src={`https://player.vimeo.com/video/${videos[index].id}?badge=0&autopause=0&quality=1080p&autoplay=1`}
                className="absolute inset-0 w-full h-full z-10"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ border: 0, width: '100%', height: '100%' }}
              />
            )}

            {/* Texto decorativo Beland  */}
            <div className="absolute bottom-12 left-0 right-0 text-center pointer-events-none z-0">
              <h3 className="text-white/5 text-[5rem] md:text-[8rem] font-black italic tracking-tighter uppercase leading-none select-none">
                beland
              </h3>
            </div>
          </div>

          {/* 3. Botones de Navegación  */}
          <div className="absolute -bottom-6 right-8 flex gap-2 z-50">
            <button 
              onClick={prev} 
              className="w-12 h-12 rounded-2xl bg-white shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next} 
              className="w-12 h-12 rounded-2xl bg-white shadow-2xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 4. Botón Inferior */}
        <div className="mt-20 flex justify-center w-full">
          <Link href="/media-gallery" className="group/btn flex items-center gap-4 p-2 pr-6 rounded-full bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-[#769C48] flex items-center justify-center text-white group-hover/btn:scale-110 transition-transform shadow-md">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#769C48]">Explora Más</span>
              <span className="text-sm font-bold text-slate-900 leading-none">Galería Multimedia</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}