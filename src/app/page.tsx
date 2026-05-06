"use client";

import React, { useRef, useState} from "react"; 
import Hero from "../components/home/hero";
//import ImpactStats from "../components/home/impactstats";
//import Features from "../components/home/features";
import EcosistemaBeland from "../components/home/ecosistemabeland";
import VideoCarousel from "../components/home/videocarousel";
import Link from "next/link";
import { ArrowRight, Quote, Users, ChevronLeft, ChevronRight,X } from "lucide-react"; // Añadidas flechas

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

        {/* flechitas */}
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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mensaje = encodeURIComponent("¡Hola Beland!, quiero obtener más información sobre las máquinas Beland ♻️🍬🤯");
  const whatsappDiego = `https://wa.me/593995269974?text=${mensaje}`;
  const videoUrl = "https://res.cloudinary.com/djp2qzp9f/video/upload/v1777570188/WhatsApp_Video_2026-04-29_at_20.35.22_jbz4vu.mp4";
  return (
    <main className="flex flex-col">
      <Hero />
      {/*<ImpactStats />*/}
      <EcosistemaBeland /> 
      {/*<Features /> */}
      
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
  
  {/* COLUMNA IZQUIERDA  */}
  <div className="w-full md:w-1/2">
    
    {/* 1. Títulos y Descripción */}
    <div className="mb-8">
      <span className="text-xs font-black uppercase tracking-widest text-[#769C48]">Tecnología Circular</span>
      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mt-2">
        Estación <span className="text-orange-500">Autónoma</span> <br />
        <span className="text-[#769C48]">de Reciclaje</span>
      </h2>
    </div>

    <p className="text-lg text-slate-600 leading-relaxed mb-10">
      Nuestra máquina inteligente recibe tus residuos, los escanea y te recompensa al instante. 
      Convierte el reciclaje en una experiencia visible, social y viral.
    </p>

    {/* IMAGEN */}
    <div className="md:hidden w-full flex justify-center mb-10">
      <img
        src="/screenshots/maquina-beland.png"
        alt="Estación autónoma de reciclaje Beland"
        className="w-full max-w-[280px] h-auto drop-shadow-2xl"
      />
    </div>

    {/* 3. Beneficios y Botón */}
    <ul className="space-y-4 mb-10">
      {[
        "♻️ Acepta vidrio, aluminio, plástico y tetrapack",
        "📸 Captura tu reacción y genera un QR único",
        "💰 Gana monedas digitales por cada reciclaje",
        "📊 Monitoreo remoto y panel administrativo",
      ].map((item, i) => (
        <li key={i} className="text-slate-700 font-bold flex items-center gap-3">{item}</li>
      ))}
    </ul>

    <button
      onClick={() => setIsModalOpen(true)}
      className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#769C48] to-[#5a7a36] hover:scale-105 text-white font-black uppercase italic tracking-wider rounded-2xl shadow-xl transition-all active:scale-95"
    >
      Cotiza la tuya
    </button>
  </div>

  {/* COLUMNA DERECHA  */}
  <div className="hidden md:flex md:w-1/2 justify-center">
    <img
      src="/screenshots/maquina-beland.png"
      alt="Estación autónoma de reciclaje Beland"
      className="w-full max-w-md h-auto drop-shadow-2xl transform md:rotate-2"
    />
  </div>

</div>

          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
              <div className="relative bg-white rounded-[2.5rem] max-w-4xl w-full overflow-hidden shadow-2xl">
                <button
  onClick={() => setIsModalOpen(false)}
  className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white font-bold text-sm transition-colors z-20"
>
  <ChevronLeft className="w-5 h-5" />
  Volver
</button>

                <div className="aspect-video w-full bg-black">
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Tu navegador no soporta videos.
                  </video>
                </div>

                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-black uppercase italic text-slate-900 mb-2"> Estaciones autónomas de reciclaje Beland </h3>
                  <p className="text-slate-500 mb-6 font-medium">Obten más información técnica y comercial.</p>
                  <a
                    href={whatsappDiego}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-green-200"
                  >
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
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