"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "../theme-toggle";

const routes = [
  { href: "#features", label: "Features" },
  { href: "#guinness-challenge", label: "Guinness Challenge" },
  { href: "#media-gallery", label: "Media" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "/circularity", label: "Circularity" },
  { href: "/territories", label: "Territories" },
];

export function Header() {
  const activeSection = useScrollSpy(
    routes.map((route) => route.href.substring(1)),
    { rootMargin: "-100px 0px 0px 0px" }
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Beland</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  route.href.substring(1) === activeSection ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">Beland</span>
                  </Link>
                  <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                      {routes.map((route) => (
                        <Link key={route.href} href={route.href} className="text-foreground/60 transition-colors hover:text-foreground">
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
            <Button asChild>
                <Link href="https://beland.app" target="_blank">Conectarse</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
