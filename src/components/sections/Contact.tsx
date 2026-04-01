"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/Button"
import { personalInfo } from "@/data/portfolio"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react"
import toast from "react-hot-toast"

const contactEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`
      window.open(mailtoLink, "_blank")
      
      toast.success("Opening email client...")
      setFormData({ name: "", email: "", message: "" })
    } catch (_error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personalInfo.social.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.social.linkedin },
    { icon: MessageCircle, label: "WhatsApp", href: personalInfo.social.whatsapp },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, ease: contactEase }}
            className="glass-panel-strong rounded-[1.8rem] border border-slate-200/75 p-7 dark:border-slate-700/70 md:p-10"
          >
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-slate-100">Let&apos;s Connect</h3>
            <p className="mb-8 mt-4 text-slate-600 dark:text-slate-300">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 290, damping: 24, mass: 0.72 }}
                  className="glass-panel flex items-center gap-4 rounded-xl border border-slate-200/75 p-3 dark:border-slate-700/65"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-500/20">
                    <Icon size={18} className="text-cyan-700 dark:text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-900 transition-colors hover:text-cyan-700 dark:text-slate-100 dark:hover:text-cyan-300">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-slate-100">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-4 text-slate-500 dark:text-slate-400">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel interactive-lift flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/75 text-slate-600 hover:text-cyan-700 dark:border-slate-700/65 dark:text-slate-300 dark:hover:text-cyan-300"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.72 }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, ease: contactEase }}
          >
            <form onSubmit={handleSubmit} className="glass-panel-strong rounded-[1.8rem] border border-slate-200/75 p-7 dark:border-slate-700/70 md:p-10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-xl border border-slate-200/75 bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-300 dark:focus:ring-cyan-400/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-xl border border-slate-200/75 bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-300 dark:focus:ring-cyan-400/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200/75 bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-300 dark:focus:ring-cyan-400/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}