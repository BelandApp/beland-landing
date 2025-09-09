import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestra Historia: Pasión por un Planeta Sano
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Beland nació de la convicción de que el cambio hacia un futuro
            sostenible es posible y necesario.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Transformar la manera en que las comunidades interactúan con su
                  entorno, fomentando una cultura de circularidad,
                  responsabilidad y conexión.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ser el movimiento de sostenibilidad líder en la región,
                  impulsado por la tecnología y la pasión de miles de personas
                  comprometidas con un mundo mejor.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
             <div className="aspect-video w-full bg-primary/10 rounded-lg flex items-center justify-center">
                <p className="text-primary/50">Video sobre nuestra historia</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
