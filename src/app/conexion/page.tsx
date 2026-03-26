"use client";


import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  TreePine,
  Droplet,
  Wind,
  Flame,
  Mountain,
  Sparkles,
  Users,
  Target,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- DATOS ---
const events = [
  {
    id: "deborah",
    name: "Deborah DeLuca",
    partner: "Wonderground",
    recycling: { carton: 10, plastico: 18, vidrio: 8.5, aluminio: 15.5 },
    impact: { arboles: 0.187, agua: 1107.7, co2: 165, petroleo: 41.8, materiaPrima: 77 },
    families: 21,
  },
  {
    id: "cristoph",
    name: "Cristoph",
    partner: "Beland",
    recycling: { carton: 8, plastico: 23, vidrio: 21.4, aluminio: 35 },
    impact: { arboles: 0.187, agua: 1107.7, co2: 165, petroleo: 41.8, materiaPrima: 77 },
    families: 34,
  },
  {
    id: "nicole",
    name: "Nicole Moudaber",
    partner: "Wonderground",
    recycling: { carton: 24.2, plastico: 40.7, vidrio: 49.5, aluminio: 59.95 },
    impact: { arboles: 0.407, agua: 2323.2, co2: 440, petroleo: 84.7, materiaPrima: 355.3 },
    families: 9,
  },
  {
    id: "conexion1",
    name: "Conexion Circular #1",
    partner: "Beland",
    recycling: { carton: 12, plastico: 32, vidrio: 8, aluminio: 18 },
    impact: { arboles: 0.407, agua: 2323.2, co2: 440, petroleo: 84.7, materiaPrima: 355.3 },
    families: 34,
  },
  {
    id: "conexion2",
    name: "Conexion Circular #2",
    partner: "Beland",
    recycling: { carton: 4, plastico: 12, vidrio: 9.3, aluminio: 12.6 },
    impact: { arboles: 0.407, agua: 2323.2, co2: 440, petroleo: 84.7, materiaPrima: 355.3 },
    families: 34,
  },
  {
    id: "conexion3",
    name: "Conexion Circular #3",
    partner: "Beland",
    recycling: { carton: 117, plastico: 85, vidrio: 133, aluminio: 61 },
    impact: { arboles: 6.34, agua: 319236.05, co2: 4218.24, petroleo: 891.84, materiaPrima: 1564.55 },
    families: 34,
  },
  {
    id: "conexion4",
    name: "Conexion Circular #4",
    partner: "Beland",
    recycling: { carton: 121, plastico: 93.5, vidrio: 115.5, aluminio: 62.7 },
    impact: { arboles: 2.057, agua: 7300.7, co2: 1135.2, petroleo: 211.2, materiaPrima: 355.3 },
    families: 4,
  },
  {
    id: "conexion5",
    name: "Conexion Circular #5",
    partner: "Beland",
    recycling: { carton: 35, plastico: 28, vidrio: 10, aluminio: 15 },
    impact: { arboles: 6.34, agua: 319236.05, co2: 4218.24, petroleo: 891.84, materiaPrima: 1564.55 },
    families: 34,
  },
  {
    id: "conexion6",
    name: "Conexion Circular #6",
    partner: "Beland",
    recycling: { carton: 58, plastico: 45, vidrio: 18, aluminio: 23 },
    impact: { arboles: 6.34, agua: 319236.05, co2: 4218.24, petroleo: 891.84, materiaPrima: 1564.55 },
    families: 34,
  },
  {
    id: "total",
    name: "Total",
    partner: "Beland",
    recycling: { carton: 373, plastico: 417.5, vidrio: 313.5, aluminio: 320.6 },
    impact: { arboles: 6.34, agua: 319236.05, co2: 4218.24, petroleo: 891.84, materiaPrima: 1564.55 },
    families: 34,
  },
];

const recyclingIcons = [
  { key: "plastico", label: "Plástico", icon: "🧴" },
  { key: "vidrio", label: "Vidrio", icon: "🍷" },
  { key: "carton", label: "Cartón", icon: "📦" },
  { key: "aluminio", label: "Aluminio", icon: "🥫" },
];

const impactMetrics = [
  { key: "arboles", label: "árboles sean talados", icon: TreePine },
  { key: "agua", label: "litros de agua sean contaminados", icon: Droplet },
  { key: "co2", label: "kg de CO₂ se emitan al ambiente", icon: Wind },
  { key: "petroleo", label: "litros de petróleo crudo sean extraídos", icon: Flame },
  { key: "materiaPrima", label: "kg de materia prima sean explotados", icon: Mountain },
];

