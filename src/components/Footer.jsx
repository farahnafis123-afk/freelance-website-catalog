import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react'

const Footer = () => {
  const whatsappNumber = '60123456789'
  const whatsappMessage = 'Hi! I am interested in your website services.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl">WebCatalog</span>
            </div>
            <p className="text-gray-400">Modern websites for small businesses at affordable prices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/catalog" className="hover:text-white">Catalog</a></li>
              <li><a href="/#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/catalog?category=bakery" className="hover:text-white">Bakery Websites</a></li>
              <li><a href="/catalog?category=beauty" className="hover:text-white">Beauty Websites</a></li>
              <li><a href="/catalog?category=photographer" className="hover:text-white">Photography Websites</a></li>
              <li><a href="/catalog?category=homestay" className="hover:text-white">Homestay Websites</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@webcatalog.com" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a href="tel:60123456789" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Phone size={18} />
                <span>Phone</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 WebCatalog. All rights reserved. | Affordable websites for small businesses</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
