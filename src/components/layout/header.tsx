"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "../theme-toggle";
import { Logo } from "@/components/ui/logo";

const routes = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#impacto", label: "Impacto" },
  { href: "/#conexion", label: "Conexión" },
  { href: "/recursos", label: "Recursos" },
  { href: "/about", label: "Nosotros" },
];

export function Header() {
  const pathname = usePathname();
  const activeSection = useScrollSpy(
    routes
      .map((route) => route.href)
      .filter((href) => href.startsWith("/#"))
      .map((href) => href.substring(2)),
    { rootMargin: "-100px 0px 0px 0px" }
  );

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const sectionId = href.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 60; // MODIFICADO: Ajustado a la nueva altura
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    // MODIFICADO: border-b-[0.5px] para que la línea sea más delgada
    <header className="fixed top-0 z-50 w-full border-b-[0.5px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* MODIFICADO: h-12 en móvil y h-16 en desktop para una barra más delgada */}
      <div className="container flex h-12 md:h-16 items-center">
        <div className="hidden items-center md:flex">
          <Logo />

          <nav className="ml-10 flex items-center space-x-8 text-sm font-medium">
            {routes.map((route) => {
              const isHomePageSectionActive =
                pathname === "/" && `/#${activeSection}` === route.href;
              const isOtherPageActive =
                route.href.length > 1 && pathname.startsWith(route.href);
              const isActive = isHomePageSectionActive || isOtherPageActive;

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={(e) => handleScroll(e, route.href)}
                  className={cn(
                    "relative py-2 transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-foreground/60"
                  )}
                >
                  {route.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-primary"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logo visible en móvil también (opcional, para que no quede vacío el centro) */}
        <div className="flex md:hidden mr-2">
           <Logo />
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                {/* MODIFICADO: Reduje el tamaño del botón de menú para mobile */}
                <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Logo />
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={(e) => handleScroll(e, route.href)}
                        className={cn(
                          "transition-colors hover:text-primary",
                          (pathname === "/" &&
                            `/#${activeSection}` === route.href) ||
                            (route.href.length > 1 &&
                              pathname.startsWith(route.href))
                            ? "text-primary"
                            : "text-foreground/60"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="flex items-center gap-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}