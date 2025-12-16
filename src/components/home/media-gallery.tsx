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
import { Expand, Play, Pause, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  thumbnail: `https://vumbnail.com/${video.id}.jpg`,
  alt: video.title,
  title: video.title,
}));

export function MediaGallery({ compact = true }: { compact?: boolean }) {
  const preview = mediaItems.slice(0, 3);

  // Compact preview for home
  if (compact) {
    return (
      <section id="media-gallery" className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                La <span className="text-secondary">Experiencia</span>{" "}
                <span className="text-primary">Beland</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mt-1">
                Un vistazo rápido a iniciativas y eventos; mira algunos videos
                destacados o explora más en Recursos.
              </p>
            </div>

            <div>
              <a
                href="/media-gallery"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:shadow-md transition"
              >
                Ver galería
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {preview.map((item, idx) => (
              <a
                key={idx}
                href={`/media-gallery#video-${idx}`}
                className="group block rounded-2xl overflow-hidden border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5 p-0 hover:scale-105 transform transition"
              >
                <div className="relative aspect-video w-full bg-black/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg opacity-90">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-sm">
                    {item.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full gallery page (carousel with iframes)
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
    if (container?.requestFullscreen) container.requestFullscreen();
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

  // If the URL has a hash like #video-2, jump to that slide and play
  useEffect(() => {
    if (!api || typeof window === "undefined") return;
    const m = window.location.hash.match(/video-(\d+)/);
    if (m) {
      const idx = Number(m[1]);
      if (!isNaN(idx)) {
        setTimeout(() => {
          try {
            api.scrollTo(idx);
            postVimeoMessage(current, "pause");
            postVimeoMessage(idx, "play");
            setCurrent(idx);
          } catch (e) {}
        }, 100);
      }
    }
  }, [api]);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullScreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      postVimeoMessage(current, "pause");
      setIsPlaying(false);
    } else {
      postVimeoMessage(current, "play");
      setIsPlaying(true);
    }
  };

  const togglePlayAt = (index: number) => {
    if (isPlaying && current === index) {
      postVimeoMessage(index, "pause");
      setIsPlaying(false);
      return;
    }

    // pause current, play target
    postVimeoMessage(current, "pause");
    postVimeoMessage(index, "play");
    setCurrent(index);
    setIsPlaying(true);
    // move carousel to the selected slide if api available
    try {
      api?.scrollTo?.(index);
    } catch (e) {}
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
  };

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
                      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => togglePlayAt(index)}
                          aria-label={
                            isPlaying && current === index
                              ? "Pausar video"
                              : "Reproducir video"
                          }
                          className="pointer-events-auto w-20 h-20 rounded-full bg-black/60 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          {isPlaying && current === index ? (
                            <Pause className="h-6 w-6" />
                          ) : (
                            <Play className="h-6 w-6" />
                          )}
                        </Button>
                      </div>

                      <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
                        {!isFullscreen ? (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-primary/90 text-white"
                            onClick={() => handleFullScreen(index)}
                            aria-label="Pantalla completa"
                          >
                            <Expand className="h-5 w-5" />
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-primary/90 text-white"
                            onClick={exitFullScreen}
                            aria-label="Salir de pantalla completa"
                          >
                            <Minimize2 className="h-5 w-5" />
                          </Button>
                        )}
                      </div>
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

        <div className="text-center mt-8">
          <a
            href="https://vimeo.com/beland"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border"
          >
            Ver más videos en Vimeo
          </a>
        </div>
      </div>
    </section>
  );
}
