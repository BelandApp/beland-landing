"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Logo } from "@/components/ui/logo";

const routes = [
  { href: "/", label: "Home" },
  { href: "/caas-packages", label: "CaaS" }, 
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
        const headerHeight = 80; 
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b-[0.5px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     
<div className="container flex h-14 md:h-16 items-center justify-between overflow-visible">        
        <div className="flex items-center">
          <Logo />
          
          <nav className="ml-8 hidden md:flex items-center space-x-8 text-sm font-medium">
            {routes.map((route) => {
              const isActive = 
                (route.href === "/" && pathname === "/") || 
                (pathname === "/" && `/#${activeSection}` === route.href) ||
                (pathname === route.href) || 
                (route.href !== "/" && !route.href.startsWith("/#") && pathname.startsWith(route.href));

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={(e) => handleScroll(e, route.href)}
                  className={cn(
                    "relative py-2 transition-colors hover:text-primary text-sm",
                    isActive ? "text-primary font-bold" : "text-foreground/60"
                  )}
                >
                  {route.label}
                  {isActive && <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          
          
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 px-0">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-8 mt-10">
                  <Logo />
                  <nav className="flex flex-col space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={(e) => {
                          handleScroll(e, route.href);
                          setOpen(false); 
                        }}
                        className="text-lg font-semibold"
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