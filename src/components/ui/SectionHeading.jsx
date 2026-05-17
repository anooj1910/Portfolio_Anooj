import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle, align = 'left' }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`section-heading ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
