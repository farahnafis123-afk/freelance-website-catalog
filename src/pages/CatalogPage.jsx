import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryFilter from '../components/CategoryFilter'
import CatalogCard from '../components/CatalogCard'
import { catalogData, categories } from '../data/catalogData'

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchTerm, setSearchTerm] = useState('')

  const whatsappNumber = '60123456789'
  const whatsappMessage = 'Hi! I am interested in getting a website. Can you help me?'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // Filter and search logic
  const filteredCatalog = useMemo(() => {
    return catalogData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setSearchParams({ category: categoryId })
  }

  const handleViewDemo = (demoUrl) => {
    window.location.href = demoUrl
  }

  const handleGetWebsite = (template) => {
    const message = `Hi! I am interested in the ${template.title} template. Can you provide more details?`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Templates Catalog</h1>
          <p className="text-xl text-blue-100">Choose from our collection of professional, ready-to-use website templates</p>
        </div>
      </div>

      {/* Filter Section */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCatalog.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">
              Showing <span className="font-bold">{filteredCatalog.length}</span> template(s)
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCatalog.map((template) => (
                <CatalogCard
                  key={template.id}
                  icon={template.icon}
                  title={template.title}
                  description={template.description}
                  category={template.categoryLabel}
                  onViewDemo={() => handleViewDemo(template.demoUrl)}
                  onGetWebsite={() => handleGetWebsite(template)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No templates found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                handleCategoryChange('all')
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8">We can customize any template to match your business perfectly. Contact us via WhatsApp!</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 font-bold text-lg"
          >
            Chat with us
          </a>
        </div>
      </section>
    </div>
  )
}

export default CatalogPage