"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu dirección de correo electrónico.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("La respuesta de la red no fue exitosa");
      }

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por unirte a nuestro boletín.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error en la suscripción",
        description: "Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="space-y-4">
            <Logo />
            <p className="text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-200">
  Una persona que recicla hace una gran diferencia en el mundo, <span className="text-emerald-600 dark:text-emerald-400">hacerlo juntos lo cambia todo.</span>
</p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 dark:text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Sobre Nosotros</Link></li>
              <li><Link href="/caas-packages" className="text-muted-foreground hover:text-foreground">CaaS</Link></li>
              <li><Link href="/conexion" className="text-muted-foreground hover:text-foreground">Conexion</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
<div className="space-y-6">
  <div>
    <h4 className="font-semibold mb-3 text-slate-800 dark:text-white">Contáctanos</h4>
    <a 
      href="https://wa.me/593995269974?text=Hola%2C%20vi%20su%20landing%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-110 active:scale-95"
    >
      <img 
        src="/screenshots/whatsapp.png" 
        alt="Contactar a Diego por WhatsApp" 
        className="w-11 h-11 object-contain" 
      />
    </a>
  </div>

            <div>
              <h4 className="font-semibold mb-3 text-slate-800 dark:text-white">Síguenos en nuestras redes</h4>
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com/beland.ec" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="/screenshots/instagram.png" alt="Instagram" className="h-8 w-8"/>
                </a>
                <a href="https://linkedin.com/company/beland" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="/screenshots/linkedin.png" alt="LinkedIn" className="h-8 w-8"/>
                </a>
                <a href="https://diegoe-vargasavila.medium.com/?source=post_page---byline--fe2d9a664273---------------------------------------" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="/screenshots/medium.jpg" alt="Medium" className="h-10 w-12"/>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 dark:text-white">Únete a nuestro boletín</h4>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-1" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                {isLoading ? 'Enviando...' : 'Suscribirse'}
              </Button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Beland. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}