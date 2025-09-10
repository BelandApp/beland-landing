'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, PlayCircle } from "lucide-react";
import { testimonials as allTestimonials, timelineEvents } from "@/lib/data";
import { VideoModal } from "@/components/ui/video-modal";

// Función para barajar un array (algoritmo de Fisher-Yates)
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

export function About() {
  const historyVideoUrl =
    "https://res.cloudinary.com/dbfboc8cm/video/upload/v1757200474/Peque%C3%B1as_acciones_que_generan_grandes_cambios_Gracias_a_la_maravillosa_iniciativa_Conexi%C3%B3_oiddlv.mp4";

  const [shuffledTestimonials, setShuffledTestimonials] = useState<any[]>([]);

  useEffect(() => {
    setShuffledTestimonials(shuffleArray([...allTestimonials]));
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* History and Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Nuestra Historia: <span className='text-primary'>Pasión por un Planeta Sano</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Beland nació de la convicción de que el cambio hacia un futuro
              sostenible es posible y necesario. Comenzamos como un pequeño
              proyecto con una gran visión: transformar la manera en que las
              comunidades interactúan con su entorno, fomentando una cultura de
              circularidad, responsabilidad y conexión.
            </p>
            <p className="text-sm text-muted-foreground">
              Hoy, somos un movimiento en crecimiento, impulsado por la tecnología
              y la pasión de miles de personas comprometidas con un mundo mejor.
            </p>
          </div>
          <div>
            <VideoModal videoUrl={historyVideoUrl} title="Nuestra Historia">
              <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dbfboc8cm/image/upload/v1757202868/beland_bj15kh.png"
                  alt="Miniatura del video de Nuestra Historia"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-primary text-opacity-80 group-hover:text-opacity-100 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </VideoModal>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Lo que Nuestra <span className='text-primary'>Comunidad Dice</span>
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            El impacto real de Beland se ve en las palabras de quienes viven la
            experiencia.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {shuffledTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-primary dark:bg-secondary">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-lg italic mb-4 text-primary-foreground dark:text-secondary-foreground">
                        “{testimonial.quote}”
                      </p>
                      <span className="font-semibold text-primary-foreground dark:text-black">{testimonial.name}</span>
                      <span className="text-sm text-primary-foreground/80 dark:text-secondary-foreground/80">
                        {testimonial.title}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Timeline */}
        <div className="mt-24">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">
              Nuestros <span className='text-primary'>Hitos Clave</span>
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Un recorrido por nuestro viaje hacia un futuro más circular.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center mb-12 flex-col md:flex-row md:justify-start even:md:self-end even:md:justify-end"
              >
                <div className="w-full md:w-5/12 md:odd:text-right md:odd:pr-8 md:even:text-left md:even:pl-8 text-center">
                  <h4 className="font-bold text-lg text-primary">
                    {event.year}
                  </h4>
                  <h5 className="font-semibold mt-1">{event.title}</h5>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.description}
                  </p>
                </div>
                <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1 rounded-full hidden md:block">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
