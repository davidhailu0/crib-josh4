'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-20 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-4xl text-center"
      >
        <span className="text-primary font-medium">About Me</span>
        <h2 className="heading text-4xl font-semibold mt-4 mb-8">
          Transforming Digital Landscapes
        </h2>
        <p className="text-muted text-lg leading-relaxed">
          With over a decade of experience in digital marketing, I specialize in crafting data-driven strategies
          that elevate brands and drive meaningful engagement. My approach combines creative storytelling with
          analytical precision to deliver exceptional results for businesses of all sizes.
        </p>
      </motion.div>
    </section>
  )
}