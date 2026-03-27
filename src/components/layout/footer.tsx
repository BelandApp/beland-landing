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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Error en la suscripción");

      toast({ title: "¡Suscripción exitosa!", description: "Gracias por unirte a nuestro boletín." });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="space-y-4">
            <Logo className="h-12 w-auto" />
            <p className="text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-200">
              Una persona que recicla hace una gran diferencia en el mundo, <span className="text-emerald-600 dark:text-emerald-400">hacerlo juntos lo cambia todo.</span>
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-emerald-600 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/caas-packages" className="text-muted-foreground hover:text-emerald-600 transition-colors">CaaS</Link></li>
              <li><Link href="/conexion" className="text-muted-foreground hover:text-emerald-600 transition-colors">Conexión</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-emerald-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold mb-4 text-slate-800 dark:text-white uppercase tracking-wider text-sm">Contáctanos</h4>
              <a 
                href="https://wa.me/593995269974?text=Hola%2C%20vi%20su%20landing%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-110 active:scale-95"
              >
                <img src="/screenshots/whatsapp.png" alt="WhatsApp Diego" className="w-12 h-12 object-contain" />
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-slate-800 dark:text-white uppercase tracking-wider text-sm">Síguenos</h4>
              <div className="flex items-center space-x-5">
                <a href="https://instagram.com/beland.ec" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/screenshots/instagram.png" alt="Instagram" className="h-8 w-8 object-contain"/>
                </a>
                <a href="https://linkedin.com/company/beland" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/screenshots/linkedin.png" alt="LinkedIn" className="h-8 w-8 object-contain"/>
                </a>
                <a href="https://diegoe-vargasavila.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/screenshots/medium.jpg" alt="Medium" className="h-9 w-9 object-contain rounded-full border border-slate-100 dark:border-slate-800"/>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-sm">Boletín</h4>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all">
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                {isLoading ? 'Enviando...' : 'Suscribirse'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Beland. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}