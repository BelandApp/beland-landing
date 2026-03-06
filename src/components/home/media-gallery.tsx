"use client";

import React from "react";
import { Coins, Truck, Ticket, Users, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MediaGallery() {
  const scrollToPackages = () => {
    const section = document.getElementById("circularity-service");
    if (section) {
      window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
    }
  };

  const experiencias = [
    {
      icon: <Coins className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
      title: "Gana monedas por reciclar",
      description: "Las puedes utilizar dentro del ecosistema Beland o transferirlas a tu cuenta de banco 🤯",
      color: "bg-primary/10",
    },
    {
      icon: <Truck className="w-5 h-5 md:w-6 md:h-6 text-secondary" />,
      title: "Delivery Circular",
      description: "Compra desde tu casa. Nosotros te llevamos tu pedido y retiramos tus residuos sin costo. Si reciclaste ganas hasta el 5% de tu compra en cash back ♻️",
      color: "bg-secondary/10",
    },
    {
      icon: <Ticket className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
      title: "Accede a experiencias y descuentos exclusivos",
      description: "Lo único que tienes que hacer es reciclar desde la comodidad de tu casa 😉",
      color: "bg-orange-500/10",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      title: "Compra en grupo",
      description: "Organiza tus juntadas y divide los pagos con tus amigos, nosotros nos encargamos de los residuos y te devolvemos el dinero de los productos que no se consuman 🤩",
      color: "bg-purple-500/10",
    },
  ];

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Encabezado Estilo Moderno */}
        <div className="mb-12 text-center md:text-left space-y-4">
          <Badge className="bg-primary/10 text-primary px-4 py-1 rounded-full uppercase text-[10px] font-bold tracking-widest border-none">
            Ecosistema
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
            La experiencia <span className="text-primary">Beland</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            Sostenibilidad inteligente y beneficios reales para tu comunidad.
          </p>
        </div>

        {/* Grid 2x2 con Diseño Horizontal (Estilo Conexión) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {experiencias.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-5 p-6 rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner B2B Integrado */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 p-8 md:p-12 shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                <Rocket className="w-3 h-3" />
                Negocios
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Lleva tu negocio al siguiente nivel</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Consulta nuestro servicio <strong>Circularity as a Service</strong>
              </p>
            </div>
            
            <Button 
              onClick={scrollToPackages} 
              className="w-full md:w-auto gap-2 bg-primary text-white shadow-xl hover:scale-105 transition-all rounded-full px-10 h-14 text-sm font-bold"
            >
              Consultar servicio <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}