import { motion } from 'framer-motion'
import { socialLinks } from '../../data/socials'
import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-padding !py-12 border-t border-white/[0.06]"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="text-sm text-[#888] mt-1">{profile.title}</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map(({ id, icon: Icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#888] hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-[#666] text-center md:text-right">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
