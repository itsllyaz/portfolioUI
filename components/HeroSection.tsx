import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="space-y-8 lg:col-span-10">
          {/* WakaTime Visualization Component */}
          <div className="bg-surface-container-low p-6 rounded-xl overflow-hidden mb-12 border border-black/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
                CODING_ACTIVITY // 7_DAYS
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Live Sync
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] text-on-background">
            Hi, I&apos;m ELIYAS, I engineer solutions with code
          </h1>

          {/* Description */}
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
            Specializing in building scalable distributed systems and high-performance web architectures. I bridge the
            gap between complex engineering requirements and elegant user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-none font-medium flex items-center gap-2 hover:bg-primary-dim transition-all duration-300 border border-black/10">
              Get in Touch
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border border-black text-primary px-8 py-4 rounded-none font-medium hover:bg-surface-container-high transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
