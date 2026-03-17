"use client";

import { TrendingUp, Users, Recycle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  {
    icon: Award,
    value: "4",
    label: "Reconocimientos Internacionales",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    value: "100+",
    label: "Familias de recicladores beneficiadas",
    color: "text-yellow-500",
  },
  {
    icon: Recycle,
    value: "10+",
    label: "Toneladas recicladas",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Interacciones con usuarios reales",
    color: "text-primary",
  },
];

export default function ImpactStats() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="impacto"
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              Nuestro Impacto <span className="text-primary">Real</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformando residuos en riqueza para la comunidad
            </p>
          </div>

          {/* Grid corregido para centrar 4 elementos */}
          <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card border-2 border-primary/20 dark:border-primary/30 hover:scale-105 w-full max-w-[280px] lg:max-w-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8 text-center space-y-5">
                    <div className="flex justify-center">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/5`}
                      >
                        <Icon className={`w-10 h-10 ${stat.color}`} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        {stat.value}
                      </div>
                      <p className="text-sm font-bold text-foreground/80 leading-snug px-2">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  
                  {/* Efecto de brillo al pasar el mouse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-primary via-white to-secondary pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}