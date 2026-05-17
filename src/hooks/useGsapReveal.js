import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && elements.length && [...elements].includes(st.trigger)) {
          st.kill()
        }
      })
    }
  }, [selector])
}
