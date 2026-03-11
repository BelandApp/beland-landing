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

  const texts = [
    {
      title: "Pide por la app",
      desc: "Compra tus viveres y snacks favoritos.",
      icon: <ShoppingBag className="mx-auto text-orange-500" size={36} />,
      button: true
    },
    {
      title: "Delivery circular",
      desc: "Beland entrega tu pedido en la puerta de tu casa y, en ese mismo momento, se llevara tus reciclables limpios.",
      icon: <Truck className="mx-auto text-[#769C48]" size={36} />,
      button: false
    },
    {
      title: "Gana BeCoins",
      desc: "Cada compra genera: 2% de cashback para ti y 2% para Hamoni. Cada vez que reciclas desde tu casa recibes monedas digitales para futuras compras dentro y fuera de la app.",
      icon: <span className="text-4xl">💰</span>,
      button: false
    }
  ];
  
  const [current, setCurrent] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [texts.length]);

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

      {/* TITULO ARRIBA */}
      <div className="text-center pt-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-orange-500">
          ¡Hola, vecin@!
        </h2>
      </div>

      {/* SECCIÓN PRINCIPAL: TEXTO DE INTRODUCCIÓN */}
      <section className="pt-8 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            Sabemos que la gestión actual de basura en <strong>Hamoni</strong> presenta desafíos:
            tachos que se saturan rápido, recorridos largos y la mezcla de residuos
            que impide un reciclaje real.
          </p>

          <div className="py-4">
            <p className="text-3xl md:text-5xl font-black text-[#769C48] uppercase italic leading-tight tracking-tighter">
              Beland llega para transformar este proceso,
              <span className="text-slate-900 block md:inline"> sin costos extras para la administración.</span>
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="w-20 h-1 bg-[#769C48] mx-auto mb-8 opacity-30"></div>
            <p className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              Adiós al problema de la basura: infraestructura y orden.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Para mejorar la convivencia implementaremos una
              <strong> clasificación binaria simplificada</strong>.
              Dos tachos claramente diferenciados que facilitan el reciclaje.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TACHOS E IMPACTO */}
      <section className="pb-20 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-start justify-items-center">
            {/* TACHO VERDE */}
            <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center justify-between space-y-4 max-w-xs h-full border">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                Verde → Reciclables / Inorgánicos
              </span>
              <img src="/screenshots/tacho-verde.png" alt="Tacho verde" className="w-36 h-36 object-contain" />
              <p className="text-slate-700 text-lg leading-relaxed">
                <strong>Tacho verde:</strong> para botellas, latas, cartón, vidrio y otros residuos inorgánicos <strong>(limpios y secos)</strong>.
              </p>
            </div>

            {/* TACHO NEGRO */}
            <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center justify-between space-y-4 max-w-xs h-full border">
              <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Negro → Orgánicos
              </span>
              <img src="/screenshots/tacho-negro.png" alt="Tacho negro" className="w-36 h-36 object-contain" />
              <p className="text-slate-700 text-lg leading-relaxed">
                <strong>Tacho negro :</strong> para restos de comida, servilletas y residuos de jardín.
              </p>
            </div>
          </div>

          {/* IMPACTO SOCIAL */}
          <div className="flex justify-center pt-10 px-4">
            <div className="bg-white border-l-8 border-[#769C48] p-8 md:p-10 rounded-r-[2rem] rounded-l-lg shadow-md max-w-3xl text-left">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed">
                <span className="text-[#769C48] font-black uppercase italic block mb-2">Impacto social real:</span>
                tus residuos separados irán directamente a <strong>Belén Simbaña</strong>, nuestra recicladora local, mejorando sus ingresos y evitando que el material termine en el relleno sanitario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASHBACK Y CELULAR */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-16 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">
              Tu Basura Paga la Cuenta
            </h2>
            <p className="text-xl text-slate-600 italic">Recicla sin salir de casa</p>
            <p className="text-xl text-slate-600 italic leading-relaxed">
              Ahora, el reciclaje no solo es más fácil, sino que te premia.🎁<br/>
              A través del <strong>Delivery circular de Beland</strong>, ya no tienes que cargar bolsas hasta los tachos:
            </p>
          </div>

          {/* TELEFONO */}
          <div className="flex justify-center relative">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[6px] md:border-[14px] rounded-[1.5rem] md:rounded-[2.5rem] h-[260px] md:h-[600px] w-[130px] md:w-[300px] shadow-2xl">
              <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                <img key={current} src={images[current]} className="w-full h-full object-cover" alt="Beland App" />
                <button onClick={prevSlide} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"><ChevronLeft size={16} /></button>
                <button onClick={nextSlide} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>

          {/* TEXTO DEBAJO DEL CELULAR */}
          <div className="pt-4 space-y-4 max-w-2xl mx-auto">
            <h3 className="font-black uppercase italic text-lg md:text-2xl">Delivery con propósito</h3>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed">
              Cada entrega impulsa una red de impacto circular recibí tu pedido y entrega tus reciclables.
            </p>
          </div>
          
          {/* CARRUSEL DE TEXTO  */}
          <div className="flex justify-center px-4">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 max-w-2xl w-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-6 overflow-hidden">
              <div key={textIndex} className="animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="mb-4">{texts[textIndex].icon}</div>
                <h4 className="text-2xl md:text-4xl font-black uppercase italic">{texts[textIndex].title}</h4>
                <p className="text-slate-600 text-lg md:text-xl mt-4 leading-relaxed">{texts[textIndex].desc}</p>
                
              </div>
              <div className="flex gap-2 pt-4">
                {texts.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === textIndex ? 'w-8 bg-[#769C48]' : 'w-2 bg-slate-200'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* BOTÓN BELAND.APP CENTRADO */}
          <div className="flex justify-center w-full pt-4">
            <Button
              onClick={() => window.open("https://beland.app", "_blank")}
              className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-12 md:h-16 px-8 md:px-12 text-sm md:text-xl font-bold shadow-xl w-full md:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Beland.app <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CALENDARIO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic">Calendario y bienestar Comunitario 📅</h2>
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border">
            {schedule.map((item, i) => (
              <div key={i} className="grid md:grid-cols-3 p-6 border-b last:border-none hover:bg-slate-50 transition-colors">
                <span className="font-black text-[#769C48]">{item.day}</span>
                <span className="text-slate-600">{item.time}</span>
                <span className="font-medium text-slate-800">{item.activity}</span>
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
            <span className="text-[#769C48] font-black uppercase"> hacerlo juntos lo cambia todo.</span>”
          </p>
          <div className="space-y-4">
            <p className="text-5xl font-black italic">Forbes</p>
            <button onClick={() => window.open("https://www.forbesargentina.com/negocios/asi-beland-primera-plataforma-argentina-paga-sus-usuarios-reciclar-n39100", "_blank")} className="font-black uppercase underline text-xs hover:text-[#769C48] transition-colors">
              Leer artículo
            </button>
          </div>
        </div>
      </section>

      {/* BOTÓN FINAL BELAND.APP */}
      <div className="flex justify-center w-full py-6 px-6">
        <Button
          onClick={() => window.open("https://beland.app", "_blank")}
          className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-12 md:h-16 px-8 md:px-12 text-sm md:text-xl font-bold shadow-xl w-full md:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-105"
        >
          Beland.app <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>

      {/* CONTACTO FINAL */}
      <section className="py-12 flex flex-col items-center gap-6">
        <Button
          onClick={() => window.open("https://wa.me/593995269974", "_blank")}
          className="bg-[#25D366] hover:bg-[#1eb956] text-white rounded-full h-12 px-8 text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <MessageCircle size={20} />
          Contactate con nosotros
        </Button>
      </section>

    </div>
  );
}