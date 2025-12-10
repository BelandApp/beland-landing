"use client";

import { TrendingUp, Users, Recycle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  {
    icon: Award,
    value: "1",
    label: "Record Guinness",
    color: "text-yellow-500",
  },
  {
    icon: Recycle,
    value: "50K+",
    label: "Toneladas de residuos",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "$1.8M+",
    label: "En ingresos para la comunidad",
    color: "text-secondary",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Experiencias con clientes",
    color: "text-primary",
  },
];

export function ImpactStats() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground animate-slide-up">
              Nuestro Impacto Real
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up animation-delay-100">
              Transformando residuos en riqueza para la comunidad
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white dark:bg-card border-2 border-primary/20 dark:border-primary/30 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground/70">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-primary to-secondary`}
                  ></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
