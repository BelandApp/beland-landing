"use client";

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 z-50", className)}>
      {/* Contenedor que NO ocupa espacio real en el alto de la barra */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
        <Image 
          src="/screenshots/mundo.beland.png" 
          alt="Logo Beland"
          width={150} 
          height={150}
          // El logo mide 75px en móvil y 110px en desktop, flotando sobre la barra
          className="absolute max-w-none w-[75px] h-[75px] md:w-[110px] md:h-[110px] object-contain"
          priority
        />
      </div>
      
      {/* Texto Beland - Con margen para no chocar con el logo que flota */}
      <span className="hidden md:block font-bold text-xl">
    Beland
  </span>
    </Link>
  );
}