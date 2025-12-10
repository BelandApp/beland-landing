"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const vimeoVideos = [
  { id: "1110360770", title: "La historia de tus residuos con Beland" },
  {
    id: "1110359756",
    title: "Gestión de los residuos Deborah DeLuca Circular",
  },
  { id: "1110358536", title: "Cristoph Circular" },

  {
    id: "1105292422",
    title: "Beland endulza la noche de museos (Buenos Aires)",
  },
  { id: "1105291453", title: "Deborah De Luca Circular" },
  { id: "1101640058", title: "BENJA n2" },
  { id: "1092160562", title: "Rocío Toaquiza" },
];

const mediaItems = vimeoVideos.map((video) => ({
  type: "video",
  videoId: video.id,
  videoUrl: `https://player.vimeo.com/video/${video.id}?api=1&autoplay=1&muted=1&controls=0&loop=1`,
  alt: video.title,
  title: video.title,
}));

export function MediaGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const postVimeoMessage = (index: number, method: "play" | "pause") => {
    const iframe = videoRefs.current[index];
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ method }),
        "https://player.vimeo.com"
      );
    }
  };

  const handleFullScreen = (index: number) => {
    const container = containerRefs.current[index];
    if (container?.requestFullscreen) {
      container.requestFullscreen();
    }
  };

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      postVimeoMessage(current, "pause");
      postVimeoMessage(newIndex, "play");
      setCurrent(newIndex);
    };

    api.on("select", handleSelect);
    postVimeoMessage(api.selectedScrollSnap(), "play");

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, current]);

  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            La <span className="text-secondary">Experiencia</span>{" "}
            <span className="text-primary">Beland</span>
          </h2>
          <p className="max-w-2xl mx-auto text-center text-muted-foreground">
            Un vistazo a nuestras iniciativas, eventos circulares y el impacto
            real que estamos creando en la comunidad.
          </p>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-2 border-primary/20">
                    <CardContent
                      ref={(el) => {
                        containerRefs.current[index] = el;
                      }}
                      className="group relative aspect-video w-full h-full flex items-center justify-center p-0 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5"
                    >
                      <iframe
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={item.videoUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="w-full h-full"
                        title={item.title}
                      ></iframe>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 z-10 bg-primary/90 hover:bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleFullScreen(index)}
                        aria-label="Ver en pantalla completa"
                      >
                        <Expand className="h-5 w-5" />
                      </Button>
                      {/* Video title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-sm font-medium">
                          {item.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Link to Vimeo */}
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <a
              href="https://vimeo.com/beland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más videos en Vimeo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
