"use client";

import React from "react";
import { Coins, Truck, Ticket, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from 'next-intl';

const icons = [Coins, Truck, Ticket, Users2];
const colors = [
  "bg-green-50 text-green-600",
  "bg-orange-50 text-orange-600",
  "bg-red-50 text-red-600",
  "bg-purple-50 text-purple-600",
];

export default function EcosistemaBeland() {
  const t = useTranslations('Ecosystem');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t('title')} <span className="text-primary">Beland</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((num, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index}
                className="flex flex-col items-center text-center p-5 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl ${colors[index]} flex items-center justify-center mb-4 md:mb-8 shrink-0`}>
                  <Icon className="w-7 h-7 md:w-10 md:h-10" />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-base md:text-2xl font-bold tracking-tight text-slate-900 mb-2 md:mb-4 min-h-[48px] md:min-h-[64px] flex items-center justify-center leading-tight">
                    {t(`item${num}.title` as any)}
                  </h3>
                  <p className="text-slate-500 leading-snug md:leading-relaxed text-xs md:text-base">
                    {t(`item${num}.description` as any)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}