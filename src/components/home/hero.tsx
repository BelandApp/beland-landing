"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      src: "/screenshots/registrate.jpeg",
      alt: "App home",
      title: "Regístrate en la app Beland",
      text: "Regístrate, explora, participa y transforma consumo en acción.",
    },
    {
      src: "/screenshots/billetera.jpeg",
      alt: "App billetera",
      title: "Billetera: recarga y compra",
      text: "Recarga saldo, compra tus productos y recibelos en tu hogar. Transacciones que generan valor social y ambiental.",
    },
    {
      src: "/screenshots/carrito2.jpeg",
      alt: "App carrito",
      title: "Delivery con propósito",
      text: "Cada entrega impulsa una red de impacto circular: recibí tu pedido y entregá tus reciclables.",
    },
    {
      src: "/screenshots/tuimpacto.jpeg",
      alt: "App impacto",
      title: "Tu impacto",
      text: "Descubre tu impacto con Beland, cuantos kg reciclaste, cuantos litros de agua conservaste y tus Becoins obtenidos.",
    },
    {
      src: "/screenshots/grupos.jpeg",
      alt: "App grupos",
      title: "Crea tus grupos o únete a uno",
      text: "Únete a grupos o crea el tuyo para organizar tu propio evento circular.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const delta = touchStartX.current - touchCurrentX.current;
    const threshold = 50;
    if (delta > threshold) goToNext();
    else if (delta < -threshold) goToPrevious();
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="relative z-10 flex flex-col flex-1 justify-between">
        
        {/* Badge */}
        <div className="container flex justify-center pt-8 md:pt-12 pb-4">
          <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm w-fit">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium text-center">
              La primera plataforma circular de Latinoamérica
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="container relative flex-1 flex items-center py-8 md:py-10">
          <div className="w-full grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1
                className="font-extrabold tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Circularity
                </span>
                <br />
                <span className="text-foreground">as a Service</span>
              </h1>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                Integramos nuestro modelo circular a tus actividades, generando{" "}
                <span className="text-primary font-semibold">impacto</span>,{" "}
                <span className="text-secondary font-semibold">comunidad</span> y{" "}
                <span className="text-primary font-semibold">retorno medible</span>.
              </p>

              {/* Slide Text (FIX anti-glitch) */}
              <div
                key={currentSlide}
                className="pt-4 md:pt-6 space-y-3 transition-all duration-500 ease-in-out"
              >
                <h3 className="text-base md:text-lg font-semibold text-primary">
                  {screenshots[currentSlide].title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {screenshots[currentSlide].text}
                </p>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="flex items-center justify-center w-full">
              <div
                className="relative w-full max-w-xs"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border-2 border-primary/30 bg-white shadow-2xl">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <a
                        href="https://beland.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full cursor-pointer"
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={720}
                          height={1560}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                          loading={index === 0 ? "eager" : "lazy"}
                          priority={index === 0}
                        />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Nav Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary text-white"
                >
                  <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-secondary/80 hover:bg-secondary text-white"
                >
                  <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button (sin tocar) */}
        <div className="container flex justify-center md:justify-start pb-12 md:pb-16 pt-4">
          <a href="https://beland.app" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              Prueba nuestra app Beland
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}