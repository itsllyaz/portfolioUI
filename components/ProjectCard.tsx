import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  githubLink?: string
  liveLink?: string
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="group bg-surface-container-lowest p-8 rounded-none border border-black/5 transition-all duration-500 hover:scale-[1.01] hover:border-black/20">
      <div className="aspect-video bg-surface-container overflow-hidden rounded-none mb-8 border border-black/5">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-headline font-bold">{title}</h3>
          <div className="flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="material-symbols-outlined text-outline hover:text-primary transition-colors"
              >
                code
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="material-symbols-outlined text-outline hover:text-primary transition-colors"
              >
                open_in_new
              </a>
            )}
          </div>
        </div>

        <p className="text-on-surface-variant leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-black/5 bg-surface-container-high text-[10px] font-bold text-on-surface-variant tracking-[0.15em] uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
