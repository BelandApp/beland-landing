"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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

  // Touch handlers for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) {
      touchStartX.current = null;
      touchCurrentX.current = null;
      return;
    }
    const delta = touchStartX.current - touchCurrentX.current;
    const threshold = 50; // px
    if (delta > threshold) goToNext();
    else if (delta < -threshold) goToPrevious();
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      >
      {/* Animated background elements (hidden on small screens) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center py-12 md:py-20">
          {/* Left side - Main content */}
          <div className="order-1 md:order-1 space-y-6">
            {/* Badge */}
            <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300 w-full">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">La primera plataforma circular de Latinoamérica</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Circularity</span>
              <br />
              <span className="text-foreground">as a Service</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Integramos nuestro modelo circular a tus actividades, generando <span className="text-primary font-semibold">impacto</span>, <span className="text-secondary font-semibold">comunidad</span> y <span className="text-primary font-semibold">retorno medible</span>.
            </p>

            {/* Description + Carousel Label */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-semibold text-primary animate-fade-in">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {screenshots[currentSlide].text}
              </p>
            </div>
          </div>

          {/* Right side - Carousel (placed on the right) */}
          <div className="flex items-center justify-center order-2 md:order-2">
            <div
              className="relative w-full max-w-xs"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel background glow */}
              <div className="absolute -inset-4 blur-2xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-secondary/25 rounded-3xl"></div>
              </div>

              {/* Carousel container */}
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl border-2 border-primary/30 bg-white shadow-2xl">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
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

              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary transition-all duration-300 text-white hover:scale-110 shadow-lg z-40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition-all duration-300 text-white hover:scale-110 shadow-lg z-40"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
              </button>

              {/* Carousel indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                        : "w-2 bg-primary/40 hover:bg-primary/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>


    </>
  );
}
