import { motion } from 'framer-motion'
import { socialLinks } from '../../data/socials'
import { profile } from '../../data/profile'
import { useMouseParallax } from '../../hooks/useMouseParallax'

export default function Hero() {
  const imageRef = useMouseParallax(10)

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center section-padding !pt-28 md:!pt-36 overflow-hidden"
    >
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left z-10">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-[#888] tracking-wide block"
            >
              Hello, I&apos;m{' '}
              <span className="text-white font-medium">{profile.name}</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mt-4 text-white"
            >
              Developer{' '}
              <span className="text-gradient">& Photographer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-5 text-[#888] text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
             Computer Engineering student passionate about building modern and creative web experiences using React, Tailwind CSS, and JavaScript.
             Combining clean code, creative UI design, and photography to create visually engaging and user-focused digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="/cv.pdf"
                download="Anooj_Panchal_Resume.pdf"
                className="btn-download"
              >
                Download CV
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ id, icon: Icon, href, label }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#888] hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Cutout portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <motion.div
              ref={imageRef}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-cutout-wrap"
            >
              <div className="hero-cutout-glow" aria-hidden />
              <img
                src="anooj.png"
                alt={profile.name}
                className="hero-cutout-img"
                width={620}
                height={750}
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
