import Link from "next/link";
import { BlogPreview } from "@/components/home/blog-preview";
import { Search, BookOpen, MapPin, FileText } from "lucide-react";

export default function RecursosPage() {
  const categories = [
    { id: "blog", label: "Blog", icon: BookOpen, href: "/blog" },
    {
      id: "circularity",
      label: "Circularidad",
      icon: FileText,
      href: "/circularity",
    },
    {
      id: "territories",
      label: "Territorios",
      icon: MapPin,
      href: "/territories",
    },
  ];

  return (
    <div className="container py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Recursos</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Materiales, guías y casos prácticos agrupados para que encuentres lo
          más útil de forma rápida y estética.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.id}
              href={c.href}
              className="rounded-xl border p-6 hover:shadow-lg transition bg-white dark:bg-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{c.label}</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  {c.id === "blog" && "Artículos, guías y novedades."}
                  {c.id === "circularity" && "Casos prácticos y metodologías."}
                  {c.id === "territories" &&
                    "Proyectos por región y contactos."}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-sm text-muted-foreground">
                  Explorar →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Últimos artículos</h2>
        <div className="bg-white dark:bg-card p-6 rounded-2xl border-2 border-primary/10">
          <BlogPreview />
        </div>
      </section>
    </div>
  );
}
