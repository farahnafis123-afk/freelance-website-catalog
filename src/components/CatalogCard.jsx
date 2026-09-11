import React from 'react'
import { ExternalLink, Shopping } from 'lucide-react'

const CatalogCard = ({ icon, title, description, category, image, onViewDemo, onGetWebsite }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-blue-400">
            <div className="text-6xl mb-2">{icon}</div>
            <p className="text-sm text-blue-300">Preview</p>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-md">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Responsive</span>
          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Modern</span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button
            onClick={onViewDemo}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 font-semibold transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">View Demo</span>
          </button>
          <button
            onClick={onGetWebsite}
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
          >
            <Shopping size={16} />
            <span className="text-sm">Get It</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
