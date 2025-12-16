import { About } from "@/components/home/about";
import { Features } from "@/components/home/features";
import { GuinnessChallenge } from "@/components/home/guinness";
import { MediaGallery } from "@/components/home/media-gallery";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <About />
      <Features />
      <GuinnessChallenge />
      <MediaGallery />
    </div>
  );
}
