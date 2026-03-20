export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  tags: string[]
  image: string
  imageAlt: string
  comments?: Comment[]
}

export interface Comment {
  id: string
  author: string
  avatar: string
  date: string
  content: string
  replies?: Comment[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'memory-safety-rust',
    title: 'Memory Safety Beyond the Basics: Advanced Ownership Patterns',
    excerpt:
      'Exploring the intricacies of Pin, Unpin, and manual memory management in high-concurrency Rust environments. Why ownership isn\'t just about borrowing.',
    content: `
      <section class="space-y-8">
        <p class="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          Modern web development often prioritizes standardization over soul. In the pursuit of efficiency, we've flattened the digital landscape. This article explores how to reintroduce intentional friction and aesthetic depth into scalable frontend architectures without sacrificing maintainability.
        </p>
        <p>
          The core philosophy lies in treating UI components as editorial elements rather than mere data containers. By leveraging CSS Grid for asymmetric layouts and utilizing tonal layering instead of harsh borders, we create a sensory experience that guides the user through complex information flows.
        </p>
        <blockquote class="border-l-4 border-black pl-8 py-4 my-12 italic text-2xl font-light">
          "Precision is not just about the absence of error, but the presence of intent."
        </blockquote>
        <p>
          When we look at the 'The Digital Curator' design system, we see a move away from the 'templated' look. Instead of a rigid, boxed-in grid, we utilize intentional asymmetry and tonal layering to create a sense of depth and curated precision.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div class="bg-surface-container-low p-6 border border-black/10">
            <h3 class="font-bold mb-4 uppercase text-sm tracking-widest">01. Tonal Dividers</h3>
            <p class="text-base text-on-surface-variant">Eliminate 1px lines. Use shifts in background value to define scope and boundary.</p>
          </div>
          <div class="bg-surface-container-low p-6 border border-black/10">
            <h3 class="font-bold mb-4 uppercase text-sm tracking-widest">02. Micro-Transitions</h3>
            <p class="text-base text-on-surface-variant">Every interaction should feel tactile. 300ms bezier curves provide a premium, weighted feel.</p>
          </div>
        </div>
        <p>
          In conclusion, architecting for the modern web requires a balance between the utilitarian needs of the developer and the aesthetic expectations of a discerning audience. The future is asymmetric.
        </p>
      </section>
    `,
    author: 'ELIYAS',
    date: 'October 24, 2024',
    readTime: 8,
    tags: ['Rust', 'Memory'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkB8lt_SpBzj4gE2XpG1zIPhVEZyKMTvfW2ZkkpBDm-SvMfzaxlGQcwugiqwY96T-HiwosviadqMfpGlExPqPwO4L56jyEOTjhsAKoolodhJPjrYEExGJabRpscAWZ92sL8Gt03a1YQvvxiIXQu2EVhn48TDj5FiK5NPaD6vHiFvYw25a2ABwSjEaeh4LO4AOmsqyyiWGDKiHxpzgwpT4O2QCG_vTGahahmuNMBLVbnUhtmuZ0f3YlX3PMW4LMNcqE4aPPptItK-0',
    imageAlt: 'Abstract geometric dark blue and purple code visualization',
    comments: [
      {
        id: '1',
        author: 'marcus_dev',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Imehfo3sQJYle16sHhmFf9CeWWOOfjNGJPTcF2EtNjFlMLyk4E9jLWF5DpTlt5w2-zMDcMRCdioVr4WWzjpzyUXXkBQkYpHTXLU9_iWzVGwlfWB4Ce85uZbTLJtstyFyL9byPb4FhT1V1sKPM4CjItvqcsWv57bQPFhFPPE2u4pzAAXC71tmuPb-i2G-X5qNP9QCTwoXFh0mLeq-RgUzeDAizScusFbdicGGnG2kwq1N5Qe0vBjAC-XcZsgmChcn0dE0SYdF6Ag',
        date: '2 hours ago',
        content:
          'The focus on intentional asymmetry is refreshing. Most frameworks force you into such rigid patterns that the final product loses its personality. Great write-up.',
      },
    ],
  },
  {
    id: '2',
    slug: 'supabase-realtime-architecture',
    title: 'Scaling Real-time Architectures with Supabase Broadcast',
    excerpt:
      'A deep dive into building globally distributed real-time engines using Postgres WAL and Supabase\'s Realtime infrastructure.',
    content: `
      <section class="space-y-8">
        <p>Real-time applications are no longer a luxury—they're an expectation. Users demand instant feedback, collaborative features, and live data synchronization across distributed systems.</p>
        <p>Supabase Broadcast, built on top of PostgreSQL's Write-Ahead Logging (WAL), provides a powerful primitive for implementing real-time features at scale. This article explores the architecture, patterns, and pitfalls of building distributed real-time systems.</p>
        <p>The journey from a simple server-sent events (SSE) implementation to a globally distributed real-time engine requires careful consideration of network topology, consistency guarantees, and failure modes.</p>
      </section>
    `,
    author: 'ELIYAS',
    date: 'September 12, 2024',
    readTime: 12,
    tags: ['Supabase', 'Postgres'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2SJAzeTj2vGuPXH8AXmDT0uCdhCjzsAwKdY9XRGV1oxFMAVF16sUc-3TqAVWXiNaMJi3cmchZBT9SswWxyIFTreMFyLdYedhsuqNiDae4yvSeTdIK_7GEHeGyZO0nunUkm9ILMBcN_fPTfvkskootuyyt7yLNk-l2AvnLUVBjdo0K5eJHtYi7RDM9SCYzJ9L3jO-nENIbU5MznJ503LL8EU73LVeMht9FOl0TNkI3CzP_ZH1hOuuD3IZgSo_IAsYRH90Iu7wCtKc',
    imageAlt: '3D abstract representation of connected database nodes',
  },
  {
    id: '3',
    slug: 'webassembly-browser',
    title: 'The WebAssembly Frontier: Bringing C++ Speed to the Browser',
    excerpt:
      'Leveraging Emscripten and WASM to port legacy video processing tools to modern web browsers without sacrificing 60fps performance.',
    content: `
      <section class="space-y-8">
        <p>WebAssembly has fundamentally changed what\'s possible in the browser. By running compiled code at near-native speeds, we can now bring computationally intensive applications to the web.</p>
        <p>This article explores the tools and techniques for porting legacy C++ applications to WebAssembly, focusing on video processing, real-time data analysis, and graphics-intensive applications.</p>
      </section>
    `,
    author: 'ELIYAS',
    date: 'August 5, 2024',
    readTime: 15,
    tags: ['Wasm', 'Frontend'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEEXRUyB3-nrhckrU1BWdHy0fWJ35YocdtQLcpy08s8jBZ8ZNaEnt1njD7MoNNqvXUjaSNDm96alCYVaIJxAizTld5N6mcEgzjNFPKSCM4YF_nv2885XqKHOhQyvDjvp2S7pZqymnrtjH2Ep41dd2-1Wvle7Lg1pdOR_IGCDNaa5DiwBrydEmcqBmpUK4iAnVjrpCCw6sdUdlqt49TBQ0WTntqBlwFl_NHpjqPgvRNtv1CQQHVbCk7K0NluUvzzAIbbT-JVaqxkdY',
    imageAlt: 'Minimalist monochromatic code editor screen with syntax highlighting',
  },
]
