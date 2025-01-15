'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Albin Aji
            </span>
          </h1>
          <p className="text-xl mb-8">A MERN Stack Developer</p>
          <Button size="lg" className="rounded-full">
            Explore My Work
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-primary/40 rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute inset-8 bg-primary/60 rounded-full animate-pulse animation-delay-2000" />
            <div className="absolute inset-12 bg-primary/80 rounded-full ">
            {/* <div className="absolute inset-16 bg-primary rounded-full animate-pulse animation-delay-4000"> */}
              <img
                className="w-full h-full rounded-full"
                src="https://res.cloudinary.com/dkph7vdgg/image/upload/c_crop,ar_1:1/v1734617785/WhatsApp_Image_2024-12-13_at_9.44.41_AM_cfhnkh.jpg"
                alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

