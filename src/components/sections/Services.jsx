import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Services"
          title="What I Do"
          subtitle="Delivering premium digital solutions with precision, performance, and modern aesthetics."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-5 md:gap-6 items-stretch"
        >
          {services.map((service) => (
            <motion.article key={service.id} variants={item} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <hr className="service-card-divider" />
              <div className="service-card-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
