import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Heart,
  Target,
  Sparkles,
  Handshake,
} from "lucide-react";

const territories = [
  {
    name: "Territorio del Sol",
    description:
      "Comunidad costera que redujo plástico de un solo uso en 40% con nuestras iniciativas circulares.",
    imageUrl:
      "https://res.cloudinary.com/dbfboc8cm/image/upload/v1757203115/ruta_del_sol_zkdwcj.jpg",
    impact: "40% menos plástico",
    color: "primary",
  },
  {
    name: "Distrito Verde",
    description:
      "Centro urbano con compostaje comunitario y mercado de agricultores próspero y sostenible.",
    imageUrl:
      "https://res.cloudinary.com/dbfboc8cm/image/upload/v1757203118/Distrito_Verde_ivff54.jpg",
    impact: "85% compostaje local",
    color: "secondary",
  },
  {
    name: "Valle Esmeralda",
    description:
      "Zona rural que revitalizó su economía local vendiendo productos sostenibles en nuestra plataforma.",
    imageUrl:
      "https://res.cloudinary.com/dbfboc8cm/image/upload/v1757203125/Valle_Esmeralda_hocwgi.jpg",
    impact: "+120% ingresos",
    color: "primary",
  },
];

export default function TerritoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="text-sm px-5 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary border-secondary/30">
              <MapPin className="w-4 h-4 mr-2" />
              Impacto Local
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold animate-slide-up">
              <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">
                Territorios
              </span>
              <br />
              <span className="text-foreground">Beland</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-100">
              Donde la circularidad echa raíces. Creamos soluciones a medida que
              respetan la identidad única de cada comunidad
            </p>
          </div>
        </div>
      </section>

      {/* Modelo de Impacto */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-secondary/5 to-white dark:from-background dark:via-secondary/10 dark:to-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Nuestro Modelo de{" "}
              <span className="text-secondary">Impacto Local</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              No creemos en soluciones únicas. Trabajamos mano a mano con
              residentes y líderes locales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Análisis y Co-diseño",
                description:
                  "Estudiamos necesidades y activos de cada territorio para diseñar un plan de acción conjunto y personalizado.",
                gradient: "from-secondary/10 to-secondary/5",
              },
              {
                icon: Users,
                title: "Empoderamiento Comunitario",
                description:
                  "Capacitamos embajadores locales y promovemos participación activa a través de nuestra plataforma digital.",
                gradient: "from-primary/10 to-primary/5",
              },
              {
                icon: Heart,
                title: "Resultados y Evolución",
                description:
                  "Medimos impacto social, económico y ambiental, adaptando estrategias continuamente.",
                gradient: "from-secondary/10 to-secondary/5",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 border-2 border-secondary/20 dark:border-secondary/30 bg-white dark:bg-card hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="text-sm px-4 py-1.5 bg-primary/10 text-primary mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Casos de Éxito
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Historias de <span className="text-primary">Transformación</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce el impacto real de Beland a través de nuestras comunidades
              asociadas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {territories.map((territory, index) => (
              <Card
                key={territory.name}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 dark:border-primary/30 bg-white dark:bg-card hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={territory.imageUrl}
                    alt={territory.name}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge
                    className={`absolute top-4 right-4 bg-${territory.color} text-white`}
                  >
                    {territory.impact}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {territory.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {territory.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ¿Listo para transformar tu{" "}
              <span className="text-primary">comunidad</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabajemos juntos para crear un territorio más sostenible y
              próspero
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
