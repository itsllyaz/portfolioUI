import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="space-y-8 lg:col-span-10">
          {/* WakaTime Visualization Component */}
         
						
						<div className="max-w-xs rounded-lg bg-[#0f0f0f] shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5">
  <a href="https://wakatime.com/@llyas" target="_blank" rel="noopener noreferrer" className="block p-3 no-underline">
    {/* Header */}
    <div className="flex items-center gap-2 mb-2">
      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
      <span className="text-xs text-gray-400 font-mono">Coding Activity</span>
    </div>

    {/* Body */}
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-gray-500 tracking-wider font-mono">TOTAL TIME CODED</span>
      <img
        src="https://wakatime.com/badge/user/4963d682-0887-4341-9018-7481f8db2350.svg"
        alt="Total time coded since ever"
        className="w-48 opacity-90"
      />
    </div>
  </a>
</div>





					{/*waka end here*/}
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter leading-[0.9] text-on-background">
            Hi, I&apos;m ELIYAS, I engineer solutions with code
          </h1>

          {/* Description */}
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
          	I’ve always been fascinated by the unseen engines that keep systems running. That curiosity naturally drew me toward backend and system development, where I enjoy exploring how requests flow, how systems scale, and how performance can be fine‑tuned. What excites me most is the challenge of building reliable, resilient services that people can depend on. 
          </p>



          {/* CTA Buttons */}
   
					<div className="flex flex-wrap gap-4 pt-4">
						<a 
							href='https://drive.google.com/file/d/1uzEeO_keof00j3uySBZbIOEfz7o1VjS7/view'
							target='_blank'
							rel='noopener noreferrer'>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-medium flex items-center gap-2 hover:bg-primary-dim transition-all duration-300 border border-black/10">
              Download Resume
              
            </button> </a>
						<a 
							href='mailto:eliyasinbox1@gmail.com'
							target='_self'
							rel='noopener noreferrer'>
            <button className="border border-black text-primary px-8 py-4 rounded-lg font-medium hover:bg-surface-container-high transition-all duration-300">
              Get in Touch
            </button>   </a>
          </div>
        </div>
      </div>
    </section>
  )
}
