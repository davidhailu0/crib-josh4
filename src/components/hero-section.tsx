'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SocialLinks } from './social-links'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden px-7">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <SocialLinks />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <span className="text-primary font-medium">Digital Marketing Strategist</span>
              <h1 className="heading text-5xl lg:text-7xl font-semibold">
                Josh Cheetham
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Crafting compelling digital narratives and strategies that connect brands with their audience.
              </p>
            </motion.div>
            <Button className="text-lg px-8 py-6">
              Start a Conversation
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 scale-105" />
              <Image
                src="/josh-cheetham.jpg"
                alt="Josh Cheetham"
                width={600}
                height={800}
                className="rounded-2xl relative shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}