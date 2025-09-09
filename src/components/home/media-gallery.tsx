import Image from "next/image";
import { VideoModal } from "@/components/ui/video-modal";
import { PlayCircle } from "lucide-react";

const vimeoVideos = [
  { id: "1110360770", orientation: "horizontal" },
  { id: "1110358536", orientation: "horizontal" },
  { id: "1105292422", orientation: "vertical" },
  { id: "1105291453", orientation: "vertical" },
  { id: "1101640058", orientation: "horizontal" },
  { id: "1092160562", orientation: "horizontal" },
];

const mediaItems = vimeoVideos.map((video) => ({
  type: "video",
  videoId: video.id,
  videoUrl: `https://player.vimeo.com/video/${video.id}?autoplay=1`,
  thumbnailUrl: `https://vumbnail.com/${video.id}.jpg`,
  alt: `Video de la galería de Beland`,
  orientation: video.orientation,
}));

export function MediaGallery() {
  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">La Experiencia Beland</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Un vistazo a nuestras iniciativas, nuestra comunidad y el impacto que
            estamos creando juntos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mediaItems
            .filter(item => item.thumbnailUrl)
            .map((item, index) => (
            <VideoModal
              key={index}
              videoUrl={item.videoUrl}
              title={item.alt}
              orientation={item.orientation as 'horizontal' | 'vertical'}
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover aspect-video transform transition-transform duration-300 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white text-opacity-80 group-hover:text-opacity-100 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </VideoModal>
          ))}
        </div>
      </div>
    </section>
  );
}
