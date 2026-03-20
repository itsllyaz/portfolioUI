export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-black/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-on-surface-variant">
            Built with and lots of coffee
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-widest uppercase">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d3435] hover:text-primary transition-opacity"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d3435] hover:text-primary transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d3435] hover:text-primary transition-opacity"
          >
            Twitter
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d3435] hover:text-primary transition-opacity"
          >
            Telegram
          </a>
          <a href="/blog" className="underline hover:text-primary transition-opacity text-primary font-black">
            Blog
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pb-12 text-center md:text-left">
        <p className="text-[10px] text-outline opacity-50 uppercase tracking-[0.2em]">© 2024 — ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}
