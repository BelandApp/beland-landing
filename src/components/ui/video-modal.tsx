'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface VideoModalProps {
  children: React.ReactNode;
  videoUrl: string;
  title: string;
  orientation?: 'horizontal' | 'vertical';
}

export function VideoModal({ children, videoUrl, title, orientation = 'horizontal' }: VideoModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          'p-0 bg-transparent border-none shadow-none w-[95vw]',
          ' [&>button]:text-white [&>button]:opacity-70 [&>button:hover]:opacity-100',
          ' [&>button]:top-2 [&>button]:right-2 [&>button]:bg-black/30 [&>button]:rounded-full',
          {
            'max-w-4xl': orientation === 'horizontal',
            'max-w-md sm:max-w-sm': orientation === 'vertical',
          }
        )}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div
          className={cn('relative w-full rounded-lg overflow-hidden', {
            'aspect-video': orientation === 'horizontal',
            'aspect-[9/16]': orientation === 'vertical',
          })}
        >
          <iframe
            title="vimeo-player"
            src={videoUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          ></iframe>
          {/* The old DialogTitle is now a p tag to avoid accessibility conflicts */}
          <p className="absolute bottom-4 left-4 text-white bg-black/40 px-3 py-1 rounded-lg text-sm md:text-base pointer-events-none">
            {title}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
