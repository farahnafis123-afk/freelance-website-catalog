import React from 'react'
import { Check } from 'lucide-react'

const PricingCard = ({ title, price, features, highlighted, onSelect }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        highlighted
          ? 'ring-2 ring-blue-600 shadow-2xl scale-105'
          : 'shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Header */}
      <div className={`px-8 py-8 ${
        highlighted
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
          : 'bg-gray-50'
      }`}>
        {highlighted && (
          <div className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-3">
            ⭐ Most Popular
          </div>
        )}
        <h3 className={`text-2xl font-bold mb-2 ${
          highlighted ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <div className="flex items-baseline">
          <span className={`text-4xl font-bold ${
            highlighted ? 'text-white' : 'text-blue-600'
          }`}>
            RM{price}
          </span>
          <span className={`ml-2 ${
            highlighted ? 'text-blue-100' : 'text-gray-600'
          }`}>
            one-time
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="px-8 py-8 bg-white">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={onSelect}
          className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
            highlighted
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Choose {title}
        </button>
      </div>
    </div>
  )
}

export default PricingCard
