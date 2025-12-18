"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  TreePine,
  Droplet,
  Wind,
  Flame,
  Mountain,
  Sparkles,
  Users,
} from "lucide-react";
const events = [
  {
    id: "deborah",
    name: "Deborah DeLuca",
    partner: "Wonderground",
    recycling: {
      carton: 10,
      plastico: 18,
      vidrio: 8.5,
      aluminio: 15.5,
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
    id: "cristoph",
    name: "Cristoph",
    partner: "Beland",
    recycling: {
      carton: 8,
      plastico: 23,
      vidrio: 21.4,
      aluminio: 35,
    },
    impact: {
      arboles: 0.187,
      agua: 1107.7,
      co2: 165,
      petroleo: 41.8,
      materiaPrima: 77,
    },
    families: 34,
  },
  {
    id: "nicole",
    name: "Nicole Moudaber",
    partner: "Wonderground",
    recycling: {
      carton: 24.2,
      plastico: 40.7,
      vidrio: 49.5,
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
    id: "conexion1",
    name: "Conexion Circular #1",
    partner: "Beland",
    recycling: {
      carton: 12,
      plastico: 32,
      vidrio: 8,
      aluminio: 18,
    },
    impact: {
      arboles: 0.407,
      agua: 2323.2,
      co2: 440,
      petroleo: 84.7,
      materiaPrima: 355.3,
    },
    families: 34,
  },
  {
    id: "conexion2",
    name: "Conexion Circular #2",
    partner: "Beland",
    recycling: {
      carton: 4,
      plastico: 12,
      vidrio: 9.3,
      aluminio: 12.6,
    },
    impact: {
      arboles: 0.407,
      agua: 2323.2,
      co2: 440,
      petroleo: 84.7,
      materiaPrima: 355.3,
    },
    families: 34,
  },

  {
    id: "conexion3",
    name: "Conexion Circular #3",
    partner: "Beland",
    recycling: {
      carton: 117,
      plastico: 85,
      vidrio: 133,
      aluminio: 61,
    },
    impact: {
      arboles: 6.34,
      agua: 319236.05,
      co2: 4218.24,
      petroleo: 891.84,
      materiaPrima: 1564.55,
    },
    families: 34,
  },
  {
    id: "conexion4",
    name: "Conexion Circular #4",
    partner: "Beland",
    recycling: {
      carton: 121,
      plastico: 93.5,
      vidrio: 115.5,
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
    id: "conexion5",
    name: "Conexion Circular #5",
    partner: "Beland",
    recycling: {
      carton: 35,
      plastico: 28,
      vidrio: 10,
      aluminio: 15,
    },
    impact: {
      arboles: 6.34,
      agua: 319236.05,
      co2: 4218.24,
      petroleo: 891.84,
      materiaPrima: 1564.55,
    },
    families: 34,
  },
  {
    id: "conexion6",
    name: "Conexion Circular #6",
    partner: "Beland",
    recycling: {
      carton: 58,
      plastico: 45,
      vidrio: 18,
      aluminio: 23,
    },
    impact: {
      arboles: 6.34,
      agua: 319236.05,
      co2: 4218.24,
      petroleo: 891.84,
      materiaPrima: 1564.55,
    },
    families: 34,
  },
  {
    id: "total",
    name: "Total",
    partner: "Beland",
    recycling: {
      carton: 373,
      plastico: 417.5,
      vidrio: 313.5,
      aluminio: 320.6,
    },
    impact: {
      arboles: 6.34,
      agua: 319236.05,
      co2: 4218.24,
      petroleo: 891.84,
      materiaPrima: 1564.55,
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
  const [selectedTab, setSelectedTab] = useState(events[0]?.id ?? "");

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
            <span className="w-3 h-3 mr-2 inline-block align-middle">
              <Sparkles className="w-3 h-3" />
            </span>
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

        {/* Layout tipo sidebar en desktop, dropdown en mobile */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Dropdown en mobile, sidebar en desktop */}
          <div className="w-full md:w-1/4 flex flex-col gap-2 md:gap-4 pb-2 md:pb-0">
            {/* Dropdown profesional solo visible en mobile */}
            <div className="block md:hidden mb-4">
              <Select value={selectedTab} onValueChange={setSelectedTab}>
                <SelectTrigger className="w-full">
                  {/* Muestra el nombre del evento seleccionado */}
                  <span className="truncate">
                    {events.find((e) => e.id === selectedTab)?.name ||
                      "Selecciona un evento"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.id}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Sidebar solo visible en desktop */}
            <div className="hidden md:flex flex-col gap-4">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedTab(event.id)}
                  className={`w-full px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 text-center whitespace-nowrap
                    ${
                      selectedTab === event.id
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md scale-105"
                        : "bg-muted/50 dark:bg-muted/30 text-muted-foreground hover:bg-primary/10"
                    }
                  `}
                  style={{ minWidth: 0 }}
                >
                  {event.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido del tab seleccionado */}
          <div className="flex-1">
            {events.map((event) => {
              if (event.id !== selectedTab) return null;
              return (
                <div key={event.id} className="space-y-6 animate-fade-in">
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
                          <span className="w-5 h-5 inline-block align-middle">
                            <Wind className="w-5 h-5" />
                          </span>
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
                          <span className="w-8 h-8 text-white inline-block align-middle">
                            <Users className="w-8 h-8 text-white" />
                          </span>
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
                </div>
              );
            })}
          </div>
        </div>

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
