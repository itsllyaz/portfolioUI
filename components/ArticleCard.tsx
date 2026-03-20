import Link from 'next/link'
import Image from 'next/image'

interface ArticleCardProps {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  tags: string[]
  date: string
  readTime: number
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  tags,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <article className="flex flex-col border border-black p-4 bg-white/40 hover:bg-white/60 transition-all duration-300 group">
      <div className="aspect-square w-full bg-zinc-300 overflow-hidden border border-black mb-6">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="font-headline text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 border border-black">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link
          href={`/blog/${slug}`}
          className="font-headline text-2xl font-bold leading-tight mb-4 hover:underline decoration-1 underline-offset-4"
        >
          {title}
        </Link>

        {/* Excerpt */}
        <p className="font-body text-sm text-zinc-700 mb-6 line-clamp-3">{excerpt}</p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-black/10 flex justify-between items-center text-[10px] font-headline uppercase tracking-widest font-medium">
          <span>{date}</span>
          <span>{readTime} MIN READ</span>
        </div>
      </div>
    </article>
  )
}
