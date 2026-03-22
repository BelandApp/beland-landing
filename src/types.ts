export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl?: string; // This might become redundant, but we'll keep it for now
  videoUrl?: string; // Add optional video URL
  videoPosterUrl?: string; // Add optional video poster URL
  content: string;
}
