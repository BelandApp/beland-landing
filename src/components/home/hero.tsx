"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    { src: "/screenshots/registrate.jpeg", alt: "App home", title: "Regístrate en la app Beland", text: "Regístrate, explora, participa y transforma consumo en acción." },
    { src: "/screenshots/billetera.jpeg", alt: "App billetera", title: "Billetera: recarga y compra", text: "Recarga saldo, compra tus productos y recibelos en tu hogar. Transacciones que generan valor social y ambiental." },
    { src: "/screenshots/carrito2.jpeg", alt: "App carrito", title: "Delivery con propósito", text: "Cada entrega impulsa una red de impacto circular: recibí tu pedido y entregá tus reciclables." },
    { src: "/screenshots/tuimpacto.jpeg", alt: "App impacto", title: "Tu impacto", text: "Descubre tu impacto con Beland, cuantos kg reciclaste, cuantos litros de agua conservaste y tus Becoins obtenidos." },
    { src: "/screenshots/grupos.jpeg", alt: "App grupos", title: "Crea tus grupos o únete a uno", text: "Únete a grupos o crea el tuyo para organizar tu propio evento circular." },
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
    <section id="hero" className="relative flex flex-col overflow-hidden pt-6 md:pt-16 bg-gradient-to-br from-background via-background to-primary/5 pb-4 md:pb-12">
      <div className="relative z-10 container mx-auto px-4 mt-8 md:mt-0">
        
        {/* Badge - CENTRADO SIEMPRE */}
        <div className="flex justify-center mb-4 md:mb-10 w-full">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center">La primera plataforma circular de Latinoamérica</span>
          </div>
        </div>

        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-2 gap-3 md:gap-12 items-center">
          
          {/* Columna Izquierda: Contenido y Botón */}
          <div className="flex flex-col space-y-3 md:space-y-6 text-left">
            <div>
              <h1 className="font-extrabold tracking-tight leading-none mb-2 md:mb-4" style={{ fontSize: "clamp(1.8rem, 8vw, 4rem)" }}>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Beland</span>
              </h1>
              <div className="text-[9px] sm:text-xs md:text-base text-muted-foreground leading-snug space-y-2">
                <p>Es un ecosistema circular que transforma acciones sostenibles en valor para la comunidad.</p>
               
                <p className="font-medium text-foreground/90">Beland integra pagos, delivery y recompensas dentro de un mismo sistema, impulsando una red donde cada acción positiva fortalece a toda la comunidad.</p>
              </div>
            </div>

            {/* Slide Info */}
            <div key={currentSlide} className="py-1 border-l-2 border-primary/40 pl-2 transition-all duration-500">
              <h3 className="text-[10px] md:text-lg font-bold text-primary leading-tight">{screenshots[currentSlide].title}</h3>
              <p className="text-[9px] md:text-sm text-muted-foreground leading-tight">{screenshots[currentSlide].text}</p>
            </div>

            {/* Botón justo debajo del texto */}
            <div className="pt-2">
              <a href="https://beland.app" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="md:hidden text-[10px] h-8 px-4 gap-1 shadow-md">
                  Prueba nuestra app <ArrowRight className="w-3 h-3" />
                </Button>
                <Button size="lg" className="hidden md:flex gap-2">
                  Prueba nuestra app Beland <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Celular Carousel */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[145px] sm:max-w-[200px] md:max-w-xs" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl md:rounded-3xl border-2 border-primary/30 bg-white shadow-xl">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={720}
                      height={1560}
                      className="w-full h-full object-contain"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Botones Nav ajustados */}
              <button onClick={goToPrevious} className="absolute -left-2 top-1/2 -translate-y-1/2 p-1 md:p-3 rounded-full bg-primary/80 text-white z-20">
                <ChevronLeft className="w-3 md:w-6 h-3 md:h-6" />
              </button>
              <button onClick={goToNext} className="absolute -right-2 top-1/2 -translate-y-1/2 p-1 md:p-3 rounded-full bg-secondary/80 text-white z-20">
                <ChevronRight className="w-3 md:w-6 h-3 md:h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}