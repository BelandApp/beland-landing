"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";

export function GuinnessChallenge() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="guinness-challenge"
      className={`relative py-24 md:py-32 overflow-hidden transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10"></div>

      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Trophy className="w-4 h-4 mr-2" />
              Camino al Record Guinness 2026
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Festival Circular
              </span>
              <br />
              Quito 2026
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">El Reto</h3>
                  <p className="text-muted-foreground">
                    Este año nos propusimos demostrar que la circularidad
                    funciona. Activamos barrios, reciclamos desde la base y
                    generamos comunidad, contenido y retorno real. Todo esto es
                    solo el comienzo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Festival Circular 2026
                  </h3>
                  <p className="text-muted-foreground">
                    Lanzamos el primer Festival Circular del mundo en Quito, con
                    un objetivo claro: romper un Récord Guinness reciclando en
                    toda la ciudad en simultáneo, durante una semana de música,
                    cultura y producción circular.
                  </p>
                </div>
              </div>

              <div className="relative p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <blockquote className="space-y-4">
                  <p className="text-lg italic">
                    "No se trata solo de romper un récord. Se trata de
                    transformar lo que el mundo desecha en riqueza para la
                    comunidad, valor para el mercado e impacto real para el
                    planeta. La circularidad no es el futuro, es el nuevo
                    estándar."
                  </p>
                  <cite className="block not-italic font-semibold text-primary">
                    — Team Beland
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Right: Stats card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-white dark:bg-card border-2 border-primary/20 dark:border-primary/30 rounded-3xl p-8 md:p-10 space-y-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Nuestro Impacto</h3>
                  <p className="text-muted-foreground">Hasta la fecha</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-background">
                    <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                      1
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Record Guinness
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-background">
                    <div className="text-5xl font-bold text-primary mb-2">
                      50K+
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Toneladas de residuos
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-white dark:from-secondary/10 dark:to-background">
                    <div className="text-5xl font-bold text-secondary mb-2">
                      $1.8M+
                    </div>
                    <p className="text-muted-foreground font-medium">
                      En ingresos para la comunidad
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full group">
                    <Link
                      href="https://forms.gle/RrjEtSDH2FTryM7C9"
                      target="_blank"
                    >
                      ¿Te sumas al reto?
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Buscamos marcas que quieran ser parte del nuevo modelo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
