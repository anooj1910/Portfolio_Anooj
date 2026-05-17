import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import AnimatedCounter from '../ui/AnimatedCounter'
import { profile } from '../../data/profile'

const approachCards = [
  {
    title: 'Web Development',
    description:
      'Building responsive apps and portals with React, Firebase, and PHP — focused on clean code and real-world usability.',
  },
  {
    title: 'Creative Media',
    description:
      '4+ years of photography and videography experience, bringing visual storytelling to brands and events.',
  },
  {
    title: 'Digital Leadership',
    description:
      'Leading social media for ISTE and NSS — strategy, content creation, and campaigns that drive engagement.',
  },
]

const stats = [
  { value: 4, suffix: '+', label: 'Years Photography' },
  { value: 3, suffix: '+', label: 'Social Media Lead' },
  { value: 3, suffix: '+', label: 'Major Projects' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="About"
          title="Developer & Creative Professional"
          subtitle={profile.tagline}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#888] text-base md:text-lg leading-[1.7]"
          >
            {profile.bio}
          </motion.p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="content-card stat-card"
              >
                <p className="stat-value">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-[4.5rem] space-y-[4.5rem] md:mt-24 md:space-y-24">
          {/* Education */}
          <div>
            <h3 className="section-block-title">Education</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-stretch">
              {profile.education.map((edu) => (
                <div key={edu.school} className="content-card">
                  <p className="text-xs text-[#666] uppercase tracking-wide mb-2">
                    {edu.period}
                  </p>
                  <h4 className="font-display text-lg font-semibold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#888] mt-2 leading-relaxed">
                    {edu.school}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="section-block-title">Experience</h3>
            <div className="space-y-4">
              {profile.experience.map((exp) => (
                <motion.div
                  key={exp.role + exp.org}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="content-card"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-display text-lg font-semibold text-white">
                      {exp.role}
                    </h4>
                    {exp.period && (
                      <span className="text-xs text-[#666] shrink-0">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-white/70 mb-2">{exp.org}</p>
                  <p className="text-sm text-[#888] leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div>
            <h3 className="section-block-title">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-stretch">
              {approachCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="content-card"
                >
                  <span className="text-xs text-[#666] font-mono">0{i + 1}</span>
                  <h4 className="font-display text-lg font-semibold text-white mt-3 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-[#888] leading-relaxed flex-1">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
