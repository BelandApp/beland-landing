"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function CTA() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explora Nuestras <span className="text-primary">Soluciones</span>
            </h2>
            <p className="text-foreground/80">
              Descubre cómo nuestro modelo de 'Circularidad como un Servicio' y
              nuestra expansión en Territorios están creando un impacto real y
              medible.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">
                  Circularidad como un Servicio
                </CardTitle>
                <CardDescription className="text-card-foreground/80">
                  Una plataforma integral para que empresas y municipios adopten
                  la economía circular.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/circularity">
                    Saber más <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Territorios Beland
                </CardTitle>
                <CardDescription className="text-card-foreground/80">
                  Soluciones personalizadas que transforman comunidades y
                  fomentan el desarrollo local sostenible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/territories">
                    Explorar Territorios <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
