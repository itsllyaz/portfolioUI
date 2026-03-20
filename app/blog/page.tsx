import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ArticleCard } from '@/components/ArticleCard'
import { blogPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'ELIYAS | Blog',
  description: 'Thoughts on systems architecture, high-performance computing, and the occasional deep dive into the Rust ecosystem.',
}

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-screen-xl mx-auto p-6 md:p-12">
          {/* Page Header / Intro */}
          <div className="mb-16 border-b border-black pb-8">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">BLOG</h1>
            <p className="font-body text-zinc-700 max-w-2xl leading-relaxed">
              Thoughts on systems architecture, high-performance computing, and the occasional deep dive into the Rust ecosystem. Curated for clarity and technical depth.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <ArticleCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                imageAlt={post.imageAlt}
                tags={post.tags}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-24 border border-black p-8 md:p-12 bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-headline text-3xl font-bold tracking-tight mb-2">STAY UPDATED</h3>
              <p className="font-body text-zinc-400 text-sm">Monthly insights on engineering and product design.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                className="bg-transparent border border-zinc-700 px-4 py-3 font-headline text-sm tracking-widest w-full md:w-64 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                placeholder="EMAIL ADDRESS"
                type="email"
              />
              <button className="bg-white text-zinc-900 px-6 py-3 font-headline font-bold text-sm tracking-widest hover:bg-zinc-200 transition-colors uppercase">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
