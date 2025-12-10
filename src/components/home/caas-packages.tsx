"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

const packages = [
  {
    name: "Consultoría Circular",
    icon: Sparkles,
    price: "$0",
    originalPrice: "$500",
    description: "Discovery Process",
    popular: false,
    features: [
      "Discovery Process",
      "Modelo Circular a medida",
      "1 podcast del proceso",
    ],
    cta: "Agenda tu Consultoría",
    href: "https://forms.gle/RrjEtSDH2FTryM7C9",
  },
  {
    name: "Pro",
    subtitle: "Estrategia y Gestión",
    icon: Zap,
    price: "$250+",
    description: "Gestión integral de residuos",
    popular: true,
    features: [
      "Incluye Consultoría",
      "Gestión integral de residuos no peligrosos",
      "1 campaña circular al mes",
      "Reporte de resultados",
      "Certificado de gestión de residuos",
    ],
    cta: "Comenzar Pro",
    href: "https://forms.gle/RrjEtSDH2FTryM7C9",
  },
  {
    name: "Team",
    subtitle: "Impacto Total",
    icon: Rocket,
    price: "$1500+",
    description: "Solución completa end-to-end",
    popular: false,
    features: [
      "Incluye Pro",
      "1 Evento circular al mes",
      "Contenido de alto impacto (UGC)",
      "Trazabilidad y Reporting",
      "Desarrollo de productos circulares",
      "Productos hechos con sus residuos",
      "Impacto social positivo",
    ],
    cta: "Comenzar Team",
    href: "https://forms.gle/RrjEtSDH2FTryM7C9",
  },
];

export function CaaSPackages() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="caas"
      className={`py-24 md:py-32 relative overflow-hidden transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge
            className="mb-4 text-base px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30"
            variant="outline"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Circularity as a Service
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Elige tu Modelo de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impacto Circular
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde consultoría hasta implementación completa, tenemos el plan
            perfecto para tu organización
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={index}
                className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-2 border-primary shadow-xl scale-100 md:scale-105 bg-gradient-to-br from-card to-primary/5"
                    : "border-2 border-border hover:border-primary/30 bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-base font-bold shadow-lg">
                      🌟 Más Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-lg ${
                      pkg.popular
                        ? "bg-gradient-to-br from-primary to-primary/80"
                        : "bg-gradient-to-br from-primary/10 to-secondary/10"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        pkg.popular ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-black">
                    {pkg.name}
                  </CardTitle>
                  {pkg.subtitle && (
                    <p className="text-lg font-semibold text-muted-foreground mt-2">
                      {pkg.subtitle}
                    </p>
                  )}
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-3">
                      {pkg.originalPrice && (
                        <span className="text-2xl text-muted-foreground line-through font-medium">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span
                        className={`text-5xl md:text-6xl font-black ${
                          pkg.popular
                            ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            : "text-foreground"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground mt-3 font-medium">
                      {pkg.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow px-6 pb-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center ${
                            pkg.popular ? "bg-primary/20" : "bg-muted"
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 ${
                              pkg.popular
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <span className="text-base text-foreground/80 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-6 pb-8 pt-4">
                  <Button
                    asChild
                    className={`w-full text-base font-bold group ${
                      pkg.popular
                        ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
                        : ""
                    }`}
                    size="lg"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href={pkg.href} target="_blank">
                      {pkg.cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/20">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            ¿Necesitas algo personalizado para tu organización?
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Nuestro equipo está listo para crear una solución a tu medida
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base font-bold group border-2 border-primary hover:bg-primary hover:text-white"
          >
            <Link href="https://forms.gle/RrjEtSDH2FTryM7C9" target="_blank">
              Contacta con nuestro equipo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
