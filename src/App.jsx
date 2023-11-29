import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Tentang from './pages/Tentang'
import Portofolio from './pages/Portofolio'
import Minimalis from './pages/Minimalis'
import Klasik from './pages/Klasik'
import Industrial from './pages/Industrial'
import Interior from './pages/Interior'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<Tentang/>} />
          <Route path="/Portofolio" element={<Portofolio/>} />
          <Route path="/Minimalis" element={<Minimalis/>} />
          <Route path="/Klasik" element={<Klasik/>} />
          <Route path="/Industrial" element={<Industrial/>} />
          <Route path="/Interior" element={<Interior/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
