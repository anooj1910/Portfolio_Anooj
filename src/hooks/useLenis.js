import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from '../utils/scroll'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    setLenis(lenis)
    document.documentElement.classList.add('lenis')

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      setLenis(null)
      document.documentElement.classList.remove('lenis')
      lenis.destroy()
    }
  }, [])
}
