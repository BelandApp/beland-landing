"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Truck, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ExternalLink
} from "lucide-react";

export default function HamoniCircularPage() {

  const schedule = [
    { day: "Lunes", time: "07:00 AM", activity: "Ritual TGIM (Yoga y bienestar) 🧘‍♂️✨" },
    { day: "Martes", time: "08:00 AM", activity: "Recolección de reciclables ♻️🚛" },
    { day: "Jueves", time: "08:00 AM", activity: "Recolección de reciclables ♻️🚛" },
    { day: "Viernes", time: "06:00 PM", activity: "Ritual TGIF (Afteroffice) 🥂🎉" },
    { day: "Sábados", time: "Flexible", activity: "Recolección de reciclables ♻️📦" },
  ];

  const images = [
    "/screenshots/home.jpeg",
    "/screenshots/registrate.jpeg",
    "/screenshots/carrito2.jpeg",
    "/screenshots/billetera.jpeg",
    "/screenshots/tuimpacto.jpeg"
  ];
  
  const [current, setCurrent] = useState(0);

  // EFECTO CARRUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // EFECTO OCULTAR HEADER/FOOTER
  useEffect(() => {
    const hideElements = () => {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");
      const nav = document.querySelector("nav");
      if (header) header.style.display = "none";
      if (footer) footer.style.display = "none";
      if (nav) nav.style.display = "none";
    };
    hideElements();
    const timeout = setTimeout(hideElements, 500);
    return () => {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");
      const nav = document.querySelector("nav");
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      if (nav) nav.style.display = "";
      clearTimeout(timeout);
    };
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* HERO - TEXTO COMPLETO Y CELULAR AL LADO */}
      <section className="pt-8 md:pt-16 pb-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12 items-center">
          
          {/* COLUMNA TEXTO (INTEGRO) */}
          <div className="space-y-4 md:space-y-6 order-1 text-left">
            <h2 className="text-orange-500 font-black uppercase italic tracking-widest text-xs md:text-xl">Hamoni Circular</h2>
            <h1 className="text-lg md:text-6xl font-normal leading-tight md:leading-[1.1] tracking-tighter">
              Bienvenid@ a <span className="text-[#769C48] font-black">Beland</span>. un ecosistema circular que transforma acciones sostenibles en valor para tu comunidad.
            </h1>
            <div className="pt-2 md:pt-4 space-y-3 md:space-y-4">
              <h3 className="font-black uppercase italic text-sm md:text-lg">Delivery con propósito</h3>
              <p className="text-slate-600 text-xs md:text-xl leading-snug">
                Cada entrega impulsa una red de impacto circular recibi tu pedido y entrega tus reciclables.
              </p>
              <Button
                onClick={() => window.open("https://beland.app", "_blank")}
                className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-10 md:h-16 px-4 md:px-8 text-xs md:text-xl font-bold shadow-lg w-full md:w-auto mt-2 flex items-center justify-center gap-2"
              >
                Prueba nuestra app Beland <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>

          {/* COLUMNA CELULAR (ADAPTADO) */}
          <div className="order-2 flex justify-center relative">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[6px] md:border-[14px] rounded-[1.5rem] md:rounded-[2.5rem] h-[260px] md:h-[600px] w-[130px] md:w-[300px] shadow-2xl transition-transform hover:scale-105 duration-500">
              <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                <img 
                  key={current}
                  src={images[current]} 
                  className="w-full h-full object-cover animate-in fade-in duration-500" 
                  alt="Beland App View" 
                />
                <button onClick={prevSlide} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full"><ChevronLeft size={16} /></button>
                <button onClick={nextSlide} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOLA VECINO */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-orange-500">¡Hola, vecin@!</h2>
          <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>Sabemos que la gestión actual de basura en Hamoni presenta desafíos: tachos que se saturan rápido recorridos largos y la mezcla de residuos que impide un reciclaje real</p>
            <div className="flex justify-center pt-4">
              <p className="bg-[#769C48] text-white p-6 md:p-8 rounded-[2rem] font-bold italic text-xl md:text-2xl inline-block shadow-lg leading-tight max-w-2xl">
                Beland llega para transformar este proceso, sin costos extras para la administración
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN TU BASURA PAGA LA CUENTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Tu Basura Paga la Cuenta</h2>
            <p className="text-xl text-slate-600 italic">Recicla sin salir de casa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center flex flex-col items-center justify-between border border-slate-100 min-h-[350px]">
              <div className="space-y-6">
                <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-orange-100">
                  <ShoppingBag className="text-orange-500" size={36}/>
                </div>
                <h4 className="text-2xl font-black uppercase italic">Pide por la app</h4>
                <p className="text-slate-600">Compra tus víveres y snacks desde:</p>
              </div>
              <Button 
                onClick={() => window.open("https://beland.app", "_blank")}
                className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-xl font-bold px-8 mt-6 flex items-center gap-2 h-12"
              >
                beland.app <ExternalLink size={16} />
              </Button>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center flex flex-col items-center justify-between border border-slate-100 min-h-[350px]">
              <div className="space-y-6">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-green-100">
                  <Truck className="text-[#769C48]" size={36}/>
                </div>
                <h4 className="text-2xl font-black uppercase italic">Delivery circular</h4>
                <p className="text-slate-600">
                  Beland entregará tu pedido en la puerta de tu casa y, en ese mismo momento, se llevará tus reciclables limpios.
                </p>
              </div>
              <div className="h-12"></div>
            </div>
          </div>

          {/* CASHBACK */}
          <div className="mt-16 bg-[#FAF9F6] p-6 md:p-10 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
            <p className="text-[#769C48] font-black uppercase text-xl mb-12 tracking-widest">Gana BeCoins (Cashback)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-[#769C48] space-y-4">
                <p className="text-6xl font-black text-[#769C48]">2%</p>
                <p className="font-black text-lg uppercase italic">2% para ti</p>
                <p className="text-sm text-slate-500">Cada vez que reciclas desde tu casa recibes monedas digitales para futuras compras.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-orange-500 space-y-4">
                <p className="text-6xl font-black text-orange-500">2%</p>
                <p className="font-black text-lg uppercase italic">2% para Hamoni</p>
                <p className="text-sm text-slate-500">Un fondo común que beneficia a todo el conjunto residencial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDARIO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <div className="inline-block bg-[#769C48] text-white px-8 py-2 rounded-full font-black text-lg shadow-md mb-4 italic tracking-tighter uppercase">
              ✨ Más Popular
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Calendario Comunitario</h2>
              <span className="text-5xl animate-bounce md:animate-none">🗓️</span>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
            {schedule.map((item, i) => (
              <div key={i} className="flex flex-col md:grid md:grid-cols-3 items-center p-6 border-b last:border-none hover:bg-slate-50 transition-colors gap-2 md:gap-4 text-center md:text-left">
                <span className="font-black text-[#769C48] text-xl md:border-none border-b border-green-50 pb-1 md:pb-0">{item.day}</span>
                <span className="text-slate-500 font-bold md:text-center">{item.time}</span>
                <span className="font-bold text-slate-800 md:text-right text-sm md:text-base">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORBES */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-2xl md:text-4xl italic text-slate-600 leading-snug">
            “Una persona que recicla hace una gran diferencia en el mundo. 
            <span className="text-[#769C48] font-black uppercase"> Hacerlo juntos</span> lo cambia todo.”
          </p>
          <div className="space-y-4">
            <p className="text-5xl font-black italic tracking-tighter">Forbes</p>
            <p className="text-xl italic text-slate-400">"Así es Beland..."</p>
            <button 
              onClick={() => window.open("https://www.forbesargentina.com/negocios/asi-beland-primera-plataforma-argentina-paga-sus-usuarios-reciclar-n39100", "_blank")}
              className="font-black uppercase underline tracking-widest text-xs hover:text-[#769C48] transition-colors"
            >
              Leer artículo
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6 flex flex-col items-center gap-6">
        <div className="inline-block bg-orange-500 text-white px-6 py-1 rounded-full font-black text-[10px] italic shadow-sm tracking-widest uppercase mb-4">
            ☀️ Más Popular
        </div>
        <Button onClick={() => window.open('https://wa.me/593995269974', '_blank')} className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-20 md:h-24 px-8 md:px-12 text-lg md:text-2xl font-black uppercase italic shadow-2xl flex items-center gap-4 transition-transform hover:scale-105 active:scale-95">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10" /> Contactate con nosotros
        </Button>
      </section>
    </div>
  );
}