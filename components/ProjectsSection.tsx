'use client'

import { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { title } from 'process'
import { imageOptimizer } from 'next/dist/server/image-optimizer'

const projects = [
  {
    id: 1,
    title: 'F4F-Exchange | Full-Stack Developmens',
    description:
      'a “follow-for-follow” directory where users can log in with Twitter (X), see others, and follow/unfollow them',
    image: '/projects/f4f-exchange.jpg',
    imageAlt: 'F4F-Exchange full stack app',
    tags: ['NextJS', 'Typescript', 'Flask', 'Database', 'Frontend', 'Web Development'],
    category: 'TYPESCRIPT',
    githubLink: 'https://github.com/itsllyaz/F4F-Exchange',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'WakaTracker',
    description:
      'WakaTrackr is a Telegram bot that helps you track your coding habits ',
    image: '/projects/wakatracker.jpg',
    imageAlt: 'WakaTracker',
    tags: ['Python', 'Telegram', 'Database', 'Bot'],
    category: 'PYTHON',
    githubLink: 'https://github.com/itsllyaz/WakaTracker',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'xo an experimental Go library',
    description: 'Go library for X API ', 
 		image: '/projects/xo.png', 
 		imageAlt: 'xo-go-library',
    tags: ['Go', 'Library'],
    category: 'GO',
    githubLink: 'https://github.com/itsllyaz/xo',
    liveLink: '#',
  },
  {
    id: 4,
    title: 'Unofficial Hasab AI Golang SDK',
    description: 'Component library and design system documentation platform with live code previews and accessibility audits.',
 		image: '/projects/hasabai.png',
		imageAlt: 'Golang SDK',
    tags: ['Go', 'SDK'],
    category: 'GO',
    githubLink: 'https://github.com/itsllyaz/hasab-ai-golang"',
    liveLink: '#',
  },
	{
		id: 5, 
		title: "gommit | CLI Development", 
		description:"a “follow-for-follow” directory where users can log in with Twitter (X), see others, and follow/unfollow them",
		image: "/projects/gommit.png", 
		imageAlt: "gommit cli application", 
		tags: ["TypeScript", "Flask", "Database", "Frontend", "Web Development"], 
		category: "GO", 
		githubLink: "https://github.com/itsllyaz/gommit", 
		liveLink: "#", 
	}, 
	{
		id: 6, 
		title: 'Indent Rainbow for Zed', 
		description: 'Adds a fun rainbow color effect to indentation in Zed editor.Currently, this is a minimal dev extension skeleton',
		image: '/projects/zedIndent.png', 
		imageAlt: "Zed-Indent-Rainbow", 
		tags: ["Rust", "Tool"], 
		category: "RUST", 
		githubLink: "https://github.com/itsllyaz/zed-indent-rainbow", 
		liveLink: "#"
	}, 
	{
		id: 7, 
		title: "Go CRUD API with Gorilla Mux", 
		description: "This is a simple RESTful API built with Go and Gorilla Mux that allows you to manage user data. It supports basic CRUD operations:", 
		image: "/projects/gorilla.png",
		imageAlt: "Go-Gorilla-CRUD", 
		tags: ["GO", "API", "WEB DEVELOPMENT"], 
		category: "GO", 
		githubLink: "https://github.com/itsllyaz/go-crud-gorilla-mux", 
		liveLink: "#"
	}
]

const categories = ['All', 'GO', 'PYTHON', 'CLI', 'API', 'TYPESCRIPT', 'DATABASE', 'FRONTEND', 'WEB DEVELOPMENT', 'RUST', 'TOOL', 'SDK']

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-32 border-y border-black/5" id="projects">
      <div className="max-w-7xl mx-auto px-8">
			<h2 className='text-5xl font-headline  font-bold tracking-tight text-white mb-4'>Projects</h2>
			<hr />
			<br />	
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
					{/*            <h2 className="text-5xl font-headline font-bold tracking-tight text-on-background mb-4">Projects</h2> */}
            <p className="text-on-surface-variant max-w-md"></p>
          </div>	
          {/* Filter Buttons */}
          <div className="flex gap-3 overflow-x-auto scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border border-black rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
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
        <div className="grid grid-cols-1 rounded-lg md:grid-cols-3 gap-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
