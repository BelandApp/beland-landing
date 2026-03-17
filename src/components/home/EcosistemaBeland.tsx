"use client";

import React from "react";
import { Coins, Truck, Ticket, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiencias = [
  {
    title: "Gana monedas por reciclar",
    description: "Las puedes utilizar dentro del ecosistema Beland o transferirlas a tu cuenta de banco 🤑",
    icon: Coins,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Delivery Circular",
    description: "Compra desde tu casa. Nosotros te llevamos tu pedido y retiramos tus residuos sin costo. Si reciclaste ganas hasta el 5% de tu compra en cash back ♻️",
    icon: Truck,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Accede a experiencias y descuentos exclusivos",
    description: "Lo único que tienes que hacer es reciclar desde la comodidad de tu casa 😉",
    icon: Ticket,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Compra en grupo",
    description: "Organiza tus juntadas y divide los pagos con tus amigos, nosotros nos encargamos de los residuos y te devolvemos el dinero de los productos que no se consuman 😍",
    icon: Users2,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function EcosistemaBeland() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            La experiencia <span className="text-primary">Beland</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sostenibilidad inteligente y beneficios reales para tu comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {experiencias.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="flex flex-col items-center text-center p-10 rounded-[2rem] border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-8`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4 min-h-[64px] flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}