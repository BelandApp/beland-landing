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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
<<<<<<< HEAD

      {/* TITULO ARRIBA */}
      <div className="text-center pt-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-orange-500">
          ¡Hola, vecin@!
        </h2>
      </div>

      {/* HERO */}
      <section className="pt-8 md:pt-16 pb-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12 items-center">

=======
      <section className="pt-8 md:pt-16 pb-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12 items-center">
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
          <div className="space-y-4 md:space-y-6 order-1 text-left">
            <h2 className="text-orange-500 font-black uppercase italic tracking-widest text-xs md:text-xl">
              Hamoni Circular
            </h2>

            <h1 className="text-lg md:text-6xl font-normal leading-tight tracking-tighter">
              Bienvenid@ a <span className="text-[#769C48] font-black">Beland</span>. 
              un ecosistema circular que transforma acciones sostenibles 
              en valor para tu comunidad.
            </h1>

            <div className="pt-2 md:pt-4 space-y-3 md:space-y-4">
              <h3 className="font-black uppercase italic text-sm md:text-lg">
                Delivery con propósito
              </h3>

              <p className="text-slate-600 text-xs md:text-xl leading-snug">
                Cada entrega impulsa una red de impacto circular
                recibí tu pedido y entrega tus reciclables.
              </p>

              <Button
                onClick={() => window.open("https://beland.app", "_blank")}
                className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-10 md:h-16 px-4 md:px-8 text-xs md:text-xl font-bold shadow-lg w-full md:w-auto mt-2 flex items-center justify-center gap-2"
              >
                Prueba nuestra app Beland
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
<<<<<<< HEAD

          {/* TELEFONO */}
=======
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
          <div className="order-2 flex justify-center relative">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[6px] md:border-[14px] rounded-[1.5rem] md:rounded-[2.5rem] h-[260px] md:h-[600px] w-[130px] md:w-[300px] shadow-2xl">
              
              <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                <img 
                  key={current}
                  src={images[current]} 
                  className="w-full h-full object-cover" 
                  alt="Beland App View" 
                />

                <button onClick={prevSlide} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full">
                  <ChevronLeft size={16} />
                </button>

                <button onClick={nextSlide} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

<<<<<<< HEAD
      {/* TACHOS */}
      <section className="py-20 px-6 text-center">
<div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-lg max-w-4xl mx-auto space-y-6">

  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
    Sabemos que la gestión actual de basura en <strong>Hamoni</strong> presenta desafíos:
    tachos que se saturan rápido, recorridos largos y la mezcla de residuos
    que impide un reciclaje real.
  </p>

  <p className="text-xl md:text-2xl font-black text-[#769C48] uppercase italic">
    Beland llega para transformar este proceso,
    <span className="text-slate-900"> sin costos extras para la administración.</span>
  </p>

  <div className="border-t pt-6 space-y-4">

    <p className="text-lg font-bold text-slate-800">
      Adiós al problema de la basura: infraestructura y orden.
    </p>

    <p className="text-slate-600">
      Para mejorar la convivencia implementaremos una
      <strong> clasificación binaria simplificada</strong>.
      Dos tachos claramente diferenciados que facilitan el reciclaje.
    </p>

   

  </div>

</div>
          
          

          <div className="grid md:grid-cols-2 gap-12 items-start justify-items-center">

            {/* TACHO VERDE */}
            <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center justify-between space-y-4 max-w-xs h-full">
             <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
        Verde → Reciclables / Inorgánicos
      </span>
              <img
                src="/screenshots/tacho-verde.png"
                alt="Tacho verde reciclables"
               className="w-36 h-36 object-contain"
              />

              <p className="text-slate-700 text-lg leading-relaxed">
                <strong>Tacho verde:</strong> para botellas, latas, cartón, vidrio
                y otros residuos inorgánicos <strong>(limpios y secos)</strong>.
