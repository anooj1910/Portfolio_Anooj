import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Tools & Technologies"
          subtitle="A curated stack for building fast, beautiful, and scalable web experiences."
        />

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 items-stretch">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="content-card"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
