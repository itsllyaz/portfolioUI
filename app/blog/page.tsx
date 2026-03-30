import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ArticleCard } from '@/components/ArticleCard'
import { blogPosts } from '@/lib/blog-data'
import { MYHOME } from '@/components/Navigation'
export const metadata = {
  title: 'Blog',
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

         
        </div>
      </main>

      <Footer />
    </>
  )
}