const CAROUSEL_VIDEOS = [

   { id: "circular-3", src:"https://res.cloudinary.com/djp2qzp9f/video/upload/v1774059825/circular.3_iopmxg.mp4", label: "Conexion 3 " },
  { id: "conexion-1", src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774112788/conexion.1_u8dpnh.mp4", label: "Conexión 1" },
  { id: "deborah", src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774060031/deborah_ykxfs4.mp4", label: "Deborah" },
  { id: "cristoph", src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774060020/cristoph_f6sbcz.mp4", label: "Cristoph" },
  { id: "circular-2", src:"https://res.cloudinary.com/djp2qzp9f/video/upload/a_-90,q_auto,f_auto,w_1280/v1774545714/IMG_0127_1_1_y2sjbu.mp4", label: "Conexion 2 " },
 
];
export const VideoCarousel = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative group">
      <Swiper
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1} 
       
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {CAROUSEL_VIDEOS.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video src={video.src} className="w-full h-full object-contain" controls playsInline muted loop />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end gap-2 mt-4 relative z-50">
        <button onClick={() => swiperRef.current?.slidePrev()} className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function ConexionPage() {
  const [selectedTab, setSelectedTab] = useState("total");
  
  const globalData = events.find(e => e.id === "total") || events[0];
  const totalRecicladoGlobal = Object.values(globalData.recycling).reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* --- FESTIVAL CIRCULAR 2026 --- */}
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
                  <span className="text-4xl font-black text-orange-500 leading-none">1</span>
                  <p className="uppercase font-black text-slate-400 tracking-tighter">Record Guinness</p>
                </div>
                <div className="bg-orange-50/50 p-8 rounded-[2rem]">
                  <span className="text-4xl font-black text-orange-500 block">$1.8M+</span>
                  <p className="uppercase font-bold text-slate-500 text-xs mt-2 tracking-widest">Ingresos para la comunidad</p>
                </div>
                <Link 
  href="https://wa.me/593995269974?text=Hola%20Diego!%20Me%20quiero%20sumar%20al%20reto%20de%20Festival%20Circular%202026" 
  target="_blank" 
  className="w-full"
>
  <button className="w-full bg-[#769C48] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#65853d] transition-all text-xl uppercase italic shadow-lg shadow-green-900/10 cursor-pointer">
    ¿Te sumas al reto? <ArrowRight className="w-6 h-6" />
  </button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-24 pb-16">
        {/* ---  HERO Y EVENTOS --- */}
        <section className="container mx-auto px-4 relative">
          
          <div className="text-center space-y-3 mb-12">
            <Badge className="text-sm px-4 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30" variant="outline">
              <Sparkles className="w-3 h-3 mr-2 inline-block" /> Impacto Real Medible
            </Badge>
            <div className="max-w-2xl mx-auto pt-8 space-y-4 text-base md:text-lg text-muted-foreground">
              <p className="text-xl md:text-3xl font-bold text-foreground italic leading-snug">
               "Somos el primer movimiento cultural donde tu basura paga la fiesta."</p>
              
            
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Conexión Circular
                </span>
              </h1>
            </div>
            
            <VideoCarousel />

            {/* SECCIÓN DE TOTALES  */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-black text-primary">{totalRecicladoGlobal.toFixed(0)}kg</div>
                <div className="text-[10px] md:text-xs font-bold uppercase text-muted-foreground">Total Reciclado</div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-black text-primary">{globalData.families}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase text-muted-foreground">Familias Ayudadas</div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-black text-primary">{globalData.impact.agua.toLocaleString()}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase text-muted-foreground">Lts Agua Ahorrados</div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-black text-primary">{globalData.impact.co2.toLocaleString()}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase text-muted-foreground">kg CO2 Evitados</div>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-6 border-b border-border/50 pb-2">
            <h2 className="text-xl md:text-3xl font-bold text-foreground uppercase tracking-tight">
             Nuestros eventos: 
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                  Creamos experiencias que el dinero no puede comprar. Donamos los residuos a los recicladores, los verdaderos héroes del planeta.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Sidebar / Selector */}
            <div className="w-full md:w-1/4">
              <div className="block md:hidden mb-4">
                <Select value={selectedTab} onValueChange={setSelectedTab}>
                  <SelectTrigger className="w-full">
                    <span>{events.find((e) => e.id === selectedTab)?.name}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id}>{event.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="hidden md:flex flex-col gap-2">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedTab(event.id)}
                    className={`w-full px-4 py-3 rounded-xl font-semibold text-left transition-all ${
                      selectedTab === event.id 
                        ? "bg-primary text-white shadow-lg" 
                        : "bg-muted/50 hover:bg-primary/10"
                    }`}
                  >
                    {event.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Panel de Detalles */}
            <div className="flex-1">
              {events.filter(e => e.id === selectedTab).map((event) => (
                <div key={event.id} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-primary/20">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-4 flex items-center gap-2">♻️ Resultados</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {recyclingIcons.map(({ key, label, icon }) => (
                            <div key={key} className="p-3 rounded-xl bg-primary/5 text-center">
                              <div className="text-2xl">{icon}</div>
                              <div className="text-xl font-black text-primary">
                                {event.recycling[key as keyof typeof event.recycling]}kg
                              </div>
                              <div className="text-[10px] uppercase font-bold text-muted-foreground">{label}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-secondary/20">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-secondary">🌍 Evitamos que:</h4>
                        <div className="space-y-2">
                          {impactMetrics.map(({ key, label, icon: Icon }) => (
                            <div key={key} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                              <Icon className="w-4 h-4 text-primary" />
                              <div className="text-sm">
                                <span className="font-bold text-primary">{event.impact[key as keyof typeof event.impact].toLocaleString()}</span> {label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
                    <CardContent className="p-6 flex items-center justify-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        <Users size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary">{event.families} familias</div>
                        <p className="text-sm font-medium">ayudadas a través del reciclaje</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 py-4 border-t border-border">
            <span className="text-lg font-bold opacity-50 italic">14.02 - 01.10.2025</span>
          </div>
        </section> 
      </div>

      

     {/* 5. LOGO FINAL */}
      <div className="w-full bg-white pb-10 pt-4 px-4 flex justify-center overflow-hidden">
        <div className="relative w-full max-w-lg"> 
          <img
            src="/screenshots/conexion.circular.logo.png"
            alt="Logo Conexión Circular"
            className="w-full h-auto block" 
          />
        </div>
      </div>
      
    </main>
  );
}