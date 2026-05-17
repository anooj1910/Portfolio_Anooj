import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { scrollToSection } from '../../utils/scroll'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useActiveSection()

  const handleNav = (id) => {
    scrollToSection(id)
  }

  return (
    <>
      <header className="pt-5 md:pt-7 px-4 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          <nav className="nav-pill flex overflow-x-auto max-w-full scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="nav-link shrink-0"
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="nav-link-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
