"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Rocket, ArrowRight, X, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const packages = [
  {
    name: "Consultoría Circular",
    icon: Sparkles,
    price: "$0",
    description: "Discovery Process",
    popular: false,
    features: ["Discovery Process", "Modelo Circular a medida", "1 podcast del proceso"],
    cta: "Agenda tu Consultoría",
  },
  {
    name: "Pro",
    subtitle: "Estrategia y Gestión",
    icon: Zap,
    price: "$250+",
    description: "Gestión integral de residuos",
    popular: true,
    features: [
      "Incluye Consultoría",
      "Gestión integral de residuos no peligrosos",
      "1 campaña circular al mes",
      "Reporte de resultados",
      "Certificado de gestión de residuos",
    ],
    cta: "Comenzar Pro",
  },
  {
    name: "Team",
    subtitle: "Impacto Total",
    icon: Rocket,
    price: "$1500+",
    description: "Solución completa end-to-end",
    popular: false,
    features: [
      "Incluye Pro",
      "1 Evento circular al mes",
      "Contenido de alto impacto (UGC)",
      "Trazabilidad y Reporting",
      "Desarrollo de productos circulares",
      "Impacto social positivo",
    ],
    cta: "Comenzar Team",
  },
];

export default function CaaSPackages() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    org: "",
    tel: "",
    email: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    formData.nombre.trim() !== "" &&
    formData.tel &&
    isValidPhoneNumber(formData.tel) &&
    formData.email &&
    isValidEmail(formData.email);

  const handleOpenModal = (plan: string) => {
    setSelectedPlan(plan);
    setIsOpen(true);
    setShowConfirmation(false);
  };

  const sendToWhatsApp = () => {
    if (!isFormValid) return;

    const myNumber = "593995269974";

    const message =
      `*HOLA, TIENES UNA NUEVA SOLICITUD DE SERVICIO - BELAND*\n` +
      `*Plan elegido:* ${selectedPlan}\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Empresa:* ${formData.org || "No especificada"}\n` +
      `*WhatsApp:* ${formData.tel}\n` +
      `*Email:* ${formData.email}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setShowConfirmation(true);
    setFormData({ nombre: "", org: "", tel: "", email: "" });

    setTimeout(() => {
      setIsOpen(false);
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <section
      ref={ref}
      id="circularity-service"
      className={`py-16 relative overflow-hidden transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge
            className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20"
            variant="outline"
          >
            Circularity as a Service
          </Badge>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Elige tu Modelo de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impacto Circular
            </span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base">
            Simplificamos la sostenibilidad para empresas con un modelo por suscripción.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? "border-2 border-primary shadow-md scale-105 z-20 bg-card"
                  : "border border-border bg-card/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 text-xs font-bold shadow-md">
                    🌟 Más Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-6">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    pkg.popular
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <pkg.icon size={28} />
                </div>

                <CardTitle className="text-xl font-bold">
                  {pkg.name}
                </CardTitle>

                <div className="mt-2 text-3xl font-black text-foreground">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="flex-grow px-5">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-5 pb-6 pt-4">
                <Button
                  onClick={() => handleOpenModal(pkg.name)}
                  className="w-full text-sm font-bold py-5 rounded-lg"
                >
                  {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-background border p-6 rounded-3xl shadow-2xl w-full max-w-sm relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">{selectedPlan}</h3>

            <input
              className="w-full p-3 border rounded-xl mb-2"
              placeholder="Tu Nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />

            <PhoneInput
              placeholder="WhatsApp"
              defaultCountry="AR"
              value={formData.tel}
              onChange={(value) =>
                setFormData({ ...formData, tel: value || "" })
              }
            />

            <input
              className="w-full p-3 border rounded-xl mt-2"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Button
              onClick={sendToWhatsApp}
              className="w-full mt-4 bg-green-500"
            >
              <MessageCircle className="mr-2" /> Enviar
            </Button>

            {showConfirmation && (
              <p className="text-center text-green-500 mt-2">¡Enviado!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}