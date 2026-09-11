import React from 'react'

const HeroSection = ({ title, subtitle, ctaText, onCTA, backgroundImage }) => {
  return (
    <div
      className="relative min-h-96 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-blue-900/90"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slideUp">
          {subtitle}
        </p>
        <button
          onClick={onCTA}
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
        >
          {ctaText}
        </button>
      </div>
    </div>
  )
}

export default HeroSection
