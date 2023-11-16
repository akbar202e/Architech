import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Tentang from './pages/Tentang'
import NotFound from './pages/NotFound'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<Tentang/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
  )
}

export default App
