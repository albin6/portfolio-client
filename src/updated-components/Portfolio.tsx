import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-6 transform origin-top-right hidden md:block"
        />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Portfolio
