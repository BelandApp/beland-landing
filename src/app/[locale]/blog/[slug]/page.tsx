import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from 'next';
import { blogPosts } from "@/lib/data";
import { Calendar, User } from "lucide-react";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post No Encontrado',
      description: 'Este artículo no existe.',
    };
  }

  const imageUrls = post.imageUrl ? [post.imageUrl] : [];

  return {
    title: `${post.title} | Beland Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `/blog/${post.slug}`,
      images: imageUrls,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const isImagePriority = !post.videoUrl && !!post.imageUrl;

  return (
    <article className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>
        
        {post.videoUrl && (
          <div className="mb-8 md:mb-12 aspect-[4/5] sm:aspect-video overflow-hidden rounded-2xl">
            <video controls preload="auto" className="w-full h-full object-cover object-top" style={{width: '100%', borderRadius: '15px'}} poster={post.videoPosterUrl}>
              <source src={post.videoUrl} type='video/mp4' />
              Tu navegador no soporta el tag de video.
            </video>
          </div>
        )}

        {!post.videoUrl && post.imageUrl && (
          <div className="relative w-full h-64 md:h-96 mb-8 md:mb-12 rounded-lg overflow-hidden">
            <Image 
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority={isImagePriority}
            />
          </div>
        )}

        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}