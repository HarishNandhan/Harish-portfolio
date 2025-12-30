"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { aboutMe, personalInfo } from "@/data/portfolio"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{personalInfo.fullName}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-6">{personalInfo.role}</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <MapPin size={18} className="text-purple-500" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <GraduationCap size={18} className="text-purple-500" />
                      <span>MS Data Science @ CU Boulder</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Briefcase size={18} className="text-purple-500" />
                      <span>Seeking full time positions starting from May 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {aboutMe}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Projects", value: "16+" },
                { label: "Technologies", value: "30+" },
                { label: "Internships", value: "4" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}