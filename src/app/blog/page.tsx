"use client";

import { useState } from "react";
import { PostCard } from "@/components/blog/post-card";
import { Pagination } from "@/components/blog/pagination";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles } from "lucide-react";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const currentPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="text-sm px-5 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Conocimiento Circular
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold animate-slide-up">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Nuestro
              </span>
              <br />
              <span className="text-foreground">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-100">
              Ideas, historias y actualizaciones sobre sostenibilidad y economía
              circular
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-primary/5 to-white dark:from-background dark:via-primary/10 dark:to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentPosts.map((post, index) => (
              <div
                key={post.slug}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-16 animate-fade-in">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-extrabold">
              ¿Quieres estar al día con la{" "}
              <span className="text-primary">economía circular</span>?
            </h2>
            <p className="text-muted-foreground">
              Suscríbete para recibir las últimas novedades, casos de éxito e
              insights del mundo sostenible
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
