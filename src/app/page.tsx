import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { CTA } from "@/components/home/cta";
import { ConexionCircular } from "@/components/home/conexion-circular";
import { CaaSPackages } from "@/components/home/caas-packages";
import { MediaGallery } from "@/components/home/media-gallery";
import { Features } from "@/components/home/features";
import { VideoCarousel } from "@/components/home/video-carousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <MediaGallery />
      <ImpactStats />
      <ConexionCircular />
      <Features />
      <CaaSPackages />
      
      {/* Colocamos el carrusel de videos al final de la landing */}
      <VideoCarousel />

      {/* <CTA /> */}
    </main>
  );
}