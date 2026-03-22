"use client";

import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Target, ArrowRight, Quote, Play, Users } from "lucide-react";
import {ChevronLeft , ChevronRight} from "lucide-react";
import Image from "next/image";

const timelineEvents = [
  { year: "2016", title: "Nace la idea", description: "Reconocidos dentro de los 500 mejores proyectos socio-ambientales de América Latina por Premios Verdes (Puesto 35 en el global / 11 en gestión de residuos)." },
  { year: "2020", title: "Nace la empresa", description: "Arrancamos el desarrollo de la primera versión de la app y de nuestras estaciones autónomas de reciclaje." },
  { year: "2021", title: "Primer prueba de mercado", description: "Probamos nuestro modelo en la ciudad de Buenos Aires y aprendimos mucho de los resultados." },
  { year: "2023", title: "Validación del modelo", description: "Instalamos nuestras estaciones en 3 de los puntos más concurridos de Buenos Aires. Reconocimiento como la primera plataforma de la Argentina que paga a sus usuarios por reciclar (Forbes). Reconocimiento dentro de los mejores 20 startups del planeta (Founders Live)." },
  { year: "2025", title: "Validación del producto mínimo rentable", description: "Desarrollo y testeo de nuestra app definitiva. Nace Circularity as a Service. Reconocimiento entre los mejores emprendimientos sostenibles del Ecuador (Cumbre de sostenibilidad EKOS). Reconocimiento Quito Sostenible como héroes locales en gestión de residuos (Distrito Metropolitano de Quito)." },
];



const dreamTeam = [
  {
    name: "Diego Vargas",
    role: "Founder & CEO",
    specialty: "Especialista en Innovación - Creador del modelo Beland",
    image: "/screenshots/diego.JPEG"
  },
  {
    name: "Ezequiel Alonso",
    role: "Founding Backend Architect",
    specialty: "Especialista en desarrollo Backend",
    image: "/screenshots/eze.jpeg"
  },
  {
    name: "Victor De Menezes",
    role: "Founding Product Engineer",
    specialty: "Especialista en desarrollo Frontend & Mobile",
    image: "/screenshots/victor.jpeg"
  },
  {
    name: "Yanina Soto",
    role: "Founding Data Scientist",
    specialty: "Especialista en Data Science y desarrollo mobile",
    image: "/screenshots/yanina.JPEG"
  }
];

export default function AboutSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };
  const aboutVideos = [
    {
    id: 1,
    title: "Nosotros",
    url: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774142406/nosotros.05_2_f6hjcg.mp4", 
  },
    {
    id: 2,
    title: "Premios Ekos",
    url: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774143013/premio.ekos_1_th4szj.mp4", 
  },
  {
    id: 3,
    title: "Premios Ekos",
    url: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774143461/premios.ekos2_nsmmbe.mp4",
  },
  {
    id: 4,
    title: "Nuestra Esencia",
    url: "https://res.cloudinary.com/dbfboc8cm/video/upload/v1757200474/Peque%C3%B1as_acciones_que_generan_grandes_cambios_Gracias_a_la_maravillosa_iniciativa_Conexi%C3%B3_oiddlv.mp4",
  },
  
  
];

const handleNext = (e: React.MouseEvent) => {
  e.stopPropagation(); 
  setCurrentVideo((prev) => (prev === aboutVideos.length - 1 ? 0 : prev + 1));
};

