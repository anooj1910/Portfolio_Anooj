import { useEffect, useState } from 'react'

const sections = ['home', 'services', 'about', 'skills', 'projects', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= offset) {
          setActive(sections[i])
          return
        }
      }
      setActive('home')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return active
}
