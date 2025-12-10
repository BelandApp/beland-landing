import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">
              La primera plataforma circular de Latinoamérica
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Circularity
            </span>
            <br />
            <span className="text-foreground">as a Service</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Integramos nuestro modelo circular a tus actividades, generando{" "}
            <span className="text-primary font-semibold">impacto</span>,{" "}
            <span className="text-secondary font-semibold">comunidad</span> y{" "}
            <span className="text-primary font-semibold">retorno medible</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
            <div className="space-y-2 animate-scale-in animation-delay-300 hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                4+
              </div>
              <div className="text-sm text-muted-foreground">
                Reconocimientos Internacionales
              </div>
            </div>
            <div className="space-y-2 animate-scale-in animation-delay-400 hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-secondary">
                85+
              </div>
              <div className="text-sm text-muted-foreground">
                Toneladas Valorizadas
              </div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1 animate-scale-in animation-delay-500 hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                100K+
              </div>
              <div className="text-sm text-muted-foreground">
                Experiencias con Clientes
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in animation-delay-500">
            <Button
              asChild
              size="lg"
              className="text-lg group hover:scale-105 transition-transform duration-300"
            >
              <Link href="/circularity">
                Descubre CaaS
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="https://forms.gle/RrjEtSDH2FTryM7C9" target="_blank">
                Agenda tu Consultoría
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
