"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Target, Users2, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Target,
    title: "Marketing Circular",
    description:
      "Experiencias interactivas que incentivan el reciclaje, impulsan tus resultados ESG y refuerzan tu imagen de marca.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Plataforma Circular",
    description:
      "Beland convierte residuos en monedas digitales, activa comunidades y crea un ecosistema donde todos se benefician.",
    color: "secondary",
  },
  {
    icon: Users2,
    title: "Gestión Integral",
    description:
      "Gestión completa de residuos no peligrosos con trazabilidad, reportes y certificados de impacto ambiental.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Contenido de Alto Impacto",
    description:
      "Generamos contenido UGC y experiencias memorables que conectan tu marca con la sostenibilidad real.",
    color: "secondary",
  },
];

export function CircularServices() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-secondary/5 to-white dark:from-background dark:via-secondary/10 dark:to-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold animate-slide-up">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Servicios
            </span>{" "}
            Circulares
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-100">
            Soluciones integrales para transformar tu organización en un
            referente de sostenibilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === "primary";
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50 bg-white dark:bg-card dark:border-primary/30 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-lg ${
                      isPrimary ? "bg-primary/10" : "bg-secondary/10"
                    } flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
