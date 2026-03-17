"use client";

import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, Target, ArrowRight, Quote, Play, Users } from "lucide-react";

const timelineEvents = [
  { year: "2016", title: "Nace la idea", description: "Reconocidos dentro de los 500 mejores proyectos socio-ambientales de América Latina por Premios Verdes (Puesto 35 en el global / 11 en gestión de residuos)." },
  { year: "2020", title: "Nace la empresa", description: "Arrancamos el desarrollo de la primera versión de la app y de nuestras estaciones autónomas de reciclaje." },
  { year: "2021", title: "Primer prueba de mercado", description: "Probamos nuestro modelo en la ciudad de Buenos Aires y aprendimos mucho de los resultados." },
  { year: "2023", title: "Validación del modelo", description: "Instalamos nuestras estaciones en 3 de los puntos más concurridos de Buenos Aires. Reconocimiento como la primera plataforma de la Argentina que paga a sus usuarios por reciclar (Forbes). Reconocimiento dentro de los mejores 20 startups del planeta (Founders Live)." },
  { year: "2025", title: "Validación del producto mínimo rentable", description: "Desarrollo y testeo de nuestra app definitiva. Nace Circularity as a Service. Reconocimiento entre los mejores emprendimientos sostenibles del Ecuador (Cumbre de sostenibilidad EKOS). Reconocimiento Quito Sostenible como héroes locales en gestión de residuos (Distrito Metropolitano de Quito)." },
];

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

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      
      {/* 1. TÍTULO SECCIÓN */}
      <div className="container px-6 mx-auto pt-24 md:pt-32 pb-8">
         <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
            <span className="text-orange-500">Noso</span><span className="text-[#769C48]">tros</span>
         </h1>
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

            <div className="w-full order-1 md:order-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-black group cursor-pointer" onClick={handlePlayVideo}>
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline
                  className="object-cover w-full h-full brightness-90 transition-all group-hover:brightness-100"
                >
                  <source src="https://res.cloudinary.com/dbfboc8cm/video/upload/v1757200474/Peque%C3%B1as_acciones_que_generan_grandes_cambios_Gracias_a_la_maravillosa_iniciativa_Conexi%C3%B3_oiddlv.mp4" type="video/mp4" />
                </video>
                
                {isMuted && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#769C48] flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-transform group-hover:scale-110">
                      <Play className="w-10 h-10 text-[#769C48] fill-[#769C48]/20 ml-1.5" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                   <h3 className="text-white/80 text-[8rem] md:text-[10rem] font-black italic tracking-tighter leading-none select-none">
                    beland
                   </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TRAYECTORIA */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
         <div className="container px-6 mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-black uppercase italic mb-16 tracking-widest text-slate-800">Trayectoria</h2>
            <div className="relative max-w-4xl mx-auto space-y-12">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#769C48]/30 md:-translate-x-1/2" />
              {timelineEvents.map((event, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#769C48] rounded-full -translate-x-1/2 z-10 border-4 border-white shadow-sm" />
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                      <span className="text-[#769C48] font-black text-2xl block mb-2">{event.year}</span>
                      <h3 className="font-bold text-xl mb-2 uppercase italic leading-tight">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 4. FESTIVAL CIRCULAR 2026 */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-slate-200 px-4 py-1">🏆 Record Guinness 2026</Badge>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              <span className="text-[#769C48]">Festival</span> <span className="text-orange-500">Circular</span> <br />
              <span className="text-slate-900">Quito 2026</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto items-start">
            <div className="flex-1 space-y-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                  <Target className="w-7 h-7 text-[#769C48]" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase italic mb-2">El Reto</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">Este año nos propusimos demostrar que la circularidad funciona. Activamos barrios, reciclamos desde la base y generamos comunidad, contenido y retorno real. Todo esto es solo el comienzo.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                  <Sparkles className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase italic mb-2">Festival Circular 2026</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">Lanzamos el primer Festival Circular del mundo en Quito, con toda la ciudad en simultáneo, durante una semana de música, cultura y producción circular.</p>
                </div>
              </div>

              <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-slate-100 relative mt-16">
                <Quote className="absolute -top-5 -left-2 w-10 h-10 text-orange-200" />
                <p className="italic text-xl text-slate-700 leading-relaxed font-medium">
                  "No se trata solo de romper un récord. Se trata de transformar lo que el mundo desecha en riqueza 
                  para la comunidad, valor para el mercado e impacto real para el planeta. La circularidad no es el futuro, 
                  es el nuevo estándar."
                </p>
                <p className="mt-6 font-black text-[#769C48] uppercase tracking-widest text-sm">— Team Beland</p>
              </div>
            </div>

            <div className="flex-1 w-full lg:sticky lg:top-32">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-50 text-center space-y-10">
                <h3 className="text-3xl font-black text-slate-900">El impacto que buscamos</h3>
                <div>
                  <span className="text-8xl font-black text-orange-500 leading-none">1</span>
                  <p className="uppercase font-black text-slate-400 tracking-tighter">Record Guinness</p>
                </div>
                <div className="bg-orange-50/50 p-8 rounded-[2rem]">
                  <span className="text-6xl font-black text-orange-500 block">$1.8M+</span>
                  <p className="uppercase font-bold text-slate-500 text-xs mt-2 tracking-widest">Ingresos para la comunidad</p>
                </div>
                <button className="w-full bg-[#769C48] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#65853d] transition-all text-xl uppercase italic shadow-lg shadow-green-900/10">
                  ¿Te sumas al reto? <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LO QUE NUESTRA COMUNIDAD DICE */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
              Lo que nuestra <br />
              <span className="text-[#769C48]">comunidad</span> <span className="text-orange-500">dice</span>
            </h2>
            <div className="h-2 w-24 bg-[#769C48] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-[2.5rem] shadow-sm border-t-8 ${t.color} flex flex-col justify-between hover:shadow-xl transition-shadow duration-300`}
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