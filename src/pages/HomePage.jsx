import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Zap, Globe, Smartphone } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import PricingCard from '../components/PricingCard'
import Testimonial from '../components/Testimonial'
import { catalogData, pricingPlans, testimonials } from '../data/catalogData'

const HomePage = () => {
  const whatsappNumber = '60123456789'
  const whatsappMessage = 'Hi! I am interested in your website services.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const handlePricingCTA = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Affordable Websites for Your Small Business"
        subtitle="Professional, modern, mobile-responsive websites starting at just RM499. Perfect for bakeries, beauty services, photographers, and more."
        ctaText="Browse Templates"
        onCTA={() => window.location.href = '/catalog'}
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose WebCatalog?</h2>
          <p className="section-subtitle text-center">Everything you need to succeed online</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="w-12 h-12 text-blue-600" />,
                title: 'Mobile Responsive',
                description: 'Your website looks perfect on phones, tablets, and desktops.'
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: 'Fast & Modern',
                description: 'Built with latest technology for excellent performance.'
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: 'Easy to Manage',
                description: 'Simple admin panel to update content without coding.'
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
                title: 'WhatsApp Ready',
                description: 'Built-in WhatsApp integration for customer inquiries.'
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Templates</h2>
          <p className="section-subtitle text-center">Browse 6 professional website templates</p>

          <div className="grid md:grid-cols-3 gap-8">
            {catalogData.slice(0, 3).map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-6xl">{template.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{template.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                  <Link
                    to={template.demoUrl}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>View Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Simple Transparent Pricing</h2>
          <p className="section-subtitle text-center">Choose the perfect plan for your business</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                highlighted={plan.highlighted}
                onSelect={handlePricingCTA}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="section-subtitle text-center">Real reviews from real business owners</p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                business={testimonial.business}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Online?</h2>
          <p className="text-xl text-blue-100 mb-8">Get your professional website today. Contact us via WhatsApp for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 font-bold text-lg"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/catalog"
              className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-bold text-lg"
            >
              <span>Browse Catalog</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage