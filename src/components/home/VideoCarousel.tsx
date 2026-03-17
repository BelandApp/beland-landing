"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoCarousel() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  const videos = [
    { id: "1110360770", title: "La historia de tus residuos con Beland" },
    { id: "1110359756", title: "Gestión de los residuos - Deborah DeLuca" },
    { id: "1110358536", title: "Cristoph Circular" }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const next = () => setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Encabezado del Carrusel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <PlayCircle className="w-4 h-4" />
              En Movimiento
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Beland en <span className="text-primary">Acción</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg italic md:max-w-xs border-l-2 border-primary/30 pl-4">
            "{videos[index].title}"
          </p>
        </div>

        {/* El Visor del Video */}
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group">
          <iframe
            key={videos[index].id}
            src={`https://player.vimeo.com/video/${videos[index].id}?badge=0&autopause=0&quality=1080p`}
            className="absolute inset-0 w-full h-full z-10"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ border: 0 }}
          />
          
          {/* Flechas de Navegación - Ahora con z-30 y sin opacity-0 */}
          <button 
            onClick={prev} 
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center z-30 hover:bg-primary transition-all hover:scale-110 border border-white/10"
            aria-label="Video anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center z-30 hover:bg-primary transition-all hover:scale-110 border border-white/10"
            aria-label="Siguiente video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Botón para ir a la Galería Completa */}
        <div className="mt-12 flex justify-center">
          <Link href="/media-gallery">
            <button className="group flex items-center gap-3 bg-card border border-border/60 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-lg">
              VER TODOS LOS VIDEOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}