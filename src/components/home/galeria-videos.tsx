"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function GaleriaVideos() {
  const videos = [
    { id: "1110360770", title: "La historia de tus residuos con Beland" },
    { id: "1110359756", title: "Gestión de los residuos - Deborah DeLuca" },
    { id: "1110358536", title: "Cristoph Circular" },
    { id: "1105292422", title: "Beland endulza la noche de museos (Buenos Aires)" },
    { id: "1105291453", title: "Deborah De Luca Circular" },
    { id: "1101640058", title: "BENJA " },
    { id: "1092160562", title: "Rocío Toaquiza" }
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline font-bold">
          <ArrowLeft className="w-4 h-4" /> Volver a la Home
        </Link>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
          Galería <span className="text-primary">Completa</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            // Usamos index en la key por si acaso para evitar problemas de IDs duplicados
            <div key={`${video.id}-${index}`} className="space-y-4">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-border bg-black shadow-xl">
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold px-4">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}