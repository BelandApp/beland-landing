import Hero from "../components/home/Hero";
import ImpactStats from "../components/home/ImpactStats";
import CaaSPackages from "../components/home/CaaSPackages";
import Features from "../components/home/Features";
import EcosistemaBeland from "../components/home/EcosistemaBeland";
import VideoCarousel from "../components/home/VideoCarousel";


  export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. Inicio */}
      <Hero />
      
      {/* 2. Impacto */}
      <ImpactStats />
      
      {/* 3. La experiencia Beland (Ahora aquí, después de impacto) */}
      <EcosistemaBeland /> 
      
      {/* 4. Modelos y Planes */}
      <CaaSPackages /> 
      
      {/* 5. Características adicionales */}
      <Features /> 
      
      {/* 6. Carrusel de Videos */}
      <VideoCarousel />

      {/* <CTA /> */}
    </main>
  );
}