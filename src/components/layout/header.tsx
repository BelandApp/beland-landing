"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "../theme-toggle";
import { Logo } from "@/components/ui/logo";

const routes = [
  { href: "/", label: "Home" },
  { href: "/#caas", label: "CaaS" },
  { href: "/conexion", label: "Conexión" },
  { href: "/about", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeSection = useScrollSpy(
    routes
      .map((route) => route.href)
      .filter((href) => href.startsWith("/#"))
      .map((href) => href.substring(2)),
    { rootMargin: "-100px 0px 0px 0px" }
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const sectionId = href.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 60; 
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b-[0.5px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        
        {/* LOGO: Desktop y Mobile */}
        <div className="flex items-center">
          <Logo />
          
          {/* NAVEGACIÓN DESKTOP */}
<nav className="ml-10 hidden md:flex items-center space-x-8 text-sm font-medium">
  {routes.map((route) => {
    const isActive = 
      (route.href === "/" && pathname === "/") || 
      (pathname === "/" && `/#${activeSection}` === route.href) ||
      (pathname === route.href) || // <--- AGREGA ESTA LÍNEA
      (route.href !== "/" && !route.href.startsWith("/#") && pathname.startsWith(route.href));

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
                  {isActive && <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ACCIONES DERECHA (Theme + Menú Mobile) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* MENÚ MOBILE */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-10">
                  <Logo />
                  <nav className="flex flex-col space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={(e) => handleScroll(e, route.href)}
                        className={cn(
                          "text-lg font-semibold transition-colors hover:text-primary",
                          (pathname === route.href || (pathname === "/" && `/#${activeSection}` === route.href))
                            ? "text-primary"
                            : "text-foreground/60"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
}