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
  const preloadLinks = [];

  // If there is a video poster, it's the LCP. Preload it.
  if (post.videoPosterUrl) {
    preloadLinks.push({
      rel: 'preload',
      href: post.videoPosterUrl,
      as: 'image',
    });
  }

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
    links: preloadLinks, // Add the preload link to the head
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

  // Determine if the main image should be prioritized (only if no video exists)
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
        
        {/* If it's a post with a video, render the video player */}
        {post.videoUrl && (
          <div className="mb-8 md:mb-12">
            <video controls style={{width: '100%', borderRadius: '15px'}} poster={post.videoPosterUrl}>
              <source src={post.videoUrl} type='video/mp4' />
              Tu navegador no soporta el tag de video.
            </video>
          </div>
        )}

        {/* If it's a post with only an image, render the Image with priority */}
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

        {/* Render the rest of the content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </div>
    </article>
  );
}
