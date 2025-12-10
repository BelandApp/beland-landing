import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { CaaSPackages } from "@/components/home/caas-packages";
import { ImpactStats } from "@/components/home/impact-stats";
import { CircularServices } from "@/components/home/circular-services";
import { MediaGallery } from "@/components/home/media-gallery";
import { ConexionCircular } from "@/components/home/conexion-circular";
import { GuinnessChallenge } from "@/components/home/guinness";
import { About } from "@/components/home/about";
import { CTA } from "@/components/home/cta";
import { BlogPreview } from "@/components/home/blog-preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ImpactStats />
      <CircularServices />
      <CaaSPackages />
      <MediaGallery />
      <ConexionCircular />
      <GuinnessChallenge />
      <Features />
      <About />
      <CTA />
      <BlogPreview />
    </div>
  );
}
