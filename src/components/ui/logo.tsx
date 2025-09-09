import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Leaf className="h-7 w-7 text-green-600" />
      <span className="text-2xl font-bold text-foreground tracking-tight">
        Beland
      </span>
    </Link>
  );
}
