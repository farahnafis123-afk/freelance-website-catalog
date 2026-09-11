import React from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const whatsappNumber = '60123456789' // Example WhatsApp number
  const whatsappMessage = 'Hi! I am interested in your website catalog.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">WebCatalog</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">Catalog</a>
            <a href="/#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
            <a href="/catalog" className="block text-gray-700 hover:text-blue-600 py-2">Catalog</a>
            <a href="/#pricing" className="block text-gray-700 hover:text-blue-600 py-2">Pricing</a>
            <a href="/#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full justify-center"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
