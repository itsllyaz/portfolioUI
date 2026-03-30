import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Comment } from '@/components/Comment'
import { blogPosts } from '@/lib/blog-data'
/*
functions:
		generateStaticParams --> a function that will get blog slug... 

*/
interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const mainComment = post.comments?.[0]
  const authorReply = mainComment?.replies?.[0]

  return (
    <>
      <Navigation />

      <main className="flex-grow pt-12 pb-16 px-6 max-w-7xl mx-auto">
        <article className="bg-surface-container-lowest border border-black overflow-hidden shadow-none">
          {/* Hero Banner */}
          <div className="w-full h-[300px] md:h-[400px] bg-surface-container-high relative">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="w-full h-full object-cover grayscale contrast-125"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>

          {/* Content Container */}
          <div className="p-8 md:p-16">
            {/* Header Info */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4 text-xs font-body font-medium uppercase tracking-tighter text-on-surface-variant">
                <span>Development</span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span>{post.readTime} Min Read</span>
              </div>

              <h1 className="text-3xl md:text-6xl font-headline font-bold tracking-tight text-on-surface mb-6 leading-[1.1]">
                {post.title}
              </h1>

              <div className="text-on-surface-variant font-headline font-medium text-sm">
                PUBLISHED ON {post.date.toUpperCase()} BY {post.author.toUpperCase()}
              </div>
            </header>

            {/* Article Body */}
            <section className="max-w-3xl font-headline text-lg md:text-xl leading-relaxed space-y-8 text-on-surface">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </section>

            {/* Tags */}
            <footer className="mt-16 pt-8 border-t border-black/10 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-surface-container-high rounded-full text-xs font-body font-medium uppercase tracking-tighter text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </footer>
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-12 bg-surface-container-lowest border border-black p-8 md:p-16">
          <h2 className="text-2xl font-headline font-bold tracking-tight mb-8">
            Discussion {post.comments && post.comments.length > 0 ? `(${post.comments.length})` : '(0)'}
          </h2>

          {/* Auth CTA */}
          <div className="mb-12 p-8 bg-surface-container-low border border-dashed border-black/20 text-center">
            <p className="mb-6 font-body text-sm text-on-surface-variant">
              Join the conversation. Share your thoughts on {post.title.toLowerCase()}.
            </p>
            <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-all font-headline text-sm font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined">{/* code*/}</span>
              Sign in with GitHub
            </button>
          </div>

          {/* Threaded Comments */}
          {post.comments && post.comments.length > 0 && (
            <div className="space-y-10">
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <Comment comment={comment} isAuthor={comment.author === post.author} />

                  {/* Nested replies */}
                  {comment.replies && (
                    <div className="space-y-10 mt-8">
                      {comment.replies.map((reply) => (
                        <Comment
                          key={reply.id}
                          comment={reply}
                          isAuthor={reply.author === post.author}
                          nested={true}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
