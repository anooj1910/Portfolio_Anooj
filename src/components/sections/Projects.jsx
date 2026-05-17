import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          subtitle="Technical projects built during my Computer Engineering journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="project-card glass-card group"
            >
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-white"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="font-display text-lg font-semibold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
