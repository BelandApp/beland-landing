import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/types";
import { ArrowRight, BookOpen } from "lucide-react";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-secondary flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
      </Link>
      <CardHeader>
        <CardTitle className="leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="pt-2">{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{post.date}</span>
        <Link href={`/blog/${post.slug}`} className="flex items-center text-primary font-semibold hover:underline">
          Leer más <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
