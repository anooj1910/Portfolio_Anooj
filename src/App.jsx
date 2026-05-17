import { useState, useEffect } from 'react'
import LoadingScreen from './components/layout/LoadingScreen'
import ScrollProgress from './components/layout/ScrollProgress'
import CursorGlow from './components/layout/CursorGlow'
import Particles from './components/layout/Particles'
import BackgroundGradients from './components/layout/BackgroundGradients'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <ScrollProgress />
      <CursorGlow />
      <Particles />
      <BackgroundGradients />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
