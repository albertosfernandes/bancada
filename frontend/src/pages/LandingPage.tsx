import { PublicNavbar } from '../components/PublicNavbar'
import { Hero } from '../components/landing/Hero'
import { About } from '../components/landing/About'
import { Architecture } from '../components/landing/Architecture'
import { Stack } from '../components/landing/Stack'
import { Roadmap } from '../components/landing/Roadmap'
import { Footer } from '../components/landing/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <Hero />
      <About />
      <Architecture />
      <Stack />
      <Roadmap />
      <Footer />
    </div>
  )
}
