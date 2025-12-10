"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RefreshCw, Gift, ShoppingCart, Users, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: "primary" | "secondary";
};

const authUrl = "https://beland.app";

const features: Feature[] = [
  {
    icon: RefreshCw,
    title: "Eventos Circulares",
    description:
      "Participa en eventos que promueven la reutilización y el intercambio para dar una segunda vida a los productos.",
    href: authUrl,
    color: "primary", // Green
  },
  {
    icon: Gift,
    title: "Reciclaje Incentivado",
    description:
      "Gana recompensas por tus hábitos de reciclaje y contribuye a una economía más limpia y sostenible.",
    href: authUrl,
    color: "secondary", // Orange
  },
  {
    icon: ShoppingCart,
    title: "Compras Responsables",
    description:
      "Accede a un mercado de productos locales y sostenibles, apoyando a la economía de tu comunidad.",
    href: authUrl,
    color: "primary", // Green
  },
  {
    icon: Users,
    title: "Reuniones Sociales",
    description:
      "Conecta con vecinos y amigos en espacios comunitarios diseñados para fortalecer los lazos sociales.",
    href: authUrl,
    color: "secondary", // Orange
  },
];

export function Features() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="features"
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Un <span className="text-primary">Ecosistema</span> para Vivir Mejor
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ofrecemos herramientas y espacios para que cada acción cuente en la
            construcción de un futuro sostenible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const iconColorClass = `text-${feature.color}`;
            const bgColorClass = `bg-${feature.color}/10`;
            const borderColorClass = `border-${feature.color}/20`;

            return (
              <Link
                key={index}
                href={feature.href}
                className="flex"
                target="_blank"
              >
                <Card
                  className={`text-center p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full flex flex-col bg-white dark:bg-card border-2 ${borderColorClass} hover:border-${feature.color}/40 dark:border-primary/30`}
                >
                  <CardHeader className="items-center flex-grow">
                    <div
                      className={`p-4 ${bgColorClass} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${iconColorClass}`} />
                    </div>
                    <CardTitle className="text-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="pt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
