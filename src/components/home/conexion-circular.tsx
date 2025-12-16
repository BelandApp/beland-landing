"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Droplet,
  Wind,
  Flame,
  Mountain,
  Users,
  TreePine,
  Sparkles,
} from "lucide-react";

const events = [
  {
    id: "deborah",
    name: "Deborah De Luca",
    partner: "Wonderground",
    recycling: {
      plastico: 19.8,
      vidrio: 9.35,
      carton: 11,
      aluminio: 17.05,
    },
    impact: {
      arboles: 0.187,
      agua: 1107.7,
      co2: 165,
      petroleo: 41.8,
      materiaPrima: 77,
    },
    families: 21,
  },
  {
    id: "nicole",
    name: "Nicole Moudaber",
    partner: "Wonderground",
    recycling: {
      plastico: 40.7,
      vidrio: 49.5,
      carton: 24.2,
      aluminio: 59.95,
    },
    impact: {
      arboles: 0.407,
      agua: 2323.2,
      co2: 440,
      petroleo: 84.7,
      materiaPrima: 355.3,
    },
    families: 9,
  },
  {
    id: "conexion4",
    name: "Conexión Circular #4",
    partner: "Beland x TNT",
    recycling: {
      plastico: 93.5,
      vidrio: 115.5,
      carton: 121,
      aluminio: 62.7,
    },
    impact: {
      arboles: 2.057,
      agua: 7300.7,
      co2: 1135.2,
      petroleo: 211.2,
      materiaPrima: 355.3,
    },
    families: 4,
  },
  {
    id: "wonderground",
    name: "Wonderground — Total",
    partner: "Wonderground",
    recycling: {
      plastico: 154,
      vidrio: 174.35,
      carton: 156.2,
      aluminio: 139.15,
    },
    impact: {
      arboles: 2.651,
      agua: 10731.6,
      co2: 1801.8,
      petroleo: 339.9,
      materiaPrima: 713.9,
    },
    families: 34,
  },
];

const recyclingIcons = [
  { key: "plastico", label: "Plástico", icon: "🧴", color: "text-blue-500" },
  { key: "vidrio", label: "Vidrio", icon: "🍷", color: "text-emerald-500" },
  { key: "carton", label: "Cartón", icon: "📦", color: "text-amber-500" },
  { key: "aluminio", label: "Aluminio", icon: "🥫", color: "text-slate-500" },
];

const impactMetrics = [
  { key: "arboles", label: "árboles sean talados", icon: TreePine },
  { key: "agua", label: "litros de agua sean contaminados", icon: Droplet },
  {
    key: "co2",
    label: "kg de CO₂ se emitan al ambiente",
    icon: Wind,
  },
  {
    key: "petroleo",
    label: "litros de petróleo crudo sean extraídos",
    icon: Flame,
  },
  {
    key: "materiaPrima",
    label: "kg de materia prima sean explotados",
    icon: Mountain,
  },
];

type Props = { compact?: boolean };

