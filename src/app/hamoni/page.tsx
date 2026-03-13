"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    Truck,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    ShoppingBag
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
        },
        {
            title: "Delivery con propósito",
            desc: "Cada entrega impulsa una red de impacto circular: recibí tu pedido y entrega tus reciclables.",
            icon: <Truck className="mx-auto text-[#769C48]" size={36} />,
        },
        {
            title: "Gana monedas",
            desc: "Gana monedas por reciclar y cámbiatelas por dinero real en la app.",
            icon: <span className="text-4xl">💰</span>,
        }
    ];

    const [current, setCurrent] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    // Timer para el carrusel de imágenes (celular)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Timer para el carrusel de textos
    useEffect(() => {
        const timer = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [texts.length]);

    //  ocultar header/footer generales 
    useEffect(() => {
        const hideElements = () => {
            const elements = ["header", "footer", "nav"];
            elements.forEach(tag => {
                const el = document.querySelector(tag) as HTMLElement;
                if (el) el.style.display = "none";
            });
        };
        hideElements();
        const timeout = setTimeout(hideElements, 500);
        return () => {
            const elements = ["header", "footer", "nav"];
            elements.forEach(tag => {
                const el = document.querySelector(tag) as HTMLElement;
                if (el) el.style.display = "";
            });
            clearTimeout(timeout);
        };
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

            {/* 1. BANNER SUPERIOR */}
            <div className="w-full">
                <img
                    src="/screenshots/nosotros.jpeg"
                    alt="Banner"
                    className="w-full h-auto block object-cover"
                />
            </div>

            {/* 2. titulo */}
            <div className="text-center pt-10 px-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-orange-500">
                    ¡Hola, vecin@!
                </h2>
               <p className="mt-8 text-lg sm:text-xl md:text-2xl font-bold uppercase italic text-red-600">
  A partir del día Lunes 16 de Marzo ⌛
</p>
            </div>

            {/* 3. SECCIÓN PRINCIPAL: APP Y CARRUSEL */}
            <section className="pt-8 pb-16 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* texto */}
                    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4">
<div className="p-4 sm:p-6 md:p-8 relative">
                            <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-[#769C48]/10 rounded-full blur-2xl" />

                            <div className="text-center relative z-10 space-y-6">

                                <p className="text-lg sm:text-xl md:text-3xl font-black text-slate-900 italic">
                                    Tu basura paga la cuenta.
                                </p>

                                <p className="text-sm sm:text-base md:text-xl text-slate-700 leading-relaxed max-w-xl mx-auto">
                                    Compra desde {" "}
                                    <a href="https://beland.app" target="_blank" rel="noopener noreferrer" className="text-[#769C48] underline font-bold hover:text-orange-500 transition-colors">
                                        beland.app
                                    </a>
                                    , entréganos tus residuos inorgánicos limpios y secos y recibe
                                    <span className="text-[#769C48] font-bold"> 2% de cashback </span>
                                    para ti y
                                    <span className="text-[#769C48] font-bold"> 2% para tu comunidad</span>.
                                </p>

                                <p className="text-xs sm:text-sm md:text-lg font-black uppercase italic text-slate-900">
                                    Ahora el reciclaje no solo es más fácil, sino que te premia ♻️🎁
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="space-y-16">
                {/* MOCKUP CELULAR */}
                <div className="flex justify-center relative">
                    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[6px] md:border-[14px] rounded-[1.5rem] md:rounded-[2.5rem] h-[260px] md:h-[600px] w-[130px] md:w-[300px] shadow-2xl">
                        <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                            <img key={current} src={images[current]} className="w-full h-full object-cover animate-in fade-in duration-500" alt="Beland App" />
                            <button onClick={prevSlide} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"><ChevronLeft size={16} /></button>
                            <button onClick={nextSlide} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>

                {/* CARRUSEL DE TEXTOS ANIMADO */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 max-w-2xl w-full h-[380px] md:h-[320px] flex flex-col relative mx-auto overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div key={textIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full flex flex-col items-center">
                            <div className="mb-4">{texts[textIndex].icon}</div>
                            <h4 className="text-2xl md:text-3xl font-black uppercase italic text-slate-900 leading-tight">
                                {texts[textIndex].title}
                            </h4>
                            <p className="text-slate-600 text-lg md:text-xl mt-4 leading-relaxed max-w-[85%]">
                                {texts[textIndex].desc}
                            </p>
                        </div>
                    </div>
                    {/* Puntos de navegación */}
                    <div className="absolute bottom-6 w-full flex justify-center gap-2">
                        {texts.map((_, i) => (
                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === textIndex ? 'w-8 bg-[#769C48]' : 'w-2 bg-slate-200'}`} />
                        ))}
                    </div>
                </div>

                {/* BOTÓN beland.app */}
                <div className="flex justify-center w-full -mt-6 mb-20 md:mb-28">
                    <Button
    onClick={() => window.open("https://beland.app", "_blank")}
    className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-12 md:h-14 px-8 md:px-12 text-lg md:text-xl font-bold shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
>
    Beland.app <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
</Button>
                </div>
            </div>

        {/* --- Adios al problema de la basura*/ }
<div className="w-full flex flex-col items-center justify-center text-center space-y-4 mb-12 px-4 mt-16 md:mt-24">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-tight md:leading-none w-full">

        Adios al problema de la basura: <br className="hidden md:block" />
        <span className="text-[#769C48]"> infraestructura y orden.</span>
    </h2>

    <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl">
        Para mejorar la convivencia implementaremos una clasificación binaria simplificada. 
        Dos tachos claramente diferenciados que facilitan el reciclaje.
    </p>
</div >

        {/* 4. SECCIÓN DE TACHOS */ }
        < section className = "pb-20 px-6 text-center bg-slate-50/50 pt-16" >
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="grid md:grid-cols-2 gap-8 items-stretch justify-items-center">
                    <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center space-y-4 max-w-xs border">
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold border border-green-200 shadow-sm">
                            Verde → Reciclables / Inorgánicos
                        </span>
                        <img src="/screenshots/tacho-verde.png" alt="Tacho verde" className="w-32 h-32 object-contain" />
                        <p className="text-slate-700">Para botellas, latas, cartón y vidrio <strong>(limpios y secos)</strong>.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-md flex flex-col items-center space-y-4 max-w-xs border">
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-bold border border-gray-300 shadow-sm">
                            Negro → Orgánicos
                        </span>                            <img src="/screenshots/tacho-negro.png" alt="Tacho negro" className="w-32 h-32 object-contain" />
                        <p className="text-slate-700">Para restos de comida, servilletas y residuos de jardín.</p>
                    </div>
                </div>

                <div className="bg-white border-l-8 border-[#769C48] p-8 rounded-r-[2rem] shadow-md max-w-3xl mx-auto text-left mt-10">
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                        <span className="text-[#769C48] font-black uppercase italic block mb-2">Impacto social real:</span>
                        Tus residuos separados iran directamente a <strong>Belén Simbaña</strong>, nuestra recicladora local, mejorando sus ingresos y evitando que el material termine en el relleno sanitario.
                    </p>
                </div>
            </div>
            </section >

        {/* 5. CALENDARIO */ }
        <section className="py-12 md:py-16 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <h2 className="text-4xl md:text-5xl font-black uppercase italic">Calendario y Bienestar Comunitario 📅</h2>
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border">
                    {schedule.map((item, i) => (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-6 border-b last:border-none hover:bg-slate-50 transition-colors">
                            <span className="font-black text-[#769C48]">{item.day}</span>
                            <span className="text-slate-600">{item.time}</span>
                            <span className="font-medium text-slate-800">{item.activity}</span>
                        </div>
                    ))}
                </div>
            </div>
         </section >

        {/* 6. FORBES CON STICKERS */}
<section className="py-24 px-6 text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto space-y-8 relative">

        {/* Sticker IZQUIERDA */}
        <img
            src="/screenshots/no.es.basura.png"
            alt="no.es.basura."
    className="absolute left-6 md:left-20 top-[55%] -translate-y-1/2 w-20 sm:w-28 md:w-48 z-10 drop-shadow-xl -rotate-12"
/>
        {/* Sticker DERECHA */}
        <img
            src="/screenshots/mundo.beland.png"
            alt="Mundo Beland"
className="absolute right-2 md:right-16 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-48 z-10 drop-shadow-xl rotate-12"
/>
        <p className="text-2xl md:text-4xl italic text-slate-600 leading-snug relative z-20">
            “Así es Beland, la primera plataforma de la Argentina que
            <span className="text-[#769C48] font-black uppercase">
                {" "}te paga por reciclar.
            </span>”
        </p>

        <p className="text-5xl font-black italic">Forbes</p>

        <button
            onClick={() => window.open("https://www.forbes.com.ec/tags/beland-t23852", "_blank")}
            className="font-black uppercase underline text-xs hover:text-[#769C48] transition-colors"
        >
            Leer artículo
        </button>

    </div>
</section>


     <div className="flex justify-center py-16 w-full">
    <Button
        onClick={() => window.open("https://beland.app", "_blank")}
        className="bg-[#769C48] hover:bg-[#63843d] text-white rounded-2xl h-16 w-full md:w-auto px-10 text-lg md:text-xl font-bold shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
    >
        Beland.app <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
    </Button>
</div>

    {/* 7. CONTACTO */ }
    < section className="py-12 pb-24 flex flex-col items-center gap-6" >
        <Button
            onClick={() => window.open("https://wa.me/593995269974", "_blank")}
            className="bg-[#25D366] hover:bg-[#1eb956] text-white rounded-full h-14 px-10 text-lg font-semibold flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
        >
            <MessageCircle size={24} />
            Contactanos
        </Button>
   </section>
   
</div>
);
}