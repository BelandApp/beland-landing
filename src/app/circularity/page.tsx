import Image from "next/image";
import {
  Check,
  Recycle,
  BarChart3,
  Leaf,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CircularityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="text-sm px-5 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              <Recycle className="w-4 h-4 mr-2" />
              Solución Integral
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold animate-slide-up">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Circularidad
              </span>
              <br />
              como un Servicio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-100">
              Transformamos tu organización en un referente de sostenibilidad
              con tecnología, logística y datos en tiempo real
            </p>
          </div>
        </div>
      </section>

      {/* Qué es CaaS */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <Image
                src="https://res.cloudinary.com/dbfboc8cm/image/upload/v1757202868/beland_bj15kh.png"
                alt="Diagrama del servicio de circularidad"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-slide-in-right">
              <Badge className="text-sm px-4 py-1.5 bg-primary/10 text-primary">
                ¿Qué es CaaS?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Un modelo completo de{" "}
                <span className="text-primary">suscripción circular</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Circularidad como un Servicio elimina la complejidad de
                implementar programas de sostenibilidad. Te proporcionamos
                herramientas, logística y tecnología para gestionar reciclaje a
                gran escala.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde estaciones inteligentes hasta dashboards en tiempo real,
                somos tu socio estratégico para un futuro más verde.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2 text-secondary" />
                  Implementación Rápida
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                  Datos en Tiempo Real
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes Clave */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-secondary/5 to-white dark:from-background dark:via-secondary/10 dark:to-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Componentes <span className="text-secondary">Clave</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para una transición exitosa a la
              circularidad
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Recycle,
                title: "Estaciones de Reciclaje",
                description:
                  "Puntos de recolección modernos y eficientes, estratégicamente ubicados para maximizar participación.",
                gradient: "from-primary/10 to-primary/5",
              },
              {
                icon: BarChart3,
                title: "Plataforma Digital",
                description:
                  "Panel de control para monitorear métricas, gestionar recompensas y visualizar impacto en tiempo real.",
                gradient: "from-secondary/10 to-secondary/5",
              },
              {
                icon: TrendingUp,
                title: "Logística Inversa",
                description:
                  "Recolección, clasificación y reintroducción de materiales en la cadena de valor.",
                gradient: "from-primary/10 to-primary/5",
              },
            ].map((component, index) => {
              const Icon = component.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/20 dark:border-primary/30 bg-white dark:bg-card hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${component.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{component.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Beneficios <span className="text-primary">Tangibles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados medibles que impactan tu organización
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Reducción de Costos",
                description:
                  "Optimiza la gestión de residuos y reduce gastos operativos significativamente.",
              },
              {
                icon: Shield,
                title: "Cumplimiento Normativo",
                description:
                  "Asegura el cumplimiento de regulaciones ambientales locales e internacionales.",
              },
              {
                icon: Leaf,
                title: "Mejora de la Reputación",
                description:
                  "Demuestra compromiso real con sostenibilidad y atrae clientes y talento.",
              },
              {
                icon: BarChart3,
                title: "Datos para la Acción",
                description:
                  "Informes detallados para decisiones estratégicas y comunicar logros.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10 hover:from-primary/10 dark:hover:from-primary/20 transition-all duration-500 group border-2 border-transparent hover:border-primary/30 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
