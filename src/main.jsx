import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Footer />
  </React.StrictMode>,
)
