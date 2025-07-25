import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Demo } from './components/Demo'
import { Testimonials } from './components/Testimonials'
import { MobileApp } from './components/MobileApp'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <MobileApp />
      <Footer />
    </div>
  )
}

export default App