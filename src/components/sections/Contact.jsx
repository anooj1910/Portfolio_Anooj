import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { socialLinks } from '../../data/socials'
import { profile } from '../../data/profile'
import { useForm } from '@formspree/react'

function FloatingInput({ id, label, type = 'text', as: Component = 'input', ...props }) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const isTextarea = Component === 'textarea'

  return (
    <div className="relative w-full">
      <Component
        id={id}
        type={type}
        name={props.name}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`peer w-full rounded-xl glass bg-transparent px-4 pb-3 pt-6 text-sm leading-5 text-white outline-none transition-colors placeholder:text-transparent focus:border-white/20 ${
          isTextarea ? 'min-h-36 resize-none' : 'h-14'
        }`}
        {...props}
      />

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          focused || hasValue ? 'top-2 text-xs text-[#888]' : 'top-4.5 text-sm text-[#666]'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

function ValidationError({ prefix, field, errors }) {
  const messages = errors?.[field]
  if (!messages?.length) return null

  return (
    <div className="text-sm text-rose-300">
      {messages.map((msg, idx) => (
        <div key={`${field}-${idx}`}>
          {prefix}: {msg}
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID)


  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Open to freelance projects, internships, and collaborations."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start"
        >
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 w-full">
            <div className="grid sm:grid-cols-2 gap-5">
              <FloatingInput
                id="name"
                name="name"
                label="Your Name"
                required
                placeholder=""
              />
              <FloatingInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                required
                placeholder=""
              />
            </div>

            {state.errors?.email?.length ? (
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            ) : null}

            <FloatingInput
              id="subject"
              name="subject"
              label="Subject"
              required
              placeholder=""
            />

            <FloatingInput
              id="message"
              name="message"
              label="Your Message"
              as="textarea"
              rows={5}
              required
              placeholder=""
            />

            {state.errors?.message?.length ? (
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            ) : null}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={state.submitting || state.succeeded}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-white glass transition-colors hover:bg-white/10 sm:w-auto disabled:opacity-60"
            >
              {state.submitting
                ? 'Sending...'
                : state.succeeded
                  ? 'Message Sent'
                  : 'Send Message'}
            </motion.button>

            <div aria-live="polite" className="min-h-5 text-sm text-emerald-300">
              {state.succeeded ? <span>Message sent successfully!</span> : null}
            </div>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-5 lg:pt-2">
            <div className="contact-row">
              <FiMail size={18} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-row">
              <FiPhone size={18} />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
            <div className="contact-row">
              <FiMapPin size={18} />
              <span>{profile.location}</span>
            </div>
            <div className="flex gap-3 pt-2">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

