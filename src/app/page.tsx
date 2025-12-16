import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { CTA } from "@/components/home/cta";
import { BlogPreview } from "@/components/home/blog-preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ImpactStats />
      <CTA />
      <BlogPreview />
    </div>
  );
}
