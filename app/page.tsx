import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
 	// live with out me... 
	return (
    <>
      <Navigation  />
      <main className="flex-grow pb-24">
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