=======
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-orange-500">¡Hola, vecin@!</h2>
          <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>Sabemos que la gestión actual de basura en Hamoni presenta desafíos: tachos que se saturan rápido recorridos largos y la mezcla de residuos que impide un reciclaje real</p>
            <div className="flex justify-center pt-4">
              <p className="bg-[#769C48] text-white p-6 md:p-8 rounded-[2rem] font-bold italic text-xl md:text-2xl inline-block shadow-lg leading-tight max-w-2xl">
                Beland llega para transformar este proceso, sin costos extras para la administración
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
              </p>

            </div>

            {/* TACHO NEGRO */}
            <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center justify-between space-y-4 max-w-xs h-full">
             <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
        Negro → Orgánicos
      </span>
              <img
                src="/screenshots/tacho-negro.png"
                alt="Tacho negro residuos"
                className="w-36 h-36 object-contain"
              />

              <p className="text-slate-700 text-lg leading-relaxed">
                <strong>Tacho negro :</strong> para restos de comida,
                servilletas y residuos de jardín.
              </p>

            </div>

          </div>

          {/* IMPACTO SOCIAL */}
          <div className="flex justify-center pt-6">

            <p className="bg-[#769C48] text-white p-6 md:p-8 rounded-[2rem] font-bold italic text-xl md:text-2xl inline-block shadow-lg max-w-3xl">
              Impacto social real: tus residuos separados irán directamente
              a <strong>Belén Simbaña </strong>, nuestra recicladora local,mejorando sus ingresos y evitando que el material termine en el relleno sanitario.
            </p>

          </div>

        </div>

      </section>

<<<<<<< HEAD
      {/* CASHBACK */}
=======
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-16 text-center">

          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">
              Tu Basura Paga la Cuenta
            </h2>
            <p className="text-xl text-slate-600 italic">
              Recicla sin salir de casa
            </p>
            <p className="text-xl text-slate-600 italic">
              Ahora , el reciclaje no solo es mas fácil , sino que te premia.🎁
               A traves del <strong> Delivery circular de Beland </strong> , ya no tienes que cargar bolsas hasta los tachos:            </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6">
              <ShoppingBag className="mx-auto text-orange-500" size={36} />
              <h4 className="text-2xl font-black uppercase italic">Pide por la app</h4>
              <p className="text-slate-600">
                Compra tus viveres y snacks.
              </p>
              <Button onClick={() => window.open("https://beland.app", "_blank")} className="bg-[#769C48] text-white rounded-xl">
                beland.app <ExternalLink size={16}/>
              </Button>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6">
              <Truck className="mx-auto text-[#769C48]" size={36} />
              <h4 className="text-2xl font-black uppercase italic">Delivery circular</h4>
              <p>Beland entrega tu pedido en la puerta de tu casa y , en ese mismo momento , se llevara tus reciclables limpios.</p>
            </div>

            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-6">
  <span className="text-4xl">💰</span>

  <h4 className="text-2xl font-black uppercase italic">
    Gana BeCoins
  </h4>

  <p className="text-slate-600">
    Cada compra genera :
     <strong> 2% de cashback para ti</strong> y 
    <strong> 2% para Hamoni</strong>,
  Cada vez que reciclas desde tu casa recibes monedas digitales para futuras compras dentro y fuera de la app.</p>
  
</div>

