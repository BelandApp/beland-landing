"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    { src: "/screenshots/registrate.jpeg", alt: "App home", title: "Regístrate en la App ", text: "Regístrate, explora, participa y transforma consumo en acción." },
    { src: "/screenshots/home.jpeg", alt: "App home", title: "Ingresa a la App", text: "Carga saldo,compra tus productos, recibelos en tu hogar y transforma consumo en acción." },
    { src: "/screenshots/home1.jpeg", alt: "App home", title: "Home", text: "Menu principal,donde visualizas tu billetera,cuentas y impacto." },
    { src: "/screenshots/billetera.jpeg", alt: "App billetera", title: "Billetera: recarga y compra", text: "Recarga saldo, compra tus productos y recibelos en tu hogar. Transacciones que generan valor social y ambiental." },
    { src: "/screenshots/grupos.jpeg", alt: "App grupos", title: "Crea tus grupos o únete a uno", text: "Únete a grupos o crea el tuyo para organizar tu propio evento circular." },
    { src: "/screenshots/carrito2.jpeg", alt: "App carrito", title: "Delivery con propósito", text: "Cada entrega impulsa una red de impacto circular: recibí tu pedido y entregá tus reciclables." },
    { src: "/screenshots/impacto.jpeg", alt: "App impacto", title: "Tu impacto", text: "Descubre tu impacto con Beland, cuantos kg reciclaste, cuantos litros de agua conservaste y tus Becoins obtenidos." },
    { src: "/screenshots/grupos.jpeg", alt: "App grupos", title: "Crea tus grupos o únete a uno", text: "Únete a grupos o crea el tuyo para organizar tu propio evento circular." },
    { src: "/screenshots/ordenes.jpeg", alt: "App ordenes", title: "Mis ordenes", text: "Aca podras encontrar tus compras en proceso o finalizadas" },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % screenshots.length);

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
      <div className="relative z-10 container mx-auto px-4 mt-8 md:mt-0 max-w-4xl">
        
        {/* 1. Badge - CENTRADO */}
        <div className="flex justify-center mb-6 md:mb-10 w-full">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center">La primera plataforma circular de Latinoamérica</span>
          </div>
        </div>

      
  {/* 2. Título y Párrafos Iniciales - OPTIMIZADOS Y CENTRADOS */}
<div className="flex flex-col items-center text-center mb-8 md:mb-12 px-4">
  
  {/* Título más compacto y potente */}
  <h1 
    className="font-black tracking-tighter leading-none mb-4" 
    style={{ fontSize: "clamp(2.8rem, 11vw, 5.5rem)" }}
  >
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Beland
    </span>
  </h1>
  
  {/* Contenedor Refinado */}
  <div className="max-w-xl flex flex-col gap-3">
    
    {/* Frase Gancho */}
    <p className="text-sm md:text-lg text-muted-foreground font-medium leading-snug">
      Es un ecosistema circular que transforma <span className="text-foreground">acciones sostenibles en valor</span> para la comunidad.
    </p>

    {/* Bloque de Valor con borde lateral */}
    <div className="relative p-3 md:p-4 rounded-2xl bg-primary/5 border-l-4 border-primary/40 text-left">
      <p className="text-[11px] md:text-sm text-foreground/80 leading-tight italic">
        <strong>Beland</strong> integra pagos, delivery y recompensas dentro de un mismo sistema, impulsando una red donde cada acción positiva fortalece a toda la comunidad.
      </p>
    </div>

  </div>
</div>

        {/* 3. Columna Central: Celular Carousel (Aumentado de tamaño) */}
        <div className="flex justify-center items-center mb-10 md:mb-16">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
               onTouchStart={handleTouchStart} 
               onTouchMove={handleTouchMove} 
               onTouchEnd={handleTouchEnd}>
            
            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-primary/20 bg-white shadow-2xl">
              {screenshots.map((screenshot, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="(max-width: 768px) 280px, 380px"
                  />
                </div>
              ))}
            </div>

            {/* Botones Nav - Ajustados para ser más visibles */}
            <button onClick={goToPrevious} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-full bg-white/90 shadow-lg text-primary z-20 hover:bg-white transition-colors">
              <ChevronLeft className="w-5 md:w-8 h-5 md:h-8" />
            </button>
            <button onClick={goToNext} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-full bg-white/90 shadow-lg text-primary z-20 hover:bg-white transition-colors">
              <ChevronRight className="w-5 md:w-8 h-5 md:h-8" />
            </button>
          </div>
        </div>

        {/* 4. Texto Variable del Slide y Botón - DEBAJO DEL CELULAR */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div key={currentSlide} className="max-w-md px-6 py-4 border-t-2 border-primary/20 transition-all duration-500 bg-primary/5 rounded-b-xl">
            <h3 className="text-lg md:text-2xl font-bold text-primary leading-tight mb-2">{screenshots[currentSlide].title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-snug">{screenshots[currentSlide].text}</p>
          </div>

          <div className="w-full flex justify-center pb-10">
            <a href="https://beland.app" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
              <Button size="lg" className="w-full py-7 text-lg gap-3 shadow-xl hover:scale-105 transition-transform rounded-2xl">
                Prueba nuestra app Beland <ArrowRight className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}