export function ConexionCircular({ compact }: Props) {
  const [selectedTab, setSelectedTab] = useState("wonderground");

  if (compact) {
    const summary = events.find((e) => e.id === "wonderground") || events[0];
    const totalRecycled = Object.values(summary.recycling).reduce(
      (a, b) => a + b,
      0
    );

    return (
      <section id="conexion-circular" className="py-12">
        <div className="container">
          <div className="flex items-center justify-between gap-4 bg-white dark:bg-card p-6 rounded-2xl border-2 border-primary/10">
            <div>
              <h3 className="text-xl font-bold">Conexión Circular</h3>
              <p className="text-sm text-muted-foreground">
                Impacto real y medible
              </p>
              <div className="mt-3 text-2xl font-extrabold text-primary">
                {totalRecycled.toFixed(0)} kg
              </div>
              <p className="text-xs text-muted-foreground">
                Total reciclado (muestra)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/conexion-circular"
                className="btn-primary hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-white"
              >
                Ver detalles
              </a>
              <a
                href="/recursos"
                className="text-sm text-muted-foreground underline"
              >
                Ir a Recursos
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="conexion"
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="text-center space-y-3 mb-10 animate-fade-in">
          <Badge
            className="text-sm px-4 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary hover:from-primary/30 hover:to-secondary/30 border-primary/30 transition-all duration-300"
            variant="outline"
          >
            <Sparkles className="w-3 h-3 mr-2" />
            Impacto Real Medible
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Conexión Circular
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Resultados reales de nuestros eventos circulares
          </p>
        </div>

        <Tabs
          defaultValue="wonderground"
          className="max-w-5xl mx-auto"
          onValueChange={setSelectedTab}
        >
          <TabsList className="mb-8 bg-muted/50 dark:bg-muted/30 rounded-xl shadow-md w-full px-4 py-4 md:py-3 min-h-[100px] md:min-h-[56px]">
            {/* Mobile: two columns using flex-wrap; Desktop: grid via media query */}
            <div className="flex flex-wrap gap-2 justify-center items-center px-2 py-2 md:hidden">
              {events.map((event) => (
                <div key={event.id} className="w-[48%]">
                  <TabsTrigger
                    value={event.id}
                    className="w-full text-center px-3 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap"
                  >
                    {event.id === "wonderground"
                      ? "Wonderground Total"
                      : event.id === "deborah"
                      ? "Deborah De Luca"
                      : event.id === "nicole"
                      ? "Nicole Moudaber"
                      : "Conexión #4"}
                  </TabsTrigger>
                </div>
              ))}
            </div>

            {/* Desktop / md+: grid of 4 */}
            <div className="hidden md:grid md:grid-cols-4 gap-2 px-1 py-1">
              {events.map((event) => (
                <TabsTrigger
                  key={event.id}
                  value={event.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-xs md:text-sm font-semibold rounded-lg transition-all duration-300"
                >
                  {event.id === "wonderground"
                    ? "Wonderground Total"
                    : event.id === "deborah"
                    ? "Deborah De Luca"
                    : event.id === "nicole"
                    ? "Nicole Moudaber"
                    : "Conexión #4"}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          {events.map((event) => (
            <TabsContent
              key={event.id}
              value={event.id}
              className="space-y-6 animate-fade-in"
            >
              {/* Header con nombre del evento */}
              <div className="text-center bg-gradient-to-r from-card via-primary/5 to-card dark:from-card dark:via-primary/10 dark:to-card border border-primary/20 rounded-2xl p-4 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {event.name}
                </h3>
                <Badge className="mt-2 bg-secondary text-white">
                  {event.partner}
                </Badge>
              </div>

              {/* Grid de 2 columnas: Reciclaje + Impacto Ambiental */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Columna Izquierda: Reciclaje */}
                <Card className="border-2 border-primary/20 dark:border-primary/30 bg-white dark:bg-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary">
                      <span className="text-2xl">♻️</span>
                      Resultados del reciclaje
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {recyclingIcons.map(({ key, label, icon, color }) => (
                        <div
                          key={key}
                          className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                            {icon}
                          </div>
                          <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {
                              event.recycling[
                                key as keyof typeof event.recycling
                              ]
                            }
                            <span className="text-xs ml-1">kg</span>
                          </div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Columna Derecha: Impacto Ambiental */}
                <Card className="border-2 border-secondary/20 dark:border-secondary/30 bg-white dark:bg-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-secondary">
                      <Wind className="w-5 h-5" />
                      Evitamos que:
                    </h4>
                    <div className="space-y-3">
                      {impactMetrics.map(({ key, label, icon: Icon }) => (
                        <div
                          key={key}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xl md:text-2xl font-black text-primary">
                              {event.impact[
                                key as keyof typeof event.impact
                              ].toLocaleString("es-ES")}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Impacto Social - Ahora más compacto */}
              <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center justify-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {event.families} familias
                      </div>
                      <div className="text-sm text-foreground/80 font-medium">
                        que viven del reciclaje fueron ayudadas
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Fecha */}
        <div className="text-center mt-10 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 shadow-md">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            14.02 - 01.10.2025
          </span>
        </div>
      </div>
    </section>
  );
}
