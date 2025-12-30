"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Debug info */}
      <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-2 rounded text-sm">
        Portfolio Loaded ✓
      </div>
      
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}