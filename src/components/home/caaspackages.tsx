"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Rocket, ArrowRight, X, MessageCircle, ChevronLeft, ChevronRight, Store } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

// ─── CONSTANTES ───────────────────────────────────────────────
const GREEN = "#769C48";
const GREEN_DARK = "#5a7a36";
const WA_GREEN = "#25D366";
const WA_GREEN_HOVER = "#20ba5a";

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
  { 
  id: 1, 
  src: "https://vimeo.com/1196083244",
  isVimeo: true,
  label: "Gestión Pro" 
},
{ 
  id: 2, 
  src: "https://vimeo.com/1196092807",
  isVimeo: true,
  label: "Gestión Pro" 
},
{ 
  id: 3, 
  src: "https://vimeo.com/1196094671",
  isVimeo: true,
  label: "Gestión Pro" 
},
{ 
  id: 4, 
  src: "https://vimeo.com/1196098680",
  isVimeo: true,
  label: "Gestión Pro" 
}
  
];

// ─── CAROUSEL ─────────────────────────────────────────────────
const CaasCarousel = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full relative group">
      <Swiper
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {CAAS_VIDEOS.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative overflow-hidden rounded-2xl flex items-center justify-center w-full aspect-video bg-transparent">
              {video.isVimeo ? (
                <iframe
                  src={`https://player.vimeo.com/video/${video.src.split('/').pop()}`}
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  allow="autoplay; fullscreen"
                />
              ) : (
                <video
                  src={video.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  loop
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
// ─── WHATSAPP ICON ────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── ESPACIO CIRCULAR ─────────────────────────────────────────
const EspacioCircular = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mensaje = encodeURIComponent(
    "¡Hola Beland! 👋 Quiero registrar mi local como Espacio Circular 🌱♻️"
  );
  const whatsappDiego = `https://wa.me/593995269974?text=${mensaje}`;

  const beneficios = [
    "🛍️ Tu local aparece en la app como punto de consumo y reciclaje",
    "🔁 Fidelización automática: incentivos para que vuelvan a comprarte",
    "📦 Ventas físicas + pedidos por app + delivery circular",
    "♻️ Beland instala los puntos de reciclaje y retira los residuos",
    "💸 Sin costo de entrada — sin inversión inicial",
  ];

  const modalBeneficios = [
    "Más ventas sin esfuerzo adicional",
    "Fidelización automática de clientes",
    "Nuevo canal de distribución (app + delivery)",
    "Diferenciación inmediata en tu comunidad",
    "Operación simple — nosotros nos encargamos",
  ];

  return (
    <>
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* COLUMNA IZQUIERDA */}
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4" style={{ color: GREEN }}>
                  <Store className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-sm">Para Comercios</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mt-2">
                  ¿Quieres ser un{" "}
                  <span className="text-orange-500">agente</span> <br />
                  de cambio en tu{" "}
                  <span style={{ color: GREEN }}>comunidad?</span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Regístrate como <strong>Espacio Circular</strong> y convierte tu
                local en un punto clave de una comunidad activa: vendes más,
                fidelizas clientes y participas en una red que convierte el
                reciclaje en consumo.
              </p>

              <img
                src="/screenshots/ESTO.png"
                alt="App Beland — pantallas de la aplicación"
                className="w-full rounded-2xl shadow-lg mb-10"
              />
              <p className="text-sm font-black uppercase italic tracking-widest text-center mb-10" style={{ color: "#769C48" }}>
  Lo que pasa cuando te sumas — en menos de 7 días:
</p>
              <ul className="space-y-4 mb-10">
                {beneficios.map((item, i) => (
                  <li key={i} className="text-slate-700 font-bold flex items-start gap-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="w-full md:w-1/2">
              <div
                className="bg-white rounded-[2.5rem] shadow-xl p-8"
                style={{ borderTop: `8px solid ${GREEN}` }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: GREEN }}>
                  Cómo funciona — 4 pasos
                </p>
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-white font-black text-sm w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: GREEN }}>01</span>
                    <div>
                      <p className="font-black uppercase italic text-slate-900 tracking-tight">Separación</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">El vecino separa en su casa y lleva sus residuos al punto circular más cercano.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-orange-500 text-white font-black text-sm w-10 h-10 rounded-xl flex items-center justify-center shrink-0">02</span>
                    <div>
                      <p className="font-black uppercase italic text-slate-900 tracking-tight">Incentivo</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Cada acción es recompensada con créditos de consumo que los vecinos gastan en tu local.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-black text-sm w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: GREEN }}>03</span>
                    <div>
                      <p className="font-black uppercase italic text-slate-900 tracking-tight">Disposición</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Beland aporta los tachos y los derechos de uso de la app para gestionar ventas, pagos y envíos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-orange-500 text-white font-black text-sm w-10 h-10 rounded-xl flex items-center justify-center shrink-0">04</span>
                    <div>
                      <p className="font-black uppercase italic text-slate-900 tracking-tight">Recolección</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Beland gestiona una ruta de recolección y gestion de residuos,los recicladores locales se llevan los residuos inorganicos y EMASEO se lleva el resto del residuo.</p>
                    </div>
                  </li>
                </ol>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Sin costo de entrada · Sin inversión inicial</p>
                  <p className="text-xs font-bold mt-1" style={{ color: GREEN }}>Beland gana cuando tú vendes</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA al final */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 text-white font-black uppercase italic tracking-wider rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-3 justify-center"
            >
              Regístrate como Espacio Circular
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL ESPACIO CIRCULAR */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
          <div className="relative bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 p-2 rounded-full text-slate-800 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 text-white" style={{ background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DARK})` }}>
              <span className="text-xs font-black uppercase tracking-widest opacity-70">Para Comercios</span>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-tight mt-2">
                Espacio Circular <br />
                <span className="text-orange-300">by Beland</span>
              </h3>
            </div>

            <div className="p-8 flex flex-col items-center text-center">
              <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                Convierte tu local en un punto de consumo, comunidad y crecimiento.
                Sin costo de entrada, sin inversión inicial.
              </p>

              <ul className="text-left space-y-3 mb-8 w-full">
                {modalBeneficios.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: GREEN }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappDiego}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg w-full justify-center"
                style={{ backgroundColor: WA_GREEN }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = WA_GREEN_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = WA_GREEN)}
              >
                <WhatsAppIcon />
                Contactanos por WhatsApp
              </a>

              <p className="text-xs text-slate-400 mt-4">
                Diego E. Vargas · Founder & CEO · Beland
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────
export default function CaaSPackages() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({ nombre: "", org: "", tel: "", email: "" });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    const message =
      `*HOLA, TIENES UNA NUEVA SOLICITUD DE SERVICIO - BELAND*\n` +
      `*Plan elegido:* ${selectedPlan}\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Empresa:* ${formData.org || "No especificada"}\n` +
      `*WhatsApp:* ${formData.tel}\n` +
      `*Email:* ${formData.email}`;

    window.open(`https://wa.me/593995269974?text=${encodeURIComponent(message)}`, "_blank");
    setShowConfirmation(true);
    setFormData({ nombre: "", org: "", tel: "", email: "" });
    setTimeout(() => { setIsOpen(false); setShowConfirmation(false); }, 3000);
  };

  return (
    <>
      {/* ── SECCIÓN PAQUETES ── */}
      <section
        ref={ref}
        id="CaaSPackages"
        className={`py-16 relative transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

        <div className="container relative z-10 px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Badge className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20" variant="outline">
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
                    ? "border-2 border-primary shadow-md md:scale-105 z-20 bg-card"
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
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${pkg.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                    <pkg.icon size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                  {pkg.subtitle && <p className="text-xs text-primary font-medium uppercase tracking-wider">{pkg.subtitle}</p>}
                  <div className="mt-2 text-3xl font-black text-foreground">{pkg.price}</div>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.description}</p>
                </CardHeader>
                <CardContent className="flex-grow px-5">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
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

          {/* Videos */}
          <div className="max-w-5xl mx-auto mt-24 space-y-10">
            <div className="border-l-4 border-[#769C48] pl-6">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">Beland en Acción</h3>
              <p className="text-muted-foreground text-lg">Visualiza el impacto real de tu suscripción.</p>
            </div>
            <CaasCarousel />
          </div>
        </div>
      </section>

      {/* ── ESPACIO CIRCULAR ── */}
      <EspacioCircular />

      {/* ── MODAL PAQUETES ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 overflow-y-auto">
          <div className="bg-background border p-6 md:p-8 rounded-[2.5rem] shadow-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-300 my-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
            >
              <X size={24} />
            </button>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Plan {selectedPlan}</h3>
                <p className="text-sm text-muted-foreground mt-1">Completa tus datos para empezar el cambio.</p>
              </div>

              <div className="space-y-3">
                <input
                  className="w-full p-4 border rounded-2xl bg-muted/50 text-foreground outline-none focus:ring-2 ring-primary/50 transition-all"
                  placeholder="Tu Nombre Completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
                <input
                  className="w-full p-4 border rounded-2xl bg-muted/50 text-foreground outline-none focus:ring-2 ring-primary/50 transition-all"
                  placeholder="Empresa / Organización"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                />
                <div className="phone-input-container">
                  <PhoneInput
                    placeholder="Número de WhatsApp"
                    defaultCountry="EC"
                    value={formData.tel}
                    onChange={(value) => setFormData({ ...formData, tel: value || "" })}
                    className="w-full p-4 border rounded-2xl bg-muted/50 text-foreground"
                  />
                </div>
                <input
                  className="w-full p-4 border rounded-2xl bg-muted/50 text-foreground outline-none focus:ring-2 ring-primary/50 transition-all"
                  placeholder="Correo electrónico"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <Button
                onClick={sendToWhatsApp}
                disabled={!isFormValid}
                className={`w-full py-7 text-lg font-bold rounded-2xl transition-all ${
                  isFormValid ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20" : "bg-muted text-muted-foreground"
                }`}
              >
                <MessageCircle className="mr-2" /> Enviar por WhatsApp
              </Button>

              {showConfirmation && (
                <div className="text-center p-4 bg-green-500/10 rounded-2xl animate-pulse">
                  <p className="text-green-600 font-bold">¡Solicitud enviada con éxito!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}