=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center flex flex-col items-center justify-between border border-slate-100 min-h-[350px]">
              <div className="space-y-6">
                <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-orange-100">
                  <ShoppingBag className="text-orange-500" size={36}/>
                </div>
                <h4 className="text-2xl font-black uppercase italic">Pide por la app</h4>
                <p className="text-slate-600">Compra tus víveres y snacks desde:</p>
              </div>
              <Button onClick={() => window.open("https://beland.app", "_blank")} className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-xl font-bold px-8 mt-6 flex items-center gap-2 h-12">
                beland.app <ExternalLink size={16} />
              </Button>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center flex flex-col items-center justify-between border border-slate-100 min-h-[350px]">
              <div className="space-y-6">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-green-100">
                  <Truck className="text-[#769C48]" size={36}/>
                </div>
                <h4 className="text-2xl font-black uppercase italic">Delivery circular</h4>
                <p className="text-slate-600">Beland entregará tu pedido en la puerta de tu casa y, en ese mismo momento, se llevará tus reciclables limpios.</p>
              </div>
            </div>
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
<<<<<<< HEAD

          <h2 className="text-4xl md:text-5xl font-black uppercase italic">
            Calendario y bienestar Comunitario 📅
          </h2>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">

            {schedule.map((item, i) => (
              <div key={i} className="grid md:grid-cols-3 p-6 border-b last:border-none">
                <span className="font-black text-[#769C48]">{item.day}</span>
                <span>{item.time}</span>
                <span>{item.activity}</span>
=======
          <div className="space-y-4">
            <div className="inline-block bg-[#769C48] text-white px-8 py-2 rounded-full font-black text-lg shadow-md mb-4 italic tracking-tighter uppercase">✨ Más Popular</div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Calendario Comunitario</h2>
              <span className="text-5xl animate-bounce md:animate-none">🗓️</span>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
            {schedule.map((item, i) => (
              <div key={i} className="flex flex-col md:grid md:grid-cols-3 items-center p-6 border-b last:border-none hover:bg-slate-50 transition-colors gap-2 md:gap-4 text-center md:text-left">
                <span className="font-black text-[#769C48] text-xl">{item.day}</span>
                <span className="text-slate-500 font-bold md:text-center">{item.time}</span>
                <span className="font-bold text-slate-800 md:text-right text-sm md:text-base">{item.activity}</span>
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
              </div>
            ))}

          </div>

        </div>
      </section>

<<<<<<< HEAD
      {/* FORBES */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">

          <p className="text-2xl md:text-4xl italic text-slate-600">
            “Una persona que recicla hace una gran diferencia en el mundo.
            <span className="text-[#769C48] font-black uppercase">
              hacerlo juntos lo cambia todo.
            </span>”
=======
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-2xl md:text-4xl italic text-slate-600 leading-snug">
            “Una persona que recicla hace una gran diferencia en el mundo. <span className="text-[#769C48] font-black uppercase"> Hacerlo juntos</span> lo cambia todo.”
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
          </p>

          <div className="space-y-4">
<<<<<<< HEAD
            <p className="text-5xl font-black italic">Forbes</p>

            <button
              onClick={() =>
                window.open(
                  "https://www.forbesargentina.com/negocios/asi-beland-primera-plataforma-argentina-paga-sus-usuarios-reciclar-n39100",
                  "_blank"
                )
              }
              className="font-black uppercase underline text-xs hover:text-[#769C48]"
            >
              Leer artículo
            </button>
=======
            <p className="text-5xl font-black italic tracking-tighter">Forbes</p>
            <button onClick={() => window.open("https://www.forbesargentina.com/negocios/asi-beland-primera-plataforma-argentina-paga-sus-usuarios-reciclar-n39100", "_blank")} className="font-black uppercase underline tracking-widest text-xs hover:text-[#769C48]">Leer artículo</button>
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
          </div>

        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className="py-24 flex justify-center">
        <Button
          onClick={() => window.open("https://wa.me/593995269974", "_blank")}
          className="bg-[#25D366] text-white rounded-full h-20 px-10 text-xl font-black flex items-center gap-4"
        >
          <MessageCircle size={28} />
          Contactate con nosotros
=======
      <section className="py-24 px-6 flex flex-col items-center gap-6">
        <Button onClick={() => window.open('https://wa.me/593995269974', '_blank')} className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-20 md:h-24 px-8 md:px-12 text-lg md:text-2xl font-black uppercase italic shadow-2xl flex items-center gap-4 transition-transform hover:scale-105 active:scale-95">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10" /> Contactate con nosotros
>>>>>>> a14a9c8a17f89fb4cbd1521e6acfdf087711c639
        </Button>
      </section>

    </div>
  );
}