const handlePrev = (e: React.MouseEvent) => {
  e.stopPropagation();
  setCurrentVideo((prev) => (prev === 0 ? aboutVideos.length - 1 : prev - 1));
};

  return (
    
  <div className="flex flex-col bg-background overflow-x-hidden">
 <div className="container px-6 mx-auto pt-24 md:pt-32 pb-8 text-center">

  <div className="inline-flex items-center gap-4">

  <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
    <span className="text-orange-500">Noso</span>
    <span className="text-[#769C48]">tros</span>
  </h1>

  <Image
    src="/screenshots/premio.png"
    alt="Beland logo"
    width={450}
    height={150}
    className="w-24 md:w-40 h-auto"
  />

</div>

  </div>

      {/* 2. BLOQUE HISTORIA */}
      <section className="pb-24">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
                Nuestra Historia: 
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                <p>
                  Beland nacio con el objetivo de plantear una solucion real a la crisis ambiental,trabajando en nuestro modelo de consumo.
                  Nuestra propuesta es simple: Los residuos no son basura.
                </p>
                <p>
                  El retail tradicional solo gana en la venta, y una vez que el cliente dispone sus desechos,el esfuerzo comercial que fue necesri
                  para concretar la venta,el costo logistico y el material de sus residuos se pierden.
                </p>
                <p>
                  En Beland entendemos a los residuos como la evidencia fisica de una transaccion exitosa, y es esta idea la que nos
                  permite recuperar el valor de los residuos,muy por sobre el valor  del que estan hechos.
                </p>
                <p>
                  Nada de esto seria posible sin los recicladores de base,quienes recuperan mas del 90% de todo lo que se recicla
                  en LATAM, lastimosamente viven en estado de vulnerabilidad.Por eso donamos el 100% de todo lo que recuperamos a familias de recicladores,
                  y trabajamos en equipo para mejorar su calidad de vida.
                </p>
              </div>
            </div>

           {/* CAROUSEL DE VIDEOS (LADO DERECHO) */}
            <div className="w-full order-1 md:order-2 flex flex-col items-center">
              <div className="w-full relative group">
                <div 
                  className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-black cursor-pointer border-4 border-white z-10"
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                        setIsMuted(false);
                      } else {
                        videoRef.current.pause();
                        setIsMuted(true);
                      }
                    }
                  }}
                >
                  <video 
                    key={aboutVideos[currentVideo].url} 
                    ref={videoRef}
                    preload="auto"
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline
                    className="object-cover w-full h-full brightness-90 transition-all hover:brightness-100"
                  >
                    <source src={aboutVideos[currentVideo].url} type="video/mp4" />
                  </video>

                  {/* INDICADOR DE PLAY/PAUSE CENTRAL */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    {isMuted && (
                      <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                        <Play className="w-10 h-10 text-white fill-white/20 ml-1.5" />
                      </div>
                    )}
                  </div>

                  {/* Badge Título */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-[#769C48] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                      {aboutVideos[currentVideo].title}
                    </span>
                  </div>

                  {/* Texto decorativo Beland */}
                  <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-0">
                     <h3 className="text-white/20 text-[6rem] md:text-[8rem] font-black italic tracking-tighter leading-none select-none">
                        beland
                     </h3>
                  </div>
                </div>

                {/* BOTONES DE NAVEGACIÓN (FLECHAS) */}
                <div className="absolute -bottom-6 right-8 flex gap-2 z-30">
                  <button onClick={handlePrev} className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={handleNext} className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* BOTÓN BLOG CENTRADO DEBAJO */}
              <div className="mt-16 flex justify-center w-full">
                <a href="/blog" className="group/blog flex items-center gap-4 p-2 pr-6 rounded-full bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-[#769C48] flex items-center justify-center text-white group-hover/blog:scale-110 transition-transform shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#769C48]">Explora</span>
                    <span className="text-sm font-bold text-slate-900 leading-none">Nuestro Blog Circular</span>
                  </div>
                </a>
              </div>
            </div> {/* CIERRA COLUMNA DERECHA */}
          </div> {/* CIERRA GRID */}
        </div> {/* CIERRA CONTAINER */}
      </section> {/* CIERRA SECCIÓN HISTORIA */}

                
      {/* 3. TRAYECTORIA */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="container px-6 mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-black uppercase italic mb-16 tracking-widest text-slate-800">
            Trayectoria
          </h2>
          

          <div className="relative max-w-4xl mx-auto">
            {/* LÍNEA CENTRAL AJUSTADA */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#769C48]/30 md:-translate-x-[1px]" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* PUNTO DE LA LÍNEA AJUSTADO */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#769C48] rounded-full -translate-x-1/2 z-10 border-4 border-white shadow-sm" />
                  
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className={`bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-transform hover:scale-[1.02] duration-300 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <span className="text-[#769C48] font-black text-2xl block mb-2">
                        {event.year}
                      </span>
                      <h3 className="font-bold text-xl mb-2 uppercase italic leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      

      {/* 6. EL DREAM TEAM */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              El <span className="text-orange-500">Dream</span> <span className="text-[#769C48]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dreamTeam.map((member, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-[#FAF9F6] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-sm mb-6 group-hover:bg-[#769C48] transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-2xl font-black uppercase italic text-slate-900 mb-1 leading-none">{member.name}</h3>
                <p className="text-[#769C48] font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <div className="h-px w-8 bg-orange-500 mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-slate-500 text-sm leading-relaxed">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div> 
  );
}