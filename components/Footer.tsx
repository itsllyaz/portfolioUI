export function Footer() {
  return (
    <footer className="w-full  border-t border-black/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
				{/*<p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-on-surface-variant">
            Built with and lots of coffee
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-widest uppercase">
          <a
            href="https://github.com/itsllyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity" /*#2d3435*/
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/eliyas-bashaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/llyas__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity"
          >
            Twitter
          </a>
          <a
            href="https://t.me/devlogchronicles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity"
          >
            Telegram
          </a>
          <a href="/blog" className="underline hover:text-white transition-opacity text-white font-black">
            Blog
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pb-12 text-center md:text-left">
        <p className="text-[10px] text-white opacity-50 uppercase tracking-[0.2em] ">© 2025 — ALL RIGHTS IS NOT RESERVED</p>
      </div>
    </footer>
  )
}
