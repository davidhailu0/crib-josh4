'use client'
import { PenTool, Search, Share2 } from 'lucide-react'
import { ServiceCard } from './service-card'

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Services</span>
          <h2 className="heading text-4xl font-semibold mt-4">
            Expert Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={PenTool}
            title="Content Strategy"
            description="Develop comprehensive content plans that align with your brand voice and business goals."
            delay={0.2}
          />
          <ServiceCard
            icon={Search}
            title="SEO Optimization"
            description="Improve your online visibility and drive organic traffic through expert SEO techniques."
            delay={0.4}
          />
          <ServiceCard
            icon={Share2}
            title="Social Media Management"
            description="Build and engage your audience across platforms with tailored social media strategies."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}