'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/90 border-b border-black/10 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-7xl mx-auto">
        {/* Left Side: Socials */}
        <div className="flex items-center gap-4 text-[#2d3435]">
          <a
            href="https://github.com/itsllyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary  border-primary/30 pb-0.5"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/eliyas-bashaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary border-primary/30 pb-0.5"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/llyas__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary  border-primary/30 pb-0.5"
          >
            Twitter
          </a>
          <a
            href="https://t.me/devchronicles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary  border-primary/30 pb-0.5"
          >
            Telegram
          </a>
        </div>

        {/* Right Side: Blog Link */}
        <div className="flex items-center">
          <Link
            href="/blog"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all duration-300 text-primary border-b border-primary/30 pb-0.5"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function MYHOME(){
	return(
		<a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary border-b border-primary/30 pb-0.5"
          >
            Home
          </a>
	)
}
