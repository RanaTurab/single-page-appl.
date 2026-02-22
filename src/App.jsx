import React from 'react'
import Hoome from './pages/main'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './pages/About'
import ContactPage from './pages/Contact'

import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Hoome />} />
      <Route path="/about" element={ <About />} />
      <Route path="/projects" element={ <Projects />} />
    <Route path="/contact" element={ <ContactPage />} />
    

    </Routes>
      <Footer />
    </BrowserRouter>

    </div>
  
)
}

export default App
