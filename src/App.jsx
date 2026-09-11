import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import BakeryDemo from './pages/demos/BakeryDemo'
import BeautyDemo from './pages/demos/BeautyDemo'
import PhotographerDemo from './pages/demos/PhotographerDemo'
import HomestayDemo from './pages/demos/HomestayDemo'
import FashionDemo from './pages/demos/FashionDemo'
import FreelancerDemo from './pages/demos/FreelancerDemo'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/demo/bakery" element={<BakeryDemo />} />
          <Route path="/demo/beauty" element={<BeautyDemo />} />
          <Route path="/demo/photographer" element={<PhotographerDemo />} />
          <Route path="/demo/homestay" element={<HomestayDemo />} />
          <Route path="/demo/fashion" element={<FashionDemo />} />
          <Route path="/demo/freelancer" element={<FreelancerDemo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App