'use client'

import { useState } from 'react'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Synthetix Core',
    description:
      'A distributed state management system built for high-concurrency enterprise applications. Optimized for sub-50ms latency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYk1yQvlUHR1f-7y6etNVFCamj0UbRoMdnvzxgBEIKvnI18jX7NG_yp2yu1fFF0zj9LOeIZldl8yLVLF04BCUlFHCkBTXI8zpnvSJHoFanW8cXkZs_l6xTh_q7vlWXxmBmVAfJ6rzfe5aPcTY5bly219b8fgTW5Q1DvhyYEaxLSZER09HYepvj5QhZTi6oCMS66PtpcjP_0vyZ5fIAZBOAe4UKfF2_je09CeK6a_8hI3EeMlDm_8l7rci_xewnmLKc0cpt0MknDI8',
    imageAlt: 'Digital interface showing a dashboard with dark mode UI',
    tags: ['NextJS', 'Supabase', 'Rust'],
    category: 'React',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'Flux Analytics',
    description:
      'Real-time traffic monitoring and behavioral analysis platform with predictive modeling using Python and Scikit-learn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhI_GoRC44r8IcfLWn0q46yyM5jHSzbup0u1afR8omoGBYkYh6RhVxjj2h5t8Xe6HI73c2RtPKeY1aU3UOmV-3wstdpxAPNOp9lLW5qP6oA1zBJf_5bbxsa1uSQi7UVOg3AyvvfQFn7or6lHNn7CbdpaPoCmv1ysCHQumglMDXEiBdEuSSztKfz4wBLZi5PciKaLVPxq8YWmPuqP70Ta-2jYvUZqSgNU-kKDPbDUQ2ZgleunQzw3WAUIH3nEMauxaaNirHIO0TTg',
    imageAlt: 'Data analysis visualization on a tablet screen',
    tags: ['Python', 'Tailwind', 'D3JS'],
    category: 'Python',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'CloudSync',
    description: 'Distributed file synchronization system with end-to-end encryption and real-time collaboration features.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdMki7vEazRJhZGXphDhqenen4k8xZYbDmLZXXyKmJPu06tYyFmDp9z740g9m9clgQ5te-D3H7xtR0hlPJBzb6BRzpQpdHm87P5PJND4oP9LVes8-ziVI_SZNXXHr2EdBt5OgMQJ8ZSkhRaHseoAA1q9h-NUiAUqLZbGUJp3qqjErJ-PQkQihiqGoiwOnBEEXO2CIEpjq699f0rNvZXTxD_9Ak-C3TfG0LZhaRcQ9-4L90F8pPQzEGvWWwA-1OanmdR1XPV80WuKo',
    imageAlt: 'Cloud infrastructure visualization',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'Node.js',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 4,
    title: 'DesignVault',
    description: 'Component library and design system documentation platform with live code previews and accessibility audits.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkB8lt_SpBzj4gE2XpG1zIPhVEZyKMTvfW2ZkkpBDm-SvMfzaxlGQcwugiqwY96T-HiwosviadqMfpGlExPqPwO4L56jyEOTjhsAKoolodhJPjrYEExGJabRpscAWZ92sL8Gt03a1YQvvxiIXQu2EVhn48TDj5FiK5NPaD6vHiFvYw25a2ABwSjEaeh4LO4AOmsqyyiWGDKiHxpzgwpT4O2QCG_vTGahahmuNMBLVbnUhtmuZ0f3YlX3PMW4LMNcqE4aPPptItK-0',
    imageAlt: 'Design system component showcase',
    tags: ['React', 'Tailwind', 'Storybook'],
    category: 'React',
    githubLink: '#',
    liveLink: '#',
  },
]

const categories = ['All', 'React', 'Python', 'Tailwind', 'Node.js']

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-32 border-y border-black/5 bg-background" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-headline font-bold tracking-tight text-on-background mb-4">Projects</h2>
            <p className="text-on-surface-variant max-w-md">A curated selection of technical challenges and digital solutions.</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border border-black text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
