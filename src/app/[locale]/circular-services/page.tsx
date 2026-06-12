import  CircularServices  from "@/components/home/circular-services";
import  CaaSPackages  from "@/components/home/caaspackages";

export default function CircularServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <CircularServices />
      <CaaSPackages />
    </div>
  );
}
