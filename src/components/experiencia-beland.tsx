"use client";

import React from "react";
import { Coins, Truck, Ticket, Users, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiencias = [
  {
    icon: <Coins className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    title: "Gana monedas por reciclar",
    description: "Las puedes usar dentro del ecosistema Beland o enviarlas a tu cuenta de banco 🤯",
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
    description: "Organiza tus juntadas y divide los pagos con tus amigos, nosotros nos encargados de los residuos y te devolvemos el dinero de los productos que no se consuman 🤩",
    color: "bg-purple-500/10",
  },
];

export function ExperienciaBeland() {
  
  const scrollToCircularity = () => {
    const section = document.getElementById("circularity-service");
    if (section) {
      const headerHeight = 70;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <section id="experiencia" className="py-12 md:py-16 bg-background border-t-[0.5px] border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Título de sección */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
            La experiencia <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Beland</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Sostenibilidad inteligente y beneficios directos para vos.
          </p>
        </div>

        {/* Grid 2x2 con diseño de tarjetas horizontales (Estilo Conexión) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {experiencias.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl border-[0.5px] border-border/60 bg-card hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold tracking-tight mb-1">{item.title}</h3>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner B2B - Lleva tu negocio al siguiente nivel */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border-[0.5px] border-border p-6 md:p-8">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                <Rocket className="w-3 h-3" />
                Empresas
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight">Lleva tu negocio al siguiente nivel</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Consulta nuestro servicio <strong>Circularity as a Service</strong>
              </p>
            </div>
            
            <Button 
              onClick={scrollToCircularity} 
              className="w-full md:w-auto gap-2 bg-primary text-white shadow-lg hover:scale-105 transition-transform rounded-full px-8"
            >
              Consultar servicio <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}