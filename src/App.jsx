import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DesainArsitektur from "./pages/DesainArsitektur";
import DesainInterior from "./pages/DesainInterior";
import Pelaksanaan from "./pages/Pelaksanaan";
import Tentang from "./pages/Tentang";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/desainarsitek" element={<DesainArsitektur />} />
        <Route path="/desaininterior" element={<DesainInterior />} />
        <Route path="/pelaksanaan" element={<Pelaksanaan />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
