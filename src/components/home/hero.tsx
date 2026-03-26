"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const screenshots = [
    { src: "/screenshots/home1.jpeg", alt: "App home", title: "Home", text: "Menu principal, donde visualizas tu billetera, cuentas y impacto." },
    { src: "/screenshots/registrate.jpeg", alt: "App home", title: "Regístrate en la App ", text: "Regístrate, explora, participa y transforma consumo en acción." },
    { src: "/screenshots/home.jpeg", alt: "App home", title: "Ingresa a la App", text: "Carga saldo, compra tus productos, recibelos en tu hogar y transforma consumo en acción." },
    { src: "/screenshots/mismonedas.jpeg", alt: "App billetera", title: "Recarga saldo y compra", text: "Recarga saldo, compra tus productos y recibelos en tu hogar. Transacciones que generan valor social y ambiental." },
    { src: "/screenshots/grupos.jpeg", alt: "App grupos", title: "Crea tus grupos o únete a uno", text: "Únete a grupos o crea el tuyo para organizar tu propio evento circular." },
    { src: "/screenshots/carrito2.jpeg", alt: "App carrito", title: "Delivery con propósito", text: "Cada entrega impulsa una red de impacto circular: recibí tu pedido y entregá tus reciclables." },
    { src: "/screenshots/impacto.jpeg", alt: "App impacto", title: "Tu impacto", text: "Descubre tu impacto con Beland, cuantos kg reciclaste, cuantos litros de agua conservaste y tus Becoins obtenidos." },
    { src: "/screenshots/ordenes.jpeg", alt: "App ordenes", title: "Mis ordenes", text: "Aca podras encontrar tus compras en proceso o finalizadas" },
  ];

  useEffect(() => {
    if (isFullScreen) return; 
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length, isFullScreen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullScreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation(); 
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => (touchCurrentX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const delta = touchStartX.current - touchCurrentX.current;
    if (delta > 50) goToNext();
    else if (delta < -50) goToPrevious();
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <section id="hero" className="relative flex flex-col overflow-hidden pt-6 md:pt-16 bg-gradient-to-br from-background via-background to-primary/5 pb-8 md:pb-20">
      
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsFullScreen(false)}
        >
          <button className="absolute top-6 right-6 text-white hover:scale-110 transition-transform z-[120]">
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative w-full h-[85vh] flex items-center justify-center">
            <button onClick={goToPrevious} className="absolute left-0 md:left-10 p-4 bg-primary rounded-full text-white z-[120] shadow-2xl hover:bg-primary/90 transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative aspect-[9/19] h-full bg-black rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-black animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-30"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-white">
                <img src={screenshots[currentSlide].src} className="w-full h-full object-contain" alt="App Preview Full" />
              </div>
            </div>
            
            <button onClick={goToNext} className="absolute right-0 md:right-10 p-4 bg-primary rounded-full text-white z-[120] shadow-2xl hover:bg-primary/90 transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 mt-8 md:mt-0 max-w-4xl">

        {/* 2. Logo  */}
        <div className="flex flex-col items-center text-center mb-2 px-4">
          <div className="relative flex justify-center w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] mix-blend-multiply">
            <Image
              src="/screenshots/beland.titulo.png" 
              alt="Beland"
              width={600}
              height={100}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* 3. Carrusel del Celular  */}
        <div className="flex justify-center items-center mb-10 md:mb-12 mt-0">
          <div 
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] cursor-pointer"
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd}
            onClick={() => setIsFullScreen(true)}
          >
            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-primary/20 bg-white shadow-2xl">
              {screenshots.map((screenshot, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    sizes="(max-width: 768px) 280px, 380px"
                  />
                </div>
              ))}
            </div>

            <button onClick={goToPrevious} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-full bg-white/90 shadow-lg text-primary z-30 hover:bg-white transition-colors">
              <ChevronLeft className="w-5 md:w-8 h-5 md:h-8" />
            </button>
            <button onClick={goToNext} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-full bg-white/90 shadow-lg text-primary z-30 hover:bg-white transition-colors">
              <ChevronRight className="w-5 md:w-8 h-5 md:h-8" />
            </button>
          </div>
        </div>

        {/* 4. Textos, Botón y Tarjetas de Impacto */}
        <div className="flex flex-col items-center text-center space-y-10">
          <div key={currentSlide} className="max-w-md px-6 py-4 border-t-2 border-primary/20 transition-all duration-500 bg-primary/5 rounded-b-xl">
            <h3 className="text-lg md:text-2xl font-bold text-primary leading-tight mb-2">{screenshots[currentSlide].title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-snug">{screenshots[currentSlide].text}</p>
          </div>

          <div className="w-full flex justify-center">
            <a href="https://beland.app" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
              <Button size="lg" className="w-full py-7 text-lg gap-3 shadow-xl hover:scale-105 transition-transform rounded-2xl">
                Prueba nuestra app Beland <ArrowRight className="w-6 h-6" />
              </Button>
            </a>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 mt-10 border-t border-[#769C48]/20 items-stretch">
  
  {/*  PROPÓSITO  */}
  <div className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-center">
    {/* Badge de Propósito */}
    <div className="absolute -top-3 left-8 px-4 py-1 bg-[#769C48] text-white rounded-full shadow-md">
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Propósito</span>
    </div>
    
    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed italic">
      Es un <span className="text-slate-900 font-black">ecosistema circular</span> que transforma <span className="text-[#769C48] font-black underline decoration-2 underline-offset-4">acciones sostenibles en valor</span> para la comunidad.
    </p>
  </div>

  {/*  INTEGRACIÓN  */}
  <div className="relative p-8 rounded-[2.5rem] bg-[#769C48]/5 border-l-8 border-[#769C48] flex flex-col justify-center overflow-hidden">
    
    <div className="absolute top-6 right-8 opacity-20">
      <Sparkles className="w-10 h-10 text-orange-500" />
    </div>

    <p className="text-sm md:text-base text-slate-700 leading-relaxed relative z-10">
      <strong className="text-[#769C48] font-black italic uppercase tracking-wider block mb-2 text-lg">Beland</strong> 
      integra pagos, delivery y recompensas dentro de un mismo sistema, impulsando una red donde cada <span className="text-orange-600 font-bold">acción positiva</span> fortalece a toda la comunidad.
    </p>

    {/*  puntos o línea  */}
    <div className="flex gap-1.5 mt-4">
      <div className="h-1.5 w-6 bg-[#769C48] rounded-full" />
      <div className="h-1.5 w-1.5 bg-orange-400 rounded-full" />
      <div className="h-1.5 w-1.5 bg-orange-200 rounded-full" />
    </div>
  </div>

</div>
   
        </div>
      </div>
    </section>
  );
}