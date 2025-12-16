import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { CTA } from "@/components/home/cta";
import { ConexionCircular } from "@/components/home/conexion-circular";
import { CaaSPackages } from "@/components/home/caas-packages";
import { MediaGallery } from "@/components/home/media-gallery";
import { Features } from "@/components/home/features";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ImpactStats />
      <ConexionCircular />
      <CaaSPackages />
      <Features />
      <MediaGallery />
      <CTA />
    </main>
  );
}
