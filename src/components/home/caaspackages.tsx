"use client";

import { Button } from "@/components/ui/button"; // Ajustado según tu estructura original
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Rocket, ArrowRight, X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

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

const CAAS_VIDEOS = [
  { id: 1, src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774059798/caas_alhb8h.mp4", label: "Gestión Pro" },
  { id: 2, src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774538319/C7A74127-E32C-474F-BBDA-0553562537B2_1_n0oomr.mp4", label: "Impacto Circular" },
  { id: 3, src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774114482/caas.3_xzljfh.mp4", label: "Operativa Beland" },
  { id: 4, src: "https://res.cloudinary.com/djp2qzp9f/video/upload/v1774540176/IMG_0126_1_1_vqnwza.mp4", label: "Comunidad" },
];

const CaasCarousel = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full relative group">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {CAAS_VIDEOS.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="aspect-video bg-black relative">
              <video
                src={video.src}
                className="w-full h-full object-contain"
                controls
                playsInline
                
                loop
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flechas de navegación unificadas */}
      <div className="flex justify-end gap-2 mt-6">
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center hover:bg-[#769C48] hover:text-white transition-all text-slate-900 border border-slate-100 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

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
      id="CaaSPackages"
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
                  className="w-full text-sm font-bold py-5 rounded-lg bg-[#769C48] text-white hover:bg-[#65853d]"
                >
                  {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* --- SECCIÓN DE VIDEOS UNIFICADA CON CAROUSEL --- */}
        <div className="max-w-5xl mx-auto mt-24 space-y-10">
          <div className="border-l-4 border-[#769C48] pl-6">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Beland en Acción</h3>
            <p className="text-slate-500 text-lg">Visualiza el impacto real de tu suscripción.</p>
          </div>
          
          <CaasCarousel />
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
              className="w-full p-3 border rounded-xl mb-2 bg-white text-slate-900"
              placeholder="Tu Nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />

            <div className="phone-input-container mb-2">
                <PhoneInput
                placeholder="WhatsApp"
                defaultCountry="EC"
                value={formData.tel}
                onChange={(value) =>
                    setFormData({ ...formData, tel: value || "" })
                }
                className="w-full p-3 border rounded-xl bg-white"
                />
            </div>

            <input
              className="w-full p-3 border rounded-xl mt-2 bg-white text-slate-900"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Button
              onClick={sendToWhatsApp}
              className="w-full mt-4 bg-green-500 text-white font-bold py-4 hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2" /> Enviar
            </Button>

            {showConfirmation && (
              <p className="text-center text-green-500 mt-2 font-bold animate-pulse">¡Enviado!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}