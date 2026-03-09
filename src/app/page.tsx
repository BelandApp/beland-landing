import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { CTA } from "@/components/home/cta";
import { ConexionCircular } from "@/components/home/conexion-circular";
import { CaaSPackages } from "@/components/home/caas-packages";
import { EcosistemaBeland } from "@/components/home/ecosistema-beland"; // Nombre corregido
import { Features } from "@/components/home/features";
import { VideoCarousel } from "@/components/home/video-carousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      
      {/* Esta es la sección de las tarjetas con emoticones que acabamos de arreglar */}
      <EcosistemaBeland /> 
      
      <ImpactStats />
      <ConexionCircular />
      <Features />
      <CaaSPackages />
      
      {/* El carrusel de videos que lleva a la Galería Completa */}
      <VideoCarousel />

      {/* <CTA /> */}
    </main>
  );
}