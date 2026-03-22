"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { PostCard } from "@/components/blog/post-card";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-background transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Desde Nuestro <span className="text-primary">Blog</span>
            </h2>
            <p className="text-muted-foreground">
              Ideas, historias y noticias del frente de la revolución circular.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/blog">
              Ver todos los artículos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-12 md:hidden">
          <Button asChild variant="outline">
            <Link href="/blog">
              Ver todos los artículos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
