'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vimeoVideos = [
  { id: '1110360770', orientation: 'horizontal' },
  { id: '1110358536', orientation: 'horizontal' },
  { id: '1105292422', orientation: 'vertical' },
  { id: '1105291453', orientation: 'vertical' },
  { id: '1101640058', orientation: 'horizontal' },
  { id: '1092160562', orientation: 'horizontal' },
];

const mediaItems = vimeoVideos.map((video) => ({
  type: 'video',
  videoId: video.id,
  videoUrl: `https://player.vimeo.com/video/${video.id}?api=1&autoplay=1&muted=1&controls=0&loop=1`,
  alt: `Video de la galería de Beland`,
  orientation: video.orientation,
}));

export function MediaGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const postVimeoMessage = (index: number, method: 'play' | 'pause') => {
    const iframe = videoRefs.current[index];
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com');
    }
  };

  const handleFullScreen = (index: number) => {
    const container = containerRefs.current[index];
    if (container) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) { /* Safari */
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { /* IE11 */
        container.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      postVimeoMessage(current, 'pause');
      postVimeoMessage(newIndex, 'play');
      setCurrent(newIndex);
    };

    api.on('select', handleSelect);
    postVimeoMessage(api.selectedScrollSnap(), 'play');

    return () => {
      api.off('select', handleSelect);
    };
  }, [api, current]);

  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            La <span className="text-secondary">Experiencia</span> <span className="text-primary">Beland</span>
          </h2>
          <p className="max-w-2xl mx-auto text-center text-muted-foreground">
            Un vistazo a nuestras iniciativas, nuestra comunidad y el impacto que
            estamos creando juntos.
          </p>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent ref={(el) => (containerRefs.current[index] = el)} className="group relative aspect-video w-full h-full flex items-center justify-center p-0 overflow-hidden bg-black">
                      <iframe
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={item.videoUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 z-10 bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleFullScreen(index)}
                        aria-label="Ver en pantalla completa"
                      >
                        <Expand className="h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
