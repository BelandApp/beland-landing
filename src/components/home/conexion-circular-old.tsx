"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Recycle,
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
  { key: "plastico", label: "Plástico", icon: "🧴" },
  { key: "vidrio", label: "Vidrio", icon: "🍷" },
  { key: "carton", label: "Cartón", icon: "📦" },
  { key: "aluminio", label: "Aluminio", icon: "🥫" },
];

const impactMetrics = [
  { key: "arboles", label: "árboles sean talados", icon: TreePine },
  { key: "agua", label: "litros de agua sean contaminados", icon: Droplet },
  {
    key: "co2",
    label: "kilogramos de CO₂ se emitan al ambiente",
    icon: Wind,
  },
  {
    key: "petroleo",
    label: "litros de petróleo crudo sean extraídos",
    icon: Flame,
  },
  {
    key: "materiaPrima",
    label: "kilogramos de materia prima sean explotados",
    icon: Mountain,
  },
];

export function ConexionCircular() {
  const [selectedTab, setSelectedTab] = useState("wonderground");

  return (
    <section
      id="conexion-circular"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <Badge
            className="mb-4 text-base px-6 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary hover:from-primary/30 hover:to-secondary/30 border-primary/30 transition-all duration-300 hover:scale-105"
            variant="outline"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Impacto Real Medible
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Conexión Circular
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Resultados reales de nuestros eventos circulares. Cada kilogramo
            cuenta para un futuro sostenible.
          </p>
        </div>

        <Tabs
          defaultValue="wonderground"
          className="max-w-6xl mx-auto"
          onValueChange={setSelectedTab}
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-muted/50 dark:bg-muted/30 p-6 rounded-2xl shadow-lg backdrop-blur-sm ">
            <TabsTrigger
              value="wonderground"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Wonderground Total
            </TabsTrigger>
            <TabsTrigger
              value="deborah"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Deborah De Luca
            </TabsTrigger>
            <TabsTrigger
              value="nicole"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Nicole Moudaber
            </TabsTrigger>
            <TabsTrigger
              value="conexion4"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Conexión #4
            </TabsTrigger>
          </TabsList>

          {events.map((event, eventIndex) => (
            <TabsContent
              key={event.id}
              value={event.id}
              className="space-y-8 animate-fade-in"
            >
              {/* Header Card */}
              <Card className="bg-gradient-to-br from-card via-card to-primary/10 dark:to-primary/20 border-2 border-primary/20 dark:border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-slide-up">
                <CardHeader className="text-center py-10">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider animate-fade-in">
                      Un evento de:
                    </p>
                    <CardTitle className="text-3xl py-2 md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-slide-up animation-delay-100">
                      {event.name}
                    </CardTitle>
                    {event.partner && (
                      <Badge className="text-base px-6 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-white hover:scale-110 transition-transform duration-300 animate-fade-in animation-delay-200">
                        {event.partner}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>

              {/* Recycling Results */}
              <Card className="border-2 border-primary/20 dark:border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white dark:bg-card">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10">
                  <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Recycle className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    Resultados del reciclaje
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-10 pb-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {recyclingIcons.map(({ key, label, icon }, index) => (
                      <div
                        key={key}
                        className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-white to-transparent dark:from-primary/10 dark:via-card dark:to-transparent hover:from-primary/10 hover:shadow-xl transition-all duration-500 group/item cursor-pointer border-2 border-transparent hover:border-primary/30 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-5xl md:text-6xl mb-4 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500">
                          {icon}
                        </div>
                        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover/item:scale-110 transition-transform duration-300">
                          {event.recycling[key as keyof typeof event.recycling]}
                          <span className="text-lg md:text-xl ml-1">kg</span>
                        </div>
                        <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Impact */}
              <Card className="border-2 border-secondary/20 dark:border-secondary/30 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card overflow-hidden group">
                <CardHeader className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent dark:from-secondary/20 dark:via-secondary/10">
                  <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Wind className="w-6 h-6 text-secondary" />
                    </div>
                    Evitamos que:
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8 pb-8">
                  <div className="space-y-4">
                    {impactMetrics.map(({ key, label, icon: Icon }, index) => (
                      <div
                        key={key}
                        className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-muted/50 to-transparent dark:from-muted/30 hover:from-muted hover:shadow-lg transition-all duration-500 group/metric border-2 border-transparent hover:border-primary/30 cursor-pointer animate-slide-in-left"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover/metric:scale-110 group-hover/metric:rotate-6 transition-all duration-500 shadow-md">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-3xl md:text-5xl font-black text-foreground mb-2 group-hover/metric:text-primary transition-colors duration-300">
                            {event.impact[
                              key as keyof typeof event.impact
                            ].toLocaleString("es-ES", {
                              maximumFractionDigits: 3,
                            })}
                          </div>
                          <div className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                            {label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Impact */}
              <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 border-2 border-primary/30 dark:border-primary/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-bounce-subtle">
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-500">
                      <Users className="w-12 h-12 text-white animate-pulse" />
                    </div>
                    <div>
                      <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-3">
                        {event.families} familias
                      </div>
                      <div className="text-lg md:text-xl text-foreground/80 font-semibold">
                        que viven del reciclaje fueron ayudadas
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Date Range */}
        <div className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:to-secondary/20 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in border-2 border-primary/20 dark:border-primary/30">
          <p className="text-lg md:text-2xl">
            <span className="font-black text-2xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              14.02 - 01.10.2025
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
