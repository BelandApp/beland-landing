"use client";

import React, { useRef } from "react"; // Añadido useRef
import Hero from "../components/home/hero";
import ImpactStats from "../components/home/impactstats";
import Features from "../components/home/features";
import EcosistemaBeland from "../components/home/ecosistemabeland";
import VideoCarousel from "../components/home/videocarousel";
import Link from "next/link";
import { ArrowRight, Quote, Users, ChevronLeft, ChevronRight } from "lucide-react"; // Añadidas flechas

const testimonials = [
  {
    quote: "Together we make a difference. A big thanks to Beland and Melodic Movement for making this event circular.",
    author: "Cristoph",
    role: "Dj & producer - Inglaterra",
    color: "border-orange-500"
  },
  {
    quote: "Si no hubieran recicladores en el mundo, el relleno sanitario colapsaría",
    author: "Rocio Toaquiza",
    role: "Reciladora del CEGAM Tumbaco",
    color: "border-[#769C48]"
  },
  {
    quote: "Son fundamentales estas propuestas ciudadanas de poder anclar la cultura con la gestión ambiental",
    author: "Santiago Sandoval",
    role: "Secretario de Ambiente del Distrito Metropolitano de Quito",
    color: "border-slate-800"
  },
  {
    quote: "Beland es una plataforma que transforma acciones en valor para la comunidad y los usuarios.. La iniciativa se distingue por entregar los residuos recolectados a recicladores de base.",
    author: "Secretaría de Ambiente DMQ",
    role: "Premios Quito Sostenible 2025",
    color: "border-[#769C48]"
  },
  {
    quote: "Estos regalos (los residuos) son muy valiosos para nosotros, para nuestros ingresos..",
    author: "Manuel C.",
    role: "Reciclador del CEGAM Calderón",
    color: "border-orange-500"
  }
];

export const CommunityHorizontal = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4 text-[#769C48]">
            <Users className="w-6 h-6" />
            <span className="font-bold uppercase tracking-widest text-sm">Impacto Real</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
            Lo que nuestra <br />
            <span className="text-[#769C48]">comunidad</span> <span className="text-orange-500">dice</span>
          </h2>
        </div>

        <div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x no-scrollbar"
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`min-w-[320px] md:min-w-[400px] snap-start bg-white p-8 rounded-[2.5rem] shadow-sm border-t-8 ${t.color} flex flex-col justify-between hover:shadow-xl transition-all duration-300`}
            >
              <div>
                <Quote className="w-8 h-8 text-slate-200 mb-4" />
                <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="font-black uppercase italic text-[#769C48] tracking-tight">
                  {t.author}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mismas flechitas que el video */}
        <div className="flex justify-end gap-2 mt-4 mr-4">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ImpactStats />
      <EcosistemaBeland /> 
      <Features /> 
      
      <CommunityHorizontal /> 

      <VideoCarousel />

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Elige tu modelo de <span className="text-primary">Impacto circular</span>
            </h2>
            <p className="text-muted-foreground text-lg">
               Circularity as a Service.
            </p>
            <div className="pt-4">
              <Link 
                href="/caas-packages" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg gap-2"
              >
                Conoce nuestros servicios para empresas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}